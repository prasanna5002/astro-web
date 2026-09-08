#!/usr/bin/env node
/*
 * reissue.js — v1.0.1 இந்து-தின திருத்தத்தால் பாதிக்கப்பட்ட ஜாதகங்களைக் கண்டறிந்து
 *              திருத்தப்பட்ட அறிக்கைகளை (PDF) மீண்டும் உருவாக்கும் கருவி.
 *
 * பாதிப்பு விதி: பிறந்த நேரம் அன்றைய சூரிய உதயத்திற்கு முன் எனில், பழைய பதிப்பு
 * கிழமை / திதி / நட்சத்திரம் / தமிழ் தேதி / ராகு காலம் ஆகியவற்றை ஒரு நாள் தவறாகக்
 * காட்டியிருக்கும். கிரக நிலைகள், லக்னம், தசா ஆகியவை பாதிக்கப்படவில்லை.
 *
 * பயன்பாடு:
 *   node tools/reissue.js clients.csv              # பாதிக்கப்பட்டவர்களைப் பட்டியலிடு மட்டும்
 *   node tools/reissue.js clients.csv --pdf        # பாதிக்கப்பட்டவர்களுக்கு PDF உருவாக்கு
 *   node tools/reissue.js clients.csv --pdf --all  # அனைவருக்கும் PDF
 *   ... --out DIR --scope essential
 *
 * CSV தலைப்பு (வரிசை முக்கியமில்லை):  name,dob,tob,lat,lng,tz,place
 *   dob = YYYY-MM-DD, tob = HH:MM (24h, உள்ளூர் நேரம்), tz = எ.கா. 5.5
 */

const fs = require("fs");
const path = require("path");
const { execFileSync, spawn } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const A = require(path.join(ROOT, "astronomy.browser.min.js"));

// ---------- CSV ----------
function parseCsv(text) {
  const lines = text.split(/\r?\n/).filter(l => l.trim() && !l.trim().startsWith("#"));
  if (!lines.length) throw new Error("CSV காலியாக உள்ளது");
  const head = lines[0].split(",").map(h => h.trim().toLowerCase());
  const need = ["name", "dob", "tob", "lat", "lng", "tz"];
  const missing = need.filter(n => !head.includes(n));
  if (missing.length) throw new Error("CSV-இல் இக்கள‌ங்கள் இல்லை: " + missing.join(", "));
  return lines.slice(1).map((line, i) => {
    const cells = line.split(",").map(c => c.trim());
    const row = {};
    head.forEach((h, k) => { row[h] = cells[k] !== undefined ? cells[k] : ""; });
    row.__line = i + 2;
    return row;
  });
}

// ---------- சூரிய உதயம் (app.js / panchangam.js அதே முறை) ----------
function sunriseLocalHours(y, m, d, lat, lng, tz) {
  const obs = new A.Observer(lat, lng, 0);
  const localMidnightUtc = new Date(Date.UTC(y, m - 1, d) - tz * 3600000);
  const rise = A.SearchRiseSet(A.Body.Sun, obs, +1, localMidnightUtc, 1.5);
  if (!rise) return null;
  const local = new Date(rise.date.getTime() + tz * 3600000);
  return local.getUTCHours() + local.getUTCMinutes() / 60;
}
const hhmm = h => h == null ? "--:--"
  : `${String(Math.floor(h)).padStart(2, "0")}:${String(Math.round((h % 1) * 60)).padStart(2, "0")}`;

function assess(row) {
  const [y, m, d] = String(row.dob).split("-").map(Number);
  const [hh, mi] = String(row.tob).split(":").map(Number);
  const lat = parseFloat(row.lat), lng = parseFloat(row.lng), tz = parseFloat(row.tz);
  if ([y, m, d, hh, mi, lat, lng, tz].some(v => !isFinite(v)))
    return { ...row, error: "தவறான/விடுபட்ட மதிப்பு" };
  const rise = sunriseLocalHours(y, m, d, lat, lng, tz);
  if (rise == null) return { ...row, error: "சூரிய உதயம் கணிக்க இயலவில்லை (துருவப் பகுதி?)" };
  const birth = hh + mi / 60;
  return { ...row, lat, lng, tz, rise, birth, affected: birth < rise };
}

// ---------- PDF ----------
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
function chartUrl(base, r, scope) {
  const q = new URLSearchParams({
    dob: r.dob, tob: r.tob, lat: String(r.lat), lng: String(r.lng),
    tz: String(r.tz), place: r.place || "", name: r.name || "", auto: "1"
  });
  if (scope) q.set("scope", scope);
  return `${base}/index.html?${q}`;
}
// \p{M} அவசியம் — தமிழ் உயிர்மெய்க் குறியீடுகள் (ா, ி, ீ …) இணைப்புக் குறிகள்;
// அவற்றை நீக்கினால் "பிரியா" → "ப_ர_ய_" எனச் சிதைந்துவிடும்.
const safe = s => (s || "chart").replace(/[^\p{L}\p{M}\p{N}_-]+/gu, "_").slice(0, 60);

function makePdf(base, row, outDir, scope) {
  const file = path.join(outDir, `${safe(row.name)}_${row.dob}.pdf`);
  execFileSync(CHROME, [
    "--headless=new", "--disable-gpu", "--no-sandbox",
    "--run-all-compositor-stages-before-draw", "--virtual-time-budget=25000",
    "--no-pdf-header-footer", `--print-to-pdf=${file}`, chartUrl(base, row, scope)
  ], { stdio: "ignore", timeout: 120000 });
  const pages = (fs.readFileSync(file).toString("latin1").match(/\/Type\s*\/Page[^s]/g) || []).length;
  return { file, pages };
}

// ---------- main ----------
const args = process.argv.slice(2);
const csvPath = args.find(a => !a.startsWith("--"));
const wantPdf = args.includes("--pdf");
const doAll = args.includes("--all");
const outDir = (args[args.indexOf("--out") + 1] && args.includes("--out"))
  ? path.resolve(args[args.indexOf("--out") + 1]) : path.join(ROOT, "reissued");
const scope = args.includes("--scope") ? args[args.indexOf("--scope") + 1] : null;

if (!csvPath) {
  console.error("பயன்பாடு: node tools/reissue.js clients.csv [--pdf] [--all] [--out DIR] [--scope essential]");
  process.exit(1);
}

const rows = parseCsv(fs.readFileSync(csvPath, "utf8")).map(assess);
const errors = rows.filter(r => r.error);
const affected = rows.filter(r => !r.error && r.affected);
const ok = rows.filter(r => !r.error && !r.affected);

console.log(`\nமொத்தம் ${rows.length} ஜாதகங்கள் — பாதிக்கப்பட்டவை ${affected.length}, பாதிப்பில்லை ${ok.length}` +
            (errors.length ? `, பிழை ${errors.length}` : "") + "\n");

if (affected.length) {
  console.log("பாதிக்கப்பட்டவை (பிறப்பு சூரிய உதயத்திற்கு முன் — கிழமை/திதி/தமிழ் தேதி/ராகு காலம் ஒரு நாள் தவறு):");
  affected.forEach(r => console.log(
    `  • ${(r.name || "(பெயரில்லை)").padEnd(18)} ${r.dob}  பிறப்பு ${r.tob}  உதயம் ${hhmm(r.rise)}  ${r.place || ""}`));
  console.log("");
}
if (errors.length) {
  console.log("பிழையான வரிகள்:");
  errors.forEach(r => console.log(`  • வரி ${r.__line}: ${r.name || ""} — ${r.error}`));
  console.log("");
}

if (!wantPdf) {
  console.log("PDF உருவாக்க:  node tools/reissue.js " + path.basename(csvPath) + " --pdf");
  process.exit(0);
}

const targets = doAll ? rows.filter(r => !r.error) : affected;
if (!targets.length) { console.log("PDF உருவாக்க எதுவும் இல்லை."); process.exit(0); }
if (!fs.existsSync(CHROME)) { console.error("Google Chrome காணப்படவில்லை: " + CHROME); process.exit(1); }
fs.mkdirSync(outDir, { recursive: true });

// அறிக்கை உருவாக்க ஒரு தற்காலிக சேவையகம் (file:// வேலை செய்யாது)
const PORT = 8749, base = `http://localhost:${PORT}`;
const srv = spawn("python3", ["-m", "http.server", String(PORT)], { cwd: ROOT, stdio: "ignore" });
const stop = () => { try { srv.kill(); } catch (e) {} };
process.on("exit", stop); process.on("SIGINT", () => { stop(); process.exit(130); });

setTimeout(() => {
  console.log(`PDF உருவாக்கம் → ${outDir}\n`);
  let done = 0;
  for (const r of targets) {
    try {
      const { file, pages } = makePdf(base, r, outDir, scope);
      done++;
      console.log(`  ✓ ${path.basename(file)}  (${pages} பக்கம்)`);
    } catch (e) {
      console.log(`  ✗ ${r.name || r.dob} — ${e.message.split("\n")[0]}`);
    }
  }
  console.log(`\nமுடிந்தது: ${done}/${targets.length} அறிக்கைகள்.`);
  stop();
}, 1200);

// ==========================================================
// முழு ஜாதக ஒப்பீடு — இரு ஜாதகங்களை அருகருகே ஒப்பிடுதல்
// app.js, panchangam.js, predictions.js, parikaram.js ஏற்றப்பட்ட பிறகு இயங்கும்
// நபர் 1 = கணிக்கப்பட்ட ஜாதகம்; நபர் 2 = இங்கு உள்ளிடப்படும் பிறப்பு விவரம்
// ==========================================================

// ----------------------------------------------------------
// 1. UI தொகுதி — பொருத்தம் பேனலில் இணைக்கப்படும்
// ----------------------------------------------------------
function ensureCompareBlock() {
  const host = document.querySelector("#panel-porutham .detail-block");
  if (!host || document.getElementById("compare-block")) return;
  const meta = currentHoroscopeData ? currentHoroscopeData.meta : { lat: 13.0827, lng: 80.2707, tz: 5.5 };
  const tzOpts = Array.from(document.getElementById("timezone")?.options || []).map(o => `<option value="${o.value}" ${parseFloat(o.value) === meta.tz ? "selected" : ""}>${o.textContent}</option>`).join("");
  host.insertAdjacentHTML("beforeend", `
    <div id="compare-block" style="margin-top:2rem;padding-top:1.5rem;border-top:1px solid rgba(229,193,88,0.25);">
      <h3 style="color:var(--primary-gold);margin-bottom:0.5rem;font-size:1.15rem;display:flex;align-items:center;gap:0.5rem;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="9" height="18" rx="1"/><rect x="13" y="3" width="9" height="18" rx="1"/></svg>
        <span class="lang-ta">முழு ஜாதக ஒப்பீடு (இரு ஜாதகங்கள்)</span>
      </h3>
      <p class="reading-meta" style="margin-bottom:1rem;">நபர் 1 — மேலே கணிக்கப்பட்ட ஜாதகம். நபர் 2-இன் பிறப்பு விவரங்களை உள்ளிட்டால் இரு ராசிச் சக்கரங்களும் அருகருகே காட்டப்பட்டு, பரஸ்பர செவ்வாய் தோஷம், தசா சந்தி நெருக்கம், அதிபதி நட்பு, 7-ம் வீடு நிலை மற்றும் 10 பொருத்தம்/அஷ்டகூடம் அனைத்தும் ஒப்பிடப்படும்.</p>
      <div class="form-row" style="margin-bottom:0.75rem;">
        <div class="form-group"><label for="cmp-name">நபர் 2 பெயர்</label><input type="text" id="cmp-name" placeholder="பெயர் (விருப்பம்)"></div>
        <div class="form-group"><label for="cmp-date">பிறந்த தேதி</label><input type="date" id="cmp-date"></div>
        <div class="form-group"><label for="cmp-time">பிறந்த நேரம்</label><input type="time" id="cmp-time"></div>
      </div>
      <div class="form-row" style="margin-bottom:1rem;">
        <div class="form-group"><label for="cmp-lat">அட்சரேகை</label><input type="number" step="0.0001" id="cmp-lat" value="${meta.lat}"></div>
        <div class="form-group"><label for="cmp-lng">தீர்க்கரேகை</label><input type="number" step="0.0001" id="cmp-lng" value="${meta.lng}"></div>
        <div class="form-group"><label for="cmp-tz">நேர மண்டலம்</label><select id="cmp-tz">${tzOpts || `<option value="5.5" selected>இந்தியா (IST - UTC+5:30)</option>`}</select></div>
      </div>
      <p class="reading-meta" style="margin-bottom:0.75rem;">அட்சரேகை/தீர்க்கரேகை நபர் 1-இன் பிறந்த இடத்திலிருந்து முன்நிரப்பப்பட்டுள்ளது — வேறு ஊர் எனில் மாற்றவும் (மேலே உள்ள இடத் தேடலில் ஊரைத் தேடினால் புள்ளிகள் கிடைக்கும்).</p>
      <button type="button" class="secondary-btn" style="margin-bottom:1.5rem;" onclick="runChartComparison()">ஒப்பீடு செய்</button>
      <div id="compare-results"></div>
    </div>`);
}

// ----------------------------------------------------------
// 2. நபர் 2 ஜாதகக் கணிப்பு (app.js-இன் calculateAstrology அதே வழி)
// ----------------------------------------------------------
function computeChartFor(dateStr, timeStr, lat, lng, tz) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const [hh, mi] = timeStr.split(":").map(Number);
  const localEpoch = Date.UTC(y, m - 1, d, hh, mi, 0);
  const utcDate = new Date(localEpoch - tz * 3600000);
  const astroTime = Astronomy.MakeTime(utcDate);
  const civilWeekday = new Date(y, m - 1, d).getDay();
  const birth = calculateAllPositions(astroTime, lat, lng, tz, utcDate, y, m, d, civilWeekday);
  return { birth, transit: birth, activeChart: "D1", meta: { lat, lng, tz, birthDate: utcDate, civilWeekday, year: y, month: m, day: d } };
}

// ----------------------------------------------------------
// 3. பகுப்பாய்வு உதவிகள்
// ----------------------------------------------------------
const CMP_ALL = ["sun", "moon", "mars", "mercury", "jupiter", "venus", "saturn", "rahu", "ketu"];
const cmpSign = (bd, p) => Math.floor(bd[p] / 30) % 12;
const cmpHouseFrom = (bd, p, refSign) => (cmpSign(bd, p) - refSign + 12) % 12 + 1;

// செவ்வாய் தோஷம் — லக்னம், சந்திரன், சுக்கிரன் ஆகிய மூன்றிலிருந்தும் 1,2,4,7,8,12-ல் செவ்வாய்
function cmpSevvaiDosham(bd) {
  const refs = { "லக்னம்": Math.floor(bd.lagna / 30) % 12, "சந்திரன்": cmpSign(bd, "moon"), "சுக்கிரன்": cmpSign(bd, "venus") };
  const from = [];
  Object.keys(refs).forEach(k => { const h = cmpHouseFrom(bd, "mars", refs[k]); if ([1, 2, 4, 7, 8, 12].includes(h)) from.push(`${k}-லிருந்து ${h}-ல்`); });
  const st = getPlanetState("mars", cmpSign(bd, "mars"));
  const softened = st === "own" || st === "exalted";
  // மேஷம்/விருச்சிகம்/மகரம்/கடகம்-இல் செவ்வாய் — மரபு விலக்குகள்
  const exemptSign = [0, 7, 9, 3].includes(cmpSign(bd, "mars"));
  return { has: from.length > 0, from, softened: softened || exemptSign, strength: from.length };
}

// விம்சோத்தரி தசைகள் பட்டியல் (பிறப்பு முதல் 9 தசைகள்)
function cmpDasaList(moonSid, birthMs) {
  const order = ["ketu", "venus", "sun", "moon", "mars", "rahu", "jupiter", "saturn", "mercury"];
  const years = { ketu: 7, venus: 20, sun: 6, moon: 10, mars: 7, rahu: 18, jupiter: 16, saturn: 19, mercury: 17 };
  const YEAR = 365.25 * 86400000, NAK = 360 / 27;
  let idx = Math.floor(moonSid / NAK) % 27 % 9;
  let t = birthMs - ((moonSid % NAK) / NAK) * years[order[idx]] * YEAR;
  const out = [];
  for (let k = 0; k < 9; k++) { const lord = order[idx]; const end = t + years[lord] * YEAR; out.push({ lord, start: t, end }); t = end; idx = (idx + 1) % 9; }
  return out;
}

function cmpFriendship(a, b) {
  if (a === b) return { grade: 2, text: "ஒரே அதிபதி" };
  const fa = PLANET_FRIENDS[a] || { friends: [], enemies: [] }, fb = PLANET_FRIENDS[b] || { friends: [], enemies: [] };
  const af = fa.friends.includes(b), bf = fb.friends.includes(a), ae = fa.enemies.includes(b), be = fb.enemies.includes(a);
  if (af && bf) return { grade: 2, text: "பரஸ்பர நண்பர்கள்" };
  if (ae && be) return { grade: 0, text: "பரஸ்பர பகை" };
  if (ae || be) return { grade: 0, text: "ஒருதலைப் பகை" };
  if (af || bf) return { grade: 1, text: "ஒருதலை நட்பு" };
  return { grade: 1, text: "சமம்" };
}

const cmpMalefics7 = bd => ["saturn", "rahu", "ketu", "mars", "sun"].filter(p => cmpHouseFrom(bd, p, Math.floor(bd.lagna / 30) % 12) === 7);

// ----------------------------------------------------------
// 4. ஒப்பீடு இயக்கம்
// ----------------------------------------------------------
function runChartComparison() {
  const out = document.getElementById("compare-results");
  if (!out) return;
  if (!currentHoroscopeData) { out.innerHTML = '<p class="reading-meta" style="color:#ffb347;">முதலில் மேலே நபர் 1-இன் ஜாதகத்தைக் கணக்கிடவும்.</p>'; return; }
  const dateStr = document.getElementById("cmp-date").value, timeStr = document.getElementById("cmp-time").value;
  const lat = parseFloat(document.getElementById("cmp-lat").value), lng = parseFloat(document.getElementById("cmp-lng").value), tz = parseFloat(document.getElementById("cmp-tz").value);
  if (!dateStr || !timeStr || !isFinite(lat) || !isFinite(lng) || !isFinite(tz)) { out.innerHTML = '<p class="reading-meta" style="color:#ffb347;">நபர் 2-இன் தேதி, நேரம், அட்சரேகை, தீர்க்கரேகை, நேர மண்டலம் அனைத்தையும் உள்ளிடவும்.</p>'; return; }

  let P2;
  try { P2 = computeChartFor(dateStr, timeStr, lat, lng, tz); }
  catch (e) { console.error(e); out.innerHTML = '<p class="reading-meta" style="color:#ff5555;">நபர் 2 ஜாதகக் கணிப்பில் பிழை — விவரங்களைச் சரிபார்க்கவும்.</p>'; return; }
  const P1 = currentHoroscopeData;
  const n1 = (document.getElementById("user-name")?.value || "").trim() || "நபர் 1";
  const n2 = (document.getElementById("cmp-name")?.value || "").trim() || "நபர் 2";

  const basics = P => {
    const nak = getNakshatraInfo(P.birth.moon);
    const cur = computeCurrentDasaBhukti(P.birth.moon, P.meta.birthDate.getTime(), Date.now());
    return { rasi: cmpSign(P.birth, "moon"), lagna: Math.floor(P.birth.lagna / 30) % 12, nak, cur };
  };
  const B1 = basics(P1), B2 = basics(P2);
  const fmt = ms => new Date(ms).toLocaleDateString("ta-IN", { year: "numeric", month: "short" });
  const fmtD = ms => new Date(ms).toLocaleDateString("ta-IN", { year: "numeric", month: "short", day: "numeric" });

  // --- செவ்வாய் தோஷம் ---
  const S1 = cmpSevvaiDosham(P1.birth), S2 = cmpSevvaiDosham(P2.birth);
  let sevVerdict, sevColor, sevGrade;
  const eff1 = S1.has && !S1.softened, eff2 = S2.has && !S2.softened;
  if (!eff1 && !eff2) { sevVerdict = "இருவருக்கும் செவ்வாய் தோஷம் இல்லை (அல்லது விலக்குப் பெற்றது) — பொருத்தம்."; sevColor = "#55ff55"; sevGrade = 2; }
  else if (eff1 && eff2) { sevVerdict = "இருவருக்கும் செவ்வாய் தோஷம் உள்ளது — தோஷம் பரஸ்பரம் சமநிலை அடைந்து பொருத்தம் ஆகிறது."; sevColor = "#a0e860"; sevGrade = 2; }
  else { sevVerdict = `${eff1 ? n1 : n2}-க்கு மட்டும் செவ்வாய் தோஷம் உள்ளது; ${eff1 ? n2 : n1}-க்கு இல்லை — தோஷ சமநிலை இல்லை. ஜோதிடர் ஆலோசனையும் பரிகாரமும் அவசியம்.`; sevColor = "#ff5555"; sevGrade = 0; }

  // --- தசா சந்தி ---
  const now = Date.now(), YEAR = 365.25 * 86400000;
  const D1 = cmpDasaList(P1.birth.moon, P1.meta.birthDate.getTime()), D2 = cmpDasaList(P2.birth.moon, P2.meta.birthDate.getTime());
  const next1 = D1.find(d => d.end > now), next2 = D2.find(d => d.end > now);
  const gapYears = next1 && next2 ? Math.abs(next1.end - next2.end) / YEAR : 99;
  const soon1 = next1 && (next1.end - now) < YEAR, soon2 = next2 && (next2.end - now) < YEAR;
  let sandhiVerdict, sandhiColor, sandhiGrade;
  if (gapYears < 1) { sandhiVerdict = `இருவரின் தசா மாற்றமும் ஒரே காலகட்டத்தில் (${fmt(next1.end)} & ${fmt(next2.end)}) — தசா சந்தி நெருக்கம். திருமணம்/முக்கியத் தொடக்கங்களை இக்காலத்திலிருந்து விலக்கி வைப்பது மரபு.`; sandhiColor = "#ff5555"; sandhiGrade = 0; }
  else if (soon1 || soon2) { sandhiVerdict = `${soon1 ? n1 : n2}-க்கு ஓராண்டுக்குள் தசா மாற்றம் (${fmt((soon1 ? next1 : next2).end)}) — சுப காரியங்களை மாற்றத்திற்குப் பின் திட்டமிடுவது நலம்.`; sandhiColor = "#ffb347"; sandhiGrade = 1; }
  else { sandhiVerdict = `தசா சந்தி நெருக்கம் இல்லை — ${n1}: ${planetNamesTa[next1.lord]} தசை ${fmt(next1.end)} வரை; ${n2}: ${planetNamesTa[next2.lord]} தசை ${fmt(next2.end)} வரை.`; sandhiColor = "#55ff55"; sandhiGrade = 2; }

  // --- அதிபதி நட்பு ---
  const lagnaFr = cmpFriendship(SIGN_LORDS[B1.lagna], SIGN_LORDS[B2.lagna]);
  const rasiFr = cmpFriendship(SIGN_LORDS[B1.rasi], SIGN_LORDS[B2.rasi]);
  const dasaFr = (B1.cur && B2.cur) ? cmpFriendship(B1.cur.dasaLord, B2.cur.dasaLord) : { grade: 1, text: "—" };

  // --- 7-ம் வீடு ---
  const M1 = cmpMalefics7(P1.birth), M2 = cmpMalefics7(P2.birth);

  // --- 10 பொருத்தம் + அஷ்டகூடம் (ஏற்கனவே உள்ள இயந்திரத்தை நபர்களின் நட்சத்திரங்களுடன் இயக்கு) ---
  let poruthamHtml = "";
  try {
    const set = (id, v) => { const el = document.getElementById(id); if (el) el.value = String(v); };
    set("porutham-boy-nak", B1.nak.index); set("porutham-boy-pada", B1.nak.pada);
    set("porutham-girl-nak", B2.nak.index); set("porutham-girl-pada", B2.nak.pada);
    computePorutham();
    poruthamHtml = document.getElementById("porutham-results")?.innerHTML || "";
  } catch (e) { /* பொருத்தம் கிடைக்கவில்லை */ }

  // --- ஒட்டுமொத்த முடிவு ---
  const gradeSum = sevGrade + sandhiGrade + lagnaFr.grade + rasiFr.grade + dasaFr.grade + (M1.length ? 0 : 1) + (M2.length ? 0 : 1);
  const gradeMax = 2 + 2 + 2 + 2 + 2 + 1 + 1;
  const pct = Math.round(gradeSum / gradeMax * 100);
  let overall, overallColor;
  if (sevGrade === 0 || sandhiGrade === 0) { overall = "முக்கியத் தடை உள்ளது — ஜோதிடர் ஆலோசனை அவசியம்"; overallColor = "#ff5555"; }
  else if (pct >= 75) { overall = "சிறந்த ஜாதக இணக்கம்"; overallColor = "#55ff55"; }
  else if (pct >= 55) { overall = "நல்ல இணக்கம் — சிறு கவனங்களுடன்"; overallColor = "var(--primary-gold)"; }
  else { overall = "இணக்கம் குறைவு — பரிசீலனை தேவை"; overallColor = "#ffb347"; }

  const badge = (g, t) => `<span style="border:1px solid ${g === 2 ? "#55ff55" : g === 1 ? "var(--primary-gold)" : "#ff5555"};color:${g === 2 ? "#55ff55" : g === 1 ? "var(--primary-gold)" : "#ff5555"};padding:0.1rem 0.5rem;border-radius:4px;font-size:0.72rem;font-weight:700;white-space:nowrap;">${t}</span>`;
  const card = (title, P, B, S, M) => `
    <div style="flex:1;min-width:260px;">
      <h4 style="color:var(--primary-gold);text-align:center;margin-bottom:0.5rem;">${title}</h4>
      <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-radius:var(--radius-md);padding:0.75rem;">
        <svg class="chart-svg cmp-chart" viewBox="0 0 200 200" style="width:100%;max-width:280px;display:block;margin:0 auto 0.75rem;"></svg>
        <div class="detail-list">
          <div class="detail-item"><span class="detail-key">ராசி</span><span class="detail-val">${RASIS[B.rasi].nameTa}</span></div>
          <div class="detail-item"><span class="detail-key">நட்சத்திரம்</span><span class="detail-val">${B.nak.nameTa} ${B.nak.pada}-ம் பாதம்</span></div>
          <div class="detail-item"><span class="detail-key">லக்னம்</span><span class="detail-val">${RASIS[B.lagna].nameTa} ${(P.birth.lagna % 30).toFixed(1)}°</span></div>
          <div class="detail-item"><span class="detail-key">நடப்பு தசை</span><span class="detail-val">${B.cur ? `${planetNamesTa[B.cur.dasaLord]} / ${planetNamesTa[B.cur.bhuktiLord]}` : "—"}</span></div>
          <div class="detail-item"><span class="detail-key">செவ்வாய்</span><span class="detail-val">${S.has ? `${S.from.join(", ")}${S.softened ? " — விலக்கு (ஆட்சி/உச்சம்/மரபு)" : " — தோஷம்"}` : "தோஷ வீட்டில் இல்லை"}</span></div>
          <div class="detail-item"><span class="detail-key">7-ம் வீட்டில் பாபர்</span><span class="detail-val">${M.length ? M.map(p => planetNamesTa[p]).join(", ") : "இல்லை"}</span></div>
        </div>
      </div>
    </div>`;

  out.innerHTML = `<div class="lang-ta">
    <div style="display:flex;gap:1.25rem;flex-wrap:wrap;margin-bottom:1.5rem;">
      ${card(n1, P1, B1, S1, M1)}
      ${card(n2, P2, B2, S2, M2)}
    </div>
    <div style="padding:1rem 1.2rem;border:1px solid ${overallColor};border-radius:var(--radius-md);margin-bottom:1.25rem;">
      <div style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap;">
        <span style="font-size:2rem;font-weight:800;color:${overallColor};">${pct}%</span>
        <div><div style="font-weight:700;color:${overallColor};">${overall}</div><div class="reading-meta">ஜாதக-அமைப்பு இணக்கம் (செவ்வாய் தோஷம், தசா சந்தி, அதிபதி நட்பு, 7-ம் வீடு). நட்சத்திர அடிப்படை 10 பொருத்தம் & அஷ்டகூடம் கீழே தனியாக.</div></div>
      </div>
    </div>
    <div class="detail-list" style="margin-bottom:1.25rem;">
      <div class="detail-item" style="flex-wrap:wrap;gap:0.4rem;"><span class="detail-key">பரஸ்பர செவ்வாய் தோஷம் ${badge(sevGrade, sevGrade === 2 ? "பொருத்தம்" : "தடை")}</span><span class="detail-val" style="font-weight:500;color:${sevColor};">${sevVerdict}</span></div>
      <div class="detail-item" style="flex-wrap:wrap;gap:0.4rem;"><span class="detail-key">தசா சந்தி ${badge(sandhiGrade, sandhiGrade === 2 ? "நெருக்கம் இல்லை" : sandhiGrade === 1 ? "கவனம்" : "நெருக்கம்")}</span><span class="detail-val" style="font-weight:500;color:${sandhiColor};">${sandhiVerdict}</span></div>
      <div class="detail-item"><span class="detail-key">லக்னாதிபதிகள் ${badge(lagnaFr.grade, lagnaFr.text)}</span><span class="detail-val">${planetNamesTa[SIGN_LORDS[B1.lagna]]} × ${planetNamesTa[SIGN_LORDS[B2.lagna]]}</span></div>
      <div class="detail-item"><span class="detail-key">ராசியதிபதிகள் ${badge(rasiFr.grade, rasiFr.text)}</span><span class="detail-val">${planetNamesTa[SIGN_LORDS[B1.rasi]]} × ${planetNamesTa[SIGN_LORDS[B2.rasi]]}</span></div>
      <div class="detail-item"><span class="detail-key">நடப்பு தசாநாதர்கள் ${badge(dasaFr.grade, dasaFr.text)}</span><span class="detail-val">${B1.cur && B2.cur ? `${planetNamesTa[B1.cur.dasaLord]} × ${planetNamesTa[B2.cur.dasaLord]}` : "—"}</span></div>
      <div class="detail-item"><span class="detail-key">ஒருவரின் ராசி மற்றவருக்கு</span><span class="detail-val">${n1}-இன் ராசி ${n2}-க்கு ${(B1.rasi - B2.rasi + 12) % 12 + 1}-ல்; ${n2}-இன் ராசி ${n1}-க்கு ${(B2.rasi - B1.rasi + 12) % 12 + 1}-ல்</span></div>
    </div>
    <div style="margin-bottom:0.5rem;"><strong style="color:var(--primary-gold);">10 பொருத்தம் & அஷ்டகூடம் (${n1} ↔ ${n2})</strong></div>
    ${poruthamHtml || '<p class="reading-meta">பொருத்தக் கணிப்பு கிடைக்கவில்லை.</p>'}
    <p class="reading-meta" style="margin-top:1rem;border-top:1px solid rgba(255,255,255,0.07);padding-top:0.75rem;">10 பொருத்தத்தில் மணமகன் = ${n1}, மணமகள் = ${n2} என எடுத்துக்கொள்ளப்பட்டது; மாற்ற வேண்டுமெனில் மேலே உள்ள பொருத்தத் தேர்வுகளில் மாற்றி மீண்டும் "பொருத்தம் பார்" அழுத்தவும். இந்த ஒப்பீடு பொது விதிகளின்படி — இறுதி முடிவுக்கு ஜோதிடர் நேரடிப் பரிசீலனை அவசியம்.</p>
  </div>`;

  // ராசிச் சக்கரங்கள் — நபர் 1 நேரடியாக; நபர் 2 தற்காலிக மாற்றத்துடன்
  const svgs = out.querySelectorAll("svg.cmp-chart");
  try {
    if (svgs[0]) renderChartSVG(svgs[0], "D1");
    if (svgs[1]) { const saved = currentHoroscopeData; currentHoroscopeData = P2; try { renderChartSVG(svgs[1], "D1"); } finally { currentHoroscopeData = saved; } }
  } catch (e) { console.error("ஒப்பீட்டுச் சக்கரம்:", e); }
}
window.runChartComparison = runChartComparison;

// பொருத்தம் பேனல் உருவானதும் தொகுதியைச் சேர்
(function patchRenderAllCompare() {
  const orig = window.renderAllPredictions;
  window.renderAllPredictions = function () {
    orig();
    ensureCompareBlock();
  };
})();

// ==========================================================
// பிரிவு வழிசெலுத்தல் (Section navigation) & அச்சு அமைப்பு (Print scope)
// அனைத்து பேனல்களும் உருவான பிறகு இயங்கும் — renderAllPredictions சங்கிலியில் இணைந்து.
// ==========================================================

// நெடுவரிசைப் பட்டியில் காட்ட சுருக்கப் பெயர்கள் (முழுத் தலைப்பு நீளமானது)
const NAV_SHORT_LABELS = {
  "panel-highlights": "சுருக்கம்",
  "panel-panchangam": "பஞ்சாங்கம்",
  "panel-charts": "சக்கரங்கள்",
  "panel-dasa": "தசா புக்தி",
  "panel-ashtakavarga": "அஷ்டகவர்க்கம்",
  "panel-aspects": "கிரக சம்பந்தம்",
  "panel-houses": "பாவ பலன்கள்",
  "panel-comprehensive-report": "ஒட்டுமொத்த அறிக்கை",
  "panel-gochara": "கோசாரம்",
  "panel-porutham": "பொருத்தம்",
  "panel-muhurtham": "முகூர்த்தம்",
  "panel-forecast-calendar": "நாட்காட்டி"
};

// அச்சில் மட்டும் வரும் பக்கங்கள் — திரையில் இல்லை, ஆனால் அச்சு அமைப்பில் தேர்வு செய்யலாம்
const PRINT_ONLY_PAGES = {
  "print-cover-page": "அட்டைப் பக்கம்",
  "print-details-page": "பிறப்பு விவரப் பக்கம்"
};

// "சுருக்கமான அறிக்கை" முன்னமைவு — 60 பக்கத்தை ~15 ஆகக் குறைக்கும் அத்தியாவசியப் பிரிவுகள்
const SCOPE_ESSENTIAL = ["print-cover-page", "print-details-page", "panel-highlights", "panel-charts", "panel-dasa", "panel-comprehensive-report"];
const SCOPE_KEY = "astro-print-scope";

// ---------- உதவிகள் ----------
function navCleanTitle(el) {
  const t = el.querySelector(".section-title");
  if (!t) return null;
  const c = t.cloneNode(true);
  c.querySelectorAll(".en-text, .lang-en, .lang-sep, svg").forEach(n => n.remove());
  return c.textContent.trim().replace(/\s+/g, " ") || null;
}

// திரையில் தெரியும் பேனல்கள் — DOM வரிசையில்
function navGetPanels() {
  return Array.from(document.querySelectorAll("#results-view .main-tab-panel"))
    .filter(p => p.id)
    .map(p => ({
      id: p.id,
      short: NAV_SHORT_LABELS[p.id] || navCleanTitle(p) || p.id,
      full: navCleanTitle(p) || NAV_SHORT_LABELS[p.id] || p.id
    }));
}

// அச்சிடத்தக்க அனைத்தும் — அச்சு-மட்டும் பக்கங்கள் + பேனல்கள்
function navGetPrintables() {
  const out = [];
  Object.keys(PRINT_ONLY_PAGES).forEach(id => {
    if (document.getElementById(id)) out.push({ id, full: PRINT_ONLY_PAGES[id] });
  });
  return out.concat(navGetPanels().map(p => ({ id: p.id, full: p.full })));
}

function navLoadScope() {
  try { return JSON.parse(localStorage.getItem(SCOPE_KEY)) || {}; }
  catch (e) { return {}; }
}
function navSaveScope(scope) {
  try { localStorage.setItem(SCOPE_KEY, JSON.stringify(scope)); } catch (e) { /* தனிமைப் பயன்முறை */ }
}

// ---------- 1. ஒட்டும் பிரிவு வழிசெலுத்தல் ----------
let navLastActive = null;
// கைபேசியில் மிதக்கும் பட்டி 3-4 வரிகள் ஆவதால், கீழ்நோக்கி உருளும்போது மறைத்து
// மேல்நோக்கி உருளும்போது காட்டு (திரை இடத்தைச் சேமிக்க).
let navHiddenByScroll = false;
let navSuppressAutoHideUntil = 0;
const NAV_MOBILE_QUERY = window.matchMedia("(max-width: 768px)");

function buildSectionNav() {
  const view = document.getElementById("results-view");
  const header = view && view.querySelector(".results-header");
  if (!view || !header) return;

  const panels = navGetPanels();
  const btnHtml = panels.map(p =>
    `<button type="button" class="section-nav-btn" data-target="${p.id}">${p.short}</button>`).join("");

  // (அ) அறிக்கையின் தொடக்கத்திலேயே எப்போதும் தெரியும் பிரிவுப் பட்டி — உருளாமலேயே
  //     எந்தப் பிரிவுக்கும் செல்லலாம் (மிதக்கும் பட்டி உருண்ட பிறகுதான் வரும்).
  let inline = document.getElementById("section-nav-inline");
  if (!inline) {
    inline = document.createElement("nav");
    inline.id = "section-nav-inline";
    inline.className = "no-print";
    inline.setAttribute("aria-label", "பிரிவுகள்");
    header.insertAdjacentElement("afterend", inline);
  }
  inline.innerHTML = `<span class="section-nav-label">பிரிவுகள்</span><div class="section-nav-inner">${btnHtml}</div>`;

  // (ஆ) உருளும்போது மேலே மிதக்கும் பட்டி.
  //     .glass-panel-இல் overflow:hidden + backdrop-filter உள்ளதாலும் .results-wrapper
  //     ஒரு grid ஆனதாலும் sticky/fixed உள்ளே வேலை செய்யாது — எனவே body-யில் இணைக்கிறோம்.
  let nav = document.getElementById("section-nav");
  if (!nav) {
    nav = document.createElement("nav");
    nav.id = "section-nav";
    nav.className = "no-print";
    nav.setAttribute("aria-label", "பிரிவு வழிசெலுத்தல்");
    document.body.appendChild(nav);
  }
  nav.innerHTML = `<div class="section-nav-inner">${btnHtml}</div>`;

  document.querySelectorAll("#section-nav .section-nav-btn, #section-nav-inline .section-nav-btn")
    .forEach(btn => btn.addEventListener("click", () => navScrollTo(btn.dataset.target)));

  ensureBackToTop();
  navSetupSpy(panels, nav, inline);
}

function navScrollTo(id) {
  const el = document.getElementById(id);
  const nav = document.getElementById("section-nav");
  if (!el) return;
  const offset = (nav ? nav.offsetHeight : 0) + 14;
  const target = window.scrollY + el.getBoundingClientRect().top - offset;
  // பிரிவுக்குத் தாவும்போது (கீழ்நோக்கிய பெரிய நகர்வு) தானியங்கி மறைவு தூண்டப்படக்
  // கூடாது — பொத்தானை அழுத்தியதும் பட்டி மறைவது குழப்பமானது.
  navSuppressAutoHideUntil = Date.now() + 800;
  navHiddenByScroll = false;
  // இவ்வறிக்கை மிக நீளமானது — நெடுந்தூரத் தாவலை மென்மையாகச் செய்தால் பல வினாடிகள்
  // ஆகி, செயலிழந்தது போலத் தோன்றும். எனவே அருகில் மட்டும் மென்மை, தொலைவில் உடனடி.
  const smooth = Math.abs(target - window.scrollY) < 2500;
  window.scrollTo({ top: target, behavior: smooth ? "smooth" : "auto" });
}
window.navScrollTo = navScrollTo;

function ensureBackToTop() {
  if (document.getElementById("back-to-top")) return;
  const b = document.createElement("button");
  b.id = "back-to-top";
  b.type = "button";
  b.className = "no-print";
  b.title = "மேலே செல்";
  b.setAttribute("aria-label", "மேலே செல்");
  b.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>';
  b.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  document.body.appendChild(b);
}

function navSetupSpy(panels, nav, inline) {
  let raf = null;
  let lastY = window.scrollY;

  const update = () => {
    raf = null;

    // உள்ளமைந்த பட்டி உருண்டு மறைந்த பிறகே மிதக்கும் பட்டியைக் காட்டு
    const view = document.getElementById("results-view");
    const shown = view && view.style.display !== "none";
    const passed = inline ? inline.getBoundingClientRect().bottom < 0 : window.scrollY > 400;

    // கைபேசி: கீழ்நோக்கி உருண்டால் மறை, மேல்நோக்கி உருண்டால் காட்டு
    const y = window.scrollY;
    const dy = y - lastY;
    if (Date.now() < navSuppressAutoHideUntil) {
      navHiddenByScroll = false;
      lastY = y;
    } else if (!NAV_MOBILE_QUERY.matches) {
      navHiddenByScroll = false;   // மேசைக்கணினியில் எப்போதும் தெரியட்டும்
      lastY = y;
    } else if (Math.abs(dy) > 6) {  // சிறு அதிர்வுகளைப் புறக்கணி
      if (dy > 0 && y > 300) navHiddenByScroll = true;
      else if (dy < 0) navHiddenByScroll = false;
      lastY = y;
    }

    nav.classList.toggle("visible", !!(shown && passed && !navHiddenByScroll));

    const offset = nav.offsetHeight + 40;
    let activeId = panels.length ? panels[0].id : null;
    panels.forEach(p => {
      const el = document.getElementById(p.id);
      if (el && el.getBoundingClientRect().top <= offset) activeId = p.id;
    });

    if (activeId !== navLastActive) {
      navLastActive = activeId;
      // இரு பட்டிகளிலும் செயல்நிலையை ஒத்திசை
      document.querySelectorAll("#section-nav .section-nav-btn, #section-nav-inline .section-nav-btn")
        .forEach(btn => btn.classList.toggle("active", btn.dataset.target === activeId));
      // செயலில் உள்ள பொத்தானைக் கிடைமட்டமாக மட்டும் நடுவில் கொண்டுவா (பக்கம் உருளாது)
      document.querySelectorAll("#section-nav .section-nav-inner, #section-nav-inline .section-nav-inner")
        .forEach(box => {
          const btn = box.querySelector(".section-nav-btn.active");
          if (btn && box.scrollWidth > box.clientWidth) {
            box.scrollTo({ left: btn.offsetLeft - box.clientWidth / 2 + btn.offsetWidth / 2, behavior: "smooth" });
          }
        });
    }

    const btt = document.getElementById("back-to-top");
    if (btt) btt.classList.toggle("visible", window.scrollY > 600);
  };

  const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
  if (window.__navSpyHandler) window.removeEventListener("scroll", window.__navSpyHandler);
  window.__navSpyHandler = onScroll;
  window.addEventListener("scroll", onScroll, { passive: true });
  update();
}

// ---------- 2. அச்சு அமைப்பு (எந்தப் பிரிவுகள் PDF-இல்) ----------
function buildPrintScope() {
  const anchor = document.getElementById("section-nav-inline")
    || document.querySelector("#results-view .results-header");
  if (!anchor) return;

  let box = document.getElementById("print-scope");
  if (!box) {
    box = document.createElement("details");
    box.id = "print-scope";
    box.className = "no-print";
    anchor.insertAdjacentElement("afterend", box);
  }

  const items = navGetPrintables();
  // ?scope=essential | all — சேமித்த தேர்வை மேவும் (பகிரத்தக்க "சுருக்க அறிக்கை" இணைப்புகளுக்கு)
  const urlScope = new URLSearchParams(window.location.search).get("scope");
  const scope = urlScope === "essential"
    ? Object.fromEntries(items.map(it => [it.id, SCOPE_ESSENTIAL.includes(it.id)]))
    : urlScope === "all" ? { __refTables: true } : navLoadScope();
  box.innerHTML = `
    <summary>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
      அச்சு அமைப்பு — எந்தப் பிரிவுகள் PDF-இல் வேண்டும்?
      <span id="scope-count"></span>
    </summary>
    <div class="scope-body">
      <div class="scope-actions">
        <button type="button" class="scope-preset" data-preset="all">அனைத்தும்</button>
        <button type="button" class="scope-preset" data-preset="essential">சுருக்கமான அறிக்கை</button>
        <button type="button" class="scope-preset" data-preset="none">எதுவும் இல்லை</button>
      </div>
      <div class="scope-grid">
        ${items.map(it => `
          <label class="scope-item">
            <input type="checkbox" data-scope-id="${it.id}" ${scope[it.id] === false ? "" : "checked"}>
            <span>${it.full}</span>
          </label>`).join("")}
      </div>
      <label class="scope-item scope-extra">
        <input type="checkbox" id="scope-ref-tables" ${scope.__refTables ? "checked" : ""}>
        <span>27-நட்சத்திர முழு அட்டவணைகள் (பொது விவரம் — ஜாதகருக்கு உரிய வரி ஏற்கனவே அறிக்கையில் உள்ளது; சுமார் 8 பக்கம் கூடும்)</span>
      </label>
      <p class="reading-meta" style="margin:0.75rem 0 0;">தேர்வு உலாவியில் சேமிக்கப்படும். இது PDF-ஐ மட்டுமே பாதிக்கும் — திரையில் அனைத்தும் தெரியும். <strong>அளவிடப்பட்ட பக்கங்கள்</strong> (இம்மாதிரி ஜாதகத்தில்): அனைத்தும் + அட்டவணைகள் ≈ 60; அனைத்தும் (அட்டவணைகள் இன்றி) ≈ 52; சுருக்கமான அறிக்கை ≈ 32.</p>
    </div>`;

  box.querySelectorAll("input[data-scope-id], #scope-ref-tables").forEach(cb =>
    cb.addEventListener("change", applyPrintScope));

  box.querySelectorAll(".scope-preset").forEach(btn =>
    btn.addEventListener("click", () => {
      const preset = btn.dataset.preset;
      box.querySelectorAll("input[data-scope-id]").forEach(cb => {
        cb.checked = preset === "all" ? true
          : preset === "none" ? false
          : SCOPE_ESSENTIAL.includes(cb.dataset.scopeId);
      });
      const refs = document.getElementById("scope-ref-tables");
      if (refs) refs.checked = preset === "all";
      applyPrintScope();
    }));

  applyPrintScope();
}

function applyPrintScope() {
  const box = document.getElementById("print-scope");
  if (!box) return;
  const scope = {};
  let on = 0, total = 0;
  box.querySelectorAll("input[data-scope-id]").forEach(cb => {
    const id = cb.dataset.scopeId;
    scope[id] = cb.checked;
    total++;
    if (cb.checked) on++;
    const el = document.getElementById(id);
    if (el) el.classList.toggle("print-skip", !cb.checked);
  });
  const refs = document.getElementById("scope-ref-tables");
  scope.__refTables = !!(refs && refs.checked);
  document.body.classList.toggle("print-ref-tables", scope.__refTables);

  navSaveScope(scope);
  const count = document.getElementById("scope-count");
  if (count) count.textContent = `${on}/${total}`;
}
window.applyPrintScope = applyPrintScope;

// ---------- renderAllPredictions சங்கிலியில் இணை ----------
(function patchRenderAllNavigation() {
  const orig = window.renderAllPredictions;
  window.renderAllPredictions = function () {
    orig();
    buildSectionNav();
    buildPrintScope();
  };
})();

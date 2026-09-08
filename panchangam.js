// ==========================================================
// வாக்கிய பஞ்சாங்கம் (Vakya Panchangam) — Surya Siddhanta engine
// ----------------------------------------------------------
// வாக்கிய முறை சூரிய சித்தாந்தத்தின் சராசரி இயக்கங்கள் +
// மந்த (மையச் சமன்) திருத்தத்தை அடிப்படையாகக் கொண்டது.
// கலி யுகாதி அஹர்கணத்திலிருந்து சூரிய/சந்திர நிராயனப்
// பாகைகளைக் கணித்து, திதி, நட்சத்திரம், யோகம், கரணம்,
// தமிழ் ஆண்டு/மாதம்/தேதி ஆகியவற்றைப் பெறுகிறோம்.
// ==========================================================

const VAKYA = (() => {
  // கலி யுகாதி: கி.மு. 3102 பிப்ரவரி 18, உஜ்ஜைனி நள்ளிரவு (UT-இல்)
  const KALI_EPOCH_JD = 588465.2895;
  const MAHAYUGA_DAYS = 1577917828; // மகாயுகத்தின் சாவன தினங்கள்
  const REV = {
    sun: 4320000,        // மகாயுகத்தில் சூரிய சுற்றுகள்
    moon: 57753336,      // சந்திர சுற்றுகள்
    moonApogee: 488203   // சந்திர மந்தோச்ச சுற்றுகள்
  };
  const SUN_MANDOCCA = 77.2833;   // சூரிய மந்தோச்சம் 77°17'
  const SUN_PERIPHERY = 13.8333;  // சூரிய மந்த பரிதி 13°50'
  const MOON_PERIPHERY = 31.8333; // சந்திர மந்த பரிதி 31°50'
  const DEG = Math.PI / 180;

  function norm(x) { return ((x % 360) + 360) % 360; }
  function jdFromDate(d) { return d.getTime() / 86400000 + 2440587.5; }
  function dateFromJd(jd) { return new Date((jd - 2440587.5) * 86400000); }

  function meanLon(rev, ahargana, offset) {
    return norm(rev * ahargana / MAHAYUGA_DAYS * 360 + (offset || 0));
  }

  // உண்மை (மந்த திருத்தம் செய்யப்பட்ட) சூரியப் பாகை
  function trueSun(jd) {
    const A = jd - KALI_EPOCH_JD;
    const m = meanLon(REV.sun, A);
    const manda = Math.asin((SUN_PERIPHERY / 360) * Math.sin((m - SUN_MANDOCCA) * DEG)) / DEG;
    return norm(m - manda);
  }

  // உண்மை சந்திரப் பாகை
  function trueMoon(jd) {
    const A = jd - KALI_EPOCH_JD;
    const m = meanLon(REV.moon, A);
    const apogee = meanLon(REV.moonApogee, A, 90); // யுகாதியில் மந்தோச்சம் 90°
    const manda = Math.asin((MOON_PERIPHERY / 360) * Math.sin((m - apogee) * DEG)) / DEG;
    return norm(m - manda);
  }

  function elongation(jd) { return norm(trueMoon(jd) - trueSun(jd)); }
  function yogaLon(jd) { return norm(trueMoon(jd) + trueSun(jd)); }

  // திருக்கணித (drik) நிராயன சூரியப் பாகை — Lahiri ayanamsha.
  // தமிழ் மாதம்/தேதி நிர்ணயத்திற்கு வாக்கிய மத்திம சூரியனை விட இது மிகத் துல்லியம்
  // (வாக்கிய சூரியன் ~1° / சில மணிநேரம் பிறழ்வதால் சங்கராந்தி நாள் தவறக்கூடும்).
  function drikSun(jd) {
    if (typeof Astronomy === "undefined") return trueSun(jd); // CDN தோல்வியில் பின்னடைவு
    const t = Astronomy.MakeTime(dateFromJd(jd));
    const T = t.ut / 36525, T1900 = T + 1;
    const ayanamsha = 22.460148 + 1.396042 * T1900 + 0.000308 * T1900 * T1900;
    const ecl = Astronomy.Ecliptic(Astronomy.GeoVector(Astronomy.Body.Sun, t, true));
    return norm(ecl.elon - ayanamsha);
  }

  // fn(jd) முன்னோக்கி target பாகையை அடையும் நேரத்தை நியூட்டன் முறையில் காண்க
  function solveForward(fn, jd0, target, approxRate) {
    let jd = jd0;
    for (let i = 0; i < 6; i++) {
      let diff = norm(target - fn(jd));
      if (diff > 350) diff -= 360; // சிறிய பின்னோக்கு ஊசலாட்டம்
      const h = 0.05;
      let rate = (norm(fn(jd + h) - fn(jd - h) + 180) - 180) / (2 * h);
      if (!isFinite(rate) || rate <= 0.1) rate = approxRate;
      jd += diff / rate;
      if (Math.abs(diff) < 1e-5) break;
    }
    return jd;
  }

  // ---------- பெயர் அட்டவணைகள் ----------
  const SAMVATSARA = [
    "பிரபவ", "விபவ", "சுக்ல", "பிரமோதூத", "பிரசோற்பத்தி", "ஆங்கீரச", "ஸ்ரீமுக", "பவ", "யுவ", "தாது",
    "ஈஸ்வர", "வெகுதானிய", "பிரமாதி", "விக்கிரம", "விஷு", "சித்திரபானு", "சுபானு", "தாரண", "பார்த்திப", "விய",
    "சர்வசித்து", "சர்வதாரி", "விரோதி", "விக்ருதி", "கர", "நந்தன", "விஜய", "ஜய", "மன்மத", "துன்முகி",
    "ஹேவிளம்பி", "விளம்பி", "விகாரி", "சார்வரி", "பிலவ", "சுபகிருது", "சோபகிருது", "குரோதி", "விசுவாவசு", "பராபவ",
    "பிலவங்க", "கீலக", "சௌமிய", "சாதாரண", "விரோதகிருது", "பரிதாபி", "பிரமாதீச", "ஆனந்த", "ராட்சச", "நள",
    "பிங்கள", "காளயுக்தி", "சித்தார்த்தி", "ரௌத்திரி", "துன்மதி", "துந்துபி", "ருத்ரோத்காரி", "ரக்தாட்சி", "குரோதன", "அட்சய"
  ];

  const TAMIL_MONTHS = ["சித்திரை", "வைகாசி", "ஆனி", "ஆடி", "ஆவணி", "புரட்டாசி", "ஐப்பசி", "கார்த்திகை", "மார்கழி", "தை", "மாசி", "பங்குனி"];

  const WEEKDAYS = ["ஞாயிற்றுக்கிழமை", "திங்கட்கிழமை", "செவ்வாய்க்கிழமை", "புதன்கிழமை", "வியாழக்கிழமை", "வெள்ளிக்கிழமை", "சனிக்கிழமை"];

  const TITHI_NAMES = ["பிரதமை", "துவிதியை", "திருதியை", "சதுர்த்தி", "பஞ்சமி", "சஷ்டி", "சப்தமி", "அஷ்டமி", "நவமி", "தசமி", "ஏகாதசி", "துவாதசி", "திரயோதசி", "சதுர்த்தசி"];

  const NAKSHATRA_NAMES = ["அசுவினி", "பரணி", "கார்த்திகை", "ரோகிணி", "மிருகசீரிடம்", "திருவாதிரை", "புனர்பூசம்", "பூசம்", "ஆயில்யம்", "மகம்", "பூரம்", "உத்திரம்", "அஸ்தம்", "சித்திரை", "சுவாதி", "விசாகம்", "அனுஷம்", "கேட்டை", "மூலம்", "பூராடம்", "உத்திராடம்", "திருவோணம்", "அவிட்டம்", "சதயம்", "பூரட்டாதி", "உத்திரட்டாதி", "ரேவதி"];

  const YOGA_NAMES = ["விஷ்கம்பம்", "பிரீதி", "ஆயுஷ்மான்", "சௌபாக்கியம்", "சோபனம்", "அதிகண்டம்", "சுகர்மம்", "திருதி", "சூலம்", "கண்டம்", "விருத்தி", "துருவம்", "வியாகாதம்", "ஹர்ஷணம்", "வஜ்ரம்", "சித்தி", "வியதீபாதம்", "வரீயான்", "பரிகம்", "சிவம்", "சித்தம்", "சாத்தியம்", "சுபம்", "சுக்லம்", "பிரம்மம்", "ஐந்திரம்", "வைதிருதி"];

  const KARANA_MOVABLE = ["பவம்", "பாலவம்", "கௌலவம்", "தைத்துலம்", "கரம்", "வணிஜம்", "விஷ்டி (பத்திரை)"];
  const KARANA_FIXED = { 0: "கிம்ஸ்துக்னம்", 57: "சகுனி", 58: "சதுஷ்பாதம்", 59: "நாகவம்" };

  // ராகு காலம் / எமகண்டம் / குளிகை — பகல் எட்டில் எந்தப் பகுதி (1-8), கிழமை வாரியாக (ஞாயிறு..சனி)
  const RAHU_SEG = [8, 2, 7, 5, 6, 4, 3];
  const YAMA_SEG = [5, 4, 3, 2, 1, 7, 6];
  const KULIGAI_SEG = [7, 6, 5, 4, 3, 2, 1];
  const SOOLAM = ["மேற்கு", "கிழக்கு", "வடக்கு", "வடக்கு", "தெற்கு", "மேற்கு", "கிழக்கு"];

  // ---------- உதவிச் செயல்பாடுகள் ----------
  function formatLocalTime(date, tz) {
    const ms = date.getTime() + tz * 3600000;
    const d = new Date(ms);
    let h = d.getUTCHours();
    const m = d.getUTCMinutes();
    const ampm = h < 12 ? "முற்பகல்" : "பிற்பகல்";
    let h12 = h % 12; if (h12 === 0) h12 = 12;
    return `${ampm} ${String(h12).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  }

  function formatLocalDateTime(date, tz, refDate) {
    const ms = date.getTime() + tz * 3600000;
    const d = new Date(ms);
    const refMs = refDate.getTime() + tz * 3600000;
    const ref = new Date(refMs);
    const sameDay = d.getUTCFullYear() === ref.getUTCFullYear() && d.getUTCMonth() === ref.getUTCMonth() && d.getUTCDate() === ref.getUTCDate();
    const t = formatLocalTime(date, tz);
    if (sameDay) return t;
    return `மறுநாள் ${t}`;
  }

  function getSunTimes(year, month, day, lat, lng, tz) {
    const obs = new Astronomy.Observer(lat, lng, 0);
    const localMidnightUtc = new Date(Date.UTC(year, month - 1, day) - tz * 3600000);
    const rise = Astronomy.SearchRiseSet(Astronomy.Body.Sun, obs, +1, localMidnightUtc, 1.5);
    if (!rise) throw new Error("சூரிய உதயம் கணிக்க இயலவில்லை");
    const set = Astronomy.SearchRiseSet(Astronomy.Body.Sun, obs, -1, rise.date, 1.5);
    if (!set) throw new Error("சூரிய அஸ்தமனம் கணிக்க இயலவில்லை");
    return { rise: rise.date, set: set.date };
  }

  // ---------- முழு பஞ்சாங்கக் கணிப்பு ----------
  // year/month/day: உள்ளூர் (பிறந்த இடம்) நாட்காட்டி நாள்
  function computePanchangam(year, month, day, lat, lng, tz) {
    const { rise, set } = getSunTimes(year, month, day, lat, lng, tz);
    const jdRise = jdFromDate(rise);

    const sunLon = trueSun(jdRise);
    const moonLon = trueMoon(jdRise);
    const elong = norm(moonLon - sunLon);

    // கிழமை
    const weekday = new Date(Date.UTC(year, month - 1, day)).getUTCDay();

    // திதி + முடிவு நேரம்
    const tithiIdx = Math.floor(elong / 12); // 0..29
    const paksha = tithiIdx < 15 ? "வளர்பிறை" : "தேய்பிறை";
    let tithiName;
    if (tithiIdx === 14) tithiName = "பௌர்ணமி";
    else if (tithiIdx === 29) tithiName = "அமாவாசை";
    else tithiName = `${paksha} ${TITHI_NAMES[tithiIdx % 15]}`;
    const tithiEndJd = solveForward(elongation, jdRise, (tithiIdx + 1) * 12 % 360, 12.19);

    // நட்சத்திரம் + முடிவு நேரம்
    const NAK_SIZE = 360 / 27;
    const nakIdx = Math.floor(moonLon / NAK_SIZE) % 27;
    const nakEndJd = solveForward(trueMoon, jdRise, ((nakIdx + 1) * NAK_SIZE) % 360, 13.176);

    // யோகம்
    const yogaIdx = Math.floor(yogaLon(jdRise) / NAK_SIZE) % 27;
    const yogaEndJd = solveForward(yogaLon, jdRise, ((yogaIdx + 1) * NAK_SIZE) % 360, 14.16);

    // கரணம்
    const karanaIdx = Math.floor(elong / 6) % 60;
    const karanaName = KARANA_FIXED[karanaIdx] || KARANA_MOVABLE[(karanaIdx - 1) % 7];

    // தமிழ் மாதம் & தேதி — திருக்கணித (drik) சூரியன் + தமிழ்நாட்டு அஸ்தமன விதி.
    // ஒரு நாள் எந்த மாதத்தைச் சேர்ந்தது என்பது அந்த மாதத்தின் சங்கராந்தி
    // (சூரியன் ராசி மாறும் தருணம்) எந்த நாளில் "1-ம் தேதி" ஆகிறது என்பதைப் பொறுத்தது:
    //   சங்கராந்தி அஸ்தமனத்திற்கு முன் நிகழ்ந்தால் — அன்றே 1-ம் தேதி; பின் என்றால் மறுநாள்.
    // உதயத்தில் சூரியன் இருக்கும் ராசியை மட்டும் நம்பினால் சங்கராந்தி நாள் தவறும்
    // (உதயத்தில் பழைய ராசி, ஆனால் அந்நாள் அஸ்தமனத்திற்கு முன் புதிய ராசிக்கு மாறிவிடும்).
    const sunLonDrik = drikSun(jdRise);
    const s0 = Math.floor(sunLonDrik / 30) % 12; // உதயத்தில் சூரிய ராசி

    // குறிப்பிட்ட ராசிக்குள் சூரியன் நுழையும் சங்கராந்தியின் "1-ம் தேதி" சிவில் நாள் (UTC)
    function monthFirstDayUtc(startLon, approxJd) {
      const sJd = solveForward(drikSun, approxJd - 2, ((startLon % 360) + 360) % 360, 0.9856);
      const sDate = dateFromJd(sJd);
      const sLocal = new Date(sDate.getTime() + tz * 3600000);
      let firstUtc = Date.UTC(sLocal.getUTCFullYear(), sLocal.getUTCMonth(), sLocal.getUTCDate());
      try {
        const st = getSunTimes(sLocal.getUTCFullYear(), sLocal.getUTCMonth() + 1, sLocal.getUTCDate(), lat, lng, tz);
        if (sDate.getTime() > st.set.getTime()) firstUtc += 86400000; // அஸ்தமனத்திற்குப் பின்
      } catch (e) { /* துருவப் பகுதிகள் */ }
      return firstUtc;
    }

    // தற்போதைய ராசி (s0) & அடுத்த ராசி (s0+1) ஆகியவற்றின் சங்கராந்தி நாட்கள்
    const backDays = norm(sunLonDrik - s0 * 30) / 0.9856;       // s0-க்குள் நுழைந்தது (கடந்த காலம்)
    const fwdDays = norm((s0 + 1) * 30 - sunLonDrik) / 0.9856;  // s0+1-க்குள் நுழைவது (எதிர் காலம்)
    const firstDay0 = monthFirstDayUtc(s0 * 30, jdRise - backDays);
    const firstDay1 = monthFirstDayUtc((s0 + 1) * 30, jdRise + fwdDays);

    const thisDayUtc = Date.UTC(year, month - 1, day);
    let monthIdx, firstDayUtc;
    if (thisDayUtc >= firstDay1) {
      // சங்கராந்தி அஸ்தமனத்திற்கு முன் நிகழ்ந்த நாள் — அன்றே புதிய மாதம் 1-ம் தேதி
      monthIdx = (s0 + 1) % 12;
      firstDayUtc = firstDay1;
    } else {
      monthIdx = s0;
      firstDayUtc = firstDay0;
    }
    const tamilDay = Math.round((thisDayUtc - firstDayUtc) / 86400000) + 1;

    // தமிழ் ஆண்டு (60 ஆண்டு சுழற்சி)
    const A = jdRise - KALI_EPOCH_JD;
    const kaliElapsed = Math.floor(REV.sun * A / MAHAYUGA_DAYS);
    const yearName = SAMVATSARA[((kaliElapsed + 12) % 60 + 60) % 60];

    // ராகு காலம் / எமகண்டம் / குளிகை
    const dayLenMs = set.getTime() - rise.getTime();
    function segment(n) {
      const s = new Date(rise.getTime() + (n - 1) / 8 * dayLenMs);
      const e = new Date(rise.getTime() + n / 8 * dayLenMs);
      return `${formatLocalTime(s, tz)} - ${formatLocalTime(e, tz)}`;
    }

    return {
      date: { year, month, day },
      weekday: WEEKDAYS[weekday],
      yearName,
      kaliYear: kaliElapsed + 1,
      tamilMonth: TAMIL_MONTHS[monthIdx],
      tamilDay,
      tithi: tithiName,
      tithiEnd: formatLocalDateTime(dateFromJd(tithiEndJd), tz, rise),
      nakshatra: NAKSHATRA_NAMES[nakIdx],
      nakshatraEnd: formatLocalDateTime(dateFromJd(nakEndJd), tz, rise),
      yoga: YOGA_NAMES[yogaIdx],
      yogaEnd: formatLocalDateTime(dateFromJd(yogaEndJd), tz, rise),
      karana: karanaName,
      sunrise: formatLocalTime(rise, tz),
      sunset: formatLocalTime(set, tz),
      rahuKalam: segment(RAHU_SEG[weekday]),
      yamaGandam: segment(YAMA_SEG[weekday]),
      kuligai: segment(KULIGAI_SEG[weekday]),
      soolam: SOOLAM[weekday],
      sunLon, moonLon
    };
  }

  // ---------- இந்து தினம் (சூரிய உதயம் → அடுத்த உதயம்) ----------
  // சூரிய உதயத்திற்கு முன் பிறந்தால் இந்து தினம் இன்னும் முந்தைய நாளே. எனவே கிழமை,
  // திதி, நட்சத்திரம், தமிழ் தேதி, ராகு காலம் அனைத்தும் முந்தைய நாளின்படி கணிக்கப்பட
  // வேண்டும் (நள்ளிரவு–உதயம் இடையே பிறந்த ~கால் பங்கு ஜாதகங்களைப் பாதிக்கும்).
  function hinduDayFor(year, month, day, hourLocal, minuteLocal, lat, lng, tz) {
    try {
      const { rise } = getSunTimes(year, month, day, lat, lng, tz);
      const riseLocal = new Date(rise.getTime() + tz * 3600000);
      const riseHours = riseLocal.getUTCHours() + riseLocal.getUTCMinutes() / 60;
      if ((hourLocal + minuteLocal / 60) < riseHours) {
        const prev = new Date(Date.UTC(year, month - 1, day) - 86400000);
        return { year: prev.getUTCFullYear(), month: prev.getUTCMonth() + 1, day: prev.getUTCDate(), shifted: true };
      }
    } catch (e) { /* உதயம் கணிக்க இயலவில்லை — சிவில் நாளையே பயன்படுத்து */ }
    return { year, month, day, shifted: false };
  }

  // currentHoroscopeData.meta-லிருந்து நேரடியாக இந்து தினத்தைத் தீர்மானி
  function birthHinduDay(meta) {
    const local = new Date(meta.birthDate.getTime() + meta.tz * 3600000);
    return hinduDayFor(meta.year, meta.month, meta.day, local.getUTCHours(), local.getUTCMinutes(), meta.lat, meta.lng, meta.tz);
  }

  // பிறந்த நாளுக்கான பஞ்சாங்கம் — இந்து தின சரிசெய்தலுடன்
  function computeBirthPanchangam(meta) {
    const d = birthHinduDay(meta);
    const p = computePanchangam(d.year, d.month, d.day, meta.lat, meta.lng, meta.tz);
    p.hinduDayShifted = d.shifted;
    return p;
  }

  return { computePanchangam, computeBirthPanchangam, birthHinduDay, hinduDayFor, trueSun, trueMoon, jdFromDate };
})();

// ---------- UI வரைதல் ----------
function buildPanchangamRows(p) {
  const rows = [
    ["தமிழ் ஆண்டு", `${p.yearName} (கலி ${p.kaliYear})`],
    ["தமிழ் மாதம் / தேதி", `${p.tamilMonth} ${p.tamilDay}`],
    ["கிழமை", p.weekday],
    ["திதி", `${p.tithi} (${p.tithiEnd} வரை)`],
    ["நட்சத்திரம்", `${p.nakshatra} (${p.nakshatraEnd} வரை)`],
    ["யோகம்", `${p.yoga} (${p.yogaEnd} வரை)`],
    ["கரணம்", p.karana],
    ["சூரிய உதயம்", p.sunrise],
    ["சூரிய அஸ்தமனம்", p.sunset],
    ["ராகு காலம்", p.rahuKalam],
    ["எமகண்டம்", p.yamaGandam],
    ["குளிகை காலம்", p.kuligai],
    ["திசை சூலம்", p.soolam]
  ];
  return rows.map(([k, v]) => `
    <div class="detail-item">
      <span class="detail-key">${k}</span>
      <span class="detail-val">${v}</span>
    </div>`).join("");
}

function renderVakyaPanchangam() {
  const container = document.getElementById("panchangam-birth-list");
  if (!container || !currentHoroscopeData) return;
  const meta = currentHoroscopeData.meta;
  try {
    const p = VAKYA.computeBirthPanchangam(meta);
    // உதயத்திற்கு முன் பிறப்பு — இந்து தினம் முந்தைய நாள் என்பதை ஜோதிடருக்குத் தெளிவாக்கு
    const shiftNote = p.hinduDayShifted
      ? `<div class="detail-item" style="border-top:1px dashed rgba(229,193,88,0.35);margin-top:0.35rem;padding-top:0.55rem;">
           <span class="detail-val" style="color:#ffb347;font-weight:500;line-height:1.6;">
             ⓘ பிறப்பு சூரிய உதயத்திற்கு முன் நிகழ்ந்ததால், இந்து தின முறைப்படி (உதயம் முதல் அடுத்த உதயம் வரை)
             மேற்கண்ட கிழமை, திதி, நட்சத்திரம், தமிழ் தேதி, ராகு காலம் அனைத்தும் <strong>முந்தைய நாளின்</strong> படி
             கணிக்கப்பட்டுள்ளன — இதுவே மரபு.
           </span>
         </div>`
      : "";
    container.innerHTML = buildPanchangamRows(p) + shiftNote;
  } catch (e) {
    console.error("பஞ்சாங்கக் கணிப்புப் பிழை:", e);
    container.innerHTML = `<div class="detail-item"><span class="detail-val">பஞ்சாங்கம் கணிக்க இயலவில்லை.</span></div>`;
  }
  // தனி தேதி தேர்வுக்கு இன்றைய தேதியை இயல்பாக்கு
  const dateInput = document.getElementById("panchangam-date");
  if (dateInput && !dateInput.value) {
    const now = new Date();
    dateInput.value = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  }
}
window.renderVakyaPanchangam = renderVakyaPanchangam;

function renderCustomPanchangam() {
  const container = document.getElementById("panchangam-custom-list");
  const dateInput = document.getElementById("panchangam-date");
  if (!container || !dateInput || !dateInput.value) return;
  if (!currentHoroscopeData) {
    alert("முதலில் ஜாதகத்தைக் கணிக்கவும் (இடம் தேவை).");
    return;
  }
  const meta = currentHoroscopeData.meta;
  const [y, m, d] = dateInput.value.split("-").map(Number);
  try {
    const p = VAKYA.computePanchangam(y, m, d, meta.lat, meta.lng, meta.tz);
    container.innerHTML = buildPanchangamRows(p);
  } catch (e) {
    console.error("பஞ்சாங்கக் கணிப்புப் பிழை:", e);
    container.innerHTML = `<div class="detail-item"><span class="detail-val">பஞ்சாங்கம் கணிக்க இயலவில்லை.</span></div>`;
  }
}
window.renderCustomPanchangam = renderCustomPanchangam;

# Tamil-only Astrology Software with Vakya Panchangam — Design

Date: 2026-06-11

## Goal

1. Fix all defects in the existing single-page astrology calculator (index.html / app.js / index.css).
2. Make the entire UI Tamil-only.
3. Add a complete Vakya Panchangam module (வாக்கிய பஞ்சாங்கம்) so the app is a full
   Tamil astrology software: jathagam (charts, dasa, ashtakavarga, readings) + panchangam.

## Defects fixed

- Invalid SVG namespace `http://www.w3.org/2000/2000/svg` in two inline SVGs.
- Corrupted Tamil string `நخبارம்` in the transit planets table header (should be நட்சத்திரம்).
- Transit local-date computation double-applied timezone offsets (browser offset and
  birth-place offset), giving wrong weekday for transit Mandi. Fixed by adding the
  birth-place offset to UTC and reading components with `getUTC*`.
- Vimshottari first-dasa bhuktis were each scaled by the balance fraction. Correct
  approach: the first dasa starts `elapsedFraction × years` before birth; bhuktis run
  at full length from that true start, and pre-birth bhuktis are skipped.
- `switchMainTab` omitted the comprehensive-report panel; dead `switchChartTab` removed.
- Nakshatra/navamsa width constants made exact (360/27, 30/9).
- `lang="en"`, English page title and meta description on a Tamil product.

## Tamil-only approach

The CSS already supports a `lang-select-ta` body class that hides `.lang-en`,
`.en-text`, `.lang-sep`, `.info-value-en`. We force this mode permanently:

- `<body class="lang-select-ta">`, `<html lang="ta">`, Tamil title/meta.
- Remove the language selector UI and the `changeLanguage` switching (always "ta").
- Translate remaining hard-coded English: timezone option labels, alerts, GPS button
  states, "Total" row, SAV center label, dasa date locale → `ta-IN`, house-reading
  English paragraphs removed, English halves of generated report blocks no longer rendered.
- Bilingual spans already in static HTML stay in the DOM but are hidden by CSS; all
  *generated* content is emitted Tamil-only.

## Vakya Panchangam module (new file: panchangam.js)

Vakya panchangam is computationally based on Surya Siddhanta mean motions with the
manda (equation-of-centre) correction — the same basis from which the vakyas
(Vararuci/candravākyas) were derived. We implement that directly:

- Kali ahargana `A = JD(UT) − 588465.2895` (epoch: Ujjain midnight, 18 Feb 3102 BCE).
- Mean longitude = `revolutions × A / 1,577,917,828 × 360` with Surya Siddhanta
  revolution counts: Sun 4,320,000; Moon 57,753,336; Moon apogee 488,203 (+90° at
  epoch); Rahu −232,238 (+180° at epoch).
- True longitude = mean − asin((P/360)·sin(mean − mandocca)), P(sun)=13°50′,
  P(moon)=31°50′, sun mandocca 77°17′.
- Panchangam elements at local sunrise (sunrise/sunset from astronomy-engine):
  - வருடம்: Kali year → 60-year cycle name (validated: Kali 5126 → விசுவாவசு).
  - மாதம்/தேதி: sidereal sun's rasi → Tamil month; day count since sankranti.
  - கிழமை, திதி (+ end time), நட்சத்திரம் (+ end time), யோகம், கரணம்.
  - ராகு காலம் / எமகண்டம் / குளிகை (weekday eighths of daylight), திசை சூலம்.
- End times found by Newton iteration on the true-longitude functions.
- UI: new panel "வாக்கிய பஞ்சாங்கம்" in the results view showing the birth-day
  panchangam, plus a date picker to compute the panchangam of any date at the same
  place.

## Out of scope

Muhurtham finder, horoscope matching (porutham), printed panchangam books layout.

// Major Cities Database (Tamil Nadu, India, and Global)
const CITIES = [
  { name: "சென்னை, தமிழ்நாடு (Chennai)", lat: 13.0827, lng: 80.2707, tz: 5.5 },
  { name: "கோயம்புத்தூர், தமிழ்நாடு (Coimbatore)", lat: 11.0168, lng: 76.9558, tz: 5.5 },
  { name: "மதுரை, தமிழ்நாடு (Madurai)", lat: 9.9252, lng: 78.1198, tz: 5.5 },
  { name: "திருச்சிராப்பள்ளி, தமிழ்நாடு (Trichy)", lat: 10.7905, lng: 78.7047, tz: 5.5 },
  { name: "சேலம், தமிழ்நாடு (Salem)", lat: 11.6643, lng: 78.1460, tz: 5.5 },
  { name: "திருநெல்வேலி, தமிழ்நாடு (Tirunelveli)", lat: 8.7139, lng: 77.7567, tz: 5.5 },
  { name: "வேலூர், தமிழ்நாடு (Vellore)", lat: 12.9165, lng: 79.1325, tz: 5.5 },
  { name: "தஞ்சாவூர், தமிழ்நாடு (Thanjavur)", lat: 10.7870, lng: 79.1378, tz: 5.5 },
  { name: "தூத்துக்குடி, தமிழ்நாடு (Thoothukudi)", lat: 8.7642, lng: 78.1348, tz: 5.5 },
  { name: "நாகர்கோவில், தமிழ்நாடு (Nagercoil)", lat: 8.1833, lng: 77.4119, tz: 5.5 },
  { name: "காஞ்சிபுரம், தமிழ்நாடு (Kanchipuram)", lat: 12.8342, lng: 79.7036, tz: 5.5 },
  { name: "ஈரோடு, தமிழ்நாடு (Erode)", lat: 11.3410, lng: 77.7172, tz: 5.5 },
  { name: "திருப்பூர், தமிழ்நாடு (Tiruppur)", lat: 11.1085, lng: 77.3411, tz: 5.5 },
  { name: "திண்டுக்கல், தமிழ்நாடு (Dindigul)", lat: 10.3673, lng: 77.9803, tz: 5.5 },
  { name: "கடலூர், தமிழ்நாடு (Cuddalore)", lat: 11.7480, lng: 79.7714, tz: 5.5 },
  { name: "புதுச்சேரி (Puducherry)", lat: 11.9416, lng: 79.8083, tz: 5.5 },
  { name: "பெங்களூரு, கர்நாடகா (Bengaluru)", lat: 12.9716, lng: 77.5946, tz: 5.5 },
  { name: "மும்பை, மகாராஷ்டிரா (Mumbai)", lat: 19.0760, lng: 72.8777, tz: 5.5 },
  { name: "புது தில்லி (New Delhi)", lat: 28.6139, lng: 77.2090, tz: 5.5 },
  { name: "கொல்கத்தா, மேற்கு வங்கம் (Kolkata)", lat: 22.5726, lng: 88.3639, tz: 5.5 },
  { name: "ஐதராபாத், தெலுங்கானா (Hyderabad)", lat: 17.3850, lng: 78.4867, tz: 5.5 },
  { name: "சிங்கப்பூர் (Singapore)", lat: 1.3521, lng: 103.8198, tz: 8.0 },
  { name: "கோலாலம்பூர், மலேசியா (Kuala Lumpur)", lat: 3.1390, lng: 101.6869, tz: 8.0 },
  { name: "கொழும்பு, இலங்கை (Colombo)", lat: 6.9271, lng: 79.8612, tz: 5.5 },
  { name: "லண்டன், ஐக்கிய இராச்சியம் (London)", lat: 51.5074, lng: -0.1278, tz: 0.0 },
  { name: "நியூயார்க், அமெரிக்கா (New York)", lat: 40.7128, lng: -74.0060, tz: -5.0 },
  { name: "சான் பிரான்சிஸ்கோ, அமெரிக்கா (San Francisco)", lat: 37.7749, lng: -122.4194, tz: -8.0 },
  { name: "துபாய், ஐக்கிய அரபு அமீரகம் (Dubai)", lat: 25.2048, lng: 55.2708, tz: 4.0 },
  { name: "சிட்னி, ஆஸ்திரேலியா (Sydney)", lat: -33.8688, lng: 151.2093, tz: 10.0 }
];

// Rasis Reference Data
const RASIS = [
  { nameEn: "Aries", nameTa: "மேஷம்", shortTa: "மேஷ", shortEn: "Ari", lordEn: "Mars", lordTa: "செவ்வாய்" },
  { nameEn: "Taurus", nameTa: "ரிஷபம்", shortTa: "ரிஷ", shortEn: "Tau", lordEn: "Venus", lordTa: "சுக்கிரன்" },
  { nameEn: "Gemini", nameTa: "மிதுனம்", shortTa: "மிது", shortEn: "Gem", lordEn: "Mercury", lordTa: "புதன்" },
  { nameEn: "Cancer", nameTa: "கடகம்", shortTa: "கட", shortEn: "Can", lordEn: "Moon", lordTa: "சந்திரன்" },
  { nameEn: "Leo", nameTa: "சிம்மம்", shortTa: "சிம்", shortEn: "Leo", lordEn: "Sun", lordTa: "சூரியன்" },
  { nameEn: "Virgo", nameTa: "கன்னி", shortTa: "கண்", shortEn: "Vir", lordEn: "Mercury", lordTa: "புதன்" },
  { nameEn: "Libra", nameTa: "துலாம்", shortTa: "துலா", shortEn: "Lib", lordEn: "Venus", lordTa: "சுக்கிரன்" },
  { nameEn: "Scorpio", nameTa: "விருச்சிகம்", shortTa: "விரு", shortEn: "Sco", lordEn: "Mars", lordTa: "செவ்வாய்" },
  { nameEn: "Sagittarius", nameTa: "தனுசு", shortTa: "தனு", shortEn: "Sag", lordEn: "Jupiter", lordTa: "குரு" },
  { nameEn: "Capricorn", nameTa: "மகரம்", shortTa: "மக", shortEn: "Cap", lordEn: "Saturn", lordTa: "சனி" },
  { nameEn: "Aquarius", nameTa: "கும்பம்", shortTa: "கும்", shortEn: "Aqu", lordEn: "Saturn", lordTa: "சனி" },
  { nameEn: "Pisces", nameTa: "மீனம்", shortTa: "மீன", shortEn: "Pis", lordEn: "Jupiter", lordTa: "குரு" }
];

// Nakshatras Reference Data
const NAKSHATRAS = [
  { nameEn: "Ashwini", nameTa: "அசுவினி", lordEn: "Ketu", lordTa: "கேது", desc: "அசுவினி நட்சத்திரமானது கேதுவின் ஆதிக்கத்திற்கு உட்பட்டது. இவர்கள் சுறுசுறுப்பும், வேகமும், தலைமைப் பண்பும் கொண்டவர்களாக விளங்குவார்கள். புதிய முயற்சிகளில் ஈடுபடுவதில் ஆர்வம் காட்டுவார்கள்." },
  { nameEn: "Bharani", nameTa: "பரணி", lordEn: "Venus", lordTa: "சுக்கிரன்", desc: "பரணி நட்சத்திரம் சுக்கிரனால் ஆளப்படுகிறது. இது படைப்பாற்றல் மற்றும் மாற்றத்தைக் குறிக்கிறது. இந்த நட்சத்திரத்தில் பிறந்தவர்கள் நேர்மையானவர்களாகவும், கலைகளில் ஈடுபாடு கொண்டவர்களாகவும் இருப்பார்கள்." },
  { nameEn: "Krittika", nameTa: "கார்த்திகை", lordEn: "Sun", lordTa: "சூரியன்", desc: "கார்த்திகை நட்சத்திரம் சூரியனால் ஆளப்படுகிறது. கூர்மையான அறிவு, நேர்மை மற்றும் பாதுகாப்பு குணம் கொண்டவர்கள். இவர்கள் நியாய அநியாயங்களை அலசி ஆராய்வதில் வல்லவர்கள்." },
  { nameEn: "Rohini", nameTa: "ரோகிணி", lordEn: "Moon", lordTa: "சந்திரன்", desc: "ரோகிணி நட்சத்திரம் சந்திரனால் ஆளப்படுகிறது. இவர்கள் கலை ஆர்வம், கற்பனைத் திறன், வசீகரத் தோற்றம் மற்றும் குடும்பத்தின் மீது அதிக பற்று உடையவர்களாக இருப்பார்கள்." },
  { nameEn: "Mrigashirsha", nameTa: "மிருகசீரிடம்", lordEn: "Mars", lordTa: "செவ்வாய்", desc: "மிருகசீரிடம் செவ்வாயால் ஆளப்படுகிறது. மான் தலை சின்னமாகக் கொண்டது. இவர்கள் எப்போதும் தேடல் குணம் கொண்டவர்களாகவும், அறிவுத்திறன் மற்றும் பிரயாணங்களில் ஆர்வம் மிக்கவர்களாகவும் இருப்பார்கள்." },
  { nameEn: "Ardra", nameTa: "திருவாதிரை", lordEn: "Rahu", lordTa: "ராகு", desc: "திருவாதிரை ராகுவின் ஆதிக்கத்திற்கு உட்பட்டது. இவர்கள் பகுத்தறிவு, ஆழமான உணர்வுகள் மற்றும் புதிய விஷயங்களை விரைந்து கற்றுக்கொள்ளும் அறிவுத்திறன் பெற்றிருப்பார்கள்." },
  { nameEn: "Punarvasu", nameTa: "புனர்பூசம்", lordEn: "Jupiter", lordTa: "குரு", desc: "புனர்பூசம் வியாழனால் (குரு) ஆளப்படுகிறது. 'மீண்டும் பிரகாசிப்பது' என்று பொருள்படும். இவர்கள் நம்பிக்கை, நன்னடத்தை, மனநிறைவு மற்றும் ஆன்மீக நாட்டம் கொண்டவர்கள்." },
  { nameEn: "Pushya", nameTa: "பூசம்", lordEn: "Saturn", lordTa: "சனி", desc: "பூசம் சனியால் ஆளப்படுகிறது. நட்சத்திரங்களிலேயே மிகவும் மங்களகரமானதாகக் கருதப்படுகிறது. இவர்கள் பிறரை அரவணைத்துச் செல்பவர்களாகவும், உதவிக் குணம் உடையவர்களாகவும் இருப்பார்கள்." },
  { nameEn: "Ashlesha", nameTa: "ஆயில்யம்", lordEn: "Mercury", lordTa: "புதன்", desc: "ஆயில்யம் புதனின் ஆதிக்கத்தில் உள்ளது. இவர்கள் கூர்மையான நுண்ணறிவு, சமயோசித புத்தி, மற்றும் சிறந்த நிர்வாகத் திறமை வாய்ந்தவர்களாக இருப்பார்கள்." },
  { nameEn: "Magha", nameTa: "மகம்", lordEn: "Ketu", lordTa: "கேது", desc: "மகம் நட்சத்திரம் கேதுவின் ஆதிக்கத்திற்கு உட்பட்டது. 'சிம்மாசனம்' இதன் அடையாளம். இவர்கள் கௌரவமும், பாரம்பரியத்தின் மீது பற்றும், தலைமைப் பண்பும் கொண்டவர்களாக விளங்குவார்கள்." },
  { nameEn: "Purva Phalguni (Puram)", nameTa: "பூரம்", lordEn: "Venus", lordTa: "சுக்கிரன்", desc: "பூரம் நட்சத்திரம் சுக்கிரனால் ஆளப்படுகிறது. கலைகள், சொகுசு மற்றும் மகிழ்ச்சியைக் குறிக்கிறது. இவர்கள் கனிவான சுபாவமும், ஆடம்பரம் மற்றும் சமூக உறவுகளை விரும்புபவர்களாகவும் இருப்பார்கள்." },
  { nameEn: "Uttara Phalguni (Uthiram)", nameTa: "உத்திரம்", lordEn: "Sun", lordTa: "சூரியன்", desc: "உத்திரம் நட்சத்திரம் சூரியனால் ஆளப்படுகிறது. இவர்கள் பிறருக்கு உதவும் குணம், பெருந்தன்மை, நேர்மை மற்றும் கடமை உணர்வு கொண்டவர்களாக விளங்குவார்கள்." },
  { nameEn: "Hasta", nameTa: "அஸ்தம்", lordEn: "Moon", lordTa: "சந்திரன்", desc: "அஸ்தம் நட்சத்திரம் சந்திரனால் ஆளப்படுகிறது. கைகள் இதன் சின்னம். இவர்கள் கைத்தொழில், சாதுரியமான பேச்சு, நகைச்சுவை உணர்வு மற்றும் அறிவுத்திறன் மிக்கவர்களாக இருப்பார்கள்." },
  { nameEn: "Chitra", nameTa: "சித்திரை", lordEn: "Mars", lordTa: "செவ்வாய்", desc: "சித்திரை செவ்வாயால் ஆளப்படுகிறது. 'ரத்தினம்' இதன் சின்னம். இவர்கள் கலை நயம், நாகரீகம், அழகியல் உணர்வு மற்றும் புதுமையான எண்ணங்களை உருவாக்குவதில் வல்லவர்கள்." },
  { nameEn: "Swati", nameTa: "சுவாதி", lordEn: "Rahu", lordTa: "ராகு", desc: "சுவாதி ராகுவின் ஆதிக்கத்திற்கு உட்பட்டது. சுதந்திர உணர்வும், எதையும் தாங்கும் மனவலிமையும் கொண்டவர்கள். இவர்கள் சிறந்த வியாபாரத் திறமையும், அமைதியான குணமும் கொண்டவர்கள்." },
  { nameEn: "Vishakha", nameTa: "விசாகம்", lordEn: "Jupiter", lordTa: "குரு", desc: "விசாகம் வியாழனால் (குரு) ஆளப்படுகிறது. இலக்கை அடைவதில் தீவிரம் காட்டுபவர்கள். இவர்கள் அதிக லட்சியமும், விடாமுயற்சியும், போட்டியிடும் குணமும் கொண்டிருப்பார்கள்." },
  { nameEn: "Anuradha", nameTa: "அனுஷம்", lordEn: "Saturn", lordTa: "சனி", desc: "அனுஷம் சனியால் ஆளப்படுகிறது. தாமரை இதன் சின்னம். கடின உழைப்பால் முன்னேறுபவர்கள். இவர்கள் சிறந்த நட்பும், ஆன்மீக அறிவும், பிறரை வழிநடத்தும் ஆற்றலும் பெற்றிருப்பார்கள்." },
  { nameEn: "Jyeshtha (Kettai)", nameTa: "கேட்டை", lordEn: "Mercury", lordTa: "புதன்", desc: "கேட்டை புதனின் ஆதிக்கத்தில் உள்ளது. இவர்கள் பாதுகாப்பு உணர்வும், ஆளுமைத் திறனும், கூர்மையான புத்தியும் கொண்ட மூத்த அறிவுஜீவிகளாகத் திகழ்வார்கள்." },
  { nameEn: "Mula", nameTa: "மூலம்", lordEn: "Ketu", lordTa: "கேது", desc: "மூலம் கேதுவின் ஆதிக்கத்திற்கு உட்பட்டது. வேர் இதன் குறியீடு. எதையும் ஆழமாக ஆராய்பவர்கள். இவர்கள் தத்துவஞானமும், வாழ்வில் ஆன்மீகப் புரட்சிகர மாற்றங்களையும் சந்திப்பார்கள்." },
  { nameEn: "Purva Ashadha (Pooradam)", nameTa: "பூராடம்", lordEn: "Venus", lordTa: "சுக்கிரன்", desc: "பூராடம் சுக்கிரனால் ஆளப்படுகிறது. 'வெல்ல முடியாதது' என்று பொருள். இவர்கள் சிறந்த பேச்சாற்றல், தளராத நம்பிக்கை மற்றும் பிறரைக் கவரும் ஆற்றல் உடையவர்களாக இருப்பார்கள்." },
  { nameEn: "Uttara Ashadha (Uthiradam)", nameTa: "உத்திராடம்", lordEn: "Sun", lordTa: "சூரியன்", desc: "உத்திராடம் சூரியனால் ஆளப்படுகிறது. யானைத் தந்தம் இதன் சின்னம். இவர்கள் சிறந்த சுய கட்டுப்பாடு, நேர்மை, அமைதி மற்றும் பொறுமை வாய்ந்தவர்களாக விளங்குவார்கள்." },
  { nameEn: "Shravana (Thiruvonam)", nameTa: "திருவோணம்", lordEn: "Moon", lordTa: "சந்திரன்", desc: "திருவோணம் சந்திரனால் ஆளப்படுகிறது. காது இதன் குறியீடு. இவர்கள் அறிவுத் தேடல், சிறந்த கவனிப்புத் திறன், ஒழுக்கம் மற்றும் பிறருக்கு நற்போதனை செய்யும் ஆற்றல் பெற்றவர்கள்." },
  { nameEn: "Dhanishta (Avittam)", nameTa: "அவிட்டம்", lordEn: "Mars", lordTa: "செவ்வாய்", desc: "அவிட்டம் செவ்வாயால் ஆளப்படுகிறது. இசை மற்றும் செல்வத்தைக் குறிக்கிறது. இவர்கள் சுறுசுறுப்பு, விடாமுயற்சி, கலைத் திறமை மற்றும் சமூகத்தில் நற்பெயர் பெற்றவர்களாக இருப்பார்கள்." },
  { nameEn: "Shatabhisha (Sadayam)", nameTa: "சதயம்", lordEn: "Rahu", lordTa: "ராகு", desc: "சதயம் ராகுவின் ஆதிக்கத்திற்கு உட்பட்டது. மருத்துவம் மற்றும் குணப்படுத்தும் சக்தியைக் குறிக்கிறது. இவர்கள் ஆராய்ச்சியாளர்கள், சுதந்திர சிந்தனையாளர்கள் மற்றும் சிறந்த மருத்துவர்களாகத் திகழலாம்." },
  { nameEn: "Purva Bhadrapada (Poorattadhi)", nameTa: "பூரட்டாதி", lordEn: "Jupiter", lordTa: "குரு", desc: "பூரட்டாதி வியாழனால் (குரு) ஆளப்படுகிறது. இவர்கள் தனித்துவமான சிந்தனை, தர்ம சிந்தனை, லட்சியவாதம் மற்றும் சமுதாய மாற்றத்தை விரும்பும் குணம் கொண்டவர்கள்." },
  { nameEn: "Uttara Bhadrapada (Uthirattadhi)", nameTa: "உத்திரட்டாதி", lordEn: "Saturn", lordTa: "சனி", desc: "உத்திரட்டாதி சனியால் ஆளப்படுகிறது. இவர்கள் அமைதியான குணம், பொறுமை, சிறந்த விவேகம் மற்றும் பிறருக்கு ஆலோசனை கூறும் பக்குவம் உடையவர்களாக இருப்பார்கள்." },
  { nameEn: "Revati", nameTa: "ரேவதி", lordEn: "Mercury", lordTa: "புதன்", desc: "ரேவதி புதனால் ஆளப்படுகிறது. பயணத்தின் இறுதி நிலையைக் குறிக்கிறது. இவர்கள் கனிவான குணம், கலை ஆர்வம், இயற்கை அன்பு மற்றும் ஆன்மீகத் தெளிவு கொண்டவர்களாகத் திகழ்வார்கள்." }
];

// Grid Coordinates for the South Indian Rasi Chart (Clockwise 12-house perimeter layout)
const RASI_GRID_MAP = [
  { signIndex: 0,  name: "Aries",       col: 1, row: 0 },
  { signIndex: 1,  name: "Taurus",      col: 2, row: 0 },
  { signIndex: 2,  name: "Gemini",      col: 3, row: 0 },
  { signIndex: 3,  name: "Cancer",      col: 3, row: 1 },
  { signIndex: 4,  name: "Leo",         col: 3, row: 2 },
  { signIndex: 5,  name: "Virgo",       col: 3, row: 3 },
  { signIndex: 6,  name: "Libra",       col: 2, row: 3 },
  { signIndex: 7,  name: "Scorpio",     col: 1, row: 3 },
  { signIndex: 8,  name: "Sagittarius", col: 0, row: 3 },
  { signIndex: 9,  name: "Capricorn",   col: 0, row: 2 },
  { signIndex: 10, name: "Aquarius",    col: 0, row: 1 },
  { signIndex: 11, name: "Pisces",      col: 0, row: 0 }
];

// Planet names definitions for UI and calculations
const PLANET_NAMES = [
  { key: "lagna", nameEn: "Lagna", nameTa: "லக்னம்", shortTa: "ல", shortEn: "L", type: "lagna" },
  { key: "sun", nameEn: "Sun", nameTa: "சூரியன்", shortTa: "சூ", shortEn: "Su", type: "planet" },
  { key: "moon", nameEn: "Moon", nameTa: "சந்திரன்", shortTa: "ச", shortEn: "Mo", type: "planet" },
  { key: "mars", nameEn: "Mars", nameTa: "செவ்வாய்", shortTa: "செ", shortEn: "Ma", type: "planet" },
  { key: "mercury", nameEn: "Mercury", nameTa: "புதன்", shortTa: "பு", shortEn: "Me", type: "planet" },
  { key: "jupiter", nameEn: "Jupiter", nameTa: "குரு", shortTa: "கு", shortEn: "Ju", type: "planet" },
  { key: "venus", nameEn: "Venus", nameTa: "சுக்கிரன்", shortTa: "சு", shortEn: "Ve", type: "planet" },
  { key: "saturn", nameEn: "Saturn", nameTa: "சனி", shortTa: "சனி", shortEn: "Sa", type: "planet" },
  { key: "rahu", nameEn: "Rahu", nameTa: "ராகு", shortTa: "ரா", shortEn: "Ra", type: "node" },
  { key: "ketu", nameEn: "Ketu", nameTa: "கேது", shortTa: "கே", shortEn: "Ke", type: "node" },
  { key: "mandi", nameEn: "Mandi", nameTa: "மாந்தி", shortTa: "மா", shortEn: "Mdi", type: "mandi" }
];

let currentHoroscopeData = null;

// Initialize application on load
window.addEventListener("DOMContentLoaded", () => {
  initStarryBackground();
  initLocationSearch();
  setDefaultDateTime();
  loadAstrologerDetails();
  
  // தமிழ் மட்டுமே
  changeLanguage("ta");
  
  // Check for saved Google Maps API key
  const savedKey = localStorage.getItem("gmaps_api_key");
  if (savedKey) {
    document.getElementById("gmaps-api-key").value = savedKey;
    loadGoogleMapsScript(savedKey);
  }
});

// 1. STARRY BACKGROUND CANVAS
function initStarryBackground() {
  const canvas = document.getElementById("stars-canvas");
  const ctx = canvas.getContext("2d");
  
  let stars = [];
  const maxStars = 120;
  
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  
  // Create stars
  for (let i = 0; i < maxStars; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      opacity: Math.random(),
      fadeDirection: Math.random() > 0.5 ? 1 : -1,
      fadeSpeed: 0.005 + Math.random() * 0.01
    });
  }
  
  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    stars.forEach(star => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      ctx.fill();
      
      // Animate twinkling
      star.opacity += star.fadeDirection * star.fadeSpeed;
      if (star.opacity >= 0.9) {
        star.fadeDirection = -1;
      } else if (star.opacity <= 0.1) {
        star.fadeDirection = 1;
        // Relocate star occasionally to keep background dynamic
        if (Math.random() > 0.8) {
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
        }
      }
    });
    
    requestAnimationFrame(drawStars);
  }
  
  drawStars();
}

// 2. LOCATION AUTOCOMPLETE SEARCH
let nominatimTimeout = null;

function initLocationSearch() {
  const searchInput = document.getElementById("birth-location");
  const suggestionsBox = document.getElementById("suggestions-box");
  
  searchInput.addEventListener("input", () => {
    if (localStorage.getItem("gmaps_api_key")) {
      // If Google Maps is loaded, let Google Autocomplete handle searches
      return;
    }
    
    const query = searchInput.value.toLowerCase().trim();
    if (!query) {
      suggestionsBox.style.display = "none";
      return;
    }
    
    // Find matches in local database
    const localMatches = CITIES.filter(city => city.name.toLowerCase().includes(query)).slice(0, 5);
    
    clearTimeout(nominatimTimeout);
    
    // If we have enough local matches, render immediately
    if (localMatches.length >= 3) {
      renderSuggestions(localMatches);
    } else {
      // Debounce and fetch from OSM Nominatim API to get global cities
      nominatimTimeout = setTimeout(() => {
        fetchNominatimSuggestions(query, localMatches);
      }, 300);
    }
  });
  
  // Close suggestions when clicking outside
  document.addEventListener("click", (e) => {
    if (e.target !== searchInput && e.target !== suggestionsBox) {
      suggestionsBox.style.display = "none";
    }
  });
}

function fetchNominatimSuggestions(query, localMatches) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5&addressdetails=1`;
  
  fetch(url, {
    headers: {
      "Accept-Language": "en"
    }
  })
    .then(res => res.json())
    .then(data => {
      const osmMatches = data.map(item => ({
        name: item.display_name,
        lat: parseFloat(item.lat),
        lng: parseFloat(item.lon)
      }));
      
      // Combine results while removing duplicates near coordinates
      const combined = [...localMatches];
      osmMatches.forEach(osm => {
        const isDuplicate = combined.some(local => 
          Math.abs(local.lat - osm.lat) < 0.05 && Math.abs(local.lng - osm.lng) < 0.05
        );
        if (!isDuplicate) {
          combined.push(osm);
        }
      });
      
      renderSuggestions(combined.slice(0, 6));
    })
    .catch(err => {
      console.error("OSM Nominatim fetch error:", err);
      renderSuggestions(localMatches);
    });
}

function renderSuggestions(matches) {
  const suggestionsBox = document.getElementById("suggestions-box");
  const searchInput = document.getElementById("birth-location");
  const latInput = document.getElementById("latitude");
  const lngInput = document.getElementById("longitude");
  const tzSelect = document.getElementById("timezone");
  
  if (matches.length === 0) {
    suggestionsBox.style.display = "none";
    return;
  }
  
  suggestionsBox.innerHTML = "";
  matches.forEach(city => {
    const div = document.createElement("div");
    div.className = "suggestion-item";
    div.textContent = city.name;
    div.addEventListener("click", () => {
      searchInput.value = city.name;
      latInput.value = city.lat.toFixed(4);
      lngInput.value = city.lng.toFixed(4);
      
      if (city.tz !== undefined) {
        tzSelect.value = city.tz.toString();
      } else {
        estimateTimezone(city.lat, city.lng);
      }
      
      suggestionsBox.style.display = "none";
    });
    suggestionsBox.appendChild(div);
  });
  
  suggestionsBox.style.display = "block";
}

function estimateTimezone(lat, lng) {
  const tzSelect = document.getElementById("timezone");
  
  // 1. India check (most common use case here)
  if (lat >= 6 && lat <= 37 && lng >= 68 && lng <= 98) {
    tzSelect.value = "5.5";
    return;
  }
  
  // 2. Simple fallback: longitude divided by 15 (15 degrees = 1 hour offset)
  const estimatedOffset = Math.round(lng / 15);
  tzSelect.value = estimatedOffset.toString();
}

// 3. SET DEFAULT DATE/TIME
function setDefaultDateTime() {
  const dateInput = document.getElementById("birth-date");
  const timeInput = document.getElementById("birth-time");
  
  const now = new Date();
  
  // Format YYYY-MM-DD
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  dateInput.value = `${yyyy}-${mm}-${dd}`;
  
  // Format HH:MM
  const hh = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');
  timeInput.value = `${hh}:${min}`;
}

// 4. GET CURRENT LOCATION VIA GPS
function getCurrentLocation() {
  const gpsBtn = document.getElementById("gps-btn");
  const latInput = document.getElementById("latitude");
  const lngInput = document.getElementById("longitude");
  const tzSelect = document.getElementById("timezone");
  const searchInput = document.getElementById("birth-location");
  
  if (!navigator.geolocation) {
    alert("உங்கள் உலாவியில் இருப்பிடக் கண்டறிதல் ஆதரிக்கப்படவில்லை.");
    return;
  }

  gpsBtn.disabled = true;
  gpsBtn.textContent = "தேடுகிறது...";
  
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      
      latInput.value = lat.toFixed(4);
      lngInput.value = lng.toFixed(4);
      searchInput.value = `தற்போதைய இருப்பிடம் (${lat.toFixed(2)}°, ${lng.toFixed(2)}°)`;
      
      // Auto-detect timezone offset in hours
      const offsetMinutes = new Date().getTimezoneOffset();
      const offsetHours = -offsetMinutes / 60; // JS returns negative for East of UTC
      
      // Set to closest matching option or append
      tzSelect.value = offsetHours.toString();
      
      gpsBtn.disabled = false;
      gpsBtn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M12 2a8 8 0 0 1 8 8c0 5.25-8 12-8 12S4 15.25 4 10a8 8 0 0 1 8-8z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        எனது இருப்பிடம்
      `;
    },
    (error) => {
      alert("உங்கள் இருப்பிடத்தைப் பெற இயலவில்லை: " + error.message);
      gpsBtn.disabled = false;
      gpsBtn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M12 2a8 8 0 0 1 8 8c0 5.25-8 12-8 12S4 15.25 4 10a8 8 0 0 1 8-8z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        எனது இருப்பிடம்
      `;
    }
  );
}

// 5. ASTROLOGICAL CALCULATIONS & HOROSCOPE GENERATOR
function calculateAstrology(event) {
  event.preventDefault();
  
  const loading = document.getElementById("loading-spinner");
  loading.style.display = "flex";
  
  setTimeout(() => {
    try {
      saveAstrologerDetails();
      const dateVal = document.getElementById("birth-date").value;
      const timeVal = document.getElementById("birth-time").value;
      const latVal = parseFloat(document.getElementById("latitude").value);
      const lngVal = parseFloat(document.getElementById("longitude").value);
      const tzVal = parseFloat(document.getElementById("timezone").value);
      
      // Parse Date and Time
      const dateParts = dateVal.split('-');
      const timeParts = timeVal.split(':');
      
      const year = parseInt(dateParts[0]);
      const month = parseInt(dateParts[1]);
      const day = parseInt(dateParts[2]);
      const hour = parseInt(timeParts[0]);
      const minute = parseInt(timeParts[1]);
      const second = timeParts[2] ? parseInt(timeParts[2]) : 0;
      
      // Calculate UTC milliseconds
      const localEpoch = Date.UTC(year, month - 1, day, hour, minute, second);
      const utcEpoch = localEpoch - (tzVal * 3600000);
      const utcDate = new Date(utcEpoch);
      
      const astroTime = Astronomy.MakeTime(utcDate);
      
      const civilDate = new Date(year, month - 1, day);
      const civilWeekday = civilDate.getDay();
      
      // Calculate birth positions
      const birthData = calculateAllPositions(astroTime, latVal, lngVal, tzVal, utcDate, year, month, day, civilWeekday);
      
      // Calculate transit positions
      const now = new Date();
      const transitAstroTime = Astronomy.MakeTime(now);
      
      // Current local time details at birth place for transit
      const localTransitDate = new Date(now.getTime() + (tzVal * 3600000));
      const tYear = localTransitDate.getUTCFullYear();
      const tMonth = localTransitDate.getUTCMonth() + 1;
      const tDay = localTransitDate.getUTCDate();
      const tWeekday = localTransitDate.getUTCDay();
      
      const transitData = calculateAllPositions(transitAstroTime, latVal, lngVal, tzVal, now, tYear, tMonth, tDay, tWeekday);
      
      currentHoroscopeData = {
        birth: birthData,
        transit: transitData,
        activeChart: "D1",
        meta: {
          lat: latVal,
          lng: lngVal,
          tz: tzVal,
          birthDate: utcDate,
          civilWeekday,
          year,
          month,
          day
        }
      };
      
      updateUIFields(birthData, lngVal, utcDate);
      renderChartAndTable();
      
      document.getElementById("welcome-view").style.display = "none";
      document.getElementById("results-view").style.display = "block";
      
    } catch (err) {
      console.error(err);
      alert("கணிப்பில் பிழை ஏற்பட்டது. அனைத்து விவரங்களும் சரியாக உள்ளனவா எனச் சரிபார்க்கவும்.");
    } finally {
      loading.style.display = "none";
    }
  }, 100);
}

// Calculate Ascendant (Tropical)
function calculateAscendant(astroTime, latVal, lngVal, epsRad) {
  const gastHours = Astronomy.SiderealTime(astroTime);
  const gastDeg = gastHours * 15;
  const lstDeg = (gastDeg + lngVal + 360) % 360;
  const lstRad = lstDeg * Math.PI / 180;
  const phiRad = latVal * Math.PI / 180;
  
  const y = Math.cos(lstRad);
  const x = -Math.sin(lstRad) * Math.cos(epsRad) - Math.tan(phiRad) * Math.sin(epsRad);
  let ascRad = Math.atan2(y, x);
  let ascTropLon = ascRad * 180 / Math.PI;
  ascTropLon = (ascTropLon + 360) % 360;
  return ascTropLon;
}

// Calculate enclosing Sunrise/Sunset and Vedic weekday
function getEnclosingDayNight(birthUtcDate, year, month, day, civilWeekday, latVal, lngVal, tzVal) {
  const obs = new Astronomy.Observer(latVal, lngVal, 0);
  
  // local midnight in local time, converted to UTC Date
  const localMidnightMs = Date.UTC(year, month - 1, day, 0, 0, 0) - (tzVal * 3600000);
  const startSearchDate = new Date(localMidnightMs - 6 * 3600000); // 6 hours before midnight
  
  const riseToday = Astronomy.SearchRiseSet(Astronomy.Body.Sun, obs, 1, startSearchDate, 2);
  if (!riseToday) throw new Error("Could not find sunrise");
  
  const setToday = Astronomy.SearchRiseSet(Astronomy.Body.Sun, obs, -1, riseToday.date, 2);
  if (!setToday) throw new Error("Could not find sunset");
  
  const riseNext = Astronomy.SearchRiseSet(Astronomy.Body.Sun, obs, 1, setToday.date, 2);
  if (!riseNext) throw new Error("Could not find next sunrise");
  
  const setPrev = Astronomy.SearchRiseSet(Astronomy.Body.Sun, obs, -1, new Date(riseToday.date.getTime() - 24 * 3600000), 2);
  if (!setPrev) throw new Error("Could not find previous sunset");
  
  const birthMs = birthUtcDate.getTime();
  const riseTodayMs = riseToday.date.getTime();
  const setTodayMs = setToday.date.getTime();
  
  let isDaytime = false;
  let startTimeMs = 0;
  let endTimeMs = 0;
  let vedicWeekday = civilWeekday;
  
  if (birthMs >= riseTodayMs && birthMs < setTodayMs) {
    isDaytime = true;
    startTimeMs = riseTodayMs;
    endTimeMs = setTodayMs;
  } else if (birthMs >= setTodayMs) {
    isDaytime = false;
    startTimeMs = setTodayMs;
    endTimeMs = riseNext.date.getTime();
  } else {
    // birthMs < riseTodayMs
    isDaytime = false;
    startTimeMs = setPrev.date.getTime();
    endTimeMs = riseTodayMs;
    vedicWeekday = (civilWeekday - 1 + 7) % 7;
  }
  
  return {
    isDaytime,
    startTimeMs,
    endTimeMs,
    vedicWeekday
  };
}

// Calculate all planetary positions (Sidereal)
function calculateAllPositions(astroTime, latVal, lngVal, tzVal, birthUtcDate, year, month, day, civilWeekday) {
  // A. Calculate Obliquity of the Ecliptic (eps)
  const T = astroTime.ut / 36525.0; // Centuries since J2000.0
  const obliquity = 23.4392911 - 0.013004167 * T - 0.000000164 * T * T + 0.0000005036 * T * T * T;
  const epsRad = obliquity * Math.PI / 180;
  
  // B. Calculate Lahiri Ayanamsha (precession relative to 1900.0)
  const T_1900 = T + 1.0;
  const ayanamsha = 22.460148 + 1.396042 * T_1900 + 0.000308 * T_1900 * T_1900;
  
  // 1. Lagna
  const ascTropLon = calculateAscendant(astroTime, latVal, lngVal, epsRad);
  const lagnaSidLon = (ascTropLon - ayanamsha + 360) % 360;
  
  // 2. Sun
  const geoSun = Astronomy.GeoVector(Astronomy.Body.Sun, astroTime, true);
  const eclSun = Astronomy.Ecliptic(geoSun);
  const sunSidLon = (eclSun.elon - ayanamsha + 360) % 360;
  
  // 3. Moon
  const geoMoon = Astronomy.GeoVector(Astronomy.Body.Moon, astroTime, true);
  const eclMoon = Astronomy.Ecliptic(geoMoon);
  const moonSidLon = (eclMoon.elon - ayanamsha + 360) % 360;
  
  // 4. Mars
  const geoMars = Astronomy.GeoVector(Astronomy.Body.Mars, astroTime, true);
  const eclMars = Astronomy.Ecliptic(geoMars);
  const marsSidLon = (eclMars.elon - ayanamsha + 360) % 360;
  
  // 5. Mercury
  const geoMercury = Astronomy.GeoVector(Astronomy.Body.Mercury, astroTime, true);
  const eclMercury = Astronomy.Ecliptic(geoMercury);
  const mercurySidLon = (eclMercury.elon - ayanamsha + 360) % 360;
  
  // 6. Jupiter
  const geoJupiter = Astronomy.GeoVector(Astronomy.Body.Jupiter, astroTime, true);
  const eclJupiter = Astronomy.Ecliptic(geoJupiter);
  const jupiterSidLon = (eclJupiter.elon - ayanamsha + 360) % 360;
  
  // 7. Venus
  const geoVenus = Astronomy.GeoVector(Astronomy.Body.Venus, astroTime, true);
  const eclVenus = Astronomy.Ecliptic(geoVenus);
  const venusSidLon = (eclVenus.elon - ayanamsha + 360) % 360;
  
  // 8. Saturn
  const geoSaturn = Astronomy.GeoVector(Astronomy.Body.Saturn, astroTime, true);
  const eclSaturn = Astronomy.Ecliptic(geoSaturn);
  const saturnSidLon = (eclSaturn.elon - ayanamsha + 360) % 360;
  
  // 9. Rahu (Mean Node)
  let rahuTropLon = 125.044522 - 1934.136261 * T + 0.002077 * T * T + 0.0000022 * T * T * T;
  rahuTropLon = (rahuTropLon % 360 + 360) % 360;
  const rahuSidLon = (rahuTropLon - ayanamsha + 360) % 360;
  
  // 10. Ketu
  const ketuSidLon = (rahuSidLon + 180) % 360;
  
  // 11. Mandi
  let mandiSidLon = 0;
  try {
    const dn = getEnclosingDayNight(birthUtcDate, year, month, day, civilWeekday, latVal, lngVal, tzVal);
    const partDuration = (dn.endTimeMs - dn.startTimeMs) / 8;
    const segmentIndex = dn.isDaytime 
      ? (6 - dn.vedicWeekday + 7) % 7 
      : (2 - dn.vedicWeekday + 7) % 7;
    
    const mandiRiseMs = dn.startTimeMs + segmentIndex * partDuration;
    const mandiAstroTime = Astronomy.MakeTime(new Date(mandiRiseMs));
    const mandiAscTrop = calculateAscendant(mandiAstroTime, latVal, lngVal, epsRad);
    mandiSidLon = (mandiAscTrop - ayanamsha + 360) % 360;
  } catch (e) {
    console.error("Mandi calculation error:", e);
    mandiSidLon = 0;
  }
  
  return {
    lagna: lagnaSidLon,
    sun: sunSidLon,
    moon: moonSidLon,
    mars: marsSidLon,
    mercury: mercurySidLon,
    jupiter: jupiterSidLon,
    venus: venusSidLon,
    saturn: saturnSidLon,
    rahu: rahuSidLon,
    ketu: ketuSidLon,
    mandi: mandiSidLon,
    ayanamsha,
    obliquity,
    jd: astroTime.ut + 2451545.0
  };
}

// Render chart SVG and planets table
function renderChartAndTable() {
  if (!currentHoroscopeData) return;
  renderRasiChart();
  renderPlanetsTable();
  
  // Call new renderers
  renderDasaBhuktis();
  renderAshtakavarga();
  renderAspectsAndReadings();
  renderHouseReadings();
  renderComprehensiveReport();
  if (typeof renderVakyaPanchangam === "function") renderVakyaPanchangam();
  populatePrintHeadersAndFooters();
}

// Helper: Format degrees to degrees, minutes, seconds string (DMS)
function formatDMS(degDecimal) {
  const d = Math.floor(degDecimal);
  const mDecimal = (degDecimal - d) * 60;
  const m = Math.floor(mDecimal);
  const s = Math.floor((mDecimal - m) * 60);
  return `${d}° ${String(m).padStart(2, '0')}' ${String(s).padStart(2, '0')}"`;
}

// Helper: Format LST decimal degrees to HH:MM:SS string
function formatLST(deg) {
  const hoursDecimal = deg / 15;
  const h = Math.floor(hoursDecimal);
  const mDecimal = (hoursDecimal - h) * 60;
  const m = Math.floor(mDecimal);
  const s = Math.floor((mDecimal - m) * 60);
  return `${String(h).padStart(2, '0')}h ${String(m).padStart(2, '0')}m ${String(s).padStart(2, '0')}s`;
}

// Get rasi info for a longitude
function getRasiInfo(longitude) {
  const index = Math.floor(longitude / 30) % 12;
  return RASIS[index];
}

// Get nakshatra info for a longitude
function getNakshatraInfo(longitude) {
  const NAK_SIZE = 360 / 27;
  const PADA_SIZE = NAK_SIZE / 4;
  const nakIndex = Math.floor(longitude / NAK_SIZE) % 27;
  const padaIndex = Math.floor((longitude % NAK_SIZE) / PADA_SIZE) + 1;
  const nak = NAKSHATRAS[nakIndex];
  return {
    nameEn: nak.nameEn,
    nameTa: nak.nameTa,
    pada: padaIndex,
    lordEn: nak.lordEn,
    lordTa: nak.lordTa,
    index: nakIndex
  };
}

// Update UI fields
function updateUIFields(data, lngVal, birthDate) {
  const lagnaRasi = getRasiInfo(data.lagna);
  document.getElementById("lagna-value-en").textContent = lagnaRasi.nameEn;
  document.getElementById("lagna-value-ta").textContent = lagnaRasi.nameTa;
  document.getElementById("lagna-degree").textContent = formatDMS(data.lagna % 30);
  
  const moonRasi = getRasiInfo(data.moon);
  document.getElementById("rasi-value-en").textContent = moonRasi.nameEn;
  document.getElementById("rasi-value-ta").textContent = moonRasi.nameTa;
  document.getElementById("rasi-degree").textContent = formatDMS(data.moon % 30);
  
  const nakInfo = getNakshatraInfo(data.moon);
  const nak = NAKSHATRAS[nakInfo.index];
  document.getElementById("nakshatra-value-en").textContent = nakInfo.nameEn;
  document.getElementById("nakshatra-value-ta").textContent = nakInfo.nameTa;
  document.getElementById("nakshatra-pada").innerHTML = `<span class="lang-ta">பாதம் ${nakInfo.pada}</span>`;
  
  // B. Calculated Details Table
  document.getElementById("val-julian-date").textContent = data.jd.toFixed(5);
  document.getElementById("val-ayanamsha").textContent = formatDMS(data.ayanamsha);
  
  // LST
  const gastHours = Astronomy.SiderealTime(Astronomy.MakeTime(birthDate));
  const gastDeg = gastHours * 15;
  const lstDeg = (gastDeg + lngVal + 360) % 360;
  document.getElementById("val-lst").textContent = formatLST(lstDeg);
  document.getElementById("val-obliquity").textContent = formatDMS(data.obliquity);
  
  // Tropical Moon
  const moonTrop = (data.moon + data.ayanamsha) % 360;
  document.getElementById("val-tropical-moon").textContent = formatDMS(moonTrop);
  document.getElementById("val-sidereal-moon").textContent = formatDMS(data.moon);
  
  // C. Astrological Lords
  document.getElementById("val-rasi-lord").innerHTML = `<span class="lang-en">${moonRasi.lordEn}</span><span class="lang-sep"> / </span><span class="lang-ta">${moonRasi.lordTa}</span>`;
  document.getElementById("val-nakshatra-lord").innerHTML = `<span class="lang-en">${nakInfo.lordEn}</span><span class="lang-sep"> / </span><span class="lang-ta">${nakInfo.lordTa}</span>`;
  document.getElementById("val-lagna-lord").innerHTML = `<span class="lang-en">${lagnaRasi.lordEn}</span><span class="lang-sep"> / </span><span class="lang-ta">${lagnaRasi.lordTa}</span>`;
  
  // D. Birth Star Reading
  document.getElementById("val-star-desc").textContent = nak.desc;
}

// Render dynamic South Indian chart SVG
function renderChartSVG(svg, chartType) {
  svg.innerHTML = ""; // Clear existing grid
  
  const cellSize = 50;
  
  // A. Generate Houses
  for (let signIdx = 0; signIdx < 12; signIdx++) {
    const rasi = RASIS[signIdx];
    const gridCell = RASI_GRID_MAP.find(cell => cell.signIndex === signIdx);
    
    const x = gridCell.col * cellSize;
    const y = gridCell.row * cellSize;
    
    // Create group for the cell
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.setAttribute("class", "chart-house");
    
    // Background Rect
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", cellSize);
    rect.setAttribute("height", cellSize);
    rect.setAttribute("class", "chart-house-bg");
    rect.setAttribute("stroke", "rgba(229, 193, 88, 0.25)");
    rect.setAttribute("stroke-width", "1");
    group.appendChild(rect);
    
    // Sign Name Label (e.g. "மேஷ / Ari")
    const textLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
    textLabel.setAttribute("x", x + 5);
    textLabel.setAttribute("y", y + 11);
    textLabel.setAttribute("class", "chart-house-text");
    
    const taSpan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
    taSpan.textContent = rasi.shortTa;
    textLabel.appendChild(taSpan);
    
    const enSpan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
    enSpan.setAttribute("class", "en-text");
    enSpan.textContent = ` / ${rasi.shortEn}`;
    textLabel.appendChild(enSpan);
    
    group.appendChild(textLabel);
    
    // Find all occupants in this sign for this chart type
    let occupants = [];
    PLANET_NAMES.forEach(planet => {
      let lon = 0;
      if (chartType === "Transit") {
        lon = currentHoroscopeData.transit[planet.key];
      } else {
        lon = currentHoroscopeData.birth[planet.key];
      }
      
      let pSignIdx = 0;
      if (chartType === "D1" || chartType === "Transit") {
        pSignIdx = Math.floor(lon / 30) % 12;
      } else if (chartType === "D9") {
        pSignIdx = Math.floor(lon / (30 / 9)) % 12;
      } else if (chartType === "D3") {
        const rasi = Math.floor(lon / 30) % 12;
        const deg = lon % 30;
        if (deg < 10) pSignIdx = rasi;
        else if (deg < 20) pSignIdx = (rasi + 4) % 12;
        else pSignIdx = (rasi + 8) % 12;
      }
      
      if (pSignIdx === signIdx) {
        occupants.push({
          label: planet.shortTa,
          title: planet.nameTa,
          type: planet.type,
          key: planet.key
        });
      }
    });
    
    // Draw occupants in 3x3 layout inside cell
    occupants.forEach((occ, i) => {
      if (i >= 9) return; // limit to 9 occupants
      const row = Math.floor(i / 3);
      const col = i % 3;
      const xOffset = x + 10 + col * 15;
      const yOffset = y + 22 + row * 9.5;
      
      const occText = document.createElementNS("http://www.w3.org/2000/svg", "text");
      occText.setAttribute("x", xOffset);
      occText.setAttribute("y", yOffset);
      occText.setAttribute("text-anchor", "middle");
      
      if (occ.type === "lagna") {
        occText.setAttribute("class", "chart-occupant-lagna");
      } else if (occ.type === "mandi") {
        occText.setAttribute("class", "chart-occupant-mandi");
      } else if (occ.type === "node") {
        occText.setAttribute("class", "chart-occupant-node");
      } else {
        if (occ.key === "moon") {
          occText.setAttribute("class", "chart-occupant-moon");
        } else {
          occText.setAttribute("class", "chart-occupant-planet");
        }
      }
      
      occText.textContent = occ.label;

      const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
      title.textContent = occ.title;
      occText.appendChild(title);
      
      group.appendChild(occText);
    });
    
    svg.appendChild(group);
  }
  
  // B. Draw center 2x2 merged grid (Chart Center info)
  const centerGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
  
  const centerRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  centerRect.setAttribute("x", cellSize);
  centerRect.setAttribute("y", cellSize);
  centerRect.setAttribute("width", cellSize * 2);
  centerRect.setAttribute("height", cellSize * 2);
  centerRect.setAttribute("class", "chart-center-bg");
  centerGroup.appendChild(centerRect);
  
  let centerTitleTa = "இராசி";
  let centerTitleEn = "D1 RASI";
  if (chartType === "D9") {
    centerTitleTa = "நவாம்சம்";
    centerTitleEn = "D9 NAVAMSA";
  } else if (chartType === "D3") {
    centerTitleTa = "திரேக்காணம்";
    centerTitleEn = "D3 DREKKANA";
  } else if (chartType === "Transit") {
    centerTitleTa = "கோசாரம்";
    centerTitleEn = "TRANSIT CHART";
  }
  
  const centerText1 = document.createElementNS("http://www.w3.org/2000/svg", "text");
  centerText1.setAttribute("x", cellSize * 2);
  centerText1.setAttribute("y", cellSize * 2 - 8);
  centerText1.setAttribute("class", "chart-center-text ta-title");
  centerText1.textContent = centerTitleTa;
  centerGroup.appendChild(centerText1);
  
  const centerText2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
  centerText2.setAttribute("x", cellSize * 2);
  centerText2.setAttribute("y", cellSize * 2 + 12);
  centerText2.setAttribute("class", "chart-center-text en-text");
  centerText2.setAttribute("style", "font-size: 11px; fill: var(--text-secondary); font-family: var(--font-astrology)");
  centerText2.textContent = centerTitleEn;
  centerGroup.appendChild(centerText2);
  
  svg.appendChild(centerGroup);
}

function renderRasiChart() {
  const d1Svg = document.getElementById("rasi-chart-svg-d1");
  if (d1Svg) renderChartSVG(d1Svg, "D1");
  
  const d9Svg = document.getElementById("rasi-chart-svg-d9");
  if (d9Svg) renderChartSVG(d9Svg, "D9");
  
  const d3Svg = document.getElementById("rasi-chart-svg-d3");
  if (d3Svg) renderChartSVG(d3Svg, "D3");
  
  const transitSvg = document.getElementById("rasi-chart-svg-transit");
  if (transitSvg) renderChartSVG(transitSvg, "Transit");
  
  const printD1Svg = document.getElementById("print-chart-d1");
  if (printD1Svg) renderChartSVG(printD1Svg, "D1");
  
  const printD9Svg = document.getElementById("print-chart-d9");
  if (printD9Svg) renderChartSVG(printD9Svg, "D9");
  
  const printD3Svg = document.getElementById("print-chart-d3");
  if (printD3Svg) renderChartSVG(printD3Svg, "D3");
  
  const printTransitSvg = document.getElementById("print-chart-transit");
  if (printTransitSvg) renderChartSVG(printTransitSvg, "Transit");
}

// Render dynamic planets table
function renderPlanetsTable() {
  const tbodyBirth = document.getElementById("planets-table-body");
  const tbodyTransit = document.getElementById("transit-table-body");
  
  if (tbodyBirth) {
    tbodyBirth.innerHTML = "";
    populatePlanetsTable(tbodyBirth, "D1");
  }
  
  if (tbodyTransit) {
    tbodyTransit.innerHTML = "";
    populatePlanetsTable(tbodyTransit, "Transit");
  }
}

function populatePlanetsTable(tbody, type) {
  PLANET_NAMES.forEach(planet => {
    let lon = 0;
    if (type === "Transit") {
      lon = currentHoroscopeData.transit[planet.key];
    } else {
      lon = currentHoroscopeData.birth[planet.key];
    }
    
    let rasiIdx = 0;
    if (type === "D1" || type === "Transit") {
      rasiIdx = Math.floor(lon / 30) % 12;
    } else if (type === "D9") {
      rasiIdx = Math.floor(lon / (30 / 9)) % 12;
    } else if (type === "D3") {
      const rasi = Math.floor(lon / 30) % 12;
      const deg = lon % 30;
      if (deg < 10) rasiIdx = rasi;
      else if (deg < 20) rasiIdx = (rasi + 4) % 12;
      else rasiIdx = (rasi + 8) % 12;
    }
    const rasi = RASIS[rasiIdx];
    
    const nakInfo = getNakshatraInfo(lon);
    const dms = formatDMS(lon % 30);
    
    let badgeClass = "badge-planet";
    if (planet.type === "lagna") badgeClass = "badge-lagna";
    else if (planet.type === "node") badgeClass = "badge-node";
    else if (planet.type === "mandi") badgeClass = "badge-mandi";
    
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>
        <div class="planet-name-cell">
          <span class="${badgeClass} lang-ta">${planet.shortTa}</span>
          <span class="${badgeClass} lang-en">${planet.shortEn}</span>
          <span><span class="lang-ta">${planet.nameTa}</span><span class="lang-sep"> / </span><span class="lang-en">${planet.nameEn}</span></span>
        </div>
      </td>
      <td><span class="lang-ta">${rasi.nameTa}</span><span class="lang-sep"> / </span><span class="lang-en">${rasi.nameEn}</span></td>
      <td>${dms}</td>
      <td><span class="lang-ta">${nakInfo.nameTa}</span><span class="lang-sep"> / </span><span class="lang-en">${nakInfo.nameEn}</span></td>
      <td>${nakInfo.pada}</td>
    `;
    tbody.appendChild(tr);
  });
}


// 8. GOOGLE MAPS SETTINGS & AUTOCOMPLETE INTEGRATION
function toggleSettings() {
  const container = document.getElementById("settings-container");
  if (container.style.display === "none") {
    container.style.display = "block";
  } else {
    container.style.display = "none";
  }
}

function saveApiKey() {
  const key = document.getElementById("gmaps-api-key").value.trim();
  if (!key) {
    alert("சரியான கூகுள் மேப்ஸ் API சாவியை உள்ளிடவும்.");
    return;
  }
  localStorage.setItem("gmaps_api_key", key);
  alert("கூகுள் மேப்ஸ் API சாவி சேமிக்கப்பட்டது! அமைப்புகள் செயல்பட பக்கம் மீண்டும் ஏற்றப்படும்.");
  location.reload();
}

function clearApiKey() {
  localStorage.removeItem("gmaps_api_key");
  document.getElementById("gmaps-api-key").value = "";
  alert("கூகுள் மேப்ஸ் API சாவி அழிக்கப்பட்டது! இலவச இருப்பிடத் தேடல் செயல்பட பக்கம் மீண்டும் ஏற்றப்படும்.");
  location.reload();
}

function loadGoogleMapsScript(apiKey) {
  if (window.google && window.google.maps) {
    initGoogleAutocomplete();
    return;
  }
  
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initGoogleAutocomplete`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

window.initGoogleAutocomplete = function() {
  const input = document.getElementById("birth-location");
  const autocomplete = new google.maps.places.Autocomplete(input, {
    types: ["(cities)"]
  });
  
  autocomplete.addListener("place_changed", () => {
    const place = autocomplete.getPlace();
    if (!place.geometry || !place.geometry.location) {
      return;
    }
    
    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();
    
    document.getElementById("latitude").value = lat.toFixed(4);
    document.getElementById("longitude").value = lng.toFixed(4);
    
    // Auto-fetch timezone from Google Maps Time Zone API
    const apiKey = localStorage.getItem("gmaps_api_key");
    if (apiKey) {
      fetchGoogleTimezone(lat, lng, apiKey);
    } else {
      estimateTimezone(lat, lng);
    }
  });
};

function fetchGoogleTimezone(lat, lng, apiKey) {
  const timestamp = Math.floor(Date.now() / 1000);
  const url = `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=${timestamp}&key=${apiKey}`;
  
  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.status === "OK") {
        const totalOffsetHours = (data.rawOffset + data.dstOffset) / 3600;
        document.getElementById("timezone").value = totalOffsetHours.toString();
      } else {
        console.warn("Google Timezone API status not OK:", data.status);
        estimateTimezone(lat, lng);
      }
    })
    .catch(err => {
      console.error("Google Timezone API error:", err);
      estimateTimezone(lat, lng);
    });
};

// ==========================================
// ADVANCED ASTROLOGY CALCULATIONS & READINGS
// ==========================================

// Tab switcher for main tabs
function switchMainTab(tab) {
  const panels = ["panchangam", "charts", "dasa", "ashtakavarga", "aspects", "houses", "comprehensive-report"];
  panels.forEach(p => {
    const panelEl = document.getElementById(`panel-${p}`);
    const tabEl = document.getElementById(`main-tab-${p}`);
    if (panelEl) {
      if (p === tab) {
        panelEl.classList.add("active");
        panelEl.style.display = "block";
      } else {
        panelEl.classList.remove("active");
        panelEl.style.display = "none";
      }
    }
    if (tabEl) {
      if (p === tab) {
        tabEl.classList.add("active");
      } else {
        tabEl.classList.remove("active");
      }
    }
  });
}
window.switchMainTab = switchMainTab;

// 1. ASHTAKAVARGA CALCULATIONS
const ASHTAKAVARGA_RULES = {
  sun: {
    sun: [1, 2, 4, 7, 8, 9, 10, 11],
    moon: [3, 6, 10, 11],
    mars: [1, 2, 4, 7, 8, 9, 10, 11],
    mercury: [3, 5, 6, 9, 10, 11, 12],
    jupiter: [5, 6, 9, 11],
    venus: [6, 7, 12],
    saturn: [1, 2, 4, 7, 8, 9, 10, 11],
    lagna: [3, 4, 6, 10, 11, 12]
  },
  moon: {
    sun: [3, 6, 7, 8, 10, 11],
    moon: [1, 3, 6, 7, 10, 11],
    mars: [2, 3, 5, 6, 9, 10, 11],
    mercury: [1, 3, 4, 5, 7, 8, 10, 11],
    jupiter: [1, 4, 7, 8, 10, 11, 12],
    venus: [3, 4, 5, 7, 9, 10, 11],
    saturn: [3, 5, 6, 11],
    lagna: [3, 6, 10, 11]
  },
  mars: {
    sun: [3, 5, 6, 10, 11],
    moon: [3, 6, 11],
    mars: [1, 2, 4, 7, 8, 10, 11],
    mercury: [3, 5, 6, 11],
    jupiter: [6, 8, 11, 12],
    venus: [6, 8, 11, 12],
    saturn: [1, 4, 7, 8, 9, 10, 11],
    lagna: [1, 3, 6, 10, 11]
  },
  mercury: {
    sun: [5, 6, 11, 12],
    moon: [2, 4, 6, 8, 10, 11],
    mars: [1, 2, 4, 7, 8, 9, 10, 11],
    mercury: [1, 3, 5, 6, 9, 10, 11, 12],
    jupiter: [6, 8, 11, 12],
    venus: [1, 2, 3, 4, 5, 8, 9, 11],
    saturn: [1, 2, 4, 7, 8, 9, 10, 11],
    lagna: [1, 2, 4, 6, 8, 10, 11]
  },
  jupiter: {
    sun: [1, 2, 3, 4, 7, 8, 9, 10, 11],
    moon: [2, 5, 6, 9, 10, 11],
    mars: [1, 2, 4, 7, 8, 10, 11],
    mercury: [1, 2, 4, 5, 6, 9, 10, 11],
    jupiter: [1, 2, 3, 4, 7, 8, 10, 11],
    venus: [2, 5, 6, 9, 10, 11],
    saturn: [3, 5, 6, 12],
    lagna: [1, 2, 4, 5, 6, 7, 9, 10, 11]
  },
  venus: {
    sun: [8, 11, 12],
    moon: [1, 2, 3, 4, 5, 8, 9, 11, 12],
    mars: [3, 5, 6, 9, 11, 12],
    mercury: [3, 5, 6, 9, 11],
    jupiter: [5, 8, 9, 10, 11],
    venus: [1, 2, 3, 4, 5, 8, 9, 10, 11],
    saturn: [3, 4, 5, 8, 9, 10, 11],
    lagna: [1, 2, 3, 4, 5, 8, 9, 11]
  },
  saturn: {
    sun: [1, 2, 4, 7, 8, 10, 11],
    moon: [3, 6, 11],
    mars: [3, 5, 6, 10, 11, 12],
    mercury: [6, 8, 9, 10, 11, 12],
    jupiter: [5, 6, 11, 12],
    venus: [6, 11, 12],
    saturn: [3, 5, 6, 11],
    lagna: [1, 3, 4, 6, 10, 11]
  }
};

function calculateAshtakavarga(birthPositions) {
  const planets = ["sun", "moon", "mars", "mercury", "jupiter", "venus", "saturn"];
  const contributors = ["sun", "moon", "mars", "mercury", "jupiter", "venus", "saturn", "lagna"];
  
  const bavs = {};
  planets.forEach(p => {
    bavs[p] = Array(12).fill(0);
  });
  const sav = Array(12).fill(0);
  
  planets.forEach(p => {
    const rules = ASHTAKAVARGA_RULES[p];
    for (let sign = 0; sign < 12; sign++) {
      let points = 0;
      contributors.forEach(c => {
        const cLon = birthPositions[c];
        const cSign = Math.floor(cLon / 30) % 12;
        const distance = (sign - cSign + 12) % 12 + 1; // 1-based offset
        if (rules[c].includes(distance)) {
          points += 1;
        }
      });
      bavs[p][sign] = points;
      sav[sign] += points;
    }
  });
  
  return { bavs, sav };
}

function renderAshtakavarga() {
  const table = document.getElementById("ashtakavarga-table");
  const tbody = document.getElementById("ashtakavarga-table-body");
  if (!table || !tbody) return;
  
  const birthPositions = currentHoroscopeData.birth;
  const { bavs, sav } = calculateAshtakavarga(birthPositions);
  
  const thead = table.querySelector("thead");
  thead.innerHTML = `
    <tr>
      <th><span class="lang-ta">இராசி</span><span class="lang-sep"> (</span><span class="lang-en">Sign</span><span class="lang-sep">)</span></th>
      <th><span class="lang-ta">சூ</span><span class="lang-sep"> (</span><span class="lang-en">Su</span><span class="lang-sep">)</span></th>
      <th><span class="lang-ta">ச</span><span class="lang-sep"> (</span><span class="lang-en">Mo</span><span class="lang-sep">)</span></th>
      <th><span class="lang-ta">செ</span><span class="lang-sep"> (</span><span class="lang-en">Ma</span><span class="lang-sep">)</span></th>
      <th><span class="lang-ta">பு</span><span class="lang-sep"> (</span><span class="lang-en">Me</span><span class="lang-sep">)</span></th>
      <th><span class="lang-ta">கு</span><span class="lang-sep"> (</span><span class="lang-en">Ju</span><span class="lang-sep">)</span></th>
      <th><span class="lang-ta">சு</span><span class="lang-sep"> (</span><span class="lang-en">Ve</span><span class="lang-sep">)</span></th>
      <th><span class="lang-ta">சனி</span><span class="lang-sep"> (</span><span class="lang-en">Sa</span><span class="lang-sep">)</span></th>
      <th>மொத்தம்</th>
    </tr>
  `;
  
  tbody.innerHTML = "";
  
  for (let i = 0; i < 12; i++) {
    const rasi = RASIS[i];
    let savClass = "bindu-medium";
    if (sav[i] >= 28) savClass = "bindu-strong";
    else if (sav[i] < 25) savClass = "bindu-weak";
    
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td style="font-weight: 600;"><span class="lang-ta">${rasi.nameTa}</span><span class="lang-sep"> / </span><span class="lang-en">${rasi.nameEn}</span></td>
      <td>${bavs.sun[i]}</td>
      <td>${bavs.moon[i]}</td>
      <td>${bavs.mars[i]}</td>
      <td>${bavs.mercury[i]}</td>
      <td>${bavs.jupiter[i]}</td>
      <td>${bavs.venus[i]}</td>
      <td>${bavs.saturn[i]}</td>
      <td class="${savClass}">${sav[i]}</td>
    `;
    tbody.appendChild(tr);
  }
  
  const colTotals = { sun: 0, moon: 0, mars: 0, mercury: 0, jupiter: 0, venus: 0, saturn: 0, sav: 0 };
  for (let i = 0; i < 12; i++) {
    colTotals.sun += bavs.sun[i];
    colTotals.moon += bavs.moon[i];
    colTotals.mars += bavs.mars[i];
    colTotals.mercury += bavs.mercury[i];
    colTotals.jupiter += bavs.jupiter[i];
    colTotals.venus += bavs.venus[i];
    colTotals.saturn += bavs.saturn[i];
    colTotals.sav += sav[i];
  }
  
  const trTotal = document.createElement("tr");
  trTotal.className = "bindu-total";
  trTotal.innerHTML = `
    <td>மொத்தம்<span class="en-text"> (Total)</span></td>
    <td>${colTotals.sun}</td>
    <td>${colTotals.moon}</td>
    <td>${colTotals.mars}</td>
    <td>${colTotals.mercury}</td>
    <td>${colTotals.jupiter}</td>
    <td>${colTotals.venus}</td>
    <td>${colTotals.saturn}</td>
    <td style="font-weight: 800;">${colTotals.sav}</td>
  `;
  tbody.appendChild(trTotal);
  
  renderSAVChart(sav);
}

function renderSAVChart(sav) {
  const svg = document.getElementById("sav-chart-svg");
  if (!svg) return;
  svg.innerHTML = "";
  
  const cellSize = 50;
  
  for (let signIdx = 0; signIdx < 12; signIdx++) {
    const rasi = RASIS[signIdx];
    const gridCell = RASI_GRID_MAP.find(cell => cell.signIndex === signIdx);
    
    const x = gridCell.col * cellSize;
    const y = gridCell.row * cellSize;
    
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.setAttribute("class", "chart-house");
    
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", cellSize);
    rect.setAttribute("height", cellSize);
    rect.setAttribute("class", "chart-house-bg");
    rect.setAttribute("stroke", "rgba(229, 193, 88, 0.25)");
    rect.setAttribute("stroke-width", "1");
    group.appendChild(rect);
    
    const textLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
    textLabel.setAttribute("x", x + 5);
    textLabel.setAttribute("y", y + 11);
    textLabel.setAttribute("class", "chart-house-text");
    textLabel.textContent = rasi.shortTa;
    group.appendChild(textLabel);
    
    const valText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    valText.setAttribute("x", x + 25);
    valText.setAttribute("y", y + 32);
    valText.setAttribute("text-anchor", "middle");
    
    let color = "var(--text-secondary)";
    if (sav[signIdx] >= 28) color = "#55ff55";
    else if (sav[signIdx] < 25) color = "#ff5555";
    
    valText.setAttribute("style", `font-size: 15px; font-weight: 800; fill: ${color}; font-family: var(--font-astrology)`);
    valText.textContent = sav[signIdx];
    group.appendChild(valText);
    
    svg.appendChild(group);
  }
  
  const centerGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
  
  const centerRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  centerRect.setAttribute("x", cellSize);
  centerRect.setAttribute("y", cellSize);
  centerRect.setAttribute("width", cellSize * 2);
  centerRect.setAttribute("height", cellSize * 2);
  centerRect.setAttribute("class", "chart-center-bg");
  centerGroup.appendChild(centerRect);
  
  const centerText1 = document.createElementNS("http://www.w3.org/2000/svg", "text");
  centerText1.setAttribute("x", cellSize * 2);
  centerText1.setAttribute("y", cellSize * 2 - 8);
  centerText1.setAttribute("class", "chart-center-text");
  centerText1.textContent = "சர்வாஷ்டக";
  centerGroup.appendChild(centerText1);
  
  const centerText2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
  centerText2.setAttribute("x", cellSize * 2);
  centerText2.setAttribute("y", cellSize * 2 + 12);
  centerText2.setAttribute("class", "chart-center-text");
  centerText2.setAttribute("style", "font-size: 10px; fill: var(--text-secondary); font-family: var(--font-tamil)");
  centerText2.textContent = "புள்ளிகள்";
  centerGroup.appendChild(centerText2);
  
  svg.appendChild(centerGroup);
}

// 2. VIMSHOTTARI DASA CALCULATIONS
function renderDasaBhuktis() {
  const container = document.getElementById("dasa-list-container");
  if (!container) return;
  container.innerHTML = "";
  
  const birthDate = currentHoroscopeData.meta.birthDate;
  const moonSid = currentHoroscopeData.birth.moon;
  
  const nakSize = 360 / 27; 
  const nakIdx = Math.floor(moonSid / nakSize) % 27;
  const elapsedInNak = moonSid % nakSize;
  const elapsedFraction = elapsedInNak / nakSize;
  
  const dasaOrder = ["ketu", "venus", "sun", "moon", "mars", "rahu", "jupiter", "saturn", "mercury"];
  const dasaYears = { ketu: 7, venus: 20, sun: 6, moon: 10, mars: 7, rahu: 18, jupiter: 16, saturn: 19, mercury: 17 };
  const dasaNamesTa = { ketu: "கேது", venus: "சுக்கிரன்", sun: "சூரியன்", moon: "சந்திரன்", mars: "செவ்வாய்", rahu: "ராகு", jupiter: "குரு", saturn: "சனி", mercury: "புதன்" };
  const dasaNamesEn = { ketu: "Ketu", venus: "Venus", sun: "Sun", moon: "Moon", mars: "Mars", rahu: "Rahu", jupiter: "Jupiter", saturn: "Saturn", mercury: "Mercury" };
  
  const startDasaIndex = nakIdx % 9;
  const YEAR_MS = 365.25 * 24 * 60 * 60 * 1000;
  const nowMs = Date.now();

  let currentMs = birthDate.getTime();
  let currentDasaIdx = startDasaIndex;
  
  for (let i = 0; i < 9; i++) {
    const lord = dasaOrder[currentDasaIdx];
    const nameTa = dasaNamesTa[lord];
    const nameEn = dasaNamesEn[lord];
    const years = dasaYears[lord];
    
    let durationYears = years;
    if (i === 0) {
      durationYears = (1 - elapsedFraction) * years;
    }
    
    const durationMs = durationYears * YEAR_MS;
    const endMs = currentMs + durationMs;

    const startDateStr = new Date(currentMs).toLocaleDateString("ta-IN", { year: 'numeric', month: 'short', day: 'numeric' });
    const endDateStr = new Date(endMs).toLocaleDateString("ta-IN", { year: 'numeric', month: 'short', day: 'numeric' });
    
    const isCurrentDasa = nowMs >= currentMs && nowMs < endMs;

    const dasaEl = document.createElement("div");
    dasaEl.className = "dasa-item" + (isCurrentDasa ? " dasa-current expanded" : "");
    dasaEl.id = `dasa-${i}`;

    dasaEl.innerHTML = `
      <div class="dasa-header" onclick="toggleDasa(${i})">
        <span class="dasa-name" style="display: flex; align-items: center; gap: 0.6rem;">
          <span class="dasa-badge lang-ta">${nameTa} தசா</span>
          <span class="dasa-badge lang-en">${nameEn} Dasa</span>
          ${isCurrentDasa ? '<span class="current-tag">நடப்புத் தசா</span>' : ''}
        </span>
        <span style="display: flex; align-items: center; gap: 1rem;">
          <span class="dasa-dates">${startDateStr} - ${endDateStr}</span>
          <svg class="dasa-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </span>
      </div>
      <div class="dasa-bhuktis" id="bhuktis-${i}">
        <div class="bhukti-grid">
          <!-- Bhuktis populated dynamically -->
        </div>
      </div>
    `;
    
    const bhuktiGrid = dasaEl.querySelector(".bhukti-grid");
    // முதல் தசை பிறப்புக்கு முன்பே தொடங்கியதால், புக்திகளை அதன்
    // உண்மையான தொடக்கத்திலிருந்து முழு நீளத்தில் கணித்து,
    // பிறப்புக்கு முன் முடிந்தவற்றைத் தவிர்க்கிறோம்.
    let bhuktiMs = (i === 0) ? currentMs - elapsedFraction * years * YEAR_MS : currentMs;
    let bhuktiDasaIdx = currentDasaIdx;

    for (let j = 0; j < 9; j++) {
      const bLord = dasaOrder[bhuktiDasaIdx];
      const bNameTa = dasaNamesTa[bLord];
      const bNameEn = dasaNamesEn[bLord];
      const bYears = dasaYears[bLord];

      const bDurationYears = (years * bYears) / 120;
      const bDurationMs = bDurationYears * YEAR_MS;
      const bEndMs = bhuktiMs + bDurationMs;

      if (bEndMs <= currentMs) {
        // பிறப்புக்கு முன்பே முடிந்த புக்தி
        bhuktiMs = bEndMs;
        bhuktiDasaIdx = (bhuktiDasaIdx + 1) % 9;
        continue;
      }

      const bDispStartMs = Math.max(bhuktiMs, currentMs);
      const bStartStr = new Date(bDispStartMs).toLocaleDateString("ta-IN", { year: 'numeric', month: 'short' });
      const bEndStr = new Date(bEndMs).toLocaleDateString("ta-IN", { year: 'numeric', month: 'short' });

      const isCurrentBhukti = nowMs >= bDispStartMs && nowMs < bEndMs;

      const bEl = document.createElement("div");
      bEl.className = "bhukti-item" + (isCurrentBhukti ? " bhukti-current" : "");
      bEl.innerHTML = `
        <div class="bhukti-name"><span class="lang-ta">${bNameTa}</span><span class="lang-sep"> / </span><span class="lang-en">${bNameEn}</span>${isCurrentBhukti ? ' <span class="current-tag">நடப்பு</span>' : ''}</div>
        <div class="bhukti-dates">${bStartStr} - ${bEndStr}</div>
      `;
      bhuktiGrid.appendChild(bEl);
      
      bhuktiMs = bEndMs;
      bhuktiDasaIdx = (bhuktiDasaIdx + 1) % 9;
    }
    
    container.appendChild(dasaEl);
    
    currentMs = endMs;
    currentDasaIdx = (currentDasaIdx + 1) % 9;
  }
}

window.toggleDasa = function(index) {
  const el = document.getElementById(`dasa-${index}`);
  if (!el) return;
  el.classList.toggle("expanded");
};

// 3. READINGS DATABASE DEFINITIONS
const SIGN_READINGS_EN = {
  sun: {
    exalted: "You have immense vitality, leadership qualities, self-respect, and a strong sense of purpose. You excel in authoritative roles.",
    debilitated: "You may experience a lack of self-confidence, identity crises, or conflicts with authority figures and fathers.",
    own: "You have strong self-esteem, pride, and natural capability to govern and manage projects.",
    general: "You are expressive, seek recognition, and possess strong inner vitality."
  },
  moon: {
    exalted: "You possess stable emotions, strong mental peace, high creative imagination, and nurturing instincts.",
    debilitated: "You may face emotional fluctuations, anxiety, mood swings, and a feeling of insecurity.",
    own: "You are highly intuitive, emotionally caring, and deeply connected to family and home.",
    general: "Your mind is active, seeking emotional comfort and creative expression."
  },
  mars: {
    exalted: "You have disciplined energy, high courage, excellent logical reasoning, and absolute focus on your goals.",
    debilitated: "You may suffer from anger management issues, impulsive actions, or lack of direction in your drive.",
    own: "You are brave, highly competitive, and possess strong physical stamina and logic.",
    general: "You have a dynamic drive, assertiveness, and passion to conquer hurdles."
  },
  mercury: {
    exalted: "You possess exceptional analytical skills, brilliant intelligence, and highly logical communication.",
    debilitated: "You might experience confusion in decision making, communication barriers, or nervous anxiety.",
    own: "You are highly communicative, business-minded, witty, and learn new skills rapidly.",
    general: "Your intellect is curious, adaptable, and communicative."
  },
  jupiter: {
    exalted: "You have great wisdom, generous nature, strong spiritual inclination, and luck throughout life.",
    debilitated: "You may experience lack of faith, financial mismanagements, or dry philosophical beliefs.",
    own: "You are highly righteous, optimistic, learned, and serve as a guide to others.",
    general: "You seek wisdom, righteousness, expansion, and higher learning."
  },
  venus: {
    exalted: "You possess unconditional love, highly refined artistic tastes, and supreme happiness in relationships.",
    debilitated: "You may experience relationship conflicts, disappointments in love, or lack of comfort.",
    own: "You are charming, artistic, seeking luxury, and value beauty and relationships highly.",
    general: "You express beauty, love, harmony, and appreciation for arts."
  },
  saturn: {
    exalted: "You are highly democratic, strictly fair, disciplined, and achieve great heights in career through justice.",
    debilitated: "You may face struggles, delays, lack of discipline, and heavy labor with little results.",
    own: "You are highly responsible, patient, hard-working, and practically organized.",
    general: "You face life with structure, discipline, patience, and learning through delay."
  },
  rahu: {
    exalted: "You have a modern approach, foreign connection luck, and succeed through innovative means.",
    debilitated: "You may experience illusions, excessive desires, or unexpected changes.",
    general: "You seek unconventional success and have a strong desire for material growth."
  },
  ketu: {
    exalted: "You possess deep spiritual intuition, detachment from material gains, and psychic tendencies.",
    debilitated: "You may experience inner confusion, identity loss, or spiritual direction conflicts.",
    general: "You seek spiritual liberation, self-analysis, and detachment."
  }
};

const SIGN_READINGS_TA = {
  sun: {
    exalted: "உச்ச சூரியன்: நீங்கள் அபரிமிதமான தன்னம்பிக்கை, தலைமைப் பண்பு மற்றும் கம்பீரத்தைக் கொண்டிருப்பீர்கள். அரசுத்துறையில் நல்ல மதிப்பும் இருக்கும்.",
    debilitated: "நீச சூரியன்: சில நேரங்களில் தன்னம்பிக்கை குறைபாடு, தந்தையுடன் கருத்து வேறுபாடு அல்லது கண் சம்பந்தப்பட்ட உபாதைகள் ஏற்படலாம்.",
    own: "ஆட்சி சூரியன்: சுயமரியாதை, ஆளுமைத்திறன் மற்றும் சுயமாகச் சிந்தித்து முடிவெடுக்கும் ஆற்றலைத் தரும்.",
    general: "சூரியன் சேர்க்கை: கம்பீரம், கௌரவம் மற்றும் சுயமரியாதைக்கு முக்கியத்துவம் தருவீர்கள்."
  },
  moon: {
    exalted: "உச்ச சந்திரன்: அமைதியான மனநிலை, தெளிவான சிந்தனை, கலைகளில் ஆர்வம் மற்றும் தாயின் மீது மிகுந்த அன்பு இருக்கும்.",
    debilitated: "நீச சந்திரன்: அடிக்கடி மன உளைச்சல், கற்பனை பயம், தாயின் ஆரோக்கியத்தில் அக்கறை அல்லது மனக் குழப்பங்கள் ஏற்படலாம்.",
    own: "ஆட்சி சந்திரன்: அதிக இரக்க குணம், கற்பனைத் திறன் மற்றும் குடும்பப் பற்று உடையவராகத் திகழ்வீர்கள்.",
    general: "சந்திரன் சேர்க்கை: உணர்ச்சிவசப்படும் குணம், கற்பனை வளம் மற்றும் சுறுசுறுப்பு இருக்கும்."
  },
  mars: {
    exalted: "உச்ச செவ்வாய்: அபார தைரியம், நிலம் சார்ந்த யோகம், சிறந்த நிர்வாகத்திறன் மற்றும் தடைகளை உடைக்கும் ஆற்றல் இருக்கும்.",
    debilitated: "நீச செவ்வாய்: தேவையற்ற கோபம், அவசரப்பட்டு முடிவெடுத்தல், அல்லது உடன்பிறந்தவர்களுடன் கருத்து வேறுபாடுகள் வரலாம்.",
    own: "ஆட்சி செவ்வாய்: மன உறுதி, தைரியம், போட்டித் திறன் மற்றும் சுறுசுறுப்பைக் கொடுக்கும்.",
    general: "செவ்வாய் சேர்க்கை: எதையும் எதிர்த்து நிற்கும் குணம் மற்றும் நேர்மையான எண்ணம் இருக்கும்."
  },
  mercury: {
    exalted: "உச்ச புதன்: கணிதத்தில் ஆர்வம், சமயோசித புத்தி, சிறந்த பேச்சாற்றல் மற்றும் வியாபாரத்தில் நல்ல லாபத்தைப் பெறுவீர்கள்.",
    debilitated: "நீச புதன்: கல்வியில் கவனம் சிதறுதல், நரம்புத் தளர்ச்சி அல்லது சரியான முடிவெடுக்கத் தடுமாறுதல் ஏற்படலாம்.",
    own: "ஆட்சி புதன்: சிறந்த கல்வி, எழுத்தாற்றல், மற்றும் சாதுரியமான பேச்சுத் திறனை அளிக்கும்.",
    general: "புதன் சேர்க்கை: புதிய விஷயங்களைக் கற்றுக்கொள்வதில் ஆர்வம் மற்றும் புத்தி கூர்மை இருக்கும்."
  },
  jupiter: {
    exalted: "உச்ச குரு: ஆன்மீக நாட்டம், பெரியோர்களின் ஆசி, ஞானம், நற்பெயர் மற்றும் வாழ்வில் அதிர்ஷ்டம் நிறைந்திருக்கும்.",
    debilitated: "நீச குரு: ஆன்மீகத்தில் அவநம்பிக்கை, பண விரயம் அல்லது வழிகாட்டுதலில் தெளிவில்லாத நிலை ஏற்படலாம்.",
    own: "ஆட்சி குரு: நேர்மை, கல்வி, தர்ம குணம் மற்றும் பிறரை நல்வழிப்படுத்தும் ஆற்றலைத் தரும்.",
    general: "குரு சேர்க்கை: ஒழுக்கம், நன்னடத்தை மற்றும் அறிவார்ந்த சிந்தனைகள் இருக்கும்."
  },
  venus: {
    exalted: "உச்ச சுக்கிரன்: கலை ஆர்வம், வசீகரத் தோற்றம், சொகுசு வாழ்க்கை மற்றும் திருமண வாழ்க்கையில் மிகுந்த மகிழ்ச்சியைத் தரும்.",
    debilitated: "நீச சுக்கிரன்: குடும்ப உறவுகளில் விரிசல், கலைகளில் தடங்கல் அல்லது ஆடம்பரச் செலவுகளால் பாதிப்பு வரலாம்.",
    own: "ஆட்சி சுக்கிரன்: அழகுணர்வு, வாகன யோகம், கலைத் திறமை மற்றும் சமூகத்தில் நன்மதிப்பைப் தரும்.",
    general: "சுக்கிரன் சேர்க்கை: மகிழ்ச்சியான குணம், அன்பு மற்றும் ஆடம்பரப் பொருட்கள் மீது ஈடுபாடு இருக்கும்."
  },
  saturn: {
    exalted: "உச்ச சனி: நேர்மை, மக்கள் ஆதரவு, உழைப்பால் உயர்வு மற்றும் நீண்ட ஆயுளைப் பெறுவீர்கள்.",
    debilitated: "நீச சனி: தொழிலில் தடைகள், கடின உழைப்புக்குக் குறைவான பலன், அல்லது சோம்பல் குணம் ஏற்படலாம்.",
    own: "ஆட்சி சனி: உழைக்கும் திறன், பொறுமை, கடமை உணர்வு மற்றும் தலைமைப் பண்பைக் கொடுக்கும்.",
    general: "சனி சேர்க்கை: நிதானம், ஒழுக்கம், மற்றும் அனுபவத்தின் மூலம் படிப்பினைகளைப் பெறுவீர்கள்."
  },
  rahu: {
    exalted: "உச்ச ராகு: வெளிநாட்டு யோகம், எதிர்பாராத திடீர் திருப்பங்கள் மற்றும் அதிர்ஷ்டத்தைப் பெற வைக்கும்.",
    debilitated: "நீச ராகு: தேவையற்ற கற்பனைப் பயம் அல்லது பேராசையால் சில நஷ்டங்களைச் சந்திக்க நெரிடலாம்.",
    general: "ராகு சேர்க்கை: புதிய சிந்தனைகள் மற்றும் இலக்குகளை வேகமாக அடையத் துடிப்பீர்கள்."
  },
  ketu: {
    exalted: "உச்ச கேது: ஆன்மீக ஞானம், தத்துவ அறிவு, மற்றும் மன அமைதியைத் தரும்.",
    debilitated: "நீச கேது: மனதில் ஒருவித குழப்பம் அல்லது தனிமை உணர்வைத் தோற்றுவிக்கலாம்.",
    general: "கேது சேர்க்கை: உலக விஷயங்களில் பற்றற்ற நிலை மற்றும் ஆன்மீகத் தேடல் இருக்கும்."
  }
};

const HOUSE_READINGS_EN = {
  sun: [
    "Sun in 1st House: Highly self-confident, strong-willed, but can be somewhat egoistic.",
    "Sun in 2nd House: Good orator, values family, but may experience financial fluctuations.",
    "Sun in 3rd House: Courageous, self-made, successful in travels and sibling relations.",
    "Sun in 4th House: Values mother and homeland, seeks peace at home, successful in real estate.",
    "Sun in 5th House: Highly creative, intelligent, proud of children, interest in speculations.",
    "Sun in 6th House: Easily overcomes enemies and debts, hardworking, success in services.",
    "Sun in 7th House: Strong-willed spouse, seeks balance, but may experience partner conflicts.",
    "Sun in 8th House: Strong intuition, research mind, but must care for health and sudden delays.",
    "Sun in 9th House: Spiritual, respects father and teachers, loves higher studies and travel.",
    "Sun in 10th House: High career success, authority, leadership, and public recognition.",
    "Sun in 11th House: Vast social circle, high gains, desires are fulfilled through influential friends.",
    "Sun in 12th House: Detachment, success in foreign lands, interest in meditation and isolation."
  ],
  moon: [
    "Moon in 1st House: Sensitive, attractive, emotionally expressive, and family-oriented.",
    "Moon in 2nd House: Sweet speech, loves fine dining, financially stable through family.",
    "Moon in 3rd House: Artistic mind, loves writing and communications, close to siblings.",
    "Moon in 4th House: Deep attachment to mother, loves comforts, peaceful domestic life.",
    "Moon in 5th House: Highly imaginative, interest in arts, deep affection for children.",
    "Moon in 6th House: Emotional health fluctuations, caring profession, service-oriented.",
    "Moon in 7th House: Loving and caring partner, success in public partnerships.",
    "Moon in 8th House: Highly intuitive, psychic dreams, undergoes emotional transformations.",
    "Moon in 9th House: Philosophic mind, loves long travels, righteous, spiritual.",
    "Moon in 10th House: Career changes, public dealing career, successful in retail or hospitality.",
    "Moon in 11th House: Emotional gains, many female friends, supportive social group.",
    "Moon in 12th House: Loves solitude, active dream life, spiritual inclination, foreign links."
  ],
  mars: [
    "Mars in 1st House: High energy, athletic, dynamic, but can be impulsive or short-tempered.",
    "Mars in 2nd House: Bold speech, can be argumentative, works hard for wealth.",
    "Mars in 3rd House: Extremely brave, protective of siblings, mechanically skilled.",
    "Mars in 4th House: Protective of home, differences with mother, domestic conflicts possible.",
    "Mars in 5th House: High intelligence, competitive in sports/arts, protective of children.",
    "Mars in 6th House: Dynamic enemy crusher, excels in service, high stamina.",
    "Mars in 7th House: Passionate spouse, partnerships require patience due to power struggles.",
    "Mars in 8th House: Sharp intuition, sudden financial gains/losses, longevity focus.",
    "Mars in 9th House: Fights for justice, differences with elders' beliefs, loves travel.",
    "Mars in 10th House: High career drive, executive leadership, success in engineering or police.",
    "Mars in 11th House: Achieves goals aggressively, gains through competitive ventures.",
    "Mars in 12th House: Spends energy on secret matters, success in foreign services, sleep issues."
  ],
  mercury: [
    "Mercury in 1st House: Witty, intellectual, youthfulness, highly communicative.",
    "Mercury in 2nd House: Sweet speaker, financial analysis skills, success in business/trade.",
    "Mercury in 3rd House: Skillful writer, loves reading, active travels, good sibling ties.",
    "Mercury in 4th House: Intelligent domestic conversations, loves reading at home, good education.",
    "Mercury in 5th House: High intellect, interest in logic games, creative writing, proud children.",
    "Mercury in 6th House: Analytical problem solver, health conscious, details-oriented career.",
    "Mercury in 7th House: Intellectual spouse, communicative partnerships, public speaker.",
    "Mercury in 8th House: Deep research mind, occult interest, financial investigator.",
    "Mercury in 9th House: Loves higher philosophy, writer, translator, broad knowledge.",
    "Mercury in 10th House: Career in communications, marketing, writing, or analytics.",
    "Mercury in 11th House: Broad intellectual network, gains through business or advisory roles.",
    "Mercury in 12th House: Private thinker, spiritual writer, foreign education, overthinking."
  ],
  jupiter: [
    "Jupiter in 1st House: Optimistic, wise, respected, good health, and protective aura.",
    "Jupiter in 2nd House: Wealthy, sweet-tongued, enjoys family bliss, righteous speech.",
    "Jupiter in 3rd House: Friendly, good advisor, successful in writing and sibling relations.",
    "Jupiter in 4th House: Peaceful home, rich comforts, highly educated mother, spiritual home.",
    "Jupiter in 5th House: Intelligent children, high knowledge, interest in ancient scriptures.",
    "Jupiter in 6th House: Free from severe illness, debts are cleared easily, helpful nature.",
    "Jupiter in 7th House: Righteous and supportive spouse, successful partnerships, legal advisor.",
    "Jupiter in 8th House: Unearned wealth, deep occult secrets knowledge, peaceful longevity.",
    "Jupiter in 9th House: Highly spiritual, lucky, travel lover, respected father/teacher.",
    "Jupiter in 10th House: Honorable career, advisor, teacher, manager, or judge role.",
    "Jupiter in 11th House: Excellent gains, noble friends, desires are easily fulfilled.",
    "Jupiter in 12th House: Deep spiritual liberation seeker, charity giver, foreign link success."
  ],
  venus: [
    "Venus in 1st House: Highly attractive, charming, artistic, seeking comfort and beauty.",
    "Venus in 2nd House: Wealthy, attractive face, loves singing/arts, gains from spouse/family.",
    "Venus in 3rd House: Artistic sibling relations, loves short luxury travels, creative writer.",
    "Venus in 4th House: Luxurious home, vehicles, loving mother, peaceful domestic bliss.",
    "Venus in 5th House: Deep romantic nature, artistic children, creative intelligence.",
    "Venus in 6th House: Harmonious service, cares for pets, health resolved through comfort.",
    "Venus in 7th House: Loving, beautiful partner, marital bliss, public charm.",
    "Venus in 8th House: Legacy gains, occult beauty, high rejuvenation capability.",
    "Venus in 9th House: Lucky, respects divine art, foreign luxury travel, spiritual love.",
    "Venus in 10th House: Career in fashion, arts, entertainment, or luxury goods.",
    "Venus in 11th House: Gains through women, vast social network, luxury wishes fulfilled.",
    "Venus in 12th House: High bedtime comforts, charity lover, foreign settlement lux."
  ],
  saturn: [
    "Saturn in 1st House: Serious personality, early life struggles, mature and highly disciplined.",
    "Saturn in 2nd House: Delayed wealth, speaks carefully, works hard to support family.",
    "Saturn in 3rd House: Highly courageous, cautious, struggles with siblings but self-made.",
    "Saturn in 4th House: Delayed home/property, heavy domestic responsibilities, distant mother ties.",
    "Saturn in 5th House: Delayed children, serious intellect, disciplined creative work.",
    "Saturn in 6th House: Crushes debts and disease through daily hard work and discipline.",
    "Saturn in 7th House: Mature/older spouse, delayed marriage, highly stable partnerships.",
    "Saturn in 8th House: Long life, struggle in legacy, research mind, deep worker.",
    "Saturn in 9th House: Delayed luck, serious spiritual practitioner, differences with father.",
    "Saturn in 10th House: Great career success after delays, high discipline, works for the public.",
    "Saturn in 11th House: Cautious social circle, stable gains, achieves desires later in life.",
    "Saturn in 12th House: High expenses, spiritual solitude, delayed foreign achievements."
  ],
  rahu: [
    "Rahu in 1st House: Unique identity, seeking fame, unconventional looks.",
    "Rahu in 2nd House: Unconventional family, foreign language/food interest, wealth through innovation.",
    "Rahu in 3rd House: Highly brave, tech-savvy communicator, unconventional sibling ties.",
    "Rahu in 4th House: Foreign home/settlement, maternal changes, high home ambition.",
    "Rahu in 5th House: Out-of-box creative skills, unique child focus, speculative gains.",
    "Rahu in 6th House: Fearless in crisis, wins disputes, unique health choices.",
    "Rahu in 7th House: Unconventional marriage/partner, business innovator.",
    "Rahu in 8th House: Sudden life transformations, deep secret research, hidden gains.",
    "Rahu in 9th House: Unconventional spiritual views, foreign travel luck, unique mentors.",
    "Rahu in 10th House: High career status, seeking power, public influence through modern tech.",
    "Rahu in 11th House: Massive networks, foreign gains, non-traditional income sources.",
    "Rahu in 12th House: Spiritual isolation, foreign migration, active sub-conscious mind."
  ],
  ketu: [
    "Ketu in 1st House: Highly spiritual, detached, seeks self-realization, mysterious look.",
    "Ketu in 2nd House: Quiet speech, detached from family wealth, simple lifestyle.",
    "Ketu in 3rd House: Courageous but quiet, spiritual writing, detached siblings.",
    "Ketu in 4th House: Detached from home comforts, seek peace in ashram/nature, maternal differences.",
    "Ketu in 5th House: High spiritual intelligence, past-life talent in occult, detached kids.",
    "Ketu in 6th House: Fearless, cures diseases spiritually, win-win conflicts solver.",
    "Ketu in 7th House: Spiritual spouse, seeking deep soul connections, detached public life.",
    "Ketu in 8th House: Absolute occult mastery, deep secrets, sudden spiritual insights.",
    "Ketu in 9th House: Deep religious detachment, high spiritual gurus, loves pilgrimages.",
    "Ketu in 10th House: Detached from fame/status, works silently, spiritual profession.",
    "Ketu in 11th House: Detached from large crowds, stable simple gains, content with wishes.",
    "Ketu in 12th House: Absolute spiritual liberation (Moksha) seeker, meditation master, dream sleep."
  ]
};

const HOUSE_READINGS_TA = {
  sun: [
    "சூரியன் 1-ம் வீட்டில்: தன்னம்பிக்கை, கம்பீரம், தலைமை தாங்கும் ஆற்றல், ஆனால் சில நேரங்களில் அதிக கோபம் ஏற்படலாம்.",
    "சூரியன் 2-ம் வீட்டில்: கம்பீரமான பேச்சு, குடும்பத்தின் மீது பற்று, அரசு வழி வரவுகள், ஆனால் சில சேமிப்புத் தடுமாற்றங்கள்.",
    "சூரியன் 3-ம் வீட்டில்: அதிக தைரியம், பயணங்கள் மூலம் வெற்றி, இளைய சகோதரர்களுடன் சில கருத்து வேறுபாடுகள்.",
    "சூரியன் 4-ம் வீட்டில்: தாய்நாட்டின் மீது பற்று, சொத்து யோகம், கல்வியில் உயர்வு, ஆனால் குடும்பத்தில் சில அமைதியின்மை.",
    "சூரியன் 5-ம் வீட்டில்: புத்தி கூர்மை, பூர்வ புண்ணிய யோகம், குழந்தைகள் மூலம் பெருமை, ஆன்மீக ஈடுபாடு.",
    "சூரியன் 6-ம் வீட்டில்: எதிரிகளை வெல்லும் ஆற்றல், கடன்களைத் தீர்க்கும் உழைப்பு, அரசு வேலை அல்லது சேவைத்துறை வெற்றி.",
    "சூரியன் 7-ம் வீட்டில்: குணமுள்ள ஆனால் பிடிவாதமான துணை, கூட்டுத் தொழிலில் வெற்றி, பொது வாழ்வில் மதிப்பு.",
    "சூரியன் 8-ம் வீட்டில்: ஆன்மீகத் தேடல், திடீர் திருப்பங்கள், ஆரோக்கியத்தில் கவனம் தேவை.",
    "சூரியன் 9-ம் வீட்டில்: தந்தையின் மீது மரியாதை, தர்ம சிந்தனை, நீண்ட தூரப் பயணங்கள் மற்றும் ஆன்மீக யோகம்.",
    "சூரியன் 10-ம் வீட்டில்: மிகச் சிறந்த தொழில் யோகம், அதிகாரம், அரசுத்துறை அல்லது மேலாண்மைத் துறையில் உயர்வு.",
    "சூரியன் 11-ம் வீட்டில்: மூத்த சகோதரர் ஆதரவு, நல்ல லாபங்கள், உயர்மட்ட நண்பர்களின் உதவிகள்.",
    "சூரியன் 12-ம் வீட்டில்: ஆன்மீக ஈடுபாடு, வெளிநாடு செல்லும் யோகம், தான தர்மங்கள் செய்வதில் ஆர்வம்."
  ],
  moon: [
    "சந்திரன் 1-ம் வீட்டில்: அமைதியான குணம், வசீகரத் தோற்றம், குடும்பப் பற்று.",
    "சந்திரன் 2-ம் வீட்டில்: இனிமையான பேச்சு, குடும்ப மகிழ்ச்சி, நல்ல பொருளாதார நிலை.",
    "சந்திரன் 3-ம் வீட்டில்: எழுத்தாற்றல், பிரயாணங்களில் ஆர்வம், சகோதர ஆதரவு.",
    "சந்திரன் 4-ம் வீட்டில்: தாயிடம் மிகுந்த பாசம், வீடு வாகன வசதிகள், மன நிம்மதி.",
    "சந்திரன் 5-ம் வீட்டில்: கற்பனை வளம், பூர்வ புண்ணிய யோகம், பிள்ளைகளுடன் நல்ல உறவு.",
    "சந்திரன் 6-ம் வீட்டில்: மன அமைதித் தடுமாற்றம், உழைப்பு, உடல் நலனில் அக்கறை தேவை.",
    "சந்திரன் 7-ம் வீட்டில்: அன்பான துணை, கூட்டுத் தொழிலில் வெற்றி, பொது உறவுகள் நன்மை.",
    "சந்திரன் 8-ம் வீட்டில்: அதிக உள்ளுணர்வு, திடீர் மாற்றங்கள், உணர்ச்சிவசப்படுதல்.",
    "சந்திரன் 9-ம் வீட்டில்: ஆன்மீக நாட்டம், நீண்ட தூரப் பயணங்கள், தந்தையிடம் அன்பு.",
    "சந்திரன் 10-ம் வீட்டில்: தொழிலில் மாற்றங்கள், பொதுத் தொடர்பு சார்ந்த துறைகளில் வெற்றி.",
    "சந்திரன் 11-ம் வீட்டில்: லாபங்கள், பெண் நண்பர்கள் ஆதரவு, ஆசைகள் பூர்த்தியாகும்.",
    "சந்திரன் 12-ம் வீட்டில்: ஆன்மீகத் தேடல், தூக்கக் குறைபாடு, வெளிநாட்டுத் தொடர்புகள்."
  ],
  mars: [
    "செவ்வாய் 1-ம் வீட்டில்: அதிக கோபம், தைரியம், சுறுசுறுப்பு, அவசரப் புத்தி.",
    "செவ்வாய் 2-ம் வீட்டில்: காரசாரமான பேச்சு, குடும்பத்தில் விவாதங்கள், உழைப்பால் செல்வம்.",
    "செவ்வாய் 3-ம் வீட்டில்: மிகுந்த தைரியம், விளையாட்டு/நிர்வாகத் துறை ஆர்வம், சகோதர விரிசல்.",
    "செவ்வாய் 4-ம் வீட்டில்: வீடு மனை யோகம், தாயின் ஆரோக்கியத்தில் கவனம், வீட்டு விவாதங்கள்.",
    "செவ்வாய் 5-ம் வீட்டில்: கூர்மையான அறிவு, போட்டித் திறன், பிள்ளைகளுடன் கருத்து வேறுபாடு.",
    "செவ்வாய் 6-ம் வீட்டில்: எதிரிகளை வெல்லும் பராக்கிரமம், கடன் நிவர்த்தி, உடல் உறுதி.",
    "செவ்வாய் 7-ம் வீட்டில்: ஆற்றல் மிக்க துணை, திருமண வாழ்வில் விட்டுக்கொடுத்துச் செல்லுதல் நல்லது.",
    "செவ்வாய் 8-ம் வீட்டில்: திடீர் மாற்றங்கள், விபத்துகளில் எச்சரிக்கை, ஆயுள் பலம்.",
    "செவ்வாய் 9-ம் வீட்டில்: நியாயத்திற்காகப் போராடுதல், தந்தையிடம் கருத்து வேறுபாடு, பயணங்கள்.",
    "செவ்வாய் 10-ம் வீட்டில்: தொழில் யோகம், பொறியியல்/நிர்வாகத் துறையில் தலைமைப் பொறுப்பு.",
    "செவ்வாய் 11-ம் வீட்டில்: போட்டித் துறைகள் மூலம் ஆதாயம், உழைப்பால் லாபம்.",
    "செவ்வாய் 12-ம் வீட்டில்: அதிக செலவுகள், தூக்கத் தடுமாற்றம், வெளிநாட்டுப் பணி யோகம்."
  ],
  mercury: [
    "புதன் 1-ம் வீட்டில்: புத்தி கூர்மை, இளமையான தோற்றம், சாதுரியமான பேச்சு.",
    "புதன் 2-ம் வீட்டில்: பேச்சாற்றல், கணக்கு வழக்குகளில் நிபுணத்துவம், வியாபார லாபங்கள்.",
    "புதன் 3-ம் வீட்டில்: எழுத்தாற்றல், ஊடகத் தொடர்பு ஆர்வம், சுறுசுறுப்பான பிரயாணங்கள்.",
    "புதன் 4-ம் வீட்டில்: சிறந்த கல்வி, புத்திசாலித்தனமான உரையாடல், தாயின் வழி அறிவு.",
    "புதன் 5-ம் வீட்டில்: கலை நுணுக்கம், புத்திர பாக்கியம், கணித/ஆராய்ச்சித் திறன்.",
    "புதன் 6-ம் வீட்டில்: பகுத்தறியும் ஆற்றல், வாதத் திறமை, ஆரோக்கியத்தில் அக்கறை.",
    "புதன் 7-ம் வீட்டில்: அறிவுள்ள துணை, சாதுரிய பேச்சு மூலம் காரியங்களைச் சாதித்தல்.",
    "புதன் 8-ம் வீட்டில்: ஆராய்ச்சி சிந்தனை, ரகசியங்களைக் கண்டறிதல், திடீர் யோகம்.",
    "புதன் 9-ம் வீட்டில்: தத்துவ ஞானம், பன்மொழித் புலமை, ஆன்மீகப் புத்தக வாசிப்பு.",
    "புதன் 10-ம் வீட்டில்: எழுத்து, கணக்கு, தகவல் தொழில்நுட்பம் சார்ந்த தொழில் யோகம்.",
    "புதன் 11-ம் வீட்டில்: அறிவுபூர்வமான நண்பர்கள், வியாபார விரிவாக்கம், லாபங்கள்.",
    "புதன் 12-ம் வீட்டில்: தனிமை சிந்தனை, ஆன்மீக எழுத்து, வெளிநாட்டுக் கல்வி, அதிக சிந்தனை."
  ],
  jupiter: [
    "குரு 1-ம் வீட்டில்: கௌரவம், ஞானம், மரியாதை, நல் ஆரோக்கியம், தெய்வீகப் பாதுகாப்பு.",
    "குரு 2-ம் வீட்டில்: தன யோகம், இனிமையான பேச்சு, குடும்ப மகிழ்ச்சி, நேர்மையான வார்த்தைகள்.",
    "குரு 3-ம் வீட்டில்: நட்பு குணம், சிறந்த ஆலோசகர், எழுத்து மற்றும் சகோதர வழியில் வெற்றி.",
    "குரு 4-ம் வீட்டில்: அமைதியான இல்லறம், சொகுசு வசதிகள், அறிவுள்ள தாய், ஆன்மீக இல்லம்.",
    "குரு 5-ம் வீட்டில்: அறிவுள்ள குழந்தைகள், சிறந்த ஞானம், ஆன்மீக நூல்களில் ஆர்வம்.",
    "குரு 6-ம் வீட்டில்: பெரிய நோய்கள் இல்லாத நிலை, கடன்கள் எளிதில் தீரும், உதவும் குணம்.",
    "குரு 7-ம் வீட்டில்: நேர்மையான அன்பான துணை, கூட்டுத் தொழில் வெற்றி, சட்ட ஆலோசனை.",
    "குரு 8-ம் வீட்டில்: எதிர்பாராத தனவரவு, ரகசிய ஞானம், நீண்ட ஆயுள்.",
    "குரு 9-ம் வீட்டில்: மிகுந்த ஆன்மீகம், அதிர்ஷ்டம், ஆன்மீகப் பயணம், தந்தை/குருவின் மதிப்பு.",
    "குரு 10-ம் வீட்டில்: கௌரவமான தொழில், ஆசிரியர், ஆலோசகர், மேலாளர் அல்லது நீதிபதி பதவி.",
    "குரு 11-ம் வீட்டில்: சிறந்த லாபங்கள், உன்னத நண்பர்கள், ஆசைகள் எளிதில் நிறைவேறும்.",
    "குரு 12-ம் வீட்டில்: ஆன்மீக முக்தித் தேடல், தர்ம சிந்தனை, வெளிநாட்டுத் தொடர்புகளால் வெற்றி."
  ],
  venus: [
    "சுக்கிரன் 1-ம் வீட்டில்: அழகான தோற்றம், வசீகரம், கலை ஆர்வம், சொகுசு மற்றும் அழகு தேடல்.",
    "சுக்கிரன் 2-ம் வீட்டில்: தன யோகம், அழகான முகம், இசை/கலைகளில் ஆர்வம், குடும்பம்/துணை மூலம் லாபம்.",
    "சுக்கிரன் 3-ம் வீட்டில்: கலை உணர்வுள்ள சகோதர உறவுகள், சொகுசுப் பயணங்கள், படைப்பு எழுத்தாற்றல்.",
    "சுக்கிரன் 4-ம் வீட்டில்: சொகுசு வீடு, வாகன யோகம், அன்பான தாய், மகிழ்ச்சியான குடும்ப வாழ்க்கை.",
    "சுக்கிரன் 5-ம் வீட்டில்: காதல் குணம், கலைத் திறன் கொண்ட குழந்தைகள், படைப்பாற்றல் அறிவு.",
    "சுக்கிரன் 6-ம் வீட்டில்: இணக்கமான பணிச் சூழல், செல்லப்பிராணிகள் வளர்ப்பு, ஆரோக்கியம் மேம்படும்.",
    "சுக்கிரன் 7-ம் வீட்டில்: அன்பான அழகான துணை, திருமண மகிழ்ச்சி, பொது வாழ்வில் வசீகரம்.",
    "சுக்கிரன் 8-ம் வீட்டில்: பரம்பரை சொத்து யோகம், ரகசியக் கலைகளில் ஆர்வம், புதுப்பொலிவு பெறும் ஆற்றல்.",
    "சுக்கிரன் 9-ம் வீட்டில்: அதிர்ஷ்டம், தெய்வீகக் கலைகளில் மரியாதை, வெளிநாட்டு சொகுசுப் பயணம், ஆன்மீகக் காதல்.",
    "சுக்கிரன் 10-ம் வீட்டில்: ஆடை வடிவமைப்பு, கலைகள், பொழுதுபோக்கு அல்லது சொகுசுப் பொருட்கள் சார்ந்த தொழில் யோகம்.",
    "சுக்கிரன் 11-ம் வீட்டில்: பெண்கள் மூலம் ஆதாயம், பெரிய நண்பர்கள் வட்டம், சொகுசு ஆசைகள் பூர்த்தியாதல்.",
    "சுக்கிரன் 12-ம் வீட்டில்: சொகுசான தூக்கம், தான தர்மங்களில் ஆர்வம், வெளிநாட்டில் சொகுசு வாழ்க்கை."
  ],
  saturn: [
    "சனி 1-ம் வீட்டில்: நிதானமான குணம், ஆரம்ப கால போராட்டங்கள், முதிர்ச்சி மற்றும் ஒழுக்கம்.",
    "சனி 2-ம் வீட்டில்: நிதானமான சேமிப்பு, அளவான பேச்சு, குடும்பத்தைக் காப்பாற்ற கடின உழைப்பு.",
    "சனி 3-ம் வீட்டில்: மிகுந்த தைரியம், எச்சரிக்கை உணர்வு, சகோதரர்களால் தடைகள், சுய உழைப்பால் முன்னேற்றம்.",
    "சனி 4-ம் வீட்டில்: சொத்துக்கள் வாங்குவதில் தாமதம், குடும்பப் பொறுப்புகள், தாயிடம் சற்று விலகல்.",
    "சனி 5-ம் வீட்டில்: புத்திர பாக்கியத்தில் தாமதம், தீவிரமான அறிவுக்கூர்மை, ஒழுக்கமான படைப்பாற்றல்.",
    "சனி 6-ம் வீட்டில்: கடின உழைப்பு மற்றும் ஒழுக்கம் மூலம் கடன்கள் மற்றும் நோய்களை வெல்லுதல்.",
    "சனி 7-ம் வீட்டில்: முதிர்ச்சியான துணை, தாமதத் திருமணம், நிலையான கூட்டணிகள்.",
    "சனி 8-ம் வீட்டில்: நீண்ட ஆயுள், பரம்பரை சொத்துக்களில் தடைகள், ஆராய்ச்சி குணம், கடின உழைப்பு.",
    "சனி 9-ம் வீட்டில்: அதிர்ஷ்டத்தில் தாமதம், தீவிர ஆன்மீகப் பயிற்சி, தந்தையுடன் கருத்து வேறுபாடுகள்.",
    "சனி 10-ம் வீட்டில்: தாமதத்திற்குப் பிறகு சிறந்த தொழில் வெற்றி, கடமை உணர்வு, பொதுநலச் சேவை.",
    "சனி 11-ம் வீட்டில்: குறைந்த எண்ணிக்கையிலான நண்பர்கள், நிலையான லாபங்கள், பிற்காலத்தில் ஆசைகள் நிறைவேறும்.",
    "சனி 12-ம் வீட்டில்: அதிக விரயங்கள், ஆன்மீகத் தனிமை, வெளிநாட்டு முயற்சிகளில் தாமத வெற்றி."
  ],
  rahu: [
    "ராகு 1-ம் வீட்டில்: தனித்துவமான அடையாளம், புகழைத் தேடுதல், மாறுபட்ட தோற்றம்.",
    "ராகு 2-ம் வீட்டில்: மாறுபட்ட குடும்பம், அந்நிய மொழி/உணவில் ஆர்வம், புதிய வழிகளில் தன வரவு.",
    "ராகு 3-ம் வீட்டில்: மிகுந்த தைரியம், நவீன தகவல் தொடர்பு ஆர்வம், சகோதரர்களுடன் மாறுபட்ட உறவு.",
    "ராகு 4-ம் வீட்டில்: வெளிநாட்டில் வசிக்கும் யோகம், தாயின் வாழ்வில் மாற்றங்கள், சொகுசு வீட்டின் மீது ஆசை.",
    "ராகு 5-ம் வீட்டில்: புதுமையான படைப்பாற்றல், குழந்தைகளிடம் தனித்துவமான அணுகுமுறை, ஊக வணிக லாபங்கள்.",
    "ராகு 6-ம் வீட்டில்: சவால்களைத் துணிவுடன் எதிர்கொள்ளுதல், வழக்குகளில் வெற்றி, விசித்திரமான மருத்துவ முறைகள்.",
    "ராகு 7-ம் வீட்டில்: மாறுபட்ட திருமணம் அல்லது துணை, கூட்டுத் தொழிலில் புதுமைகள்.",
    "ராகு 8-ம் வீட்டில்: திடீர் மாற்றங்கள், ரகசிய ஆராய்ச்சி, மறைமுக வழிகளில் ஆதாயம்.",
    "ராகு 9-ம் வீட்டில்: மாறுபட்ட ஆன்மீகக் கொள்கைகள், வெளிநாட்டுப் பயண அதிர்ஷ்டம், புதிய வழிகாட்டிகள்.",
    "ராகு 10-ம் வீட்டில்: தொழிலில் உயர் பதவி, அதிகார வேட்கை, நவீன தொழில்நுட்பம் மூலம் பொது வளைப்பு.",
    "ராகு 11-ம் வீட்டில்: மிகப்பெரிய நண்பர்கள் வட்டம், வெளிநாட்டு லாபங்கள், மாற்று வழி வருமானங்கள்.",
    "ராகு 12-ம் வீட்டில்: ஆன்மீகத் தனிமை யோகம், வெளிநாடு குடிபெயர்தல், ஆழ்மனச் சிந்தனை."
  ],
  ketu: [
    "கேது 1-ம் வீட்டில்: ஆன்மீக நாட்டம், உலகப் பற்றற்ற சிந்தனை, தத்துவ ஞானம், ஆன்ம ஞானத் தேடல்.",
    "கேது 2-ம் வீட்டில்: மௌனம், எளிமையான குடும்ப வாழ்க்கை, பணத்தின் மீது பற்றின்மை.",
    "கேது 3-ம் வீட்டில்: மௌனத் தைரியம், தத்துவ எழுத்தாற்றல், இளைய சகோதர விலகல்.",
    "கேது 4-ம் வீட்டில்: சொத்துக்களில் பற்றின்மை, தாயிடம் ஆன்மீகப் பற்று, மன அமைதித் தேடல்.",
    "கேது 5-ம் வீட்டில்: பூர்வ புண்ணிய ஞானம், மந்திர/யோகக் கலைகளில் தேர்ச்சி, தனிமை.",
    "கேது 6-ம் வீட்டில்: தைரியம், எதிரிகள் இல்லாத நிலை, நோய் எதிர்ப்புச் சக்தி.",
    "கேது 7-ம் வீட்டில்: ஆன்மீகத் துணை, திருமணப் பற்றின்மை, பொது வாழ்வில் அமைதி.",
    "கேது 8-ம் வீட்டில்: ரகசியங்களை ஆராய்தல், மந்திர சித்தி, திடீர் ஆன்மீக விழிப்புணர்வு.",
    "கேது 9-ம் வீட்டில்: ஆன்மீகத் தேடல், தீர்த்த யாத்திரைகள், தந்தையின் ஆன்மீக அறிவு.",
    "கேது 10-ம் வீட்டில்: தொழிலில் பற்றின்மை, சுய உழைப்பு, ரகசியத் தொழில்முறை.",
    "கேது 11-ம் வீட்டில்: எளிய லாபங்கள், ஆன்மீக நண்பர்கள், பேராசைகள் இல்லாத நிம்மதி.",
    "கேது 12-ம் வீட்டில்: மோட்ச ஸ்தானம் - முக்தி சிந்தனை, தியானம், நிம்மதியான உறக்கம்."
  ]
};

// 5. HOUSE AND LORD READINGS
const houseMeaningsTa = [
  "உடல் நலம், குணம், தோற்றம் (Self, Personality, Health)",
  "தனம், வாக்கு, குடும்பம் (Wealth, Family, Speech)",
  "தைரியம், வீரியம், இளைய சகோதரம் (Courage, Siblings, Communication)",
  "தாய், சுகம், கல்வி, வாகனம் (Mother, Comforts, Education, Vehicles)",
  "புத்திர பாக்கியம், பூர்வ புண்ணியம், அறிவு (Children, Past Deeds, Creativity)",
  "ருண, ரோக, சத்ரு - கடன், நோய், எதிரி (Debts, Disease, Enemies)",
  "களத்திரம் - கணவன்/மனைவி, கூட்டுத் தொழில் (Marriage, Spouse, Partnerships)",
  "ஆயுள், அஷ்டமம் - திடீர் மாற்றங்கள், விபத்துக்கள் (Longevity, Sudden Events, Research)",
  "பாக்யம் - தந்தை, குரு, ஆன்மீகம், அதிர்ஷ்டம் (Father, Guru, Fortune, Spirituality)",
  "கர்ம ஸ்தானம் - தொழில், கௌரவம், கீர்த்தி (Career, Status, Actions, Reputation)",
  "லாப ஸ்தானம் - மூத்த சகோதரம், லாபங்கள் (Gains, Wishes, Elder Siblings)",
  "விரய ஸ்தானம் - செலவுகள், மோட்சம், வெளிநாட்டு யோகம் (Losses, Liberation, Foreign Travel)"
];

const houseMeaningsEn = [
  "Self, Personality, Health, and Vitality",
  "Wealth, Assets, Family, and Speech",
  "Courage, Initiatives, Siblings, and Communication",
  "Mother, Home, Comforts, Education, and Vehicles",
  "Children, Past Karma, Intellect, and Creativity",
  "Debts, Disease, Enemies, and Daily Services",
  "Marriage, Spouse, Business Partnerships, and Public Life",
  "Longevity, Unearned Wealth, Obstacles, and Research",
  "Fortune, Father, Spiritual Inclination, and Higher Learning",
"Career, Status, Actions, and Public Reputation",
  "Gains, Desires, Friendships, and Elder Siblings",
  "Losses, Spiritual Liberation, Solitude, and Foreign Travels"
];

// 4. PLANETARY ASPECTS & PLACEMENT READINGS
function renderAspectsAndReadings() {
  const aspectsContainer = document.getElementById("aspects-list-container");
  const placementsContainer = document.getElementById("placements-list-container");
  
  if (!aspectsContainer || !placementsContainer) return;
  
  aspectsContainer.innerHTML = "";
  placementsContainer.innerHTML = "";
  
  const birthData = currentHoroscopeData.birth;
  const lagnaSign = Math.floor(birthData.lagna / 30) % 12;
  
  const planets = ["sun", "moon", "mars", "mercury", "jupiter", "venus", "saturn", "rahu", "ketu"];
  const planetNamesTa = {
    sun: "சூரியன்", moon: "சந்திரன்", mars: "செவ்வாய்", mercury: "புதன்",
    jupiter: "குரு", venus: "சுக்கிரன்", saturn: "சனி", rahu: "ராகு", ketu: "கேது"
  };
  const planetNamesEn = {
    sun: "Sun", moon: "Moon", mars: "Mars", mercury: "Mercury",
    jupiter: "Jupiter", venus: "Venus", saturn: "Saturn", rahu: "Rahu", ketu: "Ketu"
  };
  
  // 1. Calculate Sign Placements
  const planetSigns = {};
  planets.forEach(p => {
    planetSigns[p] = Math.floor(birthData[p] / 30) % 12;
  });
  
  // 2. Conjunctions (Group planets by sign)
  const signOccupants = Array(12).fill().map(() => []);
  planets.forEach(p => {
    const s = planetSigns[p];
    signOccupants[s].push(p);
  });
  
  let conjunctionFound = false;
  for (let s = 0; s < 12; s++) {
    const occupants = signOccupants[s];
    if (occupants.length > 1) {
      conjunctionFound = true;
      const rasi = RASIS[s];
      const namesTa = occupants.map(p => planetNamesTa[p]).join(", ");
      const namesEn = occupants.map(p => planetNamesEn[p]).join(", ");
      
      const div = document.createElement("div");
      div.className = "detail-item";
      div.style.flexDirection = "column";
      div.style.alignItems = "flex-start";
      div.style.gap = "0.25rem";
      div.innerHTML = `
        <span class="detail-key" style="color: var(--primary-gold); font-size: 0.95rem;">
          <span class="lang-ta">${rasi.nameTa} - கிரக சேர்க்கை</span><span class="lang-sep"> / </span><span class="lang-en">${rasi.nameEn} - Conjunction</span>
        </span>
        <span class="detail-val lang-ta reading-text">
          ${namesTa} ஒருமித்து அமைந்துள்ளனர்.
        </span>
        <span class="detail-val lang-en" style="font-size: 0.85rem; color: var(--text-secondary); font-style: italic;">
          Conjunction of ${namesEn} in ${rasi.nameEn}.
        </span>
      `;
      aspectsContainer.appendChild(div);
    }
  }
  
  if (!conjunctionFound) {
    const div = document.createElement("div");
    div.className = "detail-item";
    div.innerHTML = `
      <span class="detail-key"><span class="lang-ta">கிரக சேர்க்கை</span><span class="lang-sep"> (</span><span class="lang-en">Conjunctions</span><span class="lang-sep">)</span></span>
      <span class="detail-val" style="color: var(--text-muted); font-size: 0.85rem;"><span class="lang-ta">ஒன்றிற்கு மேற்பட்ட கிரக சேர்க்கை இல்லை</span><span class="lang-sep"> / </span><span class="lang-en">No major planetary conjunctions.</span></span>
    `;
    aspectsContainer.appendChild(div);
  }
  
  // Divider in aspects container
  const aspectsHeader = document.createElement("h4");
  aspectsHeader.style.color = "var(--primary-gold)";
  aspectsHeader.style.marginTop = "1.5rem";
  aspectsHeader.style.marginBottom = "0.75rem";
  aspectsHeader.style.fontSize = "1rem";
  aspectsHeader.innerHTML = `<span class="lang-ta">கிரக பார்வைகள்</span><span class="lang-sep"> (</span><span class="lang-en">Planetary Aspects</span><span class="lang-sep">)</span>`;
  aspectsContainer.appendChild(aspectsHeader);
  
  // Calculate Aspects
  const aspectOffsets = {
    sun: [6],
    moon: [6],
    mars: [3, 6, 7], // 4th, 7th, 8th
    mercury: [6],
    jupiter: [4, 6, 8], // 5th, 7th, 9th
    venus: [6],
    saturn: [2, 6, 9], // 3rd, 7th, 10th
    rahu: [4, 6, 8], // 5th, 7th, 9th
    ketu: [4, 6, 8] // 5th, 7th, 9th
  };
  
  const aspectLabels = {
    2: { ta: "3-ம் பார்வை", en: "3rd Aspect" },
    3: { ta: "4-ம் பார்வை", en: "4th Aspect" },
    4: { ta: "5-ம் பார்வை", en: "5th Aspect" },
    6: { ta: "7-ம் பார்வை", en: "7th Aspect" },
    7: { ta: "8-ம் பார்வை", en: "8th Aspect" },
    8: { ta: "9-ம் பார்வை", en: "9th Aspect" },
    9: { ta: "10-ம் பார்வை", en: "10th Aspect" }
  };
  
  let aspectFound = false;
  
  planets.forEach(p => {
    const pSign = planetSigns[p];
    const offsets = aspectOffsets[p];
    
    offsets.forEach(offset => {
      const aspectedSign = (pSign + offset) % 12;
      
      const targets = [];
      planets.forEach(t => {
        if (planetSigns[t] === aspectedSign && t !== p) {
          targets.push({ key: t, nameTa: planetNamesTa[t], nameEn: planetNamesEn[t], type: "planet" });
        }
      });
      
      if (lagnaSign === aspectedSign) {
        targets.push({ key: "lagna", nameTa: "லக்னம்", nameEn: "Lagna", type: "lagna" });
      }
      
      if (targets.length > 0) {
        aspectFound = true;
        const aspectLabel = aspectLabels[offset];
        const rasi = RASIS[aspectedSign];
        const targetNamesTa = targets.map(t => t.nameTa).join(", ");
        const targetNamesEn = targets.map(t => t.nameEn).join(", ");
        
        const div = document.createElement("div");
        div.className = "detail-item";
        div.style.flexDirection = "column";
        div.style.alignItems = "flex-start";
        div.style.gap = "0.25rem";
        div.style.borderBottom = "1px dashed rgba(255, 255, 255, 0.04)";
        div.style.paddingBottom = "0.5rem";
        div.style.marginBottom = "0.5rem";
        
        let natureTa = "சாதாரண பார்வை";
        let natureEn = "Neutral";
        if (p === "jupiter") {
          natureTa = "<span style='color: #55ff55;'>சுப பார்வை</span>";
          natureEn = "<span style='color: #55ff55;'>Benefic</span>";
        } else if (p === "saturn" || p === "mars" || p === "rahu" || p === "ketu") {
          natureTa = "<span style='color: #ff5555;'>பாப பார்வை</span>";
          natureEn = "<span style='color: #ff5555;'>Malefic</span>";
        }
        
        div.innerHTML = `
          <span class="detail-key" style="font-size: 0.9rem; font-weight: 600;">
            <span class="lang-ta">${planetNamesTa[p]} &rarr; ${aspectLabel.ta}</span><span class="lang-sep"> / </span><span class="lang-en">${planetNamesEn[p]} &rarr; ${aspectLabel.en}</span>
          </span>
          <span class="detail-val lang-ta reading-text">
            ${RASIS[pSign].nameTa}-ல் உள்ள ${planetNamesTa[p]}, ${rasi.nameTa}-ல் இருக்கும் ${targetNamesTa}-யைப் பார்க்கிறார். (${natureTa})
          </span>
          <span class="detail-val lang-en" style="font-size: 0.8rem; color: var(--text-secondary); font-style: italic;">
            ${planetNamesEn[p]} in ${RASIS[pSign].nameEn} aspects ${targetNamesEn} in ${rasi.nameEn}. (${natureEn})
          </span>
        `;
        aspectsContainer.appendChild(div);
      }
    });
  });
  
  if (!aspectFound) {
    const div = document.createElement("div");
    div.className = "detail-item";
    div.innerHTML = `
      <span class="detail-key"><span class="lang-ta">பார்வைகள்</span><span class="lang-sep"> (</span><span class="lang-en">Aspects</span><span class="lang-sep">)</span></span>
      <span class="detail-val" style="color: var(--text-muted); font-size: 0.85rem;"><span class="lang-ta">நோக்கத்தக்க கிரக பார்வைகள் இல்லை</span><span class="lang-sep"> / </span><span class="lang-en">No major planetary aspects found.</span></span>
    `;
    aspectsContainer.appendChild(div);
  }
  
  // 3. Render Placements Readings
  const exaltationSigns = { sun: 0, moon: 1, mars: 9, mercury: 5, jupiter: 3, venus: 11, saturn: 6 };
  const debilitationSigns = { sun: 6, moon: 7, mars: 3, mercury: 11, jupiter: 9, venus: 5, saturn: 0 };
  const ownSigns = {
    sun: [4],
    moon: [3],
    mars: [0, 7],
    mercury: [2, 5],
    jupiter: [8, 11],
    venus: [1, 6],
    saturn: [9, 10]
  };
  
  planets.forEach(p => {
    const s = planetSigns[p];
    const house = (s - lagnaSign + 12) % 12 + 1;
    
    let state = "general";
    if (exaltationSigns[p] !== undefined && s === exaltationSigns[p]) {
      state = "exalted";
    } else if (debilitationSigns[p] !== undefined && s === debilitationSigns[p]) {
      state = "debilitated";
    } else if (ownSigns[p] !== undefined && ownSigns[p].includes(s)) {
      state = "own";
    }
    
    const signReadingEn = getDetailedPlanetReadingEn(p, s, house, state);
    const signReadingTa = getDetailedPlanetReadingTa(p, s, house, state);
    
    const rasi = RASIS[s];
    
    let stateBadgeTa = "";
    let stateBadgeEn = "";
    if (state === "exalted") {
      stateBadgeTa = `<span class="lang-ta" style="background: rgba(85, 255, 85, 0.15); color: #55ff55; padding: 0.1rem 0.4rem; border-radius: 4px; font-size: 0.75rem; font-family: var(--font-tamil)">உச்சம்</span>`;
      stateBadgeEn = `<span class="lang-en" style="background: rgba(85, 255, 85, 0.15); color: #55ff55; padding: 0.1rem 0.4rem; border-radius: 4px; font-size: 0.75rem;">Exalted</span>`;
    } else if (state === "debilitated") {
      stateBadgeTa = `<span class="lang-ta" style="background: rgba(255, 85, 85, 0.15); color: #ff5555; padding: 0.1rem 0.4rem; border-radius: 4px; font-size: 0.75rem; font-family: var(--font-tamil)">நீசம்</span>`;
      stateBadgeEn = `<span class="lang-en" style="background: rgba(255, 85, 85, 0.15); color: #ff5555; padding: 0.1rem 0.4rem; border-radius: 4px; font-size: 0.75rem;">Debilitated</span>`;
    } else if (state === "own") {
      stateBadgeTa = `<span class="lang-ta" style="background: rgba(229, 193, 88, 0.15); color: var(--primary-gold); padding: 0.1rem 0.4rem; border-radius: 4px; font-size: 0.75rem; font-family: var(--font-tamil)">ஆட்சி</span>`;
      stateBadgeEn = `<span class="lang-en" style="background: rgba(229, 193, 88, 0.15); color: var(--primary-gold); padding: 0.1rem 0.4rem; border-radius: 4px; font-size: 0.75rem;">Own House</span>`;
    }
    
    const pCard = document.createElement("div");
    pCard.className = "detail-block";
    pCard.style.marginBottom = "1rem";
    pCard.style.background = "rgba(255, 255, 255, 0.01)";
    pCard.style.border = "1px solid rgba(255, 255, 255, 0.04)";
    pCard.style.borderRadius = "var(--radius-md)";
    pCard.style.padding = "1.25rem";
    
    pCard.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; border-bottom: 1px solid rgba(255, 255, 255, 0.05); padding-bottom: 0.5rem;">
        <h4 style="color: var(--primary-gold); font-size: 1.05rem; display: flex; align-items: center; gap: 0.5rem;">
          <span class="lang-ta">${planetNamesTa[p]}</span><span class="lang-sep"> / </span><span class="lang-en">${planetNamesEn[p]}</span>
        </h4>
        <div style="display: flex; gap: 0.5rem; align-items: center;">
          ${stateBadgeTa} ${stateBadgeEn}
          <span style="font-size: 0.8rem; color: var(--text-secondary);">
            <span class="lang-ta">${rasi.nameTa} - வீடு ${house}</span><span class="lang-sep"> / </span><span class="lang-en">${rasi.nameEn} - House ${house}</span>
          </span>
        </div>
      </div>
      
      <div>
        <p class="lang-ta reading-text" style="margin-bottom: 0.25rem;">
          <strong>பலன் விளக்கம்:</strong> ${signReadingTa}
        </p>
      </div>
    `;
    
    placementsContainer.appendChild(pCard);
  });
}



function renderHouseReadings() {
  const container = document.getElementById("houses-list-container");
  if (!container) return;
  container.innerHTML = "";
  
  const birthData = currentHoroscopeData.birth;
  const lagnaSign = Math.floor(birthData.lagna / 30) % 12;
  
  const lordNamesTa = { sun: "சூரியன்", moon: "சந்திரன்", mars: "செவ்வாய்", mercury: "புதன்", jupiter: "குரு", venus: "சுக்கிரன்", saturn: "சனி" };
  const lordNamesEn = { sun: "Sun", moon: "Moon", mars: "Mars", mercury: "Mercury", jupiter: "Jupiter", venus: "Venus", saturn: "Saturn" };
  
  const signLords = ["mars", "venus", "mercury", "moon", "sun", "mercury", "venus", "mars", "jupiter", "saturn", "saturn", "jupiter"];
  
  for (let h = 1; h <= 12; h++) {
    const signIdx = (lagnaSign + h - 1) % 12;
    const rasi = RASIS[signIdx];
    const lordKey = signLords[signIdx];
    
    const lordLon = birthData[lordKey];
    const lordSignIdx = Math.floor(lordLon / 30) % 12;
    const lordHouse = (lordSignIdx - lagnaSign + 12) % 12 + 1;
    
    const lordNameTa = lordNamesTa[lordKey];
    const lordNameEn = lordNamesEn[lordKey];
    
    let ownHouseNoteTa = "";
    let ownHouseNoteEn = "";
    if (h === lordHouse) {
      ownHouseNoteTa = ` <span style="color: #55ff55;">(ஆட்சி பெற்ற நிலை: ${lordNameTa} தனது சொந்த வீட்டில் உள்ளதால் இந்த வீட்டின் பலன்கள் பெரும் வலிமை பெறும்.)</span>`;
      ownHouseNoteEn = ` <span style="color: #55ff55;">(Own House strength: ${lordNameEn} is placed in its own house, dramatically strengthening this house's power.)</span>`;
    }
    
    const readingTa = getDetailedHouseLordReadingTa(h, lordKey, lordHouse, h === lordHouse);
    const readingEn = getDetailedHouseLordReadingEn(h, lordKey, lordHouse, h === lordHouse);
    
    const div = document.createElement("div");
    div.className = "detail-block";
    div.style.marginBottom = "1rem";
    
    div.innerHTML = `
      <h4 style="color: var(--primary-gold); font-size: 1rem; margin-bottom: 0.5rem;">
        ${h}-ம் வீடு: ${rasi.nameTa}
      </h4>
      <p class="reading-meta" style="margin-bottom: 0.5rem;">
        <strong>காரகத்துவம்:</strong> ${houseMeaningsTa[h-1].split(' (')[0]}
      </p>
      <p class="reading-text" style="margin-bottom: 0.25rem;">
        <strong>பலன்:</strong> ${readingTa}
      </p>
    `;
    container.appendChild(div);
  }
}

const lordNamesTa = { sun: "சூரியன்", moon: "சந்திரன்", mars: "செவ்வாய்", mercury: "புதன்", jupiter: "குரு", venus: "சுக்கிரன்", saturn: "சனி" };
const lordNamesEn = { sun: "Sun", moon: "Moon", mars: "Mars", mercury: "Mercury", jupiter: "Jupiter", venus: "Venus", saturn: "Saturn" };

const planetNamesTa = { sun: "சூரியன்", moon: "சந்திரன்", mars: "செவ்வாய்", mercury: "புதன்", jupiter: "குரு", venus: "சுக்கிரன்", saturn: "சனி", rahu: "ராகு", ketu: "கேது" };
const planetNamesEn = { sun: "Sun", moon: "Moon", mars: "Mars", mercury: "Mercury", jupiter: "Jupiter", venus: "Venus", saturn: "Saturn", rahu: "Rahu", ketu: "Ketu" };

function getDetailedHealthReportTa(lordKey, lordHouse, state, occupants) {
  const lordName = lordNamesTa[lordKey];
  let text = `உங்கள் ஜாதகத்தில் ஆரோக்கியம் மற்றும் ஆயுளைக் குறிக்கும் லக்னத்தின் அதிபதி (${lordName}) ஆவார். அவர் லக்னத்திற்கு ${lordHouse}-ம் வீட்டில் அமர்ந்துள்ளார். `;
  
  if ([1, 5, 9, 10, 11].includes(lordHouse)) {
    text += `லக்னாதிபதி கேந்திர அல்லது திரிகோண ஸ்தானங்களில் அமர்ந்திருப்பது ஒரு வலுவான யோக அமைப்பாகும். இது உங்களுக்கு நல்ல உடல் வலிமையையும், உறுதியான மன அமைப்பையும் தரும். எத்தகைய உடல்நலப் பிரச்சனைகளையும் எளிதில் எதிர்கொள்ளும் ஆற்றல் உங்களுக்கு உண்டு. `;
  } else if ([6, 8, 12].includes(lordHouse)) {
    text += `லக்னாதிபதி மறைவு ஸ்தானங்கள் (6, 8, 12) என்று சொல்லப்படும் வீடுகளில் அமர்ந்துள்ளார். இது அவ்வப்போது உடல் உபாதைகள், சோர்வு அல்லது சுமாரான நோய் எதிர்ப்புச் சக்தியைத் தரலாம். முறையான உணவுப் பழக்கம், உடற்பயிற்சி மற்றும் மன அமைதிக்கான தியானம் போன்றவற்றால் ஆரோக்கியத்தைப் பேணுவது அவசியம். `;
  } else {
    text += `லக்னாதிபதி நடுத்தரமான வீட்டில் அமர்ந்துள்ளார். இது சமநிலையான ஆரோக்கியத்தை வழங்கும். நீங்கள் உடலையும் உள்ளத்தையும் நல்வழியில் செலுத்தினால் என்றும் இளமையோடும் சுறுசுறுப்போடும் திகழலாம். `;
  }

  if (state === "exalted") {
    text += `லக்னாதிபதி உச்சம் பெற்று மிக வலுவான நிலையில் உள்ளார். இது உங்களுக்கு நீண்ட ஆயுள், கம்பீரமான தோற்றம், அசைக்க முடியாத தன்னம்பிக்கை மற்றும் தலைமை தாங்கும் பண்பை அளிக்கும். நோயற்ற வாழ்வே குறைவற்ற செல்வம் என்ற பழமொழிக்கு ஏற்ப நீங்கள் வாழ்வீர்கள். `;
  } else if (state === "own") {
    text += `லக்னாதிபதி தனது சொந்த வீட்டில் ஆட்சி பெற்றுப் பலமாக உள்ளார். இது சிறந்த நோய் எதிர்ப்பு ஆற்றலையும், சுய உழைப்பால் வாழ்வில் முன்னேறும் மனோபலத்தையும், எதற்கும் அஞ்சாத கம்பீரத்தையும் தரும். `;
  } else if (state === "debilitated") {
    text += `லக்னாதிபதி நீசம் பெற்றுப் பலவீனமடைந்துள்ளார். இது ஆரம்ப காலத்தில் உடல் பலவீனத்தையோ அல்லது குறைந்த தன்னம்பிக்கையையோ தரலாம். எனினும், லக்னாதிபதிக்குரிய எளிய வழிபாடுகள் மற்றும் உடற்பயிற்சிகள் மூலம் இந்த பலவீனத்தை நிவர்த்தி செய்து கொள்ள முடியும். `;
  } else {
    text += `லக்னாதிபதி சாதாரண நிலையில் சுமாரான பலத்துடன் உள்ளார். இதனால் ஆரோக்கியத்தில் அதிக அலட்சியம் காட்டாமல் இருப்பது நலம் பயக்கும். `;
  }

  if (occupants.length === 0) {
    text += `லக்ன ஸ்தானத்தில் கிரகங்கள் எதுவும் அமரவில்லை. இதனால் லக்னாதிபதியின் தன்மைகளே உங்கள் குணாதிசயங்களையும் உடலமைப்பையும் முழுமையாக வழிநடத்துகின்றன.`;
  } else {
    text += `லக்னத்தில் பின்வரும் கிரகங்கள் அமர்ந்துள்ளன: `;
    occupants.forEach((p, idx) => {
      const pName = planetNamesTa[p];
      text += `${pName} லக்னத்தில் இருப்பதால் `;
      if (p === "sun") text += `கம்பீரமான முகம், ஆளுமைத் திறன் மற்றும் உஷ்ண உடம்பு இருக்கும். `;
      if (p === "moon") text += `மென்மையான குணம், வசீகரமான தோற்றம் மற்றும் மன அமைதி உண்டாகும். `;
      if (p === "mars") text += `அதிவேகம், கோபம், சுறுசுறுப்பு மற்றும் நிர்வாகத் திறன் இருக்கும். `;
      if (p === "mercury") text += `புத்திசாலித்தனம், சாதுரிய பேச்சு மற்றும் இளமையான தோற்றம் தரும். `;
      if (p === "jupiter") text += `ஆன்மீக சிந்தனை, நேர்மை மற்றும் நல்ல ஒழுக்கத்தை அளிக்கும். `;
      if (p === "venus") text += `கலை ஆர்வம், அழகு மற்றும் சொகுசு வசதிகளைத் தரும். `;
      if (p === "saturn") text += `நிதானம், பொறுமை மற்றும் ஆரம்ப கால போராட்டங்களைத் தரும். `;
      if (p === "rahu") text += `தனித்துவமான சிந்தனை, புகழின் மீது ஆசை இருக்கும். `;
      if (p === "ketu") text += `ஆன்மீக நாட்டம், எளிமையான குணம் மற்றும் தனிமை விரும்புவீர்கள். `;
    });
  }
  return text;
}

function getDetailedHealthReportEn(lordKey, lordHouse, state, occupants) {
  const lordName = lordNamesEn[lordKey];
  let text = `In your horoscope, the Lagna (Ascendant) Lord, who governs health, longevity, and self-expression, is the ${lordName}. He is placed in the ${lordHouse} house from your Lagna. `;
  
  if ([1, 5, 9, 10, 11].includes(lordHouse)) {
    text += `The placement of the Lagna Lord in an auspicious Kendra or Trikona house is a highly positive combination. This bestows a strong physical constitution, vibrant energy, and high self-confidence. You possess the natural ability to recover quickly from any illness. `;
  } else if ([6, 8, 12].includes(lordHouse)) {
    text += `The Lagna Lord is situated in a hidden (Dusthana) house. This indicates that your health may be sensitive, and you could experience periodic energy dips or fatigue. Maintaining a disciplined diet, regular exercise, and stress-reduction techniques will be highly beneficial. `;
  } else {
    text += `The Lagna Lord is in a moderate house. This promises balanced health and a standard physical build. A structured lifestyle will help you maintain excellent long-term vitality. `;
  }

  if (state === "exalted") {
    text += `Furthermore, your Lagna Lord is exalted, which represents the peak of its strength. This yields long life, a charismatic persona, resolute confidence, and natural leadership qualities. `;
  } else if (state === "own") {
    text += `Furthermore, your Lagna Lord is in its own house, rendering it highly stable and powerful. This grants strong natural immunity, self-reliance, and a dignified character to overcome life's obstacles. `;
  } else if (state === "debilitated") {
    text += `Furthermore, your Lagna Lord is debilitated, indicating potential vulnerabilities in physical stamina or periods of self-doubt. Engaging in regular physical fitness and spiritual remedies can effectively counteract these traits. `;
  } else {
    text += `Furthermore, your Lagna Lord is in a general sign, indicating standard planetary strength. Balanced effort and healthy routines will help sustain your physical well-being. `;
  }

  if (occupants.length === 0) {
    text += `No other planets occupy your 1st house. Therefore, your personality and physical constitution are purely directed by the Lagna Lord's indicators.`;
  } else {
    text += `The 1st house is occupied by the following planets: `;
    occupants.forEach((p, idx) => {
      const pName = planetNamesEn[p];
      text += `The presence of ${pName} in the 1st house `;
      if (p === "sun") text += `adds authority, radiant skin, and a strong sense of pride. `;
      if (p === "moon") text += `brings emotional depth, gentleness, and an attractive, appealing face. `;
      if (p === "mars") text += `increases physical stamina, athletic drive, but can make you impulsive or short-tempered. `;
      if (p === "mercury") text += `grants a youthful appearance, excellent communication skills, and mathematical intellect. `;
      if (p === "jupiter") text += `bestows wisdom, noble qualities, honesty, and a spiritual outlook. `;
      if (p === "venus") text += `gives charm, love for arts, elegance, and a pleasant demeanor. `;
      if (p === "saturn") text += `adds a serious, disciplined, and mature outlook, though it may bring early struggles. `;
      if (p === "rahu") text += `indicates a unique, unconventional identity and desire for social recognition. `;
      if (p === "ketu") text += `leads to a spiritual inclination, simple habits, and interest in self-realization. `;
    });
  }
  return text;
}

function getDetailedEducationReportTa(lordKey, lordHouse, state, occupants) {
  const lordName = lordNamesTa[lordKey];
  let text = `உங்கள் ஜாதகத்தில் கல்வி, சுகம் மற்றும் வாகனம் ஆகியவற்றைக் குறிக்கும் 4-ம் வீட்டின் அதிபதி (${lordName}) ஆவார். அவர் லக்னத்திற்கு ${lordHouse}-ம் வீட்டில் அமர்ந்துள்ளார். `;
  
  if ([1, 4, 5, 9, 11].includes(lordHouse)) {
    text += `4-ம் அதிபதி சுப ஸ்தானங்களில் அமர்ந்திருப்பது கல்வியில் சிறப்பான வெற்றியைக் குறிக்கிறது. நீங்கள் எளிதாகக் கல்வியைக் கற்றுக்கொள்வதோடு, உயர் பட்டங்களைப் பெறும் யோகமும் உண்டாகும். தாய் வழியிலும் நல்ல ஆதரவு கிட்டும். `;
  } else if ([6, 8, 12].includes(lordHouse)) {
    text += `4-ம் அதிபதி மறைவு ஸ்தானங்களில் அமர்ந்துள்ளார். இது கல்விப் பாதையில் சில தடைகள், இடைவெளிகள் அல்லது திசை மாற்றங்களைத் தரலாம். எனினும், நீங்கள் தொழில்நுட்பம், சட்டம் அல்லது வெளிநாடு சார்ந்த கல்வியில் சிறப்பாக ஜொலிக்க முடியும். `;
  } else {
    text += `4-ம் அதிபதி நடுத்தரமான வீட்டில் உள்ளார். இது சராசரியான கல்வி யோகம் மற்றும் நிலையான அறிவைத் தரும். உழைப்பால் முன்னேற்றம் காண்பீர்கள். `;
  }

  if (state === "exalted") {
    text += `4-ம் அதிபதி உச்ச பலத்துடன் உள்ளார். இது உங்களை ஒரு சிறந்த அறிவாளியாகவும், உயர்கல்வி மற்றும் ஆராய்ச்சித் துறைகளில் சாதனையாளராகவும் மாற்றும். சொகுசு வாகனங்கள், வீடு போன்ற வசதிகள் எளிதில் கிடைக்கும். `;
  } else if (state === "own") {
    text += `4-ம் அதிபதி ஆட்சி பலத்துடன் உள்ளார். இது நிலையான கல்வி, நல்ல ஞாபக சக்தி, சொத்து சேர்க்கை மற்றும் தாயிடம் மிகுந்த பாசத்தை அளிக்கும். `;
  } else if (state === "debilitated") {
    text += `4-ம் அதிபதி நீசம் பெற்றுள்ளார். இதனால் கல்வியில் சில தடைகள், கவனச்சிதறல்கள் ஏற்படலாம். விடாமுயற்சியுடன் படித்தால் மட்டுமே படிப்பை வெற்றிகரமாக முடிக்க முடியும். தாயார் உடல்நிலையில் அக்கறை தேவை. `;
  } else {
    text += `4-ம் அதிபதி நடுத்தர பலத்தில் உள்ளார். இது வழக்கமான கல்வி யோகத்தையும், முறையான படிப்பின் மூலம் பட்டங்கள் பெறுவதையும் தரும். `;
  }

  if (occupants.length === 0) {
    text += `4-ம் வீட்டில் கிரகங்கள் எதுவும் இல்லை. இதனால் உங்கள் கல்வி யோகம் 4-ம் அதிபதியின் நிலையைப் பொறுத்தே அமையும்.`;
  } else {
    text += `4-ம் வீட்டில் பின்வரும் கிரகங்கள் அமர்ந்துள்ளன: `;
    occupants.forEach((p, idx) => {
      const pName = planetNamesTa[p];
      text += `${pName} 4-ம் வீட்டில் இருப்பதால் `;
      if (p === "sun") text += `அரசு வழி அங்கீகாரம், மேலாண்மைப் படிப்புகள் மற்றும் கௌரவம் உண்டாகும். `;
      if (p === "moon") text += `கலை உணர்வு, தாய் மூலம் கல்வி மற்றும் மன அமைதி தரும். `;
      if (p === "mars") text += `பொறியியல், தொழில்நுட்பக் கல்வி, வீடு மனை சேர்க்கை இருக்கும். `;
      if (p === "mercury") text += `புத்திசாலித்தனம், கணக்கு வழக்குகள் மற்றும் வியாபாரக் கல்வி யோகம் தரும். `;
      if (p === "jupiter") text += `உயர் தத்துவக் கல்வி, ஆன்மீக அறிவு மற்றும் பெரும் ஞானம் அளிக்கும். `;
      if (p === "venus") text += `சொகுசு வாகன சேர்க்கை, கலைகளில் ஆர்வம் மற்றும் ஆடம்பர வசதிகள் தரும். `;
      if (p === "saturn") text += `கல்வியில் தாமதங்கள், கடின உழைப்புக்குப் பின் வெற்றி கிட்டும். `;
      if (p === "rahu") text += `புதிய நவீன தொழில்நுட்பக் கல்வி அல்லது வெளிநாட்டில் படிக்கும் யோகம் தரும். `;
      if (p === "ketu") text += `ஆன்மீகக் கல்வி, தத்துவ ஆர்வம், சொத்துக்களில் பற்றற்ற நிலை இருக்கும். `;
    });
  }
  return text;
}

function getDetailedEducationReportEn(lordKey, lordHouse, state, occupants) {
  const lordName = lordNamesEn[lordKey];
  let text = `In your horoscope, the 4th house governs education, mother, vehicles, and comfort, and its lord is the ${lordName}. He is placed in the ${lordHouse} house from your Lagna. `;
  
  if ([1, 4, 5, 9, 11].includes(lordHouse)) {
    text += `The placement of the 4th Lord in an active, supportive house points to excellent academic prospects. You are likely to grab knowledge easily, secure good grades, and enjoy high support from maternal relatives. `;
  } else if ([6, 8, 12].includes(lordHouse)) {
    text += `The 4th Lord is in a hidden house. This can introduce early educational interruptions, changes in fields of study, or relocation. However, it is an excellent placement for research, legal studies, or foreign education. `;
  } else {
    text += `The 4th Lord is in a moderate house. This grants standard learning opportunities. Steady efforts will result in successful graduation and standard home comfort. `;
  }

  if (state === "exalted") {
    text += `Furthermore, your 4th Lord is exalted, which bestows exceptional intellectual brilliance, advanced degrees, and rich comfort such as luxury properties and vehicles. `;
  } else if (state === "own") {
    text += `Furthermore, your 4th Lord is in its own house, providing a stable foundation for learning, excellent memory power, family happiness, and strong ties with your mother. `;
  } else if (state === "debilitated") {
    text += `Furthermore, your 4th Lord is debilitated. This may lead to concentration lapses, domestic differences, or academic struggles. You must maintain focus and avoid distractions to successfully complete your studies. `;
  } else {
    text += `Furthermore, your 4th Lord is in a general sign, which represents balanced planetary strength. Academic success will correspond to the effort you apply. `;
  }

  if (occupants.length === 0) {
    text += `No planets occupy your 4th house, meaning your academic path and material assets are primarily shaped by the 4th Lord's status.`;
  } else {
    text += `The 4th house is occupied by the following planets: `;
    occupants.forEach((p, idx) => {
      const pName = planetNamesEn[p];
      text += `The presence of ${pName} in the 4th house `;
      if (p === "sun") text += `promotes administrative learning, authority, and public recognition. `;
      if (p === "moon") text += `yields a creative mind, emotional peace, and comfortable home environment. `;
      if (p === "mars") text += `favors technical, engineering, or real estate fields, but can bring domestic arguments. `;
      if (p === "mercury") text += `gives business skills, analytical intellect, and active learning interests. `;
      if (p === "jupiter") text += `promises wisdom, highest degrees, righteous character, and peaceful home life. `;
      if (p === "venus") text += `brings luxury vehicles, artistic tastes, and high domestic comfort. `;
      if (p === "saturn") text += `may delay education or properties, requiring hard work to achieve success. `;
      if (p === "rahu") text += `supports modern IT skills, media studies, or foreign travel. `;
      if (p === "ketu") text += `leads to spiritual interests, detachment from material assets, and interest in meditation. `;
    });
  }
  return text;
}

function getDetailedMarriageReportTa(lordKey, lordHouse, state, occupants) {
  const lordName = lordNamesTa[lordKey];
  let text = `உங்கள் ஜாதகத்தில் திருமணம் மற்றும் கூட்டுத் தொழிலைக் குறிக்கும் 7-ம் வீட்டின் அதிபதி (${lordName}) ஆவார். அவர் லக்னத்திற்கு ${lordHouse}-ம் வீட்டில் அமர்ந்துள்ளார். `;
  
  if ([1, 5, 7, 9, 11].includes(lordHouse)) {
    text += `7-ம் அதிபதி லக்னத்திற்கு நல்ல வீடுகளில் அமர்ந்துள்ளார். இது திருமணத்திற்குப் பின் அதிர்ஷ்டம், அன்பான துணை மற்றும் இணக்கமான குடும்ப வாழ்க்கையைக் குறிக்கிறது. கூட்டாளிகளுடனான உறவும் இணக்கமாக இருக்கும். `;
  } else if ([6, 8, 12].includes(lordHouse)) {
    text += `7-ம் அதிபதி மறைவு ஸ்தானங்களில் அமர்ந்துள்ளார். இது திருமணத்தில் சிறு தாமதங்களை ஏற்படுத்தலாம். தம்பதியருக்குள் கருத்து வேறுபாடுகள் வரக்கூடும் என்பதால், திருமணப் பொருத்தங்களை சரியாக ஆராய்ந்து முடிப்பது நல்லது. பரஸ்பர விட்டுக்கொடுத்தல் திருமண வாழ்வை சிறக்க வைக்கும். `;
  } else {
    text += `7-ம் அதிபதி நடுத்தரமான வீட்டில் உள்ளார். இது வழக்கமான குடும்ப வாழ்க்கையையும், கடமைகளைப் பகிர்ந்துகொண்டு வாழும் நிலையையும் தரும். `;
  }

  if (state === "exalted") {
    text += `7-ம் அதிபதி உச்சம் பெற்று மிக வலுவாக உள்ளார். இது உங்களுக்கு நல்ல குணமும், கௌரவமும் கொண்ட வாழ்க்கைத்துணை அமைவதை உறுதி செய்கிறது. திருமணத்திற்குப் பிறகு உங்கள் சமூக அந்தஸ்தும் பொருளாதார நிலையும் உயரும். `;
  } else if (state === "own") {
    text += `7-ம் அதிபதி ஆட்சி பெற்றுப் பலமாக உள்ளார். இது அன்பான, நம்பிக்கையான மற்றும் நிலையான துணையை அளிக்கும். திருமண வாழ்க்கை மகிழ்ச்சியாக அமையும். `;
  } else if (state === "debilitated") {
    text += `7-ம் அதிபதி நீசம் பெற்றுள்ளார். இது துணைவியாரின் உடல்நலக் குறைவு அல்லது திருமண வாழ்வில் விவாதங்களைத் தரக்கூடும். சுக்கிரன் அல்லது குரு வழிபாடு திருமண தோஷங்களை நீக்கும். `;
  } else {
    text += `7-ம் அதிபதி சாதாரண பலத்தில் உள்ளார். இது சுமூகமான குடும்ப வாழ்க்கையைக் குறிக்கிறது. விட்டுக்கொடுத்துச் செல்வது நலம். `;
  }

  if (occupants.length === 0) {
    text += `7-ம் வீட்டில் கிரகங்கள் எதுவும் இல்லை. இது தேவையற்ற சிக்கல்கள் இல்லாத அமைதியான இல்வாழ்க்கையைக் குறிக்கிறது.`;
  } else {
    text += `7-ம் வீட்டில் பின்வரும் கிரகங்கள் அமர்ந்துள்ளன: `;
    occupants.forEach((p, idx) => {
      const pName = planetNamesTa[p];
      text += `${pName} 7-ம் வீட்டில் இருப்பதால் `;
      if (p === "sun") text += `துணைக்கு அதிக கோபமும் பிடிவாதமும் இருக்கலாம், கூட்டுத் தொழிலில் கவனம் தேவை. `;
      if (p === "moon") text += `அன்பான துணை, வசீகரமான இல்வாழ்க்கை உண்டாகும். `;
      if (p === "mars") text += `செவ்வாய் தோஷம் காரணமாக திருமணத் தாமதம் அல்லது விவாதங்கள் வரலாம், பொறுமை அவசியம். `;
      if (p === "mercury") text += `அறிவுபூர்வமான துணை, நகைச்சுவை உணர்வு மற்றும் சிறந்த உறவு கிட்டும். `;
      if (p === "jupiter") text += `அன்பும் நேர்மையும் கொண்ட துணை, நிம்மதியான இல்வாழ்க்கை மற்றும் தெய்வீக அருள் தரும். `;
      if (p === "venus") text += `மிக்க அழகான துணை, காதல் வசப்பட்ட மகிழ்ச்சியான திருமண வாழ்க்கை அமைக்கும். `;
      if (p === "saturn") text += `திருமணத்தில் தாமதம் அல்லது முதிர்ச்சியான துணை அமைதல், உறவில் பிடிப்பு இருக்கும். `;
      if (p === "rahu") text += `காதல் திருமணம் அல்லது மாறுபட்ட பின்னணி கொண்ட துணை அமையலாம். `;
      if (p === "ketu") text += `ஆன்மீக ஈடுபாடு கொண்ட துணை, திருமண உறவில் சற்றே பற்றற்ற நிலை வரலாம். `;
    });
  }
  return text;
}

function getDetailedMarriageReportEn(lordKey, lordHouse, state, occupants) {
  const lordName = lordNamesEn[lordKey];
  let text = `In your horoscope, the 7th house rules marriage, spouse, and partnership, and its lord is the ${lordName}. He is placed in the ${lordHouse} house from your Lagna. `;
  
  if ([1, 5, 7, 9, 11].includes(lordHouse)) {
    text += `The placement of the 7th Lord in a beneficial, friendly house promises positive marital prospects. It indicates a loving spouse, financial rise after marriage, and cooperative partnerships. `;
  } else if ([6, 8, 12].includes(lordHouse)) {
    text += `The 7th Lord is placed in a Dusthana (6, 8, or 12). This could cause delays in marriage or temporary differences of opinion. It is advised to match horoscopes properly before finalizing relationships. Mutual trust and patience will keep the bond strong. `;
  } else {
    text += `The 7th Lord is placed in a neutral house. Marital life will be standard and peaceful, demanding equal sharing of domestic duties and balanced emotional support. `;
  }

  if (state === "exalted") {
    text += `Furthermore, your 7th Lord is exalted. This points to a highly prestigious, wealthy, and noble spouse. Marriage will act as a major turning point for prosperity and social elevation. `;
  } else if (state === "own") {
    text += `Furthermore, your 7th Lord is in its own house, assuring a stable, highly supportive, and devoted life partner with long-term marital contentment. `;
  } else if (state === "debilitated") {
    text += `Furthermore, your 7th Lord is debilitated. This indicates potential relationship friction or delay. Praying to Venus or Jupiter and managing ego clashes with maturity will resolve difficulties. `;
  } else {
    text += `Furthermore, your 7th Lord is in a general sign, which represents balanced planetary strength. Marital peace will depend on cooperation and understanding. `;
  }

  if (occupants.length === 0) {
    text += `No planets occupy your 7th house, pointing to a direct, steady path in relationships governed by the 7th Lord.`;
  } else {
    text += `The 7th house is occupied by the following planets: `;
    occupants.forEach((p, idx) => {
      const pName = planetNamesEn[p];
      text += `The presence of ${pName} in the 7th house `;
      if (p === "sun") text += `can make the partner proud or hot-tempered, requiring ego management. `;
      if (p === "moon") text += `promises a very affectionate, caring, and attractive life partner. `;
      if (p === "mars") text += `introduces Manglik influence, which can lead to argumentativeness, demanding patience. `;
      if (p === "mercury") text += `yields an intelligent, communicative partner who values humor and logic. `;
      if (p === "jupiter") text += `brings a highly moral, virtuous, and lucky spouse, blessing the marriage. `;
      if (p === "venus") text += `guarantees an attractive spouse, romantic bond, and strong marital satisfaction. `;
      if (p === "saturn") text += `indicates a mature or older spouse and delays marriage, but ensures stability. `;
      if (p === "rahu") text += `suggests an unconventional or inter-caste/foreign marriage. `;
      if (p === "ketu") text += `indicates a highly spiritual partner, though it can bring minor detachment. `;
    });
  }
  return text;
}

function getDetailedCareerReportTa(lordKey, lordHouse, state, occupants) {
  const lordName = lordNamesTa[lordKey];
  let text = `உங்கள் ஜாதகத்தில் ஜீவனம், தொழில் மற்றும் கர்மாவைக் குறிக்கும் 10-ம் வீட்டின் அதிபதி (${lordName}) ஆவார். அவர் லக்னத்திற்கு ${lordHouse}-ம் வீட்டில் அமர்ந்துள்ளார். `;
  
  if ([1, 9, 10, 11].includes(lordHouse)) {
    text += `10-ம் அதிபதி வலுவான கேந்திர/திரிகோண ஸ்தானங்களில் அமர்ந்திருப்பது தொழிலில் பெரும் வெற்றியைக் குறிக்கிறது. நீங்கள் சுய தொழில், நிர்வாகப் பொறுப்புகள் அல்லது உயர் அதிகாரமிக்க பதவிகளில் அமரும் யோகம் உண்டு. உங்கள் உழைப்பிற்கான நல்ல அங்கீகாரம் கிடைக்கும். `;
  } else if ([6, 8, 12].includes(lordHouse)) {
    text += `10-ம் அதிபதி மறைவு ஸ்தானங்களில் அமர்ந்துள்ளார். இது வேலையில் சில மாற்றங்கள் அல்லது சவால்களைத் தரலாம். எனினும், சேவை சார்ந்த துறைகள், வெளிநாட்டுத் தொடர்புகள், ஆலோசனை வழங்குதல், மருத்துவம் அல்லது ஆன்மீகம் சார்ந்த தொழில்களில் நீங்கள் பெரும் வெற்றி பெறுவீர்கள். `;
  } else {
    text += `10-ம் அதிபதி நடுத்தரமான வீட்டில் அமர்ந்துள்ளார். இது வேலையில் படிப்படியான முன்னேற்றத்தையும் நிலையான வருமானத்தையும் தரும். விடாமுயற்சி உங்களை உயர்த்தும். `;
  }

  if (state === "exalted") {
    text += `10-ம் அதிபதி உச்ச பலத்துடன் உள்ளார். இது தொழிலில் மிக உயர்ந்த பதவிகளையும், நிர்வாகத் திறமையையும், அரசு வழி ஆதாயங்களையும், சமூகத்தில் பெரும் கீர்த்தியையும் தரும். `;
  } else if (state === "own") {
    text += `10-ம் அதிபதி ஆட்சி பலத்துடன் உள்ளார். இது நிலையான வருமானம், சொந்தத் தொழில் யோகம், மக்கள் செல்வாக்கு மற்றும் தொழிலில் நீண்ட கால நிலைப்புத்தன்மையை வழங்கும். `;
  } else if (state === "debilitated") {
    text += `10-ம் அதிபதி நீசமடைந்துள்ளார். இது தொழில் சார்ந்த குழப்பங்கள், அங்கீகாரக் குறைவு அல்லது ஆரம்ப கால போராட்டங்களைக் குறிக்கும். உழைப்பில் கூடுதல் கவனம் செலுத்தினால் காலம் கடந்து வெற்றி கிட்டும். `;
  } else {
    text += `10-ம் அதிபதி சாதாரண பலத்தில் உள்ளார். இது வழக்கமான வேலை மற்றும் படிப்படியான தொழில் வளர்ச்சியைத் தரும். `;
  }

  if (occupants.length === 0) {
    text += `10-ம் வீட்டில் கிரகங்கள் எதுவும் இல்லை. இதனால் உங்கள் தொழில் வெற்றி 10-ம் அதிபதியின் நிலையைப் பொறுத்தே அமையும்.`;
  } else {
    text += `10-ம் வீட்டில் பின்வரும் கிரகங்கள் அமர்ந்துள்ளன: `;
    occupants.forEach((p, idx) => {
      const pName = planetNamesTa[p];
      text += `${pName} 10-ம் வீட்டில் இருப்பதால் `;
      if (p === "sun") text += `அரசு வேலை யோகம், மேலதிகாரிகள் ஆதரவு, தலைமைப் பண்பு இருக்கும். `;
      if (p === "moon") text += `தொழிலில் மாற்றங்கள், உணவு, கலை அல்லது மக்கள் தொடர்புத் துறைகளில் வெற்றி உண்டாகும். `;
      if (p === "mars") text += `பொறியியல், காவல்/இராணுவம், கட்டடத் தொழில் அல்லது நிர்வாகத்துறை வெற்றி தரும். `;
      if (p === "mercury") text += `எழுத்து, கணக்கியல், தகவல் தொழில்நுட்பம் அல்லது வியாபார யோகம் கிட்டும். `;
      if (p === "jupiter") text += `ஆசிரியர், வங்கி, நிதி அல்லது ஆலோசனை வழங்கும் உயர் பதவிகள் கிடைக்கும். `;
      if (p === "venus") text += `ஆடை, கலை, சினிமா, சொகுசுப் பொருட்கள் அல்லது வடிவமைப்புத் துறை யோகம் தரும். `;
      if (p === "saturn") text += `கடின உழைப்பால் முன்னேற்றம், பொது நலத்துறை மற்றும் நிலையான வேலை கிடைக்கும். `;
      if (p === "rahu") text += `நவீன தொழில்நுட்பம், மென்பொருள், வெளிநாட்டுத் தொடர்புகள் மூலம் பெரும் வருமானம் வரும். `;
      if (p === "ketu") text += `ஆன்மீகம், யோகா, மருந்து தயாரிப்பு அல்லது சுய உழைப்பால் வெற்றி கிட்டும். `;
    });
  }
  return text;
}

function getDetailedCareerReportEn(lordKey, lordHouse, state, occupants) {
  const lordName = lordNamesEn[lordKey];
  let text = `In your horoscope, the 10th house governs career, status, and actions, and its lord is the ${lordName}. He is placed in the ${lordHouse} house from your Lagna. `;
  
  if ([1, 9, 10, 11].includes(lordHouse)) {
    text += `The placement of the 10th Lord in an active, prominent house points to strong career progression. You are suited for leadership roles, government services, or self-employment. Success, respect, and promotions will come easily to you. `;
  } else if ([6, 8, 12].includes(lordHouse)) {
    text += `The 10th Lord is placed in a hidden (Dusthana) house. This indicates that your professional journey may involve transitions or relocating. However, you will find immense success in service sectors, import-export, medical lines, legal, or spiritual consultations. `;
  } else {
    text += `The 10th Lord is in a moderate house. This promises a steady career with standard progression and consistent earnings. Dedicated efforts will ensure respect and stability. `;
  }

  if (state === "exalted") {
    text += `Furthermore, your 10th Lord is exalted, which bestows exceptional executive authority, government recognition, public fame, and major career achievements. `;
  } else if (state === "own") {
    text += `Furthermore, your 10th Lord is in its own house, providing career security, entrepreneurial qualities, public support, and reliable business income. `;
  } else if (state === "debilitated") {
    text += `Furthermore, your 10th Lord is debilitated. This can cause career confusion, delayed promotions, or job dissatisfaction early in life. With persistent effort and patience, you will build a solid professional base. `;
  } else {
    text += `Furthermore, your 10th Lord is in a general sign, representing normal planetary strength. Career growth will be steady and reward your dedication. `;
  }

  if (occupants.length === 0) {
    text += `No planets occupy your 10th house, indicating that your professional path and achievements are primarily determined by the 10th Lord's position.`;
  } else {
    text += `The 10th house is occupied by the following planets: `;
    occupants.forEach((p, idx) => {
      const pName = planetNamesEn[p];
      text += `The presence of ${pName} in the 10th house `;
      if (p === "sun") text += `indicates administrative authority, government connection, and leadership success. `;
      if (p === "moon") text += `brings career changes, retail, public dealing, or food sector gains. `;
      if (p === "mars") text += `yields success in engineering, police/military, execution, or construction. `;
      if (p === "mercury") text += `supports writing, accounting, IT, or trade and communications fields. `;
      if (p === "jupiter") text += `blesses you with advisory roles, finance/banking success, or teaching careers. `;
      if (p === "venus") text += `promotes fashion, entertainment, arts, luxury business, or design. `;
      if (p === "saturn") text += `ensures gradual but steady success, public service, and disciplined labor. `;
      if (p === "rahu") text += `gives software success, digital media growth, or foreign trade profits. `;
      if (p === "ketu") text += `steers you towards medicine, yoga, spirituality, or silent behind-the-scenes work. `;
    });
  }
  return text;
}

// ==========================================
// சிறப்பு யோகங்கள், தசா பலன் & கூடுதல் பலன்கள்
// ==========================================

const EXALTATION_SIGNS = { sun: 0, moon: 1, mars: 9, mercury: 5, jupiter: 3, venus: 11, saturn: 6 };
const DEBILITATION_SIGNS = { sun: 6, moon: 7, mars: 3, mercury: 11, jupiter: 9, venus: 5, saturn: 0 };
const OWN_SIGNS = { sun: [4], moon: [3], mars: [0, 7], mercury: [2, 5], jupiter: [8, 11], venus: [1, 6], saturn: [9, 10] };
const SIGN_LORDS = ["mars", "venus", "mercury", "moon", "sun", "mercury", "venus", "mars", "jupiter", "saturn", "saturn", "jupiter"];

function getPlanetState(p, signIdx) {
  if (EXALTATION_SIGNS[p] === signIdx) return "exalted";
  if (DEBILITATION_SIGNS[p] === signIdx) return "debilitated";
  if (OWN_SIGNS[p] && OWN_SIGNS[p].includes(signIdx)) return "own";
  return "general";
}

const STATE_NAMES_TA = { exalted: "உச்ச நிலையில்", debilitated: "நீச நிலையில்", own: "ஆட்சி நிலையில்", general: "சம நிலையில்" };

// சிறப்பு யோகங்கள் / தோஷங்கள் கண்டறிதல்
function detectYogas(birthData) {
  const yogas = [];
  const lagnaSign = Math.floor(birthData.lagna / 30) % 12;
  const planets = ["sun", "moon", "mars", "mercury", "jupiter", "venus", "saturn", "rahu", "ketu"];
  const sign = {};
  planets.forEach(p => { sign[p] = Math.floor(birthData[p] / 30) % 12; });
  const houseOf = p => (sign[p] - lagnaSign + 12) % 12 + 1;

  // 1. கஜகேசரி யோகம் — சந்திரனுக்குக் கேந்திரத்தில் குரு
  const moonToJup = (sign.jupiter - sign.moon + 12) % 12;
  if ([0, 3, 6, 9].includes(moonToJup)) {
    yogas.push({ name: "கஜகேசரி யோகம்", type: "subam", desc: "சந்திரனுக்குக் கேந்திர ஸ்தானத்தில் குரு அமைந்து கஜகேசரி யோகம் உண்டாகியுள்ளது. இது புகழ், கல்வி ஞானம், சமூகத்தில் உயர்ந்த அந்தஸ்து மற்றும் நீடித்த நற்பெயரைத் தரும் உன்னத யோகமாகும். வாழ்வின் இக்கட்டான தருணங்களிலும் தெய்வ அருளும் பெரியோர் ஆதரவும் உங்களைக் காத்து நிற்கும்." });
  }

  // 2. புதாதித்ய யோகம் — சூரியன் + புதன் சேர்க்கை
  if (sign.sun === sign.mercury) {
    yogas.push({ name: "புதாதித்ய யோகம்", type: "subam", desc: "சூரியனும் புதனும் இணைந்து புதாதித்ய யோகம் அமைந்துள்ளது. கூர்மையான அறிவு, கணித மேதைமை, நிர்வாகத் திறன் மற்றும் கல்வியில் சிறப்பான தேர்ச்சியை இது வழங்கும். அரசு அல்லது நிர்வாகப் பொறுப்புகளில் பெயர் பெறுவீர்கள்." });
  }

  // 3. சந்திர மங்கள யோகம்
  if (sign.moon === sign.mars) {
    yogas.push({ name: "சந்திர மங்கள யோகம்", type: "subam", desc: "சந்திரனும் செவ்வாயும் இணைந்து சந்திர மங்கள யோகம் உண்டாகியுள்ளது. சுய முயற்சியால் தன வரவு, தொழில் முனைப்பு மற்றும் துணிச்சலான முடிவுகளால் முன்னேற்றம் காண்பீர்கள். எனினும் பண விஷயங்களில் அவசர முடிவுகளைத் தவிர்ப்பது நலம்." });
  }

  // 4. குரு மங்கள யோகம்
  if (sign.jupiter === sign.mars) {
    yogas.push({ name: "குரு மங்கள யோகம்", type: "subam", desc: "குருவும் செவ்வாயும் இணைந்த குரு மங்கள யோகம் தர்மத்தோடு கூடிய வீரத்தையும், நேர்மையான உழைப்பால் உயரும் ஆற்றலையும் தரும். தொழில்நுட்பம், சட்டம், நிர்வாகம் போன்ற துறைகளில் சிறந்து விளங்குவீர்கள்." });
  }

  // 5. பஞ்ச மகாபுருஷ யோகங்கள் — ஆட்சி/உச்சக் கிரகம் லக்னக் கேந்திரத்தில்
  const mahapurusha = {
    mars: { name: "ருசக யோகம்", desc: "செவ்வாய் வலுவுடன் கேந்திரத்தில் அமைந்து ருசக யோகம் உண்டாகியுள்ளது. வீரம், தைரியம், உறுதியான உடல்வாகு மற்றும் படை/காவல்/நிர்வாகத் துறைகளில் தலைமைப் பொறுப்பை இது அளிக்கும்." },
    mercury: { name: "பத்திர யோகம்", desc: "புதன் வலுவுடன் கேந்திரத்தில் அமைந்து பத்திர யோகம் உண்டாகியுள்ளது. சிறந்த பேச்சாற்றல், எழுத்தாற்றல், வியாபார நுணுக்கம் மற்றும் அறிவுசார் துறைகளில் பெரும் புகழை இது தரும்." },
    jupiter: { name: "ஹம்ச யோகம்", desc: "குரு வலுவுடன் கேந்திரத்தில் அமைந்து ஹம்ச யோகம் உண்டாகியுள்ளது. ஞானம், நற்குணம், ஆன்மீக உயர்வு மற்றும் சமூகத்தில் குருஸ்தான மரியாதையை இது வழங்கும்." },
    venus: { name: "மாளவ்ய யோகம்", desc: "சுக்கிரன் வலுவுடன் கேந்திரத்தில் அமைந்து மாளவ்ய யோகம் உண்டாகியுள்ளது. அழகு, கலைத் திறன், சொகுசு வாழ்க்கை, வாகன யோகம் மற்றும் இல்லற இன்பத்தை இது அளிக்கும்." },
    saturn: { name: "சச யோகம்", desc: "சனி வலுவுடன் கேந்திரத்தில் அமைந்து சச யோகம் உண்டாகியுள்ளது. கடின உழைப்பால் படிப்படியாக உயர்ந்து, ஆட்சி அதிகாரம், நிலபுலன்கள் மற்றும் நீடித்த செல்வாக்கைப் பெறுவீர்கள்." }
  };
  Object.keys(mahapurusha).forEach(p => {
    const st = getPlanetState(p, sign[p]);
    if ((st === "exalted" || st === "own") && [1, 4, 7, 10].includes(houseOf(p))) {
      yogas.push({ name: mahapurusha[p].name + " (பஞ்ச மகாபுருஷ யோகம்)", type: "subam", desc: mahapurusha[p].desc });
    }
  });

  // 6. தர்மகர்மாதிபதி ராஜயோகம் — 9 & 10 அதிபதிகள் சேர்க்கை
  const lord9 = SIGN_LORDS[(lagnaSign + 8) % 12];
  const lord10 = SIGN_LORDS[(lagnaSign + 9) % 12];
  if (lord9 !== lord10 && sign[lord9] === sign[lord10]) {
    yogas.push({ name: "தர்மகர்மாதிபதி ராஜயோகம்", type: "subam", desc: "பாக்கியாதிபதியும் (9) கர்மாதிபதியும் (10) ஒரே ராசியில் இணைந்து உயர்ந்த ராஜயோகம் அமைந்துள்ளது. தர்ம வழியில் நின்று தொழிலில் பெரும் உயர்வும், அதிர்ஷ்டமும், சமூக அங்கீகாரமும் பெறுவீர்கள். இது ஜாதகத்தின் மிக வலுவான யோகங்களில் ஒன்றாகும்." });
  }

  // 7. தன யோகம் — 2 & 11 அதிபதிகள் சேர்க்கை/பரிவர்த்தனை
  const lord2 = SIGN_LORDS[(lagnaSign + 1) % 12];
  const lord11 = SIGN_LORDS[(lagnaSign + 10) % 12];
  if (lord2 !== lord11) {
    const conj = sign[lord2] === sign[lord11];
    const exchange = sign[lord2] === (lagnaSign + 10) % 12 && sign[lord11] === (lagnaSign + 1) % 12;
    if (conj || exchange) {
      yogas.push({ name: "தன யோகம்", type: "subam", desc: "தனாதிபதியும் (2) லாபாதிபதியும் (11) வலுவாகத் தொடர்பு கொண்டு தன யோகம் அமைந்துள்ளது. பல்வேறு வழிகளில் தன வரவு, சேமிப்பு வளர்ச்சி மற்றும் குடும்பச் செழிப்பை இது உறுதி செய்கிறது." });
    }
  }

  // 8. விபரீத ராஜயோகம் — 6/8/12 அதிபதி 6/8/12-ல்
  const dusthanas = [6, 8, 12];
  for (const h of dusthanas) {
    const lord = SIGN_LORDS[(lagnaSign + h - 1) % 12];
    const lh = (sign[lord] - lagnaSign + 12) % 12 + 1;
    if (dusthanas.includes(lh) && lh !== h) {
      yogas.push({ name: "விபரீத ராஜயோகம்", type: "subam", desc: `${h}-ம் வீட்டின் அதிபதி ${lh}-ம் வீட்டில் அமர்ந்து விபரீத ராஜயோகம் உண்டாகியுள்ளது. எதிர்பாராத சூழல்களே உங்களுக்கு வெற்றியாக மாறும்; போட்டிகள், சவால்கள் மற்றும் நெருக்கடிகளிலிருந்து திடீர் உயர்வு பெறுவீர்கள்.` });
      break;
    }
  }

  // 9. செவ்வாய் தோஷம் (லக்னத்திலிருந்து)
  const marsHouse = houseOf("mars");
  if ([1, 2, 4, 7, 8, 12].includes(marsHouse)) {
    yogas.push({ name: "செவ்வாய் தோஷம் (மாங்கல்ய பரிசீலனை)", type: "dosham", desc: `செவ்வாய் லக்னத்திலிருந்து ${marsHouse}-ம் வீட்டில் அமர்ந்திருப்பதால் பொதுவாகச் செவ்வாய் தோஷம் எனக் கருதப்படும் அமைப்பு உள்ளது. திருமணப் பொருத்தம் பார்க்கும்போது இதைக் கவனத்தில் கொள்வது நலம். குருவின் பார்வை, செவ்வாயின் ஆட்சி/உச்ச நிலை அல்லது இரு ஜாதகங்களிலும் சம தோஷம் இருந்தால் இது பெருமளவு மட்டுப்படும் என்பது மரபு விதி.` });
  }

  // 10. கேமத்ரும தோஷம் — சந்திரனின் 2 & 12-ல் கிரகங்கள் இன்மை
  const supportPlanets = ["mars", "mercury", "jupiter", "venus", "saturn"];
  const m2 = (sign.moon + 1) % 12, m12 = (sign.moon + 11) % 12;
  const hasSupport = supportPlanets.some(p => sign[p] === m2 || sign[p] === m12 || sign[p] === sign.moon);
  if (!hasSupport) {
    yogas.push({ name: "கேமத்ரும தோஷம்", type: "dosham", desc: "சந்திரனுக்கு இருபுறமும் துணை கிரகங்கள் இல்லாத கேமத்ரும அமைப்பு காணப்படுகிறது. இது அவ்வப்போது மனத் தளர்ச்சியோ தனிமை உணர்வோ தரலாம். எனினும் சந்திரனுக்கு அல்லது லக்னத்திற்குக் கேந்திரத்தில் கிரகங்கள் இருந்தால் இத்தோஷம் முறிந்துவிடும்; சிவ வழிபாடும் தாயை மதித்து நடத்தலும் சிறந்த பரிகாரம்." });
  }

  return yogas;
}

// விம்சோத்தரி — நடப்புத் தசா/புக்தி கணித்தல்
function computeCurrentDasaBhukti(moonSid, birthMs, nowMs) {
  const nakSize = 360 / 27;
  const nakIdx = Math.floor(moonSid / nakSize) % 27;
  const elapsedFraction = (moonSid % nakSize) / nakSize;
  const dasaOrder = ["ketu", "venus", "sun", "moon", "mars", "rahu", "jupiter", "saturn", "mercury"];
  const dasaYears = { ketu: 7, venus: 20, sun: 6, moon: 10, mars: 7, rahu: 18, jupiter: 16, saturn: 19, mercury: 17 };
  const YEAR_MS = 365.25 * 24 * 60 * 60 * 1000;

  let idx = nakIdx % 9;
  let t = birthMs - elapsedFraction * dasaYears[dasaOrder[idx]] * YEAR_MS;

  for (let k = 0; k < 18; k++) {
    const lord = dasaOrder[idx];
    const end = t + dasaYears[lord] * YEAR_MS;
    if (nowMs < end) {
      let bt = t, bIdx = idx;
      for (let j = 0; j < 9; j++) {
        const bLord = dasaOrder[bIdx];
        const bEnd = bt + (dasaYears[lord] * dasaYears[bLord] / 120) * YEAR_MS;
        if (nowMs < bEnd) {
          return { dasaLord: lord, bhuktiLord: bLord, dasaStart: t, dasaEnd: end, bhuktiStart: bt, bhuktiEnd: bEnd };
        }
        bt = bEnd;
        bIdx = (bIdx + 1) % 9;
      }
    }
    t = end;
    idx = (idx + 1) % 9;
  }
  return null;
}

// நடப்புத் தசா பலன் உரை
function getCurrentDasaReportTa(birthData, birthMs) {
  const cur = computeCurrentDasaBhukti(birthData.moon, birthMs, Date.now());
  if (!cur) return "விம்சோத்தரி தசா சுழற்சி (120 ஆண்டுகள்) நிறைவடைந்துள்ளது.";

  const lagnaSign = Math.floor(birthData.lagna / 30) % 12;
  const dLord = cur.dasaLord, bLord = cur.bhuktiLord;
  const dSign = Math.floor(birthData[dLord] / 30) % 12;
  const dHouse = (dSign - lagnaSign + 12) % 12 + 1;
  const dState = getPlanetState(dLord, dSign);
  const fmt = ms => new Date(ms).toLocaleDateString("ta-IN", { year: 'numeric', month: 'short', day: 'numeric' });

  const houseEffects = [
    "சுய முன்னேற்றம், ஆளுமை வளர்ச்சி மற்றும் புதிய தொடக்கங்களுக்கு உகந்த காலமாக அமையும். உடல்நலத்தில் கவனம் வைத்து உழைத்தால் தனித்துவமான அடையாளம் கிடைக்கும்",
    "குடும்பச் செழிப்பு, தன வரவு மற்றும் சேமிப்பு வளர்ச்சிக்கு ஏற்ற காலம். பேச்சால் காரியம் சாதிக்கும் வாய்ப்புகள் அதிகரிக்கும்",
    "தைரியமான முயற்சிகள், குறுகிய பயணங்கள், எழுத்து/ஊடகம் சார்ந்த வெற்றிகள் மற்றும் சகோதர ஒத்துழைப்பு கூடும் காலம்",
    "வீடு, மனை, வாகனம் போன்ற சொத்து சேர்க்கைக்கும், தாய்வழி நன்மைகளுக்கும், மன நிம்மதிக்கும் உகந்த காலம்",
    "புத்திர பாக்கியம், கல்வி வெற்றி, படைப்பாற்றல் மலர்ச்சி மற்றும் பூர்வ புண்ணியப் பலன்கள் கைகூடும் காலம்",
    "போட்டிகள் மற்றும் கடன்களை வெல்லும் காலம்; உடல்நலத்திலும் வழக்கு விவகாரங்களிலும் விழிப்புடன் இருந்தால் வெற்றி நிச்சயம்",
    "திருமணம், கூட்டுத் தொழில் மற்றும் ஒப்பந்தங்கள் கைகூடும் காலம்; உறவுகளில் விட்டுக்கொடுப்பு வெற்றியைத் தரும்",
    "திடீர் மாற்றங்கள் நிகழக்கூடிய காலம்; ஆராய்ச்சி, பரம்பரைச் சொத்து விவகாரங்களில் முன்னேற்றமும், ஆரோக்கியத்தில் எச்சரிக்கையும் தேவை",
    "அதிர்ஷ்டம், தெய்வ அருள், நீண்ட தூரப் பயணங்கள் மற்றும் ஆன்மீக உயர்வு கைகூடும் சிறந்த காலம்",
    "தொழில் உயர்வு, பதவி உயர்வு, பொது அங்கீகாரம் மற்றும் புதிய பொறுப்புகள் தேடி வரும் காலம்",
    "லாபங்கள் பெருகும் காலம்; ஆசைகள் நிறைவேறுவதோடு நட்பு வட்டாரத்தால் நன்மைகள் உண்டாகும்",
    "வெளிநாட்டு வாய்ப்புகள், ஆன்மீகத் தேடல் மற்றும் சுபச் செலவுகள் கூடும் காலம்; வீண் விரயங்களைக் கட்டுப்படுத்துவது நலம்"
  ];

  const stateEffects = {
    exalted: "தசாநாதன் உச்ச பலத்துடன் இருப்பதால் இக்காலப் பலன்கள் முழுமையாகவும் மிகச் சிறப்பாகவும் கிடைக்கும்.",
    own: "தசாநாதன் ஆட்சி பலத்துடன் இருப்பதால் நிலையான, உறுதியான நற்பலன்கள் உண்டாகும்.",
    debilitated: "தசாநாதன் நீச நிலையில் இருப்பதால் பலன்களில் சில தாமதங்களும் தடைகளும் ஏற்படலாம்; உரிய கிரக வழிபாடும் நிதானமும் இவற்றைக் கடக்க உதவும்.",
    general: "தசாநாதன் சம நிலையில் இருப்பதால் உழைப்பிற்கேற்ற நியாயமான பலன்கள் படிப்படியாகக் கிடைக்கும்."
  };

  return `தற்போது உங்களுக்கு ${planetNamesTa[dLord]} மகா தசை (${fmt(cur.dasaStart)} முதல் ${fmt(cur.dasaEnd)} வரை) நடைபெற்று வருகிறது. இதனுள் ${planetNamesTa[bLord]} புக்தி ${fmt(cur.bhuktiStart)} முதல் ${fmt(cur.bhuktiEnd)} வரை இயங்குகிறது. தசாநாதன் ${planetNamesTa[dLord]} உங்கள் ஜாதகத்தில் ${RASIS[dSign].nameTa} ராசியில், லக்னத்திற்கு ${dHouse}-ம் வீட்டில் ${STATE_NAMES_TA[dState]} அமர்ந்துள்ளார். எனவே இக்காலம் ${houseEffects[dHouse - 1]}. ${stateEffects[dState]} புக்திநாதன் ${planetNamesTa[bLord]} இக்காலப் பலன்களுக்கு மேலும் நுணுக்கமான திருப்பங்களைச் சேர்ப்பார்; ${planetNamesTa[bLord]}க்கு உரிய நாளில் (வாரத்தில்) தொடங்கும் முக்கிய காரியங்கள் சிறப்பான பலனைத் தரும்.`;
}

// தனம் & செல்வ நிலை உரை
function getWealthReportTa(birthData) {
  const lagnaSign = Math.floor(birthData.lagna / 30) % 12;
  const lord2 = SIGN_LORDS[(lagnaSign + 1) % 12];
  const lord11 = SIGN_LORDS[(lagnaSign + 10) % 12];
  const s2 = Math.floor(birthData[lord2] / 30) % 12;
  const s11 = Math.floor(birthData[lord11] / 30) % 12;
  const h2 = (s2 - lagnaSign + 12) % 12 + 1;
  const h11 = (s11 - lagnaSign + 12) % 12 + 1;
  const st2 = getPlanetState(lord2, s2);
  const st11 = getPlanetState(lord11, s11);

  let text = `உங்கள் ஜாதகத்தில் தனஸ்தானமான 2-ம் வீட்டின் அதிபதி ${planetNamesTa[lord2]}; அவர் ${h2}-ம் வீட்டில் ${STATE_NAMES_TA[st2]} உள்ளார். லாபஸ்தானமான 11-ம் வீட்டின் அதிபதி ${planetNamesTa[lord11]}; அவர் ${h11}-ம் வீட்டில் ${STATE_NAMES_TA[st11]} உள்ளார். `;

  const goodHouses = [1, 2, 4, 5, 9, 10, 11];
  const score = (goodHouses.includes(h2) ? 1 : 0) + (goodHouses.includes(h11) ? 1 : 0)
    + (st2 === "exalted" || st2 === "own" ? 1 : 0) + (st11 === "exalted" || st11 === "own" ? 1 : 0)
    - (st2 === "debilitated" ? 1 : 0) - (st11 === "debilitated" ? 1 : 0);

  if (score >= 3) {
    text += "இவ்விரு அதிபதிகளும் வலுவாக அமைந்திருப்பது சிறந்த தனயோக அமைப்பாகும். பல்வேறு வழிகளில் வருமானம், நிலையான சேமிப்பு வளர்ச்சி, சொத்து சேர்க்கை மற்றும் பிற்காலத்தில் பெருஞ்செல்வச் செழிப்பு உண்டாகும். தகுந்த காலங்களில் செய்யும் முதலீடுகள் பன்மடங்கு பலன் தரும்.";
  } else if (score >= 1) {
    text += "தன நிலை நடுத்தரத்திற்கு மேலான பலத்துடன் உள்ளது. திட்டமிட்ட சேமிப்பும் உழைப்பும் உங்களைப் படிப்படியாகச் செல்வந்தராக்கும். திடீர் ஆதாய ஆசைகளைத் தவிர்த்து, நீண்ட கால முதலீடுகளில் கவனம் செலுத்துவது நலம்.";
  } else {
    text += "தன அதிபதிகள் சற்றுப் பலவீனமான நிலையில் இருப்பதால் பண வரவில் ஏற்ற இறக்கங்கள் இருக்கலாம். வரவுக்கேற்ற செலவுத் திட்டம், கடன்களைக் குறைத்தல் மற்றும் குல தெய்வ வழிபாடு ஆகியவை பொருளாதார நிலையை உறுதிப்படுத்தும். உழைப்பை நம்புங்கள்; காலம் கனியும்போது செல்வம் தானாகச் சேரும்.";
  }
  return text;
}

// வெளிநாடு & ஆன்மீகம் உரை
function getForeignSpiritualReportTa(birthData) {
  const lagnaSign = Math.floor(birthData.lagna / 30) % 12;
  const planets = ["sun", "moon", "mars", "mercury", "jupiter", "venus", "saturn", "rahu", "ketu"];
  const houseOf = p => ((Math.floor(birthData[p] / 30) % 12) - lagnaSign + 12) % 12 + 1;

  const in12 = planets.filter(p => houseOf(p) === 12);
  const in9 = planets.filter(p => houseOf(p) === 9);
  const lord9 = SIGN_LORDS[(lagnaSign + 8) % 12];
  const lord12 = SIGN_LORDS[(lagnaSign + 11) % 12];
  const h9lord = houseOf(lord9);
  const h12lord = houseOf(lord12);

  let text = "";

  const foreignSignals = (in12.includes("rahu") ? 1 : 0) + (houseOf("rahu") === 9 ? 1 : 0)
    + ([9, 12].includes(h12lord) ? 1 : 0) + (h9lord === 12 ? 1 : 0) + (in12.length > 0 ? 1 : 0);
  if (foreignSignals >= 2) {
    text += "உங்கள் ஜாதகத்தில் வெளிநாட்டுத் தொடர்புக்கான வலுவான அறிகுறிகள் காணப்படுகின்றன. வெளிநாட்டில் கல்வி, வேலை அல்லது நீண்ட கால வசிப்பு போன்ற வாய்ப்புகள் வாழ்வில் வரக்கூடும்; அவற்றைத் தயக்கமின்றிப் பயன்படுத்திக் கொள்ளலாம். ";
  } else if (foreignSignals === 1) {
    text += "வெளிநாட்டுப் பயணங்கள் அல்லது அயல்நாட்டு நிறுவனத் தொடர்புகள் மூலம் ஆதாயம் காணும் மிதமான யோகம் உள்ளது. ";
  } else {
    text += "தாய் மண்ணிலேயே நிலைபெற்று உயரும் அமைப்பே உங்களுக்கு வலுவாக உள்ளது; சொந்த ஊர், சொந்த முயற்சி உங்களுக்குச் சிறப்பான பலனைத் தரும். ";
  }

  text += `பாக்கியஸ்தானாதிபதி ${planetNamesTa[lord9]} ${h9lord}-ம் வீட்டில் அமர்ந்துள்ளார். `;
  if (in9.includes("jupiter") || h9lord === 9 || getPlanetState(lord9, Math.floor(birthData[lord9] / 30) % 12) === "exalted") {
    text += "9-ம் வீடு வலுப்பெற்றிருப்பதால் தர்ம சிந்தனை, குரு அருள், தீர்த்த யாத்திரைகள் மற்றும் ஆன்மீக ஞானம் உங்கள் வாழ்வில் சிறப்பாக மலரும். தந்தைவழி ஆசியும் உண்டு. ";
  } else {
    text += "தர்ம காரியங்களிலும் ஆன்மீக நாட்டத்திலும் படிப்படியான வளர்ச்சி இருக்கும்; வயது கூடக் கூட ஆன்மீக ஈடுபாடு ஆழமாகும். ";
  }

  if (houseOf("ketu") === 12 || houseOf("ketu") === 9) {
    text += "மோட்சகாரகனான கேது ஆன்மீக ஸ்தானத்தில் அமர்ந்திருப்பது தியானம், யோகம் மற்றும் தத்துவத் தேடலில் ஆழ்ந்த ஈடுபாட்டையும் இறுதியில் மன நிறைவையும் தரும்.";
  } else {
    text += "தான தர்மங்களும் முறையான வழிபாடும் உங்கள் ஆன்மீகப் பயணத்தை மேலும் வலுப்படுத்தும்.";
  }
  return text;
}

// சந்திர ராசிப் பொதுப் பலன்கள் (12)
const RASI_PALAN_TA = [
  "மேஷ ராசியில் சந்திரன் அமைந்தவர்கள் துடிப்பும் துணிச்சலும் மிக்கவர்கள். எதையும் முதலில் தொடங்கும் முன்னோடிக் குணமும், நேரடியான பேச்சும் இவர்களின் அடையாளம். கோபத்தை நிதானப்படுத்தினால் தலைமைப் பொறுப்புகள் தேடி வரும். செவ்வாயின் அருளால் நிலம், வீடு சார்ந்த யோகங்கள் உண்டு.",
  "ரிஷப ராசியில் சந்திரன் உச்சம் பெறுவதால் இவர்கள் மன உறுதியும் பொறுமையும் மிக்கவர்கள். ரசனை, கலை ஈடுபாடு, நிலையான சேமிப்புக் குணம் இவர்களுக்கு இயல்பு. சுக்கிரனின் அருளால் சொகுசு வாழ்வும் குடும்பச் செழிப்பும் உண்டு; பிடிவாதத்தை மட்டும் குறைத்துக்கொள்வது நலம்.",
  "மிதுன ராசிக்காரர்கள் புதனின் அருளால் கூரிய அறிவும் சாதுரியமான பேச்சும் பெற்றவர்கள். பல துறை ஆர்வம், நகைச்சுவை உணர்வு, விரைந்து கற்கும் திறன் இவர்களின் பலம். ஒரே இலக்கில் நிலைத்து நின்றால் வியாபாரம், எழுத்து, ஊடகத் துறைகளில் பெரும் வெற்றி காண்பார்கள்.",
  "கடக ராசியில் சந்திரன் ஆட்சி பெறுவதால் இவர்கள் ஆழ்ந்த அன்பும் இரக்க குணமும் கொண்டவர்கள். குடும்பமே இவர்களின் உலகம்; தாய்மை உணர்வுடன் அனைவரையும் அரவணைப்பார்கள். உணர்ச்சிவயப்படுவதைக் குறைத்தால் வணிகம், உணவு, மருத்துவத் துறைகளில் சிறந்து விளங்குவார்கள்.",
  "சிம்ம ராசிக்காரர்கள் சூரியனின் அருளால் கம்பீரமும் தன்மானமும் மிக்கவர்கள். எங்கிருந்தாலும் தலைமை இவர்களைத் தேடி வரும்; பெருந்தன்மையும் கொடைக் குணமும் இயல்பு. புகழாசையை நிதானப்படுத்தினால் அரசு மற்றும் நிர்வாகத் துறைகளில் உயர்ந்த அந்தஸ்தைப் பெறுவார்கள்.",
  "கன்னி ராசிக்காரர்கள் நுணுக்கமான பார்வையும் பகுத்தறிவும் கொண்டவர்கள். எதையும் முறைப்படுத்தி செம்மையாகச் செய்யும் திறன் இவர்களின் தனிச்சிறப்பு. அதிக சுயவிமர்சனத்தைத் தவிர்த்தால் கணக்கு, மருத்துவம், ஆராய்ச்சித் துறைகளில் தனி முத்திரை பதிப்பார்கள்.",
  "துலா ராசிக்காரர்கள் சுக்கிரனின் அருளால் அழகுணர்வும் நடுநிலைமையும் மிக்கவர்கள். அனைவரிடமும் இணக்கமாகப் பழகும் இவர்கள் சிறந்த நண்பர்களாகவும் நீதிபதிகளாகவும் திகழ்வார்கள். முடிவெடுப்பதில் தயக்கத்தைக் குறைத்தால் கலை, வணிகம், சட்டத் துறைகளில் உயர்வார்கள்.",
  "விருச்சிக ராசிக்காரர்கள் ஆழமான உள்ளுணர்வும் இலக்கை விடாப் பிடிவாதமும் கொண்டவர்கள். ரகசியம் காக்கும் திறனும் ஆராயும் குணமும் இவர்களின் பலம். பழிவாங்கும் எண்ணத்தைத் தவிர்த்தால் ஆராய்ச்சி, மருத்துவம், புலனாய்வுத் துறைகளில் சாதனை படைப்பார்கள்.",
  "தனுசு ராசிக்காரர்கள் குருவின் அருளால் நேர்மையும் தர்ம சிந்தனையும் மிக்கவர்கள். சுதந்திரத்தை நேசிக்கும் இவர்கள் பயணங்கள், உயர்கல்வி, தத்துவம் ஆகியவற்றில் ஆர்வம் கொண்டவர்கள். நிதானமாகப் பேசிப் பழகினால் ஆசிரியர், அறிஞர், ஆலோசகர் என உயர்ந்த இடத்தைப் பெறுவார்கள்.",
  "மகர ராசிக்காரர்கள் சனியின் அருளால் இடைவிடா உழைப்பும் கடமை உணர்வும் கொண்டவர்கள். மலை போல் சவால்கள் வந்தாலும் அசையாமல் நின்று வெல்லும் மனோதிடம் இவர்களின் அடையாளம். இளமையில் சிறு தடைகள் இருந்தாலும், நடுத்தர வயதிற்குப் பின் நிச்சயம் உயர்ந்த அந்தஸ்தும் செல்வமும் சேரும்.",
  "கும்ப ராசிக்காரர்கள் சமூக நலனில் அக்கறையும் புதுமையான சிந்தனையும் கொண்டவர்கள். எதிர்காலத்தை முன்கூட்டியே கணிக்கும் தொலைநோக்குப் பார்வை இவர்களின் பலம். தனிமையை விரும்பினாலும், கூட்டு முயற்சிகளில் இணைந்தால் அறிவியல், தொழில்நுட்பம், சமூகப் பணிகளில் பெரும் புகழ் பெறுவார்கள்.",
  "மீன ராசிக்காரர்கள் குருவின் அருளால் கருணையும் கற்பனை வளமும் மிக்கவர்கள். கலை, இசை, ஆன்மீகம் ஆகியவற்றில் இயல்பான ஈர்ப்பு உண்டு. கனவுலகில் மிதப்பதைக் குறைத்து செயலில் இறங்கினால், பிறர் மனம் அறிந்து உதவும் இவர்கள் மருத்துவம், கலை, ஆன்மீகத் துறைகளில் ஒளிர்வார்கள்."
];

function renderComprehensiveReport() {
  const birthData = currentHoroscopeData.birth;
  const lagnaSign = Math.floor(birthData.lagna / 30) % 12;
  const signLords = ["mars", "venus", "mercury", "moon", "sun", "mercury", "venus", "mars", "jupiter", "saturn", "saturn", "jupiter"];
  
  const planets = ["sun", "moon", "mars", "mercury", "jupiter", "venus", "saturn", "rahu", "ketu"];
  const planetSigns = {};
  planets.forEach(p => {
    planetSigns[p] = Math.floor(birthData[p] / 30) % 12;
  });
  
  const houseOccupants = Array(13).fill().map(() => []);
  planets.forEach(p => {
    const s = planetSigns[p];
    const house = (s - lagnaSign + 12) % 12 + 1;
    houseOccupants[house].push(p);
  });
  
  function getLordState(lordKey, signIdx) {
    const exaltationSigns = { sun: 0, moon: 1, mars: 9, mercury: 5, jupiter: 3, venus: 11, saturn: 6 };
    const debilitationSigns = { sun: 6, moon: 7, mars: 3, mercury: 11, jupiter: 9, venus: 5, saturn: 0 };
    const ownSigns = {
      sun: [4],
      moon: [3],
      mars: [0, 7],
      mercury: [2, 5],
      jupiter: [8, 11],
      venus: [1, 6],
      saturn: [9, 10]
    };
    if (exaltationSigns[lordKey] !== undefined && signIdx === exaltationSigns[lordKey]) {
      return "exalted";
    }
    if (debilitationSigns[lordKey] !== undefined && signIdx === debilitationSigns[lordKey]) {
      return "debilitated";
    }
    if (ownSigns[lordKey] !== undefined && ownSigns[lordKey].includes(signIdx)) {
      return "own";
    }
    return "general";
  }

  // 1. Health (House 1)
  const h1SignIdx = lagnaSign;
  const h1LordKey = signLords[h1SignIdx];
  const h1LordLon = birthData[h1LordKey];
  const h1LordSignIdx = Math.floor(h1LordLon / 30) % 12;
  const h1LordHouse = (h1LordSignIdx - lagnaSign + 12) % 12 + 1;
  const h1State = getLordState(h1LordKey, h1LordSignIdx);
  const h1Occupants = houseOccupants[1];
  
  const healthTa = getDetailedHealthReportTa(h1LordKey, h1LordHouse, h1State, h1Occupants);
  const healthEn = getDetailedHealthReportEn(h1LordKey, h1LordHouse, h1State, h1Occupants);

  // 2. Education (House 4)
  const h4SignIdx = (lagnaSign + 3) % 12;
  const h4LordKey = signLords[h4SignIdx];
  const h4LordLon = birthData[h4LordKey];
  const h4LordSignIdx = Math.floor(h4LordLon / 30) % 12;
  const h4LordHouse = (h4LordSignIdx - lagnaSign + 12) % 12 + 1;
  const h4State = getLordState(h4LordKey, h4LordSignIdx);
  const h4Occupants = houseOccupants[4];
  
  const educationTa = getDetailedEducationReportTa(h4LordKey, h4LordHouse, h4State, h4Occupants);
  const educationEn = getDetailedEducationReportEn(h4LordKey, h4LordHouse, h4State, h4Occupants);

  // 3. Marriage (House 7)
  const h7SignIdx = (lagnaSign + 6) % 12;
  const h7LordKey = signLords[h7SignIdx];
  const h7LordLon = birthData[h7LordKey];
  const h7LordSignIdx = Math.floor(h7LordLon / 30) % 12;
  const h7LordHouse = (h7LordSignIdx - lagnaSign + 12) % 12 + 1;
  const h7State = getLordState(h7LordKey, h7LordSignIdx);
  const h7Occupants = houseOccupants[7];
  
  const marriageTa = getDetailedMarriageReportTa(h7LordKey, h7LordHouse, h7State, h7Occupants);
  const marriageEn = getDetailedMarriageReportEn(h7LordKey, h7LordHouse, h7State, h7Occupants);

  // 4. Career (House 10)
  const h10SignIdx = (lagnaSign + 9) % 12;
  const h10LordKey = signLords[h10SignIdx];
  const h10LordLon = birthData[h10LordKey];
  const h10LordSignIdx = Math.floor(h10LordLon / 30) % 12;
  const h10LordHouse = (h10LordSignIdx - lagnaSign + 12) % 12 + 1;
  const h10State = getLordState(h10LordKey, h10LordSignIdx);
  const h10Occupants = houseOccupants[10];
  
  const careerTa = getDetailedCareerReportTa(h10LordKey, h10LordHouse, h10State, h10Occupants);
  const careerEn = getDetailedCareerReportEn(h10LordKey, h10LordHouse, h10State, h10Occupants);

  document.getElementById("report-career-desc").innerHTML = `
    <div class="lang-ta" style="font-family: var(--font-tamil); margin-bottom: 1rem;">${careerTa}</div>
  `;
  document.getElementById("report-education-desc").innerHTML = `
    <div class="lang-ta" style="font-family: var(--font-tamil); margin-bottom: 1rem;">${educationTa}</div>
  `;
  document.getElementById("report-marriage-desc").innerHTML = `
    <div class="lang-ta" style="font-family: var(--font-tamil); margin-bottom: 1rem;">${marriageTa}</div>
  `;
  document.getElementById("report-health-desc").innerHTML = `
    <div class="lang-ta" style="font-family: var(--font-tamil); margin-bottom: 1rem;">${healthTa}</div>
  `;
}
window.renderComprehensiveReport = renderComprehensiveReport;

// 6. PERSONAL & ASTROLOGER DETAILS PRINT INTEGRATION
function togglePersonal() {
  const container = document.getElementById("personal-container");
  if (container.style.display === "none") {
    container.style.display = "block";
  } else {
    container.style.display = "none";
  }
}
window.togglePersonal = togglePersonal;

function toggleAstrologer() {
  const container = document.getElementById("astrologer-container");
  if (container.style.display === "none") {
    container.style.display = "block";
  } else {
    container.style.display = "none";
  }
}
window.toggleAstrologer = toggleAstrologer;

function saveAstrologerDetails() {
  const name = document.getElementById("astro-name").value.trim();
  const center = document.getElementById("astro-center").value.trim();
  const address = document.getElementById("astro-address").value.trim();
  const contact = document.getElementById("astro-contact").value.trim();
  
  localStorage.setItem("astro_name", name);
  localStorage.setItem("astro_center", center);
  localStorage.setItem("astro_address", address);
  localStorage.setItem("astro_contact", contact);
}
window.saveAstrologerDetails = saveAstrologerDetails;

function loadAstrologerDetails() {
  const name = localStorage.getItem("astro_name") || "";
  const center = localStorage.getItem("astro_center") || "";
  const address = localStorage.getItem("astro_address") || "";
  const contact = localStorage.getItem("astro_contact") || "";
  
  const nameInput = document.getElementById("astro-name");
  const centerInput = document.getElementById("astro-center");
  const addressInput = document.getElementById("astro-address");
  const contactInput = document.getElementById("astro-contact");
  
  if (nameInput) nameInput.value = name;
  if (centerInput) centerInput.value = center;
  if (addressInput) addressInput.value = address;
  if (contactInput) contactInput.value = contact;
}
window.loadAstrologerDetails = loadAstrologerDetails;

function changeLanguage(lang) {
  localStorage.setItem("report_lang", lang);
  
  // Remove existing language classes from body
  document.body.classList.remove("lang-select-bi", "lang-select-ta", "lang-select-en");
  
  // Add new class
  document.body.classList.add(`lang-select-${lang}`);
  
  // Update select element just in case
  const select = document.getElementById("report-lang");
  if (select) select.value = lang;
  
  // Update print headers and footers with localized labels
  if (currentHoroscopeData) {
    populatePrintHeadersAndFooters();
  }
}
window.changeLanguage = changeLanguage;

function triggerPrint() {
  window.print();
}
window.triggerPrint = triggerPrint;

function populatePrintHeadersAndFooters() {
  const userName = document.getElementById("user-name").value.trim() || "N/A";
  const fatherName = document.getElementById("father-name").value.trim() || "N/A";
  const motherName = document.getElementById("mother-name").value.trim() || "N/A";
  
  const dob = document.getElementById("birth-date").value;
  const tob = document.getElementById("birth-time").value;
  const pob = document.getElementById("birth-location").value || "N/A";
  const lat = document.getElementById("latitude").value;
  const lng = document.getElementById("longitude").value;
  
  const astroName = document.getElementById("astro-name").value.trim() || "N/A";
  const astroCenter = document.getElementById("astro-center").value.trim() || "N/A";
  const astroAddress = document.getElementById("astro-address").value.trim() || "N/A";
  const astroContact = document.getElementById("astro-contact").value.trim() || "N/A";
  
  const lang = "ta";
  const trans = {
    title: { ta: "ஜாதக அறிக்கை", en: "Horoscope Report", bi: "ஜாதக அறிக்கை (Horoscope Report)" },
    name: { ta: "பெயர்:", en: "Name:", bi: "பெயர் (Name):" },
    father: { ta: "தந்தை பெயர்:", en: "Father's Name:", bi: "தந்தை பெயர் (Father):" },
    mother: { ta: "தாய் பெயர்:", en: "Mother's Name:", bi: "தாய் பெயர் (Mother):" },
    date: { ta: "தேதி:", en: "Date:", bi: "தேதி (Date):" },
    time: { ta: "நேரம்:", en: "Time:", bi: "நேரம் (Time):" },
    pob: { ta: "பிறந்த இடம்:", en: "Place of Birth:", bi: "பிறந்த இடம் (POB):" },
    lat: { ta: "அட்சரேகை:", en: "Latitude:", bi: "அட்சரேகை (Lat):" },
    lng: { ta: "தீர்க்கரேகை:", en: "Longitude:", bi: "தீர்க்கரேகை (Lng):" },
    ayanamsha: { ta: "அயனாம்சம்:", en: "Ayanamsha:", bi: "அயனாம்சம் (Ayanamsha):" },
    astro: { ta: "சோதிடர்:", en: "Astrologer:", bi: "சோதிடர் (Astrologer):" },
    center: { ta: "சோதிட மையம்:", en: "Astro Center:", bi: "சோதிட மையம் (Center):" },
    address: { ta: "முகவரி:", en: "Address:", bi: "முகவரி (Address):" },
    contact: { ta: "தொடர்பு எண்:", en: "Contact:", bi: "தொடர்பு எண் (Contact):" }
  };
  
  const panels = ["charts", "dasa", "ashtakavarga", "aspects", "houses", "comprehensive-report"];
  
  panels.forEach(p => {
    const panelEl = document.getElementById(`panel-${p}`);
    if (!panelEl) return;
    
    // Remove existing print header/footer if any
    const existingHeader = panelEl.querySelector(".print-header");
    if (existingHeader) existingHeader.remove();
    const existingFooter = panelEl.querySelector(".print-footer");
    if (existingFooter) existingFooter.remove();
    
    // Create new print header
    const header = document.createElement("div");
    header.className = "print-header";
    header.innerHTML = `
      <div class="print-header-branding">
        <h3>${trans.title[lang]}</h3>
        <div class="print-header-brand-line"></div>
      </div>
      <div class="print-header-line-view">
        <div class="print-header-line">
          <strong>${trans.name[lang]}</strong> ${userName} &nbsp;|&nbsp; 
          <strong>${trans.father[lang]}</strong> ${fatherName} &nbsp;|&nbsp; 
          <strong>${trans.mother[lang]}</strong> ${motherName}
        </div>
        <div class="print-header-line">
          <strong>${trans.date[lang]}</strong> ${dob} &nbsp;|&nbsp; 
          <strong>${trans.time[lang]}</strong> ${tob} &nbsp;|&nbsp; 
          <strong>${trans.pob[lang]}</strong> ${pob}
        </div>
        <div class="print-header-line">
          <strong>${trans.lat[lang]}</strong> ${lat}° &nbsp;|&nbsp; 
          <strong>${trans.lng[lang]}</strong> ${lng}° &nbsp;|&nbsp; 
          <strong>${trans.ayanamsha[lang]}</strong> ${formatDMS(currentHoroscopeData.birth.ayanamsha)}
        </div>
      </div>
    `;
    
    // Create new print footer
    const footer = document.createElement("div");
    footer.className = "print-footer";
    footer.innerHTML = `
      <div class="print-footer-brand-line"></div>
      <div class="print-footer-line-view">
        <strong>${trans.astro[lang]}</strong> ${astroName} &nbsp;|&nbsp; 
        <strong>${trans.center[lang]}</strong> ${astroCenter} &nbsp;|&nbsp; 
        <strong>${trans.address[lang]}</strong> ${astroAddress} &nbsp;|&nbsp; 
        <strong>${trans.contact[lang]}</strong> ${astroContact}
      </div>
    `;
    
    // Prepend header and append footer
    panelEl.insertBefore(header, panelEl.firstChild);
    panelEl.appendChild(footer);
  });
  
  // Call helper to populate print cover (Page 1) and details (Page 2)
  populatePrintPages();
}
window.populatePrintHeadersAndFooters = populatePrintHeadersAndFooters;

function populatePrintPages() {
  if (!currentHoroscopeData) return;
  
  const userName = document.getElementById("user-name").value.trim() || "N/A";
  const fatherName = document.getElementById("father-name").value.trim() || "N/A";
  const motherName = document.getElementById("mother-name").value.trim() || "N/A";
  const dob = document.getElementById("birth-date").value;
  const tob = document.getElementById("birth-time").value;
  const pob = document.getElementById("birth-location").value || "N/A";
  
  const astroName = document.getElementById("astro-name").value.trim() || "N/A";
  const astroCenter = document.getElementById("astro-center").value.trim() || "N/A";
  const astroAddress = document.getElementById("astro-address").value.trim() || "N/A";
  const astroContact = document.getElementById("astro-contact").value.trim() || "N/A";
  
  // Page 1: Cover
  document.getElementById("print-cover-center").textContent = astroCenter;
  document.getElementById("print-cover-name").textContent = astroName;
  document.getElementById("print-cover-address").textContent = astroAddress;
  document.getElementById("print-cover-contact").textContent = astroContact;
  
  // Page 2: Details
  document.getElementById("print-pd-name").textContent = userName;
  document.getElementById("print-pd-father").textContent = fatherName;
  document.getElementById("print-pd-mother").textContent = motherName;
  document.getElementById("print-pd-dob").textContent = dob;
  document.getElementById("print-pd-tob").textContent = tob;
  document.getElementById("print-pd-pob").textContent = pob;
  
  // Lagna, Rasi, Nakshatra
  const lagnaValueTa = document.getElementById("lagna-value-ta").textContent;
  const lagnaValueEn = document.getElementById("lagna-value-en").textContent;
  const lagnaDegree = document.getElementById("lagna-degree").textContent;
  
  const rasiValueTa = document.getElementById("rasi-value-ta").textContent;
  const rasiValueEn = document.getElementById("rasi-value-en").textContent;
  const rasiDegree = document.getElementById("rasi-degree").textContent;
  
  const nakValueTa = document.getElementById("nakshatra-value-ta").textContent;
  const nakValueEn = document.getElementById("nakshatra-value-en").textContent;
  const nakPada = document.getElementById("nakshatra-pada").innerHTML;
  
  document.getElementById("print-pd-lagna").innerHTML = `<span class="lang-ta">${lagnaValueTa} (${lagnaDegree})</span><span class="lang-sep"> / </span><span class="lang-en">${lagnaValueEn} (${lagnaDegree})</span>`;
  document.getElementById("print-pd-rasi").innerHTML = `<span class="lang-ta">${rasiValueTa} (${rasiDegree})</span><span class="lang-sep"> / </span><span class="lang-en">${rasiValueEn} (${rasiDegree})</span>`;
  document.getElementById("print-pd-nakshatra").innerHTML = `<span class="lang-ta">${nakValueTa} (${nakPada})</span><span class="lang-sep"> / </span><span class="lang-en">${nakValueEn} (${nakPada})</span>`;
}
window.populatePrintPages = populatePrintPages;

// 7. ASTROLOGICAL GENERATORS FOR DETAILED READINGS (PALANS)
function getDetailedPlanetReadingTa(planet, signIdx, house, state) {
  const planetNamesTa = {
    sun: "சூரியன்", moon: "சந்திரன்", mars: "செவ்வாய்", mercury: "புதன்",
    jupiter: "குரு", venus: "சுக்கிரன்", saturn: "சனி", rahu: "ராகு", ketu: "கேது"
  };
  const planetName = planetNamesTa[planet];
  const rasiName = RASIS[signIdx].nameTa;
  
  let detail = `${planetName} உங்கள் ஜாதகத்தில் ${rasiName} ராசியில், லக்னத்திற்கு ${house}-வது வீட்டில் அமர்ந்துள்ளார். `;
  
  if (state === "exalted") {
    detail += `இங்கு அவர் உச்ச நிலை பெற்று அதீத பலத்துடன் விளங்குகிறார். இதனால் ${planetName} தனது காரகத்துவ பலன்களை முழுமையாக வாரி வழங்குவார். உங்கள் வாழ்வில் இதன் மூலம் பெரும் நன்மைகளும், சாதகமான திருப்பங்களும் ஏற்படும். `;
  } else if (state === "debilitated") {
    detail += `இங்கு அவர் நீச நிலை பெற்று பலம் குறைந்து காணப்படுகிறார். இதனால் சில காரியங்களில் தாமதம், தடைகள் அல்லது சவால்களை நீங்கள் சந்திக்க நேரிடலாம். எனினும், முறையான வழிபாடுகள் மற்றும் நிதானமான செயல்பாடுகள் மூலம் இந்த சவால்களை உங்களால் எளிதாகக் கடக்க முடியும். `;
  } else if (state === "own") {
    detail += `இங்கு அவர் ஆட்சி நிலை பெற்று தனது சொந்த வீட்டிலேயே பலத்துடன் வீற்றிருக்கிறார். இதனால் இந்த வீட்டின் பலன்கள் நிலைபெற்று வலுவடையும். இது உங்களுக்கு மன உறுதியையும், நிலையான நற்பலன்களையும் வாரி வழங்கும். `;
  } else {
    detail += `இங்கு அவர் நட்பு அல்லது சம நிலையில் சாதாரணமாக அமர்ந்துள்ளார். இது உங்கள் வாழ்வில் சீரான நற்பலன்களையும், உழைப்பிற்கு ஏற்ற தகுதியான அங்கீகாரத்தையும் படிப்படியாக வழங்கும். `;
  }
  
  const planetDetails = {
    sun: `சூரியன் என்பது தந்தை, அதிகாரம், அரசு, ஆன்மா மற்றும் கௌரவத்தைக் குறிக்கும் கிரகமாகும். இவர் ${house}-ல் இருப்பது உங்களுக்கு நல்ல நிர்வாகத் திறன், கம்பீரமான ஆளுமை மற்றும் சமூகத்தில் ஒரு தனித்துவமான மரியாதையைத் தரும். உங்களது தன்னம்பிக்கை எப்போதும் உயர்வாக இருக்கும்.`,
    moon: `சந்திரன் என்பது தாய், மனம், எண்ணம், கற்பனை மற்றும் உணர்ச்சிகளைக் குறிக்கும் கிரகமாகும். இவர் ${house}-ல் அமர்ந்திருப்பது உங்களுக்கு மென்மையான குணம், கற்பனை வளம் மற்றும் அன்பான நடத்தையை அளிக்கும். உங்களது உள்ளுணர்வு மிகவும் பலமாக இருக்கும்.`,
    mars: `செவ்வாய் என்பது தைரியம், வீரியம், நிலம், உடன்பிறப்புகள் மற்றும் நிர்வாகத் திறனைக் குறிப்பவர். இவர் ${house}-ல் இருப்பது உங்களுக்கு அபார துணிச்சல், சவால்களை எதிர்கொள்ளும் நெஞ்சுரம் மற்றும் எந்த காரியத்தையும் வேகமாகச் செய்து முடிக்கும் ஆற்றலைத் தரும்.`,
    mercury: `புதன் என்பது கல்வி, புத்திசாலித்தனம், பேச்சாற்றல், கணக்கு மற்றும் வியாபாரத்தைக் குறிக்கும் கிரகமாகும். இவர் ${house}-ல் அமர்ந்துள்ளதால் சமயோசித புத்தி, சிறந்த நகைச்சுவை உணர்வு, சாதுரியமான பேச்சு மற்றும் வியாபார நுணுக்கங்களை நீங்கள் இயல்பாகவே கொண்டிருப்பீர்கள்.`,
    jupiter: `குரு என்பது ஞானம், கல்வி, ஆன்மீகம், அதிர்ஷ்டம் மற்றும் ஒழுக்கத்தைக் குறிக்கும் சுப கிரகமாகும். இவர் ${house}-ல் இருப்பது உங்களுக்கு தெய்வ அருளையும், பெரியோர்களின் ஆசியையும் பெற்றுத் தரும். நீங்கள் நேர்மையான பாதையில் நடந்து வாழ்வில் பெரும் நற்பெயர் பெறுவீர்கள்.`,
    venus: `சுக்கிரன் என்பது அழகு, கலை, சொகுசு வாழ்க்கை, வாகனம் மற்றும் இல்லற சுகத்தைக் குறிக்கும் கிரகமாகும். இவர் ${house}-ல் இருப்பது உங்களுக்கு வசீகரத் தோற்றம், கலைகளில் ஆர்வம், ஆடம்பரப் பொருட்கள் மீதான ஈர்ப்பு மற்றும் மகிழ்ச்சியான குடும்ப வாழ்க்கையைத் தரும்.`,
    saturn: `சனி என்பது உழைப்பு, பொறுமை, கடமை உணர்வு, ஆயுள் மற்றும் ஒழுக்கத்தைக் குறிக்கும் கிரகமாகும். இவர் ${house}-ல் அமர்ந்திருப்பது உங்களுக்கு ஆரம்பத்தில் சில தடைகளைத் தந்தாலும், உழைப்பின் மூலம் நிலையான வெற்றியையும், பெரும் பொறுமையையும், சிறந்த தலைமைப் பண்பையும் தருவார்.`,
    rahu: `ராகு என்பது நவீன சிந்தனை, வெளிநாட்டு யோகம், எதிர்பாராத திருப்பங்கள் மற்றும் பிரம்மாண்டத்தைக் குறிப்பவர். இவர் ${house}-ல் இருப்பது உங்களுக்கு புதிய சிந்தனைகளை உருவாக்குவதோடு, குறுகிய காலத்தில் பெரிய உயரங்களை எட்டும் ஆசையையும், உலகளாவிய தொடர்புகளையும் தரும்.`,
    ketu: `கேது என்பது ஞானம், மோட்சம், ஆன்மீகம், பற்றற்ற நிலை மற்றும் உள்ளுணர்வைக் குறிப்பவர். இவர் ${house}-ல் இருப்பது உலகியல் விஷயங்களில் ஒருவித பற்றற்ற தன்மையைத் தருவதோடு, ஆன்மீகத் தேடலையும், தத்துவ அறிவையும், தீவிரமான தியான ஈடுபாட்டையும் கொடுக்கும்.`
  };
  
  detail += " " + planetDetails[planet];
  
  const houseDetails = [
    `லக்னம் எனப்படும் 1-ம் வீடு உங்கள் உடல் நலம், குணம் மற்றும் ஆளுமையைக் குறிக்கும். இங்கு கிரகம் அமர்ந்திருப்பது உங்கள் குணநலன்களிலும் தோற்றத்திலும் நேரடி தாக்கத்தை ஏற்படுத்தும்.`,
    `2-ம் வீடு தனம், குடும்பம் மற்றும் வாக்கைக் குறிக்கும். இங்கு கிரகம் இருப்பது உங்கள் பொருளாதார முன்னேற்றத்திற்கும், குடும்ப மகிழ்ச்சிக்கும், இனிமையான பேச்சிற்கும் வழிவகுக்கும்.`,
    `3-ம் வீடு தைரியம், இளைய சகோதரம் மற்றும் பிரயாணங்களைக் குறிக்கும். இங்கு கிரகம் இருப்பது உங்களுக்கு சிறந்த தகவல் தொடர்புத் திறன், சுய முயற்சி மற்றும் சகோதர உதவிகளைத் தரும்.`,
    `4-ம் வீடு தாய், கல்வி, வாகனம் மற்றும் சுகத்தைக் குறிக்கும். இங்கு கிரகம் இருப்பது உங்களுக்கு நல்ல கல்வி, சொத்து சேர்க்கை, வாகன யோகம் மற்றும் தாயின் அன்பைப் பெற்றுத் தரும்.`,
    `5-ம் வீடு புத்திர பாக்கியம், பூர்வ புண்ணியம் மற்றும் புத்தி கூர்மையைக் குறிக்கும். இங்கு கிரகம் இருப்பது உங்களுக்கு சிறந்த ஆக்கத்திறன், பிள்ளைகளால் மகிழ்ச்சி மற்றும் அதிர்ஷ்டத்தைத் தரும்.`,
    `6-ம் வீடு கடன், நோய் மற்றும் எதிரிகளைக் குறிக்கும். இங்கு கிரகம் இருப்பது தடைகளையும் எதிர்ப்புகளையும் வெல்லும் ஆற்றலையும், போட்டித் தேர்வுகளில் வெற்றியையும் தரும்.`,
    `7-ம் வீடு களத்திரம் மற்றும் கூட்டுத் தொழிலைக் குறிக்கும். இங்கு கிரகம் இருப்பது உங்களுக்கு சிறந்த வாழ்க்கைத்துணை அமைவதற்கும், கூட்டுத் தொழில் மூலம் லாபம் பெறுவதற்கும் உதவும்.`,
    `8-ம் வீடு ஆயுள் மற்றும் எதிர்பாராத திடீர் திருப்பங்களைக் குறிக்கும். இங்கு கிரகம் இருப்பது உங்களுக்கு சிறந்த உள்ளுணர்வையும், மறைமுக அறிவையும், திடீர் யோகங்களையும் தரும்.`,
    `9-ம் வீடு பாக்யம், தந்தை, ஆன்மீகம் மற்றும் அதிர்ஷ்டத்தைக் குறிக்கும். இங்கு கிரகம் இருப்பது உங்களுக்கு தார்மீக சிந்தனைகளையும், தந்தையின் ஆதரவையும், நீண்ட தூரப் பயணங்களையும் தரும்.`,
    `10-ம் வீடு தொழில் மற்றும் கௌரவத்தைக் குறிக்கும். இங்கு கிரகம் இருப்பது உங்கள் வேலை அல்லது தொழிலில் பெரிய முன்னேற்றத்தையும், அதிகாரமிக்க பதவிகளையும் தேடித்தரும்.`,
    `11-ம் வீடு லாபங்கள் மற்றும் மூத்த சகோதரரைக் குறிக்கும். இங்கு கிரகம் இருப்பது உங்கள் ஆசைகள் அனைத்தும் நிறைவேறுவதற்கும், பல்வேறு வழிகளில் வருமானம் வருவதற்கும் வழிவகுக்கும்.`,
    `12-ம் வீடு செலவுகள், வெளிநாட்டு யோகம் மற்றும் மோட்சத்தைக் குறிக்கும். இங்கு கிரகம் இருப்பது உங்களுக்கு ஆன்மீக ஈடுபாடு, நற்செலவுகள் மற்றும் வெளிநாட்டுத் தொடர்புகளைத் தரும்.`
  ];
  
  detail += " " + houseDetails[house - 1];
  return detail;
}

function getDetailedPlanetReadingEn(planet, signIdx, house, state) {
  const planetNamesEn = {
    sun: "Sun", moon: "Moon", mars: "Mars", mercury: "Mercury",
    jupiter: "Jupiter", venus: "Venus", saturn: "Saturn", rahu: "Rahu", ketu: "Ketu"
  };
  const planetName = planetNamesEn[planet];
  const rasiName = RASIS[signIdx].nameEn;
  
  let detail = `${planetName} is placed in the sign of ${rasiName}, occupying the ${house} house from your Ascendant (Lagna). `;
  
  if (state === "exalted") {
    detail += `In this position, ${planetName} is exalted, reaching its peak strength and maximum potential. It is highly auspicious and empowers the planet to bestow its most benefic significations in full measure, bringing outstanding opportunities and positive breakthroughs. `;
  } else if (state === "debilitated") {
    detail += `Here, ${planetName} is in debilitation, which reduces its functional strength. This might lead to occasional delays, minor obstacles, or lessons of patience in its related areas. However, conscious effort and spiritual remedies will help mitigate these challenges effectively. `;
  } else if (state === "own") {
    detail += `Placed in its own house, ${planetName} feels secure and commands strong structural dignity. This stabilizes the results of this house, granting you natural confidence, resilience, and steady progress in life. `;
  } else {
    detail += `In this placement, the planet is in a neutral or friendly sign, operating under general conditions. It indicates standard outcomes, requiring regular dedication while rewarding your sincere efforts progressively. `;
  }
  
  const planetDetails = {
    sun: `The Sun represents the father, authority, government connections, soul, and social status. Its presence here enhances your self-confidence, leadership capability, and sense of honor. You possess a dignified presence and value self-respect.`,
    moon: `The Moon governs the mother, mind, emotional responses, imagination, and intuition. Its placement here bestows a sensitive nature, deep empathy, artistic inclination, and close family ties. Your intuitive abilities are remarkably active.`,
    mars: `Mars represents courage, vitality, land, siblings, and administrative drive. Its energy here provides you with immense determination, physical stamina, a competitive edge, and the power to confront life's challenges fearlessly.`,
    mercury: `Mercury represents intellect, communication, logic, mathematics, and business acumen. Placed here, it grants a witty humor, quick comprehension, excellent communication skills, and natural ability in finance or trade.`,
    jupiter: `Jupiter represents wisdom, higher learning, spirituality, fortune, and moral values. Its presence here acts as a protective shield, bringing divine grace, respect for teachers, ethical conduct, and natural wisdom that guides you and others.`,
    venus: `Venus signifies beauty, love, artistic talent, vehicle comforts, and domestic harmony. In this house, it enhances your personal charm, love for fine arts, appreciation of comforts, and potential for a happy and harmonious marital life.`,
    saturn: `Saturn represents discipline, hard work, patience, longevity, and sense of duty. Its placement here may cause early delays or challenges, but it builds structural discipline, immense patience, and long-term stability through steady, honest efforts.`,
    rahu: `Rahu represents modern ideas, foreign influences, sudden changes, and worldly ambitions. Its placement here stimulates out-of-the-box thinking, a drive for quick progress, and potential success in technological or international environments.`,
    ketu: `Ketu represents spiritual liberation (Moksha), detachment, philosophical wisdom, and inner intuition. In this house, it promotes detachment from mundane matters, a search for deeper truth, active dream states, and profound spiritual experiences.`
  };
  
  detail += " " + planetDetails[planet];
  
  const houseDetails = [
    `The 1st House (Lagna) represents physical health, character, and overall personality. Having a planet here directly shapes your physical appearance, vitality, and primary approach to life.`,
    `The 2nd House denotes wealth, family assets, speech, and early upbringing. A planet here influences your financial status, relationship with family members, and style of communication.`,
    `The 3rd House represents courage, initiative, younger siblings, and short travels. A planet here enhances your communication channels, self-made efforts, and relationship with siblings.`,
    `The 4th House represents mother, home comfort, academic education, and fixed assets. A planet here influences your academic success, peace of mind, property ownership, and maternal connection.`,
    `The 5th House denotes children, past-life merits (poorva punya), creativity, and intellect. A planet here supports creative intelligence, joy through children, and speculative opportunities.`,
    `The 6th House represents debts, disease, obstacles, and service. A planet here affects your daily work routines, resistance to health issues, and ability to overcome competitors and debts.`,
    `The 7th House represents marriage, spouse, business partners, and public relations. Having a planet here is vital for shaping your relationship dynamics, marital happiness, and public alliances.`,
    `The 8th House governs longevity, sudden events, hidden research, and legacy. A planet here points to deep research capacity, interest in occult sciences, and major life transformations.`,
    `The 9th House signifies fortune, father, spiritual inclination, and higher studies. A planet here brings spiritual guidance, luck, higher education prospects, and travel opportunities.`,
    `The 10th House (Karma Sthana) represents career, status, reputation, and authority. A planet here strongly influences your professional path, career choices, and public recognition.`,
    `The 11th House denotes gains, desires, elder siblings, and networking. A planet here is auspicious for fulfilling desires, expansion of social circles, and multiple revenue streams.`,
    `The 12th House governs expenses, spiritual isolation, and foreign travels. A planet here guides your interest in charity, spiritual retreat, foreign settlements, and sleep patterns.`
  ];
  
  detail += " " + houseDetails[house - 1];
  return detail;
}

function getDetailedHouseLordReadingTa(houseNum, lordKey, lordHouseNum, ownHouse) {
  const lordNamesTa = { sun: "சூரியன்", moon: "சந்திரன்", mars: "செவ்வாய்", mercury: "புதன்", jupiter: "குரு", venus: "சுக்கிரன்", saturn: "சனி" };
  const lordName = lordNamesTa[lordKey];
  const houseMeaning = houseMeaningsTa[houseNum - 1];
  const targetMeaning = houseMeaningsTa[lordHouseNum - 1];
  
  let detail = `உங்கள் ${houseNum}-ம் வீட்டின் அதிபதியான ${lordName}, லக்னத்திற்கு ${lordHouseNum}-ம் வீட்டில் அமர்ந்துள்ளார். `;
  
  if (ownHouse) {
    detail += `இந்த அமைப்பானது 'ஆட்சி பலம்' என்று அழைக்கப்படுகிறது. அதிபதி தனது சொந்த வீட்டிலேயே அமர்ந்திருப்பதால், இந்த வீட்டின் காரகத்துவங்களும் பலன்களும் பெரும் வலிமை பெறுகின்றன. இது உங்கள் வாழ்வில் ${houseMeaning.split(' (')[0]} தொடர்பான விஷயங்களில் தடையற்ற நற்பலன்களையும், நிலையான வெற்றியையும், பெரும் பாதுகாப்பையும் அளிக்கும். `;
  } else {
    detail += `இது உங்கள் ${houseMeaning.split(' (')[0]} சார்ந்த வாழ்க்கை அம்சங்களை, ${lordHouseNum}-ம் வீட்டின் காரகத்துவங்களான ${targetMeaning.split(' (')[0]} சார்ந்த செயல்பாடுகளோடு நேரடியாக இணைக்கிறது. `;
  }
  
  const houseConnectionsTa = {
    1: `லக்னாதிபதி லக்னத்திற்கு வெவ்வேறு வீடுகளில் அமர்வது ஜாதகரின் உடல் நலம், குணம் மற்றும் முழு ஆளுமையின் திசையைத் தீர்மானிக்கிறது. அதிபதி ${lordHouseNum}-ல் இருப்பதால், உங்களது சிந்தனையும் செயல்பாடுகளும் இந்த வீட்டின் காரகங்களை நோக்கியே எப்போதும் அமையும்.`,
    2: `தனபதியான 2-ம் அதிபதி ${lordHouseNum}-ல் அமர்வதால், உங்களது பொருளாதார வரவுகள் மற்றும் குடும்ப மேன்மைக்கான வழிகள் இந்த வீட்டின் மூலமாகவே அமையும். உங்களது பேச்சாற்றல் இதன் மூலம் சிறப்புறும்.`,
    3: `3-ம் அதிபதியான தைரியகாரகன் ${lordHouseNum}-ல் அமர்வது, உங்களது முயற்சிகள், தகவல் தொடர்பு மற்றும் இளைய சகோதர உறவுகள் இந்த வீட்டின் வாயிலாகப் பலனடைவதைக் காட்டுகிறது.`,
    4: `4-ம் அதிபதியான சுகாதிபதி ${lordHouseNum}-ல் இருப்பது, உங்களது கல்வி, தாய்வழி சுகங்கள், வீடு, வாகன யோகம் மற்றும் மன அமைதி இந்த வீட்டின் செயல்பாடுகள் மூலம் உங்களுக்குக் கிடைக்கும் என்பதைக் குறிக்கிறது.`,
    5: `பூர்வ புண்ணியாதிபதியான 5-ம் அதிபதி ${lordHouseNum}-ல் அமர்வது, உங்களது பூர்வ புண்ணியப் பலன்கள், புத்திர பாக்கியம், கலை ஞானம் மற்றும் புத்தி கூர்மை ஆகியவை இந்த வீட்டின் மூலம் மலர்வதைக் காட்டுகிறது.`,
    6: `6-ம் அதிபதியான கடனதிபதி ${lordHouseNum}-ல் அமர்வது, நீங்கள் உங்களது அன்றாடப் பணிகள், போட்டித் தேர்வுகள், எதிர்ப்புகளை சமாளித்தல் போன்ற சவால்களை இந்த வீடு சார்ந்த துறைகளில் எதிர்கொள்ள நேரிடும் என்பதைக் குறிக்கிறது.`,
    7: `களத்திராதியான 7-ம் அதிபதி ${lordHouseNum}-ல் இருப்பது, உங்களது வாழ்க்கைத்துணை, கூட்டாளி மற்றும் சமூக உறவுகள் இந்த வீட்டின் மூலம் உங்கள் வாழ்வில் நுழைவதையும், அதனால் ஏற்படும் தாக்கங்களையும் காட்டுகிறது.`,
    8: `அஷ்டமாதிபதியான 8-ம் அதிபதி ${lordHouseNum}-ல் இருப்பது, உங்கள் வாழ்வில் ஏற்படும் திடீர் மாற்றங்கள், எதிர்பாராத திருப்பங்கள் மற்றும் ஆராய்ச்சி சிந்தனைகள் இந்த வீடு சார்ந்தே நிகழும் என்பதைக் காட்டுகிறது.`,
    9: `பாக்யாதிபதியான 9-ம் அதிபதி ${lordHouseNum}-ல் அமர்வது, உங்களது அதிர்ஷ்டம், தந்தையின் ஆதரவு, ஆன்மீக ஈடுபாடு மற்றும் உயர்கல்வி வாய்ப்புகள் இந்த வீட்டின் மூலம் உங்களுக்கு எளிதாகக் கிட்டும் என்பதைக் குறிக்கிறது.`,
    10: `கர்மாதிபதியான 10-ம் அதிபதி ${lordHouseNum}-ல் அமர்வது, உங்களது வேலை, தொழில் அல்லது ஜீவனோபாய வழிகள் இந்த வீட்டின் காரகங்களோடு தொடர்புடையதாக இருக்கும் என்பதைத் திட்டவட்டமாகக் காட்டுகிறது.`,
    11: `லாபாதிபதியான 11-ம் அதிபதி ${lordHouseNum}-ல் அமர்வது, உங்களது ஆசைகள் நிறைவேறுவதும், பல்வேறு லாபங்கள் மற்றும் மூத்த சகோதர உறவுகள் மூலமாக நன்மைகள் கிடைப்பதும் இந்த வீட்டின் வழியாக அமையும் என்பதைக் குறிக்கிறது.`,
    12: `விரயாதிபதியான 12-ம் அதிபதி ${lordHouseNum}-ல் அமர்வது, உங்களது சுபச் செலவுகள், ஆன்மீகப் பயணங்கள் மற்றும் வெளிநாட்டுத் தொடர்புகள் இந்த வீட்டின் மூலம் உங்களுக்கு அமையக்கூடும் என்பதைக் காட்டுகிறது.`
  };
  
  detail += " " + houseConnectionsTa[houseNum];
  return detail;
}

function getDetailedHouseLordReadingEn(houseNum, lordKey, lordHouseNum, ownHouse) {
  const lordNamesEn = { sun: "Sun", moon: "Moon", mars: "Mars", mercury: "Mercury", jupiter: "Jupiter", venus: "Venus", saturn: "Saturn" };
  const lordName = lordNamesEn[lordKey];
  const houseMeaning = houseMeaningsEn[houseNum - 1];
  const targetMeaning = houseMeaningsEn[lordHouseNum - 1];
  
  let detail = `The lord of your ${houseNum} House (${lordName}) is placed in the ${lordHouseNum} House from your Ascendant. `;
  
  if (ownHouse) {
    detail += `This placement is called 'Swa-Kshetra' (Own House placement). Since the lord occupies its own sign, the strength of this house is highly elevated. It grants natural protection and guarantees robust, stable results for all matters related to ${houseMeaning.split(',')[0]} without major interference. `;
  } else {
    detail += `This directly connects and channels your ${houseMeaning.split(',')[0]} life areas with the activities and significations of the ${lordHouseNum} House, which represents ${targetMeaning.split(',')[0]}. `;
  }
  
  const houseConnectionsEn = {
    1: `As the Lagna Lord determines your physical constitution and life path, its placement in the ${lordHouseNum} House means your core focus, personality growth, and life direction will align closely with this area.`,
    2: `The 2nd Lord governing wealth and family assets placing itself in the ${lordHouseNum} House indicates that your sources of income, savings, and family support will flow primarily through these channels.`,
    3: `The 3rd Lord representing courage and self-made efforts placing itself in the ${lordHouseNum} House shows that your communication, initiatives, and interactions with siblings will bear fruit through this house's matters.`,
    4: `The 4th Lord representing home, comfort, and education sitting in the ${lordHouseNum} House signifies that your academic achievements, maternal relations, properties, and overall peace of mind will be nurtured by this house's activities.`,
    5: `The 5th Lord of intellect, creativity, and poorva punya placed in the ${lordHouseNum} House indicates that your creative ideas, joy through children, and fortune will express themselves through the affairs of this house.`,
    6: `The 6th Lord representing challenges, debts, and daily services sitting in the ${lordHouseNum} House implies that you will deal with competition, health management, or service opportunities centered around this specific area.`,
    7: `The 7th Lord of marriage and alliances sitting in the ${lordHouseNum} House reveals that your spouse, marital dynamics, or business partners will play a vital role in this area of your life.`,
    8: `The 8th Lord of longevity and sudden transformations occupying the ${lordHouseNum} House indicates that your major life changes, research interests, and unexpected events will be triggered by this house's themes.`,
    9: `The 9th Lord of luck, father, and spirituality placing itself in the ${lordHouseNum} House brings divine grace, wisdom, guidance, and travel opportunities centered around this house's significations.`,
    10: `The 10th Lord of career and public status placing itself in the ${lordHouseNum} House confirms that your job, professional activities, and social duties will be strongly linked to the matters of this house.`,
    11: `The 11th Lord of gains and desires placing itself in the ${lordHouseNum} House indicates that your aspirations will be fulfilled and your material gains will be realized through this house's channels.`,
    12: `The 12th Lord of losses and spiritual isolation sitting in the ${lordHouseNum} House indicates that your foreign travels, expenditures, and spiritual inclinations will be activated through this house.`
  };
  
  detail += " " + houseConnectionsEn[houseNum];
  return detail;
}

// 8. WORD DOCUMENT CLIENT-SIDE EXPORTER (.doc / MSO HTML)
function exportToWord() {
  if (!currentHoroscopeData) {
    alert("முதலில் ஜாதகத்தைக் கணக்கிடவும்.");
    return;
  }
  
  const resultsView = document.getElementById("results-view");
  if (!resultsView) return;
  
  // Clone results-view to avoid modifying screen view
  const clone = resultsView.cloneNode(true);
  
  // Clean up screen-only buttons and selector in the exported clone
  const header = clone.querySelector(".results-header");
  if (header) {
    const printBtn = header.querySelector("#print-report-btn");
    if (printBtn) printBtn.remove();
    const wordBtn = header.querySelector("#export-word-btn");
    if (wordBtn) wordBtn.remove();
    const langSel = header.querySelector(".lang-selector-container");
    if (langSel) langSel.remove();
  }
  
  const mainTabs = clone.querySelector(".main-tabs");
  if (mainTabs) mainTabs.remove();
  
  const chartsStack = clone.querySelector(".charts-stack");
  if (chartsStack) chartsStack.remove();
  
  // Set explicit width and height attributes on SVGs for MS Word compatibility
  const svgs = clone.querySelectorAll("svg");
  svgs.forEach(svg => {
    svg.setAttribute("width", "240");
    svg.setAttribute("height", "240");
  });
  
  // Convert flex-based 2x2 charts grid to a traditional table for Word compatibility
  const printChartsContainer = clone.querySelector(".print-charts-container");
  if (printChartsContainer) {
    const boxes = Array.from(printChartsContainer.querySelectorAll(".print-chart-box"));
    if (boxes.length === 4) {
      const table = document.createElement("table");
      table.setAttribute("style", "width: 100%; border-collapse: collapse; margin-top: 10px; border: none;");
      
      const tr1 = document.createElement("tr");
      const td1 = document.createElement("td");
      td1.setAttribute("style", "width: 50%; text-align: center; padding: 10px; border: none; vertical-align: top;");
      td1.innerHTML = boxes[0].innerHTML;
      const td2 = document.createElement("td");
      td2.setAttribute("style", "width: 50%; text-align: center; padding: 10px; border: none; vertical-align: top;");
      td2.innerHTML = boxes[1].innerHTML;
      tr1.appendChild(td1);
      tr1.appendChild(td2);
      
      const tr2 = document.createElement("tr");
      const td3 = document.createElement("td");
      td3.setAttribute("style", "width: 50%; text-align: center; padding: 10px; border: none; vertical-align: top;");
      td3.innerHTML = boxes[2].innerHTML;
      const td4 = document.createElement("td");
      td4.setAttribute("style", "width: 50%; text-align: center; padding: 10px; border: none; vertical-align: top;");
      td4.innerHTML = boxes[3].innerHTML;
      tr2.appendChild(td3);
      tr2.appendChild(td4);
      
      table.appendChild(tr1);
      table.appendChild(tr2);
      
      printChartsContainer.parentNode.replaceChild(table, printChartsContainer);
    }
  }
  
  // Convert Bhukti grids to standard 3x3 tables for Word rendering compatibility
  const bhuktiGrids = clone.querySelectorAll(".bhukti-grid");
  bhuktiGrids.forEach(grid => {
    const items = Array.from(grid.querySelectorAll(".bhukti-item"));
    if (items.length === 0) return;
    
    const table = document.createElement("table");
    table.setAttribute("style", "width: 100%; border-collapse: collapse; border: 1px solid #dddddd; margin-top: 5px;");
    
    let row;
    items.forEach((item, index) => {
      if (index % 3 === 0) {
        row = document.createElement("tr");
        table.appendChild(row);
      }
      const td = document.createElement("td");
      td.setAttribute("style", "border: 1px solid #dddddd; padding: 6px; text-align: center; width: 33.33%; font-size: 11px; vertical-align: top; background-color: #ffffff;");
      td.innerHTML = item.innerHTML;
      row.appendChild(td);
    });
    
    grid.parentNode.replaceChild(table, grid);
  });
  
  // தமிழ் மட்டும்
  const bodyClass = "lang-select-ta";
  
  // Word document inline styling
  const wordCss = `
    body {
      font-family: 'Segoe UI', Arial, sans-serif;
      color: #333333;
      line-height: 1.5;
      background-color: #ffffff;
    }
    h1, h2, h3, h4 {
      color: #000000;
      font-family: Georgia, serif;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 1.5rem;
    }
    th {
      background-color: #f2f2f2;
      font-weight: bold;
      text-align: left;
      border-bottom: 2px solid #000000;
      padding: 8px;
      font-size: 12px;
    }
    td {
      border-bottom: 1px solid #dddddd;
      padding: 8px;
      font-size: 12px;
    }
    .detail-block {
      border: 1px solid #dddddd;
      border-radius: 8px;
      padding: 15px;
      margin-bottom: 20px;
      background: #fafafa;
    }
    .planets-table-wrapper {
      border: 1px solid #dddddd;
      border-radius: 8px;
      padding: 15px;
      margin-bottom: 20px;
      background: #fafafa;
    }
    .print-only-page {
      display: block !important;
      page-break-after: always;
      margin-bottom: 30px;
    }
    .print-page-break {
      page-break-after: always;
      height: 0;
      margin: 0;
      border: none;
    }
    .main-tab-panel {
      page-break-after: always;
      margin-bottom: 2rem;
      display: block !important;
    }
    .dasa-item {
      border: 1px solid #cccccc;
      margin-bottom: 15px;
      padding: 12px;
      background: #ffffff;
      page-break-inside: avoid;
    }
    .dasa-header {
      font-weight: bold;
      margin-bottom: 8px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #eeeeee;
      padding-bottom: 4px;
    }
    .dasa-badge {
      background: #f0f0f0;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 11px;
    }
    .dasa-dates {
      font-size: 11px;
    }
    .bhukti-name {
      font-weight: bold;
      font-size: 11px;
    }
    .bhukti-dates {
      color: #666666;
      font-size: 10px;
    }
    svg {
      width: 240px !important;
      height: 240px !important;
    }
    .chart-house-bg {
      stroke: #555555 !important;
      fill: #ffffff !important;
    }
    .chart-center-bg {
      fill: #f5f5f5 !important;
      stroke: #555555 !important;
    }
    .chart-center-text {
      fill: #000000 !important;
    }
    .chart-house-text {
      fill: #444444 !important;
    }
    .chart-occupant-lagna { fill: #b30000 !important; font-weight: bold !important; font-size: 8px !important; }
    .chart-occupant-mandi { fill: #d35400 !important; font-weight: bold !important; font-size: 8px !important; }
    .chart-occupant-node { fill: #5b2c90 !important; font-weight: bold !important; font-size: 8px !important; }
    .chart-occupant-moon { fill: #004d99 !important; font-weight: bold !important; font-size: 8px !important; }
    .chart-occupant-planet { fill: #1a252f !important; font-weight: bold !important; font-size: 8px !important; }
    .badge-planet { background: #f0f0f0 !important; color: #000 !important; border: 1px solid #ccc !important; padding: 2px 6px; border-radius: 4px; }
    .badge-lagna { background: #ffe6e6 !important; color: #b30000 !important; border: 1px solid #ffb3b3 !important; padding: 2px 6px; border-radius: 4px; }
    .badge-node { background: #f3e6ff !important; color: #5b2c90 !important; border: 1px solid #d9b3ff !important; padding: 2px 6px; border-radius: 4px; }
    .badge-mandi { background: #fff2e6 !important; color: #d35400 !important; border: 1px solid #ffd9b3 !important; padding: 2px 6px; border-radius: 4px; }
    .print-header {
      border-bottom: 2px solid #333333;
      margin-bottom: 20px;
      padding-bottom: 10px;
      text-align: center;
    }
    .print-header-branding h3 {
      font-size: 16px;
      margin: 0;
    }
    .print-header-line-view {
      font-size: 11px;
      margin-top: 5px;
    }
    .print-footer {
      border-top: 2px solid #333333;
      margin-top: 20px;
      padding-top: 10px;
      text-align: center;
      font-size: 10px;
    }
    .bindu-weak { color: #c00000; background: #ffe6e6; }
    .bindu-strong { color: #008000; background: #e6ffe6; }
    .bindu-total { background: #f0f0f0; font-weight: bold; }
    
    body.lang-select-ta .en-text,
    body.lang-select-ta .lang-en,
    body.lang-select-ta .lang-sep,
    body.lang-select-ta .info-value-en {
      display: none !important;
    }
    body.lang-select-ta .ta-only-print {
      display: inline !important;
    }
    body.lang-select-en .ta-only-print,
    body.lang-select-en .lang-ta,
    body.lang-select-en .lang-sep,
    body.lang-select-en .info-value-ta {
      display: none !important;
    }
    body.lang-select-en .en-text {
      display: inline !important;
    }
  `;
  
  // Format HTML with Microsoft Word schemas
  const documentHtml = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
    <head>
      <meta charset="utf-8">
      <title>ஜாதக அறிக்கை</title>
      <!--[if gte mso 9]>
      <xml>
        <w:WordDocument>
          <w:View>Print</w:View>
          <w:Zoom>90</w:Zoom>
          <w:DoNotOptimizeForBrowser/>
        </w:WordDocument>
      </xml>
      <![endif]-->
      <style>
        ${wordCss}
      </style>
    </head>
    <body class="${bodyClass}">
      ${clone.innerHTML}
    </body>
    </html>
  `;
  
  const blob = new Blob([documentHtml], { type: "application/msword;charset=utf-8" });
  const name = document.getElementById("user-name").value.trim() || "User";
  const filename = `Horoscope_Report_${name.replace(/\s+/g, "_")}.doc`;
  
  if (navigator.msSaveOrOpenBlob) {
    navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 0);
  }
}
window.exportToWord = exportToWord;

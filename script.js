// ============================================================
// CONFIG
// ============================================================
const API_KEY = "3484d9a498e33eee5b69509f7bdf171b";

const GITHUB_CONFIG = {
    username: 'efe-asp',
    repo: 'smart-weather-planner',
};

// Harita tile URL'leri — tema bazlı
const MAP_TILES = {
    // Voyager: her zaman okunabilir, net bir CartoDB haritası
    voyager: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    // Dark NO Labels: daha koyu ama yer adları yok (overlay için iyi)
    dark:    'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png',
};

// ============================================================
// ÇEVIRILER
// ============================================================
const T = {
    tr: {
        searchPlaceholder: "Şehir adı... (Örn: Konya)",
        searchBtn:    "Ara",
        feelsLike:    "Hissedilen",
        wind:         "Rüzgar",
        windDir:      "Yön",
        humidity:     "Nem",
        pressure:     "Basınç",
        visibility:   "Görüş",
        cloudiness:   "Bulutluluk",
        airQuality:   "Hava Kalitesi",
        uvIndex:      "UV İndeksi",
        sunrise:      "Gün Doğumu",
        sunset:       "Gün Batımı",
        mapTitle:     "Hava Durumu Haritası",
        mapLive:      "Canlı",
        aiSuggestion: "Akıllı Öneri",
        forecastTitle:"5 Günlük Tahmin",
        hourlyTitle:  "24 Saatlik Sıcaklık Trendi",
        layerPrecip:  "Yağış",
        layerClouds:  "Bulut",
        layerWind:    "Rüzgar",
        layerTemp:    "Sıcaklık",
        loading:      "Yükleniyor...",
        errorMsg:     "Şehir bulunamadı, lütfen tekrar deneyin.",
        gpsError:     "Konum alınamadı. Lütfen izin verdiğinizden emin olun.",
        gpsUnsupported: "Tarayıcınız konum servisini desteklemiyor.",
        apiConnected:  "OpenWeatherMap API Bağlı",
        apiError:      "API Bağlantı Hatası",
        ghBuildLabel: "Build Status",
        ghPassing:    "Passing",
        ghStarsLabel: "Stars",
        ghContribLabel:"Contributors",
        ghIssuesLabel: "Issues",
        ghRepoLabel:  "Repo",
        ghUpdatedLabel:"Updated",
        ghViewRepo:   "Repoyu Gör",
        recentTitle:  "Son Aramalar",
        recentEmpty:  "Henüz arama yok",
        favoritesTitle: "Favoriler",
        addFav:       "Favorilere Ekle",
        removeFav:    "Favorilerden Çıkar",
        aqiPanelTitle: "Hava Kalitesi Raporu",
        aqiTapHint:   "Detay için tıkla",
        hourlySliderTitle: "Saatlik Tahmin",
        tabTemp:      "🌡️ Sıcaklık",
        tabWind:      "💨 Rüzgar",
        tabHumidity:  "💧 Nem",
        days: ["Paz","Pzt","Sal","Çar","Per","Cum","Cmt"],
        aqi: ["—","Mükemmel","İyi","Orta","Kötü","Çok Kötü"],
        uvLbl: { low:"Düşük", mod:"Orta", high:"Yüksek", vhigh:"Çok Yüksek" },
        suggestions: {
            storm:   ()     => `Fırtına uyarısı! Mümkünse dışarı çıkma, açık alanlardan uzak dur. Güvende kal! ⚡🏠`,
            rain:    (city) => `${city}'de hava yağmurlu. Şemsiyeni mutlaka al! Kapalı mekanda kahve keyfi harika olur. 🌧️☕`,
            snow:    ()     => `Dışarıda kar var! Sıkı giyin. Evde sıcak çikolata da güzel bir seçenek. ❄️🍫`,
            mist:    ()     => `Görüş mesafesi düşük. Araç kullanırken dikkatli ol, farlarını yak. 🌫️`,
            cold:    ()     => `Hava biraz serin. Kalın giyin. Müze veya kapalı aktiviteler için ideal bir gün. 🧥🏛️`,
            perfect: (city) => `${city}'de hava tam kararında! Yürüyüş, bisiklet ya da parkta buluşma için mükemmel. 🚲🌳`,
            hot:     ()     => `Hava çok sıcak! Hafif giyin, güneş gözlüğü tak, bol su iç. Gölgede kal! ☀️🕶️`,
        }
    },
    en: {
        searchPlaceholder: "City name... (e.g. London)",
        searchBtn:    "Search",
        feelsLike:    "Feels like",
        wind:         "Wind",
        windDir:      "Direction",
        humidity:     "Humidity",
        pressure:     "Pressure",
        visibility:   "Visibility",
        cloudiness:   "Cloudiness",
        airQuality:   "Air Quality",
        uvIndex:      "UV Index",
        sunrise:      "Sunrise",
        sunset:       "Sunset",
        mapTitle:     "Weather Radar Map",
        mapLive:      "Live",
        aiSuggestion: "AI Suggestion",
        forecastTitle:"5-Day Forecast",
        hourlyTitle:  "24-Hour Temp Trend",
        layerPrecip:  "Rain",
        layerClouds:  "Clouds",
        layerWind:    "Wind",
        layerTemp:    "Temp",
        loading:      "Loading...",
        errorMsg:     "City not found. Please try again.",
        gpsError:     "Could not get your location. Please allow access.",
        gpsUnsupported: "Your browser doesn't support geolocation.",
        apiConnected: "OpenWeatherMap API Connected",
        apiError:     "API Connection Error",
        ghBuildLabel: "Build Status",
        ghPassing:    "Passing",
        ghStarsLabel: "Stars",
        ghContribLabel:"Contributors",
        ghIssuesLabel: "Issues",
        ghRepoLabel:  "Repo",
        ghUpdatedLabel:"Updated",
        ghViewRepo:   "View Repo",
        recentTitle:  "Recent Searches",
        recentEmpty:  "No searches yet",
        favoritesTitle: "Favorites",
        addFav:       "Add to Favorites",
        removeFav:    "Remove Favorite",
        aqiPanelTitle: "Air Quality Report",
        aqiTapHint:   "Tap for details",
        hourlySliderTitle: "Hourly Forecast",
        tabTemp:      "🌡️ Temperature",
        tabWind:      "💨 Wind",
        tabHumidity:  "💧 Humidity",
        days: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
        aqi: ["—","Excellent","Good","Moderate","Poor","Very Poor"],
        uvLbl: { low:"Low", mod:"Moderate", high:"High", vhigh:"Very High" },
        suggestions: {
            storm:   ()     => `Storm warning! Avoid going outside if possible. Stay away from open areas. Stay safe! ⚡🏠`,
            rain:    (city) => `It's raining in ${city}. Don't forget your umbrella! A cozy café or cinema sounds perfect. 🌧️☕`,
            snow:    ()     => `It's snowing! Bundle up and don't forget your scarf. Hot cocoa at home sounds great. ❄️🍫`,
            mist:    ()     => `Low visibility outside. Be careful while driving, turn on your headlights. 🌫️`,
            cold:    ()     => `It's chilly today. Wear warm clothes. Great day for a museum or indoor activities. 🧥🏛️`,
            perfect: (city) => `Perfect weather in ${city}! Great for a walk, cycling, or meeting friends in the park. 🚲🌳`,
            hot:     ()     => `It's hot! Wear light clothes, sunglasses, drink plenty of water. Stay in the shade! ☀️🕶️`,
        }
    }
};

// ============================================================
// GLOBAL DURUM
// ============================================================
let currentLang  = localStorage.getItem('wp_lang')  || 'tr';
let currentTheme = localStorage.getItem('wp_theme') || 'dark';
let lastWeatherData = null;
let weatherMap  = null;   // Leaflet instance
let baseTileLayer = null; // Tema değişiminde swap edebilmek için referans
let weatherTileLayer = null; // Aktif hava durumu radar katmanı
let currentMapLayer = 'precipitation'; // Aktif seçili katman
let autocompleteTimeout = null;
let activeSuggestionIndex = -1;
let currentSuggestions = [];
let currentChartTab = 'temp'; // Aktif grafik sekmesi
let lastForecastData = null;  // Son forecast verisi (sekme değiştirince lazım)
let particleSystem = null;    // Canvas particle effect instance
let lastAQIData = null;       // Son AQI verisi (modal için)

// ============================================================
// BAŞLANGIÇ
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    applyTheme(currentTheme);
    applyLanguage(currentLang);
    setupEventListeners();
    loadGitHubData();
    checkAPIStatus();
    renderRecentSearches();
    renderFavorites();
    initParticleSystem();
});

function setupEventListeners() {
    document.getElementById('search-btn').addEventListener('click', handleSearch);
    
    const cityInput = document.getElementById('city-input');
    cityInput.addEventListener('keypress', e => {
        if (e.key === 'Enter') handleSearch();
    });

    // Autocomplete input listener
    cityInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        clearTimeout(autocompleteTimeout);
        
        if (query.length < 2) {
            closeSuggestions();
            return;
        }
        
        autocompleteTimeout = setTimeout(() => {
            fetchSuggestions(query);
        }, 300);
    });

    // Autocomplete keydown navigation
    cityInput.addEventListener('keydown', handleAutocompleteKeydown);

    // Close autocomplete on click outside
    document.addEventListener('click', (e) => {
        const suggestionsBox = document.getElementById('autocomplete-suggestions');
        const inputWrapper = document.querySelector('.input-wrapper');
        if (suggestionsBox && inputWrapper && !inputWrapper.contains(e.target)) {
            closeSuggestions();
        }
    });

    // Map layer buttons click listener
    document.querySelectorAll('.layer-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const target = e.currentTarget;
            const layer = target.dataset.layer;
            
            document.querySelectorAll('.layer-btn').forEach(b => b.classList.remove('active'));
            target.classList.add('active');
            
            currentMapLayer = layer;
            updateWeatherLayer();
        });
    });
}

function handleSearch() {
    if (currentSuggestions.length > 0 && activeSuggestionIndex >= 0 && activeSuggestionIndex < currentSuggestions.length) {
        selectSuggestion(activeSuggestionIndex);
        return;
    }
    
    const city = document.getElementById('city-input').value.trim();
    if (city) {
        closeSuggestions();
        fetchWeather(city);
    }
}

// ============================================================
// DİL SİSTEMİ
// ============================================================
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('wp_lang', lang);
    applyLanguage(lang);
    updateAPIStatusText();
    renderRecentSearches();
    // Dil değişince mevcut şehri yeni dilde yeniden çek
    if (lastWeatherData) fetchWeather(lastWeatherData.name);
}

function applyLanguage(lang) {
    const t = T[lang];
    document.getElementById('btn-tr').classList.toggle('active', lang === 'tr');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    document.getElementById('city-input').placeholder = t.searchPlaceholder;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key] !== undefined) el.textContent = t[key];
    });
    document.documentElement.lang = lang;
}

// ============================================================
// TEMA SİSTEMİ
// Tema değişince harita tile katmanı da güncellenir.
// ============================================================
function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(currentTheme);
    localStorage.setItem('wp_theme', currentTheme);
    updateMapTiles(); // Harita tile'larını da değiştir
}

function applyTheme(theme) {
    document.body.classList.remove('theme-dark', 'theme-light');
    document.body.classList.add(`theme-${theme}`);
    document.getElementById('theme-icon').textContent = theme === 'dark' ? '🌙' : '☀️';
}

/**
 * Tema değiştiğinde mevcut Leaflet haritasının base tile katmanını günceller.
 * Karanlik temada: voyager (yeterince kontrast var, yağış görünür)
 * Aydınlık temada: voyager (zaten açık, mükemmel)
 * Her iki temada da Voyager kullanıyoruz çünkü OWM yağış overlay'i
 * açık zeminde çok daha iyi okunuyor. Karanlık temada yağış görünmüyordu.
 */
function updateMapTiles() {
    if (!weatherMap || !baseTileLayer) return;
    weatherMap.removeLayer(baseTileLayer);
    const tileUrl = MAP_TILES.voyager; // Her iki tema için de voyager
    baseTileLayer = L.tileLayer(tileUrl, {
        maxZoom: 18, subdomains: 'abcd',
    });
    baseTileLayer.addTo(weatherMap);
    baseTileLayer.bringToBack(); // OWM katmanının altına al
}

// ============================================================
// DİNAMİK ARKA PLAN
// ============================================================
const WEATHER_THEME_MAP = {
    'Clear':        (night) => night ? 'night' : 'sunny',
    'Clouds':       ()      => 'cloudy',
    'Rain':         ()      => 'rainy',
    'Drizzle':      ()      => 'rainy',
    'Thunderstorm': ()      => 'stormy',
    'Snow':         ()      => 'snowy',
    'Mist':         ()      => 'misty',
    'Fog':          ()      => 'misty',
    'Haze':         ()      => 'misty',
    'Smoke':        ()      => 'misty',
    'Dust':         ()      => 'cloudy',
    'Sand':         ()      => 'cloudy',
    'Ash':          ()      => 'cloudy',
    'Squall':       ()      => 'stormy',
    'Tornado':      ()      => 'stormy',
};

function setWeatherTheme(condition, isNight) {
    const fn    = WEATHER_THEME_MAP[condition];
    const theme = fn ? fn(isNight) : 'default';
    const body  = document.body;
    body.style.opacity = '0.80';
    setTimeout(() => {
        [...body.classList].forEach(c => { if (c.startsWith('weather-')) body.classList.remove(c); });
        body.classList.add(`weather-${theme}`);
        body.style.transition = 'opacity 0.55s ease';
        body.style.opacity = '1';
    }, 180);
}

// ============================================================
// GPS
// ============================================================
function getLocation() {
    const t   = T[currentLang];
    const btn = document.getElementById('gps-btn');
    if (!navigator.geolocation) { alert(t.gpsUnsupported); return; }
    btn.classList.add('gps-loading');
    btn.disabled = true;
    navigator.geolocation.getCurrentPosition(
        async ({ coords }) => {
            await fetchWeatherByCoords(coords.latitude, coords.longitude);
            btn.classList.remove('gps-loading'); btn.disabled = false;
        },
        () => {
            alert(T[currentLang].gpsError);
            btn.classList.remove('gps-loading'); btn.disabled = false;
        },
        { timeout: 10000 }
    );
}


// ============================================================
// TOAST BİLDİRİMİ GÖSTERME
// ============================================================
function showToast(message, type = 'info') {
    const oldToast = document.querySelector('.weather-toast');
    if (oldToast) oldToast.remove();

    const toast = document.createElement('div');
    toast.className = `weather-toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('toast-show');
    }, 50);

    setTimeout(() => {
        toast.classList.remove('toast-show');
        setTimeout(() => toast.remove(), 400);
    }, 4000);
}

// ============================================================
// SON ARAMALAR (LocalStorage)
// Maksimum 3 şehir saklanır. Her yeni arama başa eklenir,
// tekrarlar otomatik olarak kaldırılır.
// ============================================================
const MAX_RECENT = 3;

function addRecentSearch(cityName) {
    let recent = getRecentSearches();
    // Küçük/büyük harf farkı olmadan mevcut girişi kaldır
    recent = recent.filter(c => c.toLowerCase() !== cityName.toLowerCase());
    recent.unshift(cityName);
    recent = recent.slice(0, MAX_RECENT);
    localStorage.setItem('wp_recent', JSON.stringify(recent));
    renderRecentSearches();
}

function getRecentSearches() {
    try { return JSON.parse(localStorage.getItem('wp_recent')) || []; }
    catch { return []; }
}

function renderRecentSearches() {
    const section = document.getElementById('recent-section');
    const list    = document.getElementById('recent-list');
    const title   = section?.querySelector('.recent-title');
    if (!section || !list) return;

    // Başlık metnini güncelle
    if (title) title.textContent = T[currentLang].recentTitle;

    const recent = getRecentSearches();
    if (recent.length === 0) {
        list.innerHTML = `<p class="recent-empty">${T[currentLang].recentEmpty}</p>`;
        return;
    }
    list.innerHTML = recent.map(city =>
        `<button class="recent-item" onclick="fetchWeatherFromRecent('${city.replace(/'/g, "\\'")}')">
            ${city}
         </button>`
    ).join('');
}

function fetchWeatherFromRecent(city) {
    document.getElementById('city-input').value = city;
    fetchWeather(city);
}

// ============================================================
// API DURUM KONTROLÜ
// Sayfa yüklendiğinde London için hızlı bir test isteği atar.
// Badge yeşil veya kırmızı olarak güncellenir.
// ============================================================
async function checkAPIStatus() {
    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}&units=metric`,
            { signal: AbortSignal.timeout(6000) }
        );
        updateAPIStatus(res.ok);
    } catch {
        updateAPIStatus(false);
    }
}

function updateAPIStatus(ok) {
    const badge = document.getElementById('api-badge');
    const text  = document.getElementById('api-text');
    if (!badge || !text) return;

    if (ok) {
        badge.classList.remove('error');
        text.textContent = T[currentLang].apiConnected;
    } else {
        badge.classList.add('error');
        text.textContent = T[currentLang].apiError;
    }
}

function updateAPIStatusText() {
    const badge = document.getElementById('api-badge');
    const text  = document.getElementById('api-text');
    if (!badge || !text) return;
    const isError = badge.classList.contains('error');
    text.textContent = isError ? T[currentLang].apiError : T[currentLang].apiConnected;
}

// ============================================================
// HAVA DURUMU API — Şehir adıyla
// ============================================================
async function fetchWeather(city) {
    showLoading(true);
    try {
        const lang = currentLang;
        
        // Ülke kontrolü
        const countryKey = city.trim().toLowerCase();
        if (COUNTRIES_CITIES[countryKey]) {
            const countryObj = COUNTRIES_CITIES[countryKey];
            const capitalCity = countryObj.list[0];
            
            const [wRes, fRes] = await Promise.all([
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(capitalCity)}&appid=${API_KEY}&units=metric&lang=${lang}`),
                fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(capitalCity)}&appid=${API_KEY}&units=metric&lang=${lang}`)
            ]);
            
            if (!wRes.ok) throw new Error('Capital not found');
            const wData = await wRes.json();
            const fData = fRes.ok ? await fRes.json() : null;
            
            // Ülke verisini set et
            wData.name = countryObj.name;
            wData.isCountry = true;
            wData.countryInfo = countryObj;
            lastWeatherData = wData;
            
            const { lat, lon } = wData.coord;
            const [aqiData, photoUrl] = await Promise.all([
                fetchAirQuality(lat, lon),
                fetchCityPhoto(city) // Ülke adı için fotoğraf ara
            ]);
            
            displayWeather(wData, aqiData, photoUrl);
            lastAQIData = aqiData;
            if (fData) {
                lastForecastData = fData;
                displayForecast(fData);
                renderHourlySlider(fData);
                renderHourlyChart(fData, currentChartTab);
            }
            addRecentSearch(countryObj.name);
            return;
        }

        const [wRes, fRes] = await Promise.all([
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=${lang}`),
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=${lang}`)
        ]);
        if (!wRes.ok) throw new Error('Not found');
        const wData = await wRes.json();
        const fData = fRes.ok ? await fRes.json() : null;
        lastWeatherData = wData;

        const { lat, lon } = wData.coord;
        const [aqiData, photoUrl] = await Promise.all([
            fetchAirQuality(lat, lon),
            fetchCityPhoto(city)
        ]);

        displayWeather(wData, aqiData, photoUrl);
        lastAQIData = aqiData;
        if (fData) {
            lastForecastData = fData;
            displayForecast(fData);
            renderHourlySlider(fData);
            renderHourlyChart(fData, currentChartTab);
        }
        addRecentSearch(wData.name); // Başarılı aramayı kaydet

    } catch { showError(); }
    finally { showLoading(false); }
}

// ============================================================
// HAVA DURUMU API — Koordinatla (GPS veya Autocomplete)
// ============================================================
async function fetchWeatherByCoords(lat, lon) {
    showLoading(true);
    try {
        const lang = currentLang;
        const [wRes, fRes] = await Promise.all([
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=${lang}`),
            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=${lang}`)
        ]);
        if (!wRes.ok) throw new Error('Not found');
        const wData = await wRes.json();
        const fData = fRes.ok ? await fRes.json() : null;
        lastWeatherData = wData;

        const [aqiData, photoUrl] = await Promise.all([
            fetchAirQuality(lat, lon),
            fetchCityPhoto(wData.name)
        ]);

        displayWeather(wData, aqiData, photoUrl);
        lastAQIData = aqiData;
        if (fData) {
            lastForecastData = fData;
            displayForecast(fData);
            renderHourlySlider(fData);
            renderHourlyChart(fData, currentChartTab);
        }
        addRecentSearch(wData.name);

    } catch { showError(); }
    finally { showLoading(false); }
}

// Hava kalitesi
async function fetchAirQuality(lat, lon) {
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
        return res.ok ? await res.json() : null;
    } catch { return null; }
}

// ============================================================
// ŞEHİR FOTOĞRAFI — Wikipedia API (ücretsiz, key yok)
// ============================================================
async function fetchCityPhoto(cityName) {
    const tryFetch = async (title) => {
        try {
            const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=1400&origin=*`;
            const res  = await fetch(url);
            const data = await res.json();
            const page = Object.values(data.query.pages)[0];
            return page?.thumbnail?.source || null;
        } catch { return null; }
    };
    return (await tryFetch(cityName)) || (await tryFetch(cityName + ' city')) || null;
}

// ============================================================
// GITHUB SIDEBAR VERİLERİ
// ============================================================
async function loadGitHubData() {
    const { username, repo } = GITHUB_CONFIG;
    document.getElementById('gh-link').href = 'https://github.com/efe-asp/smart-weather-planner';

    try {
        const [rRes, cRes] = await Promise.all([
            fetch(`https://api.github.com/repos/${username}/${repo}`),
            fetch(`https://api.github.com/repos/${username}/${repo}/contributors?per_page=100`)
        ]);
        if (rRes.ok) {
            const r = await rRes.json();
            document.getElementById('gh-stars-count').textContent  = formatGhNum(r.stargazers_count);
            document.getElementById('gh-issues-count').textContent = r.open_issues_count ?? '0';
            document.getElementById('gh-repo-name').textContent    = r.name || repo;
            document.getElementById('gh-updated').textContent      = timeAgo(r.pushed_at, currentLang);
        } else {
            document.getElementById('gh-repo-name').textContent    = repo;
            document.getElementById('gh-stars-count').textContent  = '0';
            document.getElementById('gh-issues-count').textContent = '0';
            document.getElementById('gh-updated').textContent      = '—';
        }
        if (cRes.ok) {
            const contribs = await cRes.json();
            document.getElementById('gh-contrib-count').textContent =
                Array.isArray(contribs) ? String(contribs.length) : '1';
        } else {
            document.getElementById('gh-contrib-count').textContent = '1';
        }
    } catch {
        document.getElementById('gh-repo-name').textContent = repo;
    }
}

function formatGhNum(n) {
    if (n === undefined || n === null) return '—';
    return n >= 1000 ? (n / 1000).toFixed(1) + 'k' : String(n);
}

function timeAgo(dateStr, lang) {
    const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
    if (lang === 'tr') {
        if (diff < 60)      return 'Az önce';
        if (diff < 3600)    return `${Math.floor(diff / 60)}dk önce`;
        if (diff < 86400)   return `${Math.floor(diff / 3600)}sa önce`;
        if (diff < 2592000) return `${Math.floor(diff / 86400)}g önce`;
        return `${Math.floor(diff / 2592000)}ay önce`;
    } else {
        if (diff < 60)      return 'Just now';
        if (diff < 3600)    return `${Math.floor(diff / 60)}m ago`;
        if (diff < 86400)   return `${Math.floor(diff / 3600)}h ago`;
        if (diff < 2592000) return `${Math.floor(diff / 86400)}d ago`;
        return `${Math.floor(diff / 2592000)}mo ago`;
    }
}

// ============================================================
// HAVA DURUMUNU EKRANDA GÖSTER
// ============================================================
function displayWeather(data, aqiData, photoUrl) {
    document.getElementById('error-msg').classList.add('hidden');
    document.getElementById('weather-result').classList.remove('hidden');

    const { name, sys, main, weather, wind, visibility, clouds, timezone, dt, coord } = data;
    const condition = weather[0].main;
    const iconCode  = weather[0].icon;
    const isNight   = iconCode.endsWith('n');

    // 1. Arka plan teması
    setWeatherTheme(condition, isNight);

    // 2. Şehir fotoğrafı
    setCityPhoto(photoUrl, condition, isNight);

    // 3. Temel bilgiler
    document.getElementById('city-name').textContent   = `${name}, ${sys.country}`;
    document.getElementById('local-time').textContent  = `🕐 ${fmtTime(dt, timezone)}`;
    document.getElementById('description').textContent = weather[0].description;
    document.getElementById('weather-icon').src        = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

    // 4. Sıcaklık (animasyonlu)
    animateNum('temperature', Math.round(main.temp));
    document.getElementById('feels-like').textContent = Math.round(main.feels_like);

    // 5. Detay kartları
    document.getElementById('wind').textContent       = Math.round(wind.speed * 3.6);
    document.getElementById('wind-dir').textContent   = windDir(wind.deg, currentLang);
    document.getElementById('humidity').textContent   = main.humidity;
    document.getElementById('pressure').textContent   = main.pressure;
    document.getElementById('visibility').textContent = visibility ? (visibility / 1000).toFixed(1) : '--';
    document.getElementById('cloudiness').textContent = clouds?.all ?? '--';

    // 6. AQI
    const aqiVal = aqiData?.list?.[0]?.main?.aqi;
    document.getElementById('aqi-value').textContent = aqiVal ? `${T[currentLang].aqi[aqiVal]} (${aqiVal})` : '--';

    // 7. UV tahmini
    document.getElementById('uv-value').textContent = uvEstimate(condition, isNight, Math.round(main.temp), currentLang);

    // 8. Gün doğumu / batımı
    document.getElementById('sunrise').textContent = fmtTime(sys.sunrise, timezone);
    document.getElementById('sunset').textContent  = fmtTime(sys.sunset,  timezone);
    updateSunBar(sys.sunrise, sys.sunset, dt);

    // 9. AI önerisi
    generateSuggestion(Math.round(main.temp), condition, name);

    // 10. Leaflet haritasını başlat
    // weather-result görünür olduktan sonra 200ms bekle → container boyut hesapla
    setTimeout(() => {
        initMap(coord.lat, coord.lon, data.isCountry ? data.countryInfo : null);
    }, 200);

    // 11. Favori butonu durumunu güncelle
    updateFavButton(name);

    // 12. Particle system'i hava durumuna göre güncelle
    if (particleSystem) particleSystem.setWeather(condition, isNight);
}

// ============================================================
// ŞEHİR FOTOĞRAFI
// ============================================================
function setCityPhoto(photoUrl, condition, isNight) {
    const bg = document.getElementById('city-photo-bg');
    if (photoUrl) {
        const img = new Image();
        img.onload = () => {
            bg.style.backgroundImage = `url('${photoUrl}')`;
            bg.style.opacity = '1';
        };
        img.onerror = () => applyGradientFallback(bg, condition, isNight);
        bg.style.opacity = '0';
        img.src = photoUrl;
    } else {
        applyGradientFallback(bg, condition, isNight);
    }
}

function applyGradientFallback(bg, condition, isNight) {
    const g = {
        'Clear':        isNight
            ? 'linear-gradient(135deg,#010105,#0a0a2e,#181855)'
            : 'linear-gradient(135deg,#083870,#1462c0,#fb8800)',
        'Clouds':       'linear-gradient(135deg,#0e1620,#1c2e40,#263c52)',
        'Rain':         'linear-gradient(135deg,#020a14,#051828,#0c2840)',
        'Drizzle':      'linear-gradient(135deg,#020a14,#051828,#0c2840)',
        'Thunderstorm': 'linear-gradient(135deg,#050506,#110818,#1a0a28)',
        'Snow':         'linear-gradient(135deg,#102040,#1c3668,#2a4e92)',
        'Mist':         'linear-gradient(135deg,#181c22,#22282e,#2e3640)',
    };
    bg.style.backgroundImage = g[condition] || 'linear-gradient(135deg,#140730,#2a1460,#4e36c0)';
    bg.style.opacity = '1';
}

// ============================================================
// LEAFLET HARİTA
// ─────────────────────────────────────────────────────────────
// Zoom 10 → ilçe sınırları ve yerleşim yerleri görünür.
// Voyager tile: OWM yağış/bulut overlay mavi/cyan renk gamında
// çalışır; açık zemin üzerinde net görünür (dark_all'da kaybolur).
// loadDistrictWeather() → OWM /find ile yakın şehir/ilçe
// hava durumlarını çekip özel kabarcık markerları koyar.
// ============================================================
function initMap(lat, lon, countryObj = null) {
    if (typeof L === 'undefined') return;

    // Önceki haritayı temizle
    if (weatherMap) { weatherMap.remove(); weatherMap = null; baseTileLayer = null; weatherTileLayer = null; }

    const mapCenter = countryObj ? countryObj.coords : [lat, lon];
    const mapZoom = countryObj ? countryObj.zoom : 10;

    // Zoom 10: ilçe isimlerini görecek kadar yakın
    weatherMap = L.map('weather-map', {
        zoomControl:        true,
        attributionControl: false,
        dragging:           true,
        touchZoom:          true,
        doubleClickZoom:    true,
        scrollWheelZoom:    true,
        boxZoom:            false,
        keyboard:           true,
    }).setView(mapCenter, mapZoom);

    // Voyager base map
    baseTileLayer = L.tileLayer(MAP_TILES.voyager, {
        maxZoom: 18, subdomains: 'abcd',
    });
    baseTileLayer.addTo(weatherMap);

    // OWM hava durumu katmanını seçime göre ekle
    updateWeatherLayer();

    if (countryObj) {
        // Boyut yeniden hesapla ve ülke şehirlerini yükle
        setTimeout(() => {
            if (weatherMap) weatherMap.invalidateSize();
            loadCountryWeather(countryObj);
        }, 150);
    } else {
        // Merkez şehir işaretçisi (büyük mor nokta)
        const cityLabel = document.getElementById('city-name').textContent;
        L.circleMarker([lat, lon], {
            radius: 10, color: '#fff', fillColor: '#6c5ce7',
            fillOpacity: 0.95, weight: 2.5,
        })
        .bindPopup(`<div class="map-popup-city"><strong>${cityLabel}</strong><br><small>📍 Merkez</small></div>`)
        .addTo(weatherMap);

        // Boyut yeniden hesapla ve ilçeleri yükle
        setTimeout(() => {
            if (weatherMap) weatherMap.invalidateSize();
            loadDistrictWeather(lat, lon);
        }, 150);
    }
}

// ============================================================
// İLÇE HAVA DURUMU MARKERLAR
// OWM /find endpoint → koordinat çevresindeki yakın şehir/ilçe
// listesi + hava verileri. Her biri için özel kabarcık marker.
// cnt=18 → yaklaşık 1 il merkezi + tüm ilçeleri kapsar.
// Tıklanınca popup açılır: ikon, sıcaklık, açıklama, nem, rüzgar.
// ============================================================
async function loadDistrictWeather(lat, lon) {
    if (!weatherMap) return;
    try {
        const lang = currentLang;
        const res  = await fetch(
            `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=18&appid=${API_KEY}&units=metric&lang=${lang}`
        );
        if (!res.ok) return;
        const data = await res.json();
        if (!data.list || data.list.length === 0) return;

        data.list.forEach(city => {
            const { coord, name, weather, main, wind } = city;
            const icon   = weather[0].icon;
            const temp   = Math.round(main.temp);
            const desc   = weather[0].description;
            const humid  = main.humidity;
            const wspeed = Math.round((wind?.speed || 0) * 3.6);

            // Özel hava durumu kabarcığı
            const markerHtml = `
                <div class="wx-marker">
                    <div class="wx-bubble">
                        <img src="https://openweathermap.org/img/wn/${icon}.png"
                             width="30" height="30" alt="${desc}">
                        <span class="wx-temp">${temp}°</span>
                    </div>
                    <div class="wx-name">${name}</div>
                    <div class="wx-pin"></div>
                </div>`;

            // Popup içeriği (tıklandığında açılır)
            const popupHtml = `
                <div class="map-popup">
                    <div class="map-popup-header">${name}</div>
                    <img src="https://openweathermap.org/img/wn/${icon}@2x.png"
                         width="52" height="52" alt="${desc}">
                    <div class="map-popup-temp">${temp}°C</div>
                    <div class="map-popup-desc">${desc}</div>
                    <div class="map-popup-details">
                        <span>💧 ${humid}%</span>
                        <span>💨 ${wspeed} km/s</span>
                    </div>
                </div>`;

            L.marker([coord.lat, coord.lon], {
                icon: L.divIcon({
                    html:       markerHtml,
                    className:  '',          // Leaflet'in varsayılan stilini sıfırla
                    iconSize:   [90, 72],
                    iconAnchor: [45, 72],
                    popupAnchor:[0, -74],
                }),
            })
            .bindPopup(popupHtml, { maxWidth: 180 })
            .addTo(weatherMap);
        });

    } catch (e) {
        console.warn('İlçe hava durumu yüklenemedi:', e);
    }
}

// ============================================================
// GÜNEŞ PROGRESS BARI
// ============================================================
function updateSunBar(sunrise, sunset, currentTime) {
    const total   = sunset - sunrise;
    const elapsed = Math.max(0, Math.min(currentTime - sunrise, total));
    const pct     = total > 0 ? (elapsed / total) * 100 : 0;
    const clamped = Math.min(pct, 100);
    const fill    = document.getElementById('sun-progress');
    const dot     = document.getElementById('sun-indicator');
    if (fill) fill.style.width = `${clamped}%`;
    if (dot)  dot.style.left  = `${clamped}%`;
}

// ============================================================
// 5 GÜNLÜK TAHMİN
// OWM 3 saatte bir veri verir. Her gün için 12:00'ye en yakın kaydı seç.
// ============================================================
function displayForecast(data) {
    const t   = T[currentLang];
    const box = document.getElementById('forecast-cards');
    box.innerHTML = '';

    const tzOff = data.city.timezone;
    const daily = new Map();

    data.list.forEach(item => {
        const localMs = (item.dt + tzOff) * 1000;
        const d   = new Date(localMs);
        const key = `${d.getUTCFullYear()}-${d.getUTCMonth()}-${d.getUTCDate()}`;
        const h   = d.getUTCHours();
        if (!daily.has(key)) {
            daily.set(key, { item, h });
        } else if (Math.abs(h - 12) < Math.abs(daily.get(key).h - 12)) {
            daily.set(key, { item, h });
        }
    });

    [...daily.values()].slice(1, 6).forEach(({ item }) => {
        const d = new Date((item.dt + tzOff) * 1000);
        const card = document.createElement('div');
        card.className = 'forecast-card';
        card.innerHTML = `
            <div class="forecast-day">${t.days[d.getUTCDay()]}</div>
            <img class="forecast-icon" src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png" alt="">
            <div class="forecast-temp">${Math.round(item.main.temp)}°C</div>
            <div class="forecast-desc">${item.weather[0].description}</div>`;
        box.appendChild(card);
    });
}

// ============================================================
// AI ÖNERİSİ
// ============================================================
function generateSuggestion(temp, condition, city) {
    const s = T[currentLang].suggestions;
    let text = '';
    if      (condition === 'Thunderstorm')                          text = s.storm();
    else if (condition === 'Rain' || condition === 'Drizzle')       text = s.rain(city);
    else if (condition === 'Snow')                                  text = s.snow();
    else if (['Mist','Fog','Haze','Smoke'].includes(condition))     text = s.mist();
    else if (temp < 10)                                             text = s.cold();
    else if (temp <= 25)                                            text = s.perfect(city);
    else                                                            text = s.hot();
    document.getElementById('suggestion-text').textContent = text;
}

// ============================================================
// YARDIMCI FONKSİYONLAR
// ============================================================

/** Unix timestamp + timezone offset → "HH:MM" (şehrin yerel saati) */
function fmtTime(ts, tzOff) {
    const d = new Date((ts + tzOff) * 1000);
    return `${String(d.getUTCHours()).padStart(2,'0')}:${String(d.getUTCMinutes()).padStart(2,'0')}`;
}

/** Rüzgar açısını (0–360°) 16 yön noktasına çevir */
function windDir(deg, lang) {
    if (deg == null) return '--';
    const tr = ['K','KKD','KD','DKD','D','DGD','GD','GGD','G','GGB','GB','BGB','B','KBB','KB','KKB'];
    const en = ['N','NNE','NE','ENE','E','ESE','SE','SSE','S','SSW','SW','WSW','W','WNW','NW','NNW'];
    return (lang === 'tr' ? tr : en)[Math.round(deg / 22.5) % 16];
}

/** UV indeksi — OWM One Call ücretli olduğundan koşula göre tahmin */
function uvEstimate(condition, isNight, temp, lang) {
    const l = T[lang].uvLbl;
    if (isNight) return `0 (${l.low})`;
    if (['Rain','Thunderstorm','Snow','Drizzle'].includes(condition)) return `1 (${l.low})`;
    if (['Clouds','Mist','Fog','Haze'].includes(condition))           return `2 (${l.low})`;
    if (condition === 'Clear') {
        if (temp > 32) return `9 (${l.vhigh})`;
        if (temp > 24) return `6 (${l.high})`;
        return `4 (${l.mod})`;
    }
    return `3 (${l.mod})`;
}

/** Sıcaklık rakamı değişince küçük fade-up animasyonu */
function animateNum(id, val) {
    const el = document.getElementById(id);
    el.style.opacity   = '0';
    el.style.transform = 'translateY(8px)';
    el.textContent = val;
    requestAnimationFrame(() => {
        el.style.transition = 'opacity 0.42s ease, transform 0.42s ease';
        el.style.opacity    = '1';
        el.style.transform  = 'translateY(0)';
    });
}

function showLoading(show) {
    document.getElementById('loading').classList.toggle('hidden', !show);
    if (show) {
        document.getElementById('weather-result').classList.add('hidden');
        document.getElementById('error-msg').classList.add('hidden');
    }
}

function showError() {
    document.getElementById('weather-result').classList.add('hidden');
    const el = document.getElementById('error-msg');
    el.textContent = T[currentLang].errorMsg;
    el.classList.remove('hidden');
}

// ============================================================
// ÜLKE VE ŞEHİRLER VERİ SÖZLÜĞÜ
// ============================================================
const COUNTRIES_CITIES = {
    'turkey': { name: 'Türkiye', zoom: 6, coords: [38.9637, 35.2433], list: ['Ankara', 'Istanbul', 'Izmir', 'Bursa', 'Antalya', 'Trabzon', 'Konya', 'Adana', 'Gaziantep', 'Erzurum', 'Diyarbakir'] },
    'türkiye': { name: 'Türkiye', zoom: 6, coords: [38.9637, 35.2433], list: ['Ankara', 'Istanbul', 'Izmir', 'Bursa', 'Antalya', 'Trabzon', 'Konya', 'Adana', 'Gaziantep', 'Erzurum', 'Diyarbakir'] },
    'germany': { name: 'Germany', zoom: 6, coords: [51.1657, 10.4515], list: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg', 'Cologne', 'Stuttgart', 'Dusseldorf'] },
    'almanya': { name: 'Germany', zoom: 6, coords: [51.1657, 10.4515], list: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg', 'Cologne', 'Stuttgart', 'Dusseldorf'] },
    'france': { name: 'France', zoom: 6, coords: [46.2276, 2.2137], list: ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg'] },
    'fransa': { name: 'France', zoom: 6, coords: [46.2276, 2.2137], list: ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg'] },
    'united kingdom': { name: 'United Kingdom', zoom: 6, coords: [55.3781, -3.4360], list: ['London', 'Birmingham', 'Manchester', 'Glasgow', 'Liverpool', 'Edinburgh', 'Leeds'] },
    'ingiltere': { name: 'United Kingdom', zoom: 6, coords: [55.3781, -3.4360], list: ['London', 'Birmingham', 'Manchester', 'Glasgow', 'Liverpool', 'Edinburgh', 'Leeds'] },
    'italy': { name: 'Italy', zoom: 6, coords: [41.8719, 12.5674], list: ['Rome', 'Milan', 'Naples', 'Turin', 'Palermo', 'Genoa', 'Florence', 'Venice'] },
    'italya': { name: 'Italy', zoom: 6, coords: [41.8719, 12.5674], list: ['Rome', 'Milan', 'Naples', 'Turin', 'Palermo', 'Genoa', 'Florence', 'Venice'] },
    'spain': { name: 'Spain', zoom: 6, coords: [40.4637, -3.7492], list: ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Zaragoza', 'Malaga', 'Bilbao'] },
    'ispanya': { name: 'Spain', zoom: 6, coords: [40.4637, -3.7492], list: ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Zaragoza', 'Malaga', 'Bilbao'] },
    'usa': { name: 'United States', zoom: 4, coords: [37.0902, -95.7129], list: ['Washington', 'New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami', 'San Francisco', 'Seattle', 'Boston', 'Denver'] },
    'abd': { name: 'United States', zoom: 4, coords: [37.0902, -95.7129], list: ['Washington', 'New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami', 'San Francisco', 'Seattle', 'Boston', 'Denver'] },
    'azerbaijan': { name: 'Azerbaycan', zoom: 7, coords: [40.1431, 47.5769], list: ['Baku', 'Ganja', 'Sumqayit', 'Lankaran', 'Mingachevir', 'Shaki', 'Nakhchivan'] },
    'azerbaycan': { name: 'Azerbaycan', zoom: 7, coords: [40.1431, 47.5769], list: ['Baku', 'Ganja', 'Sumqayit', 'Lankaran', 'Mingachevir', 'Shaki', 'Nakhchivan'] },
    'russia': { name: 'Russia', zoom: 3, coords: [61.5240, 105.3188], list: ['Moscow', 'Saint Petersburg', 'Novosibirsk', 'Yekaterinburg', 'Kazan', 'Nizhny Novgorod', 'Vladivostok'] },
    'rusya': { name: 'Russia', zoom: 3, coords: [61.5240, 105.3188], list: ['Moscow', 'Saint Petersburg', 'Novosibirsk', 'Yekaterinburg', 'Kazan', 'Nizhny Novgorod', 'Vladivostok'] }
};

// ============================================================
// HARİTA KATMAN GÜNCELLEME VE YÜKLEME
// ============================================================
function updateWeatherLayer() {
    if (!weatherMap) return;
    if (weatherTileLayer) {
        weatherMap.removeLayer(weatherTileLayer);
    }
    const layerName = currentMapLayer === 'temp' ? 'temp_new' : (currentMapLayer === 'wind' ? 'wind_new' : (currentMapLayer === 'clouds' ? 'clouds_new' : 'precipitation_new'));
    // Renkleri daha belirgin yapmak için opaklıkları arttırdık
    const opacity = currentMapLayer === 'clouds' ? 0.65 : (currentMapLayer === 'temp' ? 0.75 : 0.85);
    
    weatherTileLayer = L.tileLayer(
        `https://tile.openweathermap.org/map/${layerName}/{z}/{x}/{y}.png?appid=${API_KEY}`,
        { maxZoom: 18, opacity: opacity }
    );
    weatherTileLayer.addTo(weatherMap);
}

// ============================================================
// HARİTA TAM EKRAN KONTROLÜ
// ============================================================
function toggleMapFullscreen() {
    const container = document.getElementById('weather-map-container');
    const btn = document.getElementById('map-fullscreen-btn');
    if (!container || !btn) return;
    
    if (!document.fullscreenElement) {
        container.requestFullscreen().then(() => {
            btn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 14h6v6M20 10h-6V4M14 10l7-7M10 14l-7 7"/>
                </svg>
            `;
        }).catch(err => {
            console.error("Fullscreen hatası:", err);
        });
    } else {
        document.exitFullscreen().then(() => {
            btn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                </svg>
            `;
        });
    }
}

// Tam ekran geçişlerinde harita yerleşim boyutlarını güncelle
document.addEventListener('fullscreenchange', () => {
    if (weatherMap) {
        setTimeout(() => {
            weatherMap.invalidateSize();
        }, 150);
    }
    if (!document.fullscreenElement) {
        const btn = document.getElementById('map-fullscreen-btn');
        if (btn) {
            btn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                </svg>
            `;
        }
    }
});

async function loadCountryWeather(countryObj) {
    if (!weatherMap) return;
    const lang = currentLang;
    
    // Ülke şehirlerinin hava durumunu paralel çeken API istekleri
    const promises = countryObj.list.map(async (cityName) => {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${API_KEY}&units=metric&lang=${lang}`);
            if (res.ok) return await res.json();
        } catch (e) {
            console.error(`Error fetching weather for ${cityName}:`, e);
        }
        return null;
    });

    const results = await Promise.all(promises);

    results.forEach(cityData => {
        if (!cityData) return;
        const { coord, name, weather, main, wind } = cityData;
        const icon   = weather[0].icon;
        const temp   = Math.round(main.temp);
        const desc   = weather[0].description;
        const humid  = main.humidity;
        const wspeed = Math.round((wind?.speed || 0) * 3.6);

        const markerHtml = `
            <div class="wx-marker">
                <div class="wx-bubble">
                    <img src="https://openweathermap.org/img/wn/${icon}.png"
                         width="30" height="30" alt="${desc}">
                    <span class="wx-temp">${temp}°</span>
                </div>
                <div class="wx-name">${name}</div>
                <div class="wx-pin"></div>
            </div>`;

        const popupHtml = `
            <div class="map-popup">
                <div class="map-popup-header">${name}</div>
                <img src="https://openweathermap.org/img/wn/${icon}@2x.png"
                     width="52" height="52" alt="${desc}">
                <div class="map-popup-temp">${temp}°C</div>
                <div class="map-popup-desc">${desc}</div>
                <div class="map-popup-details">
                    <span>💧 ${humid}%</span>
                    <span>💨 ${wspeed} km/s</span>
                </div>
            </div>`;

        L.marker([coord.lat, coord.lon], {
            icon: L.divIcon({
                html:       markerHtml,
                className:  '',
                iconSize:   [90, 72],
                iconAnchor: [45, 72],
                popupAnchor:[0, -74],
            }),
        })
        .bindPopup(popupHtml, { maxWidth: 180 })
        .addTo(weatherMap);
    });
}

// ============================================================
// GRAFİK SEKMESİ DEĞİŞTİRME
// ============================================================
function switchChartTab(tab) {
    currentChartTab = tab;
    document.querySelectorAll('.chart-tab').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tab);
    });
    if (lastForecastData) {
        renderHourlyChart(lastForecastData, tab);
    }
}

// ============================================================
// SAATLİK TAHMİN GRAFİĞİ (SVG) — Çoklu Sekme
// ============================================================
function renderHourlyChart(fData, tab = 'temp') {
    const svg = document.getElementById('hourly-chart');
    const tooltip = document.getElementById('hourly-chart-tooltip');
    if (!svg) return;
    
    svg.innerHTML = '';
    
    if (!fData || !fData.list || fData.list.length === 0) {
        document.querySelector('.hourly-section').classList.add('hidden');
        return;
    }
    document.querySelector('.hourly-section').classList.remove('hidden');

    const points = fData.list.slice(0, 8);

    // Sekmeye göre değer çekme ve renk seçimi
    let values, unit, gradColors, labelFn;
    if (tab === 'temp') {
        values = points.map(p => Math.round(p.main.temp));
        unit = '°C';
        gradColors = { stroke1: '#ff7675', stroke2: '#a29bfe', stroke3: '#74b9ff', area: '#a29bfe' };
        labelFn = (v) => `${v}°`;
    } else if (tab === 'wind') {
        values = points.map(p => Math.round((p.wind?.speed || 0) * 3.6));
        unit = 'km/s';
        gradColors = { stroke1: '#00cec9', stroke2: '#0984e3', stroke3: '#6c5ce7', area: '#0984e3' };
        labelFn = (v) => `${v}`;
    } else { // humidity
        values = points.map(p => p.main.humidity);
        unit = '%';
        gradColors = { stroke1: '#55efc4', stroke2: '#00b894', stroke3: '#0984e3', area: '#00b894' };
        labelFn = (v) => `${v}%`;
    }

    const minVal = Math.min(...values);
    const maxVal = Math.max(...values);
    const range = maxVal - minVal || 1;

    const width = 600;
    const height = 220;
    const paddingLeft = 35;
    const paddingRight = 35;
    const paddingTop = 30;
    const paddingBottom = 30;
    const chartWidth = width - paddingLeft - paddingRight;
    const chartHeight = height - paddingTop - paddingBottom;

    const coords = points.map((p, index) => {
        const x = paddingLeft + (index * (chartWidth / 7));
        const v = values[index];
        const y = height - paddingBottom - ((v - minVal) / range * chartHeight);
        return { x, y, val: v, time: fmtTime(p.dt, fData.city.timezone), item: p };
    });

    coords.forEach(pt => {
        const gridLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        gridLine.setAttribute('x1', pt.x);
        gridLine.setAttribute('y1', paddingTop - 10);
        gridLine.setAttribute('x2', pt.x);
        gridLine.setAttribute('y2', height - paddingBottom);
        gridLine.setAttribute('class', 'chart-grid-line');
        svg.appendChild(gridLine);

        const timeTxt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        timeTxt.setAttribute('x', pt.x);
        timeTxt.setAttribute('y', height - 8);
        timeTxt.setAttribute('class', 'chart-label');
        timeTxt.textContent = pt.time;
        svg.appendChild(timeTxt);
        
        const valTxt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        valTxt.setAttribute('x', pt.x);
        valTxt.setAttribute('y', pt.y - 12);
        valTxt.setAttribute('class', 'chart-temp-label');
        valTxt.textContent = labelFn(pt.val);
        svg.appendChild(valTxt);
    });

    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    
    const strokeGrad = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    strokeGrad.setAttribute('id', 'stroke-gradient');
    strokeGrad.setAttribute('x1', '0'); strokeGrad.setAttribute('y1', '0');
    strokeGrad.setAttribute('x2', '0'); strokeGrad.setAttribute('y2', '1');
    [['0%', gradColors.stroke1], ['55%', gradColors.stroke2], ['100%', gradColors.stroke3]].forEach(([off, col]) => {
        const s = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        s.setAttribute('offset', off); s.setAttribute('stop-color', col);
        strokeGrad.appendChild(s);
    });
    defs.appendChild(strokeGrad);

    const areaGrad = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    areaGrad.setAttribute('id', 'area-gradient');
    areaGrad.setAttribute('x1', '0'); areaGrad.setAttribute('y1', '0');
    areaGrad.setAttribute('x2', '0'); areaGrad.setAttribute('y2', '1');
    [[areaGrad, '0%', gradColors.area, '0.38'], [areaGrad, '100%', gradColors.area, '0']].forEach(([el, off, col, op]) => {
        const s = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        s.setAttribute('offset', off); s.setAttribute('stop-color', col); s.setAttribute('stop-opacity', op);
        el.appendChild(s);
    });
    defs.appendChild(areaGrad);
    svg.appendChild(defs);

    let pathD = '';
    let areaD = `M ${coords[0].x} ${height - paddingBottom}`;
    coords.forEach((pt, idx) => {
        if (idx === 0) {
            pathD += `M ${pt.x} ${pt.y}`;
            areaD += ` L ${pt.x} ${pt.y}`;
        } else {
            const prev = coords[idx - 1];
            const cpX1 = prev.x + (pt.x - prev.x) / 2;
            pathD += ` C ${cpX1} ${prev.y}, ${cpX1} ${pt.y}, ${pt.x} ${pt.y}`;
            areaD += ` C ${cpX1} ${prev.y}, ${cpX1} ${pt.y}, ${pt.x} ${pt.y}`;
        }
    });
    areaD += ` L ${coords[coords.length - 1].x} ${height - paddingBottom} Z`;

    const areaPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    areaPath.setAttribute('d', areaD); areaPath.setAttribute('class', 'chart-area');
    svg.appendChild(areaPath);

    const linePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    linePath.setAttribute('d', pathD); linePath.setAttribute('class', 'chart-line');
    svg.appendChild(linePath);

    coords.forEach(pt => {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', pt.x); circle.setAttribute('cy', pt.y);
        circle.setAttribute('r', '4.5'); circle.setAttribute('class', 'chart-point');
        
        circle.addEventListener('mouseenter', () => {
            const rect = svg.getBoundingClientRect();
            tooltip.style.left = `${(pt.x / width) * rect.width}px`;
            tooltip.style.top = `${(pt.y / height) * rect.height}px`;
            const desc = pt.item.weather[0].description;
            const humidity = pt.item.main.humidity;
            const wind = Math.round(pt.item.wind.speed * 3.6);
            tooltip.innerHTML = `
                <div style="font-weight:700;margin-bottom:3px;">${pt.time} — ${pt.val}${unit}</div>
                <div style="text-transform:capitalize;opacity:0.9;">${desc}</div>
                <div style="font-size:10px;opacity:0.75;margin-top:2px;">💧 %${humidity} | 💨 ${wind} km/s</div>
            `;
            tooltip.classList.remove('hidden');
        });
        circle.addEventListener('mouseleave', () => tooltip.classList.add('hidden'));
        svg.appendChild(circle);
    });
}

// ============================================================
// ARAMA OTOMATİK TAMAMLAMA (Autocomplete)
// ============================================================
async function fetchSuggestions(query) {
    try {
        const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(query)}&limit=5&appid=${API_KEY}`);
        if (!res.ok) return;
        const data = await res.json();
        currentSuggestions = data;
        renderSuggestions(data);
    } catch (e) {
        console.warn('Autocomplete hatası:', e);
    }
}

function renderSuggestions(list) {
    const box = document.getElementById('autocomplete-suggestions');
    if (!box) return;
    
    box.innerHTML = '';
    activeSuggestionIndex = -1;
    
    if (!list || list.length === 0) {
        box.classList.add('hidden');
        return;
    }
    
    list.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'autocomplete-suggestion';
        div.dataset.index = index;
        
        const stateStr = item.state ? `<span class="state-name">, ${item.state}</span>` : '';
        
        div.innerHTML = `
            <div class="autocomplete-suggestion-left">
                <span class="city-name">${item.name}</span>
                ${stateStr}
            </div>
            <span class="country-code">${item.country}</span>
        `;
        
        div.addEventListener('click', () => {
            selectSuggestion(index);
        });
        
        box.appendChild(div);
    });
    
    box.classList.remove('hidden');
}

function selectSuggestion(index) {
    if (index < 0 || index >= currentSuggestions.length) return;
    const item = currentSuggestions[index];
    const input = document.getElementById('city-input');
    
    input.value = `${item.name}, ${item.country}`;
    closeSuggestions();
    
    fetchWeatherByCoords(item.lat, item.lon);
}

function closeSuggestions() {
    const box = document.getElementById('autocomplete-suggestions');
    if (box) {
        box.classList.add('hidden');
        box.innerHTML = '';
    }
    currentSuggestions = [];
    activeSuggestionIndex = -1;
}

function handleAutocompleteKeydown(e) {
    const box = document.getElementById('autocomplete-suggestions');
    if (!box || box.classList.contains('hidden') || currentSuggestions.length === 0) {
        return;
    }
    
    const items = box.querySelectorAll('.autocomplete-suggestion');
    
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        activeSuggestionIndex = (activeSuggestionIndex + 1) % currentSuggestions.length;
        updateActiveSuggestion(items);
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        activeSuggestionIndex = (activeSuggestionIndex - 1 + currentSuggestions.length) % currentSuggestions.length;
        updateActiveSuggestion(items);
    } else if (e.key === 'Enter') {
        if (activeSuggestionIndex >= 0 && activeSuggestionIndex < currentSuggestions.length) {
            e.preventDefault();
            selectSuggestion(activeSuggestionIndex);
        }
    } else if (e.key === 'Escape') {
        closeSuggestions();
    }
}

function updateActiveSuggestion(elements) {
    elements.forEach((el, idx) => {
        el.classList.toggle('active', idx === activeSuggestionIndex);
        if (idx === activeSuggestionIndex) {
            el.scrollIntoView({ block: 'nearest' });
        }
    });
}

// ============================================================
// ⭐ FAVORİ ŞEHİRLER SİSTEMİ (LocalStorage)
// ============================================================
const MAX_FAVORITES = 8;

function getFavorites() {
    try { return JSON.parse(localStorage.getItem('wp_favorites')) || []; }
    catch { return []; }
}

function saveFavorites(favs) {
    localStorage.setItem('wp_favorites', JSON.stringify(favs));
}

function toggleFavorite() {
    if (!lastWeatherData) return;
    const cityName = document.getElementById('city-name').textContent;
    let favs = getFavorites();
    const idx = favs.findIndex(f => f.name === cityName);
    if (idx > -1) {
        favs.splice(idx, 1);
    } else {
        if (favs.length >= MAX_FAVORITES) favs.pop();
        const { coord, main, weather } = lastWeatherData;
        favs.unshift({
            name: cityName,
            lat: coord.lat,
            lon: coord.lon,
            temp: Math.round(main.temp),
            icon: weather[0].icon,
            desc: weather[0].description
        });
    }
    saveFavorites(favs);
    updateFavButton(cityName);
    renderFavorites();
}

function updateFavButton(cityName) {
    const btn = document.getElementById('fav-toggle-btn');
    const icon = document.getElementById('fav-icon');
    const text = document.getElementById('fav-btn-text');
    if (!btn || !lastWeatherData) return;
    const favs = getFavorites();
    const isFav = favs.some(f => f.name === cityName || f.name === (cityName + ', ' + lastWeatherData.sys?.country));
    btn.classList.toggle('is-fav', isFav);
    if (icon) {
        icon.setAttribute('fill', isFav ? 'currentColor' : 'none');
    }
    if (text) {
        text.textContent = isFav ? T[currentLang].removeFav : T[currentLang].addFav;
    }
}

function renderFavorites() {
    const section = document.getElementById('favorites-section');
    const list = document.getElementById('favorites-list');
    const countEl = document.getElementById('favorites-count');
    if (!section || !list) return;

    const favs = getFavorites();
    if (countEl) countEl.textContent = favs.length;

    if (favs.length === 0) {
        list.innerHTML = `<p class="fav-empty" data-i18n="recentEmpty">${T[currentLang].recentEmpty}</p>`;
        return;
    }

    list.innerHTML = favs.map(fav => `
        <div class="fav-item" onclick="fetchWeatherFromFav(${fav.lat}, ${fav.lon}, '${fav.name.replace(/'/g, "\\'")}')">
            <div class="fav-item-left">
                <img src="https://openweathermap.org/img/wn/${fav.icon}.png" width="24" height="24" alt="">
                <div class="fav-item-info">
                    <span class="fav-item-name">${fav.name}</span>
                    <span class="fav-item-desc">${fav.desc}</span>
                </div>
            </div>
            <span class="fav-item-temp">${fav.temp}°</span>
        </div>
    `).join('');
}

function fetchWeatherFromFav(lat, lon, name) {
    document.getElementById('city-input').value = name;
    fetchWeatherByCoords(lat, lon);
}

// ============================================================
// ⏱ SAATLİK TAHMIN SLIDER
// ============================================================
function renderHourlySlider(fData) {
    const slider = document.getElementById('hourly-slider');
    if (!slider || !fData || !fData.list) return;

    const points = fData.list.slice(0, 12); // 36 saatlik
    const tzOff = fData.city.timezone;

    slider.innerHTML = points.map(p => {
        const time = fmtTime(p.dt, tzOff);
        const temp = Math.round(p.main.temp);
        const icon = p.weather[0].icon;
        const desc = p.weather[0].description;
        const wind = Math.round((p.wind?.speed || 0) * 3.6);
        const humidity = p.main.humidity;
        const pop = p.pop ? Math.round(p.pop * 100) : 0; // Yağış ihtimali

        return `
            <div class="hourly-card">
                <div class="hourly-card-time">${time}</div>
                <img class="hourly-card-icon" src="https://openweathermap.org/img/wn/${icon}@2x.png" width="48" height="48" alt="${desc}">
                <div class="hourly-card-temp">${temp}°C</div>
                <div class="hourly-card-desc">${desc}</div>
                <div class="hourly-card-details">
                    <span>💧 ${humidity}%</span>
                    <span>💨 ${wind} km/s</span>
                    ${pop > 0 ? `<span>🌧️ ${pop}%</span>` : ''}
                </div>
            </div>
        `;
    }).join('');
}

// ============================================================
// 🌿 HAVA KALİTESİ SAĞLIK PANELİ MODAL
// ============================================================
function openAQIPanel() {
    const overlay = document.getElementById('aqi-modal-overlay');
    const cityName = document.getElementById('city-name')?.textContent || '—';
    document.getElementById('aqi-modal-city').textContent = cityName;

    if (!lastAQIData || !lastAQIData.list || !lastAQIData.list[0]) {
        document.getElementById('aqi-pollutants').innerHTML = '<p style="opacity:0.6;">Veri bulunamadı.</p>';
        overlay.classList.add('open');
        return;
    }

    const data = lastAQIData.list[0];
    const aqi = data.main.aqi;
    const comp = data.components;

    // AQI Göstergesi
    const aqiLabels = ['—', 'Mükemmel', 'İyi', 'Orta', 'Kötü', 'Çok Kötü'];
    const aqiColors = ['', '#00b894', '#55efc4', '#fdcb6e', '#e17055', '#d63031'];
    document.getElementById('aqi-index-num').textContent = aqi;
    document.getElementById('aqi-index-label').textContent = T[currentLang].aqi[aqi] || aqiLabels[aqi];
    document.getElementById('aqi-index-label').style.color = aqiColors[aqi];

    const pointer = document.getElementById('aqi-gauge-pointer');
    if (pointer) pointer.style.left = `${((aqi - 1) / 4) * 100}%`;

    const fill = document.getElementById('aqi-gauge-fill');
    if (fill) {
        fill.style.width = `${((aqi - 1) / 4) * 100}%`;
        fill.style.background = `linear-gradient(90deg, #00b894, ${aqiColors[aqi]})`;
    }

    // Kirletici değerler
    const pollutants = [
        { key: 'pm2_5',  label: 'PM2.5',  unit: 'μg/m³', safe: 25 },
        { key: 'pm10',   label: 'PM10',   unit: 'μg/m³', safe: 50 },
        { key: 'no2',    label: 'NO₂',    unit: 'μg/m³', safe: 40 },
        { key: 'o3',     label: 'O₃',     unit: 'μg/m³', safe: 100 },
        { key: 'co',     label: 'CO',     unit: 'μg/m³', safe: 4000 },
        { key: 'so2',    label: 'SO₂',    unit: 'μg/m³', safe: 20 },
        { key: 'nh3',    label: 'NH₃',    unit: 'μg/m³', safe: 200 },
        { key: 'no',     label: 'NO',     unit: 'μg/m³', safe: 40 },
    ];

    document.getElementById('aqi-pollutants').innerHTML = `
        <div class="pollutants-grid">
            ${pollutants.map(p => {
                const val = comp[p.key] ?? null;
                if (val === null) return '';
                const pct = Math.min((val / p.safe) * 100, 100);
                const barColor = pct < 50 ? '#00b894' : pct < 80 ? '#fdcb6e' : '#e17055';
                return `
                    <div class="pollutant-card">
                        <div class="pollutant-name">${p.label}</div>
                        <div class="pollutant-value">${val.toFixed(1)} <span class="pollutant-unit">${p.unit}</span></div>
                        <div class="pollutant-bar-bg">
                            <div class="pollutant-bar" style="width:${pct}%;background:${barColor};"></div>
                        </div>
                        <div class="pollutant-safe">Güvenli: <${p.safe} ${p.unit}</div>
                    </div>
                `;
            }).join('')}
        </div>
    `;

    // Sağlık tavsiyesi
    const adviceMap = {
        1: { icon: '😊', title: 'Hava Kalitesi Mükemmel', text: 'Hava temiz ve taze. Tüm açık hava aktiviteleri için ideal. Dışarıda vakit geçirmekten çekinmeyin!', color: '#00b894' },
        2: { icon: '🙂', title: 'Hava Kalitesi İyi',      text: 'Hava kalitesi genel olarak kabul edilebilir. Hassas kişiler uzun süreli yoğun egzersizden kaçınabilir.', color: '#55efc4' },
        3: { icon: '😐', title: 'Orta Düzey Hava Kalitesi', text: 'Hassas gruplar (çocuklar, yaşlılar, astımlılar) uzun süreli dış mekan aktivitelerini sınırlamalı.', color: '#fdcb6e' },
        4: { icon: '😷', title: 'Kötü Hava Kalitesi',     text: 'Herkes uzun ve yoğun dış mekan egzersizlerini azaltmalı. Hassas gruplar dışarı çıkmaktan kaçınmalı.', color: '#e17055' },
        5: { icon: '🚨', title: 'Çok Kötü Hava Kalitesi', text: 'Herkese iç mekanda kalması önerilir. Mümkünse N95 maske kullanın. Pencere ve kapıları kapalı tutun.', color: '#d63031' },
    };
    const advice = adviceMap[aqi] || adviceMap[3];
    document.getElementById('aqi-health-advice').innerHTML = `
        <div class="health-advice-card" style="border-color:${advice.color}20;background:${advice.color}10;">
            <div class="advice-icon">${advice.icon}</div>
            <div class="advice-content">
                <div class="advice-title" style="color:${advice.color};">${advice.title}</div>
                <div class="advice-text">${advice.text}</div>
            </div>
        </div>
    `;

    overlay.classList.add('open');
}

function closeAQIPanel() {
    document.getElementById('aqi-modal-overlay')?.classList.remove('open');
}

// ============================================================
// 🎆 CANVAS PARTİKEL SİSTEMİ (Dinamik Hava Efektleri)
// ============================================================
function initParticleSystem() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animFrame = null;
    let currentWeather = null;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    class Particle {
        constructor(type) {
            this.type = type;
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = -10;
            this.opacity = Math.random() * 0.6 + 0.1;

            switch (this.type) {
                case 'rain':
                    this.w = Math.random() * 1.5 + 0.5;
                    this.h = Math.random() * 18 + 10;
                    this.speedX = Math.random() * 1 - 0.3;
                    this.speedY = Math.random() * 8 + 10;
                    this.color = `rgba(180,215,255,${this.opacity})`;
                    break;
                case 'snow':
                    this.radius = Math.random() * 4 + 1;
                    this.speedX = Math.sin(Math.random() * Math.PI * 2) * 0.8;
                    this.speedY = Math.random() * 1.5 + 0.5;
                    this.drift = Math.random() * 2 - 1;
                    this.driftSpeed = Math.random() * 0.02;
                    this.driftAngle = Math.random() * Math.PI * 2;
                    this.color = `rgba(220,235,255,${this.opacity + 0.2})`;
                    break;
                case 'star':
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height * 0.6;
                    this.radius = Math.random() * 1.8 + 0.3;
                    this.twinkle = Math.random() * Math.PI * 2;
                    this.twinkleSpeed = Math.random() * 0.04 + 0.01;
                    this.color = `rgba(255,255,255,${this.opacity})`;
                    this.speedY = 0;
                    break;
                case 'fog':
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                    this.radius = Math.random() * 80 + 40;
                    this.speedX = Math.random() * 0.3 + 0.05;
                    this.speedY = 0;
                    this.color = `rgba(200,210,220,${Math.random() * 0.04 + 0.01})`;
                    break;
                case 'spark':
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height * 0.5;
                    this.radius = Math.random() * 2 + 0.5;
                    this.speedX = (Math.random() - 0.5) * 0.4;
                    this.speedY = -Math.random() * 0.5 - 0.1;
                    this.life = Math.random();
                    this.decay = Math.random() * 0.003 + 0.001;
                    this.color = `rgba(255,200,80,${this.opacity})`;
                    break;
            }
        }

        update() {
            switch (this.type) {
                case 'rain':
                    this.x += this.speedX;
                    this.y += this.speedY;
                    if (this.y > canvas.height + 10) this.reset();
                    break;
                case 'snow':
                    this.driftAngle += this.driftSpeed;
                    this.x += Math.sin(this.driftAngle) * this.drift + this.speedX;
                    this.y += this.speedY;
                    if (this.y > canvas.height + 10) this.reset();
                    break;
                case 'star':
                    this.twinkle += this.twinkleSpeed;
                    break;
                case 'fog':
                    this.x += this.speedX;
                    if (this.x > canvas.width + this.radius) this.x = -this.radius;
                    break;
                case 'spark':
                    this.x += this.speedX;
                    this.y += this.speedY;
                    this.life -= this.decay;
                    if (this.life <= 0) this.reset();
                    break;
            }
        }

        draw(ctx) {
            ctx.save();
            switch (this.type) {
                case 'rain':
                    ctx.fillStyle = this.color;
                    ctx.beginPath();
                    ctx.roundRect(this.x, this.y, this.w, this.h, 1);
                    ctx.fill();
                    break;
                case 'snow':
                    ctx.fillStyle = this.color;
                    ctx.shadowColor = 'rgba(200,230,255,0.8)';
                    ctx.shadowBlur = 6;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                    ctx.fill();
                    break;
                case 'star': {
                    const alpha = (Math.sin(this.twinkle) + 1) / 2 * this.opacity + 0.05;
                    ctx.fillStyle = `rgba(255,255,255,${alpha})`;
                    ctx.shadowColor = 'rgba(200,220,255,0.8)';
                    ctx.shadowBlur = 4;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                    ctx.fill();
                    break;
                }
                case 'fog':
                    ctx.fillStyle = this.color;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                    ctx.fill();
                    break;
                case 'spark': {
                    const a = this.life * this.opacity;
                    ctx.fillStyle = `rgba(255,220,100,${a})`;
                    ctx.shadowColor = 'rgba(255,180,0,0.6)';
                    ctx.shadowBlur = 8;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.radius * this.life, 0, Math.PI * 2);
                    ctx.fill();
                    break;
                }
            }
            ctx.restore();
        }
    }

    function buildParticles(weather, isNight) {
        particles = [];
        if (weather === 'Rain' || weather === 'Drizzle') {
            for (let i = 0; i < 120; i++) particles.push(new Particle('rain'));
        } else if (weather === 'Thunderstorm') {
            for (let i = 0; i < 160; i++) particles.push(new Particle('rain'));
            for (let i = 0; i < 20; i++) particles.push(new Particle('spark'));
        } else if (weather === 'Snow') {
            for (let i = 0; i < 80; i++) particles.push(new Particle('snow'));
        } else if (['Mist', 'Fog', 'Haze', 'Smoke'].includes(weather)) {
            for (let i = 0; i < 18; i++) particles.push(new Particle('fog'));
        } else if (weather === 'Clear' && isNight) {
            for (let i = 0; i < 120; i++) particles.push(new Particle('star'));
        } else {
            // Güneşli veya varsayılan — temiz
            particles = [];
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(ctx); });
        animFrame = requestAnimationFrame(animate);
    }

    if (animFrame) cancelAnimationFrame(animFrame);
    animate();

    particleSystem = {
        setWeather(condition, isNight) {
            currentWeather = condition;
            buildParticles(condition, isNight);
        }
    };
}
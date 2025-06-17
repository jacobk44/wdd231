const myGraphic = document.querySelector(".graphic");
const myDescription = document.querySelector(".description");
const myTemperature = document.querySelector(".temperature");
const myHigh = document.querySelector(".high");
const myLow = document.querySelector(".low");
const myHumidity = document.querySelector(".humidity");
const mySunrise = document.querySelector(".sunrise");
const mySunset = document.querySelector(".sunset");


const myLat = "36.19883361935888"
const myLon = "-115.14623761673215"
const myApikey = "571455683fa6197368b033967c148829"

const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&units=metric&appid=${myApikey}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLon}&units=metric&appid=${myApikey}`;

function formatTime(unixTime) {
  return new Date(unixTime * 1000).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: 'America/Los_Angeles'
  }).toLowerCase();
}

async function apiFetch() {
  try {
    const response = await fetch(weatherURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw error(response.text())
    }
  } catch (error) {
    console.log(error);
  }

}

function displayResults(data) {
  console.log("hello");
  myTemperature.innerHTML = `${data.main.temp}&deg;F`;
  myHigh.innerHTML = `High: ${data.main.temp_max}&deg;C`;
  myLow.innerHTML = `Low: ${data.main.temp_min}&deg;C`;
  myHumidity.innerHTML = `Humidity: ${data.main.humidity}\u0025`;
  myDescription.innerHTML = data.weather[0].description;
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  myGraphic.setAttribute("src", iconsrc);
  myGraphic.setAttribute("alt", data.weather[0].description)

  // convert and format the sunrise
  const sunriseTime = formatTime(data.sys.sunrise);
  mySunrise.textContent = `Sunrise: ${sunriseTime}`;

  const sunsetTime = formatTime(data.sys.sunset);
  mySunset.textContent = `Sunset: ${sunsetTime}`;



}
apiFetch();




async function fetchForecast() {
  try {
    const response = await fetch(forecastURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      showForecast(data);
    } else {
      throw error(response.text())
    }
  } catch (error) {
    console.log(error);
  }
}

function getEmoji(main) {
  return {
    clear: '☀️',
    clouds: '☁️',
    rain: '🌧️',
    drizzle: '🌦️',
    thunderstorm: '⛈️',
    snow: '❄️',
    mist: '🌫️',
    fog: '🌫️',
  }[main.toLowerCase()] || '🌈';
}


function showForecast(data) {
  const days = ['.today', '.tommorrow', '.day3'].map(sel => document.querySelector(sel));
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Group by date string
  const byDate = {};
  data.list.forEach(f => {
    const d = new Date(f.dt * 1000).toISOString().slice(0, 10);
    (byDate[d] = byDate[d] || []).push(f);
  });

  days.forEach((el, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const dateStr = date.toISOString().slice(0, 10);
    const list = byDate[dateStr];
    if (!list || list.length === 0) {
      el.textContent = `No data for ${date.toLocaleDateString('en-US', { weekday: 'long' })}`;
      return;
    }
    // Closest to 12:00 PM
    const closest = list.reduce((a, b) =>
      Math.abs(new Date(a.dt * 1000).getHours() - 12) < Math.abs(new Date(b.dt * 1000).getHours() - 12) ? a : b
    );
    const temp = Math.round(closest.main.temp);
    const emoji = getEmoji(closest.weather[0].main);
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });

    // ✅ Use innerHTML to insert HTML with a span for bold temp
    el.innerHTML = `${dayName}: ${emoji} <span class="bold-temp">${temp}°C</span>`;
  });
}


fetchForecast();

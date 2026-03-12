//Go to this website and generate api key for your this project that easy thans...
const API_KEY = " https://openweathermap.org/api";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const weatherIcon = document.getElementById("weatherIcon");
let loading = document.getElementById("loading");
let feelslike = document.getElementById("feels-like");
let tHumidity = document.getElementById("Humidity");
let wind = document.getElementById("wind");
let sunrise = document.getElementById("sunrise");
let sunset = document.getElementById("sunset");

document.addEventListener("DOMContentLoaded", () => {
  let lastCity = localStorage.getItem("lastCity");
  if (lastCity) fetchWeather(lastCity);
});

cityInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    searchWeather();
  }
});

function searchWeather() {
  let city = cityInput.value.trim();
  if (city === "") return alert("please enter your city name...");
  fetchWeather(city);
  cityInput.value = "";
  loading.style.display = "flex";
}

searchBtn.addEventListener("click", () => {
  searchWeather();
});

async function fetchWeather(city) {
  try {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}&lang=ur`;
    let response = await fetch(url);
    if (!response.ok) throw new Error("city not found or invalid API key");
    let data = await response.json();
    showWeather(data);

    localStorage.setItem("lastCity", city);
  } catch (err) {
    loading.style.display = "none";
    alert(err.message);
  }
}

function showWeather(data) {
  setTimeout(() => {
    loading.style.display = "none";

    // Basic info
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
     feelslike.textContent = `Feels like: ${Math.round(data.main.feels_like)}°C`;
    tHumidity.textContent = `Humidity: ${data.main.humidity}%`;
    description.textContent = data.weather[0].description;
    let iconCode = data.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
   
    // wind
    let windSpeed = data.wind.speed;
    let windDeg = data.wind.deg;
    let windDirection = getWindDirection(windDeg);
    wind.textContent = `Wind speed: ${windSpeed} m/s ${windDirection}`;

    // Sunrise & Sunset
    let sunriseTime = new Date(data.sys.sunrise * 1000);
    let sunsetTime = new Date(data.sys.sunset * 1000);

    sunrise.textContent = `Sunrise ${formatTime(sunriseTime)}`;
    sunset.textContent = `Sunset ${formatTime(sunsetTime)}`;
  }, 2000);
}

// Helper function for wind direction
function getWindDirection(degrees) {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index = Math.round(degrees / 45) % 8;
  return directions[index];
}

// Helper function for time formatting
function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return `${hours}:${minutes} ${ampm}`;
}

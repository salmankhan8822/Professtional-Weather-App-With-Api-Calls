#  Weather App

A simple and modern **Weather Application** built using **HTML, CSS, and JavaScript** that allows users to search for real-time weather information for any city using the **OpenWeatherMap API**.

##  Features

* Search weather by **city name**
* Display **temperature in Celsius**
* Show **weather description and icon**
* Display **feels-like temperature**
* Show **humidity level**
* Display **wind speed and direction**
* Show **sunrise and sunset time**
* **Loading animation** while fetching data
* **Enter key support** for quick search
* Saves **last searched city using LocalStorage**

##  Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript (ES6)**
* **OpenWeatherMap API**
* **Fetch API**
* **LocalStorage**

##  How It Works

1. User enters a **city name**.
2. The app sends a request to the **OpenWeatherMap API**.
3. Weather data is fetched using **JavaScript Fetch API**.
4. The application displays:

   * Temperature
   * Weather condition
   * Wind information
   * Humidity
   * Sunrise & Sunset time.
5. The last searched city is saved in **localStorage** and automatically loaded when the page refreshes.

##  API

This project uses the **OpenWeatherMap API** to fetch real-time weather data.

API Documentation:
https://openweathermap.org/api

## 📁 Project Structure

```
weather-app
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## ▶ How to Run

1. Download or clone the repository.
2. Open the project folder.
3. Run **index.html** in your browser.

## 📸 Example Output

Displays weather information such as:

```
City: Lahore, PK
Temperature: 29°C
Feels Like: 31°C
Humidity: 65%
Wind Speed: 3 m/s NE
Sunrise: 6:05 AM
Sunset: 6:41 PM
```

##  Future Improvements

* 5-day weather forecast
* Auto-detect user location
* Better UI design
* Mobile responsiveness
* Weather background animations

## 👨‍💻 Author
Developed as a **JavaScript practice project** to learn API integration, DOM manipulation, and asynchronous programming.

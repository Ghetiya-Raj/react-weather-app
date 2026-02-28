# 🌤️ React Weather App

A modern **ReactJS Weather Application** that allows users to search weather information for any city around the world.  
It fetches live weather data from the **OpenWeatherMap API** and displays the current weather details including temperature, weather conditions, humidity, and more.

---

## 💡 Features

✔ Search weather by city name  
✔ Fetch and display live weather data from API  
✔ Show weather details like temperature, humidity, wind speed  
✔ Handle invalid searches and user input errors  
✔ Responsive UI and interactive components

---

## 🛠️ Technologies Used

- ⚛️ **React.js** – Frontend library  
- 📡 **OpenWeatherMap API** – Weather data source  
- 🔗 **Axios / Fetch API** – HTTP requests  
- 📌 **CSS / Tailwind CSS** – Styling  
- 🧠 React Hooks (useState, useEffect)

---

## ❓ How Weather Fetch Works

The app works by:

1. Taking **city name** input from the user  
2. Sending an API request to OpenWeatherMap with the city  
3. Receiving a JSON response with weather details  
4. Updating React state and displaying weather data on UI

This API returns data such as:

- City name  
- Temperature (current, min, max)  
- Weather description  
- Weather icon  
- Humidity  
- Wind speed :contentReference[oaicite:0]{index=0}

---

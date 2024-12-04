# 🌤 WeatherAppFull

**WeatherAppFull** is a responsive web application that displays real-time weather details of any location using the OpenWeather API. This project provides users with current weather insights, 5-day forecasts, and visually dynamic UI components, making it an excellent addition to portfolios.

![WeatherAppFull Screenshot](/path/to/screenshot.png)

---

## 📋 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [API Key Configuration](#api-key-configuration)
- [Contributing](#contributing)
- [License](#license)

---

## 🌟 Features

- **🌍 Search and Geolocation**: Search for weather by city or fetch details for your current location.
- **🌡️ Temperature Units**: Toggle between Celsius (°C) and Fahrenheit (°F).
- **🕒 Time and Location**: Displays current time and location with live updates using Luxon.
- **🎨 Dynamic UI**: Changes background colors based on the weather. 
- **📊 Weather Insights**: View temperature, wind speed, humidity, and more, with a 5-day weather forecast.
- **🌟 Built with**: React, Tailwind CSS, Luxon, React Icons, and OpenWeather API.

---

## 🎥 Demo

A live demo of **WeatherAppFull** can be found [here](https://example.com/weatherappfull-demo).

Preview the app in action below:

https://github.com/tejus0/WeatherAppFull/assets/76488943/a37a7a3e-8288-409a-84ff-0ce1832368d6

---

## 🚀 Installation

Follow these steps to set up and run the application locally:

1. Clone the repository:

```bash
git clone https://github.com/tejus0/WeatherAppFull.git
cd WeatherAppFull
```

2. Install the required dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The application will be accessible at `http://localhost:3000` in your web browser.

---

## 🛠️ Usage

1. On loading, the app will request access to your location to fetch current weather. Alternatively, you can search for any city.
2. View details such as temperature, humidity, wind speed, and current time for your chosen location.
3. Toggle between Celsius (°C) and Fahrenheit (°F) for temperature readings.
4. Access a detailed 5-day forecast by scrolling through the page.

---

## 🔑 API Key Configuration

1. Obtain a free API key from [OpenWeather](https://openweathermap.org/api).
2. Add your API key to a `.env` file in the root of your project directory:

```plaintext
REACT_APP_WEATHER_API_KEY=your_openweather_api_key_here
```

3. Restart the development server after saving the file.

---

## 📚 Technologies Used

- **React**: For building dynamic UI components.
- **Tailwind CSS**: For styling and responsive design.
- **Luxon**: For precise time formatting.
- **React Icons**: For weather-related icons.
- **OpenWeather API**: To fetch real-time weather data.

---

## 🤝 Contributing

Contributions are welcome! If you have ideas to improve the app or fix bugs, feel free to:

1. Fork the repository.
2. Create a feature branch.
3. Submit a pull request.

Please ensure your code adheres to the project's coding guidelines.

---

## 📜 License

WeatherAppFull is open-source and licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

Feel free to replace placeholders like `/path/to/screenshot.png` and `https://example.com/weatherappfull-demo` with the actual URLs for your screenshot and live demo.

Let me know if you'd like further refinements! 😊

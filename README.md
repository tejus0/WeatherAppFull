
WeatherAppFull is a web application that displays weather details of any location using the OpenWeather API. This project provides real-time weather data and forecasts, making it easy for users to check weather conditions for any place.

![WeatherAppFull Screenshot](/path/to/screenshot.png)

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [API Key](#api-key)
- [Contributing](#contributing)
- [License](#license)

## Features

- Get current weather details (temperature, humidity, wind speed, etc.) for any location worldwide.
- View a 5-day weather forecast for the selected location.
- Search for weather information by city name or zip code.
- Responsive design, making it suitable for various devices.
- Easy-to-use and intuitive user interface.

## Demo

A live demo of the WeatherAppFull can be found [here].



https://github.com/tejus0/WeatherAppFull/assets/76488943/1f944329-d598-464c-97b7-14be7cdc5997



## Installation

To run WeatherAppFull locally, follow these steps:

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

## Usage

1. Upon loading the WeatherAppFull, you will be prompted to allow location access (if available in your browser) or enter a location manually.

2. Once the location is set, the application will display the current weather details for that location.

3. To view the 5-day weather forecast, click on the "5-Day Forecast" button below the current weather card.

4. You can also search for weather information for other cities by entering the city name or zip code in the search bar.

## API Key

WeatherAppFull uses the OpenWeather API to fetch weather data. To use this application, you need to obtain a free API key from [OpenWeather](https://openweathermap.org/api) and add it to the `REACT_APP_API_KEY` environment variable.

```bash
# Create a .env file in the root directory
touch .env

# Add your API key to the .env file
REACT_APP_API_KEY=your_openweather_api_key_here
```

Make sure to restart the development server after adding the API key.

## Contributing

Contributions to WeatherAppFull are welcome! If you find any bugs or have suggestions for improvement, please create an issue or submit a pull request. Make sure to follow the project's coding conventions and practices.

## License

WeatherAppFull is open-source software licensed under the [MIT License](https://opensource.org/licenses/MIT).
```

Make sure to replace `/path/to/screenshot.png`, `https://example.com/weatherappfull-demo`, and `your_openweather_api_key_here` with the appropriate values. Additionally, consider updating the URLs and details as needed for the project's actual repository and live demo URL.

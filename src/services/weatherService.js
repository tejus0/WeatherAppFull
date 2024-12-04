import { DateTime } from "luxon";

const getWeatherData =  async(infoType, searchParams) => {
  const url = new URL(process.env.REACT_APP_BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({
    ...searchParams,
    appid: process.env.REACT_APP_API_KEY,
  });


  // Fetching data and returning the response in JSON format
  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  console.log(data.id,"api data")

  if(data.id === undefined){
    return {
      error: data.cod,
      message: data.message || "An error occurred while processing the data.",
    };
  }

  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
    timezone
  } = data;

  const { main: details, icon } = weather[0];
  console.log(typeof(sunrise),typeof(sunset),typeof(dt),"dt")
  const formattedLocalTime= formatToLocalTime(dt, timezone)
  console.log(formattedLocalTime,"formated")

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise:formatToLocalTime(sunrise,timezone,'hh:mm a'),
    sunset:formatToLocalTime(sunset,timezone,'hh:mm a'),
    details,
    icon:iconUrlFromCode(icon),
    formattedLocalTime,
    speed,
    timezone
  };
};

const formatForecastWeather = (secs,offset,data) => {
  console.log(typeof(data[0].dt),"dailyt")
  // let { timezone, daily, hourly } = data;
  // console.log(timezone, daily, hourly,"timestamp")

  // console.log(typeof(f.dt));

  const daily = data.filter((f)=> f.dt_txt.slice(-8)==="00:00:00").map((f) => ( {
    title: formatToLocalTime(f.dt, offset, "ccc"),
    temp: f.main.temp,
    icon: iconUrlFromCode(f.weather[0].icon),
    date:f.dt_txt,
  }
));

  const hourly = data.filter(f=> f.dt>secs).slice(0,5).map((f) => ( {
      title: formatToLocalTime(f.dt, offset, "hh:mm a"),
      temp: f.main.temp,
      icon: iconUrlFromCode(f.weather[0].icon),
      date:f.dt_txt,
    }
  ));

  return {daily, hourly };
};

// const getFormattedWeatherData = async (searchParams) => {
//   console.log(searchParams,"search")
//   const formattedCurrentWeather = await getWeatherData(
//     "weather",
//     searchParams
//   ).then(formatCurrentWeather);

const getFormattedWeatherData = async (searchParams) => {
  try {
    console.log(searchParams, "search");

    // Fetch and format current weather data
    const rawWeatherData = await getWeatherData("weather", searchParams);

    console.log(rawWeatherData,"rawe")
     // Check if the API returned a valid response
    if (rawWeatherData.error) {
      throw new Error(rawWeatherData.message);
    }

    const formattedCurrentWeather = formatCurrentWeather(rawWeatherData);

    // Check if the formatted data contains an error
    if (formattedCurrentWeather.error) {
      throw new Error(formattedCurrentWeather.message);
    }

    // Destructure necessary fields for forecast
    const { dt, lat, lon, timezone } = formattedCurrentWeather;
    console.log( dt, lat, lon, typeof timezone, "timezone");

    // Fetch and format forecast weather data
    const rawForecastData = await getWeatherData("forecast", {
      lat,
      lon,
      units: searchParams.units,
    });
    console.log(dt,timezone,"timerzone")
    const formattedForecastWeather = formatForecastWeather(
      dt,
      timezone,
      rawForecastData.list
    );

    // Return combined data
    return { ...formattedCurrentWeather, ...formattedForecastWeather };
  } catch (error) {
    console.error("Error in getFormattedWeatherData:", error.message);

    // Return a standardized error object
    return {
      error: true,
      message: error.message || "An error occurred while fetching weather data.",
    };
  }
};



//   const {dt, lat, lon , timezone} = formattedCurrentWeather;
//   console.log(typeof(dt), lat, lon , typeof(timezone),"timexone");

//   const formattedForecastWeather = await getWeatherData("forecast", {
//     lat,
//     lon,
//     // exclude: "current,minutely,alerts",
//     units: searchParams.units,
//   }).then((d)=>formatForecastWeather(dt,timezone,d.list));

//   return { ...formattedCurrentWeather, ...formattedForecastWeather };
// };

const formatToLocalTime = (
  secs,
  offset,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a",
) => { console.log(typeof(secs),"localtime"); return DateTime.fromSeconds(secs + offset,{zone:'utc'}).toFormat(format)};







const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode };

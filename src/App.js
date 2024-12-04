import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TemperatureChart from "./components/TemperatureChart";
// import Background from "./components/Background";

function App() {
  const [query, setQuery] = useState({ q: "Faridabad" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  // const [city, setCity] = useState("Faridabad");  // Added city state here
  const [error, setError] = useState(null);
const [loading, setLoading] = useState(false);
const [topButton, setTopButton] = useState("")



  useEffect(() => {
    const fetchWeather = async () => {
      // if (!query.q || query.q.trim() === "") {
      //   setError("City name cannot be empty.");
      //   toast.error("City name cannot be empty.");
      //   return;
      // }

      const cacheKey = `${query.q}-${units}`;
  const cachedData = JSON.parse(localStorage.getItem(cacheKey));
  const expiryTime = 10 * 60 * 1000; // 10 minutes

  if (cachedData && Date.now() - cachedData.timestamp < expiryTime) {
    console.log("Using cached data");
    setWeather(cachedData.data);
    return;
  }

      const message = query.q ? query.q : "current location.";
      console.log(message,"mesaage")
      toast.info("Fetching weather for " + message);
      setLoading(true);

    //   await getFormattedWeatherData({...query,units }).then((data) => {
    //     toast.success(
    //       `Successfully fetched weather for ${data.name}, ${data.country}.`
    //     );
    //     console.log(data,"data in apo")

    //     setWeather(data);
    //   });
    // };

    // const fetchWeatherData = async (city) => {
      try {
        
          const data = await getFormattedWeatherData({...query,units });
          if(data.error){
            toast.error(data.message)
            setError(data.message)
            setWeather(null)
            // console.log("error caought in app")
          }
          else{
            console.log(data,"data in app")
            toast.success(
              `Successfully fetched weather for ${data.name}, ${data.country}.`
            );
            setWeather(data);
            setError(null);

            // Cache the data with timestamp
            localStorage.setItem(
              cacheKey,
              JSON.stringify({ data, timestamp: Date.now() })
            );
            }
      } catch (err) {
        console.log(err,"err")
        if (err.response?.status === 404) {
          toast.error("City not found. Please check the spelling.");
          setError("City not found. Please check the spelling.");
        } else if (err.response?.status === 429) {
          toast.error("API rate limit exceeded. Please try again later.");
          setError("API rate limit exceeded. Please try again later.");
        } else {
          toast.error("Failed to fetch weather data. Please try again.");
          setError("Failed to fetch weather data. Please try again.");
        }
          // setError(err.message);
          setWeather(null);
      } finally {
          setLoading(false);
      }
  };
  

    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-600 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-600 to-blue-700"; //from-cyan-700 to-blue-700

    return "from-yellow-600 to-orange-700";
  };

  const getWeatherClass = (condition) => {
    if (condition.includes("Clear")) return "weather-sunny";
    if (condition.includes("Clouds")) return "weather-cloudy";
    if (condition.includes("Rain")) return "weather-rainy";
    if (condition.includes("Snow")) return "weather-snowy";
    if (condition.includes("Smoke")) return "weather-smoke";
    if (condition.includes("Haze")) return "weather-haze";
    return "default-weather";
  };
  console.log(weather,"weather herer")

  const weatherClass =  getWeatherClass(weather? weather.details: "default"); // Example variabl

  return (
    <div
      className={` max-w-screen-2xl py-5 bg-gradient-to-br shadow-xl shadow-gray-400 px-32 ${weatherClass}`} // shadow-xl shadow-gray-400 h-14  mx-auto max-w-screen-md mt-4 py-5 px-32 h-fit
      // style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3gtB44Awjafm_0H_ye1RDTdUBO3AHM_FCJKLau3ZSsQ&s')"}}
    >
      <TopButtons setQuery={setQuery} setTopButton={setTopButton} />
      <Inputs setQuery={setQuery} setUnits={setUnits} setError={setError} topButton={topButton} setTopButton={setTopButton} />

      {loading && <p>Loading...</p>}

        {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} units={units} />

          <Forecast title="hourly forecast" items={weather.hourly} />
          <Forecast title="daily forecast" items={weather.daily} />
          {/* Integrate the temperature chart */}
          <TemperatureChart dailyData={weather.daily} units={units} />
        </div>
      )}

      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default App;

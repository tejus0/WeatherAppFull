import React from "react";
import { WiDaySunny, WiCloud, WiRain, WiSnow } from "react-icons/wi";

const WeatherIcon = ({ condition }) => {
  switch (condition) {
    case "Sunny":
      return <WiDaySunny size={50} color="#ffcc33" />;
    case "Cloudy":
      return <WiCloud size={50} color="#87cefa" />;
    case "Rainy":
      return <WiRain size={50} color="#1f1c2c" />;
    case "Snowy":
      return <WiSnow size={50} color="#e0eafc" />;
    default:
      return <WiCloud size={50} color="#87cefa" />;
  }
};

export default WeatherIcon;

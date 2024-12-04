import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherGrid.css"; 

const WeatherGrid = ({ dailyData }) => {
  return (
    <div className="weather-grid">
      {dailyData.map((day) => (
        <div className="weather-grid-item" key={day.date}>
          <WeatherIcon condition={day.condition} />
          <h3>{day.title}</h3>
          <p>{day.temp}°C</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherGrid;

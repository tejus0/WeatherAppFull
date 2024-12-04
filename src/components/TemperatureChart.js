import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import "./TemperatureChart.css";

const TemperatureChart = ({ dailyData, units }) => {
  const formattedData = dailyData.map((day) => ({
    date: day.date,
    title: day.title, // Day name
    temp: day.temp, // Temperature
    icon: day.icon, // Weather icon URL
  }));

  return (
    
    <div style={{ display: "flex", justifyContent: "space-between", gap: "20px", marginTop: 20 }}>
      {/* Line Chart (Left) */}
      <div className="temperature-chart" style={{ flex: 1, height: 300 }}>
        <ResponsiveContainer>
          <LineChart
            data={formattedData}
            margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <YAxis unit={units === "metric" ? "°C" : "°F"} />
            <Tooltip />

            <defs>
            <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ff7300" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#387908" stopOpacity={0.8} />
            </linearGradient>
          </defs>

            <Line type="monotone" dataKey="temp" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Histogram Chart (Right) */}
      <div style={{ flex: 1, height: 300 }}>
        <ResponsiveContainer>
          <BarChart
            data={formattedData}
            margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <YAxis unit={units === "metric" ? "°C" : "°F"} />
            <Tooltip />
            <Bar dataKey="temp" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TemperatureChart;

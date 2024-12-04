import React from "react";
import "./TimeAndLocation.css";

function TimeAndLocation({ weather: { formattedLocalTime, name, country } }) {
  console.log(formattedLocalTime,"tiumr")
  // const formattedDate = DateTime.fromISO(formattedLocalTime).toFormat("EEE | dd MMMM, yyyy");
  return (
    <div className="time-location">
      <div className="time flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          {formattedLocalTime}
        </p>
      </div>

      <div className="location flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;

import React from "react";

const LocalWeather = (props: any) => {
  return (
    <div>
      <h3>Temperature: {props.temp}°F</h3>
      <h3>Feels Like: {props.feels}°F</h3>
      <h3>Humidity: {props.humidity}%</h3>
      <h3>Wind Speed: {props.speed}mph</h3>
    </div>
  );
};

export default LocalWeather;

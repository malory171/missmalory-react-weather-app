import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response);
  }

  console.log(props.coordinates);

  let apiKey = "a3ab2befb0aeo33880eb42d02209d3et";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Wed</div>
          <WeatherIcon code="clear-sky-day" size={50} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">15°</span>
            <span className="WeatherForecast-temperature-min">5°</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import FormattedDate from "./FormattedDate.js";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-7">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.condition},</li>
            <li>
              Humidity:{" "}
              <span className="accent-color">{props.data.humidity}%</span>,
            </li>
            <li>
              {" "}
              Wind:{" "}
              <span className="accent-color">
                {Math.round(props.data.wind)} km/h
              </span>
            </li>
          </ul>
        </div>
        <div className="col-5">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="Cloudy"
            className="weather-icon"
          />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
      </div>
    </div>
  );
}

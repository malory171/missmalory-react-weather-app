import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
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
          <div className="clearfix">
            <div className="weather-icon float-right">
              <WeatherIcon code={props.data.icon} size={80} />
            </div>
            <div className="float-right">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

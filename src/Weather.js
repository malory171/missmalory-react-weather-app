import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      date: "Wednesday 11:54",
      condition: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <header>
          <img
            alt="logo"
            width="150"
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/139/422/original/Miss_Malory's_Weather_App.png?1723737636"
          />
        </header>
        <form>
          <div className="row">
            <div className="col-7">
              <input
                className="btn btn-outline-secondary input-custom w-100"
                type="search"
                placeholder="Enter a city..."
              />
            </div>
            <div className="col-5">
              <input
                type="submit"
                value="Search"
                className="btn btn-custom w-100"
              />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-7">
            <h1>{weatherData.city}</h1>
            <ul>
              <li>{weatherData.date}</li>
              <li class="text-capitalize">{weatherData.condition},</li>
              <li>
                Humidity:{" "}
                <span className="accent-color">{weatherData.humidity}%</span>,
              </li>
              <li>
                {" "}
                Wind:{" "}
                <span className="accent-color">
                  {Math.round(weatherData.wind)} km/h
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
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
        </div>
        <footer>
          Coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/135692-malory-mezierre"
            target="_blank"
            rel="noreferrer"
          >
            Malory Mézierre
          </a>{" "}
          🔆 and{" "}
          <a
            href="https://github.com/malory171/missmalory-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    );
  } else {
    let city = "London";
    let apiKey = "a3ab2befb0aeo33880eb42d02209d3et";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
}

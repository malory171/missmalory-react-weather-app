import React from "react";

import "./Weather.css";

export default function Weather() {
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
          <h1>London</h1>
          <ul>
            <li>Wednesday 11:54</li>
            <li>
              Cloudy, Precipitation: <span className="accent-color">10%</span>,
            </li>
            <li>
              Humidity: <span className="accent-color">90%</span>, Wind:{" "}
              <span className="accent-color">20 km/h</span>
            </li>
          </ul>
        </div>
        <div className="col-5">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="Cloudy"
          />
          <span className="temperature">9</span>
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
        </a>
        🔆and{" "}
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
}

import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
export default function Weather(props) {
  const [weatherdata, setWeatherdata] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherdata({
      ready: true,
      temprature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      date: "Sat 11:00 am",
    });
  }

  if (weatherdata.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a City..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <h1>{weatherdata.city}</h1>
        <ul>
          <li>{weatherdata.date}</li>
          <li className="text-capitalize">{weatherdata.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearFix">
              <img
                src={weatherdata.icon}
                alt={weatherdata.description}
                className="float-left "
              ></img>
              {/* <div className="float-left"> */}
              <span className="temperature">
                {Math.round(weatherdata.temprature)}
              </span>
              <span className="unit">°C</span>
              {/* </div> */}
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li> Humidity: {weatherdata.humidity}%</li>
              <li>Wind: {weatherdata.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "9a740d7fbaf516b932eb59f405516e16";
    let apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
    return "Loading...";
  }
}

import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import WeatherForcast from "./WeatherForcast";
import "./Weather.css";

import axios from "axios";

export default function Weather(props) {
  const [weatherdata, setWeatherdata] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherdata({
      ready: true,
      coordinates: response.data.coord,
      temprature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }
  function search() {
    const apiKey = "9a740d7fbaf516b932eb59f405516e16";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherdata.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a City..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
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
        <WeatherInfo data={weatherdata} />
        <WeatherForcast coordinates={weatherdata.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a City..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primery" />
          </div>
        </div>
      </form>

      <h1>New York, NY, USA</h1>
      <ul>
        <li>Saturday 11:00</li>
        <li>Mostly sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly sunny"
          ></img>
          6°
        </div>
        <div className="col-6">
          <ul>
            <li> Precipitation: 1%</li>
            <li> Humidity: 45%</li>
            <li>Wind: 3 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

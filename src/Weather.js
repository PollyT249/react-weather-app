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
              placeholder="Enter a city.."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-warning w-100"
            />
          </div>
        </div>
      </form>
      <h1 className="mb-3">Tallinn</h1>
      <ul>
        <li>Tuesday 18:44</li>
        <li>Light snow</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/snow-night.png"
            alt="Light Snow"
          />
          <span className="temperature">1</span>
          <span className="unit">℃</span>
        </div>

        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 93%</li>
            <li>Wind: 3km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

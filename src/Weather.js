import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Tuesday 18:44",
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      iconUrl:
        "https://shecodes-assets.s3.amazonaws.com/api/weather/icons/snow-day.png",
    });
  }

  if (weatherData.ready) {
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
        <div className="row">
          <div className="col-6">
            <h1 className="mb-3">
              {weatherData.city}, {weatherData.date}
            </h1>

            <div className="text-capitalize">{weatherData.description}</div>
            <ul>
              <li>Humidity: {Math.round(weatherData.humidity)} %</li>
              <li>Wind: {Math.round(weatherData.wind)} m/sec</li>
            </ul>
          </div>

          <div className="col-6">
            <img src={weatherData.iconUrl} alt={weatherData.description} />

            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">℃</span>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "6bfa54f242cbb59343d4e58db578dc61";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return <p>Loading...</p>;
  }
}

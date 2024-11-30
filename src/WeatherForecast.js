import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
  let latitude = props.coordinates.latitude;
  let longitude = props.coordinates.longitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="clear-sky-day" width={60} height={60} />
        </div>
        <div className="WeatherForecast-temperatures">
          <span className="WeatherForecast-temperature-max">19°</span>
          <span className="WeatherForecast-temperature-min">10°</span>
        </div>
      </div>
    </div>
  );
}

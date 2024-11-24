import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import FormattedDate from "./FormattedDate.js";
import WeatherTemperature from "./WeatherTemperature.js";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li className="mb-2">
              <FormattedDate
                date={props.data.date}
                desc={props.data.description}
              />
            </li>
            <li>
              Humidity: <strong>{props.data.humidity}%</strong>
            </li>
            <li>
              Wind: <strong>{Math.round(props.data.wind)} km/h</strong>
            </li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-8">
          <div className="temperature-container d-flex justify-content-end">
            <WeatherIcon code={props.data.icon} />
            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

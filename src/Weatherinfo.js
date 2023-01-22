import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
        <div className="row">
        <div className="col-6">
            <h2>{props.data.city}</h2>
             <p>
             <FormattedDate date={props.data.date} />
             </p>
            <p>
                Humidity: <span className="humidity">{props.data.humidity}</span>%
                <br />
                Wind: <span className="wind">{props.data.wind}</span>km/h
            </p>
            </div>
    <div className="col-3">
      <p className="sneaky">
        <span className="sneaky">
          {props.data.description}
        </span>
        <br />
        <div className="sneaky">
            <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </p>
    </div>
    <div className="col-2">
      <WeatherIcon
        code={props.data.icon}
        size={100}
      />
    </div>
  </div>
  </div>
  );
}
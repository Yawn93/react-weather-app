import React, { useState, useEffect } from "react";
import "./forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
  
    useEffect(() => {
      setLoaded(false);
    }, [props.coordinates]);
  
    function handleResponse(response) {
      setForecast(response.data.daily);
      setLoaded(true);
    }
  
    function load() {
      let apiKey = "a9cbe15c4bc17314f8d7985a3c6af64c";
      let longitude = props.coordinates.lon;
      let latitude = props.coordinates.lat;
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  
      axios.get(apiUrl).then(handleResponse);
    }
  
    if (loaded) {
      return (
        <div className="WeatherForecast">
          <div className="row">
            {forecast.map(function (dailyForecast, index) {
              if (index < 5) {
                return (
                  <div className="col" key={index}>
                    <ForecastDay data={dailyForecast} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      );
      
    } else {
      load();
  
      return null;
    }
  }
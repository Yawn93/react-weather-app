import './App.css';
import axios from "axios";
import React, { useState } from "react";
import WeatherInfo from './Weatherinfo.js'
import Forecast from './Forecast.js'


export default function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "a9cbe15c4bc17314f8d7985a3c6af64c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
  return (
    <div className="container">
      <h1>How's the weather in</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Lisbon"
              className="form-control search-input"
              autoFocus="on"
              onChange={handleCityChange}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              className="btn btn-primary w-100"
              value="Go!"
            />
          </div>
        </div>
      </form>
      <WeatherInfo data={weatherData}/>
      <Forecast coordinates={weatherData.coordinates}/>
      <p>
          <a href="https://github.com/Yawn93/react-weather-app">Open-source</a> code by Beatriz St.Aubyn
        </p>
    </div>
  );
} else {
  search();
  return "Loading...";
}
}
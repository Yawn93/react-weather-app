import "./forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div class="container">
        <div class="row">
          <div class="col-2">
            <span class="date">Monday</span>
            <img
              src={require("./cloudy.png")}
              alt=""
              id="icon"
              className="cloudysmaller"
            />
            <div class="weather-forecast-temperatures">
              <span class="weather-forecast-temperature-max">
                {" "}
                <strong>14ºC</strong>
              </span>
              <span class="weather-forecast-temperature-min"> 9ºC</span>
            </div>
          </div>
          <div class="col-2">
            <span class="date">Tuesday</span>
            <img
              src={require("./cloudy.png")}
              alt=""
              id="icon"
              className="cloudysmaller"
            />
            <div class="weather-forecast-temperatures">
              <span class="weather-forecast-temperature-max">
                {" "}
                <strong>14ºC</strong>
              </span>
              <span class="weather-forecast-temperature-min"> 9ºC</span>
            </div>
          </div>
          <div class="col-2">
            <span class="date">Wednesday</span>
            <img
              src={require("./cloudy.png")}
              alt=""
              id="icon"
              className="cloudysmaller"
            />
            <div class="weather-forecast-temperatures">
              <span class="weather-forecast-temperature-max">
                {" "}
                <strong>14ºC</strong>
              </span>
              <span class="weather-forecast-temperature-min"> 9ºC</span>
            </div>
          </div>
          <div class="col-2">
            <span class="date">Thursday</span>
            <img
              src={require("./cloudy.png")}
              alt=""
              id="icon"
              className="cloudysmaller"
            />
            <div class="weather-forecast-temperatures">
              <span class="weather-forecast-temperature-max">
                {" "}
                <strong>14ºC</strong>
              </span>
              <span class="weather-forecast-temperature-min"> 9ºC</span>
            </div>
          </div>
          <div class="col-2">
            <span class="date">Friday</span>
            <img
              src={require("./cloudy.png")}
              alt=""
              id="icon"
              className="cloudysmaller"
            />
            <div class="weather-forecast-temperatures">
              <span class="weather-forecast-temperature-max">
                {" "}
                <strong>14ºC</strong>
              </span>
              <span class="weather-forecast-temperature-min"> 9ºC</span>
            </div>
          </div>
        </div>
        <br />
        <p>
          <a href="https://github.com/Yawn93/react-weather-app">Open-source</a> code by Beatriz St.Aubyn
        </p>
      </div>
    </div>
  );
}
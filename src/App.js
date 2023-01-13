import './App.css';

export default function App() {
  return (
    <div className="container">
      <h1>How's the weather in</h1>
      <form id="search-form">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Lisbon"
              class="form-control search-input"
              id="city-input"
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
      <div className="row">
        <div className="col-6">
          <h2 id="city">Lisbon</h2>
          <p id="date">Monday, 15:00</p>
          <p>
            Humidity: <span id="humidity">12</span>%
            <br />
            Wind: <span id="wind">12</span>km/h
          </p>
        </div>
        <div className="col-3">
          <p className="sneaky">
            <span id="description" className="sneaky">
              Cloudy
            </span>
            <br />
            <div className="sneaky">
              <strong id="temperature"></strong>
              <span className="sneaky">12°C | ºF</span>
            </div>
          </p>
        </div>
        <div className="col-2">
          <img
            src={require("./cloudy.png")}
            alt=""
            id="icon"
            className="cloudy"
          />
        </div>
      </div>
    </div>
  );
}
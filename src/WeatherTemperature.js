import React, {useState} from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertTofahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertTocelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
  return (
    <div>
     <span className="temperature">{Math.round(props.celsius)}</span>
     <span>ºC</span> | <span><a href="/" onClick={convertTofahrenheit}>ºF</a></span>
    </div>
  );
  } else {
    let fahrenheit= (props.celsius * 9) / 5 + 32;
    return (
      <div>
     <span className="temperature">{Math.round(fahrenheit)}</span>
     <span><a href="/" onClick={convertTocelsius}>ºC</a></span> | <span>ºF</span>
    </div>
    );
  }
}
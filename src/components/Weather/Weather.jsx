import React, { useEffect, useState } from "react";
import "./Weather.scss"

const Weather = (props) => {
  const { latitude, longitude } = props;
  const [weather, setWeather] = useState({
    time: "",
    condition: "",
    icon: "",
    temp: "",
    name: "",
    country: "",
    city: "",
    area: "",
    isDay: "",
  });

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=b20c01555bb54eeea2f122344221502&q=${latitude},${longitude}&aqi=no`
    )
      .then((response) => response.json())
      .then((forecast) => {
        setWeather({
          time: new Date().getHours(),
          condition: forecast.current.condition.text,
          icon: forecast.current.condition.icon,
          temp: forecast.current.temp_c,
          area: forecast.location.name,
          city: forecast.location.region,
          country: forecast.location.country,
          isDay: forecast.current.is_day,
        });
      });
  }, [latitude, longitude]);

  const dayOrNight = () => {
      if(weather.time < 12) {
          return "Good Morning!"
      } else if(weather.time >= 12 && weather.time < 18) {
          return "Good Afternoon!"
      } else if(weather.time >= 18 && weather.time < 24) {
          return "Good Evening!"
      }
  };

  return <div className="weather">
      <h1>{dayOrNight()}</h1>
      <p>{`The current weather in ${weather.area}, ${weather.city}, ${weather.country} is `}<span>{weather.condition}</span>.</p>
      <img src={weather.icon} alt="" />
      <p>{`The temperature is `}<span>{weather.temp}<sup>o</sup>c</span></p>
  </div>;
};

export default Weather;

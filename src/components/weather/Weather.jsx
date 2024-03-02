
import { useState,useEffect } from 'react';
import './Weather.css'
import temperature from '../../assets/temperature.png';
import wind from '../../assets/wind.png'
import humidity from '../../assets/humidity.png'
export default function Weather() {
    const [weather, setWeather] = useState();
  const weatherData = () => {
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=ba58c518ea934e8596b171103232209&q=India&aqi=no"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const inputDate = new Date(data.location.localtime);
        const date = `${
          +inputDate.getMonth() + 1
        }-${inputDate.getDate()}-${inputDate.getFullYear()}`;
        const time = `${inputDate.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}`;
        data.location.date = date;
        data.location.time = time;
        setWeather(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    weatherData();
  }, []);
  return (
    <div className="weather-details">
      <div className="weather-header">
        <span>{weather && weather.location.date}</span>
        <span>{weather && weather.location.time}</span>
      </div>
      <div className="weather-footer">
        <div className="day-condition">
          <img
            src={weather && weather.current.condition.icon}
            alt="weather_condition"
          />
          <span>{weather && weather.current.condition.text}</span>
        </div>
        <div className="border"></div>
        <div className="temprature-pressure">
          {`${weather && weather.current.temp_c}°C`}
          <span>
            <img src={temperature} alt="temprature" />
            {`${weather && weather.current.pressure_mb} mbar`}
            <br /> Pressure
          </span>
        </div>
        <div className="border"></div>
        <div className="wind-humidity">
          <span>
            <img src={wind} alt="wind" />
            {weather && weather.current.wind_kph}
            <br />
            Wind
          </span>
          <span>
            <img src={humidity} alt="humidity" />
            {`${weather && weather.current.humidity} %`}
            <br />
            Humidity
          </span>
        </div>
      </div>
    </div>
  );
}

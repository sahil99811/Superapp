import  { useState, useEffect } from 'react';
import './Weather.css';
import temperatureIcon from '../../assets/temperature.png';
import windIcon from '../../assets/wind.png';
import humidityIcon from '../../assets/humidity.png';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        "https://api.weatherapi.com/v1/current.json?key=ba58c518ea934e8596b171103232209&q=India&aqi=no"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      const inputDate = new Date(data.location.localtime);
      const date = `${inputDate.getMonth() + 1}-${inputDate.getDate()}-${inputDate.getFullYear()}`;
      const time = inputDate.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true });
      data.location.date = date;
      data.location.time = time;
      setWeather(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchWeatherData();
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
            alt="weathercondition"
          />
          <span>{weather && weather.current.condition.text}</span>
        </div>
        <div className="border"></div>
        <div className="temprature-pressure">
          {`${weather && weather.current.temp_c}°C`}
          <span>
            <img src={temperatureIcon} alt="temperature" />
            {`${weather && weather.current.pressure_mb} mbar`}
            <br /> Pressure
          </span>
        </div>
        <div className="border"></div>
        <div className="wind-humidity">
          <span>
            <img src={windIcon} alt="wind" />
            {weather && weather.current.wind_kph}
            <br />
            Wind
          </span>
          <span>
            <img src={humidityIcon} alt="humidity" />
            {`${weather && weather.current.humidity} %`}
            <br />
            Humidity
          </span>
        </div>
      </div>
    </div>
  );
};

export default Weather;

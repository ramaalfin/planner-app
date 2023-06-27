import React, { useState, useEffect } from 'react';

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          'https://api.openweathermap.org/data/2.5/weather?q=jakarta&appid=0fab38d0666bb250ae7050b4970bc047&units=metric'
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div>
      <h2>Weather Widget</h2>
      {weatherData ? (
        <div>
          <p>City: {weatherData.name}</p>
          <p>Temperature: {weatherData.main.temp.toFixed(1)}°C</p>
          <p>Weather: {weatherData.weather[0].main}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherWidget;

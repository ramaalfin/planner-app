import React, { useState } from 'react';

const LocationWidget = () => {
  const [locationData, setLocationData] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          fetch(
            `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=0fab38d0666bb250ae7050b4970bc047`
          )
            .then((response) => response.json())
            .then((data) => setLocationData(data[0]));
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  return (
    <div>
      <h2>Location Widget</h2>
      {locationData ? (
        <div>
          <p>Latitude: {locationData.lat}</p>
          <p>Longitude: {locationData.lon}</p>
          <p>Area Name: {locationData.name}</p>
          <p>Country: {locationData.country}</p>
        </div>
      ) : (
        <button onClick={getLocation}>Get Current Location</button>
      )}
    </div>
  );
};

export default LocationWidget;
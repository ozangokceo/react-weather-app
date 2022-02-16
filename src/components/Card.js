import React, { useState, useEffect } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import logo from '../assets/logo192.png';
import axios from 'axios';

import './Card.css';

const api = {
  key: '20e361c21e4e4846806210103221401',
  base: 'https://api.worldweatheronline.com/premium/v1/weather.ashx',
};

function Card({ location, locationDeleteHandler }) {
  const [weather, setWeather] = useState({});
  const [spinnerDisplay, setSpinnerDisplay] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function requestHandler() {
      const { key, base } = api;

      try {
        const response = await axios.get(`${base}?key=${key}&q=${location}&format=json`);
        const conditions = await response.data['data']['current_condition'];
        console.log(response);

        const degreesC = await conditions[0]['temp_C'];
        const degreesF = await conditions[0]['temp_F'];
        const description = await conditions[0]['weatherDesc'][0]['value'];
        const weatherIconURL = await conditions[0]['weatherIconUrl'][0]['value'];
        const windSpeed = await conditions[0]['windspeedKmph'];

        setSpinnerDisplay(false);

        setWeather({
          degreesC,
          degreesF,
          description,
          weatherIconURL,
          windSpeed,
        });
      } catch (err) {
        console.log(err);
        setSpinnerDisplay(false);
        setError(true);
      }
    }
    requestHandler();

    return;
  }, [location, error, spinnerDisplay]);

  const { degreesC, degreesF, description, weatherIconURL, windSpeed } = weather;

  return (
    <div className='card-container'>
      <div className='card-svg' onClick={() => locationDeleteHandler(location)}>
        <MdOutlineClose />
      </div>
      {spinnerDisplay ? <img className='card-spinner' src={logo} alt='spinner' /> : error ? <h3>Couldn't load the content!</h3> : <img src={weatherIconURL} alt='weather-img' />}

      <h2>{location}</h2>
      <h3>{description}</h3>
      <h4>TempC: {degreesC}</h4>
      <h4>TempF: {degreesF}</h4>
      <h4>Wind speed: {windSpeed}</h4>
    </div>
  );
}

export default Card;

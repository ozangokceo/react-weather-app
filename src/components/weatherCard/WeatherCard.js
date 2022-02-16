import React, { useState, useEffect } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import axios from 'axios';

import './WeatherCard.css'

const api = {
  key: '20e361c21e4e4846806210103221401',
  base: 'https://api.worldweatheronline.com/premium/v1/weather.ashx',
};

function WeatherCard({ location, locationDeleteHandler }) {
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
    <div className="weatherCard">
      <div id="san-francisco" className="card">
      <div className="card-header">
      <div className='card-svg' onClick={() => locationDeleteHandler(location)}>
        <MdOutlineClose />
      </div>
      <div className="left-side">
      <h2 className="city">{location}</h2>
      <span className="currently-weather">{description}</span>
      <div className="wind"><span className="wind-icon"></span>8<span className="mph">mph</span></div>
      <span className="temperature">63°</span>
      </div>
      <div className="weather-icon">
        <svg version="1.1" id="partially" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="284.211px" height="215.49px" viewBox="0 0 284.211 215.49" enableBackground="new 0 0 284.211 215.49" xmlSpace="preserve">
        <g>
        <path fill="none" stroke="#030404" strokeWidth="10" strokeMiterlimit="10" d="M224.063,100.195
        c-0.059,0-0.115,0.004-0.174,0.004c-2.263-32.052-28.963-57.356-61.591-57.356c-27.598,0-50.961,18.103-58.88,43.08
        c-2.833-0.571-5.765-0.874-8.767-0.874c-23.84,0-43.251,18.912-44.078,42.551c-1.327-0.127-2.67-0.198-4.03-0.198
        C23.6,127.402,5,146.001,5,168.946s18.6,41.544,41.544,41.544h177.52c30.457,0,55.147-24.69,55.147-55.147
        C279.211,124.886,254.521,100.195,224.063,100.195z"></path>
        <path fill="none" stroke="#030404" strokeWidth="10" strokeMiterlimit="10" d="M51.042,122.567
        C30.616,112.425,16.576,91.352,16.576,67c0-34.242,27.758-62,62-62c27.608,0,51.001,18.045,59.029,42.984"></path>
        </g>
        </svg>
      </div>
      <div className="header-bg"></div>
      <div className="clearfix"></div>
    </div>
    <div className="coming-weather">
      <div className="col">
        <span className="day">Mon</span>
        <div className="weather-icon">
          <svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="284.211px" height="177.646px" viewBox="0 0 284.211 177.646" enableBackground="new 0 0 284.211 177.646" xmlSpace="preserve">
          <path fill="none" stroke="#030404" strokeWidth="10" strokeMiterlimit="10" d="M224.063,62.352c-0.059,0-0.115,0.004-0.174,0.004
            C221.627,30.305,194.927,5,162.299,5c-27.598,0-50.961,18.103-58.881,43.08c-2.833-0.571-5.764-0.874-8.766-0.874
            c-23.841,0-43.252,18.912-44.078,42.551c-1.327-0.128-2.67-0.198-4.03-0.198C23.6,89.558,5,108.157,5,131.103
            c0,22.943,18.6,41.543,41.544,41.543h177.52c30.457,0,55.147-24.689,55.147-55.146C279.211,87.042,254.521,62.352,224.063,62.352z"></path>
          </svg>
        </div>
      </div>
      <div className="col">
        <span className="day">Tue</span>
        <div className="weather-icon">
          <svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="284.211px" height="215.49px" viewBox="0 0 284.211 215.49" enableBackground="new 0 0 284.211 215.49" xmlSpace="preserve">
          <g>
          <path fill="none" stroke="#030404" strokeWidth="10" strokeMiterlimit="10" d="M224.063,100.195
          c-0.059,0-0.115,0.004-0.174,0.004c-2.263-32.052-28.963-57.356-61.591-57.356c-27.598,0-50.961,18.103-58.88,43.08
          c-2.833-0.571-5.765-0.874-8.767-0.874c-23.84,0-43.251,18.912-44.078,42.551c-1.327-0.127-2.67-0.198-4.03-0.198
          C23.6,127.402,5,146.001,5,168.946s18.6,41.544,41.544,41.544h177.52c30.457,0,55.147-24.69,55.147-55.147
          C279.211,124.886,254.521,100.195,224.063,100.195z"></path>
          <path fill="none" stroke="#030404" strokeWidth="10" strokeMiterlimit="10" d="M51.042,122.567
          C30.616,112.425,16.576,91.352,16.576,67c0-34.242,27.758-62,62-62c27.608,0,51.001,18.045,59.029,42.984"></path>
          </g>
          </svg>
        </div>
      </div>
      <div className="col">
        <span className="day">Wed</span>
        <div className="weather-icon">
          <svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="284.211px" height="290.824px" viewBox="0 0 284.211 290.824" enableBackground="new 0 0 284.211 290.824" xmlSpace="preserve">
          <g>
          <path fill="none" stroke="#030404" strokeWidth="10" strokeMiterlimit="10" d="M224.063,62.352c-0.059,0-0.115,0.004-0.174,0.004
          C221.627,30.305,194.927,5,162.299,5c-27.598,0-50.961,18.103-58.881,43.08c-2.833-0.571-5.764-0.874-8.766-0.874
          c-23.841,0-43.252,18.912-44.078,42.551c-1.327-0.128-2.67-0.198-4.03-0.198C23.6,89.558,5,108.157,5,131.103
          c0,22.944,18.6,41.543,41.544,41.543h177.52c30.457,0,55.147-24.689,55.147-55.147C279.211,87.042,254.521,62.352,224.063,62.352z"></path>
          <line fill="none" stroke="#030404" strokeWidth="10" strokeLinecap="round" strokeMiterlimit="10" x1="210.105" y1="201.824" x2="169.105" y2="285.824"></line>
          <line fill="none" stroke="#030404" strokeWidth="10" strokeLinecap="round" strokeMiterlimit="10" x1="169.105" y1="201.824" x2="128.105" y2="285.824"></line>
          <line fill="none" stroke="#030404" strokeWidth="10" strokeLinecap="round" strokeMiterlimit="10" x1="128.105" y1="201.824" x2="87.105" y2="285.824"></line>
          <line fill="none" stroke="#030404" strokeWidth="10" strokeLinecap="round" strokeMiterlimit="10" x1="87.105" y1="201.824" x2="46.105" y2="285.824"></line>
          </g>
          </svg>
        </div>
      </div>		
      <div className="clearfix"></div>
    </div>
  </div>
    </div>
  )
}

export default WeatherCard
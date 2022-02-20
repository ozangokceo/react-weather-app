import React, { useEffect } from 'react';
import WeatherCard from './weatherCard/WeatherCard';

import './Main.css';

function Main({ locationArray, locationDeleteHandler }) {
  useEffect(() => {});

  return (
    <React.Fragment>
      <div className='main-header'>
        <div className='main-text-container'>
          <h1>Welcome to the React WeatherApp</h1>
          {locationArray.length === 0 ? <p>Please add cards to main area..</p> : <p>Please select a card to display weather..</p>}
        </div>
      </div>
      <main className='main-container'>
      {locationArray.map((item, index) => (
        <WeatherCard key={Math.random()} city={item} location={locationArray[index]} locationDeleteHandler={locationDeleteHandler}/>
      ))}
      </main>
    </React.Fragment>
  );
}

export default Main;

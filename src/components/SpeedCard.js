import React from 'react';

import './SpeedCard.css';

function setSpeedCard({ speed, setSpeed, setDisplaySpeed }) {
  function setSpeedHandler(e) {
    console.log('setspeed fired!');
    console.log(e.target.value);
    if (speed < 0.25 && e.target.value === '+') return;

    switch (e.target.value) {
      case '+':
        setSpeed(speed / 1.2);
        break;
      case '-':
        setSpeed(speed * 1.2);
        break;
      case 'reset':
        setSpeed(5);
        break;
      case 'close':
        setDisplaySpeed(false);
        break;
      default:
    }
  }

  return (
    <div className='speed-card'>
      <p className='speed-text'>Speed:</p>
      <div className='buttons-container'>
        <button
          onClick={(e) => setSpeedHandler(e)}
          value='+'
          type='button'
          className='button-plus'
        >
          +
        </button>
        <button
          onClick={(e) => setSpeedHandler(e)}
          value='-'
          type='button'
          className='button-minus'
        >
          -
        </button>
      </div>
      <div className='buttons-container-reset'>
        <button
          onClick={(e) => setSpeedHandler(e)}
          value='reset'
          type='button'
          className='button-reset'
        >
          Reset
        </button>
        <button
          onClick={(e) => setSpeedHandler(e)}
          value='close'
          type='button'
          className='button-close'
        >
          X
        </button>
      </div>
    </div>
  );
}

export default setSpeedCard;

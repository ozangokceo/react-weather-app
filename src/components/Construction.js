import React from 'react';
import image from '../assets/under-construction.jpg';

import './Construction.css';

function Construction() {
  return (
    <div className='construction-container'>
      <img className='construction-img' src={image} alt='construction' />
    </div>
  );
}

export default Construction;

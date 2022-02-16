import React from 'react';
import { Link } from 'react-router-dom';

import './MobileMenu.css';

function MobileMenu({ displayMobileMenu }) {
  return (
    <div>
      <ul
        className={displayMobileMenu ? 'mobile-links-list' : 'mobile-links-list hidden'}>
        <Link to='/'>
          <li className='navbar-link'>Home</li>
        </Link>
        <Link to='/construction'>
          <li className='navbar-link'>Site Map</li>
        </Link>
        <Link to='/construction'>
          <li className='navbar-link'>Services</li>
        </Link>
      </ul>
    </div>
  );
}

export default MobileMenu;

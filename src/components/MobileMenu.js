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
        <Link to='/techstack'>
          <li className='navbar-link'>Tech Stack</li>
        </Link>
        <Link to='/construction'>
          <li className='navbar-link'>About</li>
        </Link>
        <Link to='/construction'>
          <li className='navbar-link'>Projects</li>
        </Link>
      </ul>
    </div>
  );
}

export default MobileMenu;

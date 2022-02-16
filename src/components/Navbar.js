import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

import logo from '../assets/logo192.png';
import Searchbar from './Searchbar';
import './Navbar.css';
import SpeedCard from './SpeedCard';
import MobileMenu from './MobileMenu';

function Navbar({ updateHandler }) {
  const [displaySpeed, setDisplaySpeed] = useState(false);
  const [speed, setSpeed] = useState(5);
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);

  const styles = {
    animationDuration: `${speed}s`,
  };

  return (
    <div className='navbar-container'>
      <div className='logo-searchbar-container'>
        {displaySpeed && (
          <SpeedCard
            setSpeed={setSpeed}
            speed={speed}
            setDisplaySpeed={setDisplaySpeed}
          />
        )}
        <div className='logo-container'>
          <img
            onDoubleClick={() => setDisplaySpeed(true)}
            style={styles}
            className='logo'
            src={logo}
            alt='logo'
          />
          <h1 className='title-text'>
            React Weather<span className='app-text'>App</span>
          </h1>
        </div>
        <div className='searchbar-container'>
          <Searchbar updateHandler={updateHandler} />
        </div>
      </div>
      <ul className='navbar-links-list'>
        <Link to='/'>
          <li className='navbar-link'>Home</li>
        </Link>
        <Link to='/techstack'>
          <li className='navbar-link'>Tech Stack</li>
        </Link>
        <Link to='/construction'>
          <li className='navbar-link'>About</li>
        </Link>
      </ul>
      <div
        className='menu-icon-container'
        onClick={() => setDisplayMobileMenu((prevState) => !prevState)}
      >
        <MobileMenu displayMobileMenu={displayMobileMenu} />
        <GiHamburgerMenu />
      </div>
      <div className='mobile-side-text'>
        React Weather<span className='app-text'>App</span>
      </div>
    </div>
  );
}

export default Navbar;

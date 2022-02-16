import React, { useRef, useEffect } from 'react';
import { BiWorld } from 'react-icons/bi';
import logo from '../assets/logo192.png';

import './Dropdown.css';

/*update function prop comes from <App /> ,via prop chain..
update function is used for updating city , and that data is intended to be read from
<Main /> companent for displaying cards, depending on city info
*/

function Dropdown({
  isSearching,
  setIsSearching,
  updateHandler,
  cityList,
  spinnerDisplay,
}) {
  const listRef = useRef(null);

  useEffect(() => {
    function outsideDetect(e) {
      if (e.target.id !== 'dropdown-item' && e.target.id !== 'searchbar') {
        setIsSearching(false);
      }
      if (e.target.id === 'searchbar' && !isSearching) {
        setIsSearching(true);
      }
    }
    window.addEventListener('click', outsideDetect);

    return () => {
      window.removeEventListener('click', outsideDetect);
    };
  }, [isSearching, setIsSearching]);

  return (
    <div className={spinnerDisplay ? 'dropdown dropdown-spinner' : 'dropdown'}>
      <ul className='dropdown-list'>
        {spinnerDisplay ? (
          <img className='spinner' src={logo} alt='spinner' />
        ) : (
          cityList.slice(0, 10).map((item) => (
            <div key={Math.random()} className='list-item-container'>
              <BiWorld />
              <li
                id='dropdown-item'
                onClick={() => updateHandler(item.name)}
                className='list-item'
                ref={listRef}
                // key={Math.random().toFixed(10)}
              >
                {item.name}, {item.country}
              </li>
            </div>
          ))
        )}
      </ul>
    </div>
  );
}

export default Dropdown;

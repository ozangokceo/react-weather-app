import React, { useState, useEffect, useRef } from 'react';
import Dropdown from './Dropdown';
import cities from 'cities.json';
// import { MdLocationSearching } from 'react-icons/md';

import './Searchbar.css';

function Searchbar({ updateHandler }) {
  const [isSearching, setIsSearching] = useState(false); //dropdown opens , depending on this boolean state
  const [searchWord, setSearchWord] = useState(''); //searchword state
  const [cityList, setCityList] = useState([]); //searchword state
  const [spinnerDisplay, setSpinnerDisplay] = useState(false); //spinner displays if an error message

  const inputRef = useRef(null);

  useEffect(() => {
    function searchDisplay() {
      if (searchWord.length !== 0) {
        setIsSearching(true);
        return;
      }
      setIsSearching(false);
    }
    searchDisplay();

    function spinnerDisplay() {
      if (searchWord.length === 2 || searchWord.length === 1) {
        setSpinnerDisplay(true);
        return;
      }
      setSpinnerDisplay(false);
    }
    spinnerDisplay();

    function filterHandler() {
      return cities
        .filter((value) =>
          value.name.toLowerCase().includes(searchWord.toLowerCase().trim())
        )
        .slice(0, 10)
        .sort((a, b) => a.name.localeCompare(b.name));
    }

    setCityList(() => [...filterHandler()]);
  }, [searchWord]);


  return (
    <div className='searchbar-container'>
      {/* <MdLocationSearching /> */}
      <input
        id='searchbar'
        type='search'
        placeholder='Search..'
        onChange={() => setSearchWord(inputRef.current.value)}
        ref={inputRef}
        autoComplete='off'
      />
      {isSearching && (
        <Dropdown
          isSearching={isSearching}
          setIsSearching={setIsSearching}
          updateHandler={updateHandler}
          cityList={cityList}
          spinnerDisplay={spinnerDisplay}
        />
      )}
    </div>
  );
}

export default Searchbar;

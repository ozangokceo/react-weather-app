import React, { useState, useEffect, useRef } from 'react';
import Dropdown from './Dropdown';
import axios from 'axios';
import cities from 'cities.json';
// import { MdLocationSearching } from 'react-icons/md';

import './Searchbar.css';

const api = {
  key: 'qbAm3gKhivuDAkstlyU3vWJSlpIzQ8cm',
  base: 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete',
};

function Searchbar({ updateHandler }) {
  const [isSearching, setIsSearching] = useState(false); //dropdown opens , depending on this boolean state
  const [searchWord, setSearchWord] = useState(''); //searchword state
  const [searchAPIData, setSearchAPIData] = useState([]); //searchword state
  const [spinnerDisplay, setSpinnerDisplay] = useState(false); //spinner displays if an error message
  const [error, setError] = useState(false);

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

    async function requestHandler() {
      const { key, base } = api;

      try {
        const response = await axios.get(`${base}?apikey=${key}&q=${searchWord}&format=json`);
        const responseList = await response.data
        setSearchAPIData(responseList)
        console.log(searchAPIData);
 
      } catch (err) {
        console.log(err);
        setError(true);
      }
    }
    requestHandler();

    return;
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
          searchAPIData={searchAPIData}
          spinnerDisplay={spinnerDisplay}
        />
      )}
    </div>
  );
}

export default Searchbar;

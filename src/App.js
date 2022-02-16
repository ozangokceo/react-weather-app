import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import Construction from './components/Construction';
import TechStack from './components/TechStack';

import './App.css';

function App() {
  const [locationArray, setLocationArray] = useState([]);

  function locationAddHandler(location) {
    //this function is passed as a prop to <Dropdown /> component, in a chained way
    setLocationArray((prevState) => [...prevState, location]);
  }

  function locationDeleteHandler(deletedLocation) {
    setLocationArray((prevState) =>
      [...prevState.filter((location) => location !== deletedLocation)]
    );
  }

  // console.log(locationArray);

  return (
    <div>
      <Router>
        <Navbar updateHandler={locationAddHandler} />
        <Routes>
          <Route
            exact
            path='/'
            element={<Main locationArray={locationArray} locationDeleteHandler={locationDeleteHandler}/>}
          />
          <Route path='/construction' element={<Construction />} />
          <Route path='/techstack' element={<TechStack />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

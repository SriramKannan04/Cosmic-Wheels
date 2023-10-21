import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';

import Homepage from './Homepage';
import Navbar from './Navbar';
import SportsCars from './SportsCars';
import SedanCars from './SedanCars';
import SUVcars from './SUVcars';
import ElectricCars from './ElectricCars';
import Contact from './Contact';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/Homepage' exact element={<Homepage />}/>
          <Route path='/SportsCars' exact element={<SportsCars />}/>
          <Route path='/SedanCars' exact element={<SedanCars />}/>
          <Route path='/SUVcars' exact element={<SUVcars />}/>
          <Route path='/ElectricCars' exact element={<ElectricCars />}/>
          <Route path='/Contact' exact element={<Contact />}/>
        </Routes>
        {/* <Contact /> */}
      </Router>
    </div>
  )
}

export default App
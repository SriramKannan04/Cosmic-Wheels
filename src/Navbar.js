import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className="Navbar">
        <div className="logo">
            <Link className='a' to="/Homepage"><img src="./img/cosmic wheels.png" alt="" srcset="" className='logoSize'/></Link>
        </div>
        <div className="box">
          <Link className='navCon' to="/SportsCars">Sports Cars</Link>
          <Link className='navCon' to="/SedanCars">Luxurious Cars</Link>
          <Link className='navCon' to="/SUVcars">SUV Cars</Link>
          <Link className='navCon' to="/ElectricCars">Electric Cars</Link>
        </div>
    </div>
  )
}

export default Navbar;
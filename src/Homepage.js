import React from 'react';
import './Homepage.css';

function Homepage() {
  return (
    <div className='homeCon'>
      <center><div className="Title">        
          
          <h1 className="TitleName">Cosmic Wheels</h1>
          <h1 className="TitleName">Cosmic Wheels</h1>
          
      </div></center>

      <div className="expand">
        <center><h2 className='exp'>Here you can spot the most <span className='swap'></span> cars</h2></center>
      </div>


      <div className="homeCar">
        <img src="./img/BMW.png" alt="" srcset="" className="cars"/>
        <img src="./img/benz.png" alt="" srcset="" className='cars2' />
      </div>
    </div>
  )
}

export default Homepage;

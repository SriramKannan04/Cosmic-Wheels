import React from 'react';
import './ElectricCars.css';

function ElectricCars() {
  return (
    <div className='carCards1'>

      <div class="sample1">
        <div class="test1">
          <img src="./img/ev-tata.png" alt="" srcset="" className='carImg11'/>

          <p className='carContent1'>
             <h3>Tata Nexon EV</h3>
             <h5><span>Price</span>  <span>₹14.70 Lakhs </span></h5>
             <h5><span>Battery Capacity</span>  <span>45kWh</span></h5>
             <h5><span>DriveTrain</span> <span>Automatic</span></h5>
             <h5><span>Range</span> <span>450Km</span></h5>
          </p>
        </div>
            
        <div className="more1">
          <a href="https://nexonev.tatamotors.com/">
            <button className='morebtn1'>More</button>
          </a>
        </div>
      </div>

      <div class="sample1">
        <div class="test1">
          <img src="./img/ev-hyundai.png" alt="" srcset="" className='carImg1'/>

          <p className='carContent1'>
             <h3>Hyundai Kona Electric</h3>
             <h5><span>Price</span>  <span>₹23.00 Lakh </span></h5>
             <h5><span>Battery capacity</span>  <span>40kWh</span></h5>
             <h5><span>DriveTrain</span> <span>Automatic</span></h5>
             <h5><span>Range</span> <span>450Km</span></h5>
          </p>
        </div>
            
        <div className="more1">
          <a href="https://www.hyundai.com/in/en/find-a-car/kona-electric/highlights">
            <button className='morebtn1'>More</button>
          </a>
        </div>
      </div>

      <div class="sample1">
        <div class="test1">
          <img src="./img/ev-kia.png" alt="" srcset="" className='carImg1'/>

          <p className='carContent1'>
             <h3>Kia EV6</h3>
             <h5><span>Price</span>  <span>₹60.00 Lakh </span></h5>
             <h5><span>Battery capacity</span>  <span>50kWh</span></h5>
             <h5><span>DriveTrain</span> <span>Automatic</span></h5>
             <h5><span>Range</span> <span>500km</span></h5>
          </p>
        </div>
            
        <div className="more1">
          <a href="https://www.kia.com/in/our-vehicles/ev6/showroom.html">
            <button className='morebtn1'>More</button>
          </a>
        </div>
      </div>

      <div class="sample1">
        <div class="test1">
          <img src="./img/ev-volvo.png" alt="" srcset="" className='carImg1'/>

          <p className='carContent1'>
             <h3>Volvo XC40 Recharge</h3>
             <h5><span>Price</span>  <span>₹56.00 Lakh </span></h5>
             <h5><span>Battery capacity</span>  <span>60kWh</span></h5>
             <h5><span>DriveTrain</span> <span>Automatic</span></h5>
             <h5><span>Range</span> <span>462Km</span></h5>
          </p>
        </div>
            
        <div className="more1">
          <a href="https://www.volvocars.com/in/cars/xc40-electric/">
            <button className='morebtn1'>More</button>
          </a>
        </div>
      </div>


    </div>
  )
}

export default ElectricCars;
import React from 'react';
import './SedanCars.css';


function SedanCars() {
  return (
    <div className='carCards'>
      <div class="sample">
        <div class="test">
          <img src="./img/sedan-benz.png" alt="" srcset="" className='carImg'/>

          <p className='carContent'>
             <h3>Mercedes-Benz Maybach</h3>
             <h5><span>Price</span>  <span>₹2.69 Crore </span></h5>
             <h5><span>Engine</span>  <span>3985cc</span></h5>
             <h5><span>DriveTrain</span> <span>AWD</span></h5>
             <h5><span>Top Speed</span> <span>250Kmph</span></h5>
          </p>
        </div>
            
        <div className="more">
          <a href="https://www.mercedes-benz.co.in/passengercars/models/saloon/mercedes-maybach-s-class/overview.html">
            <button className='morebtn'>More</button>
          </a>
        </div>
      </div>

      <div class="sample">
        <div class="test">
          <img src="./img/sedan-jaguar.png" alt="" srcset="" className='carImg'/>

          <p className='carContent01'>
             <h3>Jaguar XF</h3>
             <h5><span>Price</span>  <span>₹50.00 Lakh </span></h5>
             <h5><span>Engine</span>  <span>1997cc</span></h5>
             <h5><span>DriveTrain</span> <span>RWD</span></h5>
             <h5><span>Top Speed</span> <span>200Kmph</span></h5>
          </p>
        </div>
            
        <div className="more">
          <a href="https://www.jaguar.com/jaguar-range/xf/index.html">
            <button className='morebtn'>More</button>
          </a>
        </div>
      </div>

      <div class="sample">
        <div class="test">
          <img src="./img/sedan-bmw.png" alt="" srcset="" className='carImg'/>

          <p className='carContent01'>
             <h3>BMW 3 Series Gran Limousine</h3>
             <h5><span>Price</span>  <span>₹70.00 Lakh </span></h5>
             <h5><span>Engine</span>  <span>1995cc</span></h5>
             <h5><span>DriveTrain</span> <span>RWD</span></h5>
             <h5><span>Top Speed</span> <span>250Kmph</span></h5>
          </p>
        </div>
            
        <div className="more">
          <a href="https://www.bmw.in/en/all-models/3-series/gran-limousine/2022/bmw-3-series-long-wheelbase-highlight.html">
            <button className='morebtn'>More</button>
          </a>
        </div>
      </div>

      <div class="sample">
        <div class="test">
          <img src="./img/sedan-maserati.png" alt="" srcset="" className='carImg'/>

          <p className='carContent'>
             <h3>Maserati Quattroporte </h3>
             <h5><span>Price</span>  <span>₹2.00 Crore </span></h5>
             <h5><span>Engine</span>  <span>3000cc</span></h5>
             <h5><span>DriveTrain</span> <span>RWD</span></h5>
             <h5><span>Top Speed</span> <span>270Kmph</span></h5>
          </p>
        </div>
            
        <div className="more">
          <a href="https://www.maserati.com/in/en/models/quattroporte">
            <button className='morebtn'>More</button>
          </a>
        </div>
      </div>
      
    </div>
  );
}

export default SedanCars; 























/* import React from 'react';
import './SedanCars.css';

function Country(props) {
  return (
    <div className='test'>
      <p className='carContent'>{props.car}</p>
    </div>
  );
}

function SedanCars() {
  return (
    <div className='carCards'>
      <div className="sample">
        <div className="test">
          <img src="./img/benz2.png" alt="Benz" className='carImg'/>
          <Country car="This is a Benz car This is a Benz car This is a Benz car This is a Benz car This is a Benz car This is a Benz car" />
        </div>
      </div>
    </div>
  );
}

export default SedanCars; */





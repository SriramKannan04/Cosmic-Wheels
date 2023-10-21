import React from 'react';
import './SportsCars.css';

function SportsCars() {
  return (
    <div className='carCards3'>

      <div class="sample3">
        <div class="test3">
          <img src="./img/sports-benz.png" alt="" srcset="" className='carImg3'/>

          <p className='carContent31'>
             <h3>Mercedes-Benz AMG A35 </h3>
             <h5><span>Price</span>  <span>₹58.00 Lakh </span></h5>
             <h5><span>Engine</span>  <span>1991cc</span></h5>
             <h5><span>DriveTrain</span> <span>AWD</span></h5>
             <h5><span>Top Speed</span> <span>250Kmph</span></h5>
          </p>
        </div>
            
        <div className="more3">
          <a href="https://www.mercedes-amg.com/en/vehicles/a-class/sedan.html"><button className='morebtn3'>More</button></a>
        </div>
      </div>

      <div class="sample3">
        <div class="test3">
          <img src="./img/sports-jaguar.png" alt="" srcset="" className='carImg3'/>

          <p className='carContent3'>
             <h3>Jaguar F-Type</h3>
             <h5><span>Price</span>  <span>₹99.96 Lakh </span></h5>
             <h5><span>Engine</span>  <span>1997cc</span></h5>
             <h5><span>DriveTrain</span> <span>AWD</span></h5>
             <h5><span>Top Speed</span> <span>245Kmph</span></h5>
          </p>
        </div>
            
        <div className="more3">
        <a href="https://www.jaguar.in/jaguar-range/f-type/index.html"><button className='morebtn3'>More</button></a>
        </div>
      </div>

      <div class="sample3">
        <div class="test3">
          <img src="./img/sports-bmw.png" alt="" srcset="" className='carImg3'/>

          <p className='carContent3'>
             <h3>BMW M2</h3>
             <h5><span>Price</span>  <span>₹98.00 Lakh </span></h5>
             <h5><span>Engine</span>  <span>2993cc</span></h5>
             <h5><span>DriveTrain</span> <span>Automatic</span></h5>
             <h5><span>Top Speed</span> <span>252Kmph</span></h5>
          </p>
        </div>
            
        <div className="more3">
        <a href="https://www.bmw.in/en/all-models/m-series/m2-coupe/2023/bmw-2-series-coupe-m-automobiles-overview.html"><button className='morebtn3'>More</button></a>
        </div>
      </div>

      <div class="sample3">
        <div class="test3">
          <img src="./img/sports-Maserati.png" alt="" srcset="" className='carImg3'/>

          <p className='carContent31'>
             <h3>Maserati MC20</h3>
             <h5><span>Price</span>  <span>₹3.50 Crore </span></h5>
             <h5><span>Engine</span>  <span>3000cc</span></h5>
             <h5><span>DriveTrain</span> <span>RWD</span></h5>
             <h5><span>Top Speed</span> <span>325Kmph</span></h5>
          </p>
        </div>
            
        <div className="more3">
        <a href="https://www.maserati.com/in/en/models/mc20"><button className='morebtn3'>More</button></a>
        </div>
      </div>


    </div>
  )
}

export default SportsCars;
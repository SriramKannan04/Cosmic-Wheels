import React from 'react';
import './SUVcars.css';

function SUVcars() {
  return (
    <div className='carCards'>

      <div class="sample2">
        <div class="test2">
          <img src="./img/suv-bentley.png" alt="" srcset="" className='carImg2'/>

          <p className='carContent2'>
             <h3>Bentley Bentayga</h3>
             <h5><span>Price</span>  <span>₹4.00 Crore </span></h5>
             <h5><span>Engine</span>  <span>3996cc</span></h5>
             <h5><span>DriveTrain</span> <span>AWD</span></h5>
             <h5><span>Top Speed</span> <span>290Kmph</span></h5>
          </p>
        </div>
            
        <div className="more2">
          <a href="https://www.bentleymotors.com/en/models/bentayga.html">
            <button className='morebtn2'>More</button>
          </a>
        </div>
      </div>

      <div class="sample2">
        <div class="test2">
          <img src="./img/suv-Porsche.png" alt="" srcset="" className='carImg21'/>

          <p className='carContent2'>
             <h3>Porsche Cayenne</h3>
             <h5><span>Price</span>  <span>₹1.36 Crore </span></h5>
             <h5><span>Engine</span>  <span>2995cc</span></h5>
             <h5><span>DriveTrain</span> <span>AWD</span></h5>
             <h5><span>Top Speed</span> <span>280Kmph</span></h5>
          </p>
        </div>
            
        <div className="more2">
          <a href="https://www.porsche.com/international/models/cayenne/cayenne-models/cayenne/">
            <button className='morebtn2'>More</button>
          </a>
        </div>
      </div>

      <div class="sample2">
        <div class="test2">
          <img src="./img/suv-LandRover.png" alt="" srcset="" className='carImg21'/>

          <p className='carContent21'>
             <h3>Land Rover Discovery Sport</h3>
             <h5><span>Price</span>  <span>₹71.00 Lakh </span></h5>
             <h5><span>Engine</span>  <span>1997cc</span></h5>
             <h5><span>DriveTrain</span> <span>AWD</span></h5>
             <h5><span>Top Speed</span> <span>210Kmph</span></h5>
          </p>
        </div>
            
        <div className="more2">
          <a href="https://www.landrover.in/discovery/discovery-sport/index.html">
            <button className='morebtn2'>More</button>
          </a>
        </div>
      </div>

      <div class="sample2">
        <div class="test2">
          <img src="./img/suv-lexus.png" alt="" srcset="" className='carImg21'/>

          <p className='carContent2'>
             <h3>Lexus LX</h3>
             <h5><span>Price</span>  <span>₹3.00 Crore </span></h5>
             <h5><span>Engine</span>  <span>3346cc</span></h5>
             <h5><span>DriveTrain</span> <span>AWD</span></h5>
             <h5><span>Top Speed</span> <span>210Kmph</span></h5>
          </p>
        </div>
            
        <div className="more2">
          <a href="https://www.lexus.com/models/LX">
            <button className='morebtn2'>More</button>
          </a>
        </div>
      </div>


    </div>
  )
}

export default SUVcars;
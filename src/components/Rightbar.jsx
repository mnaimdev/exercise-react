import React, { useContext, useState } from 'react';

import { FaLocationDot } from "react-icons/fa6";



import './Rightbar.css';


const Rightbar = ({data}) => {

  const [breakTime, setBreakTime] = useState("0m");

  const handleBreak = (time) => {
    setBreakTime(time);
  }

 
  return (
    <>
      <div className='rightbar-container'>
        <div className="bio-container">
            <div >
                <img src='/naim.jpg' className="bio-image" alt="" />
            </div>

            <div className="bio-text">
              <h3>Mohammad Naim</h3>
              <p><FaLocationDot />Dhaka, Bangladesh</p>
            </div>
            
        </div>

        <div className="about-container">
          <div>
            <p><b>62</b>kg</p>
            <small>Weight</small>
          </div>

          <div>
              <p><b>5.6</b></p>
              <small>Height</small>
          </div>

          <div>
              <p><b>24.3</b>yrs</p>
              <small>Age</small>
          </div>
        </div>

        <div className="break-container">
          <h3>Add A Break</h3>

          <div className='break-btn-container'>
            <button className='break-btn' onClick={() => handleBreak('15m')}>15m</button>
            <button className='break-btn' onClick={() => handleBreak('30m')}>30m</button>
            <button className='break-btn' onClick={() => handleBreak('1h')}>1h</button>
            <button className='break-btn' onClick={() => handleBreak('2h')}>2h</button>
          </div>
        </div>


        <div className="exercise-details">
          <h3>Exercise Details</h3>
          <div className='exercise-time'>
            <p>Exercise time</p>
            <p>0m</p>
          </div>

          <div className='break-time'>
            <p>Break time</p>
            <p>{breakTime}</p>
          </div>

          <button className='complete-btn'>Complete</button>
        </div>
      </div>
    </>
  )
}

export default Rightbar
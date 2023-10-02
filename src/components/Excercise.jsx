import React, { createContext, useState } from 'react'

import { FaPersonWalking } from "react-icons/fa6";


import './Excercise.css';
import Rightbar from './Rightbar';

const Excercise = ({exercise}) => {

   
  return (
    <>

        <div className='excercise-container'>
            <FaPersonWalking className='icon' />
            <span className='heading'>Exercise Planner</span>
            <div className="underline"></div>

            <div className="excercise">
                {
                    exercise.map((item) => {
                        const {id, title, text, age, time, image} = item;
                        return (
                            <div key={id} className='exercise-item'>
                                <img src={image} alt="" className='exercise-img' />
                                <h3>{title}</h3>
                                <p className='exercise-text'>{text.slice(0, 40)+ '...'}</p>
                                <p className='exercise-age'>Age: {age}</p>
                                <p className='time'>Time: {time}</p>
                                <button className='exercise-btn' onClick={() => setExerciseTime(time)}>Add to List</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Excercise
import { useEffect, useState } from 'react';

import data from './data';

import './App.css'
import Excercise from './components/Excercise';
import Rightbar from './components/Rightbar';

function App() {

  const [exercise, setExercise] = useState([]);

  useEffect(() => {
    setExercise(data);
  }, []);


  return (
    <>
    <div className="container">
      <Excercise exercise={exercise} />
      <Rightbar data={exercise} />
    </div>
    </>
  )
}

export default App

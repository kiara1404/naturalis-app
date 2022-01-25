import React, { useState, useEffect } from 'react';
import Detail from './Detail';
import Home from './Home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import * as d3 from 'd3';


export default function App() {
  const [person, setPerson] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const endpoint = 'data_2.json';
      const response = await fetch(endpoint);
      const data = await response.json()
      const item = data
      setPerson(item)
      console.log(data)
    }
    fetchData();
  }, [])



  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail:id' element={<Detail />} />
        </Routes>
        <div>{person && person.kingdom}</div>
      </div>
    </Router>



  );
}

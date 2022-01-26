import React, { useState, useEffect } from 'react';
import Detail from './components/Detail';
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { QuestionProvider } from './components/QuestionContext';
// import { QuestionProvider } from './components/QuestionContext';


export default function App() {

  useEffect(() => {
    async function fetchData() {
      const endpoint = 'data_2.json';
      const response = await fetch(endpoint);
      const data = await response.json()
      console.log(data)
    }
    fetchData();
  }, [])



  return (
    <QuestionProvider>
      <Router>
        <div className='app'>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/detail' element={<Detail />} />
          </Routes>

        </div>
      </Router>
    </QuestionProvider>


  );
}

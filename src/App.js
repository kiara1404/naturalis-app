import React, { useState } from 'react';
import Detail from './Detail';
import Home from './Home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


export default function App() {


  return (
    <Router>
      <div className='app'>
    <Routes>
      <Route path='/' element={<Home />} />
          <Route path='/detail' element={<Detail />} />
    </Routes>
      </div>
    </Router>

  );
}
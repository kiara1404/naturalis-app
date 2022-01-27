import React, { useEffect } from 'react';
import Detail from './components/Detail';
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CurrentQuestionProvider } from './components/CurrentQuestionContext';
import LandingsPage from './components/LandingsPage';
import { ScoreProvider } from './components/ScoreContext'


export default function App() {





  return (
    <CurrentQuestionProvider>
      <ScoreProvider>
        <Router>
          <div className='app'>

            <Routes>
              <Route path='/' element={<LandingsPage />} />
              <Route path='/home' element={<Home />} />
              <Route path='/detail' element={<Detail />} />
            </Routes>

          </div>
        </Router>
      </ScoreProvider>
    </CurrentQuestionProvider>


  );
}

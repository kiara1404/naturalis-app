import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home  from './Home'

// const handleNextQuestion = () => {
// const nextQuestion = currentQuestion + 1;
// setCurrentQuestion(nextQuestion)
// }
export default function Detail() {

    return (
        <div className='Detail'>
            <header className="header">
                <ul>
                    <li><a>Favorieten</a></li>
                    <li><a>Opslaan</a></li>
                </ul>
            </header>
            <div className='container'>
                <button>bekijk familieboom</button>
                <div className="wrapper-detail">
                    <div className='photo-block'>
                        <img src="placeholder2.png"></img>
                    </div>
                    <div className='info-block'>
                        <h1> Aziatische Olifant</h1>
                        <h4>Elephas maximus</h4>
                        <div class='data'>
                            <p className='description'>De draagtijd van de Aziatische
                            olifant Is 660 dagen. Dit vertaalt
                        Naar 22 maanden.    </p>
                        <div className='location'>
                                <p>Waar gevonden</p>
                                <p>Azie</p>
                        </div>
                         <div className='eventDate'>
                            <p>Wanneer bij museum gekomen</p>
                            <p>24-4-1998</p>
                            </div>  
                            <p className='occurrenceRemark'>De olifant is in gevangenschap geboren in 1970 in Hannover Zoo</p>

                        </div>
                        <a className='btn-primary'>Opslaan</a>
                    </div>

                </div>
                <div className='sidebar'>
                    <div></div>

                </div>
            </div>
            <Link to='/'>
            <button className='new-question'>Nieuwe vraag</button>
            </Link>
        </div>

    )
}
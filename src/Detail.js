import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import  questions from './Home'
import App from './App'
import { shuffle } from 'd3';



export default function Detail() {

    const [object, setObject] = useState(null);

    const test = React.useCallback((event) => {
        alert('btn clicked')
}, []);

// const handleNextQuestion = () => {
//     const nextQuestion = currentQuestion + 1;
//     if (nextQuestion < questions.length) {
//         setCurrentQuestion(nextQuestion)
//     }
// }

useEffect(() => {
    fetch('data_2.json')
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data)
            setObject(data[0])
        })
}, [])



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
                    {object && <h4>{object.name}</h4>}
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
        <Link to='/' onClick={test}>
            <button className='new-question'>Nieuwe vraag</button>
        </Link>
    </div>

)
}
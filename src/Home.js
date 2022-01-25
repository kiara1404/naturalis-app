import React, { useState, useEffect } from 'react';
import Detail from './Detail';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



export default function Home() {



    const questions = [
        {
            questionText: 'Welke van de onderstaande dieren heeft de langste draagtijd?',
            answerOptions: [
                { answerText: 'Aziatische olifant', scientificName: 'Elephas maximus', value: '660 dagen', isCorrect: true },
                { answerText: 'Lama', value: '358 dagen', isCorrect: false },
                { answerText: 'Chimpansee', value: '225 dagen', isCorrect: false }
            ],
        },
        {
            questionText: 'Welke van de onderstaande vogels heeft de grootste spanwijdte?',
            answerOptions: [
                { answerText: 'witte pelikaan', value: '271,5 mm', isCorrect: false },
                { answerText: 'Zuidelijke gele vleermuis', value: '345 mm', isCorrect: false },
                { answerText: 'Ringsnavelmeeuw', value: '1150 mm', scientificName: 'Larus delawarensis', isCorrect: true },
            ],
        },
        {
            questionText: 'Welke van de onderstaande dieren heeft de kortste draagtijd?',
            answerOptions: [
                { answerText: 'Kaspische rob', value: '11 maanden', isCorrect: false },
                { answerText: 'Antilopegrondeekhoorn', value: '32.5 dagen', isCorrect: false },
                { answerText: 'Bosspitsmuis', scientificName: 'Sorex araneus', value: '20 dagen', isCorrect: true }
            ],
        },
        {
            questionText: 'Welk van de onderstaande dieren heeft de meeste jongen per zwangerschap?',
            answerOptions: [
                { answerText: '	karetschildpad', value: '128', isCorrect: false },
                { answerText: 'Gewone octopus', scientificName: 'Octopus vulgaris', value: '80000', isCorrect: true },
                { answerText: 'Kortsnuitzeepaardje', value: '865', isCorrect: false },
            ],
        },
        {
            questionText: 'Welk van de onderstaande organismen heeft de langst gemeten levensduur?',
            answerOptions: [
                { answerText: 'Zomereik', scientificName: 'Quercus robur', value: '930 jaar', isCorrect: true },
                { answerText: '	Witte spar', value: '668 jaar', isCorrect: false },
                { answerText: 'Moerasden', value: '458 jaar', isCorrect: false }
            ],
        },
    ]

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [show, setShow] = useState(false);
    const [clicked, setClicked] = useState(false)

    const [object, setObject] = useState(null);


    const handleCorrectAnswer = (isCorrect) => {

        setShow(true)

        setClicked(true)


    }

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
        <div className='app'>

            <div className="wrapper">

                <>
                    <div className='question-section'>
                        {/* {object && <h1>{object.kingdom}</h1>} */}


                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section'>

                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <>
                                <div className="answers">

                                    <button className={`answer-button ${
                                        clicked && answerOption.isCorrect ? 'correct' : null
                                        }`}
                                        onClick={() => handleCorrectAnswer(answerOption.isCorrect)}><img src="placeholder.jpeg"></img></button>
                                    <h3 className={`answer-h3 ${
                                        clicked && answerOption.isCorrect ? 'correct-h3' : null
                                        }`}>{answerOption.answerText}</h3>

                                    {show ? <p className={`answer-p ${
                                        clicked && answerOption.isCorrect ? 'correct-p' : null}`}>  {answerOption.value} </p> : null}


                                </div>

                            </>
                        ))}

                    </div>
                </>
                <Link to='/detail'>
                    {
                        show ? <button className="btn-verder">Verder</button> : null
                    }
                </Link>


            </div>
        </div>


    );
} 
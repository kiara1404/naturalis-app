import React, { useState } from 'react';
import Detail from './Detail';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


export default function Home() {
    const questions = [
        {
            questionText: 'Test vraag 1',
            answerOptions: [
                { answerText: 'Antwoord 1', photo: '/public/placeholder.jpeg', isCorrect: false },
                { answerText: 'Antwoord 2', isCorrect: true },
                { answerText: 'Antwoord 3', isCorrect: false }
            ],
        },
        {
            questionText: 'Test vraag 2',
            answerOptions: [
                { answerText: 'Antwoord 1', isCorrect: false },
                { answerText: 'Antwoord 2', isCorrect: false },
                { answerText: 'Antwoord 3', isCorrect: false },
            ],
        },
        {
            questionText: 'Test vraag 3',
            answerOptions: [
                { answerText: 'Antwoord 1', isCorrect: false },
                { answerText: 'Antwoord 2', isCorrect: false },
                { answerText: 'Antwoord 3', isCorrect: true }
            ],
        },
        {
            questionText: 'Test vraag 4',
            answerOptions: [
                { answerText: 'Antwoord 1', isCorrect: false },
                { answerText: 'Antwoord 2', isCorrect: true },
                { answerText: 'Antwoord 3', isCorrect: false },
            ],
        },
        {
            questionText: 'Test vraag 5',
            answerOptions: [
                { answerText: 'Antwoord 1', isCorrect: true },
                { answerText: 'Antwoord 2', isCorrect: false },
                { answerText: 'Antwoord 4', isCorrect: false }
            ],
        },
    ]

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [show, setShow] = useState(false);
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)]

    const handleAnswerButtonClick = (isCorrect) => {
        if (isCorrect) {
            alert('dit is het goede antwoord')
            setShow(true)
        } else {
            alert('fout antwoord')

        }
    }

    return (
        <div className='app'>

            <div className="wrapper">

                <>
                    <div className='question-section'>

                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section'>

                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <>
                                <div className="answers">
                                    <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}><img src="placeholder.jpeg"></img></button>
                                    <h3>{answerOption.answerText}</h3>
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
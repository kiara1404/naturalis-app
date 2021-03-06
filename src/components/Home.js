import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CurrentQuestionContext } from './CurrentQuestionContext';
import { ScoreContext } from './ScoreContext';




export default function Home({ data }) {
    const questions = [
        {
            questionText: 'Welke van de onderstaande dieren heeft de langste draagtijd?',
            answerOptions: [
                { answerText: 'Aziatische olifant', photo: 'Elephas-maximus.jpeg', scientificName: 'Elephas maximus', id: '0', value: '660 dagen', isCorrect: true },
                { answerText: 'Lama', value: '358 dagen', photo: '220px-Llama,_peru,_machu_picchu.jpeg', isCorrect: false },
                { answerText: 'Chimpansee', value: '225 dagen', photo: '220px-Lightmatter_chimp.jpeg', isCorrect: false }
            ],
        },
        {
            questionText: 'Welke van de onderstaande vogels heeft de grootste spanwijdte?',
            answerOptions: [
                { answerText: 'witte pelikaan', photo: 'American_White_Pelican.jpeg', value: '271,5 mm', isCorrect: false },
                { answerText: 'Zuidelijke gele vleermuis', photo: '220px-Naturalis_Biodiversity_Center_-_RMNH.MAM.17371.b_ven_-_lasiurus_Ega_Ega_-_skin.jpeg', value: '345 mm', isCorrect: false },
                { answerText: 'Ringsnavelmeeuw', value: '1150 mm', photo: 'Ring-billed_gull_in_Red_Hook_(42799).jpeg', scientificName: 'Larus delawarensis', id: '1', isCorrect: true },
            ],
        },
        {
            questionText: 'Welke van de onderstaande dieren heeft de kortste draagtijd?',
            answerOptions: [
                { answerText: 'Kaspische rob', value: '11 maanden', photo: '220px-Каспийский_тюлень.jpeg', isCorrect: false },
                { answerText: 'Antilopegrondeekhoorn', value: '32.5 dagen', photo: '220px-White_Tailed_Squirrel.jpeg', isCorrect: false },
                { answerText: 'Bosspitsmuis', scientificName: 'Sorex araneus', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Sorex_araneus2.JPG/220px-Sorex_araneus2.JPG', value: '20 dagen', id: '2', isCorrect: true }
            ],
        },
        {
            questionText: 'Welk van de onderstaande dieren heeft de meeste jongen per zwangerschap?',
            answerOptions: [
                { answerText: '	karetschildpad', value: '128', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Loggerhead_sea_turtle.jpg/220px-Loggerhead_sea_turtle.jpg', isCorrect: false },
                { answerText: 'Gewone octopus', scientificName: 'Octopus vulgaris', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Octopus_vulgaris2.jpg/220px-Octopus_vulgaris2.jpg', value: '80000', id: '3', isCorrect: true },
                { answerText: 'Kortsnuitzeepaardje', value: '865', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Hippocampus_hippocampus_%28on_Ascophyllum_nodosum%29.jpg/220px-Hippocampus_hippocampus_%28on_Ascophyllum_nodosum%29.jpg', isCorrect: false },
            ],
        },
        {
            questionText: 'Welk van de onderstaande organismen heeft de langst gemeten levensduur?',
            answerOptions: [
                { answerText: 'Zomereik', scientificName: 'Quercus robur', value: '930 jaar', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Paprastasis_azuolas.JPG/220px-Paprastasis_azuolas.JPG', id: '4', isCorrect: true },
                { answerText: '	Witte spar', value: '668 jaar', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Picea_glauca_Fairbanks.jpg/220px-Picea_glauca_Fairbanks.jpg', isCorrect: false },
                { answerText: 'Moerasden', value: '458 jaar', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Longleaf_8246.jpg/220px-Longleaf_8246.jpg', isCorrect: false }
            ],
        },
    ]

    useEffect(() => {
        const nextQuestion = Math.floor(Math.random() * questions.length);
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion)
        }
    
    }, [])


    const [currentQuestion, setCurrentQuestion] = useContext(CurrentQuestionContext)
    const [show, setShow] = useState(false);
    const [clicked, setClicked] = useState(false)

    const [score, setScore] = useContext(ScoreContext)

    const [object, setObject] = useState(null);


    const handleCorrectAnswer = (isCorrect) => {
        if(isCorrect)
        {
            setShow(true)
            setClicked(true)
            setScore(score + 1)
        }
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
                setObject(data)
            })
    }, [])




    return (
        <div className='Home'>
            <svg id="Group_505" data-name="Group 505" xmlns="http://www.w3.org/2000/svg" width="502.524" height="808.225" viewBox="0 0 502.524 808.225">
                <defs>
                    <clipPath id="clipPath">
                        <rect id="Rectangle_354" data-name="Rectangle 354" width="502.524" height="808.225" fill="none" />
                    </clipPath>
                </defs>
                <g id="Group_504" data-name="Group 504" clipPath="url(#clipPath)">
                    <path id="Path_388" data-name="Path 388" d="M75.423,513.258c-9.121-4.841-25.488,9.759-33.1,16.553C-6.873,573.688-.212,648.42.936,659.473c.756,7.277,10.2,87,71.729,126.9,90.111,58.442,222.818-13.366,284.153-63.452,89.927-73.436,116.492-173.734,129.661-223.46,5.531-20.88,22-88.645,13.794-176.56-3.418-36.592-18.577-198.89-99.316-237.254-10.072-4.786-30.165-11.92-55.175-30.347C310.279,29.145,314,16.425,293.366,5.646c-31.82-16.625-53.272,7.044-148.973,24.829C90.252,40.536,80.955,35.964,64.388,49.786c-28.38,23.676-41.534,70.826-33.1,107.591,3.41,14.875,8.494,19.942,13.794,44.141,4.6,21.014,1.427,26.814,5.517,55.175,5.745,39.83,13.463,47.124,16.554,49.658,10.664,8.746,16.866,2.358,30.346,11.035,16.74,10.774,13.347,24.6,30.346,44.14,7.033,8.086,21.9,25.177,38.623,24.829,30.416-.633,47.054-58.536,57.933-55.175,7.624,2.355.284,31.05,2.76,60.692,5.734,68.646,58.477,74.921,74.486,140.7,19.514,80.172-39.886,148.731-49.658,160.008-23.379,26.984-37.773,25.445-41.381,24.829-19.014-3.248-29.424-30.593-30.347-33.106-8.665-23.585,1.847-37.107-8.275-46.9-8.968-8.674-27.065-7.586-38.623,0-15.128,9.929-16.182,29.1-16.553,35.863-1.292,23.5,12.143,38.072,8.276,41.382-4.412,3.778-29.18-8.979-44.14-30.347C38.451,623.61,96.97,524.7,75.423,513.258" fill="#62397d" />
                    <path id="Path_389" data-name="Path 389" d="M163.7,281.522c-20.591-6.292-28.012-36.717-24.83-57.934,2.613-17.424,14.339-41.719,33.107-44.14,23.075-2.977,50.785,27.893,46.9,57.933-3.552,27.457-33.067,50.9-55.175,44.141" fill="#56065a" />
                </g>
            </svg>


            <div className="wrapper">

                    <div className='score-section'>Je hebt {score} van de {questions.length} vragen goed beantwoord</div>

                        <>

                            <div className='question-section'>
                                <div className='question-text'>{questions[currentQuestion].questionText}</div>
                            </div>
                            <div className='answer-section'>

                                {questions[currentQuestion].answerOptions.map((answerOption) => (
                                    <>
                                        <div className="answers">

                                            <button className={`answer-button ${
                                                clicked && answerOption.isCorrect ? 'correct' : null
                                                }`}
                                                onClick={() => handleCorrectAnswer(answerOption.isCorrect)}><img className='answers-img' src={answerOption.photo}></img></button>
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
                     
                
                {
                    // <Link to={`/detail/${currentQuestion}`}>
                    <Link to='/detail'>
                        {
                            show ?

                                <button className="btn-verder">Verder</button> : null
                        }
                    </Link>
                }








            </div>
        </div>


    );
} 
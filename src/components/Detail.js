import React, { useState, useEffect, createContext, useContext } from 'react';
import { Link } from 'react-router-dom';
import questions from './Home';
import {QuestionContext} from './../components/QuestionContext';





export default function Detail(data) {
    const [currentQuestion, setCurrentQuestion] = useContext(QuestionContext)
    const [object, setObject] = useState(null);
    const url = 'https://api.gbif.org/v1/occurrence/';

    // random volgende vraag > werkt nog niet op de detailpagina > moet ook nog bij einde iets toevoegen + score
    // const handleNextQuestion = () => {
    //     // setClicked(false)
    //     // setShow(false)
    //     const nextQuestion = currentQuestion * questions.length;
    //     if (nextQuestion < questions.length) {
    //         setCurrentQuestion(nextQuestion)
    //     }
    // }

    const handleNextQuestion = () => {
        // setClicked(false)
        // setShow(false)
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion)
        }
    }




    useEffect(() => {
        // const url = 'https://api.gbif.org/v1/occurrence/'

        fetch('data_2.json')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setObject(data[0])
            })
    }, [])

    // fetchData(url + object.id).then((d) => {
    //     setGbifObject(d);
    // })

    //fetchData('https://api.gbif.org/v1/occurrence/' + object.id)


    return (

        <div className='Detail'>
            <svg id="Group_509" data-name="Group 509" xmlns="http://www.w3.org/2000/svg" width="1113.291" height="455.833" viewBox="0 0 1113.291 455.833">
                <defs>
                    <clipPath id="clipPath">
                        <rect id="Rectangle_360" data-name="Rectangle 360" width="1113.291" height="455.833" fill="none" />
                    </clipPath>
                </defs>
                <g id="Group_508" data-name="Group 508" clipPath="url(#clipPath)">
                    <path id="Path_390" data-name="Path 390" d="M1059.819,144.188a420.329,420.329,0,0,0-97.537-37.465c-36.363-9.08-73.777-13.472-111.225-14.1-35.79-.6-71.567,2.191-107.012,7.035-33.027,4.513-65.771,10.822-98.392,17.623-34.734,7.242-69.254,15.239-103.412,24.865q-50.033,14.1-98.92,31.9-46.111,16.757-91.045,36.544-41.838,18.395-82.554,39.212-37.223,19.012-73.445,39.907Q164,308.321,132.56,328.34q-7.044,4.484-14.046,9.037" transform="translate(47.813 37.335)" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="17" />
                    <path id="Path_391" data-name="Path 391" d="M394.138,171.869a256.939,256.939,0,0,0-18.173-57.993c-8.293-18.447-20.469-45.534-47.336-69.832A174.266,174.266,0,0,0,260.963,6.6c-75.475-21.508-156.43,14.193-186.78,40.825A213.322,213.322,0,0,1,33.518,76.452,209.808,209.808,0,0,1,0,91.179C6.9,95.365,15.641,101,25.4,108.188a354.6,354.6,0,0,1,30.762,25.557c19.967,18.42,29.227,30.226,37.963,39.263,30.909,31.972,69.449,43.946,89.717,50.242,22.024,6.842,51.206,15.908,88.193,9.838,21.2-3.478,45.331-7.438,65.6-25.047,8.752-7.607,21.741-22.068,45.693-32.185,4.477-1.89,8.276-3.183,10.818-3.986" transform="translate(0 0)" fill="#f16323" />
                    <path id="Path_392" data-name="Path 392" d="M455.591,189.537c-.271,1.107-2.784.653-4.149,2.6-1.336,1.909.048,3.808-1.264,5.524-1.287,1.686-3.965,1.62-4.245,1.614-5.885-.142-9.89-12.659-10.881-13.149-47.294-23.418-52.521-58.062-204.385-97.793C152.035,67.766,76.377,69.714,29.313,69.086a651.213,651.213,0,0,1,133.4,1.446c29.332,3.342,78.985,9.32,139.97,32.019,88.148,32.81,129.275,74.239,146.625,82,0,0,6.769,3.026,6.287,4.991" transform="translate(11.826 26.766)" fill="#fff" />
                    <path id="Path_393" data-name="Path 393" d="M250.727,94.08c-9.3,7.322-17.21,12.749-22.563,16.264-20.941,13.756-28.3,15.069-40.686,26.764-8.343,7.88-7.563,9.706-15.435,16.172A86.444,86.444,0,0,1,143.2,168.755a47.433,47.433,0,0,0,16.61-3.415c13.065-5.329,14.4-13.115,30.271-25.485,6.087-4.744,12.674-8.512,25.853-16.051,4.2-2.4,7.131-3.983,20.779-11.289,7.292-3.9,17.252-9.23,24.535-13.122l-10.52-5.313" transform="translate(57.772 37.955)" fill="#fff" />
                    <path id="Path_394" data-name="Path 394" d="M232.375,120.4a142.285,142.285,0,0,0-4.363-18.6c-5.05-16.406-9.456-19.912-9.785-31.9-.22-8.077,1.712-8.965.782-15.964a38.544,38.544,0,0,0-9.548-20.368,26.859,26.859,0,0,1,9.6,8.2c5.579,8.147.745,13.627,3.121,27.308.911,5.246,2.918,10.05,6.929,19.655,1.28,3.062,2.243,5.138,6.773,14.764,2.421,5.145,5.73,12.168,8.153,17.3l-11.661-.4" transform="translate(84.504 13.541)" fill="#fff" />
                    <path id="Path_395" data-name="Path 395" d="M261.051,121.061a56.781,56.781,0,0,0-1.862-8.446c-2.25-7.427-4.415-8.951-4.358-14.44.039-3.7,1.036-4.143.695-7.333a15.542,15.542,0,0,0-4.454-9.159,11.949,11.949,0,0,1,4.709,3.58c2.672,3.631.122,6.233,1.069,12.461.363,2.387,1.29,4.551,3.141,8.881.591,1.38,1.04,2.313,3.154,6.641,1.13,2.313,2.675,5.471,3.8,7.778l-5.9.036" transform="translate(101.291 32.954)" fill="#fff" />
                    <path id="Path_396" data-name="Path 396" d="M186.137,102.862c-4.807-7.851-8.948-14.085-11.761-18.218-11-16.168-15.111-19.9-21.379-31.433-4.226-7.768-3.659-8.459-7.709-15.253A118.792,118.792,0,0,0,129.9,17.61a57.064,57.064,0,0,1,9.23,8.679c7.083,8.289,7.323,13.139,15.533,26.467,3.149,5.111,6.649,9.889,13.648,19.445,2.231,3.045,3.795,5.118,11.079,14.737,3.892,5.141,9.208,12.159,13.1,17.288l-6.348-1.364" transform="translate(52.406 7.105)" fill="#fff" />
                    <path id="Path_397" data-name="Path 397" d="M132.911,89.968c-3.329-5.733-6.266-10.242-8.276-13.223-7.858-11.66-11.093-14.148-15.264-22.671-2.811-5.743-2.206-6.377-4.986-11.352A61.715,61.715,0,0,0,93.094,28.249a31.405,31.405,0,0,1,7.236,5.821c5.339,5.786,4.916,9.689,10.613,19.415,2.185,3.729,4.732,7.142,9.827,13.968,1.625,2.175,2.77,3.65,8.115,10.491,2.856,3.656,6.758,8.645,9.609,12.293l-5.583-.269" transform="translate(37.557 11.397)" fill="#fff" />
                    <path id="Path_398" data-name="Path 398" d="M86.954,76.338a44.258,44.258,0,0,0-5.482-5.452c-5.323-4.428-7.814-4.317-10.336-8.619-1.7-2.9-1.089-3.84-2.863-6.116A12.224,12.224,0,0,0,60.331,51.7a10.761,10.761,0,0,1,5.539-.034c3.893,1.222,3.019,4.773,6.711,9.048,1.416,1.639,3.189,2.768,6.735,5.024,1.131.72,1.937,1.176,5.7,3.276,2.01,1.123,4.756,2.654,6.765,3.771l-4.824,3.558" transform="translate(24.34 20.699)" fill="#fff" />
                    <path id="Path_399" data-name="Path 399" d="M277.241,109.435c-5.715,4.53-10.583,7.88-13.879,10.049-12.892,8.481-17.456,9.242-25.047,16.5-5.116,4.892-4.613,6.049-9.448,10.054a51.633,51.633,0,0,1-17.789,9.493,28.621,28.621,0,0,0,10.293-2c8.073-3.241,8.832-8.136,18.586-15.789,3.74-2.936,7.8-5.252,15.925-9.884,2.589-1.476,4.4-2.446,12.813-6.927,4.5-2.4,10.642-5.663,15.133-8.05l-6.588-3.444" transform="translate(85.157 44.15)" fill="#fff" />
                    <path id="Path_400" data-name="Path 400" d="M190.409,79.945c-7.042,7.382-13.166,12.924-17.335,16.53-16.311,14.109-22.635,15.82-31.685,27.443-6.1,7.834-5.1,9.462-11.016,15.958a66.674,66.674,0,0,1-23.047,16.231,38.212,38.212,0,0,0,14.19-4.282c10.719-5.8,10.606-13.069,22.644-25.552,4.616-4.787,9.841-8.71,20.294-16.558,3.33-2.5,5.671-4.158,16.58-11.824,5.828-4.1,13.79-9.685,19.613-13.768l-10.238-4.178" transform="translate(43.299 32.253)" fill="#fff" />
                    <path id="Path_401" data-name="Path 401" d="M138.068,68.6a135.3,135.3,0,0,1-13.64,8.543c-12.705,6.927-17.3,6.731-24.685,13.487-4.978,4.553-4.422,6.04-9.153,9.612a36.431,36.431,0,0,1-17.623,6.948,23.369,23.369,0,0,0,10.342.1c8.042-1.892,8.609-7.493,18.17-14.2,3.666-2.57,7.684-4.332,15.718-7.856,2.561-1.123,4.352-1.836,12.691-5.111,4.456-1.75,10.544-4.137,14.994-5.88q-3.408-2.823-6.815-5.649" transform="translate(29.437 27.675)" fill="#fff" />
                    <path id="Path_402" data-name="Path 402" d="M734.253,150.322a232.182,232.182,0,0,1,19.672,49.547c4.537,16.956,11.2,41.857,6.237,71.8a132.873,132.873,0,0,1-25.649,58.669c-39.837,51.158-115.132,64.606-150.7,60.311a195.172,195.172,0,0,0-43.97-1.065,180.841,180.841,0,0,0-31.144,5.605c2.414-6.241,5.283-14.385,7.99-24.1a276.592,276.592,0,0,0,6.933-32.687c3.483-22.508,3.293-35.246,4.273-45.783,3.479-37.279,23.272-64.1,33.681-78.206,11.312-15.327,26.3-35.636,55.023-49,16.465-7.659,35.207-16.378,58.86-13.63,10.216,1.187,27.137,5.186,49.168.893,4.116-.8,7.437-1.705,9.626-2.351" transform="translate(205.227 60.645)" fill="#62397d" />
                    <path id="Path_403" data-name="Path 403" d="M752.515,104.045c-.8-.651-2.272.867-4.287.143-1.975-.709-2.077-2.707-3.928-3.291a4.66,4.66,0,0,0-3.8.887c-3.958,2.907.231,13.64-.177,14.458-19.454,39.065-3.841,65.977-85.96,166.417-42.518,52.006-95.478,86.72-127.4,109.611a507.105,507.105,0,0,0,90.672-64.645c18.262-16.346,49-44.243,78.236-89.33,42.264-65.171,47.509-113.99,55.109-127.732,0,0,2.964-5.361,1.545-6.518" transform="translate(212.592 40.648)" fill="#fff" />
                    <path id="Path_404" data-name="Path 404" d="M676.388,201.952c-10.435-.726-18.866-.778-24.484-.7-21.982.292-27.757,2.878-42.728.54-10.089-1.575-10.565-3.234-19.547-4.036a76.066,76.066,0,0,0-28.352,2.849,38.612,38.612,0,0,1,13.281-5.515c11.912-2.474,17.141,2.376,34.88,3.525,6.8.441,13.407-.045,26.62-1.017,4.212-.309,7.1-.592,20.5-1.952,7.164-.727,16.946-1.723,24.1-2.453l-4.269,8.763" transform="translate(226.439 77.939)" fill="#fff" />
                    <path id="Path_405" data-name="Path 405" d="M646.641,197.309a130.683,130.683,0,0,1,7.316,15.194c5.628,13.973,4.548,18.545,10.965,27.151,4.326,5.8,6.143,5.5,9.382,10.881a33.438,33.438,0,0,1,4.739,18.91,21,21,0,0,0,2.038-10.36c-.689-8.4-7.04-9.96-12.992-20.737-2.282-4.133-3.568-8.475-6.14-17.16-.82-2.769-1.308-4.69-3.537-13.637-1.192-4.78-2.814-11.31-4-16.083l-7.776,5.843" transform="translate(260.878 77.244)" fill="#fff" />
                    <path id="Path_406" data-name="Path 406" d="M660.928,170.9a52.2,52.2,0,0,1,3.4,6.842c2.572,6.308,1.932,8.415,5.013,12.256,2.077,2.589,3,2.427,4.54,4.839a13.435,13.435,0,0,1,2.021,8.579,9.285,9.285,0,0,0,1.245-4.769c-.18-3.834-3.371-4.452-6.172-9.294-1.074-1.857-1.638-3.824-2.766-7.758-.361-1.255-.57-2.126-1.518-6.186-.507-2.168-1.2-5.131-1.7-7.3l-4.064,2.787" transform="translate(266.642 67.821)" fill="#fff" />
                    <path id="Path_407" data-name="Path 407" d="M617.831,235.439c1.054,7.826,1.669,14.2,2.031,18.451,1.412,16.646.667,21.237,2.756,32.353,1.409,7.492,2.18,7.706,3.166,14.427a97.474,97.474,0,0,1,.723,21.684,45.008,45.008,0,0,0,1.52-10.52c.265-9.221-2.258-12.754-4.014-26.065-.674-5.106-.921-10.143-1.416-20.216-.157-3.211-.234-5.417-.57-15.672-.18-5.48-.422-12.962-.6-18.433q-1.8,2-3.6,3.99" transform="translate(249.255 93.375)" fill="#fff" />
                    <path id="Path_408" data-name="Path 408" d="M587.967,262.568c.894,5.628,1.378,10.209,1.653,13.268,1.071,11.967.232,15.264,2.094,23.261,1.256,5.389,2.022,5.546,2.871,10.381a50.459,50.459,0,0,1,.278,15.585,24.434,24.434,0,0,0,1.736-7.553c.455-6.626-2-9.176-3.481-18.749a130.5,130.5,0,0,1-1-14.533c-.091-2.309-.122-3.895-.248-11.265-.067-3.938-.157-9.317-.222-13.248l-3.68,2.853" transform="translate(237.207 104.778)" fill="#fff" />
                    <path id="Path_409" data-name="Path 409" d="M562.086,284.032a35.108,35.108,0,0,1-.738,6.459c-1.2,5.659-2.965,6.769-2.311,11,.442,2.853,1.381,3.226,1.426,5.677a9.336,9.336,0,0,1-2.977,6.929,8.426,8.426,0,0,0,3.817-2.619c1.992-2.718-.575-4.8-.413-9.578.063-1.83.654-3.472,1.834-6.753.378-1.047.676-1.753,2.091-5.027.756-1.75,1.791-4.139,2.55-5.883l-5.28-.208" transform="translate(224.909 114.589)" fill="#fff" />
                    <path id="Path_410" data-name="Path 410" d="M681.509,171.892c-6.429-.469-11.623-.507-15.084-.463-13.54.17-17.091,1.812-26.32.314-6.219-1.008-6.515-2.063-12.05-2.579a45.41,45.41,0,0,0-17.459,1.792,23.264,23.264,0,0,1,8.168-3.5c7.331-1.566,10.565,1.521,21.494,2.264,4.192.285,8.261-.02,16.4-.627,2.594-.2,4.37-.373,12.627-1.229,4.411-.456,10.435-1.083,14.837-1.544q-1.305,2.785-2.609,5.57" transform="translate(246.336 67.1)" fill="#fff" />
                    <path id="Path_411" data-name="Path 411" d="M643.1,239.971c-8.92-1.846-16.189-2.831-21.046-3.384-19-2.164-24.288-.355-36.934-4.231-8.523-2.612-8.741-4.236-16.4-5.994a60.566,60.566,0,0,0-24.8-.448,31.9,31.9,0,0,1,12.1-3.75c10.566-1.023,14.516,4.153,29.687,7.211,5.819,1.172,11.576,1.446,23.091,1.991,3.67.174,6.193.226,17.921.427,6.266.107,14.824.248,21.08.351l-4.706,7.827" transform="translate(219.437 89.576)" fill="#fff" />
                    <path id="Path_412" data-name="Path 412" d="M607.51,267.391a121.357,121.357,0,0,0-14.086.484c-12.551,1.177-15.591,3.506-24.4,2.268-5.937-.835-6.38-2.149-11.6-2.41a31.029,31.029,0,0,0-15.935,3.507,18.2,18.2,0,0,1,7.034-5c6.564-2.5,10.056,1.175,20.326,1.339,3.939.063,7.67-.611,15.133-1.959,2.379-.429,4-.782,11.535-2.45,4.025-.891,9.522-2.112,13.539-3.006q-.771,3.615-1.542,7.232" transform="translate(218.454 104.957)" fill="#fff" />
                </g>
            </svg>


            <div className='container'>


                <div className="wrapper-detail">

                    <div className='info-block'>
                        {object && <h2>{object.name}</h2>}
                        <div className='photo-block'>
                            <img src="placeholder2.png"></img>
                        </div>

                        <div className='data'>
                            <>
                                <div className='kingdom'>
                                    <p>Kingdom</p>
                                    {object && <p>{object.kingdom}</p>}
                                    {/* <p> {gbifObject.kingdom} </p> */}
                                </div>
                                <div className='class'>
                                    <p>Class</p>
                                    {object && <p>{object.class}</p>}
                                </div>

                                <div className='order'>
                                    <p>Order</p>
                                    {object && <p>{object.order}</p>}
                                </div>
                                <div className='phylum'>
                                    <p>Phylum</p>
                                    {object && <p>{object.order}</p>}
                                </div>

                                <p className='description'>{object && <p>{object.description}</p>}    </p>
                                <div className='location'>
                                    <p>Waar gevonden</p>
                                    {object && <p>{object.place}</p>}
                                </div>
                                <div className='eventDate'>
                                    <p>Wanneer bij museum gekomen</p>
                                    {object && <p>{object.date}</p>}

                                </div>


                            </>
                        </div>
                        {/* <a className='btn-primary'>Opslaan</a> */}
                    </div>

                </div>
                <Link to='/'>
                    <button onClick={handleNextQuestion} className='new-question'>Nieuwe vraag</button>
                </Link>
                <div className='sidebar'>
                    <h4>Uit dezelfde orde</h4>
                    <div></div>

                </div>

            </div>

        </div>


    )
}
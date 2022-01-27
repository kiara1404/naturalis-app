import React, { useState, createContext } from 'react';

export const CurrentQuestionContext = createContext();

export const CurrentQuestionProvider = (props) => {
    const [currentQuestion, setCurrentQuestion] = useState([0]);



    return (
        <CurrentQuestionContext.Provider value={[currentQuestion, setCurrentQuestion]}>
            {props.children}
        </CurrentQuestionContext.Provider>
    )
}
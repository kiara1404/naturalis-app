import React, { useState, createContext } from 'react';

export const QuestionContext = createContext();

export const QuestionProvider = (props) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    

    return (
        <QuestionContext.Provider value={[currentQuestion, setCurrentQuestion]}>
            {props.children}
        </QuestionContext.Provider>
    )
}
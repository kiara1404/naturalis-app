import React, { useState, createContext } from 'react';

export const ShowScoreContext = createContext();

export const ShowScoreProvider = (props) => {
    const [ShowScore, setShowScore] = useState(false);



    return (
        <ShowScoreContext.Provider value={[ShowScore, setShowScore]}>
            {props.children}
        </ShowScoreContext.Provider>
    )
}
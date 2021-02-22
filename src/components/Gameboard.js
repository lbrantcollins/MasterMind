import React from 'react';
import PegRow from './PegRow';

export const Gameboard = () => {

    const difficultyLevel = 4;

    return (
        <React.Fragment>
            <div>Gameboard Component</div>

            <PegRow difficultyLevel={difficultyLevel}/>
        </React.Fragment>
    );
}

export default Gameboard;
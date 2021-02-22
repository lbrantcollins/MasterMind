import React from 'react';
import '../css/pegs.css';

export const PegRow = ({
    difficultyLevel,
}) => {

    return (

        <React.Fragment>
            <div data-test="title">A row of {difficultyLevel} pegs.</div>

            <div>
                <div class="balls" id="red"></div>
                <div class="balls" id="blue"></div>
                <div class="balls" id="black"></div>
                <div class="balls" id="orange"></div>
                <div class="balls" id="green"></div>
                <div class="balls" id="pink"></div>
            </div>
        </React.Fragment>
    );


}

export default PegRow;
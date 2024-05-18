import React, {useState} from "react";
import './ScoreCounter.css';


export const ScoreCounter = ({ score }) => {
    const [userScore, setUserScore] = useState(score);
    const [restrictScoring, setResctrictScoring] = useState(0);

    const handlePlus = () => {
        if(restrictScoring === 0) {
            setUserScore(prev => prev + 1);
            setResctrictScoring(1);
        } else if (restrictScoring === -1) {
            setUserScore(prev => prev + 1);
            setResctrictScoring(0);
        }
    }

    const handleMinus = () => {
        if (restrictScoring === 0) {
            setUserScore(prev => prev - 1);
            setResctrictScoring(-1);
        } else if (restrictScoring === 1) {
            setUserScore(prev => prev - 1);
            setResctrictScoring(0);
        }
    }

    return (
        <div className='score-counter'>
            <div className="score-counter__button-plus" onClick={handlePlus}></div>
            <p className="score-counter__number">
                {userScore}
            </p>
            <div className="score-counter__button-minus" onClick={handleMinus}></div>
        </div>
    )
}
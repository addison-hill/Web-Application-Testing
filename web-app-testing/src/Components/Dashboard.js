import React, { useState, useEffect } from 'react';
import '../App.css';
import Display from './Display';

const Dashboard = () => {
    let [strikeCount, setStrikeCount] = useState(0);
    let [ballCount, setBallCount] = useState(0);
    let [foulCount, setFoulCount] = useState(0);
    let [hitCount, setHitCount] = useState(0);

    useEffect(() =>{
        if (strikeCount === 3){
            setStrikeCount(0)
        }
    },[strikeCount])

    useEffect(() => {
        if (ballCount === 4) {
            setBallCount(0)
        }
    }, [ballCount])

    useEffect(() => {
        
    })
    // if (strikeCount > 3){
    //     strikeCount = 0;
    // }
    // if (ballCount > 4){
    //     ballCount = 0;
    // }
    //  if (hitCount = 1){
    //      strikeCount = 0;
    //  }
    // if (strikeCount === 0 && foulCount === 1){
    //     strikeCount = 1;
    // }
    // if (strikeCount === 1 && foulCount === 1){
    //     strikeCount = 2;
    // }
    // if (strikeCount === 2 && foulCount === 1){
    //     strikeCount = 2;
    // }
    // if (foulCount > 1){
    //     foulCount = 0;
    // }
    // if (hitCount > 1){
    //     hitCount = 0;
    // }

    return (
        <div>
        <Display hitCount={hitCount} strikeCount={strikeCount} ballCount={ballCount} foulCount={foulCount} />
        <div className="dashboard">
            <button onClick={() => setStrikeCount(strikeCount + 1)}>Strike</button>
            <button onClick={() => setBallCount(ballCount + 1)}>Ball</button>
            <button onClick={() => setFoulCount(foulCount + 1)}>Foul</button>
            <button onClick={() => setHitCount(hitCount + 1)}>Hit</button>
            <button onClick={() => setHitCount(0)}>Reset</button>
        </div>
        </div>
        
    )
}

export default Dashboard
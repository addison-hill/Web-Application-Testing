import React from 'react';

const Display = props => {
    console.log(props)
    return (
        <div>
            <h1>Strikes: {props.strikeCount}</h1>
            <h1>Balls: {props.ballCount}</h1>
            <h1>Fouls: {props.foulCount}</h1>
            <h1>Hits: {props.hitCount}</h1>
        </div>
    );
    
    
};

export default Display
import React from 'react';

const Counter = ({ onIncrease, onDecrese, number }) => {
    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrese}>-1</button>
        </div>
    );
};

export default Counter;
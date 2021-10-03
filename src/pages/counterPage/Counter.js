import React from 'react';
import './Counter.css';

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) =>
    <div>
        <button onClick={() => {onIncrementAsync({ number: 3 })} } className="button">
            Increment 3 after 1 second
        </button>
        {' '}
        <button onClick={onIncrement} className="button">
            + Increment
        </button>
        {' '}
        <button onClick={onDecrement} className="button">
            - Decrement
        </button>
        <hr />
        <div>
            Clicked: {value} times
        </div>
    </div>

export default Counter;
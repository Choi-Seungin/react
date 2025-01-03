import React, { useReducer, useState } from 'react';
function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {value : state.value + 1};
        case 'DECREMENT':
            return {value : state.value - 1};
        default:
            return state;
    }
}
export default function CounterReducer() {
    const [count, dispatch] = useReducer(reducer, {value : 0});
    return (
        <div>
            <h2>useReducer 테스트</h2>
            <p>count : {count.value}</p>
            <button onClick={() => dispatch({type : 'INCREMENT'})}>+</button>
            <button onClick={() => dispatch({type : 'DECREMENT'})}>-</button>
        </div>
    );
}
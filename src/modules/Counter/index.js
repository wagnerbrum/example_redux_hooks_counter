import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { INCREMENT, DECREMENT, RESET } from "./constants";
import "./style.css";

export default function Counter() {
    const { count, name } = useSelector(state => ({
        ...state.counterReducer,
        ...state.nameReducer
    }));

    const dispatch = useDispatch();

    function incrementCount() {
        dispatch({
            type: INCREMENT
        });
    }

    function decrementCount() {
        dispatch({
            type: DECREMENT
        });
    }

    function resetCount() {
        dispatch({
            type: RESET
        });
    }

    return (
        <>
            <h2>Counter: {count}</h2>
            <button onClick={incrementCount}>+</button>
            <button onClick={decrementCount}>-</button>
            <button onClick={resetCount}>Reset</button>
            <div>
                <h3>Your name is: {name}</h3>
            </div>
        </>
    );
}

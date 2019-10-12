import React from "react";
import { useDispatch } from "react-redux";

import { UPDATE_NAME } from "./constants";

export default function Name() {
    const dispatch = useDispatch();

    function handleUpdateName(event) {
        dispatch({
            type: UPDATE_NAME,
            payload: event.target.value
        });
    }

    return (
        <div>
            <input placeholder="Input your name" onChange={handleUpdateName} />
        </div>
    );
}

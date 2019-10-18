import { combineReducers } from "redux";

import counterReducer from "../modules/Counter/reducer.js";
import nameReducer from "../modules/Name/reducer.js";
import todo from "../modules/ToDo/reducer";

const reducers = {
    counterReducer,
    nameReducer,
    todo,
};

export default combineReducers(reducers);

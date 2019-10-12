import { combineReducers } from "redux";

import counterReducer from "../modules/Counter/reducer.js";
import nameReducer from "../modules/Name/reducer.js";

const reducers = {
    counterReducer,
    nameReducer
};

export default combineReducers(reducers);

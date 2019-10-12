import { UPDATE_NAME } from "./constants";

const INITIAL_STATE = {
    name: ""
};

export default function nameReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case UPDATE_NAME:
            return {
                ...state,
                name: action.payload
            };
        default:
            return state;
    }
}

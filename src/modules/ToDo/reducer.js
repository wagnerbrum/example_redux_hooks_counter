import {} from "./constants";

const INITIAL_STATE = {
    tasks: []
};

export default function todoReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        default:
            return state;
    }
}

import { INCREMENT, DECREMENT, RESET } from "./constants";

const INITIAL_STATE = {
    count: 0
};

export default function counterReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        case RESET:
            return {
                ...INITIAL_STATE
            };
        default:
            return state;
    }
}

import FirebaseService from "../../services/firebase";

const GET_LIST = 'ToDo/GET_LIST';

const INITIAL_STATE = {
    tasks: []
};

export const onAddTask = title => async dispatch =>
    await FirebaseService.addTask(title)

export const onGetTask = () => async dispatch =>
    FirebaseService.getDataList("tasks", data => dispatch({
        type: GET_LIST,
        payload: data
    }));

export default function todoReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_LIST:
            return {
                ...state,
                tasks: [ ...action.payload ]
            }
        default:
            return state;
    }
}

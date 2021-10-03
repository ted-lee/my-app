import {
    incrementCountRoutine,
    decrementCountRoutine,
    incrementCountAsyncRoutine,
} from '../routines';

const initialState = 0;

export default function counter(state = initialState, action) {
    const { payload } = action;

    switch (action.type) {
        case incrementCountRoutine.SUCCESS:
            return state + 1
        case decrementCountRoutine.SUCCESS:
            return state - 1
        case incrementCountAsyncRoutine.SUCCESS:
            return state + payload.data
        default:
            return state;
    }
}
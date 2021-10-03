import { put, fork, take } from 'redux-saga/effects';
import { decrementCountRoutine } from '../../routines';

const routine = decrementCountRoutine;

function* handler(context, action) {
    yield put(routine.request());
    yield put(routine.success());
    yield put(routine.fulfill());
}

function* watcher(context) {
    while (true) {
        const action = yield take(routine.TRIGGER);
        yield fork(handler, context, action);
    }
}

export default watcher;

import { fork, call, put, take } from 'redux-saga/effects'
import { incrementCountAsyncRoutine } from '../../routines';
import * as API from '../../api';

const routine = incrementCountAsyncRoutine;
const apiFunction = API.fetchCount;

function* handler(context, action) {
    yield put(routine.request());

    try {
        const { payload = {} } = action;
        const { number = 1 } = payload;
        const result = yield call(apiFunction, number);

        yield put(routine.success(result));
    } catch (error) {
        yield put(routine.failure({ error }));
    }

    yield put(routine.fulfill());
}

function* watcher(context) {
    while (true) {
        const action = yield take(routine.TRIGGER);

        yield fork(handler, context, action);
    }
}

export default watcher;

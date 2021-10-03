import { all } from 'redux-saga/effects';
import { routinePromiseWatcherSaga } from 'redux-saga-routines';

import counterSagas from './counterSagas';

export default function* rootSaga(context) {
    yield all([
        ...counterSagas(context),
        routinePromiseWatcherSaga
    ]);
}

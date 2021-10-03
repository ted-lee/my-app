import incrementSaga from './incrementSaga';
import decrementSaga from './decrementSaga';
import incrementCountAsyncSaga from './incrementCountAsyncSaga';

const counterSagas = context => {
    return [
        incrementSaga(context),
        decrementSaga(context),
        incrementCountAsyncSaga(context),
    ];
}

export default counterSagas;

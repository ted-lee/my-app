import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import createLogger from './logger';
import rootSaga from '../sagas';

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();

    let middlewares = [sagaMiddleware];

    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger());
    }

    const middlewareEnhancer = applyMiddleware(...middlewares);
    const enhancers = [middlewareEnhancer];
    const composedEnhancers = composeWithDevTools(...enhancers);

    const store = createStore(rootReducer, initialState, composedEnhancers);

    store.runSaga = (sagaContext = {}) =>
        sagaMiddleware.run(rootSaga, { ...sagaContext, store });

    store.close = () => store.dispatch(END);

    return store;
}

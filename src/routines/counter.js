import { createRoutine } from 'redux-saga-routines';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const INCREMENT_ASYNC = 'INCREMENT_ASYNC';

export const incrementCountRoutine = createRoutine(INCREMENT);

export const decrementCountRoutine = createRoutine(DECREMENT);

export const incrementCountAsyncRoutine = createRoutine(INCREMENT_ASYNC);

import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {incrementCountRoutine, decrementCountRoutine, incrementCountAsyncRoutine } from '../../routines';

import Counter from './Counter';

const CounterContainer = () => {
    const value = useSelector(state => state.count);

    const dispatch = useDispatch();
    const onIncrement = bindActionCreators(incrementCountRoutine, dispatch);
    const onDecrement = bindActionCreators(decrementCountRoutine, dispatch);
    const onIncrementAsync = bindActionCreators(incrementCountAsyncRoutine, dispatch);

    return (
        <Counter
            value={value}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onIncrementAsync={onIncrementAsync}
        />
    );
}


export default CounterContainer;
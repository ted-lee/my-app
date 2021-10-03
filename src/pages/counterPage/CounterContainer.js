import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import {incrementCountRoutine, decrementCountRoutine, incrementCountAsyncRoutine } from '../../routines';

import Counter from './Counter';

const mapStateToProps = state => {
    return {
        value: state.count,
    };
};

const mapDispatchToProps = dispatch => ({
    onIncrement: bindActionCreators(incrementCountRoutine, dispatch),
    onDecrement: bindActionCreators(decrementCountRoutine, dispatch),
    onIncrementAsync: bindActionCreators(incrementCountAsyncRoutine, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import loggerReduxMiddleware from './loggerReduxMiddleware';
import reducers from './reducers';


const store = createStore(reducers, applyMiddleware(thunk, loggerReduxMiddleware));

export default props => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}
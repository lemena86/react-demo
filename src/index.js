import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';

import loggerReduxMiddleware from './loggerReduxMiddleware';
import reducers from './reducers';

import App from "./App";

const store = createStore(reducers, applyMiddleware(thunk, loggerReduxMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

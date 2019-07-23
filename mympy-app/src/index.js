import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Logger from 'redux-logger'; // REMOVE FOR PRODUCTION -----------------------------------------------------------^^^^^^^^^^^^^^^^^^^^^\\\\\\\\\\\\\\\\\\\\
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import './index.scss';

import rootReducer from './reducers';
import App from './App';

// composeEnhancer allows for redux store dev view in chrome
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk, Logger))
);

const AppwithRouter = withRouter(App);
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <AppwithRouter />
        </Router>
	</Provider>, 
	document.getElementById('root')
);

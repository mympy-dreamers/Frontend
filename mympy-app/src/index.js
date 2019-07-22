import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import './index.scss';

import rootReducer from './reducers';
import App from './App';

const store = createStore(rootReducer, applyMiddleware(thunk));
const AppwithRouter = withRouter(App);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <AppwithRouter />
        </Router>
	</Provider>, 
	document.getElementById('root')
);

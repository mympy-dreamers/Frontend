
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Logger from 'redux-logger'; // REMOVE FOR PRODUCTION -----------------------------------------------------------^^^^^^^^^^^^^^^^^^^^^\\\\\\\\\\\\\\\\\\\\
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import config from "./auth/auth_config.json"
import './index.scss';
import rootReducer from './reducers';
import App from './App';
import { Auth0Provider } from "./react-auth0-wrapper";
// composeEnhancer allows for redux store dev view in chrome
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk, Logger))
);

// redorect for auth0
const onRedirectCallback = appState => {
    window.history.replaceState(
        {},
        document.title,
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    );
};
const AppwithRouter = withRouter(App);

ReactDOM.render(
    <Auth0Provider
        domain={config.domain}
        client_id={config.clientId}
        redirect_uri={`${window.location.origin}`}
        onRedirectCallback={onRedirectCallback}
    >
        <Provider store={store}>
            <Router>
                <AppwithRouter />
            </Router>
        </Provider>
    </Auth0Provider>,
    document.getElementById('root')
);

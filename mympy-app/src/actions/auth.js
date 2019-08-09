import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { Mixpanel } from '../mixpanel/mixPanel';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_USER = 'LOGOUT_USER'


const BASE_URL = 'https://mympy-dreamers.herokuapp.com';

export const register = (user) => dispatch => {
    dispatch({ type: REGISTER_START });

    axios
    .post(`${BASE_URL}/auth/register`, user)
    .then(res => {
        Mixpanel.identify(user.username)
        Mixpanel.track("Signup", {
            "username": user.username,
            "email": user.email,
        })
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: REGISTER_FAILURE,
            payload: err
        })
    })
}

export const login = (creds) => dispatch => {
    dispatch({ type: LOGIN_START });

    axios
    .post(`${BASE_URL}/auth/login`, creds)
    .then(res => {
        Mixpanel.identify(creds.username); // only used if wanting to replace mixpanel given id; usually good when having mobile app, and webpage
        Mixpanel.track('Successful login');
        // Mixpanel.people.set({
        //    $first_name: user.first_name,
        //    $last_name: user.last_name,
        // })  https://developer.mixpanel.com/docs/javascript#section-setting-profile-properties
        localStorage.setItem('jwt', res.data.token);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: jwtDecode(res.data.token)
        })
    })
    .catch(err => { 
        Mixpanel.track('Unsuccesful Login');
        dispatch({
            type: LOGIN_FAILURE,
            payload: err
        })
    })
}

export const logout = () => {
    Mixpanel.track('Logging Out');
    return {
        type: LOGOUT_USER
    }
}
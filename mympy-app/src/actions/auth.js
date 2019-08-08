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
        Mixpanel.identify(creds.username);
        Mixpanel.track('Successful login');
        Mixpanel.people.set({
        $username: creds.username,
      });
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
    return {
        type: LOGOUT_USER
    }
}
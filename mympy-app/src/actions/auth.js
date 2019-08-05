import axios from 'axios';
import jwtDecode from 'jwt-decode';

const BASE_URL = 'https://mympy-dreamers.herokuapp.com';

export const REGISTER_START = "REGISTER_START"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAILURE = "REGISTER_FAILURE"

export const register = (user) => dispatch => {
    dispatch({ type: REGISTER_START });

    axios.post(`${BASE_URL}/auth/register`, user)
        .then(res => {
            localStorage.setItem('jwt', res.data.token);
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
        console.log(err)
        })
}

export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const login = (creds) => dispatch => {
dispatch({ type: LOGIN_START });
axios
    .post(`${BASE_URL}/auth/login`, creds)
    .then(res => {
        localStorage.setItem('jwt', res.data.token);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: jwtDecode(res.data.token)
        })
        
    })
    .catch(err => { 
        dispatch({
            type: LOGIN_FAILURE,
            payload: err
        })
    })
}

export const LOGOUT_USER = "LOGOUT_USER"

export const logout = () => {
    return {
        type: LOGOUT_USER
    }
}
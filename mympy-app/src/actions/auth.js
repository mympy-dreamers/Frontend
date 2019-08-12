import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { Mixpanel } from '../mixpanel';

const token = {
    headers: { authorization: localStorage.getItem('jwt') }
}

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_USER = 'LOGOUT_USER'

//https://mympy-dreamers-staging.herokuapp.com
const BASE_URL = process.env.BASE_URL || 'http://localhost:5000';

export const register = (user) => dispatch => {
    dispatch({ type: REGISTER_START });

    axios
        .post(`${BASE_URL}/auth/register`, user)
        .then(res => {

            // Mixpanel tracking
            Mixpanel.identify(user.username);
            Mixpanel.track("Signup no Auth0", {
            "username": user.username,
            "email": user.email,
            });
            // End of Mixpanel

            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            Mixpanel.track('Unsuccesful Login no Auth0');
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
            Mixpanel.track('Succesful Login noAuth0');
            localStorage.setItem('jwt', res.data.token);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: jwtDecode(res.data.token)
            })
        })
        .catch(err => {
            Mixpanel.track('Unsuccesful Login no Auth0');
            dispatch({
                type: LOGIN_FAILURE,
                payload: err
            })
        })
}

export const logout = () => {
    Mixpanel.track('Signout')
    return {
        type: LOGOUT_USER
    }
}

export const SET_AUTH = 'SET_AUTH'

export const setAuth = (auth) => (dispatch) => {
    dispatch({
        type: SET_AUTH,
        payload: auth
    })
}

export const ZERO_LOGIN_START = 'ZERO_LOGIN_START';
export const ZERO_LOGIN_SUCCESS = 'ZERO_LOGIN_SUCCESS';
export const ZERO_LOGIN_FAILURE = 'ZERO_LOGIN_FAILURE';

export const zeroLogin = (user, isRegistered) => dispatch => {
    let signUser = { username: user.nickname, email: user.email, auth_id: user.sub }
    dispatch({ type: ZERO_LOGIN_START });


    let zeroUrl = '';
    if (!isRegistered) {
        zeroUrl = `${BASE_URL}/auth/zero/register`
    } else {
        zeroUrl = `${BASE_URL}/auth/zero/login`
    }

    axios
        .post(zeroUrl, signUser)
        .then(res => {
            // localStorage.setItem('jwt', res.data.token);
            console.log('zeroLog', res);

            // Mixpanel tracking

            if(zeroUrl.includes('register')) {

                Mixpanel.identify(signUser.auth_id); // identify the user casding the event
                Mixpanel.register_once({
                    'First Login Date': new Date().toISOString()
                }); //  on first login, saves the date and time
                Mixpanel.register({
                    "id": "signUser.auth_id",
                    "username": "signUser.username",
                    "email": "signUser.email",
                }) // upon registering, Mixpanel will save the username, email, and id of the user
                Mixpanel.track('Register'); // this is the actual tracking event

            } else {
                Mixpanel.identify(signUser.username);
                Mixpanel.track('Zero Login Successful');
            }

            // End of Mixpanel

            dispatch({
                type: ZERO_LOGIN_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {

            if (zeroUrl.includes('register')){
                Mixpanel.track('Register Unsuccessful');
            } else {
                Mixpanel.track('Zero Login Unsuccessful');
            }
            
            dispatch({
                type: ZERO_LOGIN_FAILURE,
                payload: err
            })
        })

}
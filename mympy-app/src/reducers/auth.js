import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_USER,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    SET_AUTH,
    ZERO_LOGIN_START,
    ZERO_LOGIN_SUCCESS,
    ZERO_LOGIN_FAILURE,
} from '../actions';

import jwtDecode from 'jwt-decode';


const INITIAL_STATE = (token => ({
    loggedIn: false,
    currentUser: token ? jwtDecode(token) : null,
    registerSuccess: false,
    auth: {},
    user: {},
    errors: []
}))(localStorage.getItem('jwt'))

export default function authReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOGOUT_USER:
            localStorage.removeItem('jwt');
            return {
                ...state,
                loggedIn: false,
                currentUser: null
            }
        case LOGIN_START:
            return {
                ...state,
                loggedIn: false,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                currentUser: action.payload
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loggedIn: false,
                errors: action.payload
            }
        case REGISTER_START:
            return {
                ...state,
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                errors: null,
                registerSuccess: true
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                errors: action.payload
            }
        case SET_AUTH:
            return {
                ...state,
                auth: action.payload
            }
        case ZERO_LOGIN_START:
            return {
                ...state,
                fetching: true,
            }
        case ZERO_LOGIN_SUCCESS:
            return {
                ...state,
                fetching: false,
                user: action.payload,
            }
        case ZERO_LOGIN_FAILURE:
            return {
                ...state,
                fetching: false,

            }
        default:
            return state;
    }
}
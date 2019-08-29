import axios from 'axios';

export const DREAM_PAY_START = 'DREAM_PAY_START';
export const DREAM_PAY_SUCCESS = 'DREAM_PAY_SUCCESS';
export const DREAM_PAY_FAILURE = 'DREAM_PAY_FAILURE';
export const DONO_FETCH = 'DONO_FETCH';

export const DREAMPAY_POST_START = 'DREAMPAY_POST_START';
export const DREAMPAY_POST_SUCCESS = 'DREAMPAY_POST_SUCCESS';
export const DREAMPAY_POST_FAILURE = 'DREAMPAY_POST_FAILURE';

export const USER_PAY_START = 'USER_PAY_START';
export const USER_PAY_SUCCESS = 'USER_PAY_SUCCESS';
export const USER_PAY_FAILURE = 'USER_PAY_FAILURE';

export const USERPAY_POST_START = 'USERPAY_POST_START';
export const USERPAY_POST_SUCCESS = 'USERPAY_POST_SUCCESS';
export const USERPAY_POST_FAILURE = 'USERPAY_POST_FAILURE';

//Switches base_url based on environment variable
const BASE_URL = process.env.REACT_APP_BE_URL || 'http://localhost:5000';


/***Dream specific endpoints for payments below***/

//Fetches dream donations by dream id
export const dreamPayFetch = (id) => dispatch => {
    dispatch({ type: DREAM_PAY_START });
    dispatch({ type: DONO_FETCH });

    axios.get(`${BASE_URL}/dreampayment/${id}`)
        .then(res => {
            dispatch({
                type: DREAM_PAY_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: DREAM_PAY_FAILURE,
                payload: err
            })
        });
}

//Adds a donation to dreampayment table
export const dreamPayPost = (data) => dispatch => {
    dispatch({ type: DREAMPAY_POST_START });

    axios.post(`${BASE_URL}/dreampayment`, data)
        .then(res => {
            dispatch({
                type: DREAMPAY_POST_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: DREAMPAY_POST_FAILURE,
                payload: err
            })
        })
}


/***User specific endpoints for payments below***/

//Fetches user donations by user id
export const userPayFetch = (id) => dispatch => {
    dispatch({ type: USER_PAY_START });

    axios.get(`${BASE_URL}/userpayment/${id}`)
        .then(res => {
            dispatch({
                type: USER_PAY_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: USER_PAY_FAILURE,
                payload: err
            })
        });
}

//Adds a donation to the userpayments table
export const userPayPost = (data) => dispatch => {
    dispatch({ type: USERPAY_POST_START });

    axios.post(`${BASE_URL}/userpayment`, data)
        .then(res => {
            dispatch({
                type: USERPAY_POST_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: USERPAY_POST_FAILURE,
                payload: err
            })
        })
}
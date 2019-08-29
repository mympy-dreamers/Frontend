import axios from 'axios';

export const SET_USER = 'SET_USER';

export const FETCH_USERS_START = 'FETCH_USERS_START';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const FETCH_USER_START = "FETCH_USER_START"
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS"
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE"

export const FETCH_USER_DREAMS_START = 'FETCH_USER_DREAMS_START';
export const FETCH_USER_DREAMS_SUCCESS = 'FETCH_USER_DREAMS_SUCCESS';
export const FETCH_USER_DREAMS_FAILURE = 'FETCH_USER_DREAMS_FAILURE';

export const UPDATE_USER_START = 'UPDATE_USER_START';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

export const DELETE_USER_START = 'DELETE_USER_START';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';

export const SET_LOG = 'SET_LOG';

const BASE_URL = process.env.REACT_APP_BE_URL || 'http://localhost:5000';

const token = {
    headers: { authorization: localStorage.getItem('jwt') }
}

export const setUser = (user) => (dispatch) => {
    console.log(user);
    dispatch({
        type: SET_USER,
        payload: user
    })
}

//Fetches all users
export const fetchUsers = () => (dispatch) => {
    dispatch({ type: FETCH_USERS_START });

    axios
        .get(`${BASE_URL}/api/users`, token)
        .then(res => {
            dispatch({
                type: FETCH_USERS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_USERS_FAILURE,
                payload: err
            })
        })
}

//Fetches user by id
export const fetchUserById = (id) => (dispatch) => {
    dispatch({ type: FETCH_USER_START })

    axios
        .get(`${BASE_URL}/api/users/${id}`, token)
        .then(res => {
            dispatch({
                type: FETCH_USER_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_USER_FAILURE,
                payload: err
            })
        })
}

//Fetches all dream of a user by user id
export const fetchUserDreams = (id) => (dispatch) => {
    dispatch({ type: FETCH_USER_DREAMS_START })

    axios
        .get(`${BASE_URL}/api/users/${id}/dreams`, token)
        .then(res => {
            dispatch({
                type: FETCH_USER_DREAMS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_USER_DREAMS_FAILURE,
                payload: err
            })
        })
}

//Update user by id
export const updateUser = (id, changes) => dispatch => {
    dispatch({ type: UPDATE_USER_START });

    axios
        .put(`${BASE_URL}/api/users/${id}`, changes, token)
        .then(res => {
            dispatch({
                type: UPDATE_USER_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: UPDATE_USER_FAILURE,
                payload: err
            })
        })
}

//Delete user by id
export const deleteUser = (id) => dispatch => {
    dispatch({ type: DELETE_USER_START });

    axios
        .delete(`${BASE_URL}/api/users/${id}`, token)
        .then(res => {
            dispatch({
                type: DELETE_USER_SUCCESS,
                payload: id
            })
        })
        .catch(err => {
            dispatch({
                type: DELETE_USER_FAILURE,
                payload: err
            })
        })
}

export const setLog = () => (dispatch) => {
    dispatch({ type: SET_LOG })
}
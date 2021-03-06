import axios from 'axios';

export const FETCH_DREAM_START = 'FETCH_DREAM_START';
export const FETCH_DREAM_SUCCESS = 'FETCH_DREAM_SUCCESS';
export const FETCH_DREAM_FAILURE = 'FETCH_DREAM_FAILURE';

export const FETCH_DREAMS_START = 'FETCH_DREAMS_START';
export const FETCH_DREAMS_SUCCESS = 'FETCH_DREAMS_SUCCESS';
export const FETCH_DREAMS_FAILURE = 'FETCH_DREAMS_FAILURE';

export const ADD_DREAM_START = 'ADD_DREAM_START';
export const ADD_DREAM_SUCCESS = 'ADD_DREAM_SUCCESS';
export const ADD_DREAM_FAILURE = 'ADD_DREAM_FAILURE';

export const ADD_IMAGE_START = 'ADD_IMAGE_START';
export const ADD_IMAGE_SUCCESS = 'ADD_IMAGE_SUCCESS';
export const ADD_IMAGE_FAILURE = 'ADD_IMAGE_FAILURE';

export const FETCH_IMAGE_START = 'FETCH_IMAGE_START';
export const FETCH_IMAGE_SUCCESS = 'FETCH_IMAGE_SUCCESS';
export const FETCH_IMAGE_FAILURE = 'FETCH_IMAGE_FAILURE';

export const UPDATE_DREAM_START = 'UPDATE_DREAM_START';
export const UPDATE_DREAM_SUCCESS = 'UPDATE_DREAM_SUCCESS';
export const UPDATE_DREAM_FAILURE = 'UPDATE_DREAM_FAILURE';

export const DELETE_DREAM_START = 'DELETE_DREAM_START';
export const DELETE_DREAM_SUCCESS = 'DELETE_DREAM_SUCCESS';
export const DELETE_DREAM_FAILURE = 'DELETE_DREAM_FAILURE';

export const UPDATE_DREAM_USER = 'UPDATE_DREAM_USER';

// VARIABLES BELOW

// grabs token and holds it in a variable to be used across the file
const token = {
    headers: { authorization: localStorage.getItem('jwt') }
};

//Switches base_url based on environment variable
const BASE_URL = process.env.REACT_APP_BE_URL || 'http://localhost:5000';


//Fetches single dream by id
export const fetchDreamById = (id) => (dispatch) => {
    dispatch({ type: FETCH_DREAM_START });

    axios
        .get(`${BASE_URL}/api/dreams/${id}`, token)
        .then(res => {
            dispatch({
                type: FETCH_DREAM_SUCCESS,
                payload: res.data
            })
            dispatch({
                type: UPDATE_DREAM_USER
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_DREAM_FAILURE,
                payload: err
            })
        })
}

//Fetches all dreams from dream table
export const fetchAllDreams = () => (dispatch) => {
    dispatch({ type: FETCH_DREAMS_START });

    return axios
        .get(`${BASE_URL}/api/dreams`, token)
        .then(res => {
            dispatch({
                type: FETCH_DREAMS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_DREAMS_FAILURE,
                payload: err
            })
        })
}

//Fetched single image by dream id
export const fetchImage = (id) => (dispatch) => {
    dispatch({ type: FETCH_IMAGE_START });

    return axios
        .get(`${BASE_URL}/api/dreams/image/${id}`, token)
        .then(res => {
            dispatch({
                type: FETCH_IMAGE_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_IMAGE_FAILURE,
                payload: err
            })
        })
}

//Adds dream to dreams table
export const addDream = (sentDream) => dispatch => {
    dispatch({ type: ADD_DREAM_START });

    return axios
        .post(`${BASE_URL}/api/dreams`, sentDream /* token */)
        .then(res => {
            dispatch({
                type: ADD_DREAM_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: ADD_DREAM_FAILURE,
                payload: err
            })
        })
}

//Adds image to images table
export const addImage = (image) => dispatch => {
    dispatch({ type: ADD_IMAGE_START });

    return axios
        .post(`${BASE_URL}/api/images`, image, {
            onUploadProgress: progressEvent => {
                console.log(
                    "Upload Progress: ",
                    Math.round((progressEvent.loaded / progressEvent.total) * 100),
                    "%"
                );
            }
        } /* token */)
        .then(res => {
            dispatch({
                type: ADD_IMAGE_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: ADD_IMAGE_FAILURE,
                payload: err
            })
        })
}

//Updates dream by id
export const updateDream = (dream) => dispatch => {
    dispatch({ type: UPDATE_DREAM_START });
    axios
        .put(`${BASE_URL}/api/dreams/${dream.id}`, dream, token)
        .then(res => {
            dispatch({
                type: UPDATE_DREAM_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: UPDATE_DREAM_FAILURE,
                payload: err
            })
        })
}

//Deletes dream by id from dreams table
export const deleteDream = (id) => dispatch => {
    dispatch({ type: DELETE_DREAM_START });

    axios
        .delete(`${BASE_URL}/api/dreams/${id}`, token)
        .then(res => {
            dispatch({
                type: DELETE_DREAM_SUCCESS,
                payload: id
            })
        })
        .catch(err => {
            dispatch({
                type: DELETE_DREAM_FAILURE,
                payload: err
            })
        })
}

//save Dream state section
export const SET_DREAMCARDS = 'SET_DREAMCARDS';

export const setDreamCards = (dreamCard) => (dispatch) => {
    dispatch({ type: SET_DREAMCARDS, payload: dreamCard });
}

// UPDATING SEARCH TERM
export const UPDATE_SEARCH = "UPDATE_SEARCH";

export const updateSearch = searchTerm => dispatch => {
    dispatch({ type: UPDATE_SEARCH, payload: searchTerm })
}
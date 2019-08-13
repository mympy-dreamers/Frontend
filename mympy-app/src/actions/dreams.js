import axios from 'axios';

export const FETCH_DREAM_START =  'FETCH_DREAM_START';
export const FETCH_DREAM_SUCCESS = 'FETCH_DREAM_SUCCESS';
export const FETCH_DREAM_FAILURE = 'FETCH_DREAM_FAILURE';

export const FETCH_DREAMS_START =  'FETCH_DREAMS_START';
export const FETCH_DREAMS_SUCCESS = 'FETCH_DREAMS_SUCCESS';
export const FETCH_DREAMS_FAILURE = 'FETCH_DREAMS_FAILURE';

export const ADD_DREAM_START = 'ADD_DREAM_START';
export const ADD_DREAM_SUCCESS = 'ADD_DREAM_SUCCESS';
export const ADD_DREAM_FAILURE = 'ADD_DREAM_FAILURE';

export const ADD_IMAGE_START = 'ADD_IMAGE_START';
export const ADD_IMAGE_SUCCESS = 'ADD_IMAGE_SUCCESS';
export const ADD_IMAGE_FAILURE = 'ADD_IMAGE_FAILURE';

export const UPDATE_DREAM_START = 'UPDATE_DREAM_START';
export const UPDATE_DREAM_SUCCESS = 'UPDATE_DREAM_SUCCESS';
export const UPDATE_DREAM_FAILURE = 'UPDATE_DREAM_FAILURE';

export const DELETE_DREAM_START='DELETE_DREAM_START';
export const DELETE_DREAM_SUCCESS='DELETE_DREAM_SUCCESS';
export const DELETE_DREAM_FAILURE='DELETE_DREAM_FAILURE';

const token = {
    headers: { authorization: localStorage.getItem('jwt') }
}

const BASE_URL = process.env.REACT_APP_BE_URL || 'http://localhost:5000';

export const fetchDreamById = (id) => (dispatch) => {
    dispatch({type: FETCH_DREAM_START });

    axios
    .get(`${BASE_URL}/api/dreams/${id}`, token)
    .then(res => {
        dispatch({
            type: FETCH_DREAM_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: FETCH_DREAM_FAILURE,
            payload: err
        })
    })
}

export const fetchAllDreams = () => (dispatch) => {
    dispatch({ type: FETCH_DREAMS_START });

    axios
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

export const addImage = ( image ) => dispatch => {
    dispatch({ type: ADD_IMAGE_START });

    return axios
    .post(`${BASE_URL}/api/images`, image, {
      onUploadProgress: progressEvent => {
        console.log(
          "Upload Progress: ",
          Math.round((progressEvent.loaded / progressEvent.total) * 100),
          "%"
        );}
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

export const updateDream = (dream) => dispatch => {
    dispatch({ type: UPDATE_DREAM_START });
    axios
    .put(`${BASE_URL}/api/dreams/${dream.id}`, dream, token)
    .then(res => {
        console.log(res.data)
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

export const deleteDream = (id) => dispatch => {
    dispatch({ type: DELETE_DREAM_START });

    axios
    .delete(`${BASE_URL}/api/dreams/${id}`, token)
    .then(res =>{
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
    dispatch({ type:SET_DREAMCARDS, payload: dreamCard});
}

// UPDATING SEARCH TERM
export const UPDATE_SEARCH = "UPDATE_SEARCH";

export const updateSearch = searchTerm => dispatch => {
	dispatch({type: UPDATE_SEARCH, payload: searchTerm})
}
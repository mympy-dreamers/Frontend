import axios from 'axios';

export const FETCH_JOURNAL_START = 'FETCH_JOURNAL_START';
export const FETCH_JOURNAL_SUCCESS = 'FETCH_JOURNAL_SUCCESS';
export const FETCH_JOURNAL_FAILURE = 'FETCH_JOURNAL_FAILURE';

export const FETCH_JOURNALS_START = 'FETCH_JOURNALS_START';
export const FETCH_JOURNALS_SUCCESS = 'FETCH_JOURNALS_SUCCESS';
export const FETCH_JOURNALS_FAILURE = 'FETCH_JOURNALS_FAILURE';

export const FETCH_DREAM_JOURNALS_START = 'FETCH_DREAM_JOURNALS_START';
export const FETCH_DREAM_JOURNALS_SUCCESS = 'FETCH_DREAM_JOURNALS_SUCCESS';
export const FETCH_DREAM_JOURNALS_FAILURE = 'FETCH_DREAM_JOURNALS_FAILURE';

export const ADD_JOURNAL_START = 'ADD_JOURNAL_START';
export const ADD_JOURNAL_SUCCESS = 'ADD_JOURNAL_SUCCESS';
export const ADD_JOURNAL_FAILURE = 'ADD_JOURNAL_FAILURE';

export const UPDATE_JOURNAL_START = 'UPDATE_JOURNAL_START';
export const UPDATE_JOURNAL_SUCCESS = 'UPDATE_JOURNAL_SUCCESS';
export const UPDATE_JOURNAL_FAILURE = 'UPDATE_JOURNAL_FAILURE';

export const DELETE_JOURNAL_START = 'DELETE_JOURNAL_START';
export const DELETE_JOURNAL_SUCCESS = 'DELETE_JOURNAL_SUCCESS';
export const DELETE_JOURNAL_FAILURE = 'DELETE_JOURNAL_FAILURE';


const BASE_URL = process.env.REACT_APP_BE_URL || 'http://localhost:5000';


export const fetchAllJournals = () => (dispatch) => {
    dispatch({ type: FETCH_JOURNALS_START });

    return axios
        .get(`${BASE_URL}/api/journals`)
        .then(res => {
            dispatch({
                type: FETCH_JOURNALS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_JOURNALS_FAILURE,
                payload: err
            })
        })
}

export const fetchJournalById = (id) => (dispatch) => {
    dispatch({ type: FETCH_JOURNAL_START });

    axios
        .get(`${BASE_URL}/api/journals/${id}`)
        .then(res => {
            dispatch({
                type: FETCH_JOURNAL_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_JOURNAL_FAILURE,
                payload: err
            })
        })
}

export const fetchDreamJournals = (id) => dispatch => {
    dispatch({ type: FETCH_DREAM_JOURNALS_START });

    return axios
        .get(`${BASE_URL}/api/dreams/${id}/journals`)
        .then(res => {
            dispatch({
                type: FETCH_DREAM_JOURNALS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_DREAM_JOURNALS_FAILURE,
                payload: err
            })
        })
}

export const addJournal = (sentJournal) => dispatch => {
    dispatch({ type: ADD_JOURNAL_START });
    return axios
        .post(`${BASE_URL}/api/journals`, sentJournal)
        .then(res => {
            debugger
            dispatch({
                type: ADD_JOURNAL_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: ADD_JOURNAL_FAILURE,
                payload: err
            })
        })
}

export const updateJournal = (editedJournal) => dispatch => {
    dispatch({ type: UPDATE_JOURNAL_START });
    axios
        .put(`${BASE_URL}/api/journals/${editedJournal.id}`, editedJournal)
        .then(res => {
            dispatch({
                type: UPDATE_JOURNAL_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: UPDATE_JOURNAL_FAILURE,
                payload: err
            })
        })
}

export const deleteJournal = (id) => dispatch => {
    dispatch({ type: DELETE_JOURNAL_START });

    axios
        .delete(`${BASE_URL}/api/journals/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_JOURNAL_SUCCESS,
                payload: id
            })
        })
        .catch(err => {
            dispatch({
                type: DELETE_JOURNAL_FAILURE,
                payload: err
            })
        })
}

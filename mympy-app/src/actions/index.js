import axios from "axios";


// LOGIN --------------------------------------------

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
	dispatch({ type: LOGIN_START });
	axios.post('https://mympy-dreamers.herokuapp.com/auth/login', creds)
	.then(res => {
		localStorage.setItem('token', res.data.token);
		dispatch({ type: LOGIN_SUCCESS, payload: res.data });
	})
	.catch(err => {
		dispatch({ type: LOGIN_FAILURE, payload: err });
	});
}

// END OF LOGIN -------------------------------------------------

// REGISTER -------------------------------------------------

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const register = creds => dispatch => {
	dispatch({ type: REGISTER_START });
	axios.post('https://mympy-dreamers.herokuapp.com/auth/register', creds)
	.then(res => {
		console.log(res);
		dispatch({ type: REGISTER_SUCCESS, payload: res.data })
	})
	.catch(err => console.log(err));
}

// END OF REGISTER -------------------------------------------------

// UPDATING SEARCH TERM
export const UPDATE_SEARCH="UPDATE_SEARCH"

export const updateSearch = searchTerm => dispatch => {
	dispatch({type: UPDATE_SEARCH, payload: searchTerm})
}
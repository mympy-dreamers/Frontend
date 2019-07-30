import axios from "axios";


const token = localStorage.getItem('token');

const decodeToken = token => {
	const decodedToken = JSON.parse(atob(token.split('.')[1]));
        return decodedToken;
}

// LOGIN --------------------------------------------

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {

	dispatch({ type: LOGIN_START });
	axios.post('https://mympy-dreamers.herokuapp.com/auth/login', creds)
	.then(res => {
		console.log(res);
		localStorage.setItem('token', res.data.token);
		const decode = decodeToken(res.data.token);
		localStorage.setItem('username', decode.username);
		dispatch({ type: LOGIN_SUCCESS, payload: res.data.token, decoded: decode });
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
		dispatch({ type: REGISTER_SUCCESS, payload: res })
	})
	.catch(err => {
		dispatch({ type: REGISTER_FAILURE, payload: err.response });
	});
}

// END OF REGISTER -------------------------------------------------

// FETCH DREAMS ----------------------------------------------------
export const FETCH_DREAMS_START = 'FETCH_DREAMS_START';
export const FETCH_DREAMS_SUCCESS = 'FETCH_DREAMS_SUCCESS';
export const FETCH_DREAMS_FAILURE = 'FETCH_DREAMS_FAILURE';

export const fetchAllDreams = () => dispatch => {
	dispatch({ type: FETCH_DREAMS_START });
	axios.get('https://mympy-dreamers.herokuapp.com/api/dreams')
	.then(res => {
		dispatch({ type: FETCH_DREAMS_SUCCESS, payload: res.data });
	})
	.catch(err => console.log(err));
}
// END OF FETCH DREAMS ---------------------------------------------

// FETCH USER BY ID ------------------------------------------------
export const FETCH_USER_BY_ID_START = 'FETCH_USER_BY_ID_START';
export const FETCH_USER_BY_ID_SUCCESS = 'FETCH_USER_BY_ID_SUCCESS';
export const FETCH_USER_BY_ID_FAILURE = 'FETCH_USER_BY_ID_FAILURE';

export const fetchUserById = (id) => dispatch => {
	dispatch({ type: FETCH_USER_BY_ID_START });
	axios.get(`http://mympy-dreamers.herokuapp.com/api/${id}`, token)
	.then(res => {
		console.log(res);
		dispatch({ type: FETCH_USER_BY_ID_SUCCESS, payload: res.data });
	})
	.catch(err => console.log(err));                                                   
}
// END OF FETCH USER BY ID ------------------------------------------
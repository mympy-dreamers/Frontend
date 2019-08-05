import axios from 'axios';

export const FETCH_USER_BY_ID_START = 'FETCH_USER_BY_ID_START';
export const FETCH_USER_BY_ID_SUCCESS = 'FETCH_USER_BY_ID_SUCCESS';
export const FETCH_USER_BY_ID_FAILURE = 'FETCH_USER_BY_ID_FAILURE';

export const fetchUserById = (id) => dispatch => {
	dispatch({ type: FETCH_USER_BY_ID_START });
	axios.get(`http://mympy-dreamers.herokuapp.com/api/user/${id}`, token)
	.then(res => {
		console.log(res);
		dispatch({ type: FETCH_USER_BY_ID_SUCCESS, payload: res.data });
	})
	.catch(err => console.log(err));                                                   
}
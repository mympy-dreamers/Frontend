import {
	LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions';

const initialState = {

};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_START:
			return {
			};
		case LOGIN_SUCCESS:
			return {
			};
		case LOGIN_FAILURE:
			return {
			};
		default:
			return state;
	}	
}

export default reducer;
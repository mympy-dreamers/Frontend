import {
	LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions';
import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE } from '../actions';

const initialState = {
	token: '',
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
		case REGISTER_START:
			return {
				...state,
				
			}
		case REGISTER_SUCCESS:
			return {
				...state,
				
			}
		case REGISTER_FAILURE:
			return {
				...state,

			}
		default:
			return state;
	}	
}

export default reducer;
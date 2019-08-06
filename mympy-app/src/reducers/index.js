import { combineReducers } from 'redux'

import authReducer from './auth'; 
import dreamsReducer from './dreams';
import usersReducer from './users';

export default combineReducers({
	auth: authReducer,
	dreams: dreamsReducer,
	users: usersReducer
})
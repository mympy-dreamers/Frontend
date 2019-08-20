import { combineReducers} from 'redux'

import authReducer from './auth';
import dreamsReducer from './dreams';
import usersReducer from './users';
import journalsReducer from './journals';

export default combineReducers({
    auth: authReducer,
    dreams: dreamsReducer,
    users: usersReducer,
    journals: journalsReducer
})
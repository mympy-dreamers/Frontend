import { combineReducers} from 'redux'

import authReducer from './auth';
import dreamsReducer from './dreams';
import usersReducer from './users';
import journalsReducer from './journals';
import stripeReducer from './stripe';

export default combineReducers({
    auth: authReducer,
    dreams: dreamsReducer,
    users: usersReducer,
    journals: journalsReducer,
    stripe: stripeReducer,
})
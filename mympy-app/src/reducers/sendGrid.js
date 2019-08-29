import {
    SEND_EMAIL_START,
    SEND_EMAIL_SUCCESS,
    SEND_EMAIL_FAILURE,
} from '../actions';

const INITIAL_STATE = {
    fetching: false,
    response: null,
    errors: [],
}

export default function sendGridReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SEND_EMAIL_START:
            return {
                ...state,
                fetching: true,
            }
        case SEND_EMAIL_SUCCESS:
            return {
                ...state,
                fetching: false,
                response: action.payload,
            }
        case SEND_EMAIL_FAILURE:
            return {
                ...state,
                errors: [...this.state.errors, action.payload]
            }
        default:
            return state
    }
}
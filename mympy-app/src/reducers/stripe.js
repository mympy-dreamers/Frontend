import { 
    DREAM_PAY_START, 
    DREAM_PAY_SUCCESS, 
    DREAM_PAY_FAILURE,
    DREAMPAY_POST_START,
    DREAMPAY_POST_SUCCESS,
    DREAMPAY_POST_FAILURE,
    USER_PAY_START,
    USER_PAY_SUCCESS,
    USER_PAY_FAILURE,
    USERPAY_POST_START,
    USERPAY_POST_SUCCESS,
    USERPAY_POST_FAILURE,
} from '../actions';

const INITIAL_STATE = {
    fetching: false,
    dreamPaymentId: null,
    userPaymentId: null,
    dreamPayments: [],
    userPayments: [],
    errors: [],
}

export default function stripeReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case DREAM_PAY_START:
            return {
                ...state,
                fetching: true,
            }
        case DREAM_PAY_SUCCESS:
            return {
                ...state,
                dreamPayments: action.payload
            }
        case DREAM_PAY_FAILURE:
            return {
                ...state,
                errors: [...state.errors, action.payload],
            }
        case DREAMPAY_POST_START:
            return {
                ...state,
            }
        case DREAMPAY_POST_SUCCESS:
            return {
                ...state,
                dreamPaymentId: action.payload
            }
        case DREAMPAY_POST_FAILURE:
            return {
                ...state,
                errors: [...state.errors, action.payload],
            }
        case USER_PAY_START:
            return {
                ...state,
            }
        case USER_PAY_SUCCESS:
            return {
                ...state,
                userPayments: action.payload
            }
        case USER_PAY_FAILURE:
            return {
                ...state,
                errors: [...state.errors, action.payload],
            }
        case USERPAY_POST_START:
            return {
                ...state,
            }
        case USERPAY_POST_SUCCESS:
            return {
                ...state,
                userPaymentId: action.payload
            }
        case USERPAY_POST_FAILURE:
            return {
                ...state,
                errors: [...state.errors, action.payload],
            }
        default:
            return state
    }
}
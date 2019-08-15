import {
    FETCH_USERS_START,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    FETCH_USER_START,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    DELETE_USER_START,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
    SET_USER, SET_LOG,
    UPDATE_DREAM_USER,
} from '../actions'


const INITIAL_STATE = {
    fetching: false,
    deletingUser: false,
    errors: [],
    users: [],
    refreshUser: false,
    user: {},
    authZeroUser: {
        given_name: "",
        family_name: ""
    },
    firstLogin: false
}


export default function usersReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_USERS_START:
            return {
                ...state,
                fetching: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                fetching: false,
                users: action.payload
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                fetching: false,
                errors: action.payload
            }
        case UPDATE_DREAM_USER:
            return {
                ...state,
                refreshUser: true
            }
        case FETCH_USER_START:
            return {
                ...state,
                fetching: true,
                refreshUser: false
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                fetching: false,
                user: action.payload,
            }
        case FETCH_USER_FAILURE:
            return {
                ...state,
                fetching: false,
                errors: action.payload
            }
        case DELETE_USER_START:
            return {
                ...state,
                deletingUser: true
            }
        case DELETE_USER_SUCCESS:
            const { users } = state;
            const filteredUsers = users.filter(user => {
                return user.id !== action.payload;
            });
            return {
                ...state,
                deletingUser: false,
                users: [...filteredUsers]
            }
        case DELETE_USER_FAILURE:
            return {
                ...state,
                deletingUser: false,
                errors: action.payload
            }
        case SET_USER:
            return {
                ...state,
                authZeroUser: action.payload,
                firstLogin: true
            }
        case SET_LOG:
            return {
                ...state,
                firstLogin: false
            }

        default:
            return state
    }
}
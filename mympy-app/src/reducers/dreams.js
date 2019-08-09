import {
	FETCH_DREAMS_START,
	FETCH_DREAMS_SUCCESS,
	FETCH_DREAMS_FAILURE,
	FETCH_DREAM_START,
	FETCH_DREAM_SUCCESS,
	FETCH_DREAM_FAILURE,
	UPDATE_DREAM_START,
	UPDATE_DREAM_SUCCESS,
	UPDATE_DREAM_FAILURE,
	DELETE_DREAM_START,
	DELETE_DREAM_SUCCESS,
	DELETE_DREAM_FAILURE,
	UPDATE_SEARCH
} from '../actions'

const INITIAL_STATE = {
	fetching: false,
	errors: [],
	deletingDream: false,
	dreams: [],
	searchDreams: "",
	currDream: {}
}

export default function dreamsReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_DREAMS_START:
			return {
				...state,
				fetching: true
			}
		case FETCH_DREAMS_SUCCESS:
			return {
				...state,
				fetching: false,
				dreams: action.payload
			}
		case FETCH_DREAMS_FAILURE:
			return {
				...state,
				fetching: false,
				errors: action.payload
			}
		case FETCH_DREAM_START:
			return {
				...state,
				fetching: true
			}

		case FETCH_DREAM_SUCCESS:
			return {
				...state,
				fetching: false,
				currDream: action.payload
			}
		case FETCH_DREAM_FAILURE:
			return {
				...state,
				fetching: false
			}
		case DELETE_DREAM_START:
			return {
				...state,
				deletingDream: true
			}
		case DELETE_DREAM_SUCCESS:
			const { dreams } = state;
			const filteredDreams = dreams.filter(dream => {
				return dream.id !== action.payload;
			});
			return {
				...state,
				deletingDream: false,
				dreams: [...filteredDreams]
			}
		case DELETE_DREAM_FAILURE:
			return {
				...state,
				deletingDream: false,
				errors: action.payload
			}
		case UPDATE_SEARCH:
			return {
				...state,
				searchDreams: action.payload
			}
		default:
			return state;
	}
}
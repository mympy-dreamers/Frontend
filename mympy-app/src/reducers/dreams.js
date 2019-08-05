import {
    FETCH_DREAMS_START, 
    FETCH_DREAMS_SUCCESS, 
    FETCH_DREAMS_FAILURE,
    UPDATE_DREAM_START,
    UPDATE_DREAM_SUCCESS,
    UPDATE_DREAM_FAILURE, 
    DELETE_DREAM_START, 
    DELETE_DREAM_SUCCESS, 
    DELETE_DREAM_FAILURE
  } from '../actions'
  
  const INITIAL_STATE = {
      fetching: false,
      errors: [],
      dreams: [],
      deletingDream: false
    };
  
  export default function dreamsReducer(state = INITIAL_STATE, action) {
      switch(action.type) {
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
        case DELETE_DREAM_START:
          return {
            ...state,
            deletingDREAM: true
          }
        case DELETE_DREAM_SUCCESS:
          const { DREAMs } = state;
          const filteredDREAMs = DREAMs.filter(DREAM => {
                return DREAM.id !== action.payload;
          });
           
          return {
            ...state,
            deletingDREAM: false,
            DREAMs: [ ...filteredDREAMs ]
          }
        case DELETE_DREAM_FAILURE:
          return {
            ...state,
            deletingDREAM: false,
            errors: action.payload
          }
        default:
          return state;
      }
    }
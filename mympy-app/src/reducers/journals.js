import {
    FETCH_JOURNALS_START,
    FETCH_JOURNALS_SUCCESS,
    FETCH_JOURNALS_FAILURE,
    FETCH_JOURNAL_START,
    FETCH_JOURNAL_SUCCESS,
    FETCH_JOURNAL_FAILURE,
    FETCH_DREAM_JOURNALS_START,
    FETCH_DREAM_JOURNALS_SUCCESS,
    FETCH_DREAM_JOURNALS_FAILURE,
    ADD_JOURNAL_START,
    ADD_JOURNAL_SUCCESS,
    ADD_JOURNAL_FAILURE,
    UPDATE_JOURNAL_START,
    UPDATE_JOURNAL_SUCCESS,
    UPDATE_JOURNAL_FAILURE,
    DELETE_JOURNAL_START,
    DELETE_JOURNAL_SUCCESS,
    DELETE_JOURNAL_FAILURE
} from '../actions'

const INITIAL_STATE = {
    journals: [],
    dreamJournals: [],
    currentJournal: {},
    errors: {},
    fetching: false
}

export default function journalsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_JOURNALS_START:
            return {
                ...state,
                fetching: true
            }
        case FETCH_JOURNALS_SUCCESS:
            return {
                ...state,
                fetching: false,
                journals: action.payload
            }
        case FETCH_JOURNALS_FAILURE:
            return {
                ...state,
                fetching: false,
                errors: action.payload
            }
        case FETCH_JOURNAL_START:
            return {
                ...state,
                fetching: true
            }
        case FETCH_JOURNAL_SUCCESS:
            return {
                ...state,
                fetching: false,
                currentJournal: action.payload
            }
        case FETCH_JOURNAL_FAILURE:
            return {
                ...state,
                fetching: false
            }
        case FETCH_DREAM_JOURNALS_START:
            return {
                ...state,
            }
        case FETCH_DREAM_JOURNALS_SUCCESS:
            return {
                ...state,
                dreamJournals: action.payload
            }
        case FETCH_DREAM_JOURNALS_FAILURE:
            return {
                ...state,
                errors: action.payload
            }
        case ADD_JOURNAL_START:
            return {
                ...state
            }
        case ADD_JOURNAL_SUCCESS:
            return {
                ...state,
                journals: [action.payload, ...state.journals],
                userDreams: [action.payload, ...state.userDreams]
            }
        case ADD_JOURNAL_FAILURE:
            return {
                ...state,
                errors: action.payload
            }
        case UPDATE_JOURNAL_START:
            return {
                ...state,
            }
        case UPDATE_JOURNAL_SUCCESS:
            const filtered = state.dreamJournals.filter(journal => {
                return journal.id !== action.payload.id;
            });
            return {
                ...state,
                dreamJournals: [action.payload, ...filtered]
            }
        case UPDATE_JOURNAL_FAILURE:
            return {
                ...state,
                errors: action.payload
            }
        case DELETE_JOURNAL_START:
            return {
                ...state
            }
        case DELETE_JOURNAL_SUCCESS:
            const { dreamJournals } = state;
            const filteredJournals = dreamJournals.filter(journal => {
                return journal.id !== action.payload;
            });
            return {
                ...state,
                dreamJournals: [...filteredJournals]
            }
        case DELETE_JOURNAL_FAILURE:
            return {
                ...state,
                errors: action.payload
            }
        default:
            return state;
    }
} 

// import {
//     FETCH_JOURNALS_START,
//     FETCH_JOURNALS_SUCCESS,
//     FETCH_JOURNALS_FAILURE,
//     FETCH_JOURNAL_START,
//     FETCH_JOURNAL_SUCCESS,
//     FETCH_JOURNAL_FAILURE,
//     FETCH_DREAM_JOURNALS_START,
//     FETCH_DREAM_JOURNALS_SUCCESS,
//     FETCH_DREAM_JOURNALS_FAILURE,
//     ADD_JOURNAL_START,
//     ADD_JOURNAL_SUCCESS,
//     ADD_JOURNAL_FAILURE,
//     UPDATE_JOURNAL_START,
//     UPDATE_JOURNAL_SUCCESS,
//     UPDATE_JOURNAL_FAILURE,
//     DELETE_JOURNAL_START,
//     DELETE_JOURNAL_SUCCESS,
//     DELETE_JOURNAL_FAILURE
// } from '../actions'

// const INITIAL_STATE = {
//     journals: [],
//     dreamJournals: [],
//     currentJournal: {},
//     errors: {},
// 	fetching: false,
	
// }

// export default function journalsReducer(state = INITIAL_STATE, action) {
// 	switch (action.type) {
// 		case FETCH_JOURNALS_START:
// 			return {
// 				...state,
// 				fetching: true
// 			}
// 		case FETCH_JOURNALS_SUCCESS:
// 			return {
// 				...state,
// 				fetching: false,
// 				journals: action.payload
// 			}
// 		case FETCH_JOURNALS_FAILURE:
// 			return {
// 				...state,
// 				fetching: false,
// 				errors: action.payload
// 			}
// 		case FETCH_JOURNAL_START:
// 			return {
// 				...state,
// 				fetching: true
// 			}
// 		case FETCH_JOURNAL_SUCCESS:
// 			return {
// 				...state,
// 				fetching: false,
// 				currentJournal: action.payload
// 			}
// 		case FETCH_JOURNAL_FAILURE:
// 			return {
// 				...state,
// 				fetching: false
// 			}
// 		case FETCH_DREAM_JOURNALS_START:
// 			return {
// 				...state,
// 			}
// 		case FETCH_DREAM_JOURNALS_SUCCESS:
// 			return {
// 				...state,
// 				dreamJournals: action.payload
// 			}
// 		case FETCH_DREAM_JOURNALS_FAILURE:
// 			return {
// 				...state,
// 				feaching: false,
// 				errors: action.payload
// 			}
// 		case ADD_JOURNAL_START:
// 			return {
// 				...state
// 			}
// 		case ADD_JOURNAL_SUCCESS:
// 			return {
//                 ...state,
//                 journals: [action.payload, ...state.journals],
// 				dreamJournals: [action.payload, ...state.dreamJournals]
				
// 			}
// 		case ADD_JOURNAL_FAILURE:
// 			return {
// 				...state,
// 				errors: action.payload
//             }
//         case UPDATE_JOURNAL_START:
//             return {
//                 ...state,
//             }
//         case UPDATE_JOURNAL_SUCCESS:
//             const filtered = state.dreamJournals.filter(journal => {
//                 return journal.id !== action.payload.id;
//             });
//             return {
//                 ...state,
//                 dreamJournals: [action.payload, ...filtered]
//             }
//         case UPDATE_JOURNAL_FAILURE:
//             return {
//                 ...state,
//                 errors: action.payload
//             }
// 		case DELETE_JOURNAL_START:
// 			return {
// 				...state
// 			}
// 		case DELETE_JOURNAL_SUCCESS:
// 			const { dreamJournals } = state;
// 			const filteredJournals = dreamJournals.filter(journal => {
// 				return journal.id !== action.payload;
// 			});
// 			return {
// 				...state,
// 				dreamJournals: [...filteredJournals]
// 			}
// 		case DELETE_JOURNAL_FAILURE:
// 			return {
// 				...state,
// 				errors: action.payload
// 			}
// 		default:
// 			return state;
// 	}
// }
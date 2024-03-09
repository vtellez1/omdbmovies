import MoviesActionTypes from './movies.types'

const INITIAL_STATE = {
    movies: [],
    isFetching: false,
    isLoaded: false,
    savedTitle: '',
    savedPageNum: 1,
    error: ''
}

const moviesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MoviesActionTypes.FETCH_MOVIES_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case MoviesActionTypes.FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isLoaded: true,
                movies: action.payload
            }
        case MoviesActionTypes.FETCH_MOVIES_FAILURE:
            return {
                ...state,
                isFetching: false,
                isLoaded: false,
                error: action.payload
            }
        case MoviesActionTypes.SAVE_TITLE:
            return {
                ...state,
                savedTitle: action.payload
            }
        case MoviesActionTypes.SAVE_PAGE:
            return {
                ...state,
                savedPageNum: action.payload
            }
        default:
            return state;
    }
};

export default moviesReducer
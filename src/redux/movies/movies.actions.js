import MoviesActionTypes from './movies.types';
import axios from 'axios';

export const fetchMovies = (movieTitle, page) => dispatch => {

    dispatch({ type: MoviesActionTypes.FETCH_MOVIES_START });
    axios
        .get(`http://www.omdbapi.com/?s=${movieTitle}&page=${page}&type=movie&apikey=84bd5153`)
        .then(res => dispatch({ type: MoviesActionTypes.FETCH_MOVIES_SUCCESS,
            payload: res.data.Search }))
        .catch(err => dispatch({ type: MoviesActionTypes.FETCH_MOVIES_FAILURE,
            payload: err.response }))
};

export const saveTitle = movieTitle => ({
    type: MoviesActionTypes.SAVE_TITLE,
    payload: movieTitle
})

export const savePage = page => ({
    type: MoviesActionTypes.SAVE_PAGE,
    payload: page
})
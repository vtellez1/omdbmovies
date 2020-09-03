import React from 'react';
import { connect } from 'react-redux';

import MovieCard from '../movieCard/movieCard.component';

import { MovieResultsContainer, MovieCards } from './searchResults.styles'

const SearchResults = ({ movies }) => {

    let movieList = movies.movies;

    return (
    <div>

        {movies.isFetching && <h2>Movies loading...! </h2>}
        
        {movies.isLoaded ? 
        <MovieResultsContainer>
            <h2>Movie Search Results </h2>
            <MovieCards>
            {movieList.map(movie => (
            <MovieCard key={movie.imdbID} movie={movie}/>   
            ))}
               
            </MovieCards>

        </MovieResultsContainer> : 
        
        <div>
            <p>Search a movie title to load movies.</p>
        </div>
        }

    </div>        
    )
};

const mapStateToProps = state => {
    return{
        movies: state.movies,
        isFetching: state.isFetching,
        isLoaded: state.isLoaded,
        error: state.error,
        nominations: state.nominations
    }
}


export default connect(mapStateToProps)(SearchResults);
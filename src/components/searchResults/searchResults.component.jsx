import React from 'react';
import { connect } from 'react-redux';

import MovieCard from '../movieCard/movieCard.component';

import { MovieResultsContainer, MovieCards, LoadingDiv, Instructions } from './searchResults.styles'

const SearchResults = ({ movies }) => {

    let movieList = movies.movies;

    return (
    <div>
        {movies.isFetching && 
        <div>
            <h2>Movies loading...! </h2>
            <LoadingDiv></LoadingDiv>    
        </div>
        }
        
        {movieList === undefined ? <h3>No movie found. Try search again.</h3> : 
        movies.isLoaded ? 
        <MovieResultsContainer>
            <MovieCards>
            {movieList.map(movie => (
            <MovieCard key={movie.imdbID} movie={movie}/>   
            ))}
            </MovieCards>

        </MovieResultsContainer> : 
        
        <div>
            <Instructions>Search a movie title to load movies.</Instructions>
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
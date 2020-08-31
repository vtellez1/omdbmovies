import React from 'react';
import { connect } from 'react-redux';

import MovieCard from '../movieCard/movieCard.component';

const SearchResults = ({  movies }) => {

    let movieList = movies.movies;

    return (
    <div>

        {movies.isFetching && <h2>Movies loading...! </h2>}
        
        {movies.isLoaded ? 
        <div>
            <h1>Search Results </h1>
            {movieList.map(movie => (
            <MovieCard key={movie.id} movie={movie} />   
            ))}
        </div> : 
        
        <div>
            <p>Search a movie title to load movies</p>
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
        error: state.error
    }
}


export default connect(mapStateToProps)(SearchResults);
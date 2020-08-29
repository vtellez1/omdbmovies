import React from 'react';
import { connect } from 'react-redux';

import MovieCard from '../movieCard/movieCard.component';

const SearchResults = (props) => {

    const { isFetching, movies, error } = props;

    return (
    <div>
        <h1>Search Results </h1>
        {/* {movies.length > 1 && movies.map(movie => 
            <MovieCard key={movie.id} props={props}/>)}
        {console.log(movies)} */}
    </div>        
    )
};

const mapStateToProps = state => {
    return{
        movies: state.movies,
        isFetching: state.isFetching,
        error: state.error
    }
}


export default connect(mapStateToProps, null)(SearchResults);
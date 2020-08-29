import React from 'react';
import { connect } from 'react-redux';

const MovieCard = (props) => {

    return (
    <div>
        <p>Movie Card</p>
        <h1>{props.movie.Title}</h1>
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


export default connect(mapStateToProps, null)(MovieCard);
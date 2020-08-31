import React from 'react';
import { connect } from 'react-redux';

import { addNomination } from '../../redux/nominations/nominations.actions'

import { MovieCardContainer } from './movieCard.styles'

const MovieCard = ({ movie, nominations, addNomination }) => {

    const movieClick = () => {
        addNomination(movie)
        console.log(nominations)
    }

    return (
        <MovieCardContainer>
            <img alt="movie poster" src={movie.Poster}/>
            <h3>{movie.Title}</h3>
            <p>Release Year: {movie.Year}</p>
            <button onClick={movieClick}>Nominate</button>
        </MovieCardContainer>        
    )
};

const mapStateToProps = state => {
    return{
        movies: state.movies,
        nominations: state.nominations
    }
}

export default connect(mapStateToProps, {addNomination})(MovieCard);
import React from 'react';
import { connect } from 'react-redux';

import { addNomination, removeNomination } from '../../redux/nominations/nominations.actions'

import { MovieCardContainer } from './movieCard.styles'

const MovieCard = ({ movie, addNomination, removeNomination, nominated }) => {

    const movieClick = () => {
        addNomination(movie)
    }

    const removeNominee = () =>{
        removeNomination(movie)
    }

    return (
        <MovieCardContainer>
            <img alt="movie poster" src={movie.Poster}/>
            <h3>{movie.Title}</h3>
            <p>Release Year: {movie.Year}</p>
            {nominated ? 
            <button onClick={removeNominee}>Remove Nomination</button> : 
            <button onClick={movieClick}>Nominate</button>
        }


        </MovieCardContainer>        
    )
};

const mapStateToProps = state => {
    return{
        movies: state.movies
    }
}

export default connect(mapStateToProps, {addNomination, removeNomination})(MovieCard);
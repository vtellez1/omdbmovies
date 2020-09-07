import React from 'react';
import { connect } from 'react-redux';

import { addNomination, removeNomination } from '../../redux/nominations/nominations.actions'

import { MovieCardContainer } from './movieCard.styles'

const MovieCard = ({ movie, nominations, addNomination, removeNomination, nominated }) => {
    console.log(nominations.nominations)
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
            {movie.imdbID in nominations.nominations ?
                <button onClick={removeNominee}>Remove Nomination</button> :
                <button onClick={movieClick}>Nominate</button>
            }

        </MovieCardContainer>        
    )
};

const mapStateToProps = state => {
    return{
        movies: state.movies,
        nominations: state.nominations
    }
}

export default connect(mapStateToProps, {addNomination, removeNomination})(MovieCard);
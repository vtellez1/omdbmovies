import React from 'react';

import { MovieCardContainer } from './movieCard.styles'

const MovieCard = ({ movie }) => {
    return (
        <MovieCardContainer>
            <img alt="movie poster" src={movie.Poster}/>
            <h3>{movie.Title}</h3>
            <p>Release Year: {movie.Year}</p>
            <button>Nominate</button>
        </MovieCardContainer>        
    )
};

export default MovieCard;
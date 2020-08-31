import React from 'react';

const MovieCard = ({ movie }) => {
    return (
        <div>
            <p>Movie Card</p>
            <img alt="movie poster" src={movie.Poster}/>
            <h2>Title: {movie.Title}</h2>
            <p>Year: {movie.Year}</p>
            <button>Nominate</button>
        </div>        
    )
};

export default MovieCard;
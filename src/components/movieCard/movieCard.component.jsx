import React from 'react';

const MovieCard = ({ movie }) => {
console.log(movie);

    return (
    <div>
        <p>Movie Card</p>
        <img alt="movie poster" src={movie.Poster}/>
        <h2>Title: {movie.Title}</h2>
        <p>Year: {movie.Year}</p>
    </div>        
    )
};



export default MovieCard;
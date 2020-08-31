import React from 'react';

const MovieCard = ({ movie }) => {
console.log(movie);

    return (
    <div>
        <p>Movie Card</p>
        <img src={movie.Poster}/>
        <h1>Title: {movie.Title}</h1>
        <p>Year: {movie.Year}</p>
    </div>        
    )
};



export default MovieCard;
import React from 'react';

const MovieCard = (props) => {
    const { movies } = props;

    return (
    <div>
        <p>Movie Card</p>
        <h1>{console.log(movies.movies)}</h1>
    </div>        
    )
};



export default MovieCard;
import React, { useState } from 'react';
import { connect } from 'react-redux';

import { fetchMovies } from '../../redux/movies/movies.actions';

const SearchBar = ({ fetchMovies }) => {
    
    const [movieTitle, setMovieTitle ] = useState({title: ''});

    const { title } = movieTitle;
    
    const handleChange = e => {
        setMovieTitle({...movieTitle, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        fetchMovies(title);
    }

    return(
      <div>
        <h1>Search Movies</h1>
        <span>Search movies by title </span>

        <form onSubmit={handleSubmit}>
            <input 
            name='title'
            type='title'
            label='title'
            onChange={handleChange}
            required />
        <button>Submit</button>
        </form>
        
    </div>  
    )
};


export default connect(null, { fetchMovies })(SearchBar);
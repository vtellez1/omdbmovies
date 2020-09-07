import React, { useState } from 'react';
import { connect } from 'react-redux';

import { fetchMovies } from '../../redux/movies/movies.actions';

import { InputStyled, SearchButton } from './searchBar.styles'

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
        <form onSubmit={handleSubmit}>
            <InputStyled
            name='title'
            type='title'
            label='title'
            placeholder='Search movie title'
            onChange={handleChange}
            required 
            minLength="3"/>
        <SearchButton><i class="fas fa-search"></i></SearchButton>
        </form>
        
    </div>  
    )
};


export default connect(null, { fetchMovies })(SearchBar);
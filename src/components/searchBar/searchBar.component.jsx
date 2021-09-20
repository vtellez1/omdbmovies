import React, { useState } from 'react';
import { connect } from 'react-redux';

import { fetchMovies } from '../../redux/movies/movies.actions';
import SearchResults from '../searchResults/searchResults.component';
import { InputStyled, SearchButton, InputDiv, TitleDiv, PageNumDiv, PageNumber, CurrentPageNumber, PageButton} from './searchBar.styles'

const SearchBar = ({ fetchMovies }) => {
    
    const [movieTitle, setMovieTitle ] = useState({title: ''});
    const [pageNumber, setPageNumber ] = useState(1);

    const { title } = movieTitle;
    
    const handleChange = e => {
        setMovieTitle({...movieTitle, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        fetchMovies(title, pageNumber);
    }

    const backPage = () => {
        if(pageNumber > 1 && title !== ''){
            setPageNumber(pageNumber - 1)    
        }
    }

    const nextPage = () => {
        if(pageNumber < 100 && title !== ''){
            setPageNumber(pageNumber + 1)    
        }
    }

    return(
      <div>
        <form onSubmit={handleSubmit}>
            <InputDiv>
                <TitleDiv>
                    <InputStyled
                    name='title'
                    type='title'
                    label='title'
                    placeholder='Search movie title'
                    onChange={handleChange}
                    required 
                    minLength="3"/>
                    <SearchButton><i class="fas fa-search"></i></SearchButton>               
                </TitleDiv>

            <SearchResults/>

                <PageNumDiv>
                    
                    <PageButton onClick={backPage}><i class="fas fa-angle-left"></i></PageButton>
                    <PageNumber id="prevNumber">{pageNumber - 1}</PageNumber>              
                    <CurrentPageNumber>{pageNumber}</CurrentPageNumber>
                    <PageNumber>{pageNumber + 1}</PageNumber>
                    <PageButton onClick={nextPage}><i class="fas fa-angle-right"></i></PageButton>
                </PageNumDiv> 
            </InputDiv>

        
        </form>
        
    </div>  
    )
};


export default connect(null, { fetchMovies })(SearchBar);
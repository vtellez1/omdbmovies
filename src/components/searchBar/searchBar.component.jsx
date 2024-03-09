import React, { useState } from 'react';
import { connect } from 'react-redux';

import { fetchMovies, saveTitle, savePage } from '../../redux/movies/movies.actions';
import HeroSection from '../heroSection/hero.component';
import SearchResults from '../searchResults/searchResults.component';
import { InputStyled, SearchButton, InputDiv, TitleDiv, PageNumDiv, PageNumber, CurrentPageNumber, PageButton} from './searchBar.styles'

const SearchBar = ({ fetchMovies, saveTitle, savedTitle, savePage, savedPageNum, movies }) => {
    const [movieTitle, setMovieTitle ] = useState({title: savedTitle});
    const [pageNumber, setPageNumber ] = useState(savedPageNum);

    let { title } = movieTitle;
    
    const handleChange = e => {
        saveTitle('')
        setMovieTitle({...movieTitle, [e.target.name]: e.target.value })
        setPageNumber(1)    
        savePage(pageNumber)
    }

    const handleSubmit = e => {
        e.preventDefault();
        fetchMovies(title, pageNumber);
        saveTitle(title)
        savePage(pageNumber)
    }

    const backPage = () => {
        console.log('backpage is called')
        if(pageNumber > 1 && title !== ''){
            setPageNumber(pageNumber - 1)    
        }
    }

    const nextPage = () => {
        if(pageNumber < 100 && title !== ''){
            setPageNumber(pageNumber + 1)    
        }
    }

    let backButton;
    let backButtonDisabled = false;
    if (pageNumber >= 1 ){
        backButtonDisabled = false
        if (pageNumber > 1) {
            backButton = <PageNumber id="prevNumber">{ pageNumber - 1 }</PageNumber>
        }
    } else {
        backButton = <div></div>
        backButtonDisabled = true
    }

    let nextButton;
    let nextButtonDisabled = false;
    if ((movies.movies).length > 9){
        nextButton = <PageNumber>{pageNumber + 1}</PageNumber>
        nextButtonDisabled = false;
    } else {
        nextButton = <div></div>
        nextButtonDisabled = true
    }


    let showPageNumDiv;
    if (savedTitle){
        showPageNumDiv = <PageNumDiv>
                    <PageButton id="backArrow" onClick={backPage} disabled={backButtonDisabled}><i class="fas fa-angle-left"></i></PageButton>
                    {backButton}             
                    <CurrentPageNumber>{pageNumber}</CurrentPageNumber>
                    {nextButton}
                    <PageButton id="forwardArrow" onClick={nextPage} disabled={nextButtonDisabled}><i class="fas fa-angle-right"></i></PageButton>
                </PageNumDiv> 
    } else {
        showPageNumDiv = ''
    }

    return(
      <div>
        
        <HeroSection/>
        <form onSubmit={handleSubmit} name="searchSection">
            <InputDiv>
                <TitleDiv>
                    <InputStyled
                    name='title'
                    type='title'
                    label='title'
                    placeholder={ savedTitle ? savedTitle : 'Search movie title'}
                    onChange={handleChange}
                    minLength="3"/>
                    <SearchButton><i class="fas fa-search"></i></SearchButton>               
                </TitleDiv>

            <SearchResults/>

                {showPageNumDiv}

            </InputDiv>

        </form>
        
    </div>  
    )
};
const mapStateToProps = state => {
    return {
        savedTitle: state.movies.savedTitle,
        savedPageNum: state.movies.savedPageNum,
        movies: state.movies
    }
}

export default connect(mapStateToProps, { fetchMovies, saveTitle, savePage })(SearchBar);
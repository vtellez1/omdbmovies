import React from 'react';
import { connect } from 'react-redux';

import MovieCard from '../components/movieCard/movieCard.component';
import { MovieResultsContainer, MovieCards } from '../components/searchResults/searchResults.styles';
import { PageContainer } from './homepage.styles';

const NominatedList = ({ nominations }) => {

    let nominationList = Object.values(nominations.nominations);

    return(
    <PageContainer>
        <MovieResultsContainer>
        <h1>Nominated Movies</h1>
        <MovieCards>
         {nominationList.map(movie => (
            <MovieCard key={movie.imdbID} movie={movie} nominated={true}/>   
            ))}            
        </MovieCards>
        </MovieResultsContainer>
    </PageContainer>
    )

};

const mapStateToProps = state => {
    return{
        nominations: state.nominations
    }
}

export default connect(mapStateToProps)(NominatedList);
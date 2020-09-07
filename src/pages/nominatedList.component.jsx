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
        <h2>Nominated Movies</h2>
        {Object.keys(nominations.nominations).length < 1 ? 
        <div>
        <i class="fas fa-star fa-2x"></i>  <i class="fas fa-film fa-2x"></i>  <i class="fas fa-video fa-2x"></i>
        <p>  Start nominating movies and see your list here! </p>    
        </div>
         : null}

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
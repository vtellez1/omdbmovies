import React from 'react';
import { connect } from 'react-redux';

import MovieCard from '../components/movieCard/movieCard.component';
import { MovieResultsContainer, MovieCards } from '../components/searchResults/searchResults.styles';

const NominatedList = ({ nominations }) => {

    let nominationList = Object.values(nominations.nominations);

    return(
    <div>
        <MovieResultsContainer>
        <h1>Nominated Movies</h1>
        <MovieCards>
         {nominationList.map(movie => (
            <MovieCard key={movie.imdbID} movie={movie} nominated={true}/>   
            ))}            
        </MovieCards>
        </MovieResultsContainer>

    </div>
    )

};

const mapStateToProps = state => {
    return{
        nominations: state.nominations
    }
}

export default connect(mapStateToProps)(NominatedList);
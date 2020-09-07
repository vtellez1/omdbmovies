import React from 'react';
import { connect } from 'react-redux';

import { BannerContainer, BannerDiv } from './banner.styles.jsx';

const Banner = ({ nominations }) => {

    return(
    <BannerContainer>
        {Object.keys(nominations.nominations).length >= 5 ? 
        <BannerDiv>
        <h1>5 movies have been nominated</h1>    
        </BannerDiv>
         : null }
    </BannerContainer>        
    )
};

const mapStateToProps = state => {
    return{
        nominations: state.nominations
    }
}
export default connect(mapStateToProps)(Banner);
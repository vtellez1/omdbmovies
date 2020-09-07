import React from 'react';
import { connect } from 'react-redux';

import { BannerContainer, BannerDiv } from './banner.styles.jsx';

const Banner = ({ nominations }) => {

    return(
    <BannerContainer>
        {Object.keys(nominations.nominations).length >= 5 ? 
        <BannerDiv>
        <h1>5 Movies Have Been Nominated</h1>
        <p>If you want to add a new movie, please remove one from nomination list. </p>   
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
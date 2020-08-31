import React from 'react';
import { connect } from 'react-redux';


import { HeaderContainer, HomeLink, NominationLink } from './header.styles.jsx';

const Header = ({ nominations }) => {
    console.log(nominations)
    return(
    <HeaderContainer>
        <HomeLink to='/'><h1>Movie Awards <i class="fas fa-trophy"></i></h1></HomeLink>
    <NominationLink to='/nominated'> View Your Nomination List: {nominations.nominationCount} <i class="far fa-star"></i> </NominationLink>
    </HeaderContainer>        
    )
};

const mapStateToProps = state => {
    return{
        nominations: state.nominations
    }
}
export default connect(mapStateToProps)(Header);
import React from 'react';
import { connect } from 'react-redux';


import { HeaderContainer, HomeLink, NominationLink, StarIcon } from './header.styles.jsx';

const Header = ({ nominations }) => {

    return(
    <HeaderContainer>
        <HomeLink to='/'><h1>Movie Awards <i class="fas fa-trophy"></i></h1></HomeLink>
        <NominationLink to='/nominated'> Nominations<StarIcon>{Object.keys(nominations.nominations).length}<i class="far fa-star"></i></StarIcon> </NominationLink>
    </HeaderContainer>        
    )
};

const mapStateToProps = state => {
    return{
        nominations: state.nominations
    }
}
export default connect(mapStateToProps)(Header);
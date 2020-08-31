import React from 'react';
import { Link } from 'react-router-dom'

import { HeaderContainer, HomeLink, NominationLink } from './header.styles.jsx';

const Header = () => (
    <HeaderContainer>
        <HomeLink to='/'><h1>Movie Awards <i class="fas fa-trophy"></i></h1></HomeLink>
        <NominationLink to='/nominated'>View Your Nomination List</NominationLink>
    </HeaderContainer>
)
export default Header;
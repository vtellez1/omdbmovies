import React from 'react';

import SearchBar from '../components/searchBar/searchBar.component';
import SearchResults from '../components/searchResults/searchResults.component';

import { HomepageContainer } from './homepage.styles';

const Homepage = () => (
    <HomepageContainer>
        <SearchBar/>
        <SearchResults/>
    </HomepageContainer>
);

export default Homepage;
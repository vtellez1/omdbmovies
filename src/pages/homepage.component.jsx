import React from 'react';

import SearchBar from '../components/searchBar/searchBar.component';
import SearchResults from '../components/searchResults/searchResults.component';

import { PageContainer } from './homepage.styles';

const Homepage = () => (
    <PageContainer>
        <SearchBar/>
        <SearchResults/>
    </PageContainer>
);

export default Homepage;
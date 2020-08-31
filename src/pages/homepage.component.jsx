import React from 'react';

import SearchBar from '../components/searchBar/searchBar.component';
import SearchResults from '../components/searchResults/searchResults.component';

const Homepage = () => (
    <div>
        <SearchBar/>
        <SearchResults/>
    </div>
);

export default Homepage;
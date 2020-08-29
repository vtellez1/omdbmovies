import React from 'react';

import SearchBar from '../components/searchBar/searchBar.component';
import SearchResults from '../components/searchResults/searchResults.component';

const Homepage = () => (
    <div>
        <h1>Homepage</h1>   
        <SearchBar/>
        <SearchResults/>
    </div>
);

export default Homepage;
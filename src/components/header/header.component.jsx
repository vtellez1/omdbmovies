import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => (
    <div>
    <Link to='/'><h1>Movie Awards</h1></Link>
    <Link to='/nominated'>View Your Nomination List</Link>
    </div>
)
export default Header;
import React from 'react';
import { connect } from 'react-redux';
import Popcorn_unsplash from '../../images/popcorn_unsplash.jpeg';
import './heroStyles.css'
import { Link } from 'react-scroll';

import { HeroContainer, HeroWords, HomeActionButton } from './hero.styles.jsx';

const Header = () => {
    const heroContainerStyle = {
        backgroundImage: `url(${Popcorn_unsplash})`,
        backgroundSize: "100vw auto",
        backgroundRepeat: "no-repeat",
    }

    return(
        <HeroContainer style={heroContainerStyle}>
            <HeroWords className='lights'>
                Nominate your favorite movies <br></br>
                <Link
                    activeClass='active'
                    to='searchSection' 
                    spy={true}
                    smooth= {true}
                    offset={-70}
                    duration={500}
                ><HomeActionButton className='actBtn'>Search Movies</HomeActionButton> </Link>
            </HeroWords>
        </HeroContainer>
    )
};

const mapStateToProps = state => {
    return{
        nominations: state.nominations
    }
}
export default connect(mapStateToProps)(Header);
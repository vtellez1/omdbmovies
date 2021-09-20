import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
padding: 1rem 2.5rem;
display: flex;
justify-content: space-between;
border-bottom: 1px solid lightgray;
`

export const HomeLink = styled(Link)`
text-decoration: none;
display: flex;
align-items: center;
color: orange;
`

export const NominationLink = styled(Link)`
text-decoration: none;
display: flex;
align-items: center;
color: Black;
font-size: 1.3rem;
`

export const StarIcon = styled.span`
color: orange;
font-size: 1.6rem;
padding-left: .8rem;
`
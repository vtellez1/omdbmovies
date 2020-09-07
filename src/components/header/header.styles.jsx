import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
padding: 1rem 2.5rem;
display: flex;
justify-content: space-between;
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
color: black;
font-size: 1.3rem;
`
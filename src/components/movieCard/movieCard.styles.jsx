import styled from 'styled-components';

export const MovieCardContainer = styled.div`
width: 25%;
padding: 1.5rem;
margin: 1rem;
background-color: #101010;
box-shadow: 0 4px 8px 0 gold, 0 6px 20px 0 darkorange;
`

export const MoviePoster = styled.img`
width: 100%;
`

export const CardButton = styled.button`
    color: black;
    background-color: orange;
    padding: .6rem .9rem;
    margin: 1rem;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 13px;
    font-size: 1rem;

    &:hover{
        background-color: rgb(230, 127, 38);
    }
  `
    
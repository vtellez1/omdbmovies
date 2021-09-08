import styled from 'styled-components';

export const MovieCardContainer = styled.div`
    width: 13%;
    padding: 1rem 1.5rem;
    margin: .8rem;
    background-color: #101010;
    box-shadow: 0 3px 7px 0 gold, 0 5px 18px 0 darkorange;
`

export const MoviePoster = styled.img`
    width: 100%;
    max-height: 10rem;
`

export const MovieContents = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const CardButton = styled.button`
    color: black;
    background-color: orange;
    padding: .6rem .9rem;
    margin: 1.2rem 0rem;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 13px;
    font-size: 1rem;

    &:hover{
        background-color: rgb(230, 127, 38);
    }
  `
    
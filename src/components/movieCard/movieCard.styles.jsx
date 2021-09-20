import styled from 'styled-components';

export const MovieCardContainer = styled.div`
    width: 18%;
    padding: 1rem;
    margin: .8rem;
    background-color: #f5f5f5;
    box-shadow: 0 3px 7px 0 darkgray, 0 5px 18px 0 darkgray;
`

export const MoviePoster = styled.img`
    width: 100%;
    max-height: 15rem;
`

export const MovieContents = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: black;
    font-family: Arial, Helvetica, sans-serif;
`

export const CardButton = styled.button`
    color: white;
    background-color: orange;
    padding: .6rem .9rem;
    margin: 1rem 0rem;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 13px;
    font-size: 1rem;

    &:hover{
        background-color: rgb(230, 127, 38);
    }
  `
    
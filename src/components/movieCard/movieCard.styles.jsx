import styled from 'styled-components';

export const MovieCardContainer = styled.div`
    width: 10rem;
    padding: 1rem;
    margin: .5rem;
    background-color: #f5f5f5;
    box-shadow: 0 3px 7px 0 darkgray, 0 5px 18px 0 darkgray;

    &.grow {
        transition: all .2s ease-in-out;

        &:hover {
          transform: scale(1.1);
        }
      }
`

export const MoviePoster = styled.img`
    max-height: 10rem;
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
    padding: .5rem .8rem;
    margin: .5rem 0rem;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 13px;
    font-size: 1rem;

    &:hover{
        background-color: rgb(230, 127, 38);
    }
  `
    
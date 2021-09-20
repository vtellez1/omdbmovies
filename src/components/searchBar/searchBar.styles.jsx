import styled from 'styled-components';

export const InputStyled = styled.input`
    height: 3rem;
    outline: none;
    border: none;
    padding: 0 80px 0 20px;
    border-radius: 10px;
    box-shadow: 0 0 25px 0 lightgray, 0 20px 25px 0 rgba(0, 0, 0, 0.2);
    margin-left:5px;
`

export const SearchButton = styled.button`
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
` 

export const TitleDiv = styled.div`

`

export const PageNumDiv = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
`

export const PageButton = styled.button`
    padding: 12px;
`

export const PageNumber = styled.h2`
    padding: 6px 10px;
    border: .5px solid lightgray;
    margin: 8px;
`

export const CurrentPageNumber = styled.h2`
    padding: 6px 10px;
    border: .5px solid darkgray;
    margin: 5px;
    background: orange;
`

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`

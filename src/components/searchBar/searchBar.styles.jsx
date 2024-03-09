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
    cursor: pointer;
`

export const PageNumber = styled.h2`
    padding: 6px 10px;
    border: .5px solid lightgray;
    margin: 8px;
    color: #3b3b3b;
    background-color: #D3D3D3;
    cursor: default;
`

export const CurrentPageNumber = styled.h2`
    padding: 6px 10px;
    border: 1.5px solid black;
    margin: 4px;
    background: orange;
    color: white;
    text-shadow: 1px 1px 2px black;
    cursor: default;
`

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`

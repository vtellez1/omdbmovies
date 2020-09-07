import styled, { keyframes } from 'styled-components';

export const MovieResultsContainer = styled.div`
display: flex;
flex-direction: column;
`

export const MovieCards = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`

export const spinKeyFrame = keyframes`
0% { 
    transform: rotate(0deg); 
}
100% { 
    transform: rotate(360deg); 
}
`

export const LoadingDiv = styled.div`
margin: 0 auto;
border: 1.2rem solid gray;
border-top: 1.2rem solid gold;
border-radius: 50%;
width: 7rem;
height: 7rem;
animation: ${spinKeyFrame} 2s linear infinite;
`


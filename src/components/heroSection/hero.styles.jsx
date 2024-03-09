import styled from 'styled-components';

export const HeroContainer = styled.div`
    height: 100vh;
    position: relative;
`

export const HeroWords = styled.p`
    font-size: 4rem;
    position: absolute;
    top: 15%;
    left: 15%;
    animation: lights 5s 750ms linear infinite;
    z-index: 1001;
`

export const HomeActionButton = styled.button`
    padding: .8rem;
    font-size: 1.2rem;
    background-color: orange;
    color: white;
    font-weight: bold;
    border-radius: 1rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
`


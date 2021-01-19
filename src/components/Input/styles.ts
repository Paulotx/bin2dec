import styled from 'styled-components';

export const Container = styled.input`
    width: 100%;
    height: 6.4rem;
    padding: 1.2rem;
    border-radius: 0.8rem;
    background: none;
    border: 2px solid #a3bce1;

    font-family: 'Roboto Mono', monospace;
    font-size: 2.4rem;

    @media (max-width: 580px) {
        font-size: 2rem;
        height: 5.6rem;
    }
`;

import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 56rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        font-family: 'Open Sans', sans-serif;
    }

    @media (max-width: 580px) {
        padding: 0 8%;
    }
`;

export const Title = styled.h2`
    font-family: 'Roboto Mono', monospace;
    font-size: 4.8rem;
    font-weight: 700;

    @media (max-width: 580px) {
        font-size: 4rem;
    }
`;

export const Instruction = styled.p`
    font-family: 'Open Sans', sans-serif;
    margin-top: 1.6rem;
    margin-bottom: 3.2rem;

    a {
        color: #a3bce1;
        text-decoration: none;

        &:hover {
            color: #ccc;
        }
    }

    @media (max-width: 580px) {
        text-align: center;
        font-size: 1.4rem;
        margin-top: 1.2rem;
        margin-bottom: 2.4rem;
    }
`;

export const Information = styled.div``;

export const Error = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
    margin-top: 3.2rem;
    color: #b92e10;
`;

export const Result = styled.p`
    margin-top: 2.4rem;
    font-family: 'Roboto Mono', monospace;
    font-size: 4rem;

    @media (max-width: 580px) {
        font-size: 3.2rem;
        margin-top: 1.2rem;
    }
`;

export const Footer = styled.p`
    font-family: 'Open Sans', sans-serif;
    margin-top: 1.6rem;
    margin-bottom: 3.2rem;
    position: absolute;
    bottom: 0;

    a {
        color: #999;
        text-decoration: none;

        &:hover {
            color: #ccc;
        }
    }
`;

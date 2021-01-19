import { createGlobalStyle } from 'styled-components';

import background from '../assets/bg.jpg';

export default createGlobalStyle`
    :root {
        font-size: 60%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0
    }

    html, body, #root {
        height: 100vh;
    }

    body {
        -webkit-font-smoothing: antialiased;
        background: linear-gradient(45deg, rgba(36, 54, 78, 0.95), rgba(36, 54, 78, 0.98)),
        url(${background}) no-repeat;
        background-size: cover;
        background-color: #24364E;
    }

    body, input, button {
        font-size: 16px;
        color: #FFF;

    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;

    }

    button {
        cursor: pointer;
    }
`;

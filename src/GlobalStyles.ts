import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        letter-spacing: -.5px;
    };

    body, html, root {
        background-color: #e6e9f0;
    };
`;

export const devices = {
    mobileS: '(min-width: 320px)',
    mobileM: '(min-width: 375px)',
    mobileL: '(min-width: 425px)',
    tablet: '(min-width: 768px)',
    laptop: '(min-width: 1024px)',
    laptopL: '(min-width: 1440px)',
    desctop: '(min-width: 2560px)'
};

export const colors = {
    border: '#dfe1e3',
    stuffText: '#777879',
    totalPrice: '#54316c',
    violet: '#6e00c5',
    white: '#fff',
    black: '#000',
    slash: '#f03ada',
    optionHover: '#4c9aff',
    orderPlateBackground: '#f1f3f6',
    btn: '#7a3fa8',
    basketCircle: '#ff1876',
    shadow: '#e2e3e5',
    borderGradient: 'linear-gradient(to right, #ebb6e8, #fdb9d8, #d9b2f8) 30',
    textGradient: 'linear-gradient(90deg, #ebb6e8, #fdb9d8, #d9b2f8)'
};

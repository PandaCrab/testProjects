import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        color: #6e00c5;
    };

    body, html, root {
        background-color: #e6e9f0;
    };
`

export const devices = {
    mobileS: '(min-width: 320px)',
    mobileM: '(min-width: 375px)',
    mobileL: '(min-width: 425px)',
    tablet: '(min-width: 768px)',
    laptop: '(min-width: 1024px)',
    laptopL: '(min-width: 1440px)',
    desctop: '(min-width: 2560px)'
}

export const colors = {
    white: '#fff',
    slash: '#f03ada',
    orderPlateBackground: '#f1f3f6',
    btn: '#7a3fa8',
    borderGradient: 'linear-gradient(to right, #ebb6e8, #fdb9d8, #d9b2f8) 30'
}
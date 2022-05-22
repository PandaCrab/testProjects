import styled from 'styled-components';

import { colors, devices } from '../GlobalStyles';

export const StartPage = styled.div`
    margin: auto;
    width: 80%;
    min-height: 200px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.white};
    justify-content: center;
    border-radius: 3px;

    @media ${devices.mobileS} {
        font-size: .6em;
    };

    @media ${devices.tablet} {
        font-size: 1.2em;
    };
`;

export const NavigationButton = styled.button`
    margin-top: 3px;
    padding: 3px 5px;
    heigth: 2em;
    font-size: .9em;
    color: ${colors.white};
    background-color: ${colors.violet};
    border: none;
    border-radius: 5px;
`;
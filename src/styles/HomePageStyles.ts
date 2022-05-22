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
        width: 100%;
    };

    @media ${devices.tablet} {
        font-size: 1.2em;
        width: 80%;
    };
`;

export const Heading = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
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

export const StorageButton = styled.button`
margin-top: 3px;
    padding: 3px 5px;
    heigth: 2em;
    font-size: .9em;
    color: ${colors.white};
    background-color: ${colors.violet};
    border: none;
    border-radius: 5px;

    @media ${devices.mobileS} {
        display: none;
    };

    @media ${devices.tablet} {
        display: block;
    };
`;
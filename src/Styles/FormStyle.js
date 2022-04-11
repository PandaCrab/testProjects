import styled from 'styled-components';
import { devices, colors } from '../GlobalStyles';
import { Button } from 'react-bootstrap';

export const Info = styled.div`
    width: 55%;
    font-size: 2.5vw;
    height: auto;
    position: relative;

    @media${devices.mobileS} {
        margin-left: 8px;
        width: 95%;
        font-size: 1rem;

        .form-control {
            font-size: 1em;
            padding: 2px 4px;
        };

        .invalid-tooltip {
            font-size: .8em;
            padding: 1px 3px;
            z-index: 1;
        };
    };

    @media ${devices.tablet} {
        width: 50%;
        font-size: .8em;

        .form-control {
            font-size: 1em;
            padding: 5px 10px;
        };
            
        .invalid-tooltip {
            font-size: .8em;
        };
    };   
    
    @media ${devices.laptop} {
        margin: 0 2em 1em 2em;

        .form-control {
            font-size: 1rem;
            padding: 8px 14px;
        };

        .invalid-tooltip {
            font-size: .9em;
        };
    };
`;

export const Discription = styled.p`
    margin-bottom: 0;
    padding: 0;
    color: #000;
    line-height: 1.2em;
    font-size: 12px;

    @media ${devices.mobileS} {
        margin-left: 0;
        text-align: flex-start;
        font-size: .7em;
    };

    @media ${devices.mobileM} {
        font-size: .8em;
    };

    @media ${devices.mobileL} {
        font-size: .9em;
    };

    @media ${devices.tablet} {
        font-size: .9em;
    };

    @media ${devices.laptop} {
        font-size: 1em;
    };
`;

export const StyledButton = styled(Button)`
    width: 10em;
    height: 2.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.white};
    background-color: ${colors.btn};
    text-decoration: none;
    border-radius: 5px;

    @media ${devices.mobileS} {
        padding: 3px 5px;
        font-size: .8em;
        margin-bottom: 1em;
    };

    @media ${devices.tablet} {
        padding: 4px 8px;
        font-size: .8em;
    };

    @media ${devices.laptop} {
        font-size: 1.1em;
        padding: 6px 12px;
    };
`;

export const FormLabel = styled.section`
    margin-bottom: 1em;
    display: flex;
    font-weight: 600;
    justify-content: space-between;
    align-items: flex-end;

    @media ${devices.mobileS} {
        font-size: .8em;
    };

    @media ${devices.mobileM} {
        margin-bottom: 1em;
    };

    @media ${devices.mobileL} {
        margin-bottom: 1em;
    };
`;

export const FormLabelHeader = styled.h4`
    fonst-size: 17px;

    @media ${devices.mobileS} {
        font-size: .5em;
        margin-bottom: 0;
    };

    @media ${devices.mobileM} {
        font-size: 10px;
    };

    @ media ${devices.mobileL} {
        font-size: 12px;
    };

    @media ${devices.tabley} {
        font-size: 1.5em;
    };

    @media ${devices.laptop} {
        font-size: 2em;
        letter-spacing: -1px;
    };
`;

export const FormLabelParagraph = styled.p`
    margin: auto;
    margin-right: 0;
    font-size: 11px;
    text-decoration: underline .5px;
    letter-spacing: normal;

    @media ${devices.mobileS} {
        font-size: .5em;
    };

    @media ${devices.tablet} {
        font-size: .8em;
    };

    @media ${devices.laptop} {
        font-size: 11px;
        text-decoration: underline .5px;
    };
`;

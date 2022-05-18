import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import { BsGeoAltFill } from 'react-icons/bs'

import { devices, colors } from '../GlobalStyles';

export const Info = styled.div`
    width: 55%;
    font-size: 1.5em;
    height: auto;
    position: relative;

    @media${devices.mobileS} {
        margin-left: 8px;
        width: 95%;
        font-size: 1rem;

        .form-control {
            font-size: .8em;
        };

        .is-invalid {
            background: none
        };

        .invalid-tooltip {
            font-size: .6em;
            padding: 1px 3px;
            z-index: 1;
            background: none;
            color: red;
        };
    };

    @media ${devices.tablet} {
        width: 50%;
        font-size: .8em;

        .form-control {
            font-size: 0.9em;
        };
            
        .invalid-tooltip {
            font-size: .8em;
        };
    };   
    
    @media ${devices.laptop} {
        margin: 0 2em 1em 2em;

        .form-control {
            font-size: 1rem;
        };

        .invalid-tooltip {
            font-size: .9em;
        };
    };
`;

export const AddressesList = styled.ul`
    padding: 0;
    margin-top: -4px;
    background-color: ${colors.white};
    width: 100%;
    height: auto;
    list-style: none;
    cursor: default;
    border: 1px solid ${colors.border};
    border-radius: 0 0 3px 3px;
    box-shadow: -1px 3px 4px ${colors.shadow};
    flex-direction: column;
    position: absolute;
    z-index: 2;
`;

export const NavigateAutocomplete = styled(BsGeoAltFill)`
    width: 1.5em;
    height: 1.5em;
    position: absolute;
    top: 6px;
    right: 2px;
`

export const ErrorMessage = styled.p`
    margin: 0;
    position: absolute;
    font-size: .9em;
    padding: 1px 3px;
    z-index: 1;
    background: none;
    color: red;
`;

export const SelectContainer = styled.section`
    @media ${devices.mobileS} {
        font-size: .8em;
    };

    @media ${devices.tablet} {
        font-size: 1em;
    }

    @media ${devices.laptopL} {
        font-size: 1.2em;
    }
`

export const ListItems = styled.li`
    padding: 5px;
    color: ${colors.black};
    font-size: 1.2em;
    display: flex;
    align-items: center;

    &:hover {
        background-color: ${colors.optionHover};
        color: ${colors.white};
    };

    @media ${devices.mobileS} {
        font-size: .7em;
    };

    @media ${devices.tablet} {
        font-size: 1em;
    }
`;

export const PhoneControlInput = styled(PhoneInput)`
    padding: 0;
    border: none;
    font-size: 1.5em
    width: 120%;
`;

export const CardNumberInput = styled(Form.Control)`
    padding-right: 1em;
    border-radius: 5px;
    position: relative;
`;

export const InputCardImage = styled.svg`
    position: absolute;
    right: 4px;
    top: 1px;
    width: 40px;
    height: 95%;
    z-index: 3;
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
        font-size: 2em;
        margin-bottom: .3em;
    };

    @media ${devices.mobileM} {
        font-size: 1em;
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

    @media ${devices.tablet} {
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
    text-decoration: underline .1px;
    letter-spacing: normal;

    @media ${devices.mobileS} {
        font-size: .3em;
    };

    @media ${devices.tablet} {
        font-size: .8em;
    };

    @media ${devices.laptop} {
        font-size: 11px;
        text-decoration: underline .5px;
    };
`;

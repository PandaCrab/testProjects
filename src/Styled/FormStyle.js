import styled from 'styled-components';
import { devices, colors } from '../GlobalStyles';
import { Button } from 'react-bootstrap';

export const Info = styled.div`
    margin: auto;
    width: 37em;
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
        }

        .invalid-tooltip {
            font-size: .8em;
            padding: 1px 3px;
        }
    }

    @media ${devices.tablet} {
        width: 25em;
        font-size: .8em;

        .form-control {
            font-size: 1em;
            padding: 5px 10px;
        }

        .invalid-tooltip {
            font-size: .8em;
        }
    }   
    
    @media ${devices.laptop} {
        margin: 0 2em 1em 2em;
        width: 30em;

        .form-control {
            font-size: 1rem;
            padding: 8px 14px;
        }

        .invalid-tooltip {
            font-size: .9em;
        }
    }
`

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
    }

    @media ${devices.mobileM} {
        font-size: .8em;
    }

    @media ${devices.mobileL} {
        font-size: .9em;
    }

    @media ${devices.tablet} {
        font-size: .9em;
    }

    @media ${devices.laptop} {
        font-size: 1em;
    }
`

export const StyledButton = styled(Button)`
    background-color: ${colors.btn};
    width: 10em;

    @media ${devices.mobileS} {
        padding: 3px 5px;
        font-size: .8em;
        margin-bottom: 1em;
    }

    @media ${devices.tablet} {
        padding: 4px 8px;
        font-size: .8em;
    }

    @media ${devices.laptop} {
        font-size: 1.1em;
        padding: 6px 12px;
    }
`

export const FormLabel = styled.section`
    margin-bottom: 1em;
    display: flex;
    font-weight: 600;
    justify-content: space-between;
    align-items: flex-end;

    @media ${devices.mobileS} {
        font-size: .8em;
    }

    @media ${devices.mobileM} {
        margin-bottom: 1em;
    }

    @media ${devices.mobileL} {
        margin-bottom: 1em;
    }
`

export const FormLabelHeader = styled.h4`
    fonst-size: 17px;

    @media ${devices.mobileS} {
        font-size: .5em;
        margin-bottom: 0;
    }

    @media ${devices.mobileM} {
        font-size: 10px;
    }

    @ media ${devices.mobileL} {
        font-size: 12px;
    }

    @media ${devices.tabley} {
        font-size: 1.5em;
    }

    @media ${devices.laptop} {
        font-size: 2em;
        letter-spacing: -1px;
    }
`

export const FormLabelParagraph = styled.p`
    margin: auto;
    margin-right: 0;
    font-size: 11px;
    text-decoration: underline .5px;
    letter-spacing: normal;

    @media ${devices.mobileS} {
        font-size: .5em;
    }

    @media ${devices.tablet} {
        font-size: .8em;
    }

    @media ${devices.laptop} {
        font-size: 11px;
        text-decoration: underline .5px;
    }
`

// export const StyledInput = styled(Form.Control)`
//     padding: 6px 12px
//     font-size: 1em;
//     width: ${props => props.width};
//     border-color: gray;
//     boeder-radius: inherit;

//      @media ${devices.mobileS} {
//          padding: 3px 5px
//          font-size: .5px;
//          width: 80%;
//          height: 1em;
//      }
// `

// export const StyledGroup = styled(Form.Group)`
//     margin: ${props => props.margin} || 2em;

//     @media ${devices.mobileS} {
//         margin: .1em;
//     }
// `
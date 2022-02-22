import styled from 'styled-components';
import { devices, colors } from '../../GlobalStyles';
import { Button } from 'react-bootstrap';

export const Info = styled.div`
    margin: 0 2em 1em 2em;
    width: 49em ;
    height: 90%;
    position: relative;

    @media${devices.mobileS} {
        margin-left: 11px;
        width: 145px;
        height: inherit;
        font-size: .5em;

        .form-control {
            font-size: .5em;
            margin-bottom: 2em;
            padding: 3px 6px;
        }
    }

    @media ${devices.mobileM} {
        width: 175px;
        height: inherit;
        font-size: .4em;

        .form-control {
            font-size: .7em;
            padding: 4px 8px;
        }
    }

    @media ${devices.mobileL} {
        width: 190px;
        height: inherit;
        font-size: .5em;

        .form-control {
            font-size: .7;
            margin-bottom: 1.5em;
            padding: 4px 8px;
        }
    }

    @media ${devices.tablet} {
        margin-left: 2em;
        width: 24em;
        font-size: .8em;

        .form-control {
            font-size: 1em;
            margin-bottom: 1em;
            padding: 5px 10px;
        }
    }   
    
    @media ${devices.laptop} {
        margin: 0 2em 1em 2em;
        width: 30em;

        .form-control {
            font-size: 1.1em;
            margin-bottom: 2em;
            padding: 6px 12px;
        }
    }
`

export const Discription = styled.p`
    margin-bottom: 0;
    padding: 0;
    color: #000;
    font-size: 12px;

    @media ${devices.mobileS} {
        margin-left: 0;
        text-align: flex-start;
        font-size: .6em;
    }

    @media ${devices.mobileM} {
        font-size: .8em;
    }

    @media ${devices.mobileL} {
        font-size: .8em;
    }

    @media ${devices.laptop} {
        font-size: 12px;
    }
`

export const StyledButton = styled(Button)`
    background-color: ${colors.btn};
    width: 10em;

    @media ${devices.mobileS} {
        padding: 3px 5px;
        font-size: .5em;
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
        text-decoration: none;
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
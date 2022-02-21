import styled from 'styled-components';
import { devices, colors } from '../../GlobalStyles';
import { Button } from 'react-bootstrap';

export const Info = styled.div`
  margin: 0 2em 1em 2em;
  width: 21em;
  height: 90%;
  position: relative;

  @media ${devices.mobileS} {
      min-width: 10em;
  }
`

export const Discription = styled.p`
    margin-bottom: 0;
    padding: 0;
    color: #000;
    font-size: 12px;
`

export const StyledButton = styled(Button)`
    background-color: ${colors.btn};
    width: 10em;

    @media ${devices.mobileS} {
        padding: 3px 5px;
        font-size: .5em;
    }
`

export const FormLabel = styled.section`
    margin-bottom: 1em;
    display: flex;
    letter-spacing: -2px;
    font-weight: 600;
    justify-content: space-between;
    align-items: center;

    @media ${devices.mobileS} {
        margin-bottom: .2em;
        font-size: .5em;
        font-weight: 300;
    }
`

export const FormLabelHeader = styled.h4`
    fonst-size: 17px;
    margin-bottom: 1em;
`

export const FormLabelParagraph = styled.p`
    margin: 0;
    font-size: 11px;
    text-decoration: underline .5px;
    letter-spacing: normal;
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
import styled from 'styled-components';
import { devices, colors } from '../GlobalStyles';

export const OrderInfo = styled.section`
  margin: 0;
  padding: .3em;
  background-color: ${colors.orderPlateBackground};
  width: 30%;
  display: flex;
  height: inherit;
  position: absolute;
  border-radius: inherit;
  top: 0;
  right: 0;

  @media ${devices.mobileS} {
    display: none;
  }

  @media ${devices.tablet} {
    display: flex;
    width: 40%;
  }
`
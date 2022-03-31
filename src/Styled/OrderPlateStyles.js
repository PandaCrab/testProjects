import styled from 'styled-components';
import { devices, colors } from '../GlobalStyles';
import { AiOutlineCloseSquare } from 'react-icons/ai';

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
  z-index: 2;

  @media ${devices.mobileS} {
    display: ${props => props.displayMobile};
    width: 80%;
    height: 90%;
    margin-top: 5px;
    margin-right: 5px;
  };

  @media ${devices.tablet} {
    margin: 0;
    display: flex;
    width: 40%;
    height: 100%;
  };
`;

export const Stuff = styled.section`
  margin: auto;
  background-color: white;
`;

export const StuffCard = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: column;
  background-color: black;
  color: white;
  width: 98%;
  height: 80%;
  opacity: 60%;
`;

export const StuffItem = styled.section`
  font-size: 0.7em;
  margin: 3px;
  background-color: white;
  color: purple;
`;

export const OrderCloseBtn = styled(AiOutlineCloseSquare)`
  color: ${colors.violet};
  position: absolute;
  top: 3px;
  right: 3px;
  margin-top: 2px;
  margin-right: 2px;

  @media ${devices.tablet} {
    display: none;
  };
`;

export const OrderInfoBtn = styled.button`
  color: ${colors.white};
  background-color: ${colors.violet};
  position absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  border: 3px;
  bottom: 10px;
  right: 10px;

  &:active {
    box-shadow: 0 0 7px grey;
  };

  @media ${devices.mobileS} {
    display: flex;
  };

  @media ${devices.tablet} {
    display: none;
  };
`;

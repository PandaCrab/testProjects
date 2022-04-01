import styled from 'styled-components';
import { devices, colors } from '../GlobalStyles';
import { AiOutlineCloseSquare } from 'react-icons/ai';

export const OrderInfo = styled.section`
  margin: 0;
  padding: .3em;
  background-color: ${colors.orderPlateBackground};
  width: 30%;
  display: flex;
  flex-direction: column;
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
    width: 45%;
    height: 100%;
  };
`;

export const SummaryHeaderBlock = styled.section`
  margin: 2em 0 2em auto;
  width: 97%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 2em;
  font-size: .5em;
  letter-spacing: -.5px;
`;

export const SummaryHeader = styled.h6`
  margin-bottom: 0;
  color: ${colors.violet};
`;

export const OrderEdit = styled.button`
  text-decoration: underline .1px ${colors.stuffHeader};
  border: none;
  color: ${colors.stuffHeader};
  font-size: 1.3em;
`;

export const OrderCard = styled.div`
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 99%;
  max-height: 24em;
  overflow: scroll;

  @media ${devices.mobileS} {
    max-height: 9em;
  };

  @media ${devices.tablet} {
    max-height: 17em;
  };

  @media ${devices.laptop} {
    max-height: 24em;
  };
`;

export const Stuff = styled.section`
  margin: auto;
  background-color: white;
`;

export const StuffItem = styled.section`
  padding: 7px 0 7px 7px;
  display: flex;
  flex-direction: row;
  border-bottom: .5px solid ${colors.stuffBorder};
  font-size: 0.7em;
`;

export const StuffImage = styled.img`
  width: 20%;
  height: 5em;
  border: .3px solid ${colors.stuffBorder};

  @media ${devices.mobileS} {
    width: 20%;
    height: 4em;
  };

  @media ${devices.mobileM} {
    width: 18%;
  };

  @media ${devices.mobileL} {
    width: 16%;
  };

  @media ${devices.tablet} {
    width: 18%;
  };

  @media ${devices.laptop} {
    height: 5em;
  };
`;

export const StuffInfo = styled.section`
  margin-left: 1em;
  width: 80%;
  height: 4em;
`;

export const StuffName = styled.h6`
  margin-bottom: 5px;
  color: ${colors.stuffHeader};
  font-size: 1.2em;

  @media ${devices.mobileS} {
    font-size: 1em;
  }
`;

export const StuffInformstion = styled.p`
  margin-bottom: 1px;
  letter-spacing: -.5px;
  font-size: .8em;
  color: ${colors.black}
`;

export const StuffPrice = styled.p`
  width: 4em;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const SummaryPrice = styled.section`
  display: flex;
  flex-direction: column;
  background-color: black;
  width: 99%;
  height: 5em;
  border-bottom: 1px solid ${colors.stuffBorder};
`;

export const Prices = styled.p`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2px;
  color: white;
  font-size: .7em;
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
    box-shadow: 0 0 7px ${colors.violet};
  };

  @media ${devices.mobileS} {
    display: flex;
  };

  @media ${devices.tablet} {
    display: none;
  };
`;

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { devices, colors } from '../GlobalStyles';

export const OrderInfo = styled.section`
  margin: 0;
  padding: .3em;
  background-color: ${colors.orderPlateBackground};
  width: 30%;
  display: flex;
  flex-direction: column;
  height: inherit;
  justify-content: space-between;
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
`;

export const SummaryHeader = styled.h6`
  margin-bottom: 0;
  color: ${colors.violet};
`;

export const OrderEdit = styled.button`
  text-decoration: underline .1px ${colors.stuffText};
  border: none;
  color: ${colors.stuffText};
  font-size: 1.3em;
`;

export const OrderCard = styled.div`
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 99%;
  max-height: 24em;
  overflow-y: scroll;
  scroll-behavior: smooth;

  @media ${devices.mobileS} {
    max-height: 14em;
  };

  @media ${devices.tablet} {
    max-height: 16em;
  };

  @media ${devices.laptop} {
    max-height: 24em;
  };
`;

export const LoaderContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
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
  color: ${colors.stuffText};
  font-size: 1.2em;

  @media ${devices.mobileS} {
    font-size: 1em;
  }
`;

export const StuffInformation = styled.p`
  margin-bottom: 1px;
  font-size: .8em;
  color: ${colors.black}
`;

export const StuffPrice = styled.p`
  width: 4em;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${colors.stuffText}
`;

export const SummaryPrice = styled.section`
  margin-bottom: 1em; 
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 99%;
  border-bottom: 1px solid ${colors.stuffBorder};
  color: ${colors.stuffText};
  font-size: .7em;
`;

export const PriceInfo = styled.section`
  margin-bottom: 2px;
`;

export const Price = styled.section`
  margin-bottom: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const PriceText = styled.p`
  margin-bottom: 2px;
`;

export const TotalPrice = styled.section`
  margin-bottom: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TotalPriceText = styled.p`
  margin-bottom: 0;
  color: ${colors.totalPrice};
  font-size: .7em;
  font-weight: bold;
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

export const TermsConditions = styled.section`
  display: flex;
  justify-content: center;
`;

export const TermsConditionText = styled.p`
  margin-bottom: 0;
  color: ${colors.stuffText};
  font-size: .5em;
`;

export const TermsConditionsLink = styled(Link)`
  margin-left: 2px;
  color: ${colors.stuffText};
  text-decoration: underline .1em;

  &:active {
    color: ${colors.violet};
  };

  &::after {
    color: ${colors.stuffText}
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

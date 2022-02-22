import styled from 'styled-components'
import { devices, colors } from '../../GlobalStyles'

export const Header = styled.section`
  margin: auto;
  margin-bottom: 3em;
  width: 65em;
  height: 5em;
  background-color: ${colors.white};
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid;
  border-image: ${colors.borderGradient};

  @media ${devices.mobileS} {
    margin-bottom: 1em;
    width: 100%;
    height: 1.3em;

  }

  @media ${devices.tablet} {
    width: 100%;
    height: 2.5em;
  }

  @media ${devices.laptop} {
    width: 65em;
    height: 3em;
  }
`

export const HeaderText = styled.h5`
  margin: auto;
  position: relative;


  @media ${devices.mobileS} {
    font-size: .6em;
  }

  @media ${devices.tablet} {
    font-size: 1em;
  }
`

export const ShoppingBasket = styled.h6`
  margin: auto;
  color: ${colors.slash};

  @media ${devices.mobileS} {
    font-size: .5em;
  }

  @media ${devices.tablet} {
    font-size: .8em;
  }
`

export const Slash = styled.span`
  color: ${colors.slash}; 
  font-weight: 300;
  font-size: 2em;

  @media ${devices.mobileS} {
    font-size: 1.5em;
  }

  @media ${devices.tablet} {
    font-size: 2em;
  }
`

export const Order = styled.div`
  margin: auto;
  width: 45em;
  height: 37em;
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  border-radius: 5px;
  box-shadow: 0 0 1.5em #e2e3e5;
  position: relative;

  @media ${devices.mobileS} {
    margin-left: auto;
    width: 275px;
    height: 230px;
    justify-content: flex-start;
  }

  @media ${devices.mobileM} {
    margin-left: auto;
    width: 330px;
    height: 285px;
  }

  @media ${devices.mobileL} {
    margin-left: auto;
    width: 22em;
    height: 17em;
  }

  @media ${devices.tablet} {
    margin-left: auto;
    width: 37em;
    height: 28em;
  }

  @media ${devices.laptop} {
    margin: auto;
    width: 45em;
    height: 37em;
  }
`

export const Route = styled.section`
  max-width: 21em;
  height: 5%;
  margin: 1em;
  display: flex;
  align-items: center;

  @media ${devices.mobileS} {
    font-size: .5em;
  }

  @media ${devices.mobileM} {
    font-size: .5em;
  }

  @media ${devices.mobileL} {
    font-size: .6em;  
  }

  @media ${devices.tablet} {
    font-size: .8em;
  }
`
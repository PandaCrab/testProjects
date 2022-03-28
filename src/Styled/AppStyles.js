import styled from 'styled-components'
import { devices, colors } from '../GlobalStyles'

export const Header = styled.section`
  margin: auto;
  margin-bottom: 3em;
  max-width: 1024px;
  height: 2em;
  background-color: ${colors.white};
  display: flex;
  font-size: 2rem;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid;
  border-image: ${colors.borderGradient};

  @media ${devices.mobileS} {
    margin-bottom: .5em;
    justify-content: space-between;
    width: 100%;
    height: 1em;
    fnt-size: 1em;
  }

  @media ${devices.tablet} {
    width: 100%;
    height: 1em;
  }

  @media ${devices.laptop} {
    width: 65em;
    height: 1.5em;
    font-size: 
  }

  @media ${devices.laptopL} {
    height: 1.5em;
  }
`

export const HeaderText = styled.h5`
  margin: auto;
  font-size: 1rem;
  display: flex;
  align-items: center;


  @media ${devices.mobileS} {
    font-size: .4em;
  }

  @media ${devices.tablet} {
    font-size: .4em;
  }
`

export const ShoppingBasket = styled.h6`
  margin: auto;
  color: ${colors.slash};

  @media ${devices.mobileS} {
    font-size: .3em;
  }

  @media ${devices.tablet} {
    font-size: .3em;
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
  margin-left: 1.8em;
  width: 90vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${colors.white};
  border-radius: 5px;
  box-shadow: 0 0 1.5em #e2e3e5;
  position: relative;

  @media ${devices.mobileS} {
    margin: auto;
    width: 95vw;
    justify-content: flex-start;
  }

  @media ${devices.tablet} {
    margin: auto;
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
  margin-top: 1em;
  margin-bottom: 1em;
  display: flex;
  align-items: center;

  @media ${devices.mobileS} {
    font-size: 1em;
    justify-content: space-around;
  }
`
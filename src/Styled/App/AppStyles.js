import styled from 'styled-components'
import { devices, colors } from '../../GlobalStyles'

export const Header = styled.section`
  margin: auto;
  margin-bottom: 3em;
  width: 65em;
  height: 3em;
  background-color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid;
  border-image: ${colors.borderGradient};
`

export const HeaderText = styled.h5`
  display: flex;
  font-size: 17px;
  align-items: center;
`

export const ShoppingBasket = styled.h6`
  font-size: 15px;
  color: ${colors.slash};
`

export const Slash = styled.span`
  color: ${colors.slash}; 
  font-weight: 300;
  font-size: 2em;
`

export const Order = styled.div`
  margin: auto;
  width: 45em;
  height: 37em;
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  justify-content: center;
  border-radius: 5px;
  box-shadow: 0 0 1.5em #e2e3e5;
  position: relative;

  @media ${devices.mobileS} {
    margin-left: 10em;
    min-width: 18em;
    min-height: 14em;
    justify-content: flex-start;
  }

  @media ${devices.mobileM} {
    margin-left: 10em;
    min-width: 20em;
    min-height: 16em;
  }

  @media ${devices.mobileL} {
    margin-left: 10em;
    min-width: 22em;
    min-height: 16em;
  }

  @media ${devices.tablet} {
    margin-left: 10em;
    min-width: 24em;
    min-height: 18em;
  }
`

export const Route = styled.section`
  max-width: 21em;
  height: 5%;
  margin: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
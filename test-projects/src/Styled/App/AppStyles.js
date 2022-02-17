import styled from 'styled-components'

export const Header = styled.section`
  margin: auto;
  margin-bottom: 3em;
  width: 65em;
  height: 3em;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid;
  border-image: linear-gradient(to right, #ebb6e8, #fdb9d8, #d9b2f8) 30;
`

export const HeaderText = styled.h5`
  display: flex;
  font-size: 17px;
  color: #8e5bb6;
  align-items: center;
`

export const ShoppingBasket = styled.h6`
  font-size: 15px;
  color: #dc63c5;
`

export const Slash = styled.span`
  color: #fdb9d8; 
  font-size: 1.7em;
  font-style: italic;
`

export const Order = styled.div`
  margin: auto;
  width: 45em;
  height: 37em;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 0 0 1.5em #e2e3e5;
  position: relative;
`

export const Info = styled.section`
  margin: 0;
  padding: 2em;
  width: 25em;
  height: 35em;
  position: absolute;
`
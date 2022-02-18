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
  color: #f03ada;
`

export const Slash = styled.span`
  color: #f03ada; 
  font-weight: 300;
  font-size: 2.3em;
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

export const Route = styled.section`
  width: 21em;
  height: 5%;
  margin: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
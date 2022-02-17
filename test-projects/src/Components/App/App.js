import React from 'react';
import styled from 'styled-components';

import ShippingInfo from '../Forms/ShippingInfo'

import './App.css';

const Header = styled.section`
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

const HeaderText = styled.h5`
  display: flex;
  font-size: 17px;
  color: #8e5bb6;
  align-items: center;
`

const ShoppingBasket = styled.h6`
  font-size: 15px;
  color: #dc63c5;
`

const Slash = styled.span`
  color: #fdb9d8; 
  font-size: 1.7em;
  font-style: italic;
`

const Order = styled.div`
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

const Info = styled.section`
  margin: 0;
  padding: 2em;
  width: 25em;
  height: 35em;
  position: absolute;
`

const OrderInfo = styled.section`
  margin: 0;
  padding: 2em;
  background-color: #f1f3f6;
  width: 20em;
  height: 37em;
  position: absolute;
  border-radius: inherit;
  top: 0;
  right: 0;
`


function App() {


  return (
    <>
      <Header>
        <HeaderText> &lt;<Slash>&frasl;</Slash> &gt; Front-end Developer Test Task</HeaderText>
        <ShoppingBasket>cart</ShoppingBasket>

      </Header>
      <Order>
        <Info>
            <ShippingInfo />
        </Info>
        <OrderInfo>

        </OrderInfo>
      </Order>

    </>
  );
}

export default App;

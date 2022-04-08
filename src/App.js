import React from 'react';
import { OrderPlate } from './Components/Index';
import { Outlet, Link } from 'react-router-dom';

import {
  Header,
  HeaderLogo,
  HeaderText,
  ShoppingBasket,
  BasketContainer,
  Slash,
  Order,
  Nav,
  Basket,
  ShoppingBasketText,
  NumberOfStuff,
  CircleOfNumber
} from './styles/AppStyles';
import { GlobalStyles } from './GlobalStyles';
import { useSelector } from 'react-redux';

const App = () => {
  const stuff = useSelector(state => state.order.stuff);

  return (
    <>
      <GlobalStyles />
      <Header>
        <HeaderText> <HeaderLogo>&lt; <Slash>&frasl;</Slash>&gt;</HeaderLogo> Front-end Developer Test Task</HeaderText>
        <ShoppingBasket>
          <ShoppingBasketText>cart</ShoppingBasketText>
          <BasketContainer>
            <Basket />  
            <CircleOfNumber><NumberOfStuff>{stuff.length}</NumberOfStuff></CircleOfNumber>
          </BasketContainer>
        </ShoppingBasket>
        
      </Header>
      <Order>
        <Nav>
          <Link to="/shipping">Shipping</Link>
          <Link to="/billing">Billing</Link>
          <Link to="/payment">Payment</Link>
        </Nav>
        <Outlet />
        <OrderPlate />
      </Order>
    </>
  );
}

export default App;

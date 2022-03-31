import React from 'react';
import { OrderPlate } from './Components/Index';
import { Outlet, Link } from 'react-router-dom';

import {
  Header,
  HeaderText,
  ShoppingBasket,
  Slash,
  Order,
  Nav,
  Basket,
  ShippingBasketText
} from './Styled/AppStyles';
import { GlobalStyles } from './GlobalStyles';


function App() {

  return (
    <>
      <GlobalStyles />
      <Header>
        <HeaderText> &lt; <Slash>&frasl;</Slash>&gt; Front-end Developer Test Task</HeaderText>
        <ShoppingBasket>
          <ShippingBasketText>cart</ShippingBasketText>
          <Basket />  
        </ShoppingBasket>
        
      </Header>
      <Order>
        <Nav>
          <Link to="/ShippingInfo">ShippingInfo</Link>
          <Link to="/BillingInfo">BillingInfo</Link>
          <Link to="/Payment">Payment</Link>
        </Nav>
        <Outlet />
        <OrderPlate />
      </Order>

    </>
  );
}

export default App;

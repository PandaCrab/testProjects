import React from 'react';

// import ShippingInfo from '../Forms/ShippingInfo';
import OrderPlate from '../OrderPlate/OrderPlate';
import BillingInfo from '../Forms/BillingInfo';

import {
  Header,
  HeaderText,
  ShoppingBasket,
  Slash,
  Order,
  Info
} from '../../Styled/App/AppStyles';
import './App.css';


function App() {


  return (
    <>
      <Header>
        <HeaderText> &lt; <Slash>&frasl;</Slash> &gt; Front-end Developer Test Task</HeaderText>
        <ShoppingBasket>cart</ShoppingBasket>

      </Header>
      <Order>
        <Info>
            {/* <ShippingInfo /> */}
            <BillingInfo />
        </Info>
        <OrderPlate />
      </Order>

    </>
  );
}

export default App;

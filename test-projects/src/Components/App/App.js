import React, { useState } from 'react';

// import ShippingInfo from '../Forms/ShippingInfo';
import OrderPlate from '../OrderPlate/OrderPlate';
import ShippingInfo from '../Forms/ShippingInfo';
import BillingInfo from '../Forms/BillingInfo';
import Payment from '../Forms/Payment';

import {
  Header,
  HeaderText,
  ShoppingBasket,
  Slash,
  Order,
  Route
} from '../../Styled/App/AppStyles';
import './App.css';


function App() {
  const [card, setCard] = useState({
    shipping: true,
    billing: false,
    payment: false
  })

const currentForm = () => {
  if (card.shipping === true) return <ShippingInfo />
  else if (card.billing === true) return <BillingInfo />
  else if (card.payment === true) return <Payment />
}

  return (
    <>
      <Header>
        <HeaderText> &lt; <Slash>&frasl;</Slash> &gt; Front-end Developer Test Task</HeaderText>
        <ShoppingBasket>cart</ShoppingBasket>

      </Header>
      <Order>
        <Route>
          <a 
          onClick={() => {setCard({
            shipping: true,
            billing: false,
            payment: false}); console.log(card)}}
             value="shipping" href="#Shipping">Shipping</a>&gt;
          <a 
           onClick={() => {setCard({
            shipping: false,
            billing: true,
            payment: false
           }); console.log(card)}}
           value="billing" href="#Billing">Billing</a>&gt;
          <a 
            onClick={ () => {setCard({
              shipping: false,
              billing: false,
              payment: true
            });  console.log(card)} }
            value="payment" href="#Payment">Payment</a>
        </Route>
        {
          currentForm()
        }
        <OrderPlate />
      </Order>

    </>
  );
}

export default App;

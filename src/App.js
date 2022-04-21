import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { OrderPlate } from './components/Index';
import { takeGeolocation, takeNavigagtorAddress } from './redux/ducks/address';

import {
  Header,
  HeaderLogo,
  HeaderText,
  ShoppingBasket,
  BasketContainer,
  Slash,
  Basket,
  ShoppingBasketText,
  NumberOfStuff,
  CircleOfNumber,
  Order
} from './styles/AppStyles';
import { GlobalStyles } from './GlobalStyles';

const App = () => {
  const dispatch = useDispatch();
  const stuff = useSelector(state => state.order.stuff);
  const navigate = useNavigate();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator
        .geolocation
        .getCurrentPosition(
          position => {
            dispatch(
              takeGeolocation(
                position.coords.latitude, 
                position.coords.longitude
              )
            );
            dispatch(takeNavigagtorAddress());
            console.log(position);
          }
        );
      }else{
        return;
      }
    }, [dispatch]);
    
  useEffect(() => navigate('/shipping'), [navigate]);

  return (
    <>
      <GlobalStyles />
      <Header>
        <HeaderText> <HeaderLogo>&lt; <Slash>&frasl;</Slash>&gt;</HeaderLogo> Front-end Developer Test Task</HeaderText>
        <ShoppingBasket>
          <ShoppingBasketText>cart</ShoppingBasketText>
          <BasketContainer>
            <Basket /> 
            { stuff.length === undefined ?
              null
              :
              <CircleOfNumber><NumberOfStuff>{stuff.length}</NumberOfStuff></CircleOfNumber>
            }   
          </BasketContainer>
        </ShoppingBasket>
        
      </Header>
      <Order>
        <Outlet />
        <OrderPlate />
      </Order>
    </>
  );
}

export default App;

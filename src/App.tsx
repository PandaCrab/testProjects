import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { OrderPlate } from './components/Index';
import { takeGeolocation, takeNavigagtorAddress } from './redux/ducks/address';

import { RootState, AppDispatch } from './types';

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
  const dispatch = useDispatch<AppDispatch>();
  const stuff = useSelector((state: RootState)=> state.order.stuff);

  useEffect(() => {
    if ('geolocation' in navigator) {
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
          }
        );
      } else {
        return;
      }
    }, [dispatch]);

  return (
    <>
      <GlobalStyles />
      <Header>
        <HeaderText> <HeaderLogo>&lt; <Slash>&frasl;</Slash>&gt;</HeaderLogo> Front-end Developer Test Task</HeaderText>
        <ShoppingBasket>
          <ShoppingBasketText>cart</ShoppingBasketText>
          <BasketContainer>
            <Basket /> 
            { stuff.length !== undefined && (
              <CircleOfNumber><NumberOfStuff>{stuff.length}</NumberOfStuff></CircleOfNumber>
            )}   
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

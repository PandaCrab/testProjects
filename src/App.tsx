import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { 
  Box, 
  Divider, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  SwipeableDrawer 
} from '@mui/material';

import { RootState } from './types';

import {
  OpenDrawerBtn,
  Header,
  HeaderLogo,
  HeaderText,
  ShoppingBasket,
  BasketContainer,
  Slash,
  Basket,
  ShoppingBasketText,
  NumberOfStuff,
  CircleOfNumber
} from './styles/AppStyles';
import { GlobalStyles } from './GlobalStyles';

const App = () => {
  const [viewDrawer, setViewDrawer] = useState(false)

  const navigate = useNavigate();
  const stuff = useSelector((state: RootState)=> state.order.stuff);

  return (
    <>
      <GlobalStyles />
      <Header>
        <OpenDrawerBtn onClick={() => setViewDrawer(!viewDrawer)}></OpenDrawerBtn>
        <HeaderText> <HeaderLogo onClick={() => navigate('/')}>&lt; <Slash>&frasl;</Slash>&gt;</HeaderLogo> Front-end Developer Test Task</HeaderText>
        <ShoppingBasket>
          <ShoppingBasketText>cart</ShoppingBasketText>
          <BasketContainer>
            <Basket /> 
            { stuff && stuff.length > 0 && (
              <CircleOfNumber><NumberOfStuff>{stuff.length}</NumberOfStuff></CircleOfNumber>
            )}   
          </BasketContainer>
        </ShoppingBasket> 
      </Header>
      <SwipeableDrawer
        anchor={"left"}
        open={viewDrawer}
        onClose={() => setViewDrawer(false)}
        onOpen={() => setViewDrawer(true)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setViewDrawer(false)}
        >
          <List>
              <ListItem key='storage' disablePadding>
                <ListItemButton onClick={() => navigate('/storage')}>
                  <ListItemIcon>
                    { '@' }
                  </ListItemIcon>
                  <ListItemText primary='Products Storage' />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem key='shipping' disablePadding>
                <ListItemButton onClick={() => navigate('/shipping')}>
                  <ListItemIcon>
                    { '@' }
                  </ListItemIcon>
                  <ListItemText primary='Delivery info' />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem key='shopping' disablePadding>
                <ListItemButton onClick={() => navigate('/shopping')}>
                  <ListItemIcon>
                    { '@' }
                  </ListItemIcon>
                  <ListItemText primary='Start shopping' />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem key='chart' disablePadding>
                <ListItemButton onClick={() => navigate('/chart')}>
                  <ListItemIcon>
                    { '@' }
                  </ListItemIcon>
                  <ListItemText primary='Sales chart' />
                </ListItemButton>
              </ListItem>
          </List>
        </Box>
      </SwipeableDrawer>

      <Outlet />
    </>
  );
};

export default App;

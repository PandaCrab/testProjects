import React from 'react';

import {
  StuffItem,
  StuffImage,
  StuffInfo,
  StuffName,
  StuffPrice,
  StuffInformation
 } from '../../styles/OrderPlateStyles';

export const StuffItems = ({ stuff }) => 
    <>
      <StuffItem>
        <StuffImage src={stuff.imgUrl} />
        <StuffInfo>
          <StuffName>{stuff.name}</StuffName>
          <StuffInformation>{stuff.color}</StuffInformation>
          <StuffInformation>Quantity: 1</StuffInformation>
        </StuffInfo>
        <StuffPrice>{stuff.price}$</StuffPrice>
      </StuffItem>
    </>


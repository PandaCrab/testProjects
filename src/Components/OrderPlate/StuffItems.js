import React from 'react';

import {
  StuffItem,
  StuffImage,
  StuffInfo,
  StuffName,
  StuffPrice,
  StuffInformation
 } from '../../Styles/OrderPlateStyles';

export const StuffItems = ({ stuff }) => {
  return (
      <StuffItem>
        <StuffImage src={stuff.imgUrl} />
        <StuffInfo>
          <StuffName>{stuff.name}</StuffName>
          <StuffInformation>{stuff.color}</StuffInformation>
          <StuffInformation>Quantity: 1</StuffInformation>
        </StuffInfo>
        <StuffPrice>{stuff.price}$</StuffPrice>
      </StuffItem>
    )
}
import React from 'react';

import {
  StuffItem,
  StuffImage,
  StuffInfo,
  StuffName,
  StuffPrice,
  StuffInformstion
 } from '../../Styled/OrderPlateStyles';

export const StuffItems = ({ stuff }) => {
  return (
      <StuffItem>
        <StuffImage src={stuff.imgUrl} />
        <StuffInfo>
          <StuffName>{stuff.name}</StuffName>
          <StuffInformstion>{stuff.color}</StuffInformstion>
          <StuffInformstion>Quantity: 1</StuffInformstion>
        </StuffInfo>
        <StuffPrice>{stuff.price}$</StuffPrice>
      </StuffItem>
    )
}
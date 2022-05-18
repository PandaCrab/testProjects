import React from 'react';

import {
  StuffItem,
  StuffImage,
  StuffInfo,
  StuffName,
  StuffPrice,
  StuffInformation
} from '../../styles/OrderPlateStyles';

interface propTypes {
  stuff: {
    imgUrl?: string,
    name?: string,
    color?: string
    price?: number,
    id?: number
  }
};

const StuffItems = ({ stuff }: propTypes) => (
  <StuffItem>
    <StuffImage src={stuff.imgUrl} alt={stuff.name} />
    <StuffInfo>
      <StuffName>{stuff.name}</StuffName>
      <StuffInformation>{stuff.color}</StuffInformation>
      <StuffInformation>Quantity: 1</StuffInformation>
    </StuffInfo>
    <StuffPrice>{stuff.price}$</StuffPrice>
  </StuffItem>
);

export default StuffItems;

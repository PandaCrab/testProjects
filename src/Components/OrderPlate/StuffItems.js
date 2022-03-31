import React from 'react';

import {
  StuffItem,
 } from '../../Styled/OrderPlateStyles';

export const StuffItems = ({ stuff }) => {
  return (
      <StuffItem>
        {stuff.name}
      </StuffItem>
    )
}
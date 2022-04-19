import React from 'react';
import { Link } from 'react-router-dom';

import { Nav } from './styles/AppStyles';

export const Navigate = () => (
    <Nav>
      <Link to="/shipping">Shipping</Link> &gt;
      <Link to="/billing">Billing</Link> &gt;
      <Link to="/payment">Payment</Link>
    </Nav>
);

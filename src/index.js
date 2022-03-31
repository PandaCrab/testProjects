import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import {store} from './Redux/store';
import {
  ShippingInfo,
  BillingInfo,
  Payment
} from './Components/Index';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <App /> }>
            <Route path="ShippingInfo" element={ <ShippingInfo /> } />
            <Route path="BillingInfo" element={ <BillingInfo /> } />
            <Route path="Payment" element={ <Payment /> } />
            <Route path="*" element={<p>Cannot find the page : 404</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

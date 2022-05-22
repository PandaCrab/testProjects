import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './redux/store';
import {
  HomePage,
  ShippingInfo,
  BillingInfo,
  Payment,
  SuccessBuying,
  ProductsStorage
} from './components/Index';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <App /> }>
            <Route index element={ <HomePage /> } />
            <Route path="storage" element={ <ProductsStorage /> } />
            <Route path="shipping" element={ <ShippingInfo /> } />
            <Route path="billing" element={ <BillingInfo /> } />
            <Route path="payment" element={ <Payment /> } />
            <Route path="TermsAndConditions" element={<h1>Terms and Conditions</h1>} />
            <Route path="success" element={ <SuccessBuying /> } />
            <Route path="*" element={<p>Cannot find the page : 404</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

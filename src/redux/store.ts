import { compose, createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import thunk from 'redux-thunk';

import stuffReducer, { stuffWatcher } from './ducks/stuff';
import dataReducer, { dataWatcher } from './ducks/data';
import addressReducer, { 
  addressInputWatcher,
  addressWatcher,
  navigatorAddressWatcher,
  geolocationWatcher
} from './ducks/address';

const saga = createSagaMiddleware();

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
 
export const store = createStore(combineReducers({
    order: stuffReducer,
    data: dataReducer,
    address: addressReducer
  }), composeEnhancers(
    applyMiddleware(
      thunk, saga
    )
  ));

saga.run(stuffWatcher);
saga.run(dataWatcher);
saga.run(addressWatcher);
saga.run(addressInputWatcher);
saga.run(navigatorAddressWatcher);
saga.run(geolocationWatcher);

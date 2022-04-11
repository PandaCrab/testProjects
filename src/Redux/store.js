import { compose, createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import thunk from 'redux-thunk';

import stuffReducer, { stuffWatcher } from './ducks/stuff';
import dataReducer, { dataWatcher } from './ducks/data';

const saga = createSagaMiddleware();
 
export const store = createStore(combineReducers({
    order: stuffReducer,
    data: dataReducer
  }), compose(
    applyMiddleware(
      thunk, saga
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));

saga.run(stuffWatcher);
saga.run(dataWatcher);

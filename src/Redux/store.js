import { compose, createStore, applyMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import thunk from 'redux-thunk';

import { rootReducer } from './rootReducer';
import { stuffWatcher} from "./ducks/stuff";
import { dataWatcher } from "./ducks/data";

const saga = createSagaMiddleware();
 
export const store = createStore(rootReducer, compose(
    applyMiddleware(
      thunk, saga
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));

  saga.run(stuffWatcher);
  saga.run(dataWatcher);

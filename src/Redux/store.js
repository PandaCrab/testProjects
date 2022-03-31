import { compose, createStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';

import { rootReducer } from './modules/rootReducer';
 
export const store = createStore(rootReducer, compose(
    applyMiddleware(
      thunk
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));

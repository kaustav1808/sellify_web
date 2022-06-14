import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export const store = (initialstate:any) => configureStore(
  { reducer: rootReducer },
  composeWithDevTools(applyMiddleware([thunk])),
);


export const wrapper = createWrapper(store);

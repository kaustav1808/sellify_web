import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [thunk];

export const store = configureStore(
  { reducer: rootReducer },
  {},
  composeWithDevTools(applyMiddleware(...middleware)),
);

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);

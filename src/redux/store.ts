import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export const store = () =>
  configureStore({ reducer: rootReducer, middleware: [thunk], devTools: true });

export const wrapper = createWrapper(store);

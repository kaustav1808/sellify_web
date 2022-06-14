import * as t from '../types';

export const auth = (state = { user: {} }, action: any) => {
  switch (action.type) {
    case t.SIGN_UP:
      return { ...state, user: { ...action.payload } };
    default:
      return { ...state };
  }
};

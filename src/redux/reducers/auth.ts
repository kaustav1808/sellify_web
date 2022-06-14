import * as t from '../types';

export const auth = (state = {}, action: any) => {
  switch (action.type) {
    case t.SIGN_UP:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};

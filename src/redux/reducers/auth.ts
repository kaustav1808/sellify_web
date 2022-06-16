import * as t from '../types';

export const auth = (state = {}, action: any) => {
  switch (action.type) {
    case t.SIGN_UP:
      return { ...state, ...action.payload };
    case t.SET_AUTH_USER:
      return {...state, ...action.payload}
    case t.SIGN_OUT:
      return {}    
    default:
      return { ...state };
  }
};

import * as t from '../types';

export const setUser = (user = {}) =>
  dispatch({
    type: t.SIGN_UP,
    payload: user,
  });

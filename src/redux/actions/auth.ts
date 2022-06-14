import * as t from '../types';

export const signUp =
  (payload = {}) =>
  (dispatch: any) =>
    dispatch({
      type: t.SIGN_UP,
      payload,
    });

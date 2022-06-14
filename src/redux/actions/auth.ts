import * as t from '../types';
import client from 'src/api/client';
import { postAuth } from 'src/services/auth';

export const signUp =
  (payload = {}) =>
  (dispatch: any) => {
    client.post('/auth/signup', payload).then((res) => {
      postAuth(res.data.newtoken);
      dispatch({
        type: t.SIGN_UP,
        payload: res.data.user,
      });
    });
  };

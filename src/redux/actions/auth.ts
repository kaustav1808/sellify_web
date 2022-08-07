import * as t from '../types';
import client from 'src/api/client';
import { clearTokens, postAuth } from 'src/services/auth';
import { toast } from 'react-toastify';

export const signIn =
  (payload = {}) =>
  (dispatch: any) => {
    client
      .post('/auth/signin', payload)
      .then((res) => {
        postAuth(res.data);
        toast.success('Successfully signin.');
        dispatch(setAuthUser());
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  };

export const signUp =
  (payload = {}) =>
  (dispatch: any) => {
    client
      .post('/auth/signup', payload)
      .then((res) => {
        postAuth(res.data.newtoken);
        dispatch({
          type: t.SIGN_UP,
          payload: res.data.user,
        });
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  };

export const setAuthUser = () => (dispatch: any) => {
  client
    .get('/user')
    .then((res) => {
      dispatch({
        type: t.SET_AUTH_USER,
        payload: res.data,
      });
    })
    .catch((e) => {
      console.log(e)
      toast.error(e.response.data);
    });
};

export const signOutUser = () => (dispatch: any) => {
  client.get('/auth/signout').then((res) => {
    clearTokens();
    toast.success('Successfully signout...!!!');
    dispatch({
      type: t.SIGN_OUT,
    });
  });
};

import * as t from '../types';
import client from 'src/api/client';

export const signUp =
  (payload = {}) =>
  (dispatch: any) =>{
    client.post('/auth/signup', payload)
    .then(res=>{
      console.log(res);
      dispatch({
        type: t.SIGN_UP,
        payload: res.data.user,
      });
    })
  }
    

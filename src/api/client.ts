import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { getAuthToken } from 'src/services/auth';

axios.defaults.baseURL = 'http://localhost:8080/api';
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.timeout = 12000;

const getHttpHeaders = (): AxiosRequestConfig => {
  const authToken = getAuthToken()
  if (authToken) {
    return {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };
  }

  return {};
};

const get = (path: string): Promise<AxiosResponse> =>
  axios.get(path, getHttpHeaders());

const del = (path: string): Promise<AxiosResponse> =>
  axios.delete(path, getHttpHeaders());

const post = (path: string, data: any): Promise<AxiosResponse> =>
  axios.post(path, data, getHttpHeaders());

const put = (path: string, data: any): Promise<AxiosResponse> =>
  axios.post(path, data, getHttpHeaders());

const patch = (path: string, data: any): Promise<AxiosResponse> =>
  axios.post(path, data, getHttpHeaders());

export default {
  get,
  del,
  post,
  put,
  patch,
};

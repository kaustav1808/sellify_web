import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { getAuthToken } from 'src/services/auth';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_CLIENT_URL;
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.timeout = 12000;

const getHttpHeaders = (): AxiosRequestConfig => {
  const authToken = getAuthToken();
  if (authToken) {
    return {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };
  }

  return {};
};

const client = {
  get: (path: string): Promise<AxiosResponse> =>
    axios.get(path, getHttpHeaders()),
  post: (path: string, data: any): Promise<AxiosResponse> =>
    axios.post(path, data, getHttpHeaders()),
  put: (path: string, data: any): Promise<AxiosResponse> =>
    axios.post(path, data, getHttpHeaders()),
  patch: (path: string, data: any): Promise<AxiosResponse> =>
    axios.post(path, data, getHttpHeaders()),
  del: (path: string): Promise<AxiosResponse> =>
    axios.delete(path, getHttpHeaders()),
};

export default client;

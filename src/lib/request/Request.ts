import axios, { AxiosRequestConfig } from 'axios';
const BASE_API_URL = process.env.REACT_APP_API_URL as string;

const instance = axios.create({
  baseURL: BASE_API_URL,
});

class Request {
  get<T>(path: string, config?: AxiosRequestConfig) {
    return instance.get<T>(path, config);
  }
}

export default new Request();

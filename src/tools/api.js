import axios from 'axios';
import { baseURL } from '../../config/config';

const api = axios.create({
  baseURL,
  timeout: 1e4,
});

// Add a request interceptor
api.interceptors.request.use(config => config,
  error => Promise.reject(error));

// Add a response interceptor
api.interceptors.response.use(response => response.data,
  error => Promise.reject(error));

export default api;
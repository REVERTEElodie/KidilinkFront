import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
});

// intercepteur de request avec axios
// TODO: à adapter
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const newConfig = config;

    const token = localStorage.getItem('jwtoken');

    if (token) {
      newConfig.headers.Authorization = `Bearer ${token}`;
    }

    return newConfig;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default api;

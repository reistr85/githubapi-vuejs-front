import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:9001/api/v1';

axios.interceptors.request.use(
  async config => {
    config.headers = {
      'api_key': 'base64:wMpjcDnogmIW+tjQ4/iFtW/Jyp34S42WRf/RA3skKDw=',
    }

    return config;
  },
  error => {
    Promise.reject(error)
  }
);

export default axios;
import axios from 'axios';
axios.defaults.baseURL = process.env.VUE_APP_URL_API;

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
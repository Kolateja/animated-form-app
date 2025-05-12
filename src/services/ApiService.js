import axios from 'axios';

const ApiService = (() => {
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000/api',
    timeout: 10000,
    withCredentials: true
  });

  axiosInstance.interceptors.request.use((config) => {
    if (config.data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data';
    } else {
      config.headers['Content-Type'] = 'application/json';
    }
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => response.data,
    (error) => {
      console.error(
        'API error:',
        error.response ? error.response.data : error.message
      );
      return Promise.reject(error); // 🔥 FIXED
    }
  );

  return {
    get: (url, params) => axiosInstance.get(url, { params }),
    post: (url, data) => axiosInstance.post(url, data),
    put: (url, data) => axiosInstance.put(url, data),
    delete: (url) => axiosInstance.delete(url),
  };
})();

export default ApiService;

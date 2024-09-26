// src/helpers/axios.js
import axios from 'axios';
import { toast } from 'vue3-toastify'; // Adjust if using Vue-specific Toast library

// Create an Axios instance
const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = token ? `Bearer ${token}` : undefined;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    // Handle success
    response.data.message && toast.success(response.data.message);
    return response.data.data;
  },
  (error) => {
    // Handle error
    const errorMessage = error.response?.data?.message || error.message;
    toast.error('Error: ' + errorMessage);
    if (error.response?.data?.redirect) {
      window.location = (error.response?.data?.redirect)
    } else if (error.response.code === 404) {
      window.location = '/signin'
      return response.data.data;
    }
    return Promise.reject(error);
  }
);

// Create a wrapper for GET, POST, PUT, DELETE methods
const Api = {
  get: (url, params) => api.get(url, { params }),
  post: (url, data) => api.post(url, data),
  put: (url, data) => api.put(url, data),
  delete: (url) => api.delete(url),
};

export default Api;
import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Accessing the environment variable
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

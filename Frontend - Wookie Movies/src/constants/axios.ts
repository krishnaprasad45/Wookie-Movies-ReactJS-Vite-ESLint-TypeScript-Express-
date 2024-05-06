import axios, { AxiosInstance } from 'axios';
const baseUrl = import.meta.env.VITE_BASE_URL;

const instance: AxiosInstance = axios.create({
  baseURL: baseUrl,
});

export default instance;

import axios from "axios";

const authURL = import.meta.env.VITE_APIURL;
const bearerToken = import.meta.env.VITE_BEARER_TOKEN
export const apiAxios = axios.create({
    baseURL: authURL,
    headers: {
        "Content-Type": "application/json",
    },
});

apiAxios.interceptors.request.use((config) => {
    const token = bearerToken
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
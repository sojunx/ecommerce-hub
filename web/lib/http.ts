import axios from "axios";

const BASE_API_URL = "http://localhost:8080";

export const http = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: false,
});

http.interceptors.response.use(
  (res) => res.data,
  (error) => Promise.reject(error.response?.data ?? error),
);

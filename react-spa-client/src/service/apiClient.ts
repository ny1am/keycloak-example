import axios, { AxiosError, AxiosInstance } from "axios";

import keycloakInstance from "./keycloakInstance";

const apiClient: AxiosInstance = axios.create({
  baseURL: "http://localhost:5001",
});

apiClient.interceptors.request.use(function (config) {
  const authToken = keycloakInstance.token;
  return {
    ...config,
    headers: { ...config.headers, Authorization: `Bearer ${authToken}` },
  };
});

apiClient.interceptors.response.use(
  ({ data }) => data as unknown,
  (error: AxiosError) => Promise.reject(error)
);

export default apiClient;

import axios, { AxiosInstance } from "axios";

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

export default apiClient;

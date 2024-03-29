import axios, { AxiosError, AxiosRequestConfig } from "axios";

const axiosInstance = axios.create();
axiosInstance.defaults.headers.common["Accept"] = "application/json";

const onRequest = async (
  config: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
  const { url = "" } = config;
  const urlToCall = url.replaceAll("/api/backend", "/api");

  const authorization = {
    "X-API-KEY": process.env.NEXT_PUBLIC_BACKEND_API_KEY,
    "X-API-SECRET": process.env.NEXT_PUBLIC_BACKEND_API_SECRET,
  };

  return {
    ...config,
    url: urlToCall,
    headers: {
      ...config.headers,
      ...authorization,
    },
  };
};
const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};
axiosInstance.interceptors.request.use(onRequest as any, onRequestError);
export { axiosInstance };

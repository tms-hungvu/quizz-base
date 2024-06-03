import { AxiosInstance } from "axios";
import { onErrorResponse } from "./handleErrorResponse";
import { onRequest } from "./handleRequest";
import { onResponse } from "./handleResponse";

export const setupInterceptors = (instance: AxiosInstance): AxiosInstance => {
    instance.defaults.baseURL = process.env.NEXT_PUBLIC_URL_API;

    instance.defaults.paramsSerializer = (params) => {
      return Object.keys(params)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&');
    };
    instance.interceptors.request.use(onRequest, onErrorResponse);
    instance.interceptors.response.use(onResponse, onErrorResponse);
  
    return instance;
  };
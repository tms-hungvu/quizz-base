import { InternalAxiosRequestConfig } from "axios";
import Cookies from "js-cookie"
export const onRequest = (config: InternalAxiosRequestConfig | any): InternalAxiosRequestConfig => {
    
    const authToken =  Cookies.get('auth');
    if(authToken){
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${authToken}`
        };
    }
  
    return config;
};
import { axiosInstance } from "@/axios/axios";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import { AxiosError, type AxiosRequestConfig } from "axios";

const axiosBaseQuery =
  (): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method = 'GET', data, params, headers }) => {
    try {
      console.log('🔄 AxiosBaseQuery called with:', { url, method, data, params, headers });
      
      // Ensure data is properly serialized for POST requests
      const config: AxiosRequestConfig = {
        url,
        method,
        params,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
      };

      // Only add data for methods that support it
      if (method !== 'GET' && method !== 'DELETE' && data) {
        // Ensure data is a plain object, not FormData or other formats
        config.data = typeof data === 'object' && data !== null ? data : JSON.parse(JSON.stringify(data));
        console.log('📦 Data being sent:', config.data);
      }

      const result = await axiosInstance(config);
      console.log('✅ AxiosBaseQuery success:', result.data);
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      console.error('❌ AxiosBaseQuery error:', {
        status: err.response?.status,
        data: err.response?.data,
        url: url,
        method: method,
        message: err.message,
      });
      
      // Don't log 403 errors for /users/me as they're expected when not authenticated
      if (!(err.response?.status === 403 && url === '/users/me')) {
        console.error('Unexpected error:', err);
      }
      
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export default axiosBaseQuery;
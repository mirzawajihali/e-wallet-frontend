
import config from "@/config/config";
import axios from "axios";

// Simple token storage
const tokenStorage = {
  getAccessToken: () => localStorage.getItem('accessToken'),
  setAccessToken: (token: string) => localStorage.setItem('accessToken', token),
  removeAccessToken: () => localStorage.removeItem('accessToken'),
  getRefreshToken: () => localStorage.getItem('refreshToken'),
  setRefreshToken: (token: string) => localStorage.setItem('refreshToken', token),
  removeRefreshToken: () => localStorage.removeItem('refreshToken'),
  clearTokens: () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }
};

export { tokenStorage };

export const axiosInstance = axios.create({
  baseURL: config.baseUrl,
  withCredentials: true, // Keep this for any httpOnly cookies that do work
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Add the access token to Authorization header if available
    const accessToken = tokenStorage.getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function onFulfilled(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function onRejected(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    
    // Don't redirect to login for expected authentication failures
    const isUserInfoRequest = error.config?.url?.includes('/users/me');
    const isOnPublicPage = ['/login', '/register', '/', '/about', '/features', '/pricing', '/contact', '/faq'].includes(window.location.pathname);
    
    // Handle 401/403 errors
    if ((error.response?.status === 401 || error.response?.status === 403)) {
      // If it's a user info request on a public page, don't redirect (expected behavior)
      if (isUserInfoRequest && isOnPublicPage) {
        console.log('Expected 403 for user info on public page, not redirecting');
        return Promise.reject(error);
      }
      
      // Clear stored tokens on authentication failure
      tokenStorage.clearTokens();
      
      // If we're on a protected route and get 401/403, redirect to login
      if (window.location.pathname !== '/login' && window.location.pathname !== '/register') {
        console.log('Authentication failed, clearing tokens and redirecting to login');
        window.location.href = '/login';
      }
    }
    
    return Promise.reject(error);
  }
);

const config = {
  baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1',
  frontendUrl: import.meta.env.VITE_BASE_URL || 'http://localhost:5173',
  googleClientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
};

export default config;

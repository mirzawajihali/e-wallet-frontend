// Debug utility to clear all auth data and check current state
export const debugAuth = () => {
  console.log('=== AUTH DEBUG INFO ===');
  
  // Show current tokens
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  
  console.log('Current Access Token:', accessToken);
  console.log('Current Refresh Token:', refreshToken);
  
  if (accessToken) {
    try {
      // Decode JWT without verification to see payload
      const payload = JSON.parse(atob(accessToken.split('.')[1]));
      console.log('Access Token Payload:', payload);
    } catch (e) {
      console.error('Error decoding access token:', e);
    }
  }
  
  if (refreshToken) {
    try {
      // Decode JWT without verification to see payload
      const payload = JSON.parse(atob(refreshToken.split('.')[1]));
      console.log('Refresh Token Payload:', payload);
    } catch (e) {
      console.error('Error decoding refresh token:', e);
    }
  }
};

export const clearAllAuthData = () => {
  console.log('🧹 Clearing all auth data...');
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  
  // Clear any other potential auth-related data
  localStorage.removeItem('user');
  localStorage.removeItem('userInfo');
  localStorage.removeItem('userRole');
  localStorage.removeItem('userId');
  localStorage.removeItem('userName');
  
  // Clear session storage too
  sessionStorage.clear();
  
  console.log('✅ All auth data cleared');
  
  // Refresh the page to reset state
  window.location.reload();
};

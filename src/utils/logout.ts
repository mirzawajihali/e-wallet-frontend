import { tokenStorage } from "@/axios/axios";
import { authApi } from "@/redux/Auth/auth.api";
import { store } from "@/redux/store";

/**
 * Comprehensive logout utility that handles all cleanup
 */
export const performLogout = async () => {
  try {
    // 1. Clear tokens immediately to prevent any ongoing requests
    tokenStorage.clearTokens();
    
    // 2. Call logout API if possible (optional, as we've already cleared tokens)
    try {
      await store.dispatch(authApi.endpoints.logout.initiate(undefined)).unwrap();
    } catch (apiError) {
      console.warn('Logout API call failed, but continuing with local cleanup:', apiError);
    }
    
    // 3. Reset entire Redux API state
    store.dispatch(authApi.util.resetApiState());
    
    // 4. Clear any other localStorage items that might contain user data
    localStorage.removeItem('userRole');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    
    // 5. Force navigation to login page
    window.location.href = '/login';
    
    console.log('✅ Logout completed successfully');
  } catch (error) {
    console.error('❌ Logout error:', error);
    
    // Even if there's an error, ensure we clear everything
    tokenStorage.clearTokens();
    store.dispatch(authApi.util.resetApiState());
    window.location.href = '/login';
  }
};

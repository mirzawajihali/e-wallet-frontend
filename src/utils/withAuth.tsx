import { useUserInfoQuery } from "@/redux/Auth/auth.api";
import type { TRole } from "@/types/authType";
import type { ComponentType } from "react";
import { Navigate } from "react-router-dom";


export const withAuth = (Component : ComponentType, requiredRole ? : TRole) => {
    return function AuthWrapper() {
        const {data, isLoading, error} = useUserInfoQuery(undefined);
        
        // Check if user has tokens in localStorage
        const hasTokens = localStorage.getItem('accessToken') && localStorage.getItem('refreshToken');
        
        console.log('withAuth state:', { 
            data, 
            isLoading, 
            error, 
            hasUser: !!data?.data?.email,
            hasTokens,
            currentPath: window.location.pathname
        });

        // If no tokens at all, immediately redirect to login
        if(!hasTokens){
            console.log('🚫 No tokens found, redirecting to login');
            return <Navigate to="/login" replace />;
        }

        // Show loading while checking authentication
        if(isLoading){
            return <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
            </div>;
        }

        // If there's an error (like 401/403) or no user data with tokens, redirect to login
        if((error || !data?.data?.email) && hasTokens){
            console.log('🚫 Authentication failed with tokens, clearing and redirecting to login');
            // Clear invalid tokens
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            return <Navigate to="/login" replace />;
        }

        // Check role authorization
        if(requiredRole && data.data.role !== requiredRole){
            console.log('🚫 Unauthorized access attempt by user with role:', data.data.role, "need:", requiredRole);
            return <Navigate to="/unauthorized" replace />;
        }

        // All checks passed, render the component
        console.log('✅ Authentication successful, rendering component');
        return <Component />;
    }
}
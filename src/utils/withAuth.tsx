import { useUserInfoQuery } from "@/redux/Auth/auth.api";
import type { TRole } from "@/types/authType";
import type { ComponentType } from "react";
import { Navigate } from "react-router-dom";


export const withAuth = (Component : ComponentType, requiredRole ? : TRole) => {
    return function AuthWrapper() {
        const {data, isLoading, error} = useUserInfoQuery(undefined);
        console.log('withAuth state:', { data, isLoading, error, hasUser: !!data?.data?.email });

        // Show loading while checking authentication
        if(isLoading){
            return <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
            </div>;
        }

        // If there's an error (like 401/403) or no user data, redirect to login
        if(error || !data?.data?.email){
            console.log('🚫 Authentication failed, redirecting to login');
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
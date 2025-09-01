import { useUserInfoQuery } from "@/redux/Auth/auth.api";
import type { TRole } from "@/types/authType";
import type { ComponentType } from "react";
import { Navigate } from "react-router-dom";


export const withAuth = (Component : ComponentType, requiredRole ? : TRole) => {
    return function AuthWrapper() {
        const {data, isLoading} = useUserInfoQuery(undefined);
      console.log(data)

        if(!isLoading && !data?.data?.email){
            return <Navigate to="/login" />;
        }

        if(!isLoading && requiredRole && data?.data?.role !== requiredRole){
            console.log('🚫 Unauthorized access attempt by user with role:', data?.data?.role, "need:", requiredRole);
            return <Navigate to="/unauthorized" />;
        }

        return <Component />;
    }
}
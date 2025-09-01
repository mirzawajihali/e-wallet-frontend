import { useUserInfoQuery } from "@/redux/Auth/auth.api";
import type { TRole } from "@/types/authType";
import type { ComponentType } from "react";
import { useNavigate } from 'react-router';

export const withAuth = (Component : ComponentType, requiredRole ? : TRole) => {
    return function AuthWrapper() {
        const {data, isLoading} = useUserInfoQuery(undefined);
        const navigate = useNavigate();

        if(!isLoading && !data?.data?.email){
            return navigate('/login');
        }

        if(requiredRole && data?.data?.role !== requiredRole){
            return navigate('/unauthorized');
        }

        return <Component />;
    }
}
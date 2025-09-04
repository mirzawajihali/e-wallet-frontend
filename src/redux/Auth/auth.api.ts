import type { AuthResponse, LoginCredentials, RegisterData } from "@/types/authType";
import type { IUser, IUserUpdateResponse } from "@/types/userType";
import { baseApi } from "../bassApi";

// Response type for user update





export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginCredentials>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        data: credentials,
      }),
      transformResponse: (response: AuthResponse) => {
        return response;
      },
      invalidatesTags: ["USER"], // This will trigger refetch of userInfo
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
       invalidatesTags: ["USER"],
    }),

    register: builder.mutation<AuthResponse, RegisterData>({
      query: (userData) => ({
        url: "/users/register",
        method: "POST",
        data: userData,
      }),
      transformResponse: (response: AuthResponse) => {
        
        return response;
      },
      invalidatesTags: ["USER"], // This will trigger refetch of userInfo
    }),

    userInfo : builder.query({
      query: () => ({
        url: "/users/me",
        method: "GET",
      }),
      providesTags: ["USER"],
      // Skip the query if there's no access token
      skip: () => !localStorage.getItem('accessToken'),
    }),
    allUsers : builder.query({
      query: (params) => ({
        url: "/users",
        method: "GET",
        params : params
      }),

       providesTags: ["USER"],
    }),
    allAgents : builder.query({
      query: (params) => ({
        url: "/users/agents",
        method: "GET",
        params : params
      }),

       providesTags: ["USER"],
    }),
    
    updateUser: builder.mutation<IUserUpdateResponse, Partial<IUser>>({
      query: (userData) => ({
        url: "/users/me", // Use a self-update endpoint
        method: "PATCH",
        data: userData,
      }),
      transformResponse: (response: IUserUpdateResponse) => {
        return response;
      },
      invalidatesTags: ["USER"], // This will trigger refetch of userInfo
    }),

    promoteToAgent: builder.mutation({
      query: (userId) => ({
        url: `/users/promote-to-agent/${userId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["USER"],
    }),
    promoteToAdmin: builder.mutation({
      query: (userId) => ({
        url: `/users/promote-to-admin/${userId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["USER"],
    }),

     google : builder.query({
      query: () => ({
        url: "/auth/google",
        method: "GET",
        
      }),

       providesTags: ["USER"],
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation, useUserInfoQuery, useAllUsersQuery, useAllAgentsQuery, useUpdateUserMutation, usePromoteToAdminMutation, usePromoteToAgentMutation } = authApi;

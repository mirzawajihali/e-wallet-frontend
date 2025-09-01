import type { AuthResponse, LoginCredentials, RegisterData } from "@/types/authType";
import { baseApi } from "../bassApi";




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
    }),

    userInfo : builder.query({
      query: () => ({
        url: "/users/me",
        method: "GET",
      }),

       providesTags: ["USER"],
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
    })
  }),
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation, useUserInfoQuery, useAllUsersQuery, useAllAgentsQuery } = authApi;

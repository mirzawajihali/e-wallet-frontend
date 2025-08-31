import { baseApi } from "../bassApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        data: credentials,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),

    register: builder.mutation({
      query: (userData) => ({
        url: "/users/register",
        method: "POST",
        data: userData,
      }),
    }),

    userInfo : builder.query({
      query: () => ({
        url: "/users/me",
        method: "GET",
      }),
    })
  }),
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } = authApi;

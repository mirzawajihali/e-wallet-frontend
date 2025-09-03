import { baseApi } from "../bassApi";




export const transactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allTransactions: builder.query({
      query: (params) => ({
        url: "/transactions",
        method: "GET",
        params : params
      }),

       providesTags: ["TRANSACTION"],
    }),
    myTransactions: builder.query({
      query: (params) => ({
        url: "/transactions/my-transactions",
        method: "GET",
        params : params
      }),

       providesTags: ["TRANSACTION"],
    }),

     

  }),
});

export const {  useAllTransactionsQuery, useMyTransactionsQuery } = transactionApi;

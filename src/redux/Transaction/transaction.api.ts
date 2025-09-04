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
    statsOverview: builder.query({
      query: () => ({
        url: "/transactions/stats/overview",
        method: "GET",
        
      }),

       providesTags: ["TRANSACTION"],
    }),

     

  }),
});

export const {  useAllTransactionsQuery, useMyTransactionsQuery, useStatsOverviewQuery } = transactionApi;

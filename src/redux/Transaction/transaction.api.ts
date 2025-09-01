import { baseApi } from "../bassApi";




export const transactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allTransactions: builder.query({
      query: (params) => ({
        url: "/transactions",
        method: "GET",
        params : params
      }),

       providesTags: ["USER"],
    })
  }),
});

export const {  useAllTransactionsQuery } = transactionApi;

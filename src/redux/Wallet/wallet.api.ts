import { baseApi } from "../bassApi";




export const transactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allTransactions: builder.query({
      query: () => ({
        url: "/wallets/my-wallet",
        method: "GET",
      }),

       providesTags: ["WALLET"],
    })
  }),
});

export const {  useAllTransactionsQuery } = transactionApi;

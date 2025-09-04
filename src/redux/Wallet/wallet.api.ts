import { baseApi } from "../bassApi";

export const walletApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    myWallet: builder.query({
      query: () => ({
        url: "/wallets/my-wallet",
        method: "GET",
      }),

       providesTags: ["WALLET"],
    }),
    allWallet: builder.query({
      query: (params) => ({
        url: "/wallets/all",
        method: "GET",
        params: params
      }),

       providesTags: ["WALLET"],
    }),

     sendMoney: builder.mutation({
          query: (sendMoneyData) => ({
            url: "/wallets/send-money",
            method: "POST",
            data: sendMoneyData,
          }),
          transformResponse: (response) => {
            return response;
          },
          invalidatesTags: ["WALLET"], 

  }),
     withdraw: builder.mutation({
          query: (withdrawData) => ({
            url: "/wallets/withdraw",
            method: "POST",
            data: withdrawData,
          }),
          transformResponse: (response) => {
            return response;
          },
          invalidatesTags: ["WALLET"], 

  }),
     addMoney: builder.mutation({
          query: (addMoneyData) => ({
            url: "/wallets/add-money",
            method: "POST",
            data: addMoneyData,
          }),
          transformResponse: (response) => {
            return response;
          },
          invalidatesTags: ["WALLET"], 

  }),
     cashIn: builder.mutation({
          query: (cashInData) => ({
            url: "/wallets/cash-in",
            method: "POST",
            data: cashInData,
          }),
          transformResponse: (response) => {
            return response;
          },
          invalidatesTags: ["WALLET"], 

  }),
     cashOut: builder.mutation({
          query: (cashOutData) => ({
            url: "/wallets/cash-out",
            method: "POST",
            data: cashOutData,
          }),
          transformResponse: (response) => {
            return response;
          },
          invalidatesTags: ["WALLET"], 

  }),
   blockWallet: builder.mutation({
      query: (walletId) => ({
        url: `/wallets/block/${walletId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["WALLET"],
    }),

   unblockWallet: builder.mutation({
      query: (walletId) => ({
        url: `/wallets/unblock/${walletId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["WALLET"],
    }),
   
})
});

export const { useMyWalletQuery, useSendMoneyMutation, useWithdrawMutation, useAddMoneyMutation ,
  useCashInMutation, useCashOutMutation, useAllWalletQuery, useBlockWalletMutation, useUnblockWalletMutation
} = walletApi;

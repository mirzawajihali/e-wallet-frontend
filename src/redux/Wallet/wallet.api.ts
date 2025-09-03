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
})
});

export const { useMyWalletQuery, useSendMoneyMutation } = walletApi;

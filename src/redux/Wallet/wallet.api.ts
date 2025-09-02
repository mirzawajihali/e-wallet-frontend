import { baseApi } from "../bassApi";




export const walletApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    myWallet: builder.query({
      query: () => ({
        url: "/wallets/my-wallet",
        method: "GET",
      }),

       providesTags: ["WALLET"],
    })
  }),
});

export const {  useMyWalletQuery } = walletApi;

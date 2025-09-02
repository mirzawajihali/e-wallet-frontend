export interface ITransaction {
  _id: string;
  type: "CASH_IN" | "CASH_OUT" | "SEND_MONEY" | "WITHDRAW" | "AGENT_COMMISSION";
  amount: number;
  fee: number;
  toWallet?: {
    _id: string;
    userId: string;
    balance: number;
  };
  fromWallet?: {
    _id: string;
    userId: string;
    balance: number;
  };
  description?: string;
  initiatedBy?: string | null;
  status: "PENDING" | "COMPLETED" | "FAILED" | "CANCELLED";
  createdAt: string;
  updatedAt: string;
  __v?: number;
}


export interface ITransactionsResponse {
  data: ITransaction[];
  totalPages: number;
  currentPage: number;
}

export interface ITransactionsTableProps {
  data: ITransactionsResponse;
}

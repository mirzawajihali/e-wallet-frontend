import { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowDownLeft, CreditCard, Wallet } from "lucide-react";

import { useMyTransactionsQuery } from "@/redux/Transaction/transaction.api";
import type { ITransaction } from "@/types/transactionType";

// Type definitions





// Component
const MyTransactions = () => {

  const [currentPage, setCurrentPage] = useState(1);
     const {data , isLoading} = useMyTransactionsQuery({page : 1});
  const totalPage = data?.meta.totalPages;
  const transactions = data?.data;


  // Format currency
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  // Format date
  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Get transaction type info
  const getTransactionTypeInfo = (type: string) => {
    switch (type) {
      case 'SEND_MONEY':
        return { icon: ArrowUpRight, color: 'text-red-500', bgColor: 'bg-red-500/10' };
      case 'RECEIVE_MONEY':
        return { icon: ArrowDownLeft, color: 'text-green-500', bgColor: 'bg-green-500/10' };
      case 'WITHDRAWAL':
        return { icon: CreditCard, color: 'text-orange-500', bgColor: 'bg-orange-500/10' };
      case 'DEPOSIT':
        return { icon: Wallet, color: 'text-blue-500', bgColor: 'bg-blue-500/10' };
      default:
        return { icon: CreditCard, color: 'text-gray-500', bgColor: 'bg-gray-500/10' };
    }
  };

  // Get status badge variant
  const getStatusVariant = (status: string): "default" | "secondary" | "destructive" | "outline" => {
    switch (status) {
      case 'COMPLETED':
        return 'default';
      case 'PENDING':
        return 'secondary';
      case 'FAILED':
        return 'destructive';
      default:
        return 'outline';
    }
  };


  
    if (isLoading) {
        return (
          <Card className="w-full">
            <CardContent className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading User...</p>
              </div>
            </CardContent>
          </Card>
        );
      }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">My Transactions</h1>

      <Table>
        <TableCaption>A list of all your transactions.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">Type</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Fee</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions?.map((transaction : ITransaction) => {
            const { icon: TypeIcon, color, bgColor } = getTransactionTypeInfo(transaction.type);
            
            return (
              <TableRow key={transaction._id}>
                <TableCell>
                  <div className={`flex items-center justify-center h-10 w-10 rounded-full ${bgColor}`}>
                    <TypeIcon className={`h-5 w-5 ${color}`} />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-medium">{transaction.description}</span>
                    <span className="text-sm text-muted-foreground">
                      {transaction.type.replace('_', ' ').toLowerCase()}
                    </span>
                  </div>
                </TableCell>
                <TableCell className={transaction.type === 'CASH_OUT' || transaction.type === 'WITHDRAW' 
                  ? 'text-red-500 font-medium' 
                  : 'text-green-500 font-medium'
                }>
                  {transaction.type === 'CASH_OUT' || transaction.type === 'WITHDRAW' 
                    ? `-${formatCurrency(transaction.amount)}`
                    : `+${formatCurrency(transaction.amount)}`
                  }
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {transaction.fee > 0 ? formatCurrency(transaction.fee) : 'Free'}
                </TableCell>
                <TableCell>
                  <Badge variant={getStatusVariant(transaction.status)}>
                    {transaction.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {formatDate(transaction.createdAt)}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      {/* Pagination */}
      {totalPage > 1 && (
        <Pagination className="mt-4">
          <PaginationContent>
            {/* Previous */}
            <PaginationItem>
              <PaginationPrevious
                className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              />
            </PaginationItem>

            {/* Page numbers */}
            {Array.from({ length: totalPage }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  isActive={currentPage === page}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            {/* Next */}
            <PaginationItem>
              <PaginationNext
                className={currentPage === totalPage ? "pointer-events-none opacity-50" : "cursor-pointer"}
                onClick={() => setCurrentPage((prev) => Math.min(totalPage, prev + 1))}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
export default MyTransactions;
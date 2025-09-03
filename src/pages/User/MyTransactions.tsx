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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowUpRight, ArrowDownLeft, CreditCard, Wallet, Filter, X } from "lucide-react";

import { useMyTransactionsQuery } from "@/redux/Transaction/transaction.api";
import type { ITransaction } from "@/types/transactionType";

// Type definitions





// Component
const MyTransactions = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionType, setTransactionType] = useState<string>("ALL");
  const [dateFrom, setDateFrom] = useState<string>("");
  const [dateTo, setDateTo] = useState<string>("");
  const [showFilters, setShowFilters] = useState(false);

  // Build query parameters
  const queryParams = {
    page: currentPage,
    ...(transactionType !== "ALL" && { type: transactionType }),
    ...(dateFrom && { dateFrom }),
    ...(dateTo && { dateTo }),
  };

  const { data, isLoading } = useMyTransactionsQuery(queryParams);
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

  // Clear all filters
  const clearFilters = () => {
    setTransactionType("ALL");
    setDateFrom("");
    setDateTo("");
    setCurrentPage(1);
  };

  // Check if any filters are active
  const hasActiveFilters = transactionType !== "ALL" || dateFrom || dateTo;

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-2xl font-semibold">My Transactions</h1>
        <Button 
          variant="outline" 
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2"
        >
          <Filter className="h-4 w-4" />
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </Button>
      </div>

      {/* Filters Section */}
      {showFilters && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Filter Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Transaction Type Filter */}
              <div className="space-y-2">
                <Label htmlFor="type-select">Transaction Type</Label>
                <Select value={transactionType} onValueChange={setTransactionType}>
                  <SelectTrigger id="type-select">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ALL">All Types</SelectItem>
                    <SelectItem value="SEND_MONEY">Send Money</SelectItem>
                    <SelectItem value="RECEIVE_MONEY">Receive Money</SelectItem>
                    <SelectItem value="CASH_IN">Cash In</SelectItem>
                    <SelectItem value="CASH_OUT">Cash Out</SelectItem>
                    <SelectItem value="WITHDRAWAL">Withdrawal</SelectItem>
                    <SelectItem value="DEPOSIT">Deposit</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date From Filter */}
              <div className="space-y-2">
                <Label htmlFor="date-from">From Date</Label>
                <Input
                  id="date-from"
                  type="date"
                  value={dateFrom}
                  onChange={(e) => setDateFrom(e.target.value)}
                />
              </div>

              {/* Date To Filter */}
              <div className="space-y-2">
                <Label htmlFor="date-to">To Date</Label>
                <Input
                  id="date-to"
                  type="date"
                  value={dateTo}
                  onChange={(e) => setDateTo(e.target.value)}
                />
              </div>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <div className="mt-4 pt-4 border-t">
                <Button 
                  variant="ghost" 
                  onClick={clearFilters}
                  className="flex items-center gap-2"
                >
                  <X className="h-4 w-4" />
                  Clear all filters
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Active Filters Summary */}
      {hasActiveFilters && !showFilters && (
        <div className="mb-4 p-3 bg-muted rounded-lg">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium">Active filters:</span>
            {transactionType !== "ALL" && (
              <Badge variant="secondary">Type: {transactionType.replace('_', ' ')}</Badge>
            )}
            {dateFrom && (
              <Badge variant="secondary">From: {dateFrom}</Badge>
            )}
            {dateTo && (
              <Badge variant="secondary">To: {dateTo}</Badge>
            )}
            <Button 
              variant="ghost" 
              size="sm"
              onClick={clearFilters}
              className="ml-auto h-6 px-2 text-xs"
            >
              Clear all
            </Button>
          </div>
        </div>
      )}

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
                <TableCell className={transaction.type === 'CASH_OUT' || transaction.type === 'WITHDRAW'  || transaction.type === 'SEND_MONEY'
                  ? 'text-red-500 font-medium' 
                  : 'text-green-500 font-medium'
                }>
                  {transaction.type === 'CASH_OUT' || transaction.type === 'WITHDRAW' || transaction.type === 'SEND_MONEY'
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
                  className="cursor-pointer"
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
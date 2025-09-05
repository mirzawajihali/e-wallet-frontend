import React, { useState } from 'react';
import {
  Search,
  Filter,
  Download,
  Eye,
  Calendar,
  ArrowUpDown,
  MoreHorizontal,
  Copy,
  ExternalLink
} from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { toast } from 'sonner';

import { useAllTransactionsQuery } from '@/redux/Transaction/transaction.api';
import type { ITransaction } from '@/types/transactionType';


interface TransactionTableProps {
  transactions?: ITransaction[];
  showUserInfo?: boolean;
  title?: string;
  description?: string;
}

const TransactionTable: React.FC<TransactionTableProps> = ({
  showUserInfo = true,
  title = "Transaction History",
  description = "Complete list of all transactions with detailed information"
}) => {

    const [currentPage, setCurrentPage] = useState(1);
    

  const { data, isLoading } = useAllTransactionsQuery({page : currentPage});
  console.log("teka r teka",data)
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<keyof ITransaction>('createdAt');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const totalPage = data?.meta?.totalPage ?? 1;

  // Handle loading state
  if (isLoading) {
    return (
      <Card className="w-full">
        <CardContent className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading transactions...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

 

  // Filter transactions based on search term
  const filteredTransactions = data?.data?.filter((transaction: ITransaction) =>
    transaction._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort transactions
  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];
    
    // Handle null/undefined values
    if (aValue == null && bValue == null) return 0;
    if (aValue == null) return sortDirection === 'asc' ? -1 : 1;
    if (bValue == null) return sortDirection === 'asc' ? 1 : -1;
    
    if (sortDirection === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const handleSort = (field: keyof ITransaction) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const getStatusBadge = (status: string) => {
    const statusColors = {
      COMPLETED: 'bg-green-100 text-green-800 border-green-300',
      PENDING: 'bg-yellow-100 text-yellow-800 border-yellow-300',
      FAILED: 'bg-red-100 text-red-800 border-red-300',
      CANCELLED: 'bg-gray-100 text-gray-800 border-gray-300'
    };

    return (
      <Badge className={statusColors[status as keyof typeof statusColors] || 'bg-gray-100 text-gray-800'}>
        {status}
      </Badge>
    );
  };

  const getTypeBadge = (type: string) => {
    const typeColors = {
      CASH_IN: 'bg-blue-100 text-blue-800',
      CASH_OUT: 'bg-orange-100 text-orange-800',
      SEND_MONEY: 'bg-purple-100 text-purple-800',
      WITHDRAW: 'bg-red-100 text-red-800',
      AGENT_COMMISSION: 'bg-green-100 text-green-800'
    };

    return (
      <Badge variant="outline" className={typeColors[type as keyof typeof typeColors]}>
        {type.replace('_', ' ')}
      </Badge>
    );
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-BD', {
      style: 'currency',
      currency: 'BDT',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date(dateString));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  const getNetAmount = (transaction: ITransaction) => {
    const { amount, fee, type } = transaction;
    if (type === 'CASH_IN') {
      return amount; // No fee deducted for cash in
    }
    return amount - fee; // Fee deducted for other types
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <CardTitle className="text-2xl">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              Date Range
            </Button>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
       
        {/* Search Bar */}
        <div className="flex items-center space-x-2">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search transactions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('_id')}
                    className="h-auto p-0 font-medium"
                  >
                    ID
                    <ArrowUpDown className="ml-2 h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('type')}
                    className="h-auto p-0 font-medium"
                  >
                    Type
                    <ArrowUpDown className="ml-2 h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead className="text-right">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('amount')}
                    className="h-auto p-0 font-medium"
                  >
                    Amount
                    <ArrowUpDown className="ml-2 h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead className="text-right">Fee</TableHead>
                <TableHead className="text-right">Net Amount</TableHead>
                {showUserInfo && <TableHead>Wallet Info</TableHead>}
                <TableHead>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('status')}
                    className="h-auto p-0 font-medium"
                  >
                    Status
                    <ArrowUpDown className="ml-2 h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('createdAt')}
                    className="h-auto p-0 font-medium"
                  >
                    Date
                    <ArrowUpDown className="ml-2 h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead className="w-[50px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedTransactions.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={showUserInfo ? 9 : 8} className="h-24 text-center">
                    No transactions found.
                  </TableCell>
                </TableRow>
              ) : (
                sortedTransactions.map((transaction) => (
                  <TableRow key={transaction._id}>
                    <TableCell className="font-mono text-xs">
                      <div className="flex items-center space-x-1">
                        <span className="truncate w-20" title={transaction._id}>
                          {transaction._id.slice(-8)}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-4 w-4 p-0"
                          onClick={() => copyToClipboard(transaction._id)}
                        >
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell>
                      {getTypeBadge(transaction.type)}
                    </TableCell>
                    <TableCell className="text-right font-medium">
                      {formatCurrency(transaction.amount)}
                    </TableCell>
                    <TableCell className="text-right text-muted-foreground">
                      {transaction.fee > 0 ? formatCurrency(transaction.fee) : '-'}
                    </TableCell>
                    <TableCell className="text-right font-medium">
                      {formatCurrency(getNetAmount(transaction))}
                    </TableCell>
                    {showUserInfo && (
                      <TableCell>
                        <div className="space-y-1 text-xs">
                          {transaction.toWallet && (
                            <div className="flex items-center space-x-1">
                              <span className="text-green-600">To:</span>
                              <code className="bg-green-50 px-1 rounded text-green-700">
                                {transaction.toWallet.userId.slice(-6)}
                              </code>
                              <span className="text-muted-foreground">
                                (Bal: {formatCurrency(transaction.toWallet.balance)})
                              </span>
                            </div>
                          )}
                          {transaction.fromWallet && (
                            <div className="flex items-center space-x-1">
                              <span className="text-red-600">From:</span>
                              <code className="bg-red-50 px-1 rounded text-red-700">
                                {transaction.fromWallet.userId.slice(-6)}
                              </code>
                              <span className="text-muted-foreground">
                                (Bal: {formatCurrency(transaction.fromWallet.balance)})
                              </span>
                            </div>
                          )}
                        </div>
                      </TableCell>
                    )}
                    <TableCell>
                      {getStatusBadge(transaction.status)}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {formatDate(transaction.createdAt)}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem onClick={() => copyToClipboard(transaction._id)}>
                            <Copy className="mr-2 h-4 w-4" />
                            Copy ID
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Export
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

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
      </CardContent>
    </Card>
  );
};

export default TransactionTable;

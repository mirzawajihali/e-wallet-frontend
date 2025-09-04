import React, { useState } from 'react';
import { useAllWalletQuery, useBlockWalletMutation, useUnblockWalletMutation } from "@/redux/Wallet/wallet.api";
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
} from "@/components/ui/pagination"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Search, Lock, Unlock, Loader2, Ban, CheckCircle } from "lucide-react";

// Types for wallet data
interface WalletUser {
  _id: string;
  name: string;
  email: string;
  role: string;
}

interface WalletData {
  _id: string;
  userId: WalletUser;
  balance: number;
  isBlocked: boolean;
  createdAt: string;
  updatedAt: string;
}

const AllWallets = () => {
    const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'ACTIVE' | 'BLOCKED'>('ALL');
  const [roleFilter, setRoleFilter] = useState<'ALL' | 'USER' | 'AGENT' | 'ADMIN'>('ALL');

  const { data, isLoading } = useAllWalletQuery({ page: currentPage });
  const [blockWallet, { isLoading: isBlocking }] = useBlockWalletMutation();
  const [unblockWallet, { isLoading: isUnblocking }] = useUnblockWalletMutation();
    const wallets = data?.data?.data
    const totalPage =  data?.data?.meta?.totalPage ?? 1;

  // Filter wallets based on search term, status, and role
    const filteredWallets = wallets?.filter((wallet: WalletData) => {
    // For search, handle both wallets with and without userId
    const matchesSearch = !searchTerm || 
      (wallet.userId && (
        wallet.userId.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        wallet.userId.email?.toLowerCase().includes(searchTerm.toLowerCase())
      )) ||
      (!wallet.userId && (
        "unknown user".includes(searchTerm.toLowerCase()) ||
        "no email".includes(searchTerm.toLowerCase())
      ));

    const matchesStatus = statusFilter === "ALL" || 
      (statusFilter === "ACTIVE" && !wallet.isBlocked) ||
      (statusFilter === "BLOCKED" && wallet.isBlocked);

    const matchesRole = roleFilter === "ALL" || 
      (wallet.userId && wallet.userId.role === roleFilter);

    return matchesSearch && matchesStatus && matchesRole;
  }) || [];

  const handleBlockWallet = async (userId: string, userName: string) => {
    try {
      await blockWallet(userId).unwrap();
      toast.success(`${userName}'s wallet has been blocked successfully!`);
    } catch (error: unknown) {
      const errorMessage = error && typeof error === 'object' && 'data' in error 
        ? (error as { data?: { message?: string } }).data?.message 
        : 'Failed to block wallet';
      toast.error(errorMessage || 'Failed to block wallet');
    }
  };

  const handleUnblockWallet = async (userId: string, userName: string) => {
    try {
      await unblockWallet(userId).unwrap();
      toast.success(`${userName}'s wallet has been unblocked successfully!`);
    } catch (error: unknown) {
      const errorMessage = error && typeof error === 'object' && 'data' in error 
        ? (error as { data?: { message?: string } }).data?.message 
        : 'Failed to unblock wallet';
      toast.error(errorMessage || 'Failed to unblock wallet');
    }
  };

  const formatCurrency = (amount: number) => {
    return `৳${new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0
    }).format(amount)}`;
  };

  const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case 'ADMIN': return 'destructive';
      case 'AGENT': return 'secondary';
      case 'USER': return 'outline';
      default: return 'outline';
    }
  };

  const getStatusBadge = (isBlocked: boolean) => {
    return isBlocked ? (
      <Badge variant="destructive" className="flex items-center gap-1">
        <Ban className="h-3 w-3" />
        Blocked
      </Badge>
    ) : (
      <Badge variant="default" className="flex items-center gap-1 bg-green-100 text-green-800 border-green-300">
        <CheckCircle className="h-3 w-3" />
        Active
      </Badge>
    );
  };

  if (isLoading) {
    return (
      <Card className="w-full">
        <CardContent className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading Wallets...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">All Wallets</h1>

      {/* Search and Filter Section */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Status Filter Buttons */}
            <div className="flex gap-2">
              {(['ALL', 'ACTIVE', 'BLOCKED'] as const).map((status) => (
                <Button
                  key={status}
                  variant={statusFilter === status ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setStatusFilter(status)}
                  className="whitespace-nowrap"
                >
                  {status === 'ALL' ? 'All Status' : status}
                </Button>
              ))}
            </div>

            {/* Role Filter Buttons */}
            <div className="flex gap-2">
              {(['ALL', 'USER', 'AGENT', 'ADMIN'] as const).map((role) => (
                <Button
                  key={role}
                  variant={roleFilter === role ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setRoleFilter(role)}
                  className="whitespace-nowrap"
                >
                  {role === 'ALL' ? 'All Roles' : role}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Table>
        <TableCaption>A list of all user wallets.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Photo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Balance</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredWallets.length === 0 ? (
            <TableRow>
              <TableCell colSpan={8} className="text-center py-8">
                <div className="text-muted-foreground">
                  {searchTerm || statusFilter !== 'ALL' || roleFilter !== 'ALL'
                    ? "No wallets found matching your filters" 
                    : "No wallets found"
                  }
                </div>
              </TableCell>
            </TableRow>
          ) : (
            filteredWallets.map((wallet: WalletData) => (
              <TableRow key={wallet._id}>
                <TableCell>
                  <Avatar>
                    <AvatarImage src="" alt={wallet.userId?.name || "Unknown"} />
                    <AvatarFallback>
                      {wallet.userId?.name?.charAt(0).toUpperCase() || "?"}
                    </AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="font-medium">
                  {wallet.userId?.name || "Unknown User"}
                </TableCell>
                <TableCell>
                  {wallet.userId?.email || "No email"}
                </TableCell>
                <TableCell>
                  {wallet.userId ? (
                    <Badge variant={getRoleBadgeVariant(wallet.userId.role)}>
                      {wallet.userId.role}
                    </Badge>
                  ) : (
                    <Badge variant="outline">Unknown</Badge>
                  )}
                </TableCell>
                <TableCell className="font-semibold text-primary">
                  {formatCurrency(wallet.balance)}
                </TableCell>
                <TableCell>
                  {getStatusBadge(wallet.isBlocked)}
                </TableCell>
                <TableCell>
                  {wallet.createdAt ? new Date(wallet.createdAt).toLocaleDateString() : "N/A"}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex gap-2 justify-end">
                    {wallet.isBlocked ? (
                      <Button
                        variant="default"
                        size="sm"
                        onClick={() => handleUnblockWallet(wallet._id, wallet.userId.name)}
                        disabled={isUnblocking}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        {isUnblocking ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <>
                            <Unlock className="h-4 w-4 mr-1" />
                            Unblock
                          </>
                        )}
                      </Button>
                    ) : (
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleBlockWallet(wallet._id, wallet.userId.name)}
                        disabled={isBlocking}
                      >
                        {isBlocking ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <>
                            <Lock className="h-4 w-4 mr-1" />
                            Block
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      {/* Summary */}
      <Card className="mt-4">
        <CardContent className="p-4">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Total Wallets: {Array.isArray(data?.data?.data) ? data.data.data.length : 0}</span>
            <span>Filtered Results: {filteredWallets.length}</span>
            <span>
              Active: {filteredWallets.filter((w: WalletData) => !w.isBlocked).length} | {' '}
              Blocked: {filteredWallets.filter((w: WalletData) => w.isBlocked).length}
            </span>
          </div>
        </CardContent>
      </Card>

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
};

export default AllWallets;
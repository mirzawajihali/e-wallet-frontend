import { useAllUsersQuery, usePromoteToAgentMutation, usePromoteToAdminMutation } from "@/redux/Auth/auth.api";
import type { IUser } from "@/types/userType";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Pagination,
  PaginationContent,
  
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Search, UserCheck, Crown, Loader2 } from "lucide-react";

const AllUsers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState<'ALL' | 'USER' | 'AGENT' | 'ADMIN'>('ALL');

  const { data, isLoading } = useAllUsersQuery({ page: currentPage });
  const [promoteToAgent, { isLoading: isPromotingToAgent }] = usePromoteToAgentMutation();
  const [promoteToAdmin, { isLoading: isPromotingToAdmin }] = usePromoteToAdminMutation();

  const totalPage = data?.meta?.totalPage ?? 1;

  // Filter users based on search term and role
  const filteredUsers = useMemo(() => {
    if (!data?.data) return [];
    
    return data.data.filter((user: IUser) => {
      const matchesSearch = 
        user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email?.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesRole = roleFilter === 'ALL' || user.role === roleFilter;
      
      return matchesSearch && matchesRole;
    });
  }, [data?.data, searchTerm, roleFilter]);

  const handlePromoteToAgent = async (userId: string, userName: string) => {
    try {
      await promoteToAgent(userId).unwrap();
      toast.success(`${userName} has been promoted to Agent successfully!`);
    } catch (error: unknown) {
      const errorMessage = error && typeof error === 'object' && 'data' in error 
        ? (error as { data?: { message?: string } }).data?.message 
        : 'Failed to promote user to Agent';
      toast.error(errorMessage || 'Failed to promote user to Agent');
    }
  };

  const handlePromoteToAdmin = async (userId: string, userName: string) => {
    try {
      await promoteToAdmin(userId).unwrap();
      toast.success(`${userName} has been promoted to Admin successfully!`);
    } catch (error: unknown) {
      const errorMessage = error && typeof error === 'object' && 'data' in error 
        ? (error as { data?: { message?: string } }).data?.message 
        : 'Failed to promote user to Admin';
      toast.error(errorMessage || 'Failed to promote user to Admin');
    }
  };

  const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case 'ADMIN': return 'destructive';
      case 'AGENT': return 'secondary';
      case 'USER': return 'outline';
      default: return 'outline';
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
      <h1 className="text-2xl font-semibold mb-6">All Users</h1>

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
                  {role === 'ALL' ? 'All Users' : role}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Table>
        <TableCaption>A list of all registered users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Photo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Verified</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.length === 0 ? (
            <TableRow>
              <TableCell colSpan={8} className="text-center py-8">
                <div className="text-muted-foreground">
                  {searchTerm || roleFilter !== 'ALL' 
                    ? "No users found matching your filters" 
                    : "No users found"
                  }
                </div>
              </TableCell>
            </TableRow>
          ) : (
            filteredUsers.map((user: IUser) => (
              <TableRow key={user._id}>
                <TableCell>
                  <Avatar>
                    <AvatarImage src={user?.picture || ""} alt={user.name} />
                    <AvatarFallback>
                      {user.name?.charAt(0).toUpperCase() || "U"}
                    </AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone || "N/A"}</TableCell>
                <TableCell>
                  <Badge variant={getRoleBadgeVariant(user.role)}>
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  {user?.isVarified ? (
                    <span className="text-green-600 font-medium">Yes</span>
                  ) : (
                    <span className="text-red-600 font-medium">No</span>
                  )}
                </TableCell>
                <TableCell>
                  {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex gap-2 justify-end">
                    {user.role === 'USER' && (
                      <>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handlePromoteToAgent(user._id!, user.name!)}
                          disabled={isPromotingToAgent}
                        >
                          {isPromotingToAgent ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <>
                              <UserCheck className="h-4 w-4 mr-1" />
                              Agent
                            </>
                          )}
                        </Button>
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => handlePromoteToAdmin(user._id!, user.name!)}
                          disabled={isPromotingToAdmin}
                        >
                          {isPromotingToAdmin ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <>
                              <Crown className="h-4 w-4 mr-1" />
                              Admin
                            </>
                          )}
                        </Button>
                      </>
                    )}
                    
                    {user.role === 'AGENT' && (
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => handlePromoteToAdmin(user._id!, user.name!)}
                        disabled={isPromotingToAdmin}
                      >
                        {isPromotingToAdmin ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <>
                            <Crown className="h-4 w-4 mr-1" />
                            Admin
                          </>
                        )}
                      </Button>
                    )}

                    {user.role === 'ADMIN' && (
                      <Badge variant="destructive" className="px-3 py-1">
                        <Crown className="h-3 w-3 mr-1" />
                        Admin
                      </Badge>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      {/* Summary */}
      <Card className="mt-4 mb-6">
        <CardContent className="p-4">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Total Users: {data?.data?.length || 0}</span>
            <span>Filtered Results: {filteredUsers.length}</span>
            <span>
              Roles: {data?.data?.filter((u: IUser) => u.role === 'USER').length || 0} Users, {' '}
              {data?.data?.filter((u: IUser) => u.role === 'AGENT').length || 0} Agents, {' '}
              {data?.data?.filter((u: IUser) => u.role === 'ADMIN').length || 0} Admins
            </span>
          </div>
        </CardContent>
      </Card>

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
};

export default AllUsers;

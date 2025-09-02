import { useAllUsersQuery } from "@/redux/Auth/auth.api";
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
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const AllUsers = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading } = useAllUsersQuery({ page: currentPage });
  const totalPage = data?.meta?.totalPage ?? 1;


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
      <h1 className="text-2xl font-semibold mb-4">All Users</h1>

      <Table>
        <TableCaption>A list of all registered users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Photo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Verified</TableHead>
            <TableHead>Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((user: IUser) => (
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
                {user?.isVarified ? (
                  <span className="text-green-600 font-medium">Yes</span>
                ) : (
                  <span className="text-red-600 font-medium">No</span>
                )}
              </TableCell>
              <TableCell>
                {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}
              </TableCell>
            </TableRow>
          ))}
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
};

export default AllUsers;

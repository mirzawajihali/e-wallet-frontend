import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CreditCard, ArrowUpRight, ArrowDownLeft, History, Plus } from "lucide-react";
import { Link } from "react-router-dom";

// Wallet data - in a real app this would come from props or API
const walletData = {
  "_id": "68b6faf07ad95b42eb106b15",
  "userId": {
    "_id": "68b6faef7ad95b42eb106b13",
    "name": "M M Saklain",
    "email": "saklain@gmail.com",
    "role": "USER"
  },
  "balance": 50,
  "isBlocked": false,
  "createdAt": "2025-09-02T14:10:56.073Z",
  "updatedAt": "2025-09-02T14:10:56.073Z",
  "__v": 0
};

export default function MyWallet() {
  // Format currency
 

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">My Wallet</h1>
          <p className="text-muted-foreground">
            Manage your funds and view transaction history
          </p>
        </div>

        {/* Balance Card */}
        <Card className="bg-primary text-primary-foreground">
          <CardHeader className="pb-3">
            <CardDescription className="text-primary-foreground/80">
              Available Balance
            </CardDescription>
            <CardTitle className="text-4xl">
              {walletData.balance}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground">
                {walletData.isBlocked ? "Blocked" : "Active"}
              </Badge>
              <span className="text-sm text-primary-foreground/80">
                Since {walletData.createdAt}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link className="h-auto py-3 flex flex-col gap-2" to="/user/add-money">
            <Button className="h-full" variant="outline">
              <ArrowUpRight className="h-5 w-5" />
              <span>Deposit</span>
            </Button>
          </Link>
          <Link className="h-auto py-3 flex flex-col gap-2" to="/user/withdraw">
            <Button className="h-full" variant="outline">
              <ArrowDownLeft className="h-5 w-5" />
              <span>Withdraw</span>
            </Button>
          </Link>
          <Link className="h-auto py-3 flex flex-col gap-2" to="/user/history">
          <Button className="h-full" variant="outline">
            <History className="h-5 w-5" />
            <span>History</span>
          </Button>
          </Link>
        </div>

        {/* Account Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* User Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Account Holder
              </CardTitle>
              <CardDescription>
                Personal information associated with this wallet
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Name</div>
                <div className="font-medium">{walletData.userId.name}</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Email</div>
                <div className="font-medium">{walletData.userId.email}</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Role</div>
                <div className="font-medium">{walletData.userId.role}</div>
              </div>
            </CardContent>
          </Card>

          {/* Wallet Information */}
          <Card>
            <CardHeader>
              <CardTitle>Wallet Details</CardTitle>
              <CardDescription>
                Technical information about your wallet
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Wallet ID</div>
                <div className="font-medium text-sm truncate">{walletData._id}</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">User ID</div>
                <div className="font-medium text-sm truncate">{walletData.userId._id}</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Created</div>
                <div className="font-medium">{walletData.createdAt}</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Last Updated</div>
                <div className="font-medium">{walletData.updatedAt}</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Add Funds Button for mobile */}
        <div className="fixed bottom-6 right-6 sm:hidden">
          <Button size="lg" className="rounded-full h-14 w-14 shadow-lg">
            <Plus className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}
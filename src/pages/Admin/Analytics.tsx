import React from 'react';
import { 
  Users,
  CreditCard, 
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Filter,
  Download,
  Eye,
  TrendingUp,
  Wallet,
  UserCheck,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useStatsOverviewQuery } from '@/redux/Transaction/transaction.api';
import { useAllUsersQuery, useAllAgentsQuery } from '@/redux/Auth/auth.api';
import { useAllTransactionsQuery } from '@/redux/Transaction/transaction.api';
import type { IUser } from '@/types/userType';
import type { ITransaction } from '@/types/transactionType';
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Types for stats data
interface TransactionTypeStats {
  _id: string;
  count: number;
  totalAmount: number;
  avgAmount: number;
}

// Mock data for analytics
const analyticsData = {
  totalUsers: 12543,
  totalTransactions: 8765,
  totalRevenue: 543210,
  activeUsers: 9876,
  userGrowth: 12.5,
  transactionGrowth: 8.3,
  revenueGrowth: 15.7,
  activeUserGrowth: -2.1,
  
  recentTransactions: [
    { id: 1, user: "John Doe", amount: 1250, type: "Cash In", time: "2 min ago", status: "completed" },
    { id: 2, user: "Jane Smith", amount: 850, type: "Send Money", time: "5 min ago", status: "completed" },
    { id: 3, user: "Mike Johnson", amount: 2100, type: "Withdraw", time: "8 min ago", status: "pending" },
    { id: 4, user: "Sarah Wilson", amount: 750, type: "Cash Out", time: "12 min ago", status: "completed" },
    { id: 5, user: "David Brown", amount: 1500, type: "Cash In", time: "15 min ago", status: "failed" }
  ],
  
  topAgents: [
    { id: 1, name: "Alice Cooper", transactions: 156, revenue: 45600, growth: 12.3 },
    { id: 2, name: "Bob Miller", transactions: 142, revenue: 38900, growth: 8.7 },
    { id: 3, name: "Carol Davis", transactions: 135, revenue: 36200, growth: 15.2 },
    { id: 4, name: "Daniel Lee", transactions: 129, revenue: 34800, growth: -3.1 },
    { id: 5, name: "Emma Wilson", transactions: 121, revenue: 32100, growth: 6.4 }
  ],
  
  monthlyData: [
    { month: "Jan", revenue: 45000, transactions: 1200, users: 850 },
    { month: "Feb", revenue: 52000, transactions: 1350, users: 920 },
    { month: "Mar", revenue: 48000, transactions: 1280, users: 890 },
    { month: "Apr", revenue: 61000, transactions: 1520, users: 1050 },
    { month: "May", revenue: 58000, transactions: 1450, users: 1010 },
    { month: "Jun", revenue: 67000, transactions: 1680, users: 1180 }
  ]
};

const Analytics: React.FC = () => {
  const navigate = useNavigate();
  
  // Fetch real data
  const { data: statsData, isLoading: statsLoading } = useStatsOverviewQuery({});
  const { data: usersData, isLoading: usersLoading } = useAllUsersQuery({ page: 1 });
  const { data: agentsData, isLoading: agentsLoading } = useAllAgentsQuery({ page: 1 });
  const { data: transactionsData, isLoading: transactionsLoading } = useAllTransactionsQuery({ page: 1, limit: 5 });

  const formatCurrency = (amount: number) => {
    return `৳${new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0
    }).format(amount)}`;
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const getGrowthColor = (growth: number) => {
    return growth >= 0 ? 'text-green-600' : 'text-red-600';
  };

  const getGrowthIcon = (growth: number) => {
    return growth >= 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />;
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'COMPLETED':
      case 'completed':
        return <Badge className="bg-green-100 text-green-800 border-green-300">Completed</Badge>;
      case 'PENDING':
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">Pending</Badge>;
      case 'FAILED':
      case 'failed':
        return <Badge className="bg-red-100 text-red-800 border-red-300">Failed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getTransactionTypeColor = (type: string) => {
    switch (type) {
      case 'CASH_IN':
        return 'bg-green-500';
      case 'CASH_OUT':
        return 'bg-red-500';
      case 'SEND_MONEY':
        return 'bg-blue-500';
      case 'DEPOSIT':
        return 'bg-purple-500';
      case 'WITHDRAW':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getTransactionTypeIcon = (type: string) => {
    switch (type) {
      case 'CASH_IN':
        return <ArrowDownRight className="w-4 h-4" />;
      case 'CASH_OUT':
        return <ArrowUpRight className="w-4 h-4" />;
      case 'SEND_MONEY':
        return <ArrowRight className="w-4 h-4" />;
      case 'DEPOSIT':
        return <Wallet className="w-4 h-4" />;
      case 'WITHDRAW':
        return <CreditCard className="w-4 h-4" />;
      default:
        return <Activity className="w-4 h-4" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Monitor your business performance and user activity</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="w-4 h-4 mr-2" />
            Last 30 days
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

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {usersLoading ? "Loading..." : formatNumber(usersData?.data?.length || 0)}
            </div>
            <div className={`flex items-center text-xs ${getGrowthColor(analyticsData.userGrowth)}`}>
              {getGrowthIcon(analyticsData.userGrowth)}
              <span className="ml-1">+{analyticsData.userGrowth}% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Transactions</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {statsLoading ? "Loading..." : formatNumber(statsData?.data?.overview?.totalTransactions || 0)}
            </div>
            <div className={`flex items-center text-xs ${getGrowthColor(analyticsData.transactionGrowth)}`}>
              {getGrowthIcon(analyticsData.transactionGrowth)}
              <span className="ml-1">+{analyticsData.transactionGrowth}% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Volume</CardTitle>
            ৳
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {statsLoading ? "Loading..." : formatCurrency(statsData?.data?.overview?.totalVolume || 0)}
            </div>
            <div className={`flex items-center text-xs ${getGrowthColor(analyticsData.revenueGrowth)}`}>
              {getGrowthIcon(analyticsData.revenueGrowth)}
              <span className="ml-1">+{analyticsData.revenueGrowth}% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Agents</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {agentsLoading ? "Loading..." : formatNumber(agentsData?.data?.length || 0)}
            </div>
            <div className={`flex items-center text-xs ${getGrowthColor(analyticsData.activeUserGrowth)}`}>
              {getGrowthIcon(analyticsData.activeUserGrowth)}
              <span className="ml-1">{analyticsData.activeUserGrowth}% from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Transaction Types Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Transaction Types Overview
          </CardTitle>
          <CardDescription>Breakdown of transaction types by volume and count</CardDescription>
        </CardHeader>
        <CardContent>
          {statsLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading transaction data...</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {statsData?.data?.byType?.map((type: TransactionTypeStats) => {
                const maxAmount = Math.max(...statsData.data.byType.map((t: TransactionTypeStats) => t.totalAmount));
                const percentage = (type.totalAmount / maxAmount) * 100;
                
                return (
                  <div key={type._id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${getTransactionTypeColor(type._id)}`}>
                          {getTransactionTypeIcon(type._id)}
                        </div>
                        <div>
                          <h4 className="font-medium">{type._id.replace('_', ' ')}</h4>
                          <p className="text-sm text-muted-foreground">{type.count} transactions</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{formatCurrency(type.totalAmount)}</p>
                        <p className="text-sm text-muted-foreground">Avg: {formatCurrency(type.avgAmount)}</p>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`${getTransactionTypeColor(type._id)} h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Transactions */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    Recent Transactions
                  </CardTitle>
                  <CardDescription>Latest financial activity on the platform</CardDescription>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => navigate('/admin/transactions')}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {transactionsLoading ? (
                <div className="flex items-center justify-center h-32">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                </div>
              ) : (
                <div className="space-y-4">
                  {transactionsData?.data?.slice(0, 5).map((transaction: ITransaction) => (
                    <div key={transaction._id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-full ${getTransactionTypeColor(transaction.type)}`}>
                          {getTransactionTypeIcon(transaction.type)}
                        </div>
                        <div>
                          <p className="font-medium">User Transaction</p>
                          <p className="text-sm text-muted-foreground">
                            {transaction.type.replace('_', ' ')} • {new Date(transaction.createdAt).toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                      <div className="text-right space-y-1">
                        <p className="font-medium">{formatCurrency(transaction.amount)}</p>
                        {getStatusBadge(transaction.status)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Quick Access */}
        <div className="space-y-6">
          {/* Users Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Users Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total Users</span>
                <span className="font-medium">{usersData?.data?.length || 0}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Active Agents</span>
                <span className="font-medium">{agentsData?.data?.length || 0}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Regular Users</span>
                <span className="font-medium">
                  {(usersData?.data?.length || 0) - (agentsData?.data?.length || 0)}
                </span>
              </div>
              <Separator />
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={() => navigate('/admin/all-users')}
              >
                <Eye className="w-4 h-4 mr-2" />
                Manage Users
              </Button>
            </CardContent>
          </Card>

          {/* Agents Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5" />
                Top Agents
              </CardTitle>
            </CardHeader>
            <CardContent>
              {agentsLoading ? (
                <div className="flex items-center justify-center h-32">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                </div>
              ) : (
                <div className="space-y-4">
                  {agentsData?.data?.slice(0, 3).map((agent: IUser, index: number) => (
                    <div key={agent._id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={agent.picture || ""} alt={agent.name} />
                          <AvatarFallback>
                            {agent.name?.charAt(0).toUpperCase() || "A"}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-sm">{agent.name}</p>
                          <p className="text-xs text-muted-foreground">{agent.email}</p>
                        </div>
                      </div>
                      <Badge variant="secondary">#{index + 1}</Badge>
                    </div>
                  ))}
                  <Separator />
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    onClick={() => navigate('/admin/agents')}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View All Agents
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Transaction Stats Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wallet className="h-5 w-5" />
            Transaction Statistics
          </CardTitle>
          <CardDescription>Detailed breakdown of transaction metrics</CardDescription>
        </CardHeader>
        <CardContent>
          {statsLoading ? (
            <div className="flex items-center justify-center h-32">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {statsData?.data?.byType?.map((type: TransactionTypeStats) => (
                <div key={type._id} className="text-center p-4 border rounded-lg">
                  <div className={`inline-flex p-3 rounded-full mb-3 ৳{getTransactionTypeColor(type._id)}`}>
                    {getTransactionTypeIcon(type._id)}
                  </div>
                  <h4 className="font-medium text-lg">{type._id.replace('_', ' ')}</h4>
                  <p className="text-2xl font-bold text-primary">{type.count}</p>
                  <p className="text-sm text-muted-foreground">
                    {formatCurrency(type.totalAmount)}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Avg: {formatCurrency(type.avgAmount)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
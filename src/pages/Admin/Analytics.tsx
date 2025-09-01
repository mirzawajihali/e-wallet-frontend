import React from 'react';
import { 
  Users, 
  DollarSign, 
  CreditCard, 
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Filter,
  Download,
  MoreHorizontal
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

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
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
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
      case 'completed':
        return <Badge className="bg-green-100 text-green-800 border-green-300">Completed</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">Pending</Badge>;
      case 'failed':
        return <Badge className="bg-red-100 text-red-800 border-red-300">Failed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
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
            <div className="text-2xl font-bold">{formatNumber(analyticsData.totalUsers)}</div>
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
            <div className="text-2xl font-bold">{formatNumber(analyticsData.totalTransactions)}</div>
            <div className={`flex items-center text-xs ${getGrowthColor(analyticsData.transactionGrowth)}`}>
              {getGrowthIcon(analyticsData.transactionGrowth)}
              <span className="ml-1">+{analyticsData.transactionGrowth}% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(analyticsData.totalRevenue)}</div>
            <div className={`flex items-center text-xs ${getGrowthColor(analyticsData.revenueGrowth)}`}>
              {getGrowthIcon(analyticsData.revenueGrowth)}
              <span className="ml-1">+{analyticsData.revenueGrowth}% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(analyticsData.activeUsers)}</div>
            <div className={`flex items-center text-xs ${getGrowthColor(analyticsData.activeUserGrowth)}`}>
              {getGrowthIcon(analyticsData.activeUserGrowth)}
              <span className="ml-1">{analyticsData.activeUserGrowth}% from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Transactions */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>Latest financial activity on the platform</CardDescription>
                </div>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <DollarSign className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{transaction.user}</p>
                        <p className="text-sm text-muted-foreground">{transaction.type} • {transaction.time}</p>
                      </div>
                    </div>
                    <div className="text-right space-y-1">
                      <p className="font-medium">{formatCurrency(transaction.amount)}</p>
                      {getStatusBadge(transaction.status)}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Agents */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Agents</CardTitle>
              <CardDescription>Agents with highest transaction volume</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.topAgents.map((agent, index) => (
                  <div key={agent.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium">{index + 1}</span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">{agent.name}</p>
                        <p className="text-xs text-muted-foreground">{agent.transactions} transactions</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{formatCurrency(agent.revenue)}</p>
                      <div className={`flex items-center text-xs ${getGrowthColor(agent.growth)}`}>
                        {getGrowthIcon(agent.growth)}
                        <span className="ml-1">{agent.growth}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Monthly Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Overview</CardTitle>
          <CardDescription>Revenue, transactions, and user growth over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Simple chart representation */}
            <div className="grid gap-4 md:grid-cols-6">
              {analyticsData.monthlyData.map((month) => (
                <div key={month.month} className="text-center space-y-2">
                  <div className="font-medium text-sm">{month.month}</div>
                  <div className="space-y-1">
                    <div 
                      className="bg-blue-500 rounded-t"
                      style={{ height: `${(month.revenue / 70000) * 100}px`, minHeight: '20px' }}
                    />
                    <div 
                      className="bg-green-500"
                      style={{ height: `${(month.transactions / 2000) * 100}px`, minHeight: '15px' }}
                    />
                    <div 
                      className="bg-purple-500 rounded-b"
                      style={{ height: `${(month.users / 1500) * 100}px`, minHeight: '10px' }}
                    />
                  </div>
                  <div className="text-xs space-y-1">
                    <div className="text-blue-600">{formatCurrency(month.revenue)}</div>
                    <div className="text-green-600">{formatNumber(month.transactions)}T</div>
                    <div className="text-purple-600">{formatNumber(month.users)}U</div>
                  </div>
                </div>
              ))}
            </div>
            
            <Separator />
            
            {/* Legend */}
            <div className="flex justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded" />
                <span>Revenue</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded" />
                <span>Transactions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded" />
                <span>Users</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
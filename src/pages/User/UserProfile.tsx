import React, { useEffect, useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Shield, 
  Camera,
  Edit3,
  Save,
  X,
  CheckCircle,
  AlertCircle,
  Clock
} from 'lucide-react';
import {Badge} from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import type { IUser } from '@/types/userType';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useUserInfoQuery } from '@/redux/Auth/auth.api';

// Mock user data - replace with actual API call
const mockUser: IUser = {
  _id: "507f1f77bcf86cd799439011",
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  picture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  address: "123 Main Street, New York, NY 10001",
  isDeleted: false,
  isActive: "ACTIVE",
  isVarified: true,
  auths: [
    { provider: "google", providerId: "google_123456", email: "john.doe@gmail.com" },
    { provider: "local", providerId: "local_789012" }
  ],
  role: "USER",
  transactions: ["trans_1", "trans_2", "trans_3"],
  createdAt: "2024-01-15T08:30:00Z",
  updatedAt: "2024-08-30T14:22:00Z"
};

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<IUser>(mockUser);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState<IUser>(mockUser);
  const {data} = useUserInfoQuery(undefined);
  
  useEffect(() => {
  if (data?.data?.email) {
    setUser(data.data);
  }
}, [data]);


  const handleEdit = () => {
    setIsEditing(true);
    setEditedUser({ ...user });
  };

  const handleSave = async () => {
    try {
    
      console.log('Saving user:', editedUser);
      setUser(editedUser);
      setIsEditing(false);
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Failed to update profile. Please try again.");
      console.error('Error updating profile:', error);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedUser({ ...user });
  };

  const handleInputChange = (field: keyof IUser, value: string) => {
    setEditedUser(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ACTIVE': return 'bg-green-500';
      case 'INACTIVE': return 'bg-yellow-500';
      case 'SUSPENDED': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'SUPER_ADMIN': return 'bg-purple-600 text-white';
      case 'ADMIN': return 'bg-blue-600 text-white';
      case 'AGENT': return 'bg-orange-600 text-white';
      case 'USER': return 'bg-green-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">User Profile</h1>
        <p className="text-muted-foreground">Manage your account information and preferences</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Profile Card */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="text-center">
              <div className="relative inline-block">
                <Avatar className="w-24 h-24 mx-auto">
                  <AvatarImage src={user.picture} alt={user.name} />
                  <AvatarFallback className="text-lg">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <Button
                  size="sm"
                  variant="outline"
                  className="absolute -bottom-2 -right-2 rounded-full p-2 h-8 w-8"
                  onClick={() => toast.info("Photo upload feature coming soon!")}
                >
                  <Camera className="h-3 w-3" />
                </Button>
              </div>
              <CardTitle className="mt-4">{user.name}</CardTitle>
              <CardDescription>{user.email}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Status Badges */}
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge className={getRoleBadgeColor(user.role)}>
                  <Shield className="w-3 h-3 mr-1" />
                  {user.role}
                </Badge>
                <Badge variant="outline" className="border-green-500 text-green-700">
                  <div className={`w-2 h-2 rounded-full mr-2 ${getStatusColor(user.isActive || 'INACTIVE')}`} />
                  {user.isActive}
                </Badge>
              </div>

              {/* Verification Status */}
              <div className="flex items-center justify-center space-x-2">
                {user.isVarified ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-green-600">Verified Account</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm text-yellow-600">Pending Verification</span>
                  </>
                )}
              </div>

              {/* Account Stats */}
              <div className="text-center pt-4 border-t">
                <div className="text-2xl font-bold text-primary">{user.transactions?.length || 0}</div>
                <div className="text-sm text-muted-foreground">Total Transactions</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Details Card */}
        <div className="md:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your personal details here</CardDescription>
              </div>
              {!isEditing ? (
                <Button onClick={handleEdit} variant="outline" size="sm">
                  <Edit3 className="w-4 h-4 mr-2" />
                  Edit
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button onClick={handleSave} size="sm">
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                  <Button onClick={handleCancel} variant="outline" size="sm">
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                </div>
              )}
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    {isEditing ? (
                      <Input
                        id="name"
                        value={editedUser.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                      />
                    ) : (
                      <div className="flex items-center space-x-2 p-2 border rounded-md bg-muted/50">
                        <User className="w-4 h-4 text-muted-foreground" />
                        <span>{user.name}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="flex items-center space-x-2 p-2 border rounded-md bg-muted/50">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span>{user.email}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Email cannot be changed</p>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    {isEditing ? (
                      <Input
                        id="phone"
                        value={editedUser.phone || ''}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Enter your phone number"
                      />
                    ) : (
                      <div className="flex items-center space-x-2 p-2 border rounded-md bg-muted/50">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <span>{user.phone || 'Not provided'}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    {isEditing ? (
                      <Input
                        id="address"
                        value={editedUser.address || ''}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        placeholder="Enter your address"
                      />
                    ) : (
                      <div className="flex items-center space-x-2 p-2 border rounded-md bg-muted/50">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span>{user.address || 'Not provided'}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <Separator />

              {/* Authentication Providers */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Connected Accounts</h3>
                <div className="space-y-2">
                  {user.auths.map((auth, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <Shield className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium capitalize">{auth.provider}</p>
                          <p className="text-sm text-muted-foreground">
                            {auth.email || `ID: ${auth.providerId.slice(0, 8)}...`}
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline">Connected</Badge>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Account Metadata */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Account Information</h3>
                <div className="grid gap-4 md:grid-cols-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Account Created:</span>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{new Date(user.createdAt || '').toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Last Updated:</span>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{new Date(user.updatedAt || '').toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">User ID:</span>
                    <code className="text-xs bg-muted px-2 py-1 rounded">{user._id}</code>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Account Status:</span>
                    <Badge variant={user.isDeleted ? "destructive" : "default"}>
                      {user.isDeleted ? "Deleted" : "Active"}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
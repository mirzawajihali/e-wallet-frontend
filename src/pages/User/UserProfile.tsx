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
import { useUserInfoQuery, useUpdateUserMutation } from '@/redux/Auth/auth.api';
import { useMyTransactionsQuery } from '@/redux/Transaction/transaction.api';

const UserProfile: React.FC = () => {
  const { data, isLoading, isError } = useUserInfoQuery(undefined);
  const {data : transactions} = useMyTransactionsQuery(undefined)
  const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();
  
  const [user, setUser] = useState<IUser | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState<IUser | null>(null);
  
  useEffect(() => {
    if (data?.data) {
      setUser(data.data);
      setEditedUser(data.data);
    }
  }, [data]);

  // Handle loading and error states
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (isError || !user) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center py-8">
          <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-foreground mb-2">Error Loading Profile</h2>
          <p className="text-muted-foreground">Unable to load your profile information. Please try again.</p>
        </div>
      </div>
    );
  }


  const handleEdit = () => {
    setIsEditing(true);
    setEditedUser({ ...user });
  };

  const handleSave = async () => {
    if (!editedUser) return;
    
    // Basic validation
    if (!editedUser.name?.trim()) {
      toast.error("Name is required");
      return;
    }
    
    try {
      // Only send the fields that can be updated
      const updateData = {
        name: editedUser.name.trim(),
        phone: editedUser.phone?.trim() || '',
        address: editedUser.address?.trim() || '',
      };

      console.log('Updating user with data:', updateData);
      const result = await updateUser(updateData).unwrap();
      
      if (result.success) {
        // Update local state with the returned data
        setUser(result.data);
        setEditedUser(result.data);
        setIsEditing(false);
        toast.success(result.message || "Profile updated successfully!");
        // The data will be automatically refetched due to invalidatesTags
      }
    } catch (error: unknown) {
      console.error('Error updating profile:', error);
      const apiError = error as { data?: { message?: string } };
      const errorMessage = apiError?.data?.message || "Failed to update profile. Please try again.";
      toast.error(errorMessage);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedUser({ ...user });
  };

  const handleInputChange = (field: keyof IUser, value: string) => {
    if (!editedUser) return;
    
    setEditedUser(prev => {
      if (!prev) return null;
      return {
        ...prev,
        [field]: value
      };
    });
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
        {user?.role == "USER" ? <h1 className="text-3xl font-bold">User Profile</h1> : <h1 className="text-3xl font-bold">Agent Profile</h1>}

        
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
                <div className="text-2xl font-bold text-primary">{transactions?.meta?.total}</div>
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
                  <Button onClick={handleSave} size="sm" disabled={isUpdating}>
                    {isUpdating ? (
                      <>
                        <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white mr-2"></div>
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4 mr-2" />
                        Save
                      </>
                    )}
                  </Button>
                  <Button onClick={handleCancel} variant="outline" size="sm" disabled={isUpdating}>
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
                        value={editedUser?.name || ''}
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
                        value={editedUser?.phone || ''}
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
                        value={editedUser?.address || ''}
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
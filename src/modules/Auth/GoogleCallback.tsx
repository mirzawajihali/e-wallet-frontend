import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';
import { tokenStorage } from '@/axios/axios';
import { Loader2 } from 'lucide-react';

const GoogleCallback: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Log the full URL for debugging
        console.log('🌐 Full callback URL:', window.location.href);
        
        // Get parameters from URL that your googleCallbackController sends
        const accessToken = searchParams.get('accessToken');
        const refreshToken = searchParams.get('refreshToken');
        const userRole = searchParams.get('role');
        const userName = searchParams.get('name');
        const error = searchParams.get('error');

        console.log('🔍 Google callback params:', {
          accessToken: accessToken ? `received (${accessToken.substring(0, 20)}...)` : 'missing',
          refreshToken: refreshToken ? `received (${refreshToken.substring(0, 20)}...)` : 'missing',
          userRole,
          userName,
          error,
          allParams: Object.fromEntries(searchParams.entries())
        });

        if (error) {
          console.error('❌ Google OAuth error:', error);
          toast.error(`Google login failed: ${error}`);
          navigate('/login', { replace: true });
          return;
        }

        if (accessToken && refreshToken) {
          // Store tokens using your existing token storage method
          tokenStorage.setAccessToken(accessToken);
          tokenStorage.setRefreshToken(refreshToken);
          
          console.log('🔑 Google OAuth tokens stored successfully');
          console.log('💾 Stored in localStorage:', {
            accessToken: localStorage.getItem('accessToken') ? 'stored' : 'failed',
            refreshToken: localStorage.getItem('refreshToken') ? 'stored' : 'failed'
          });
          
          toast.success(`Welcome ${userName ? decodeURIComponent(userName) : 'back'}!`);
          
          // Navigate based on user role (same logic as your regular login)
          const targetRoute = userRole === 'ADMIN' ? '/admin' 
                           : userRole === 'AGENT' ? '/agent' 
                           : '/user';
          
          console.log('🚀 Google OAuth navigating to:', targetRoute);
          
          // Add a small delay to ensure tokens are properly stored
          setTimeout(() => {
            console.log('⏰ Executing navigation to:', targetRoute);
            navigate(targetRoute, { replace: true });
          }, 100);
        } else {
          console.error('❌ Missing tokens in Google callback');
          console.error('❌ Received params:', Object.fromEntries(searchParams.entries()));
          toast.error('Authentication tokens not received');
          navigate('/login', { replace: true });
        }
      } catch (error) {
        console.error('❌ Google callback error:', error);
        toast.error('An error occurred during authentication');
        navigate('/login', { replace: true });
      }
    };

    handleCallback();
  }, [navigate, searchParams]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
        <h2 className="text-xl font-semibold mb-2">Completing Google Login...</h2>
        <p className="text-muted-foreground">Please wait while we sign you in securely.</p>
      </div>
    </div>
  );
};

export default GoogleCallback;
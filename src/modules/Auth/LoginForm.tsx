


import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useLoginMutation } from "@/redux/Auth/auth.api";
import { tokenStorage } from "@/axios/axios";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";

import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

export function LoginForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>){
  const navigate = useNavigate();
  const form = useForm();
  const [login] = useLoginMutation();


  const onSubmit : SubmitHandler<FieldValues> = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    
    console.log('🔄 Attempting login with:', { email: userInfo.email });
    
    try {
      const res = await login(userInfo).unwrap();
      console.log('✅ Login response:', res);
      console.log('📊 Response data:', res.data);
      
      if(res.success){
        // Store tokens from the response
        if (res.data?.accessToken) {
          tokenStorage.setAccessToken(res.data.accessToken);
          console.log('🔑 Access token stored');
        }
        if (res.data?.refreshToken) {
          tokenStorage.setRefreshToken(res.data?.refreshToken);
          console.log('🔑 Refresh token stored');
        }
        
        toast.success("Login Successful");
        
        // Navigate immediately since tokens are now stored
        const targetRoute = res.data?.user?.role === 'ADMIN' ? '/admin' 
                         : res.data?.user?.role === 'AGENT' ? '/agent' 
                         : '/user';
        
        console.log('🚀 Navigating to:', targetRoute);
        navigate(targetRoute);
      } else {
        toast.error(res.message || "Login failed");
      }
    } catch (err: unknown) {
      console.error('❌ Login error:', err);
      
      const apiError = err as { status?: number; data?: { message?: string } };
      
      if (apiError.status === 404) {
        toast.error("Login endpoint not found. Please check the API URL.");
      } else if (apiError.status === 401) {
        toast.error("Invalid email or password");
      } else if (apiError.data?.message) {
        toast.error(apiError.data.message);
      } else {
        toast.error("Login failed. Please try again.");
      }
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Welcome back</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Sign in to your ZenoPay account to continue
        </p>
      </div>
      <div className="grid gap-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      type="email"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-end">
              <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                Forgot password?
              </Link>
            </div>

            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </form>
        </Form>

        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>

        <Button
          type="button"
          variant="outline"
          className="w-full cursor-pointer"
        >
          <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link to="/register" replace className="text-primary hover:underline font-medium">
          Sign up
        </Link>
      </div>
    </div>
  );
}
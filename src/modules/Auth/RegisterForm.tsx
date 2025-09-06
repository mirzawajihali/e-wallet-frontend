import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// import { useRegisterMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";
import { useRegisterMutation } from "@/redux/Auth/auth.api";
import { tokenStorage } from "@/axios/axios";
import config from "@/config/config";

const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, {
        message: "Name is too short",
      })
      .max(50),
    email: z.email(),
    role: z.enum(["USER", "AGENT"], {
      message: "Please select a role",
    }),
    password: z.string().min(8, { message: "Password is too short" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Confirm Password is too short" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });



export function RegisterForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [register] = useRegisterMutation();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "USER", // Default to USER role
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    const userInfo  = {
      name: data.name,
      email: data.email,
      role: data.role,
      password: data.password,
    };

    try {
      // Clear any existing auth data before registration
      tokenStorage.clearTokens();
      
      const result = await register(userInfo).unwrap();
      
      // Store new tokens from the response
      if (result.data?.accessToken) {
        tokenStorage.setAccessToken(result.data.accessToken);
      }
      if (result.data?.refreshToken) {
        tokenStorage.setRefreshToken(result.data.refreshToken);
      }
      
      toast.success("User created successfully and logged in");
      
      // Navigate based on the NEW user's role from the response
      const targetRoute = result.data?.user?.role === 'ADMIN' ? '/admin' 
                       : result.data?.user?.role === 'AGENT' ? '/agent' 
                       : '/user';
      
      // Add a small delay to ensure tokens are properly stored and state is updated
      setTimeout(() => {
        navigate(targetRoute, { replace: true });
      }, 100);
    } catch (error: unknown) {
      // Clear any tokens on registration failure
      tokenStorage.clearTokens();
      
      // Enhanced error handling
      const apiError = error as { status?: number; data?: { message?: string; errorSources?: Array<{ message?: string }> } };
      
      if (apiError.status === 400 && apiError.data?.message) {
        toast.error(apiError.data.message || "Registration failed");
      } else if (apiError.data?.errorSources?.length && apiError.data.errorSources.length > 0) {
        const errorMessage = apiError.data.errorSources[0]?.message || "Validation error";
        toast.error(errorMessage);
      } else {
        toast.error("Registration failed. Please try again.");
      }
    }
  };


  const handleGoogleSignup = () => {
    // Get current page to redirect back after signup
    const currentPath = window.location.pathname;
    const backendUrl = config.baseUrl;
    
    // Redirect to your existing Passport.js Google OAuth route
    window.location.href = `${backendUrl}/auth/google?redirect=${encodeURIComponent(currentPath)}`;
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Create your account</h1>
        <p className="text-sm text-muted-foreground">
          Join thousands of users who trust ZenoPay
        </p>
      </div>

      <div className="grid gap-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="john.doe@example.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="sr-only">
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Account Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your account type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="USER">User - Send/receive money</SelectItem>
                      <SelectItem value="AGENT">Agent - Provide cash-in/cash-out services</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Choose USER for personal use or AGENT to provide financial services.
                  </FormDescription>
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
                      placeholder="Create a strong password"
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
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Confirm your password"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Create account
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
           onClick={handleGoogleSignup}
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
        Already have an account?{" "}
        <Link to="/login" className="text-primary hover:underline font-medium">
          Sign in
        </Link>
      </div>
    </div>
  );
}
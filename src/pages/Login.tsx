
import { LoginForm } from "@/modules/Auth/LoginForm";
import DemoAccounts from "@/modules/Normal/DemoAccounts";
import { Link } from "react-router";

export default function Login() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      {/* Left side - Form */}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        {/* Header */}
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">Z</span>
            </div>
            ZenoPay
          </Link>
        </div>
        
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm">
            <LoginForm />
          </div>
        </div>
      </div>

      {/* Right side - Decorative */}
      <div className="relative hidden bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20 lg:flex lg:items-center lg:justify-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Floating Elements */}
        <div className="relative z-10 text-center space-y-6 p-8">
          <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">₿</span>
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-primary">Welcome Back!</h2>
          <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
            Access your digital wallet and manage your transactions securely with ZenoPay's 
            trusted platform.
          </p>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 gap-4 mt-8 max-w-sm mx-auto">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Secure & Fast Transactions
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              24/7 Account Monitoring
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Multi-Currency Support
            </div>
          </div>
          
          {/* Demo accounts */}
          <DemoAccounts />
        </div>
        
        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/10 rounded-full"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-secondary/15 rounded-full"></div>
      </div>
    </div>
  );
}
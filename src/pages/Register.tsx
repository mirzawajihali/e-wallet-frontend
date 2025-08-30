
import { Link } from "react-router";
import { RegisterForm } from "@/modules/Auth/RegisterForm";

export default function Register() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      {/* Left side - Decorative */}
      <div className="relative hidden bg-gradient-to-bl from-accent/20 via-primary/10 to-secondary/30 lg:flex lg:items-center lg:justify-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full"></div>
          <div className="absolute top-1/3 -right-20 w-60 h-60 bg-accent/10 rounded-full"></div>
          <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-secondary/15 rounded-full"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center space-y-6 p-8">
          <div className="w-28 h-28 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mx-auto flex items-center justify-center mb-8 transform rotate-12">
            <div className="w-20 h-20 bg-primary/30 rounded-xl flex items-center justify-center -rotate-12">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">💰</span>
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-primary">Join ZenoPay Today</h2>
          <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
            Create your account and start experiencing the future of digital payments 
            with our secure and intuitive platform.
          </p>
          
          {/* Benefits */}
          <div className="grid grid-cols-1 gap-4 mt-8 max-w-sm mx-auto">
            <div className="flex items-center gap-3 text-sm">
              <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary text-xs">✓</span>
              </div>
              <span className="text-muted-foreground">Free account setup</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary text-xs">✓</span>
              </div>
              <span className="text-muted-foreground">Instant money transfers</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary text-xs">✓</span>
              </div>
              <span className="text-muted-foreground">Bank-level security</span>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mt-8 max-w-xs mx-auto">
            <div className="text-center p-3 bg-background/50 rounded-lg backdrop-blur-sm">
              <div className="text-lg font-bold text-primary">50K+</div>
              <div className="text-xs text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center p-3 bg-background/50 rounded-lg backdrop-blur-sm">
              <div className="text-lg font-bold text-primary">99.9%</div>
              <div className="text-xs text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side - Form */}
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
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export default function Hero() {
  return (
    <section className="relative bg-background text-foreground min-h-[90vh] flex items-center">
      <div className="container mx-auto px-6 py-24 flex flex-col items-center text-center">
        
        {/* Badge */}
        <span className="px-4 py-2 mb-6 text-sm font-medium rounded-full bg-accent/20 text-accent-foreground border">
          🚀 Trusted by 50,000+ users worldwide
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-4xl leading-tight">
          The Future of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Digital Payments
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg md:text-xl max-w-3xl text-muted-foreground leading-relaxed">
          Experience seamless, secure, and instant money transfers with ZenoPay. 
          Your digital wallet for the modern world - built for everyone, everywhere.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:opacity-90 text-lg px-8 py-3 h-auto">
            <Link to="/register">
              Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-border text-foreground hover:bg-muted text-lg px-8 py-3 h-auto">
            <Link to="/features">
              Explore Features
            </Link>
          </Button>
        </div>

        {/* Test Credentials Quick Access */}
        <div className="mt-8 p-4 bg-card/50 backdrop-blur-sm rounded-xl border max-w-md">
          <h3 className="text-sm font-semibold mb-3 flex items-center justify-center gap-2">
            <span className="text-primary">🎮</span>
            Try Demo Accounts
          </h3>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="text-center p-2 bg-red-50 dark:bg-red-950/20 rounded border">
              <div className="text-red-600 mb-1">🛡️</div>
              <div className="font-medium text-red-600">Admin</div>
              <div className="text-muted-foreground text-[10px]">main@gmail.com</div>
            </div>
            <div className="text-center p-2 bg-blue-50 dark:bg-blue-950/20 rounded border">
              <div className="text-blue-600 mb-1">🏪</div>
              <div className="font-medium text-blue-600">Agent</div>
              <div className="text-muted-foreground text-[10px]">agent@gmail.com</div>
            </div>
            <div className="text-center p-2 bg-green-50 dark:bg-green-950/20 rounded border">
              <div className="text-green-600 mb-1">👤</div>
              <div className="font-medium text-green-600">User</div>
              <div className="text-muted-foreground text-[10px]">user@gmail.com</div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Full credentials available on login page
          </p>
        </div>

        {/* Features Preview */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
          <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Bank-Level Security</h3>
            <p className="text-muted-foreground text-center text-sm">
              Advanced encryption and multi-factor authentication
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Instant Transfers</h3>
            <p className="text-muted-foreground text-center text-sm">
              Send and receive money in seconds, 24/7 worldwide
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Low Fees</h3>
            <p className="text-muted-foreground text-center text-sm">
              Transparent pricing with no hidden charges
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Blur Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}

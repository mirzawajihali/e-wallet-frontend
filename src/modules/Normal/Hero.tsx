import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-background text-foreground">
      <div className="container mx-auto px-6 py-24 flex flex-col items-center text-center">
        
        {/* Badge */}
        <span className="px-4 py-1 mb-6 text-sm font-medium rounded-full bg-accent text-accent-foreground">
          Welcome to ZenoPay 🚀
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
          The Smarter Way to{" "}
          <span className="text-primary">Pay</span> & Manage Your Money
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg md:text-xl max-w-2xl text-muted-foreground">
          Secure. Fast. Reliable. With ZenoPay, enjoy effortless payments, transfers, 
          and wallet management — all in one place.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-primary text-primary-foreground hover:opacity-90">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted">
            Learn More
          </Button>
        </div>
      </div>

      {/* Decorative Blur Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}

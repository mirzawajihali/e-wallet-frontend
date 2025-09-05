import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Check, 
  Star,
  Users,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router';

const HomeStats = () => {
  const stats = [
    { value: '50,000+', label: 'Active Users', icon: Users },
    { value: '₹1M+', label: 'Transactions Daily', icon: ArrowRight },
    { value: '99.9%', label: 'Uptime', icon: Star },
    { value: '24/7', label: 'Support Available', icon: Sparkles }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Small Business Owner',
      content: 'ZenoPay has revolutionized how I handle payments. Lightning fast and super secure!',
      rating: 5
    },
    {
      name: 'Ahmed Rahman',
      role: 'Freelancer',
      content: 'Best digital wallet I\'ve ever used. The interface is so intuitive and clean.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      role: 'Student',
      content: 'Love how easy it is to send money to my family. No complicated steps, just works!',
      rating: 5
    }
  ];

  const benefits = [
    'Instant money transfers worldwide',
    'Bank-level security and encryption',
    'Low transaction fees',
    'Multiple payment methods',
    '24/7 customer support',
    'Mobile and web access'
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto bg-background">
      <div className="container mx-auto px-6">
        {/* Stats Section */}
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            Trusted by thousands
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Numbers That Speak for Themselves
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Join thousands of satisfied users who trust ZenoPay for their digital payment needs.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits + CTA Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Everything You Need in One App
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              ZenoPay isn't just another payment app. It's a complete financial ecosystem 
              designed to simplify your money management and give you complete control over your finances.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground">
                <Link to="/register">
                  Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/features">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <Card className="border bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Quick Setup</h4>
                      <p className="text-sm text-muted-foreground">Get started in under 5 minutes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Premium Experience</h4>
                      <p className="text-sm text-muted-foreground">Enjoy features others charge for</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                      <Check className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Proven & Secure</h4>
                      <p className="text-sm text-muted-foreground">Trusted by 50,000+ users</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">What Our Users Say</h3>
          <p className="text-muted-foreground mb-12">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeStats;

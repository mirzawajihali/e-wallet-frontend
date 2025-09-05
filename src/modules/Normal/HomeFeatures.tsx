import { Card, CardContent } from '@/components/ui/card';
import { 
  Shield, 
  Zap, 
  DollarSign, 
  Smartphone, 
  Users, 
  TrendingUp,
  Clock,
  Globe
} from 'lucide-react';

const HomeFeatures = () => {
  const features = [
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: 'Advanced encryption, multi-factor authentication, and fraud detection keep your money safe.',
      color: 'text-green-600'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Send and receive money instantly, 24/7. No waiting, no delays, just instant transfers.',
      color: 'text-yellow-600'
    },
    {
      icon: DollarSign,
      title: 'Low Fees',
      description: 'Transparent pricing with minimal fees. More money stays in your pocket.',
      color: 'text-primary'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Beautiful, intuitive mobile app designed for modern users on the go.',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Multi-User Support',
      description: 'Individual users, agents, and businesses - all on one platform.',
      color: 'text-purple-600'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Send money anywhere in the world with competitive exchange rates.',
      color: 'text-indigo-600'
    },
    {
      icon: TrendingUp,
      title: 'Analytics Dashboard',
      description: 'Track your spending, income, and financial goals with detailed insights.',
      color: 'text-emerald-600'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to help you whenever you need it.',
      color: 'text-orange-600'
    }
  ];

  return (
    <section className="py-20  bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose ZenoPay?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the future of digital payments with features designed for security, 
            speed, and simplicity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="border hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-background rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;

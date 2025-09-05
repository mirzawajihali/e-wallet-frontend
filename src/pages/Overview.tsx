
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Users, 
  UserCheck, 
  Crown,
  Wallet,
  ArrowLeftRight,
  Plus,
  Minus,
  BarChart3,
  Lock,
  Eye,
  Settings,
  Code,
  Database,
  Server,
  Smartphone,
  Zap,
  Globe,
  ExternalLink,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router';

const Overview = () => {
  const userRoles = [
    {
      icon: Users,
      title: 'User',
      color: 'bg-blue-500/10 text-blue-600',
      description: 'Individual users for personal financial management',
      features: [
        'Create and manage personal wallet',
        'Add money to wallet securely',
        'Withdraw funds to bank account',
        'Send money to other users instantly',
        'View transaction history and analytics',
        'Update profile and security settings',
        'Real-time balance tracking'
       
      ]
    },
    {
      icon: UserCheck,
      title: 'Agent',
      color: 'bg-green-500/10 text-green-600',
      description: 'Service providers offering cash-in/cash-out services',
      features: [
        'All user features included',
        'Provide cash-in services to users',
        'Offer cash-out services to users',
        'Agent dashboard',
        'Transaction history for agent services',
        'Service area management'
      ]
    },
    {
      icon: Crown,
      title: 'Admin',
      color: 'bg-purple-500/10 text-purple-600',
      description: 'Platform administrators with full system control',
      features: [
        'Comprehensive analytics dashboard',
        'User management and role promotion',
        'Wallet management and monitoring',
        'Block/unblock user wallets',
        'Transaction oversight and statistics',
        'Agent performance tracking',
        
      ]
    }
  ];

  const coreFeatures = [
    {
      icon: Wallet,
      title: 'Digital Wallet Management',
      description: 'Secure digital wallets with real-time balance tracking and transaction history.'
    },
    {
      icon: ArrowLeftRight,
      title: 'Instant Money Transfers',
      description: 'Send and receive money instantly between users with real-time notifications.'
    },
    {
      icon: Plus,
      title: 'Add Money',
      description: 'Top up your wallet securely using multiple payment methods and bank transfers.'
    },
    {
      icon: Minus,
      title: 'Withdraw Funds',
      description: 'Withdraw money from your wallet to your bank account with secure processing.'
    },
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: 'Advanced encryption, JWT authentication, and secure transaction processing.'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Detailed transaction analytics, spending patterns, and financial insights.'
    },
    {
      icon: Lock,
      title: 'Wallet Controls',
      description: 'Admin controls for blocking/unblocking wallets and transaction oversight.'
    },
    {
      icon: Eye,
      title: 'Real-time Monitoring',
      description: 'Live transaction monitoring, user activity tracking, and system health metrics.'
    }
  ];

  const frontendTech = [
    { name: 'React', description: 'Modern UI library for building interactive user interfaces' },
    { name: 'TypeScript', description: 'Type-safe JavaScript for better development experience' },
    { name: 'Vite', description: 'Fast build tool and development server' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS framework for styling' },
    { name: 'Shadcn/ui', description: 'Beautiful and accessible React component library' },
    { name: 'React Router', description: 'Client-side routing for single-page application' },
    { name: 'RTK Query', description: 'Powerful data fetching and caching solution' },
    { name: 'React Hook Form', description: 'Performant forms with easy validation' },
    { name: 'Zod', description: 'TypeScript-first schema validation library' },
    { name: 'Lucide React', description: 'Beautiful and customizable icon library' }
  ];

  const backendTech = [
    { name: 'Node.js', description: 'JavaScript runtime for server-side development' },
    { name: 'Express.js', description: 'Fast and minimalist web framework' },
    { name: 'TypeScript', description: 'Type-safe server-side development' },
    { name: 'MongoDB', description: 'NoSQL database for flexible data storage' },
    { name: 'Mongoose', description: 'Object modeling library for MongoDB' },
    { name: 'JWT', description: 'Secure authentication and authorization' },
    { name: 'Passport.js', description: 'Authentication middleware with Google OAuth' },
    { name: 'bcryptjs', description: 'Password hashing for security' },
    { name: 'Zod', description: 'Runtime type validation and error handling' },
    { name: 'CORS', description: 'Cross-origin resource sharing configuration' }
  ];

  const keyHighlights = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'JWT authentication, password hashing, role-based access control'
    },
    {
      icon: Zap,
      title: 'Real-time Operations',
      description: 'Instant transactions, live balance updates, real-time notifications'
    },
    {
      icon: Globe,
      title: 'Scalable Architecture',
      description: 'Modular design, efficient database queries, optimized performance'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first approach, dark/light theme, accessible components'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Portfolio Project
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ZenoPay Platform Overview
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              A comprehensive digital wallet solution showcasing modern web development 
              with React, TypeScript, Node.js, and MongoDB. Built with security, 
              scalability, and user experience in mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground">
                <Link to="/register">
                  Try Live Demo <ExternalLink className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://github.com/mirzawajihali" target="_blank" rel="noopener noreferrer">
                  View on GitHub <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Project Highlights</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Key technical achievements and features that demonstrate modern web development practices
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <Card key={index} className="border text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3">{highlight.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* User Roles */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">User Role System</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Three distinct user roles with specific permissions and capabilities, 
              demonstrating role-based access control implementation
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {userRoles.map((role, index) => {
              const IconComponent = role.icon;
              return (
                <Card key={index} className="border hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center ${role.color}`}>
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{role.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">{role.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {role.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Core Features</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Essential functionality that powers the digital wallet ecosystem
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="border hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-accent" />
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

      {/* Tech Stack */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Technology Stack</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Modern technologies and frameworks used to build a scalable, 
              secure, and performant digital wallet platform
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Frontend */}
            <Card className="border">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/10 rounded-2xl flex items-center justify-center">
                  <Code className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Frontend Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {frontendTech.map((tech, index) => (
                    <div key={index} className="flex justify-between items-start">
                      <div className="flex-1">
                        <Badge variant="secondary" className="mb-2">{tech.name}</Badge>
                        <p className="text-sm text-muted-foreground">{tech.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Backend */}
            <Card className="border">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-500/10 rounded-2xl flex items-center justify-center">
                  <Server className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Backend Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {backendTech.map((tech, index) => (
                    <div key={index} className="flex justify-between items-start">
                      <div className="flex-1">
                        <Badge variant="secondary" className="mb-2">{tech.name}</Badge>
                        <p className="text-sm text-muted-foreground">{tech.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Architecture & Implementation */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Architecture & Implementation</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Technical implementation details showcasing modern web development practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-primary" />
                  Database Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• MongoDB with Mongoose ODM</li>
                  <li>• User, Wallet, Transaction collections</li>
                  <li>• Proper indexing and relationships</li>
                  <li>• Data validation and constraints</li>
                  <li>• Efficient query optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Security Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• JWT-based authentication</li>
                  <li>• Password hashing with bcrypt</li>
                  <li>• Role-based access control</li>
                  <li>• Input validation and sanitization</li>
                  <li>• CORS and security headers</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-primary" />
                  Development Practices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• TypeScript for type safety</li>
                  <li>• Modular component architecture</li>
                  <li>• Custom hooks and utilities</li>
                  <li>• Error boundaries and handling</li>
                  <li>• Responsive design patterns</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience ZenoPay in Action
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore the live application and see all these features working together 
            in a real-world digital wallet implementation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground">
              <Link to="/register">
                Try Live Demo <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
            </Button>
             
          </div>
        </div>  
      </section>
    </div>
  );
};

export default Overview;

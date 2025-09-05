
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Github, 
  Linkedin, 
  Facebook, 
  Mail, 
  MapPin, 
  Code, 
  Coffee,
  ExternalLink,
  Heart
} from 'lucide-react';

const Developer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/mirzawajihali',
      color: 'hover:bg-muted',
      description: 'Check out my repositories'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/mirzawajihali',
      color: 'hover:bg-primary/10 hover:text-primary',
      description: 'Connect with me professionally'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/mirzawajihali',
      color: 'hover:bg-accent/10 hover:text-accent',
      description: 'Follow me on Facebook'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:mirzawajihali@gmail.com',
      color: 'hover:bg-destructive/10 hover:text-destructive',
      description: 'Send me an email'
    }
  ];

  const skills = [
    'React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 
    'Next.js', 'Tailwind CSS', 'PostgreSQL', 'Redis', 'Docker'
  ];

  const stats = [
    { label: 'Projects Completed', value: '50+' },
    { label: 'Years of Experience', value: '3+' },
    { label: 'Technologies Mastered', value: '20+' },
    { label: 'Coffee Consumed', value: '∞' }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet the Developer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate full-stack developer crafting innovative solutions and beautiful user experiences
          </p>
        </div>

        {/* Main Profile Card */}
        <Card className="mb-12 border shadow-lg">
          <CardContent className="p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-border shadow-xl">
                  <img 
                    src="/Images/engineer.jpg" 
                    alt="Mirza Wajih Ali - Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-3 rounded-full shadow-lg">
                  <Code className="w-6 h-6" />
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-3xl font-bold mb-2">
                  Mirza Wajih Ali
                </h3>
                <p className="text-xl text-primary font-semibold mb-4">
                  Full-Stack Developer & E-Wallet Architect
                </p>
                
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Dhaka, Bangladesh</span>
                </div>

                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Welcome to ZenoPay! I'm the developer behind this comprehensive e-wallet solution. 
                  With expertise in modern web technologies, I specialize in creating secure, 
                  scalable financial applications that deliver exceptional user experiences.
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-accent/20 text-accent-foreground hover:bg-accent/30"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="border hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Links */}
        <Card className="mb-12 border shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Let's Connect!
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <Button
                    key={link.name}
                    variant="outline"
                    className={`h-auto p-4 justify-start gap-4 transition-all duration-300 ${link.color}`}
                    onClick={() => window.open(link.url, '_blank')}
                  >
                    <IconComponent className="w-6 h-6" />
                    <div className="text-left">
                      <div className="font-semibold">{link.name}</div>
                      <div className="text-sm text-muted-foreground">{link.description}</div>
                    </div>
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* About ZenoPay Section */}
        <Card className="border bg-gradient-to-br from-primary/10 to-accent/10">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-6">About ZenoPay</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
              ZenoPay is a comprehensive digital wallet solution built with modern technologies 
              including React, TypeScript, Node.js, and MongoDB. It features secure authentication, 
              real-time transactions, role-based access control, and a beautiful, responsive interface.
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-destructive fill-current" />
              <span>and</span>
              <Coffee className="w-4 h-4" />
              <span>by Mirza Wajih Ali</span>
            </div>
          </CardContent>
        </Card>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>
      </div>
    </section>
  );
};

export default Developer;
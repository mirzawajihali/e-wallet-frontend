import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Globe, Zap, UserCheck } from "lucide-react";

const TeamDetails = () => {
  const teamMembers = [
    {
      name: "Mirza Wajih Ali",
      role: "CEO & Co-Founder",
      bio: "Former fintech executive with 15+ years in digital payments and blockchain technology.",
      initials: "MR",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Fatima Khan",
      role: "CTO & Co-Founder",
      bio: "Ex-Google engineer specializing in secure payment systems and scalable infrastructure.",
      initials: "FK",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Shahriar Hossain",
      role: "Head of Security",
      bio: "Cybersecurity expert with deep experience in financial services and data protection.",
      initials: "SH",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Tasnim Ahmed",
      role: "Head of Product",
      bio: "UX strategist focused on making complex financial products simple and accessible.",
      initials: "TA",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Nafisa Islam",
      role: "Head of Engineering",
      bio: "Full-stack architect with expertise in building high-performance financial platforms.",
      initials: "NI",
      color: "from-indigo-500 to-blue-500",
    },
    {
      name: "Rahim Ali",
      role: "Head of Operations",
      bio: "Operations specialist ensuring seamless user experience and regulatory compliance.",
      initials: "RA",
      color: "from-amber-500 to-yellow-500",
    },
  ];

  const stats = [
    { icon: Users, value: "50K+", label: "Active Users" },
    { icon: UserCheck, value: "25+", label: "Team Members" },
    { icon: Globe, value: "100+", label: "Countries Served" },
    { icon: Zap, value: "99.9%", label: "Uptime" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The passionate innovators behind ZenoPay, dedicated to revolutionizing 
              digital payments and financial accessibility across Bangladesh and beyond.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-center">
                    {/* Avatar with Gradient */}
                    <div className={`w-24 h-24 bg-gradient-to-r ${member.color} rounded-full mx-auto mb-5 flex items-center justify-center shadow-lg`}>
                      <span className="text-2xl font-bold text-white">{member.initials}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-1.5">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                    
                    {/* Social Links */}
                    <div className="flex justify-center space-x-3 mt-5 pt-4 border-t border-border">
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center cursor-pointer hover:bg-primary/10 transition-colors">
                        <span className="text-xs font-medium text-muted-foreground">in</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center cursor-pointer hover:bg-primary/10 transition-colors">
                        <span className="text-xs font-medium text-muted-foreground">tw</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center cursor-pointer hover:bg-primary/10 transition-colors">
                        <span className="text-xs font-medium text-muted-foreground">ig</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Company Stats */}
          <Card className="border-0 shadow-lg mb-16 bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold mb-2">We're Growing Fast</h3>
                <p className="text-muted-foreground">Join our mission to transform digital payments across Bangladesh</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center p-4 rounded-lg bg-background/50 backdrop-blur-sm">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Join Us CTA */}
          <div className="text-center">
            <Card className="border-0 bg-gradient-to-r from-primary to-accent">
              <CardContent className="p-10">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  Want to Join Our Team?
                </h3>
                <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
                  We're always looking for talented Bangladeshi professionals who share our vision
                  for financial innovation and inclusion.
                </p>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-background text-foreground hover:bg-background/90"
                >
                  View Open Positions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDetails;
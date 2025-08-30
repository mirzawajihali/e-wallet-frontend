const TeamDetails = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "CEO & Co-Founder",
      bio: "Former fintech executive with 15+ years in digital payments and blockchain technology.",
      image: "AC",
    },
    {
      name: "Sarah Johnson",
      role: "CTO & Co-Founder",
      bio: "Ex-Google engineer specializing in secure payment systems and scalable infrastructure.",
      image: "SJ",
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Security",
      bio: "Cybersecurity expert with deep experience in financial services and data protection.",
      image: "MR",
    },
    {
      name: "Emily Zhang",
      role: "Head of Product",
      bio: "UX strategist focused on making complex financial products simple and accessible.",
      image: "EZ",
    },
    {
      name: "David Kim",
      role: "Head of Engineering",
      bio: "Full-stack architect with expertise in building high-performance financial platforms.",
      image: "DK",
    },
    {
      name: "Lisa Park",
      role: "Head of Operations",
      bio: "Operations specialist ensuring seamless user experience and regulatory compliance.",
      image: "LP",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The passionate innovators behind ZenoPay, dedicated to revolutionizing 
              digital payments and financial accessibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{member.image}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Company Stats */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">We're Growing Fast</h3>
              <p className="text-muted-foreground">Join our mission to transform digital payments</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>

          {/* Join Us CTA */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-4">Want to Join Our Team?</h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for talented individuals who share our vision
            </p>
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDetails;

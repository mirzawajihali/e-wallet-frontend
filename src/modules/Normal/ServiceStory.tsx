const ServiceStory = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Founded in 2020, ZenoPay emerged from a simple vision: to make digital payments 
            as natural as having a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">The Beginning</h3>
              <p className="text-muted-foreground leading-relaxed">
                It all started when our founders, frustrated with the complexity of traditional 
                banking and payment systems, decided to create something better. They envisioned 
                a world where sending money would be as simple as sending a message.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">The Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                Through countless hours of research, development, and user feedback, we've built 
                a platform that prioritizes security, simplicity, and accessibility. Today, 
                ZenoPay serves thousands of users across the globe.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">The Future</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're constantly innovating, adding new features, and expanding our reach. 
                Our goal is to become the world's most trusted digital wallet, empowering 
                financial freedom for everyone.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-3xl font-bold text-primary mb-2">50,000+</h4>
                <p className="text-muted-foreground">Active Users</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent/30 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceStory;

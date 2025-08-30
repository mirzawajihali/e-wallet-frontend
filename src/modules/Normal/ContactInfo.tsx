const ContactInfo = () => {
  const offices = [
    {
      city: "San Francisco",
      address: "123 Tech Street, Suite 456",
      country: "United States",
      phone: "+1 (555) 123-4567",
      timezone: "PST (UTC-8)"
    },
    {
      city: "London",
      address: "456 Financial Ave, Floor 12",
      country: "United Kingdom", 
      phone: "+44 20 7123 4567",
      timezone: "GMT (UTC+0)"
    },
    {
      city: "Singapore",
      address: "789 Business Blvd, Tower A",
      country: "Singapore",
      phone: "+65 6123 4567",
      timezone: "SGT (UTC+8)"
    }
  ];

  return (
    <section className="py-20 bg-accent/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Global Presence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With offices around the world, we're here to serve you no matter where you are.
            </p>
          </div>

          {/* Office Locations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {offices.map((office, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 border">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{office.city}</h3>
                  <p className="text-muted-foreground text-sm">{office.country}</p>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-muted-foreground mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{office.timezone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Business Hours */}
          <div className="bg-card rounded-2xl p-8 border">
            <h3 className="text-2xl font-bold text-center mb-8">Business Hours</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <h4 className="font-semibold mb-2">Customer Support</h4>
                <p className="text-muted-foreground text-sm">24/7 Live Chat</p>
                <p className="text-muted-foreground text-sm">Always Available</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Phone Support</h4>
                <p className="text-muted-foreground text-sm">Mon-Fri: 9AM-6PM</p>
                <p className="text-muted-foreground text-sm">Local Time</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Business Sales</h4>
                <p className="text-muted-foreground text-sm">Mon-Fri: 8AM-8PM</p>
                <p className="text-muted-foreground text-sm">By Appointment</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Security Team</h4>
                <p className="text-muted-foreground text-sm">24/7 Monitoring</p>
                <p className="text-muted-foreground text-sm">Immediate Response</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              <a href="#" className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <span className="font-bold">tw</span>
              </a>
              <a href="#" className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <span className="font-bold">li</span>
              </a>
              <a href="#" className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <span className="font-bold">fb</span>
              </a>
              <a href="#" className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <span className="font-bold">ig</span>
              </a>
            </div>
            <p className="text-muted-foreground mt-4 text-sm">
              Stay updated with the latest news, features, and security updates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;

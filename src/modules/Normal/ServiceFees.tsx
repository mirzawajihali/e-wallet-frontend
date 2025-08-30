const ServiceFees = () => {
  const fees = [
    {
      category: "Transfers",
      items: [
        { service: "Domestic Transfer", fee: "Free", description: "Send money within your country" },
        { service: "International Transfer", fee: "1.5%", description: "Cross-border transfers with competitive rates" },
        { service: "Instant Transfer", fee: "$0.99", description: "Priority processing in under 1 minute" },
        { service: "Scheduled Transfer", fee: "Free", description: "Set up recurring or future-dated transfers" }
      ]
    },
    {
      category: "Currency Exchange",
      items: [
        { service: "Real-time Exchange", fee: "0.5%", description: "Market rates updated every second" },
        { service: "Currency Conversion", fee: "0.75%", description: "Automatic conversion for international payments" },
        { service: "Multi-currency Wallet", fee: "Free", description: "Hold up to 50 different currencies" }
      ]
    },
    {
      category: "Account Services",
      items: [
        { service: "Monthly Maintenance", fee: "Free", description: "No monthly fees for any plan" },
        { service: "ATM Withdrawals", fee: "$2.50", description: "Withdraw cash from partner ATMs worldwide" },
        { service: "Card Replacement", fee: "$15", description: "Express delivery of replacement cards" },
        { service: "Account Statements", fee: "Free", description: "Digital statements and reports" }
      ]
    },
    {
      category: "Business Services",
      items: [
        { service: "Bulk Payments", fee: "$0.25", description: "Per transaction for batch processing" },
        { service: "API Usage", fee: "$0.10", description: "Per API call above free tier limit" },
        { service: "Compliance Reporting", fee: "Free", description: "Automated regulatory reporting" },
        { service: "Dedicated Support", fee: "Free", description: "Priority support for business accounts" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-accent/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transparent Fee Structure
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              No hidden charges, no surprise fees. Here's exactly what you pay for each service.
            </p>
          </div>

          {/* Fee Categories */}
          <div className="space-y-8">
            {fees.map((category, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 border">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-start p-4 bg-background rounded-lg border">
                      <div className="flex-1">
                        <h4 className="font-medium mb-1">{item.service}</h4>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                      <div className="ml-4">
                        <span className={`font-bold ${item.fee === 'Free' ? 'text-green-600' : 'text-primary'}`}>
                          {item.fee}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4 text-primary">Fee-Free Promise</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>No monthly maintenance fees</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>No minimum balance requirements</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>No account setup or closure fees</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>No inactivity fees</span>
                </li>
              </ul>
            </div>

            <div className="bg-accent/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Enterprise Solutions</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Need custom pricing for high-volume transactions or specialized requirements?
              </p>
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                Contact Sales Team
              </button>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-sm">
              * All fees are subject to change with 30 days notice. Exchange rates are updated in real-time and may vary. 
              International transfer fees may include correspondent bank charges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFees;

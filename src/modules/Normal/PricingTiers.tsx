import { Button } from "@/components/ui/button";

const PricingTiers = () => {
  const plans = [
    {
      name: "Personal",
      price: "Free",
      description: "Perfect for individuals getting started with digital payments",
      features: [
        "Up to 10 transactions per month",
        "Basic spending insights",
        "Standard customer support",
        "Mobile app access",
        "Basic security features"
      ],
      highlighted: false,
      cta: "Get Started",
      popular: false
    },
    {
      name: "Premium",
      price: "$9.99",
      period: "/month",
      description: "Ideal for active users who need more features and flexibility",
      features: [
        "Unlimited transactions",
        "Advanced analytics & insights",
        "Priority customer support",
        "Multi-currency support",
        "Enhanced security features",
        "Budget tracking & goals",
        "Export financial reports"
      ],
      highlighted: true,
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Business",
      price: "$29.99",
      period: "/month",
      description: "Designed for businesses and teams managing multiple accounts",
      features: [
        "Everything in Premium",
        "Team management dashboard",
        "Bulk transactions",
        "API access",
        "Custom reporting",
        "Dedicated account manager",
        "Advanced compliance tools",
        "White-label options"
      ],
      highlighted: false,
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Simple, Transparent{" "}
              <span className="text-primary">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include our core security 
              features and can be upgraded or downgraded at any time.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 border ${
                  plan.highlighted
                    ? "bg-primary/5 border-primary shadow-lg scale-105"
                    : "bg-card border-border"
                } transition-all duration-300 hover:shadow-lg`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="bg-accent/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-2">Can I change my plan anytime?</h4>
                <p className="text-muted-foreground text-sm">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Is there a free trial?</h4>
                <p className="text-muted-foreground text-sm">
                  Yes, Premium and Business plans come with a 14-day free trial. No credit card required.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">What payment methods do you accept?</h4>
                <p className="text-muted-foreground text-sm">
                  We accept all major credit cards, bank transfers, and digital wallet payments.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Is my data secure?</h4>
                <p className="text-muted-foreground text-sm">
                  Absolutely. We use bank-level encryption and security protocols to protect your data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;

import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How do I create a ZenoPay account?",
          answer: "Creating an account is simple! Click 'Get Started' on our homepage, enter your email and phone number, verify your identity with a government-issued ID, and you're ready to start using ZenoPay. The entire process takes less than 5 minutes."
        },
        {
          question: "Is ZenoPay free to use?",
          answer: "Yes! Our Personal plan is completely free and includes up to 10 transactions per month, basic spending insights, and standard customer support. You can upgrade to Premium or Business plans for additional features."
        },
        {
          question: "What devices can I use ZenoPay on?",
          answer: "ZenoPay is available on iOS and Android mobile apps, as well as through our web platform. You can access your account from any device with an internet connection."
        }
      ]
    },
    {
      category: "Security & Privacy",
      questions: [
        {
          question: "How secure is ZenoPay?",
          answer: "Security is our top priority. We use bank-level 256-bit SSL encryption, multi-factor authentication, biometric login options, and real-time fraud monitoring. Your funds are also protected by FDIC insurance up to $250,000."
        },
        {
          question: "What happens if my account is compromised?",
          answer: "If you notice any suspicious activity, immediately contact our 24/7 security team. We'll freeze your account, investigate the issue, and restore any stolen funds. We also provide identity theft protection and monitoring services."
        },
        {
          question: "Do you share my personal information?",
          answer: "No, we never sell your personal information to third parties. We only share data when required by law or with your explicit consent. You can view and control your privacy settings in your account dashboard."
        }
      ]
    },
    {
      category: "Payments & Transfers",
      questions: [
        {
          question: "How fast are ZenoPay transfers?",
          answer: "Domestic transfers are instant, while international transfers typically take 1-3 business days. For urgent transfers, our Instant Transfer option processes payments in under 1 minute for a small fee."
        },
        {
          question: "What are the transfer limits?",
          answer: "Daily limits vary by account type: Personal accounts can send up to $5,000 per day, Premium accounts up to $25,000, and Business accounts up to $100,000. Limits can be increased by contacting our support team."
        },
        {
          question: "Which countries can I send money to?",
          answer: "ZenoPay supports transfers to over 100 countries worldwide. We're constantly expanding our network to include more destinations. Check our website for the most current list of supported countries."
        },
        {
          question: "What currencies does ZenoPay support?",
          answer: "We support 50+ major currencies including USD, EUR, GBP, JPY, CAD, AUD, and many more. Real-time exchange rates are provided with transparent conversion fees."
        }
      ]
    },
    {
      category: "Fees & Pricing",
      questions: [
        {
          question: "What fees does ZenoPay charge?",
          answer: "Domestic transfers are free, international transfers cost 1.5%, instant transfers are $0.99, and ATM withdrawals are $2.50. There are no monthly fees, minimum balance requirements, or hidden charges."
        },
        {
          question: "How do currency exchange rates work?",
          answer: "We use real-time market rates updated every second. Our exchange fee is 0.5% for real-time exchanges and 0.75% for automatic conversions. You'll always see the exact rate and fees before confirming any transaction."
        },
        {
          question: "Can I get a refund if I send money to the wrong person?",
          answer: "If the recipient hasn't claimed the money yet, we can cancel the transfer for a full refund. Once claimed, you'll need to contact the recipient directly. We recommend double-checking all details before sending."
        }
      ]
    },
    {
      category: "Account Management",
      questions: [
        {
          question: "How do I verify my identity?",
          answer: "Identity verification requires a government-issued photo ID (passport, driver's license, or national ID) and proof of address (utility bill or bank statement). The process is automated and usually takes just a few minutes."
        },
        {
          question: "Can I have multiple accounts?",
          answer: "Each person can have one Personal account, but businesses can create separate Business accounts. You can also create sub-accounts for different purposes like savings, expenses, or international transfers."
        },
        {
          question: "How do I close my account?",
          answer: "You can close your account anytime through your settings or by contacting support. Make sure to withdraw all funds first, as closed accounts cannot be reopened. There are no fees for closing your account."
        },
        {
          question: "What if I forget my password?",
          answer: "Click 'Forgot Password' on the login page and enter your email. We'll send you a secure reset link. For additional security, you may need to verify your identity through SMS or email before creating a new password."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex: number, questionIndex: number) => {
    const index = categoryIndex * 1000 + questionIndex;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get answers to the most common questions about ZenoPay. 
              Can't find what you're looking for? Contact our support team.
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-card rounded-2xl p-8 border">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  {category.category}
                </h2>
                
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const index = categoryIndex * 1000 + questionIndex;
                    const isOpen = openIndex === index;
                    
                    return (
                      <div key={questionIndex} className="border border-border rounded-lg">
                        <button
                          onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                          className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-accent/50 transition-colors"
                        >
                          <span className="font-medium pr-4">{faq.question}</span>
                          <svg
                            className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help 24/7. Get in touch and we'll respond quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                Contact Support
              </button>
              <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                Live Chat
              </button>
            </div>
          </div>

          {/* Search Suggestion */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-sm">
              💡 Tip: Use Ctrl+F (or Cmd+F on Mac) to quickly search for specific topics on this page
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

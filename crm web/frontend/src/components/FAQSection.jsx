import React, { useState } from 'react';
import { ChevronRight, HelpCircle } from 'lucide-react';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How long does it take to build a custom CRM?",
            answer: "Most custom CRM projects take between 4 to 8 weeks for a minimum viable product. The timeline depends on complexity, the number of integrations, and specific automation requirements."
        },
        {
            question: "Is there a recurring monthly fee?",
            answer: "Unlike SaaS platforms like Salesforce or HubSpot, we build solutions you own 100%. There are no per-user monthly licenses. You only pay for your own hosting and any third-party API costs (like WhatsApp)."
        },
        {
            question: "Can you migrate data from my current system?",
            answer: "Yes, we specialize in seamless data migration from Excel, Google Sheets, or legacy CRMs. We ensure data integrity and zero downtime during the transition."
        },
        {
            question: "What kind of integrations are possible?",
            answer: "We can integrate with almost any tool that has an API, including WhatsApp, Email, Payment Gateways (Stripe/Razorpay), accounting software, and lead generation platforms."
        },
        {
            question: "Is my business data secure?",
            answer: "Absolutely. We implement enterprise-grade security protocols, including end-to-end encryption, role-based access control (RBAC), and regular security audits. You have complete control over where your data is stored."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-12 md:py-24 relative">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
                <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-glow-secondary/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Got <span className="gradient-text">Questions?</span>
                    </h2>
                    <p className="text-muted-foreground text-lg animate-fade-up animate-delay-100">
                        Everything you need to know about building the last CRM your business will ever need.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="glass-card overflow-hidden border-glass-border hover:border-primary/20 transition-colors duration-300"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-6 flex items-center justify-between text-left group"
                            >
                                <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                    {faq.question}
                                </span>
                                <ChevronRight
                                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${openIndex === index ? 'rotate-90 text-primary' : ''
                                        }`}
                                />
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index
                                    ? 'max-h-96 opacity-100'
                                    : 'max-h-0 opacity-0 pointer-events-none'
                                    }`}
                            >
                                <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-glass-border/50 pt-4">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;

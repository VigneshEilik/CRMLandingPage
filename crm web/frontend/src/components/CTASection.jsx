import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section id="contact" className="py-12 md:py-24 relative">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-glow-primary/10 rounded-full blur-[150px] animate-pulse-glow" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-card p-12 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
          {/* Decorative gradient orbs */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-glow-primary/20 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-glow-secondary/20 rounded-full blur-[80px]" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let's Build a CRM That Works{' '}
              <span className="gradient-text">the Way Your Business Works</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              Ready to transform your customer relationships? Let's discuss your
              unique requirements and create a solution that drives real results.
            </p>
            <Link
              to="/start-crm"
              className="btn-primary inline-flex items-center gap-2 group text-lg"
            >
              Book a Call
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

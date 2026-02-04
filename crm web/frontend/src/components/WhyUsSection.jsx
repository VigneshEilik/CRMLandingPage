import { Check, Boxes, Shield, Zap, Link2, Cpu } from 'lucide-react';

const reasons = [
  {
    icon: Boxes,
    title: 'Fully Custom-Built',
    description: 'No off-the-shelf limitations. Built from scratch for your exact needs.',
  },
  {
    icon: Zap,
    title: 'Scalable Architecture',
    description: 'Grow without constraints. Our systems scale with your business.',
  },
  {
    icon: Shield,
    title: 'Secure & Role-Based',
    description: 'Enterprise-grade security with granular access control.',
  },
  {
    icon: Link2,
    title: 'Seamless Integrations',
    description: 'Connect with your existing tools, websites, and platforms.',
  },
  {
    icon: Cpu,
    title: 'Automation-First',
    description: 'Built for businesses that want to automate everything.',
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-12 md:py-24 relative">
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-glow-secondary/10 rounded-full blur-[120px] animate-pulse-glow" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="lg:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="gradient-text">ZenXai</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We don't just build CRMs — we architect growth engines tailored to
              your unique business model and goals.
            </p>

            <div className="space-y-4">
              {reasons.map((reason) => (
                <div
                  key={reason.title}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <reason.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{reason.title}</h4>
                    <p className="text-muted-foreground text-sm">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative">
            <div className="glass-card p-8 relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-glow-primary/20 rounded-full blur-[60px]" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">What You Get</h3>

                <div className="space-y-4">
                  {[
                    'Complete ownership of your CRM',
                    'Source code access & documentation',
                    'Ongoing support & maintenance',
                    'Training for your team',
                    'Future-proof technology stack',
                    'No recurring licensing fees',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

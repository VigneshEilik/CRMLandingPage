import { ArrowRight, Sparkles, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-10 md:pt-32 md:pb-16">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="hero-gradient-orb hero-gradient-orb-1" />
        <div className="hero-gradient-orb hero-gradient-orb-2" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Top Header Section */}
        <div className="text-center mb-16 max-w-5xl mx-auto">
          {/* Headline */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6 animate-fade-up animate-delay-100">
            Build Smarter Customer Relationships with{' '}
            <span className="gradient-text">Custom CRMs</span>
          </h1>
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Enterprise-Grade CRM Solutions
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Portrait Video Box */}
          <div className="order-1 lg:order-1 animate-fade-up animate-delay-300 flex justify-center lg:justify-start lg:-mt-16 lg:ml-12">
            <div className="relative group self-center lg:self-start">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-glow-primary rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>

              {/* Portrait Video Container */}
              <div className="relative w-[260px] md:w-[320px] aspect-[4/7] bg-slate-950 rounded-2xl overflow-hidden border border-glass-border shadow-2xl mx-auto lg:mx-0">
                {/* Video Content */}
                <div className="relative h-full w-full bg-slate-900">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube-nocookie.com/embed/y5m9H5DGtQw?autoplay=1&mute=0&loop=1&playlist=y5m9H5DGtQw&controls=0&modestbranding=1&rel=0&origin=${window.location.origin}`}
                    title="Product Overview"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />

                  {/* Overlay to maintain style but allow interaction via iframe */}
                  <div className="absolute inset-0 pointer-events-none border-[1px] border-white/10 rounded-2xl" />
                </div>
              </div>
            </div>
          </div>

          <div className="order-2 lg:order-2 animate-fade-up animate-delay-400 flex justify-center lg:justify-end lg:-mt-16">
            <Link
              to="/start-crm"
              className="glass-card p-6 md:p-10 relative overflow-hidden group max-w-xl w-full block transition-all duration-300 hover:border-primary/50"
            >
              {/* Decorative background glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-[60px]" />

              <div className="relative z-10">
                <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 items-center gap-3 flex">
                  The <span className="gradient-text">Custom Edge CRM</span>
                </h3>

                <div className="space-y-4">
                  {[
                    {
                      title: '100% Ownership',
                      desc: 'No recurring licensing fees — your system, your asset.',
                      icon: <Sparkles className="w-4 h-4 text-primary" />
                    },
                    {
                      title: 'Perfect Alignment',
                      desc: 'Built around your workflows, not the other way around.',
                      icon: <Play className="w-4 h-4 text-primary fill-current" />
                    },
                    {
                      title: 'Seamless Connectivity',
                      desc: 'Deep integrations with WhatsApp & your favorite tools.',
                      icon: <Sparkles className="w-4 h-4 text-primary" />
                    },
                    {
                      title: 'Fortified Security',
                      desc: 'Enterprise-grade protection with full control over data.',
                      icon: <ArrowRight className="w-4 h-4 text-primary" />
                    },
                    {
                      title: 'Scalable Growth',
                      desc: 'Evolve your system as your business expands without limits.',
                      icon: <Sparkles className="w-4 h-4 text-primary" />
                    },
                  ].map((point, i) => (
                    <div key={i} className="flex gap-4 items-start group/item">
                      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover/item:bg-primary/20 transition-colors">
                        {point.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-sm md:text-lg mb-1">{point.title}</h4>
                        <p className="text-[12px] md:text-sm text-muted-foreground leading-relaxed">{point.desc}</p>
                      </div>
                    </div>
                  ))}

                  <div className="pt-4 border-t border-glass-border/10 mt-6">
                    <div
                      className="btn-primary w-full flex items-center justify-center gap-3 px-8 py-4 text-base font-bold transition-all duration-300 group-hover:scale-[1.02]"
                    >
                      Book your call
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

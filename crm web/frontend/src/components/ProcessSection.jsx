import { Users, Send, TrendingUp, PieChart } from 'lucide-react';

const steps = [
  {
    icon: Users,
    step: '01',
    title: 'Capture & Centralize Leads',
    description:
      'Automatically collect leads from all sources into one unified dashboard.',
  },
  {
    icon: Send,
    step: '02',
    title: 'Automate Follow-ups',
    description:
      'Set up intelligent triggers for timely communication across all channels.',
  },
  {
    icon: TrendingUp,
    step: '03',
    title: 'Track Customer Journeys',
    description:
      'Monitor every touchpoint and interaction throughout the sales pipeline.',
  },
  {
    icon: PieChart,
    step: '04',
    title: 'Gain Business Insights',
    description:
      'Access real-time dashboards and reports to make data-driven decisions.',
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-12 md:py-24 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow-primary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Our CRM <span className="gradient-text">Helps Your Business</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A streamlined process designed to maximize efficiency and drive results
            at every stage of your customer relationships.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="relative group"
              >
                {/* Step Card */}
                <div className="glass-card-hover p-8 text-center h-full">
                  {/* Step Number */}
                  <div className="text-5xl font-bold text-primary/20 mb-4">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-secondary border border-glass-border flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

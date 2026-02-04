import { TrendingUp, Clock, Users, LineChart } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Increase Conversions',
    description: 'Convert more leads with automated nurturing and timely follow-ups.',
    stat: '40%',
    statLabel: 'Higher conversion rates',
  },
  {
    icon: Clock,
    title: 'Reduce Manual Work',
    description: 'Automate repetitive tasks and free up your team for strategic work.',
    stat: '60%',
    statLabel: 'Time saved on admin',
  },
  {
    icon: Users,
    title: 'Improve Retention',
    description: 'Keep customers engaged with personalized communication at scale.',
    stat: '35%',
    statLabel: 'Better retention rates',
  },
  {
    icon: LineChart,
    title: 'Real-time Insights',
    description: 'Make data-driven decisions with live dashboards and analytics.',
    stat: '100%',
    statLabel: 'Visibility on metrics',
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-12 md:py-24 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Key <span className="gradient-text">Benefits</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tangible results that impact your bottom line and transform
            how your business operates.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="glass-card-hover p-8 flex gap-6 group"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold gradient-text">
                      {benefit.stat}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {benefit.statLabel}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

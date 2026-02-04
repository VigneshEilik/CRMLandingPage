import { Code2, Workflow, MessageSquare, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Custom CRM Development',
    description:
      'Tailored CRM solutions built from scratch to match your unique business processes and requirements.',
  },
  {
    icon: Workflow,
    title: 'Workflow & Process Automation',
    description:
      'Streamline operations with intelligent automation that eliminates repetitive tasks and boosts productivity.',
  },
  {
    icon: MessageSquare,
    title: 'Email, Call & WhatsApp Automation',
    description:
      'Unified communication automation across all channels to engage customers at the right time.',
  },
  {
    icon: BarChart3,
    title: 'CRM Integrations & Analytics',
    description:
      'Seamlessly connect with existing tools and gain actionable insights through powerful analytics.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-12 md:py-24 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What We <span className="gradient-text">Do</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive CRM development services designed to transform how you
            manage customer relationships and drive business growth.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card-hover p-8 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold leading-tight">{service.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

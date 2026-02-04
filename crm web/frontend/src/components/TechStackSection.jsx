const technologies = [
  {
    name: 'React',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
        <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
        <path
          fillRule="evenodd"
          d="M12 21.75c6.627 0 12-4.365 12-9.75S18.627 2.25 12 2.25 0 6.615 0 12s5.373 9.75 12 9.75Zm0-1.5c-2.23 0-4.302-.42-6.025-1.133-1.723-.713-3.142-1.736-4.08-3.023C1.42 14.983 1.18 13.516 1.5 12s.814-2.983 1.895-4.094c.938-1.287 2.357-2.31 4.08-3.023C9.198 4.17 11.27 3.75 13.5 3.75c2.23 0 4.302.42 6.025 1.133 1.723.713 3.142 1.736 4.08 3.023.475 1.111.715 2.578.395 4.094-.32 1.516-.814 2.983-1.895 4.094-.938 1.287-2.357 2.31-4.08 3.023-1.723.713-3.795 1.133-6.025 1.133Z"
          clipRule="evenodd"
          opacity={0.3}
        />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
        <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm0 2.311l7.5 4.125v7.128L12 19.689l-7.5-4.125V8.436L12 4.311z" />
        <path d="M12 8v8m-4-4h8" strokeWidth={1.5} stroke="currentColor" opacity={0.5} />
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
        <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" opacity={0.5} />
      </svg>
    ),
  },
  {
    name: 'AWS Cloud',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
        <path d="M6.5 14.5c0-1.38 1.12-2.5 2.5-2.5h6c1.38 0 2.5 1.12 2.5 2.5S16.38 17 15 17H9c-1.38 0-2.5-1.12-2.5-2.5z" />
        <path d="M4 9.5a3.5 3.5 0 0 1 7 0" opacity={0.5} />
        <path d="M13 9.5a3.5 3.5 0 0 1 7 0" opacity={0.3} />
      </svg>
    ),
  },
  {
    name: 'REST APIs',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
        <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
        <circle cx="8" cy="6" r="2" opacity={0.5} />
        <circle cx="16" cy="12" r="2" opacity={0.5} />
        <circle cx="8" cy="18" r="2" opacity={0.5} />
      </svg>
    ),
  },
];

const TechStackSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built With <span className="gradient-text">Modern Tech</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We use cutting-edge technologies to build fast, secure, and 
            scalable CRM solutions.
          </p>
        </div>

        {/* Tech Icons */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center gap-3"
            >
              <div className="glass-card-hover p-6 rounded-2xl text-muted-foreground group-hover:text-primary transition-colors duration-300">
                {tech.icon}
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;

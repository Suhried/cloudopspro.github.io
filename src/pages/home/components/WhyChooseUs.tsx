import { useCursorGlow } from '../../../hooks/useCursorGlow';

function ReasonCard({ reason }: { reason: any }) {
  const { cardRef, mousePosition, isHovering } = useCursorGlow();

  return (
    <div
      ref={cardRef}
      className="group relative p-8 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/30 rounded-2xl hover:border-cyan-500/50 transition-all duration-500 overflow-hidden"
    >
      {isHovering && (
        <div
          className="pointer-events-none absolute rounded-full blur-3xl transition-opacity duration-300"
          style={{
            width: '250px',
            height: '250px',
            left: `${mousePosition.x - 125}px`,
            top: `${mousePosition.y - 125}px`,
            background: `radial-gradient(circle, rgba(6, 182, 212, 0.4), transparent 70%)`,
            opacity: 0.8,
            transition: 'left 0.15s ease-out, top 0.15s ease-out',
          }}
        />
      )}
      {/* Icon with Glow */}
      <div className="relative mb-6 z-10">
        <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
          <i className={`${reason.icon} text-3xl text-cyan-400`}></i>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
          {reason.title}
        </h3>
        <p className="text-slate-400 leading-relaxed">
          {reason.description}
        </p>
      </div>

      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
}

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: 'ri-trophy-line',
      title: '10+ Years of Expertise',
      description: 'Over a decade of proven experience in cloud engineering and DevOps across multiple industries.'
    },
    {
      icon: 'ri-global-line',
      title: 'Cross-Industry Experience',
      description: 'Trusted by Telecom, Entertainment, HealthTech, AI/ML startups, and enterprise platforms worldwide.'
    },
    {
      icon: 'ri-time-line',
      title: 'Zero-Downtime Mindset',
      description: 'We architect for reliability first, ensuring your services stay online when it matters most.'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Built for AI-Scale Workloads',
      description: 'Infrastructure optimized for modern AI/ML applications with GPU orchestration and high-performance computing.'
    },
    {
      icon: 'ri-medal-line',
      title: 'Proven Operational Excellence',
      description: 'Industry-leading SLAs, incident response times, and customer satisfaction ratings.'
    },
    {
      icon: 'ri-team-line',
      title: 'Dedicated Expert Team',
      description: 'Certified cloud architects, SREs, and DevOps engineers committed to your success.'
    }
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/10 to-slate-950"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            We don't just manage infrastructure—we become your operational backbone
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <ReasonCard key={index} reason={reason} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl backdrop-blur-sm">
            <p className="text-2xl text-slate-300 mb-6">
              Ready to scale your business without the stress?
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Let's Talk
              <i className="ri-arrow-right-line ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

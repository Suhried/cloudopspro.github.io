import { useCursorGlow } from '../../../hooks/useCursorGlow';

function IndustryCard({ industry }: { industry: any }) {
  const { cardRef, mousePosition, isHovering } = useCursorGlow();

  return (
    <div
      ref={cardRef}
      className="group relative p-10 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl hover:border-purple-500/50 transition-all duration-500 overflow-hidden"
    >
      {isHovering && (
        <div
          className="pointer-events-none absolute rounded-full blur-3xl transition-opacity duration-300"
          style={{
            width: '300px',
            height: '300px',
            left: `${mousePosition.x - 150}px`,
            top: `${mousePosition.y - 150}px`,
            background: `radial-gradient(circle, rgba(168, 85, 247, 0.4), transparent 70%)`,
            opacity: 0.8,
            transition: 'left 0.15s ease-out, top 0.15s ease-out',
          }}
        />
      )}
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

      <div className="relative z-10">
        {/* Icon and Title */}
        <div className="flex items-start gap-6 mb-6">
          <div className={`w-20 h-20 bg-gradient-to-br ${industry.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
            <i className={`${industry.icon} text-4xl text-white`}></i>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
              {industry.name}
            </h3>
            <div className={`inline-block px-4 py-1 bg-gradient-to-r ${industry.gradient} bg-opacity-20 border border-purple-500/30 rounded-full text-sm font-medium text-purple-300`}>
              {industry.stats}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-lg leading-relaxed">
          {industry.description}
        </p>
      </div>

      {/* Decorative Corner */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
}

export default function Experience() {
  const industries = [
    {
      name: 'Telecom',
      icon: 'ri-signal-tower-line',
      description: 'Built carrier-grade infrastructure handling millions of concurrent connections with 99.999% uptime.',
      stats: '5M+ Users',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Entertainment',
      icon: 'ri-movie-2-line',
      description: 'Scaled streaming platforms to support global audiences with CDN optimization and real-time analytics.',
      stats: '1M+ Streams/Day',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'HealthTech',
      icon: 'ri-heart-pulse-line',
      description: 'HIPAA-compliant infrastructure for healthcare applications with end-to-end encryption and audit trails.',
      stats: '100% Compliant',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      name: 'AI/ML Startups',
      icon: 'ri-brain-line',
      description: 'GPU-optimized clusters for training and inference with auto-scaling and cost optimization.',
      stats: '40% Cost Savings',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      name: 'FinTech',
      icon: 'ri-bank-line',
      description: 'Built secure, high-availability payment systems with fraud detection infrastructure, scalable API systems, and PCI-DSS compliant architecture handling millions of transactions.',
      stats: '99.99% Uptime',
      gradient: 'from-amber-500 to-orange-500'
    }
  ];

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Industry Experience
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Proven track record across diverse industries with mission-critical infrastructure
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {industries.map((industry, index) => (
            <IndustryCard key={index} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
}

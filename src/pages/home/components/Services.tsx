import { useCursorGlow } from '../../../hooks/useCursorGlow';

function ServiceCard({ service }: { service: any }) {
  const { cardRef, mousePosition, isHovering } = useCursorGlow();

  return (
    <div
      ref={cardRef}
      className="group relative p-8 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(14,165,233,0.2)] cursor-pointer overflow-hidden"
    >
      {isHovering && (
        <div
          className="pointer-events-none absolute rounded-full blur-3xl transition-opacity duration-300"
          style={{
            width: '250px',
            height: '250px',
            left: `${mousePosition.x - 125}px`,
            top: `${mousePosition.y - 125}px`,
            background: `radial-gradient(circle, rgba(14, 165, 233, 0.4), transparent 70%)`,
            opacity: 0.8,
            transition: 'left 0.15s ease-out, top 0.15s ease-out',
          }}
        />
      )}
      {/* Icon */}
      <div className={`relative z-10 w-16 h-16 mb-6 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
        <i className={`${service.icon} text-3xl text-white`}></i>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-slate-400 leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Hover Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
    </div>
  );
}

export default function Services() {
  const services = [
    {
      icon: 'ri-cloud-line',
      title: 'Cloud Architecture & Migration',
      description: 'Seamless migration and architecture design across AWS, GCP, and Azure with zero-downtime strategies.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'ri-git-branch-line',
      title: 'DevOps Automation & CI/CD',
      description: 'Streamlined pipelines that accelerate deployment cycles and reduce manual intervention.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'SRE & Reliability Engineering',
      description: 'Build resilient systems with proactive monitoring, incident response, and chaos engineering.',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Monitoring & Observability',
      description: 'Complete visibility into your infrastructure with advanced logging, metrics, and tracing solutions.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'ri-server-line',
      title: 'Microservices & Containers',
      description: 'Scalable Kubernetes and serverless architectures designed for modern cloud-native applications.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: 'ri-brain-line',
      title: 'AI/ML Infrastructure',
      description: 'Purpose-built infrastructure for AI workloads with optimized deployment pipelines and GPU orchestration.',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: '24/7 Operational Support',
      description: 'Round-the-clock incident management and support to keep your systems running smoothly.',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: 'ri-code-box-line',
      title: 'Infrastructure as Code',
      description: 'Automated, version-controlled infrastructure using Terraform, Pulumi, and modern IaC practices.',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: 'ri-funds-line',
      title: 'Cost Optimization',
      description: 'Reduce cloud spending by up to 40% through intelligent resource management and performance tuning.',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive cloud and DevOps solutions engineered for the AI era
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

import Layout from '../../components/feature/Layout';
import { useCursorGlow } from '../../hooks/useCursorGlow';
import { Link } from 'react-router-dom';

function FeatureCard({ feature, gradient }: { feature: string; gradient: string }) {
  const { cardRef, mousePosition, isHovering } = useCursorGlow();

  // Extract color from gradient for glow effect
  const getGlowColor = (gradient: string) => {
    if (gradient.includes('blue')) return 'rgba(59, 130, 246, 0.4)';
    if (gradient.includes('purple')) return 'rgba(168, 85, 247, 0.4)';
    if (gradient.includes('cyan')) return 'rgba(6, 182, 212, 0.4)';
    if (gradient.includes('green')) return 'rgba(34, 197, 94, 0.4)';
    if (gradient.includes('orange')) return 'rgba(249, 115, 22, 0.4)';
    if (gradient.includes('violet')) return 'rgba(139, 92, 246, 0.4)';
    if (gradient.includes('pink')) return 'rgba(236, 72, 153, 0.4)';
    if (gradient.includes('indigo')) return 'rgba(99, 102, 241, 0.4)';
    if (gradient.includes('yellow')) return 'rgba(234, 179, 8, 0.4)';
    return 'rgba(14, 165, 233, 0.4)';
  };

  return (
    <div
      ref={cardRef}
      className="group flex items-start gap-3 p-4 bg-slate-800/30 rounded-lg border border-slate-700/30 hover:border-blue-500/30 transition-all duration-300 overflow-hidden relative cursor-pointer"
    >
      {isHovering && (
        <div
          className="pointer-events-none absolute rounded-full blur-3xl transition-opacity duration-300"
          style={{
            width: '200px',
            height: '200px',
            left: `${mousePosition.x - 100}px`,
            top: `${mousePosition.y - 100}px`,
            background: `radial-gradient(circle, ${getGlowColor(gradient)}, transparent 70%)`,
            opacity: 0.8,
            transition: 'left 0.15s ease-out, top 0.15s ease-out',
          }}
        />
      )}
      <i className={`ri-check-line text-xl flex-shrink-0 mt-0.5 bg-gradient-to-r ${gradient} bg-clip-text text-transparent relative z-10 group-hover:scale-110 transition-transform duration-300`}></i>
      <span className="text-slate-300 relative z-10 group-hover:text-white transition-colors duration-300">{feature}</span>
    </div>
  );
}

export default function Services() {
  const services = [
    {
      id: 'cloud',
      icon: 'ri-cloud-line',
      title: 'Cloud Architecture & Migration',
      description: 'Design and implement scalable, resilient cloud infrastructure across AWS, GCP, and Azure.',
      features: [
        'Multi-cloud and hybrid cloud strategies',
        'Zero-downtime migration planning and execution',
        'Cloud-native architecture design',
        'Disaster recovery and business continuity',
        'Cost optimization and right-sizing',
        'Security and compliance implementation'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'devops',
      icon: 'ri-git-branch-line',
      title: 'DevOps Automation & CI/CD',
      description: 'Streamline your development lifecycle with automated pipelines and modern DevOps practices.',
      features: [
        'Automated CI/CD pipeline design',
        'GitOps workflow implementation',
        'Container orchestration with Kubernetes',
        'Blue-green and canary deployments',
        'Automated testing and quality gates',
        'Release management and versioning'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'sre',
      icon: 'ri-shield-check-line',
      title: 'SRE & Reliability Engineering',
      description: 'Build and maintain highly reliable systems with proactive monitoring and incident response.',
      features: [
        'SLO/SLI definition and tracking',
        'Incident management and on-call rotation',
        'Chaos engineering and resilience testing',
        'Performance optimization and tuning',
        'Capacity planning and forecasting',
        'Post-mortem analysis and improvement'
      ],
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'monitoring',
      icon: 'ri-line-chart-line',
      title: 'Monitoring & Observability',
      description: 'Gain complete visibility into your infrastructure with comprehensive monitoring solutions.',
      features: [
        'Metrics collection and visualization',
        'Distributed tracing implementation',
        'Log aggregation and analysis',
        'Custom dashboards and alerting',
        'APM and performance monitoring',
        'Real-time anomaly detection'
      ],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'microservices',
      icon: 'ri-server-line',
      title: 'Microservices & Containers',
      description: 'Build scalable, cloud-native applications with modern microservices architecture.',
      features: [
        'Kubernetes cluster setup and management',
        'Service mesh implementation (Istio, Linkerd)',
        'Serverless architecture design',
        'API gateway and load balancing',
        'Container security and scanning',
        'Auto-scaling and resource optimization'
      ],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 'ai',
      icon: 'ri-brain-line',
      title: 'AI/ML Infrastructure',
      description: 'Purpose-built infrastructure for AI workloads with GPU orchestration and MLOps.',
      features: [
        'GPU cluster setup and optimization',
        'ML pipeline automation',
        'Model training and deployment',
        'Feature store implementation',
        'A/B testing infrastructure',
        'Model monitoring and retraining'
      ],
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      id: 'support',
      icon: 'ri-customer-service-2-line',
      title: '24/7 Operational Support',
      description: 'Round-the-clock expert support to keep your systems running smoothly.',
      features: [
        '24/7 incident response and resolution',
        'Proactive system monitoring',
        'Regular health checks and audits',
        'Performance optimization recommendations',
        'Security patch management',
        'Dedicated support team'
      ],
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      id: 'iac',
      icon: 'ri-code-box-line',
      title: 'Infrastructure as Code',
      description: 'Automate infrastructure provisioning with version-controlled IaC practices.',
      features: [
        'Terraform and Pulumi implementation',
        'GitOps-based infrastructure management',
        'Automated compliance and policy enforcement',
        'Multi-environment orchestration',
        'State management and drift detection',
        'Module development and reusability'
      ],
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      id: 'cost',
      icon: 'ri-funds-line',
      title: 'Cost Optimization',
      description: 'Reduce cloud spending while maintaining performance and reliability.',
      features: [
        'Cloud cost analysis and reporting',
        'Resource right-sizing recommendations',
        'Reserved instance and savings plan optimization',
        'Automated resource cleanup',
        'Multi-cloud cost comparison',
        'FinOps best practices implementation'
      ],
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Hero Section */}
        <section className="relative py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 to-purple-950/20"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          
          <div className="relative max-w-5xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Comprehensive cloud and DevOps solutions engineered for scale, reliability, and the AI era
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-20">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                >
                  {/* Icon Side */}
                  <div className="lg:w-1/3">
                    <div className={`relative p-12 bg-gradient-to-br ${service.gradient} rounded-3xl`}>
                      <div className="absolute inset-0 bg-slate-950/40 rounded-3xl"></div>
                      <i className={`${service.icon} text-8xl text-white relative z-10`}></i>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="lg:w-2/3">
                    <h2 className="text-4xl font-bold text-white mb-4">
                      {service.title}
                    </h2>
                    <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.features.map((feature, featureIndex) => (
                        <FeatureCard key={featureIndex} feature={feature} gradient={service.gradient} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              Let's discuss how our services can transform your infrastructure
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-lg font-semibold rounded-lg hover:shadow-[0_0_40px_rgba(14,165,233,0.6)] transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Schedule a Consultation
              <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}

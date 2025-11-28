import { useCursorGlow } from '../../../hooks/useCursorGlow';

function PhilosophyCard({ item }: { item: any }) {
  const { cardRef, mousePosition, isHovering } = useCursorGlow();

  return (
    <div
      ref={cardRef}
      className="group p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur hover:border-cyan-500/40 transition-all duration-300 overflow-hidden relative"
    >
      {isHovering && (
        <div
          className="pointer-events-none absolute rounded-full blur-3xl transition-opacity duration-300"
          style={{
            width: '200px',
            height: '200px',
            left: `${mousePosition.x - 100}px`,
            top: `${mousePosition.y - 100}px`,
            background: `radial-gradient(circle, rgba(6, 182, 212, 0.4), transparent 70%)`,
            opacity: 0.8,
            transition: 'left 0.15s ease-out, top 0.15s ease-out',
          }}
        />
      )}
      <div className="flex items-start gap-4 relative z-10">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <i className={`${item.icon} text-xl text-cyan-300`}></i>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
          <p className="text-slate-400 leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ metric }: { metric: any }) {
  const { cardRef, mousePosition, isHovering } = useCursorGlow();

  return (
    <div
      ref={cardRef}
      className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 text-center backdrop-blur hover:border-cyan-500/50 transition-colors duration-300 overflow-hidden relative"
    >
      {isHovering && (
        <div
          className="pointer-events-none absolute rounded-full blur-3xl transition-opacity duration-300"
          style={{
            width: '200px',
            height: '200px',
            left: `${mousePosition.x - 100}px`,
            top: `${mousePosition.y - 100}px`,
            background: `radial-gradient(circle, rgba(6, 182, 212, 0.4), transparent 70%)`,
            opacity: 0.8,
            transition: 'left 0.15s ease-out, top 0.15s ease-out',
          }}
        />
      )}
      <div className="relative z-10">
        <p className="text-4xl font-semibold text-cyan-300">{metric.value}</p>
        <p className="text-slate-400 mt-2">{metric.label}</p>
      </div>
    </div>
  );
}

function ApproachCard({ item }: { item: any }) {
  const { cardRef, mousePosition, isHovering } = useCursorGlow();

  return (
    <div
      ref={cardRef}
      className="group p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur hover:border-blue-500/50 transition-all duration-300 overflow-hidden relative"
    >
      {isHovering && (
        <div
          className="pointer-events-none absolute rounded-full blur-3xl transition-opacity duration-300"
          style={{
            width: '200px',
            height: '200px',
            left: `${mousePosition.x - 100}px`,
            top: `${mousePosition.y - 100}px`,
            background: `radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent 70%)`,
            opacity: 0.8,
            transition: 'left 0.15s ease-out, top 0.15s ease-out',
          }}
        />
      )}
      <div className="flex gap-4 relative z-10">
        <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
          <i className={`${item.icon} text-xl text-blue-300`}></i>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2 group-hover:text-blue-300 transition-colors duration-300">{item.title}</h4>
          <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  );
}

function DifferentiatorCard({ item }: { item: any }) {
  const { cardRef, mousePosition, isHovering } = useCursorGlow();

  return (
    <div
      ref={cardRef}
      className="group p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur hover:border-purple-500/50 transition-all duration-300 overflow-hidden relative"
    >
      {isHovering && (
        <div
          className="pointer-events-none absolute rounded-full blur-3xl transition-opacity duration-300"
          style={{
            width: '200px',
            height: '200px',
            left: `${mousePosition.x - 100}px`,
            top: `${mousePosition.y - 100}px`,
            background: `radial-gradient(circle, rgba(168, 85, 247, 0.4), transparent 70%)`,
            opacity: 0.8,
            transition: 'left 0.15s ease-out, top 0.15s ease-out',
          }}
        />
      )}
      <div className="flex gap-4 relative z-10">
        <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
          <i className={`${item.icon} text-xl text-purple-300`}></i>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors duration-300">{item.title}</h4>
          <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const philosophy = [
    {
      icon: "ri-shield-check-line",
      title: "Reliability-First Mindset",
      description:
        "Every architecture, pipeline, and playbook is engineered to keep mission-critical systems online 24/7.",
    },
    {
      icon: "ri-cpu-line",
      title: "AI-Scale Readiness",
      description:
        "Purpose-built patterns for GPU orchestration, low-latency data flows, and ML governance at massive scale.",
    },
    {
      icon: "ri-loop-left-line",
      title: "Automation & Observability",
      description:
        "Infrastructure as Code and end-to-end telemetry are baked into our delivery model from day zero.",
    },
    {
      icon: "ri-customer-service-2-line",
      title: "Customer-Centric Delivery",
      description:
        "Embedded squads, transparent playbooks, and measurable outcomes aligned to your business goals.",
    },
  ];

  const approach = [
    {
      icon: "ri-draft-line",
      title: "Architecture with Precision",
      description:
        "Reference designs and landing zones tuned to your compliance, latency, and scale requirements.",
    },
    {
      icon: "ri-robot-line",
      title: "Automation Over Repetition",
      description:
        "Pipelines and IaC codify everything from provisioning to incident response, eliminating manual toil.",
    },
    {
      icon: "ri-stack-line",
      title: "Scalability by Design",
      description:
        "Capacity models, chaos testing, and performance guardrails ensure you can grow without re-platforming.",
    },
    {
      icon: "ri-radar-line",
      title: "Monitoring & Security Pillars",
      description:
        "Unified observability and zero-trust controls provide real-time insight and protection across environments.",
    },
  ];

  const differentiators = [
    {
      icon: "ri-building-2-line",
      title: "Deep Multi-Industry Experience",
      description:
        "Telecom, Entertainment, HealthTech, AI/ML, and FinTech programs delivered across three continents.",
    },
    {
      icon: "ri-timer-flash-line",
      title: "High-Availability Expertise",
      description: "Battle-tested SRE practices achieving 99.99% uptime targets and rapid incident resolution.",
    },
    {
      icon: "ri-brain-line",
      title: "AI/ML Infra at Scale",
      description:
        "Hands-on delivery of GPU fleets, feature stores, and MLOps automation for enterprise AI workloads.",
    },
    {
      icon: "ri-infinity-line",
      title: "End-to-End DevOps Lifecycle",
      description:
        "Strategy, build, automation, observability, and 24/7 run operations under one unified playbook.",
    },
  ];

  const metrics = [
    { value: "10+ Years", label: "Cloud & reliability leadership" },
    { value: "99.99%", label: "Uptime achievements" },
    { value: "50+", label: "Production systems managed" },
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
      <div className="absolute top-0 left-1/3 w-[700px] h-[700px] bg-blue-500/20 blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-purple-500/20 blur-3xl opacity-60"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.04)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-cyan-400/40 rounded-full bg-cyan-500/10 text-cyan-200 text-sm font-medium mb-6">
            <i className="ri-community-line"></i>
            About Us – Engineering the Future of Cloud & Reliability
          </div>
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
            For over a decade, CloudOps Pro has designed, automated, and operated mission-critical platforms for Telecom,
            Entertainment, HealthTech, AI/ML, and FinTech innovators. Our cloud engineering, DevOps, SRE, and infrastructure
            automation squads eliminate operational headaches so your teams can scale with confidence.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {metrics.map((metric) => (
            <MetricCard key={metric.value} metric={metric} />
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-16">
          {philosophy.map((item) => (
            <PhilosophyCard key={item.title} item={item} />
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Our Approach
          </h3>
          <div className="grid gap-6 md:grid-cols-2 mb-12">
            {approach.map((item) => (
              <ApproachCard key={item.title} item={item} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            What Makes Us Unique
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {differentiators.map((item) => (
              <DifferentiatorCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


import { useCursorGlow } from '../../../hooks/useCursorGlow';

function CategoryCard({ category }: { category: any }) {
  const { cardRef, mousePosition, isHovering } = useCursorGlow();

  return (
    <div
      ref={cardRef}
      className="group p-8 rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur hover:border-cyan-500/40 transition-all duration-500 overflow-hidden relative"
    >
      {isHovering && (
        <div
          className="pointer-events-none absolute rounded-full blur-3xl transition-opacity duration-300"
          style={{
            width: '300px',
            height: '300px',
            left: `${mousePosition.x - 150}px`,
            top: `${mousePosition.y - 150}px`,
            background: `radial-gradient(circle, rgba(6, 182, 212, 0.4), transparent 70%)`,
            opacity: 0.8,
            transition: 'left 0.15s ease-out, top 0.15s ease-out',
          }}
        />
      )}
      <div className="flex items-center gap-4 mb-6 relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <i className={`${category.icon} text-2xl text-cyan-300`}></i>
        </div>
        <h3 className="text-2xl font-semibold text-white">{category.name}</h3>
      </div>
      <div className="space-y-4 relative z-10">
        {category.items.map((tech: any) => (
          <div
            key={tech.name}
            className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center flex-shrink-0">
              <i className={`${tech.icon} text-xl text-cyan-200`}></i>
            </div>
            <div>
              <p className="text-white font-medium">{tech.name}</p>
              <p className="text-slate-400 text-sm">{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Technologies() {
  const categories = [
    {
      name: "Cloud Platforms",
      icon: "ri-cloud-line",
      items: [
        {
          name: "AWS",
          icon: "ri-amazon-line",
          description: "Elastic compute, networking, storage, and serverless services built for scale.",
        },
        {
          name: "Google Cloud Platform",
          icon: "ri-google-fill",
          description: "Data, AI/ML, and distributed compute optimized for analytics-driven teams.",
        },
        {
          name: "Microsoft Azure",
          icon: "ri-microsoft-line",
          description: "Enterprise-grade cloud blending hybrid workloads, security, and governance.",
        },
      ],
    },
    {
      name: "DevOps & CI/CD",
      icon: "ri-git-branch-line",
      items: [
        { name: "GitHub Actions", icon: "ri-github-fill", description: "Cloud-native pipelines integrated with your repos." },
        { name: "GitLab CI", icon: "ri-gitlab-fill", description: "End-to-end DevOps automation with security baked in." },
        { name: "Jenkins", icon: "ri-tools-line", description: "Highly customizable CI/CD orchestration at scale." },
        { name: "ArgoCD", icon: "ri-refresh-line", description: "GitOps deployment automation with progressive delivery." },
        { name: "Spinnaker", icon: "ri-rocket-line", description: "Multi-cloud deployment workflows and policy controls." },
      ],
    },
    {
      name: "Containers & Orchestration",
      icon: "ri-apps-line",
      items: [
        { name: "Docker", icon: "ri-docker-fill", description: "Portable, secure containers for any workload." },
        { name: "Kubernetes", icon: "ri-sailboat-line", description: "Declarative orchestration for resilient services." },
        { name: "EKS / GKE / AKS", icon: "ri-cloud-windy-line", description: "Managed Kubernetes with enterprise guardrails." },
        { name: "ECS", icon: "ri-layout-masonry-line", description: "Container orchestration tailored for microservices." },
      ],
    },
    {
      name: "Infrastructure as Code",
      icon: "ri-code-box-line",
      items: [
        { name: "Terraform", icon: "ri-stack-line", description: "Cloud-native IaC with reusable modules and policies." },
        { name: "Pulumi", icon: "ri-terminal-box-line", description: "IaC using real languages for full-stack automation." },
        { name: "CloudFormation", icon: "ri-folder-cloud-line", description: "AWS-native stack modeling and drift detection." },
      ],
    },
    {
      name: "Monitoring, Logging & Observability",
      icon: "ri-pulse-line",
      items: [
        { name: "Prometheus", icon: "ri-line-chart-line", description: "Metrics collection with powerful alerting." },
        { name: "Grafana", icon: "ri-dashboard-line", description: "Unified dashboards and runbooks for every team." },
        { name: "Loki", icon: "ri-file-search-line", description: "Cost-efficient log aggregation built for Kubernetes." },
        { name: "ELK Stack", icon: "ri-search-line", description: "Centralized logging and search across environments." },
        { name: "Datadog", icon: "ri-bar-chart-box-line", description: "Full-stack observability with APM and profiling." },
        { name: "New Relic", icon: "ri-line-chart-fill", description: "Performance monitoring and user experience insight." },
      ],
    },
    {
      name: "Security & Secrets",
      icon: "ri-lock-line",
      items: [
        { name: "Vault", icon: "ri-key-2-line", description: "Enterprise-grade secrets management and dynamic creds." },
        { name: "IAM", icon: "ri-id-card-line", description: "Identity, roles, and access policies hardened for compliance." },
        { name: "KMS", icon: "ri-shield-keyhole-line", description: "Encryption and key lifecycle management across clouds." },
      ],
    },
    {
      name: "AI/ML Deployment",
      icon: "ri-brain-line",
      items: [
        { name: "Kubeflow", icon: "ri-shapes-line", description: "ML workflow orchestration atop Kubernetes." },
        { name: "MLflow", icon: "ri-flask-line", description: "Experiment tracking, registry, and model lifecycle." },
        { name: "Vertex AI", icon: "ri-magic-line", description: "Google-native scalable ML ops and MLOps automation." },
        { name: "AWS SageMaker", icon: "ri-cpu-line", description: "End-to-end ML pipelines from data prep to deployment." },
      ],
    },
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-cyan-500/10 to-transparent blur-3xl"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-blue-500/40 rounded-full bg-blue-500/10 text-blue-200 text-sm font-medium mb-6">
            <i className="ri-cpu-line"></i>
            Technology Stack
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Technologies We Master
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto">
            Opinionated stacks, automated guardrails, and observability patterns that power resilient cloud programs across
            every industry we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-purple-950/30 to-slate-950">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Main Content */}
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent leading-tight">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Let's discuss how we can scale your business, reduce operational overhead,<br />
            and build infrastructure that grows with you.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <a
            href="/contact"
            className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-lg font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(14,165,233,0.6)] whitespace-nowrap cursor-pointer"
          >
            <span className="relative z-10">Schedule a Free Consultation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          <a
            href="/services"
            className="px-10 py-5 border-2 border-blue-500/50 text-blue-300 text-lg font-semibold rounded-lg backdrop-blur-sm hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            Explore Our Services
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/30 rounded-2xl">
          <div className="text-center">
            <i className="ri-shield-check-line text-4xl text-green-400 mb-3"></i>
            <p className="text-slate-300 font-medium">Enterprise-Grade Security</p>
          </div>
          <div className="text-center">
            <i className="ri-time-line text-4xl text-blue-400 mb-3"></i>
            <p className="text-slate-300 font-medium">24/7 Expert Support</p>
          </div>
          <div className="text-center">
            <i className="ri-rocket-line text-4xl text-purple-400 mb-3"></i>
            <p className="text-slate-300 font-medium">Rapid Deployment</p>
          </div>
        </div>
      </div>
    </section>
  );
}

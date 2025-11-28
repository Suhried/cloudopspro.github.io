
import { Link } from 'react-router-dom';
import { useCursorGlow } from '../../../hooks/useCursorGlow';

function StatCard({ value, label, gradient }: { value: string; label: string; gradient: string }) {
  const { cardRef, mousePosition, isHovering } = useCursorGlow();

  return (
    <div
      ref={cardRef}
      className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 overflow-hidden relative"
    >
      {isHovering && (
        <div
          className="pointer-events-none absolute rounded-full blur-3xl transition-opacity duration-300"
          style={{
            width: '200px',
            height: '200px',
            left: `${mousePosition.x - 100}px`,
            top: `${mousePosition.y - 100}px`,
            background: `radial-gradient(circle, rgba(14, 165, 233, 0.4), transparent 70%)`,
            opacity: 0.8,
            transition: 'left 0.15s ease-out, top 0.15s ease-out',
          }}
        />
      )}
      <div className={`relative z-10 text-4xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-2`}>{value}</div>
      <div className="relative z-10 text-slate-400">{label}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background with Floating Motion */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/30 to-purple-950/20">
        <div className="absolute inset-0 opacity-40">
          <div 
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/50 rounded-full blur-3xl"
            style={{
              animation: 'float-slow 10s ease-in-out infinite'
            }}
          ></div>
          <div 
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/50 rounded-full blur-3xl" 
            style={{ 
              animation: 'float-slow-reverse 12s ease-in-out infinite'
            }}
          ></div>
          <div 
            className="absolute top-1/2 left-1/2 w-[450px] h-[450px] bg-cyan-500/40 rounded-full blur-3xl" 
            style={{ 
              animation: 'float-medium 8s ease-in-out infinite'
            }}
          ></div>
          
          {/* Additional Floating Elements */}
          <div 
            className="absolute top-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-blue-400/40 to-cyan-400/40 rounded-full blur-2xl"
            style={{
              animation: 'float-gentle 14s ease-in-out infinite'
            }}
          ></div>
          <div 
            className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-purple-400/35 to-pink-400/35 rounded-full blur-3xl"
            style={{
              animation: 'float-gentle-reverse 11s ease-in-out infinite'
            }}
          ></div>
          <div 
            className="absolute top-1/4 right-1/2 w-72 h-72 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full blur-2xl"
            style={{
              animation: 'float-diagonal 13s ease-in-out infinite'
            }}
          ></div>
        </div>
      </div>

      {/* Floating Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.08)_1px,transparent_1px)] bg-[size:50px_50px]"
        style={{
          animation: 'float-subtle 18s ease-in-out infinite'
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-28 md:pt-20 md:pb-32 text-center">
        <div className="mb-8 inline-block">
          <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
            10+ Years of Operational Excellence
          </span>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent leading-tight">
          We Build the Backbone<br />of Your Digital Future
        </h1>

        <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Cloud Engineering, DevOps, SRE, and AI-driven Infrastructure Solutions.<br />
          We remove all operational headaches so you can focus on building products.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            to="/contact"
            className="group relative px-8 py-4 border-2 border-blue-500/50 group-hover:border-transparent text-blue-300 group-hover:text-white font-semibold rounded-lg backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.4)] whitespace-nowrap cursor-pointer"
          >
            <span className="relative z-10 flex items-center">
              Book a Consultation
              <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block"></i>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>

        {/* Floating Stats */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <StatCard value="10+" label="Years Experience" gradient="from-blue-400 to-cyan-400" />
          <StatCard value="99.99%" label="Uptime Guarantee" gradient="from-purple-400 to-pink-400" />
          <StatCard value="24/7" label="Support Available" gradient="from-cyan-400 to-blue-400" />
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
      
      {/* CSS Keyframes for Floating Animations */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-60px); }
        }
        
        @keyframes float-slow-reverse {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(60px); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-50px); }
        }
        
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-40px) translateX(20px); }
          50% { transform: translateY(-70px) translateX(0px); }
          75% { transform: translateY(-40px) translateX(-20px); }
        }
        
        @keyframes float-gentle-reverse {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(40px) translateX(-20px); }
          50% { transform: translateY(70px) translateX(0px); }
          75% { transform: translateY(40px) translateX(20px); }
        }
        
        @keyframes float-diagonal {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-50px) translateX(30px); }
          66% { transform: translateY(50px) translateX(-30px); }
        }
        
        @keyframes float-subtle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }
      `}</style>
    </div>
  );
}

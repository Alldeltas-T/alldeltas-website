import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  Shield,
  Cpu,
  Lock,
  TrendingUp,
} from "lucide-react";

const Hero = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--bg-primary)]">
      {/* Animated Gradient Background Layer */}
      <div className="absolute inset-0 opacity-20 animate-gradient">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#1E4A76]/20 via-[#2A5F8A]/10 to-[#3A7CA5]/20"></div>
      </div>

      {/* Background Triangles with slow drift - مثلثات متحركة خفيفة */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.04]">
        {/* مثلث 1 - أعلى اليمين */}
        <div className="absolute top-10 right-10 w-48 h-48 animate-slow-drift-1">
          <svg viewBox="0 0 100 86" className="w-full h-full">
            <polygon points="50,5 5,80 95,80" fill="#1E4A76" />
          </svg>
        </div>
        
        {/* مثلث 2 - أسفل اليسار */}
        <div className="absolute bottom-20 left-10 w-40 h-40 animate-slow-drift-2">
          <svg viewBox="0 0 100 86" className="w-full h-full">
            <polygon points="50,5 5,80 95,80" fill="#2A5F8A" />
          </svg>
        </div>
        
        {/* مثلث 3 - منتصف اليمين */}
        <div className="absolute top-1/3 right-1/4 w-24 h-24 animate-slow-drift-3">
          <svg viewBox="0 0 100 86" className="w-full h-full">
            <polygon points="50,5 5,80 95,80" fill="#3A7CA5" />
          </svg>
        </div>
        
        {/* مثلث 4 - منتصف اليسار */}
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 animate-slow-drift-1">
          <svg viewBox="0 0 100 86" className="w-full h-full">
            <polygon points="50,5 5,80 95,80" fill="#4A8AB5" />
          </svg>
        </div>
        
        {/* مثلث 5 - أعلى اليسار */}
        <div className="absolute top-1/4 left-10 w-28 h-28 animate-slow-drift-2">
          <svg viewBox="0 0 100 86" className="w-full h-full">
            <polygon points="50,5 5,80 95,80" fill="#1E4A76" />
          </svg>
        </div>
        
        {/* مثلث 6 - أسفل اليمين */}
        <div className="absolute bottom-10 right-1/3 w-36 h-36 animate-slow-drift-3">
          <svg viewBox="0 0 100 86" className="w-full h-full">
            <polygon points="50,5 5,80 95,80" fill="#2A5F8A" />
          </svg>
        </div>
      </div>

      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #1E4A76 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Decorative Tech Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-72 h-72 border-l border-[#1E4A76]/10 rounded-tl-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 border-r border-[#1E4A76]/10 rounded-br-3xl"></div>
        <div className="absolute top-2/3 left-1/3 w-48 h-48 border border-[#1E4A76]/5 rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-32 lg:pt-40 pb-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          
          {/* LEFT SIDE - Content */}
          <div
            className={`text-[var(--text-primary)] flex flex-col justify-center ${isVisible ? "animate-fadeInLeft" : "opacity-0"}`}
          >
            {/* Brand Label */}
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="w-6 h-px bg-[#2A5F8A]/70"></div>
              <span className="text-[#2A5F8A]/80 text-[14px] font-semibold tracking-[0.2em] uppercase">
                {t('hero.label')}
              </span>
            </div>

            {/* Headline - Your Partner بحجم أكبر */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-5 text-[var(--text-primary)]">
              <span className="bg-gradient-to-r from-[#1E4A76] via-[#2A5F8A] to-[#3A7CA5] bg-clip-text text-transparent">
                Your Partner
              </span>
            </h1>

            {/* Description - النص الجديد */}
            <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed mb-6 max-w-lg">
              Specialized consulting in functional safety, RAMS reliability, maintenance, and safety management, and systems integration for the railway and automotive sectors. Over 20 years of combined experience.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8">
              <div className="flex items-center gap-2">
                <Shield size={15} className="text-[#2A5F8A]/80" />
                <span className="text-[var(--text-secondary)] text-xs">EN 50126/8/9</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock size={15} className="text-[#2A5F8A]/80" />
                <span className="text-[var(--text-secondary)] text-xs">IEC 62443</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu size={15} className="text-[#2A5F8A]/80" />
                <span className="text-[var(--text-secondary)] text-xs">CENELEC Standards</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp size={15} className="text-[#2A5F8A]/80" />
                <span className="text-[var(--text-secondary)] text-xs">RAMS Engineering</span>
              </div>
            </div>

            {/* CTAs - تم إزالة hero.solutionsBtn */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-[#1E4A76] to-[#2A5F8A] text-white px-10 py-3.5 rounded-md font-semibold text-md flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:from-[#2A5F8A] hover:to-[#3A7CA5]">
                {t('hero.cta')}
                <ArrowRight size="16" className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE - Visual Elements */}
          <div className={`relative flex flex-col justify-center ${isVisible ? "animate-fadeInRight" : "opacity-0"}`}>
            
            {/* Main Image */}
            <div className="relative bg-[#1E4A76]/5 backdrop-blur-sm rounded-xl border border-[#1E4A76]/15 shadow-xl overflow-hidden z-10">
              <div className="relative">
                <img
                  src="/hero.png"
                  alt="High-speed railway infrastructure"
                  className="w-full h-72 md:h-112 object-cover relative z-10"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1473341304170-971d5b5ddbe4?w=600&h=450&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E4A76]/30 via-transparent to-transparent z-10"></div>
              </div>
            </div>

            {/* Tech UI lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
              <line x1="85%" y1="15%" x2="70%" y2="25%" stroke="#1E4A76" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="3" />
              <line x1="88%" y1="75%" x2="75%" y2="80%" stroke="#1E4A76" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="3" />
              <line x1="10%" y1="85%" x2="25%" y2="75%" stroke="#1E4A76" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Custom animations for moving triangles */}
      <style jsx>{`
        @keyframes slow-drift-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(15px, -10px) rotate(3deg); }
          66% { transform: translate(-8px, 8px) rotate(-2deg); }
        }
        @keyframes slow-drift-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-12px, -8px) rotate(-3deg); }
          66% { transform: translate(10px, 6px) rotate(2deg); }
        }
        @keyframes slow-drift-3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(8px, 12px) rotate(2deg); }
          66% { transform: translate(-6px, -10px) rotate(-3deg); }
        }
        .animate-slow-drift-1 {
          animation: slow-drift-1 20s ease-in-out infinite;
        }
        .animate-slow-drift-2 {
          animation: slow-drift-2 25s ease-in-out infinite;
        }
        .animate-slow-drift-3 {
          animation: slow-drift-3 22s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
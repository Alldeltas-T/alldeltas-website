import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  Shield,
  Cpu,
  Lock,
  TrendingUp,
  Zap,
  Eye,
  Server,
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

      {/* Soft Floating Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-[#1E4A76]/5 animate-soft-float"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-[#2A5F8A]/5 animate-soft-float" style={{ animationDelay: '5s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#3A7CA5]/3 animate-soft-pulse"></div>
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

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] tracking-tight mb-5 text-[var(--text-primary)]">
              {t('hero.headline')}
              <span className="block bg-gradient-to-r from-[#1E4A76] via-[#2A5F8A] to-[#3A7CA5] bg-clip-text text-transparent mt-1">
                {t('hero.headlineGradient')}
              </span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed mb-6 max-w-lg">
              {t('hero.description')}
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

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-[#1E4A76] to-[#2A5F8A] text-white px-10 py-3.5 rounded-md font-semibold text-md flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:from-[#2A5F8A] hover:to-[#3A7CA5]">
                {t('hero.cta')}
                <ArrowRight size="16" className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-[#1E4A76]/30 text-[var(--color-primary)] px-8 py-3.5 rounded-md font-medium text-md transition-all duration-300 hover:bg-[#1E4A76]/5 hover:border-[#1E4A76]/50">
                {t('hero.solutionsBtn') || 'Our Solutions'}
              </button>
            </div>
          </div>

          {/* RIGHT SIDE - Visual Elements مع مثلث Delta خلف الصورة */}
          <div className={`relative flex flex-col justify-center ${isVisible ? "animate-fadeInRight" : "opacity-0"}`}>
            
            {/* === مثلث Delta عملاق خلف الصورة === */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <div className="relative w-full h-full">
                <svg 
                  viewBox="0 0 500 450" 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[190%] h-[130%]"
                >
                  <defs>
                    <linearGradient id="deltaGiant" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1E4A76" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="#2A5F8A" stopOpacity="0.12" />
                      <stop offset="100%" stopColor="#3A7CA5" stopOpacity="0.06" />
                    </linearGradient>
                    <linearGradient id="strokeGiant" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1E4A76" stopOpacity="0.5" />
                      <stop offset="50%" stopColor="#2A5F8A" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#3A7CA5" stopOpacity="0.15" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* المثلث العملاق */}
                  <polygon 
                    points="250,30 30,420 470,420" 
                    fill="url(#deltaGiant)" 
                    stroke="url(#strokeGiant)" 
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#glow)"
                  />
                  
                  {/* الخط الوسيط */}
                  <line x1="250" y1="30" x2="250" y2="420" stroke="url(#strokeGiant)" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="8,6" />
                  
                  {/* الخط الأفقي */}
                  <line x1="140" y1="225" x2="360" y2="225" stroke="url(#strokeGiant)" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="8,6" />
                </svg>
              </div>
            </div>

            {/* === أيقونات على الرؤوس الخارجية للمثلث العملاق === */}
            
            {/* الرأس العلوي (أعلى المثلث) - أيقونة الرعد */}
            <div 
              className="absolute w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#1E4A76]/30 to-[#2A5F8A]/20 backdrop-blur-lg rounded-2xl border border-blue-950 flex items-center justify-center shadow-xl z-20"
              style={{
                bottom: '104%',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              <Zap size="24" className="text-[#295D88]" />
            </div>
            
            {/* الرأس الأيسر (الزاوية اليسرى السفلية) - أيقونة القفل */}
            <div 
              className="absolute w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#1E4A76]/30 to-[#2A5F8A]/20 backdrop-blur-md rounded-2xl border border-[#10B981]/40 flex items-center justify-center shadow-xl z-20"
              style={{
                top: '102%',
                left: '3%',
              }}
            >
              <Lock size="24" className="text-[#10B981]" />
            </div>
            
            {/* الرأس الأيمن (الزاوية اليمنى السفلية) - أيقونة العين */}
            <div 
              className="absolute w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#1E4A76]/30 to-[#2A5F8A]/20 backdrop-blur-lg rounded-2xl border border-[#8B5CF6]/40 flex items-center justify-center shadow-2xs z-20"
              style={{
                top: '102%',
                right: '3%',
              }}
            >
              <Eye size="24" className="text-[#8B5CF6]" />
            </div>

            {/* Main Image */}
            <div className="relative bg-[#1E4A76]/5 backdrop-blur-sm rounded-xl border border-[#1E4A76]/15 shadow-xl overflow-hidden  z-10">
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
                <div className="absolute bottom-4 left-8 z-20">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-white text-xs font-medium flex items-center gap-1.5">
  <span>Δ Alldeltas Consulting</span>
  <span className="text-white/50">|</span>
  <span className="flex items-center gap-0.5">
    <Lock size={15} className="text-[#10B981]" />
    <span>Protect</span>
  </span>
  <span>+</span>
  <span className="flex items-center gap-0.5">
    <Eye size={15} className="text-[#8B5CF6]" />
    <span>Monitor</span>
  </span>
  <span>+</span>
  <span className="flex items-center gap-0.5">
    <Zap size={15} className="text-[#F59E0B]" />
    <span>Respond Fast</span>
  </span>
</span>
                  </div>
                </div>
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


    </section>
  );
};

export default Hero;
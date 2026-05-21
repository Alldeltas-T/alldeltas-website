import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Shield, Users, Briefcase, TrendingUp, Award, Clock, Globe } from 'lucide-react'

const AboutUs = () => {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { value: '10+', label: 'Years Experience', icon: Clock, description: 'Industry leadership' },
    { value: '50+', label: 'Projects Completed', icon: Briefcase, description: 'Global delivery' },
    { value: '20+', label: 'Expert Consultants', icon: Users, description: 'Specialized experts' },
    { value: '98%', label: 'Client Satisfaction', icon: Award, description: 'Excellence proven' },
  ]

  return (
<section id="about" className="py-20 bg-[var(--bg-secondary)]">      <div className="container mx-auto px-6 lg:px-12">
        <div className={`text-center mb-14 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-gradient-to-r from-transparent to-[var(--color-primary)]/30"></div>
            <span className="text-[var(--text-secondary)]/60 text-xs uppercase tracking-[0.3em] font-semibold">
              Who We Are
            </span>
            <div className="w-10 h-px bg-gradient-to-l from-transparent to-[var(--color-primary)]/30"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
            {t('about.title')}
          </h2>
          <p className="text-[var(--text-secondary)] max-w-3xl mx-auto text-lg leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div 
                key={stat.label}
                className={`text-center p-5 bg-[var(--bg-card)] rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-[var(--color-primary)]/20 transition-all duration-300">
                  <Icon size={22} className="text-[var(--color-primary)]" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-1">{stat.value}</div>
                <p className="text-[var(--text-secondary)] text-sm font-medium">{stat.label}</p>
                <p className="text-[var(--text-muted)] text-xs mt-1">{stat.description}</p>
              </div>
            )
          })}
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          <div className="flex items-start gap-4 p-5 rounded-xl bg-[var(--bg-card)]/50 backdrop-blur-sm hover:bg-[var(--bg-card)] transition-all duration-300 border border-transparent hover:border-[var(--color-primary)]/10">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
              <Shield size={20} className="text-[var(--color-primary)]" />
            </div>
            <div>
              <h4 className="font-bold text-[var(--text-primary)] mb-1">ISO 27001 Certified</h4>
              <p className="text-[var(--text-secondary)] text-sm">Information security management compliant with international standards</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 rounded-xl bg-[var(--bg-card)]/50 backdrop-blur-sm hover:bg-[var(--bg-card)] transition-all duration-300 border border-transparent hover:border-[var(--color-primary)]/10">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
              <TrendingUp size={20} className="text-[var(--color-primary)]" />
            </div>
            <div>
              <h4 className="font-bold text-[var(--text-primary)] mb-1">CENELEC Compliant</h4>
              <p className="text-[var(--text-secondary)] text-sm">EN 50126/8/9 standards expertise for railway safety</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 rounded-xl bg-[var(--bg-card)]/50 backdrop-blur-sm hover:bg-[var(--bg-card)] transition-all duration-300 border border-transparent hover:border-[var(--color-primary)]/10">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
              <Globe size={20} className="text-[var(--color-primary)]" />
            </div>
            <div>
              <h4 className="font-bold text-[var(--text-primary)] mb-1">Global Expertise</h4>
              <p className="text-[var(--text-secondary)] text-sm">60+ years combined experience across international projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
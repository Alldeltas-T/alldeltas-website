import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { 
  Shield, CheckCircle, Lock, BarChart3, ArrowRight, 
  Server, Zap, TrendingUp, Award, 
  ExternalLink, CircuitBoard 
} from 'lucide-react'
import Container from '../components/ui/Container'
import SectionHeader from '../components/ui/SectionHeader'
import Button from '../components/ui/Button'

const Solutions = () => {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const solutions = [
    {
      key: 'riskManagement',
      slug: 'risk-management',
      icon: BarChart3,
      title: t('solutions.riskManagement'),
      description: 'Identify, analyze, and mitigate risks effectively with advanced methodologies.',
      color: '#1E4A76',
      lightColor: '#1E4A76',
      features: ['Risk Assessment', 'Mitigation Strategies', 'Compliance'],
      metric: '98% Success Rate'
    },
    {
      key: 'verification',
      slug: 'verification-validation',
      icon: CheckCircle,
      title: t('solutions.verification'),
      description: 'Ensure compliance with industry standards through rigorous testing protocols.',
      color: '#2A5F8A',
      lightColor: '#2A5F8A',
      features: ['Validation', 'Certification', 'Auditing'],
      metric: 'ISO 17025'
    },
    {
      key: 'functionalSafety',
      slug: 'functional-safety',
      icon: Shield,
      title: t('solutions.functionalSafety'),
      description: 'Implement safety-critical systems that protect lives and assets.',
      color: '#3A7CA5',
      lightColor: '#3A7CA5',
      features: ['Safety Cases', 'Hazard Analysis', 'SIL Assessment'],
      metric: 'IEC 61508'
    },
    {
      key: 'rams',
      slug: 'rams-management',
      icon: TrendingUp,
      title: t('solutions.rams'),
      description: 'Optimize reliability, availability, maintainability, and safety performance.',
      color: '#4A8AB5',
      lightColor: '#4A8AB5',
      features: ['RAMS Analysis', 'Lifecycle Management', 'Performance'],
      metric: 'EN 50126'
    },
    {
      key: 'cybersecurity',
      slug: 'cybersecurity',
      icon: Server,
      title: t('solutions.cybersecurity'),
      description: 'Protect critical infrastructure from evolving cyber threats.',
      color: '#5A9AC5',
      lightColor: '#5A9AC5',
      features: ['Risk Assessment', 'Penetration Testing', 'NIS2 Compliance'],
      metric: 'IEC 62443'
    },
    {
      key: 'software',
      slug: 'software',
      icon: CircuitBoard,
      title: t('solutions.software'),
      description: 'Custom software solutions for railway safety and monitoring systems.',
      color: '#6AB0D5',
      lightColor: '#6AB0D5',
      features: ['Safety Systems', 'Analytics Dashboards', 'Integration'],
      metric: 'Agile Certified'
    }
  ]

  return (
    <section id="solutions" className="py-24 bg-[var(--bg-secondary)]">
      <Container>
        {/* عنوان القسم - مترجم */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-[var(--color-primary)]/40"></div>
            <span className="text-[var(--color-primary)]/60 text-[11px] uppercase tracking-[0.3em] font-semibold">
              Core Competencies
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-[var(--color-primary)]/40"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
            {t('solutions.title')}
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto leading-relaxed">
            {t('solutions.subtitle')}
          </p>
        </div>

        {/* شبكة الحلول */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <Link 
                key={solution.key}
                to={`/services/${solution.slug}`}
                className={`group block ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="h-full bg-[var(--bg-card)] rounded-2xl border border-[var(--border-light)] overflow-hidden transition-all duration-300 hover:border-[var(--color-primary)]/20 hover:shadow-md">
                  <div className="w-full h-0.5" style={{ backgroundColor: solution.color }}></div>
                  <div className="p-6">
                    <div className="mb-5">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${solution.color}10` }}>
                        <Icon size={22} style={{ color: solution.color }} strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                      {solution.description}
                    </p>
                    <div className="mb-4">
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: `${solution.color}8`, color: solution.color }}>
                        {solution.metric}
                      </span>
                    </div>
                    <div className="space-y-1.5 mb-5">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                          <div className="w-1 h-1 rounded-full" style={{ backgroundColor: solution.color }}></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-primary)] group-hover:gap-2 transition-all duration-300">
                      <span>{t('solutions.learnMore')}</span>
                      <ArrowRight size={14} className="transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* زر استكشاف الخدمات - مترجم */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
          <Button 
            variant="outline" 
            size="lg"
            href="/services"
            icon={ExternalLink}
            className="px-8 py-3 text-sm"
          >
            {t('solutions.exploreAll')}
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default Solutions
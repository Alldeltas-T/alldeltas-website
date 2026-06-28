import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { 
  Shield, CheckCircle, BarChart3, ArrowRight, ArrowLeft,
  TrendingUp, ChevronRight
} from 'lucide-react'
import Container from '../components/ui/Container'

const SolutionsPage = () => {
  const { t, i18n } = useTranslation()
  const isAr = i18n.language === 'ar'
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    window.scrollTo(0, 0) // تجعل الصفحة تبدأ من الأعلى دائماً عند فتحها
  }, [])

  const solutions = [
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
      key: 'ram',
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
  ]

  return (
    <>
      <Helmet>
        <title>{isAr ? 'حلولنا وخدماتنا' : 'Our Solutions'} | Alldeltas Consulting</title>
      </Helmet>

      {/* زدنا الـ pt-28 هنا لتفادي الاختفاء تحت الهيدر الثابت */}
      <div className="min-h-screen bg-[var(--bg-secondary)] pt-28 pb-24">
        <Container>
          
          {/* Breadcrumb (شريط المسار) */}
          <div className={`flex items-center gap-1.5 text-xs text-[var(--text-muted)] mb-8 flex-wrap ${isAr ? 'flex-row-reverse' : ''}`}>
            <Link to="/" className="hover:text-[var(--color-primary)] transition-colors">
              {isAr ? 'الرئيسية' : 'Home'}
            </Link>
            {isAr ? <ChevronRight size={12} className="rotate-180" /> : <ChevronRight size={12} />}
            <span className="text-[var(--text-primary)] font-medium">
              {isAr ? 'الحلول والخدمات' : 'Solutions'}
            </span>
          </div>

          {/* عنوان الصفحة الحالي */}
          <div className={`mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'} ${isAr ? 'text-right' : 'text-left'}`}>
            <div className={`inline-flex items-center gap-2 mb-4 ${isAr ? 'flex-row-reverse' : ''}`}>
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-[var(--color-primary)]/40"></div>
              <span className="text-[var(--color-primary)]/60 text-[11px] uppercase tracking-[0.3em] font-semibold">
                Core Competencies
              </span>
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-[var(--color-primary)]/40"></div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
              {t('solutions.title')}
            </h1>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl leading-relaxed">
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
                  <div className="h-full bg-[var(--bg-card)] rounded-2xl border border-[var(--border-light)] overflow-hidden transition-all duration-300 hover:border-[var(--color-primary)]/20 hover:shadow-md flex flex-col justify-between">
                    <div>
                      <div className="w-full h-0.5" style={{ backgroundColor: solution.color }}></div>
                      <div className="p-6 pb-0">
                        <div className={`mb-5 flex ${isAr ? 'justify-end' : 'justify-start'}`}>
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${solution.color}10` }}>
                            <Icon size={22} style={{ color: solution.color }} strokeWidth={1.5} />
                          </div>
                        </div>
                        <h3 className={`text-xl font-semibold text-[var(--text-primary)] mb-2 ${isAr ? 'text-right' : ''}`}>
                          {solution.title}
                        </h3>
                        <p className={`text-[var(--text-secondary)] text-sm leading-relaxed mb-4 ${isAr ? 'text-right' : ''}`}>
                          {solution.description}
                        </p>
                        <div className={`mb-4 flex ${isAr ? 'justify-end' : 'justify-start'}`}>
                          <span className="text-[11px] font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: `${solution.color}8`, color: solution.color }}>
                            {solution.metric}
                          </span>
                        </div>
                        <div className="space-y-1.5 mb-6">
                          {solution.features.map((feature, idx) => (
                            <div key={idx} className={`flex items-center gap-2 text-xs text-[var(--text-secondary)] ${isAr ? 'flex-row-reverse' : ''}`}>
                              <div className="w-1 h-1 rounded-full" style={{ backgroundColor: solution.color }}></div>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* السهم وأزرار القراءة بأسفل الكرت */}
                    <div className="p-6 pt-0 mt-auto">
                      <div className={`flex items-center gap-1.5 text-sm font-medium text-[var(--color-primary)] group-hover:gap-2 transition-all duration-300 ${isAr ? 'flex-row-reverse' : ''}`}>
                        <span>{t('solutions.learnMore')}</span>
                        {isAr ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

        </Container>
      </div>
    </>
  )
}

export default SolutionsPage
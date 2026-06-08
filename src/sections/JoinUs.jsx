import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Users, Award, Clock, CheckCircle, Briefcase } from 'lucide-react'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'

const JoinUs = () => {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const benefits = [
    {
      icon: Award,
      title: 'Professional Growth',
      description: 'Continuous learning and development opportunities',
      color: '#1E4A76'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with industry experts worldwide',
      color: '#2A5F8A'
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'Flexible working hours and remote options',
      color: '#3A7CA5'
    },
    {
      icon: Briefcase,
      title: 'Global Projects',
      description: 'International railway and automotive projects',
      color: '#4A8AB5'
    }
  ]

  const positions = [
    {
      title: 'Senior RAMS Engineer',
      location: 'Amman, Jordan / Remote',
      type: 'Full-time',
      color: '#1E4A76'
    },
    {
      title: 'Functional Safety Consultant',
      location: 'Amman, Jordan / Remote',
      type: 'Full-time',
      color: '#2A5F8A'
    },
    {
      title: 'Cybersecurity Specialist',
      location: 'Amman, Jordan / Remote',
      type: 'Full-time',
      color: '#3A7CA5'
    },
    {
      title: 'Frontend Developer',
      location: 'Amman, Jordan / Remote',
      type: 'Full-time',
      color: '#4A8AB5'
    }
  ]

  return (
    <section id="join" className="py-20 bg-[var(--bg-primary)]">
      <Container>
        {/* عنوان القسم */}
        <div className={`text-center mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-gradient-to-r from-transparent to-[var(--color-primary)]/30"></div>
            <span className="text-[var(--color-primary)]/60 text-xs uppercase tracking-[0.3em] font-semibold">
              {t('join.badge')}
            </span>
            <div className="w-10 h-px bg-gradient-to-l from-transparent to-[var(--color-primary)]/30"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
            {t('join.title')}
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
            {t('join.subtitle')}
          </p>
        </div>

        {/* القيم والمزايا */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="text-center p-6 bg-[var(--bg-card)] rounded-2xl border border-[var(--border-light)] hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${benefit.color}10` }}>
                  <Icon size={28} style={{ color: benefit.color }} />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{benefit.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{benefit.description}</p>
              </div>
            )
          })}
        </div>

        {/* الوظائف الشاغرة */}
        <div className={`mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">{t('join.openPositions')}</h3>
            <p className="text-[var(--text-secondary)]">{t('join.openPositionsDesc')}</p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {positions.map((position, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-[var(--bg-card)] rounded-xl border border-[var(--border-light)] hover:shadow-md transition-all duration-300 group">
                <div>
                  <h4 className="font-bold text-[var(--text-primary)] group-hover:text-[var(--color-primary)] transition-colors">
                    {position.title}
                  </h4>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs text-[var(--text-secondary)]">{position.location}</span>
                    <span className="w-1 h-1 rounded-full bg-[var(--text-secondary)]"></span>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: `${position.color}10`, color: position.color }}>
                      {position.type}
                    </span>
                  </div>
                </div>
                <button className="mt-3 sm:mt-0 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-primary)] hover:gap-2 transition-all duration-300">
                  Apply Now
                  <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* قسم التقديم */}
        <div className={`text-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 border border-[var(--border-light)]">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">{t('join.dontSeePosition')}</h3>
            <p className="text-[var(--text-secondary)] mb-6">{t('join.dontSeePositionDesc')}</p>
            <Button variant="primary" size="lg" href="#contact" icon={ArrowRight}>
              {t('join.sendResume')}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default JoinUs
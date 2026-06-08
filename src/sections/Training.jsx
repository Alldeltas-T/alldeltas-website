import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BookOpen, Calendar, User, Award, Clock, ArrowRight, Video, FileText, Users, CheckCircle } from 'lucide-react'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

const Training = () => {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const trainings = [
    {
      title: 'Functional Safety (IEC 61508/EN 50129)',
      duration: '5 days',
      level: 'Advanced',
      format: 'In-person / Virtual',
      nextDate: 'June 15-19, 2026',
      price: '€2,500',
      color: '#1E4A76'
    },
    {
      title: 'RAMS Engineering (EN 50126)',
      duration: '3 days',
      level: 'Intermediate',
      format: 'Virtual',
      nextDate: 'July 10-12, 2026',
      price: '€1,800',
      color: '#2A5F8A'
    },
    {
      title: 'Railway Cybersecurity (IEC 62443)',
      duration: '4 days',
      level: 'Advanced',
      format: 'In-person / Virtual',
      nextDate: 'August 5-8, 2026',
      price: '€2,200',
      color: '#3A7CA5'
    },
    {
      title: 'CENELEC Standards for Railways',
      duration: '2 days',
      level: 'Beginner',
      format: 'Virtual',
      nextDate: 'September 20-21, 2026',
      price: '€1,200',
      color: '#4A8AB5'
    }
  ]

  const features = [
    { icon: Award, text: 'Certified Trainers', color: '#1E4A76' },
    { icon: Users, text: 'Limited Seats (max 15)', color: '#2A5F8A' },
    { icon: Video, text: 'Live Online Option', color: '#3A7CA5' },
    { icon: FileText, text: 'Course Materials Included', color: '#4A8AB5' }
  ]

  return (
    <section id="training" className="py-20 bg-[var(--bg-secondary)]">
      <Container>
        <div className={`text-center mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-gradient-to-r from-transparent to-[var(--color-primary)]/30"></div>
            <span className="text-[var(--color-primary)]/60 text-xs uppercase tracking-[0.3em] font-semibold">
              {t('training.badge')}
            </span>
            <div className="w-10 h-px bg-gradient-to-l from-transparent to-[var(--color-primary)]/30"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
            {t('training.title')}
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
            {t('training.subtitle')}
          </p>
        </div>

        {/* المميزات */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="flex items-center gap-3 p-3 bg-[var(--bg-card)] rounded-xl border border-[var(--border-light)]">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${feature.color}10` }}>
                  <Icon size={16} style={{ color: feature.color }} />
                </div>
                <span className="text-sm text-[var(--text-primary)]">{feature.text}</span>
              </div>
            )
          })}
        </div>

        {/* قائمة التدريبات */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
          {trainings.map((training, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${training.color}10` }}>
                  <BookOpen size={20} style={{ color: training.color }} />
                </div>
                <span className="text-xs font-medium px-2 py-1 rounded-full" style={{ backgroundColor: `${training.color}15`, color: training.color }}>
                  {training.level}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">{training.title}</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <Clock size={14} />
                  <span>{training.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <Calendar size={14} />
                  <span>Next: {training.nextDate}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <User size={14} />
                  <span>{training.format}</span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-[var(--border-light)]">
                <span className="text-xl font-bold" style={{ color: training.color }}>{training.price}</span>
                <button className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-primary)] hover:gap-2 transition-all duration-300">
                  Book Now
                  <ArrowRight size={14} />
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* دعوة للتواصل */}
        <div className={`text-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
          <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-[var(--color-primary)]/5 to-transparent border border-[var(--border-light)]">
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{t('training.customTraining')}</h3>
            <p className="text-[var(--text-secondary)] text-sm mb-4">{t('training.customTrainingDesc')}</p>
            <Button variant="outline" href="#contact" icon={ArrowRight}>
              {t('training.contactUs')}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Training
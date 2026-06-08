import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react'
import Container from '../components/ui/Container'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Textarea from '../components/ui/Textarea'

const Contact = () => {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      console.log('Form submitted:', formData)
      alert(t('contact.success'))
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const contactInfo = [
    { icon: Mail, label: t('contact.info.title'), value: 'info@alldeltas.com', href: 'mailto:info@alldeltas.com' },
    { icon: Phone, label: t('contact.info.phone'), value: '+962 7 1234 5678', href: 'tel:+962712345678' },
    { icon: MapPin, label: t('contact.info.address'), value: 'Amman, Jordan', href: null },
    { icon: Clock, label: t('contact.info.workingHours'), value: t('contact.info.workingHoursValue'), href: null },
  ]

  return (
    <section id="contact" className="py-20 bg-[var(--bg-secondary)]">
      <Container>
        <div className={`text-center mb-14 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-gradient-to-r from-transparent to-[var(--color-primary)]/30"></div>
            <span className="text-[var(--color-primary)]/60 text-xs uppercase tracking-[0.3em] font-semibold">
              {t('contact.badge')}
            </span>
            <div className="w-10 h-px bg-gradient-to-l from-transparent to-[var(--color-primary)]/30"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className={`space-y-6 ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
            <Card className="p-6">
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center">
                  <MessageSquare size={18} className="text-[var(--color-primary)]" />
                </div>
                {t('contact.info.title')}
              </h3>
              <div className="space-y-5">
                {contactInfo.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-primary)]/20 transition-all duration-300">
                        <Icon size={18} className="text-[var(--color-primary)]" />
                      </div>
                      <div>
                        <p className="text-[var(--text-secondary)] text-xs uppercase tracking-wide mb-1">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-[var(--text-primary)] font-medium hover:text-[var(--color-primary)] transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-[var(--text-primary)] font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </Card>

            <Card className="p-6 text-center bg-gradient-to-r from-[var(--color-primary)]/5 to-[var(--color-primary-light)]/5">
              <div className="w-16 h-16 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} className="text-[var(--color-primary)]" />
              </div>
              <p className="text-[var(--text-primary)] font-bold">{t('contact.visitOffice')}</p>
              <p className="text-[var(--text-secondary)] text-sm mt-1">{t('contact.location')}</p>
            </Card>
          </div>

          <Card className={`p-6 md:p-8 ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`}>
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center">
                <Send size={18} className="text-[var(--color-primary)]" />
              </div>
              Send us a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                label={t('contact.name')}
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={t('contact.namePlaceholder')}
              />
              
              <Input
                label={t('contact.email')}
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={t('contact.emailPlaceholder')}
              />
              
              <Textarea
                label={t('contact.message')}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={t('contact.messagePlaceholder')}
                rows={5}
              />
              
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                disabled={isSubmitting}
                icon={Send}
              >
                {isSubmitting ? t('contact.sending') : t('contact.send')}
              </Button>
            </form>
          </Card>
        </div>
      </Container>
    </section>
  )
}

export default Contact
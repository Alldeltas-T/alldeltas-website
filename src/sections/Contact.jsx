import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react'
import Container from '../components/ui/Container'
import SectionHeader from '../components/ui/SectionHeader'
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
    // محاكاة إرسال النموذج
    setTimeout(() => {
      console.log('Form submitted:', formData)
      alert('Thank you for your message! We will get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'info@alldeltas.com', href: 'mailto:info@alldeltas.com' },
    { icon: Phone, label: 'Phone', value: '+962 7 1234 5678', href: 'tel:+962712345678' },
    { icon: MapPin, label: 'Address', value: 'Amman, Jordan', href: null },
    { icon: Clock, label: 'Working Hours', value: 'Sun - Thu, 9:00 AM - 6:00 PM', href: null },
  ]

  return (
    <section id="contact" className="py-16 bg-[var(--bg-secondary)]">
      <Container>
        <SectionHeader
          badge="Get In Touch"
          title={t('contact.title')}
          description="Have a question or need consulting services? We're here to help."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* معلومات الاتصال */}
          <div className={`space-y-6 ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
            <Card className="p-6">
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center">
                  <MessageSquare size={18} className="text-[var(--color-primary)]" />
                </div>
                Contact Information
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
              <p className="text-[var(--text-primary)] font-bold">Visit Our Office</p>
              <p className="text-[var(--text-secondary)] text-sm mt-1">Amman, Jordan</p>
            </Card>
          </div>

          {/* نموذج الاتصال */}
          <Card className={`p-6 md:p-8 ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`}>
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center">
                <Send size={18} className="text-[var(--color-primary)]" />
              </div>
              Send us a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                label="Full Name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
              />
              
              <Input
                label="Email Address"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
              />
              
              <Textarea
                label="Message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your needs..."
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
                {isSubmitting ? 'Sending...' : t('contact.send')}
              </Button>
            </form>
          </Card>
        </div>
      </Container>
    </section>
  )
}

export default Contact
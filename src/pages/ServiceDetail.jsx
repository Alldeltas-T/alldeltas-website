import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import {
  ArrowRight,
  ChevronRight,
  Award,
  CheckCircle2,
  ArrowLeft,
  Mail,
  Phone
} from 'lucide-react'
import servicesData from '../data/servicesData'
import Container from '../components/ui/Container'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const ServiceDetail = () => {
  const { serviceId } = useParams()
  const { t, i18n } = useTranslation()
  const isAr = i18n.language === 'ar'
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    window.scrollTo(0, 0)
  }, [serviceId])

  const service = servicesData[serviceId]

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)]">
        <div className="text-center px-6">
          <div className="text-6xl mb-6 opacity-20 font-bold text-[var(--color-primary)]">Δ</div>
          <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
            {isAr ? 'الخدمة غير موجودة' : 'Service not found'}
          </h1>
          <p className="text-[var(--text-secondary)] mb-6">
            {isAr ? 'الخدمة التي تبحث عنها غير متاحة' : 'The service you are looking for is not available.'}
          </p>
<Link
  to="/solutions" // 👈 الآن سيوجه المستخدم إلى صفحة الحلول الكاملة التي أنشأناها تواً
  className="inline-flex items-center gap-2 bg-[#1E4A76] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#2A5F8A] transition-colors"
>
  {isAr ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
  {isAr ? 'عرض جميع الحلول' : 'View All Solutions'}
</Link>
        </div>
      </div>
    )
  }

  const Icon = service.icon

  // الخدمات المرتبطة — كل الخدمات ما عدا الحالية (بحد أقصى 4)
  const relatedServiceKeys = Object.keys(servicesData)
    .filter(key => key !== serviceId)
    .slice(0, 4)

  // النصوص حسب اللغة
  const title       = isAr && service.titleAr       ? service.titleAr       : service.title
  const description = isAr && service.descriptionAr ? service.descriptionAr : service.description
  const longDesc    = isAr && service.longDescriptionAr ? service.longDescriptionAr : service.longDescription
  const features    = isAr && service.featuresAr    ? service.featuresAr    : service.features
  const benefits    = isAr && service.benefitsAr    ? service.benefitsAr    : service.benefits

  return (
    <>
      <Helmet>
        <title>{title} | Alldeltas Consulting</title>
        <meta name="description" content={description} />
      </Helmet>

      <div className="min-h-screen bg-[var(--bg-primary)] pt-28 pb-20">

        {/* ─── Hero Banner ─── */}
        <div
          className="relative overflow-hidden mb-12"
          style={{ background: `linear-gradient(135deg, ${service.color}18 0%, ${service.color}05 100%)` }}
        >
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }}
          />
          <Container>
            <div className={`py-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>

              {/* Breadcrumb */}
              <div className={`flex items-center gap-1.5 text-xs text-[var(--text-muted)] mb-6 flex-wrap ${isAr ? 'flex-row-reverse' : ''}`}>
                <Link to="/" className="hover:text-[var(--color-primary)] transition-colors">
                  {isAr ? 'الرئيسية' : 'Home'}
                </Link>
                {isAr ? <ChevronRight size={12} className="rotate-180" /> : <ChevronRight size={12} />}
                <Link to="/solutions" className="hover:text-[var(--color-primary)] transition-colors">
                  {isAr ? 'الحلول' : 'Solutions'}
                </Link>
                {isAr ? <ChevronRight size={12} className="rotate-180" /> : <ChevronRight size={12} />}
                <span style={{ color: service.color }} className="font-medium">{title}</span>
              </div>

              {/* Title Row */}
              <div className={`flex items-start gap-5 ${isAr ? 'flex-row-reverse text-right' : ''}`}>
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm"
                  style={{ backgroundColor: `${service.color}15`, border: `1px solid ${service.color}25` }}
                >
                  <Icon size={40} style={{ color: service.color }} strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  {/* Service category badge */}
                  <div className="inline-flex items-center gap-2 mb-3">
                    <div className="w-6 h-px" style={{ backgroundColor: service.color }}></div>
                    <span
                      className="text-[10px] font-semibold uppercase tracking-[0.25em]"
                      style={{ color: service.color }}
                    >
                      {isAr ? 'خدمة متخصصة' : 'Specialized Service'}
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-3 leading-tight">
                    {title}
                  </h1>
                  <p className="text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* ─── Main Content ─── */}
        <Container>
          <div className={`grid lg:grid-cols-3 gap-10 ${isAr ? 'direction-rtl' : ''}`}>

            {/* ── LEFT: Main Body ── */}
            <div className="lg:col-span-2 space-y-8">

              {/* Overview */}
              <Card className={`p-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
                <h2 className={`text-2xl font-bold text-[var(--text-primary)] mb-4 ${isAr ? 'text-right' : ''}`}>
                  {isAr ? 'نظرة عامة' : 'Overview'}
                </h2>
                <p className={`text-[var(--text-secondary)] leading-relaxed mb-0 ${isAr ? 'text-right' : ''}`}>
                  {longDesc}
                </p>
              </Card>

              {/* Key Features */}
              <Card className={`p-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
                <div className={`flex items-center gap-3 mb-6 ${isAr ? 'flex-row-reverse' : ''}`}>
                  <div className="w-1 h-6 rounded-full" style={{ backgroundColor: service.color }}></div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">
                    {isAr ? 'المميزات الرئيسية' : 'Key Features'}
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {features.map((feature, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-secondary)] ${isAr ? 'flex-row-reverse text-right' : ''}`}
                    >
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${service.color}15` }}
                      >
                        <CheckCircle2 size={14} style={{ color: service.color }} />
                      </div>
                      <span className="text-[var(--text-secondary)] text-sm leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Benefits */}
              <Card className={`p-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
                <div className={`flex items-center gap-3 mb-6 ${isAr ? 'flex-row-reverse' : ''}`}>
                  <div className="w-1 h-6 rounded-full" style={{ backgroundColor: service.color }}></div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">
                    {isAr ? 'الفوائد والمزايا' : 'Benefits'}
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-3 ${isAr ? 'flex-row-reverse text-right' : ''}`}
                    >
                      <Award size={16} style={{ color: service.color }} className="flex-shrink-0" />
                      <span className="text-[var(--text-secondary)] text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Standards */}
              <Card className={`p-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
                <div className={`flex items-center gap-3 mb-6 ${isAr ? 'flex-row-reverse' : ''}`}>
                  <div className="w-1 h-6 rounded-full" style={{ backgroundColor: service.color }}></div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">
                    {isAr ? 'المعايير والامتثال' : 'Standards & Compliance'}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {service.standards.map((standard, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-lg text-sm font-semibold border"
                      style={{
                        backgroundColor: `${service.color}08`,
                        color: service.color,
                        borderColor: `${service.color}25`
                      }}
                    >
                      {standard}
                    </span>
                  ))}
                </div>
                <p className={`text-[var(--text-muted)] text-xs mt-4 ${isAr ? 'text-right' : ''}`}>
                  {isAr
                    ? 'جميع خدماتنا متوافقة مع أحدث الإصدارات من هذه المعايير الدولية.'
                    : 'All our services are aligned with the latest versions of these international standards.'}
                </p>
              </Card>
            </div>

            {/* ── RIGHT: Sidebar ── */}
            <div className="space-y-6">

              {/* CTA Card */}
              <div
                className={`rounded-2xl p-6 text-center ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`}
                style={{
                  background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}cc 100%)`,
                  animationDelay: '150ms'
                }}
              >
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {isAr ? 'هل تحتاج هذه الخدمة؟' : 'Need this service?'}
                </h3>
                <p className="text-white/80 text-sm mb-5 leading-relaxed">
                  {isAr
                    ? 'تواصل مع خبرائنا لمناقشة متطلباتك المحددة والحصول على عرض سعر مجاني.'
                    : 'Contact our experts to discuss your specific requirements and get a free quote.'}
                </p>
                <a
                  href="/#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="flex items-center justify-center gap-2 w-full bg-white text-[#1E4A76] px-5 py-3 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  {isAr ? (
                    <><ArrowLeft size={15} /> {t('nav.contact')}</>
                  ) : (
                    <>{t('nav.contact')} <ArrowRight size={15} /></>
                  )}
                </a>
              </div>

              {/* Quick Contact */}
              <Card className={`p-6 ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`} style={{ animationDelay: '250ms' }}>
                <h4 className={`font-bold text-[var(--text-primary)] mb-4 ${isAr ? 'text-right' : ''}`}>
                  {isAr ? 'تواصل سريع' : 'Quick Contact'}
                </h4>
                <div className="space-y-3">
                  <a
                    href="mailto:info@alldeltas.com"
                    className={`flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-[var(--color-primary)] transition-colors ${isAr ? 'flex-row-reverse' : ''}`}
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${service.color}10` }}>
                      <Mail size={14} style={{ color: service.color }} />
                    </div>
                    info@alldeltas.com
                  </a>
                  <a
                    href="tel:+962712345678"
                    className={`flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-[var(--color-primary)] transition-colors ${isAr ? 'flex-row-reverse' : ''}`}
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${service.color}10` }}>
                      <Phone size={14} style={{ color: service.color }} />
                    </div>
                    +962 7 1234 5678
                  </a>
                </div>
              </Card>

              {/* Related Services */}
              <Card className={`p-6 ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`} style={{ animationDelay: '350ms' }}>
                <h4 className={`font-bold text-[var(--text-primary)] mb-4 ${isAr ? 'text-right' : ''}`}>
                  {isAr ? 'خدمات ذات صلة' : 'Related Services'}
                </h4>
                <div className="space-y-2">
                  {relatedServiceKeys.map(key => {
                    const rel = servicesData[key]
                    const RelIcon = rel.icon
                    const relTitle = isAr && rel.titleAr ? rel.titleAr : rel.title
                    return (
                      <Link
                        key={key}
                        to={`/services/${key}`}
                        className={`flex items-center gap-3 p-3 rounded-xl hover:bg-[var(--bg-secondary)] transition-all duration-200 group ${isAr ? 'flex-row-reverse' : ''}`}
                      >
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${rel.color}10` }}
                        >
                          <RelIcon size={16} style={{ color: rel.color }} />
                        </div>
                        <p className="flex-1 font-medium text-[var(--text-primary)] text-sm group-hover:text-[var(--color-primary)] transition-colors leading-snug">
                          {relTitle}
                        </p>
                        {isAr
                          ? <ChevronRight size={13} className="text-[var(--text-muted)] rotate-180 group-hover:-translate-x-0.5 transition-transform" />
                          : <ChevronRight size={13} className="text-[var(--text-muted)] group-hover:translate-x-0.5 transition-transform" />
                        }
                      </Link>
                    )
                  })}
                </div>
              </Card>

              {/* Back link */}
              <div className={`${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '450ms' }}>
                <Link
                  to="/solutions"
                  onClick={(e) => {
                    e.preventDefault()
                    window.history.back()
                  }}
                  className={`inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--color-primary)] transition-colors ${isAr ? 'flex-row-reverse' : ''}`}
                >
                  {isAr ? <ArrowRight size={14} /> : <ArrowLeft size={14} />}
                  {isAr ? 'العودة للحلول' : 'Back to Solutions'}
                </Link>
              </div>
            </div>

          </div>
        </Container>
      </div>
    </>
  )
}

export default ServiceDetail

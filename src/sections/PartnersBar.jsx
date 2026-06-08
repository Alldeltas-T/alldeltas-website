import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const PartnersBar = () => {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const partners = [
    { name: 'Siemens', logo: '/clients/siemens.png' },
    { name: 'Hitachi', logo: '/clients/hitachi.png' },
    { name: 'Alstom', logo: '/clients/alstom.png' },
    { name: 'ALMIG', logo: '/clients/almig.png' },
    { name: 'Schluchseewerk', logo: '/clients/schluchseewerk.png' },
    { name: 'SCS', logo: '/clients/scs.png' },
  ]

  const duplicatedPartners = [...partners, ...partners]

  return (
    <section className="py-10 bg-[var(--bg-primary)] border-y border-[var(--border-light)] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* عنوان القسم - مترجم */}
        <div className={`text-center mb-6 transition-all duration-700 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-3 mb-2">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-[var(--color-primary)]/40"></div>
            <span className="text-[var(--color-primary)]/60 text-[11px] uppercase tracking-[0.3em] font-semibold">
              {t('partners.title')}
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-[var(--color-primary)]/40"></div>
          </div>
          <p className="text-[var(--text-secondary)] text-sm max-w-2xl mx-auto">
            Working with global industry leaders to deliver excellence
          </p>
        </div>

        {/* شريط التمرير المتواصل */}
        <div className="relative overflow-hidden mt-8">
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[var(--bg-primary)] via-[var(--bg-primary)]/90 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[var(--bg-primary)] via-[var(--bg-primary)]/90 to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-marquee">
            {duplicatedPartners.map((partner, index) => (
              <div key={index} className="group flex-shrink-0 mx-8 md:mx-12 lg:mx-16">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center transition-all duration-500 rounded-2xl bg-[var(--bg-card)] p-4 border border-[var(--border-light)] shadow-sm group-hover:shadow-md group-hover:border-[var(--color-primary)]/20 group-hover:-translate-y-1">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-w-full max-h-full object-contain transition-all duration-500 opacity-70 group-hover:opacity-100 group-hover:scale-105 grayscale group-hover:grayscale-0"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        const parent = e.target.parentElement
                        if (parent) {
                          parent.style.backgroundColor = 'var(--bg-secondary)'
                          parent.innerHTML = `<span class="text-[var(--color-primary)] font-semibold text-lg md:text-xl">${partner.name.charAt(0)}${partner.name.charAt(1)}</span>`
                        }
                      }}
                    />
                  </div>
                  <span className="text-[var(--text-secondary)]/50 text-[10px] md:text-xs font-medium mt-2.5 transition-all duration-300 group-hover:text-[var(--color-primary)]/80 group-hover:tracking-wide">
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/30 to-transparent"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: fit-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default PartnersBar
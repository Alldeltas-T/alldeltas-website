import React from 'react'
import { useTranslation } from 'react-i18next'
import { Mail, Phone, MapPin } from 'lucide-react' // قمنا بحذف ArrowUp لأننا لن نحتاجها هنا

const Footer = () => {
  const { t } = useTranslation()
  
  

  return (
    <footer className="bg-[#0A2B4E] text-white pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* العمود 1 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <img src="/logo.jpg" alt="Logo" className="w-7 h-7 object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Alldeltas</h3>
                <span className="text-white/60 text-xs">Consulting</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              {t('footer.description')}
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <span className="text-xs text-white/80">in</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <span className="text-xs text-white/80">𝕏</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <span className="text-xs text-white/80">f</span>
              </a>
            </div>
          </div>

          {/* العمود 2 */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/60 hover:text-white transition-colors text-sm">{t('footer.links.home')}</a></li>
              <li><a href="#solutions" className="text-white/60 hover:text-white transition-colors text-sm">{t('footer.links.solutions')}</a></li>
              <li><a href="#about" className="text-white/60 hover:text-white transition-colors text-sm">{t('footer.links.about')}</a></li>
              <li><a href="#team" className="text-white/60 hover:text-white transition-colors text-sm">{t('footer.links.team')}</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-white transition-colors text-sm">{t('footer.links.contact')}</a></li>
            </ul>
          </div>

          {/* العمود 3 */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">{t('footer.serviceLinks.riskManagement')}</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">{t('footer.serviceLinks.verification')}</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">{t('footer.serviceLinks.functionalSafety')}</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">{t('footer.serviceLinks.rams')}</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">{t('footer.serviceLinks.cybersecurity')}</a></li>
            </ul>
          </div>

          {/* العمود 4 */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t('footer.contactInfo')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={16} className="text-white/40 flex-shrink-0 mt-0.5" />
                <span className="text-white/60">Amman, Jordan</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Phone size={16} className="text-white/40 flex-shrink-0 mt-0.5" />
                <span className="text-white/60">+962 7 1234 5678</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail size={16} className="text-white/40 flex-shrink-0 mt-0.5" />
                <span className="text-white/60">info@alldeltas.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-white/40 text-center md:text-left">
              &copy; {new Date().getFullYear()} Alldeltas Consulting. {t('footer.rights')}
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-white/60 transition-colors text-xs">{t('footer.privacy')}</a>
              <a href="#" className="text-white/40 hover:text-white/60 transition-colors text-xs">{t('footer.terms')}</a>
              <a href="#" className="text-white/40 hover:text-white/60 transition-colors text-xs">{t('footer.cookies')}</a>
            </div>
          </div>
        </div>
      </div>
      
      
    </footer>
  )
}

export default Footer
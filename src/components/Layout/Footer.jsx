import React from 'react'
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0A2B4E] text-white pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* العمود 1: معلومات الشركة */}
          <div>
           <div className="flex items-center gap-2 group cursor-pointer" onClick={scrollToTop}>
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-white rounded-full shadow-md"></div>
              <img 
                src="/logo.jpg" 
                alt="Alldeltas Logo" 
                className="h-12 w-12 object-contain transition-all duration-300 group-hover:scale-105 relative z-10 p-1"
              />
            </div>
            <div>
              <h1 className="text-white text-base md:text-lg font-bold tracking-tight">
                Alldeltas
              </h1>
              <span className="text-white/80 text-[10px] font-medium tracking-wide">Consulting</span>
            </div>
          </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Engineering excellence for railway and functional safety. Over 60 years of combined experience.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <span className="text-xs">in</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <span className="text-xs">𝕏</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <span className="text-xs">f</span>
              </a>
            </div>
          </div>

          {/* العمود 2: روابط سريعة */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/60 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#solutions" className="text-white/60 hover:text-white transition-colors text-sm">Solutions</a></li>
              <li><a href="#about" className="text-white/60 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#team" className="text-white/60 hover:text-white transition-colors text-sm">Our Team</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* العمود 3: خدماتنا */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Risk Management</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Verification & Validation</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Functional Safety</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">RAMS Management</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Cybersecurity Consulting</a></li>
            </ul>
          </div>

          {/* العمود 4: معلومات الاتصال */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
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

        {/* الفاصل */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-white/40 text-center md:text-left">
              &copy; {new Date().getFullYear()} Alldeltas Consulting. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-white/60 transition-colors text-xs">Privacy Policy</a>
              <a href="#" className="text-white/40 hover:text-white/60 transition-colors text-xs">Terms of Service</a>
              <a href="#" className="text-white/40 hover:text-white/60 transition-colors text-xs">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
      

    </footer>
  )
}

export default Footer
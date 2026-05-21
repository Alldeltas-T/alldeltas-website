import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'

const CTADivider = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
          <Sparkles size={14} className="text-amber-400" />
          <span className="text-amber-400 text-xs font-medium tracking-wide">Limited Offer</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Ready to Secure Your<br />
          <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
            Railway Infrastructure?
          </span>
        </h2>
        
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
          Get a free consultation with our experts and discover how we can help you achieve compliance and operational excellence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/#contact"
            onClick={(e) => {
              e.preventDefault()
              const contactSection = document.getElementById('contact')
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="group bg-white text-[var(--color-primary)] px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            Get Free Consultation
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <button className="border-2 border-white/30 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-all duration-300">
            Learn More
          </button>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-white/60 text-sm">
          <div className="flex items-center gap-1">
            <ShieldCheck size={14} />
            <span>ISO 27001 Certified</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-white/30"></div>
          <div className="flex items-center gap-1">
            <ShieldCheck size={14} />
            <span>CENELEC Compliant</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-white/30"></div>
          <div className="flex items-center gap-1">
            <ShieldCheck size={14} />
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTADivider
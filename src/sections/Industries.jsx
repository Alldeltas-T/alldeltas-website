import React, { useEffect, useState } from 'react'
import { Train, Zap, Truck, Building2, ArrowRight, Factory, Monitor, Car, Plane } from 'lucide-react'

const Industries = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const industries = [
    {
      name: 'Rail & Transport',
      icon: Train,
      description: 'Safety-critical systems for high-speed rail, metros, and freight',
      color: '#1E4A76',
      features: ['EN 50126/8/9', 'CENELEC', 'RAMS']
    },
    {
      name: 'Energy & Utilities',
      icon: Zap,
      description: 'Cybersecurity and automation for power plants and grids',
      color: '#2A5F8A',
      features: ['NIS2', 'IEC 62443', 'SCADA']
    },
    {
      name: 'Logistics & Supply Chain',
      icon: Truck,
      description: 'Digital transformation and security for warehouse operations',
      color: '#3A7CA5',
      features: ['IoT Security', 'Real-time Tracking', 'Automation']
    },
    {
      name: 'Software Development',
      icon: Monitor,
      description: 'Custom software solutions for safety and monitoring systems',
      color: '#5A9AC5',
      features: ['Safety Software', 'Embedded Systems', 'Cloud Solutions']
    },
    {
      name: 'Industrial Manufacturing',
      icon: Factory,
      description: 'OT security and functional safety for production lines',
      color: '#4A8AB5',
      features: ['Machinery Directive', 'Safety PLC', 'Risk Assessment']
    },
    {
      name: 'Automotive',
      icon: Car,
      description: 'Functional safety and cybersecurity for vehicle systems',
      color: '#6AB0D5',
      features: ['ISO 26262', 'Automotive SPICE', 'Cybersecurity']
    }
  ]

  return (
    <section id="industries" className="py-20 bg-[var(--bg-primary)]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`text-center mb-14 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-gradient-to-r from-transparent to-[var(--color-primary)]/30"></div>
            <span className="text-[var(--text-secondary)]/60 text-xs uppercase tracking-[0.3em] font-semibold">
              Industries We Serve
            </span>
            <div className="w-10 h-px bg-gradient-to-l from-transparent to-[var(--color-primary)]/30"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Sector-Specific Expertise
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
            Tailored solutions for critical infrastructure across multiple industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <div 
                key={industry.name}
                className={`group relative bg-[var(--bg-card)] rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div 
                  className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-1.5"
                  style={{ backgroundColor: industry.color }}
                ></div>
                
                <div className="p-6 text-center">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${industry.color}10` }}
                  >
                    <Icon size={32} style={{ color: industry.color }} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                    {industry.name}
                  </h3>
                  
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                    {industry.description}
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-2 mt-3">
                    {industry.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="text-[10px] px-2 py-1 rounded-full"
                        style={{ backgroundColor: `${industry.color}10`, color: industry.color }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className={`text-center mt-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          <button className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium hover:gap-3 transition-all duration-300">
            View All Industries
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Industries
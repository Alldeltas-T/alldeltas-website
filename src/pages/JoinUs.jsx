import React, { useEffect, useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Users, Award, Clock, Briefcase, Send, Upload } from 'lucide-react'
import Container from '../components/ui/Container'

const JoinUs = () => {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)
  const formRef = useRef(null)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: 'General Application',
    resume: null,
    message: ''
  })

  useEffect(() => {
    setIsVisible(true)
    window.scrollTo(0, 0) // لتبدأ الصفحة من الأعلى عند فتحها
  }, [])

  const benefits = [
    { icon: Award, title: 'Professional Growth', description: 'Continuous learning and development opportunities', color: '#1E4A76' },
    { icon: Users, title: 'Collaborative Culture', description: 'Work with industry experts worldwide', color: '#2A5F8A' },
    { icon: Clock, title: 'Work-Life Balance', description: 'Flexible working hours and remote options', color: '#3A7CA5' },
    { icon: Briefcase, title: 'Global Projects', description: 'International railway and automotive projects', color: '#4A8AB5' }
  ]

  const positions = [
    { title: 'Senior RAMS Engineer', location: 'Amman, Jordan / Remote', type: 'Full-time', color: '#1E4A76' },
    { title: 'Functional Safety Consultant', location: 'Amman, Jordan / Remote', type: 'Full-time', color: '#2A5F8A' },
    { title: 'Cybersecurity Specialist', location: 'Amman, Jordan / Remote', type: 'Full-time', color: '#3A7CA5' },
    { title: 'Frontend Developer', location: 'Amman, Jordan / Remote', type: 'Full-time', color: '#4A8AB5' }
  ]

  const handleApplyClick = (jobTitle) => {
    setFormData({ ...formData, position: jobTitle })
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Application Submitted:', formData)
    alert('Thank you! Your application has been submitted successfully.')
  }

  return (
    <main className="pt-32 pb-20 bg-[var(--bg-primary)] min-h-screen">
      <Container>
        {/* عنوان الصفحة */}
        <div className={`text-center mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-gradient-to-r from-transparent to-[#1E4A76]/30"></div>
            <span className="text-[#1E4A76] dark:text-white/60 text-xs uppercase tracking-[0.3em] font-semibold">
              {t('join.badge') || "Careers"}
            </span>
            <div className="w-10 h-px bg-gradient-to-l from-transparent to-[#1E4A76]/30"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            {t('join.title') || "Join Our Professional Team"}
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
            {t('join.subtitle') || "Build the future of Global Railway and Automotive projects with us."}
          </p>
        </div>

        {/* المزايا */}
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

        {/* الوظائف */}
        <div className={`mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">{t('join.openPositions') || "Open Positions"}</h3>
            <p className="text-[var(--text-secondary)]">{t('join.openPositionsDesc') || "Explore available positions"}</p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {positions.map((position, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-[var(--bg-card)] rounded-xl border border-[var(--border-light)] hover:shadow-md transition-all duration-300 group">
                <div>
                  <h4 className="font-bold text-[var(--text-primary)] group-hover:text-[#1E4A76] dark:group-hover:text-blue-400 transition-colors">
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
                <button 
                  onClick={() => handleApplyClick(position.title)}
                  className="mt-3 sm:mt-0 inline-flex items-center gap-1 text-sm font-medium text-[#1E4A76] dark:text-blue-400 hover:gap-2 transition-all duration-300"
                >
                  Apply Now
                  <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* فورم التقديم */}
        <div ref={formRef} className="max-w-2xl mx-auto bg-[var(--bg-card)] border border-[var(--border-light)] rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#1E4A76] to-[#3A7CA5] p-6 text-white text-center">
            <h3 className="text-xl font-bold mb-1">Application Form</h3>
            <p className="text-white/80 text-sm">Fill out the form to apply</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-1">Full Name *</label>
                <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className="w-full px-4 py-2 rounded-lg border border-[var(--border-light)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:outline-none focus:border-[#1E4A76]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-1">Email *</label>
                <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full px-4 py-2 rounded-lg border border-[var(--border-light)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:outline-none focus:border-[#1E4A76]" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-1">Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-2 rounded-lg border border-[var(--border-light)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:outline-none focus:border-[#1E4A76]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-1">Position</label>
                <select name="position" value={formData.position} onChange={handleInputChange} className="w-full px-4 py-2 rounded-lg border border-[var(--border-light)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:outline-none focus:border-[#1E4A76]">
                  <option value="General Application">General Application</option>
                  {positions.map((p, idx) => <option key={idx} value={p.title}>{p.title}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-1">Upload CV (PDF) *</label>
              <div className="relative border-2 border-dashed border-[var(--border-light)] hover:border-[#1E4A76] rounded-lg p-4 text-center cursor-pointer bg-[var(--bg-primary)]">
                <input type="file" accept=".pdf" required onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer" />
                <Upload className="mx-auto text-[var(--text-secondary)] mb-1" size={24} />
                <p className="text-sm text-[var(--text-primary)] font-medium">{formData.resume ? formData.resume.name : "Choose file"}</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-1">Message</label>
              <textarea name="message" rows="3" value={formData.message} onChange={handleInputChange} className="w-full px-4 py-2 rounded-lg border border-[var(--border-light)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:outline-none focus:border-[#1E4A76] resize-none"></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="inline-flex items-center gap-2 bg-[#1E4A76] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#2A5F8A] transition-colors">
                Submit Application
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      </Container>
    </main>
  )
}

export default JoinUs
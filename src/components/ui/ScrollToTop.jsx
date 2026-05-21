import React, { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-8 right-8 z-50
        p-3 rounded-full
        bg-[#1E4A76] text-white
        shadow-lg
        transition-all duration-300
        hover:bg-[#2A5F8A]
        hover:scale-110
        group
        focus:outline-none focus:ring-2 focus:ring-[#1E4A76] focus:ring-offset-2
        ${isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-5 pointer-events-none'
        }
      `}
    >
      <ArrowUp
        size={20}
        className="transition-transform group-hover:-translate-y-0.5"
        aria-hidden="true"
      />
    </button>
  )
}

export default ScrollToTop
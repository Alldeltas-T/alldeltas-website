import React, { useEffect, useState } from 'react'

const ReadingProgressBar = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setProgress(scrollPercent)
    }

    window.addEventListener('scroll', updateProgress)
    updateProgress()
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-[#1E4A76] via-[#2A5F8A] to-[#3A7CA5] transition-all duration-150"
      style={{ width: `${progress}%` }}
    />
  )
}

export default ReadingProgressBar
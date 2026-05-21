import React from 'react'

const Card = ({ children, className = '', hover = true, padding = 'p-6' }) => {
  return (
    <div
      className={`
        bg-[var(--bg-card)]
        rounded-2xl
        border border-[var(--border-light)]
        shadow-sm
        ${padding}
        ${hover ? 'transition-all duration-300 hover:shadow-lg hover:border-[var(--color-primary)]/20' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}

export default Card
import React from 'react'

const IconButton = ({ icon: Icon, onClick, ariaLabel, className = '' }) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`
        p-2 rounded-full
        text-[var(--text-secondary)]
        hover:text-[var(--color-primary)]
        hover:bg-[var(--color-primary)]/10
        transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30
        ${className}
      `}
    >
      <Icon size={18} />
    </button>
  )
}

export default IconButton
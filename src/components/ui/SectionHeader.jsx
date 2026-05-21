import React from 'react'

const SectionHeader = ({
  badge,
  title,
  description,
  centered = true,
  className = ''
}) => {
  return (
    <div className={`${centered ? 'text-center' : 'text-left'} mb-12 ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-[var(--color-primary)]/40"></div>
          <span className="text-[var(--color-primary)]/60 text-[10px] uppercase tracking-[0.3em] font-semibold">
            {badge}
          </span>
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-[var(--color-primary)]/40"></div>
        </div>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-3 ${centered ? '' : 'md:text-left'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-[var(--text-secondary)] text-base max-w-2xl leading-relaxed ${centered ? 'mx-auto' : 'md:text-left'}`}>
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
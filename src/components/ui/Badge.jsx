import React from 'react'

const Badge = ({ children, color = 'primary', className = '' }) => {
  const colors = {
    primary: 'bg-[#1E4A76]/10 text-[#1E4A76]',
    amber: 'bg-amber-400/10 text-amber-600 dark:text-amber-400',
    blue: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    green: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
  }
  
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium ${colors[color]} ${className}`}>
      {children}
    </span>
  )
}

export default Badge
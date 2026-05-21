import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  ariaLabel,
  icon: Icon,
  iconPosition = 'right'
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#1E4A76] to-[#2A5F8A] text-white hover:from-[#2A5F8A] hover:to-[#3A7CA5] hover:shadow-lg hover:-translate-y-0.5 focus:ring-[#1E4A76]',
    secondary: 'border-2 border-[#1E4A76]/30 text-[#1E4A76] hover:bg-[#1E4A76]/5 hover:border-[#1E4A76]/50 focus:ring-[#1E4A76]',
    outline: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 focus:ring-gray-500',
    ghost: 'text-[#1E4A76] hover:bg-[#1E4A76]/5 focus:ring-[#1E4A76]'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-2.5 text-sm rounded-lg',
    lg: 'px-8 py-3 text-base rounded-xl',
    xl: 'px-10 py-3.5 text-base rounded-xl'
  }
  
  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
  
  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={18} className="mr-2" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={18} className="ml-2" />}
    </>
  )
  
  if (href) {
    return (
      <Link to={href} className={combinedClassName} aria-label={ariaLabel}>
        {content}
      </Link>
    )
  }
  
  return (
    <button
      onClick={onClick}
      className={combinedClassName}
      disabled={disabled}
      type={type}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  )
}

export default Button
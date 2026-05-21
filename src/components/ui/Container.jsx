import React from 'react'

const Container = ({ children, className = '', fluid = false }) => {
  return (
    <div className={`${fluid ? 'w-full' : 'container mx-auto'} px-6 lg:px-12 ${className}`}>
      {children}
    </div>
  )
}

export default Container
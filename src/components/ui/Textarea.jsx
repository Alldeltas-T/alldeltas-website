import React from 'react'

const Textarea = ({
  label,
  value,
  onChange,
  placeholder,
  required = false,
  rows = 4,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-[var(--text-primary)] text-sm font-medium mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className={`
          w-full px-4 py-3 
          border ${error ? 'border-red-500' : 'border-[var(--border-light)]'} 
          rounded-xl 
          bg-[var(--bg-primary)] 
          text-[var(--text-primary)]
          placeholder:text-[var(--text-muted)]
          focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)]
          transition-all duration-300
          resize-none
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  )
}

export default Textarea
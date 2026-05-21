import React, { Suspense } from 'react'
import { Loader2 } from 'lucide-react'

const LazySection = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div className="min-h-[200px] flex items-center justify-center">
          <Loader2 size={32} className="animate-spin text-[var(--color-primary)]" />
        </div>
      }
    >
      {children}
    </Suspense>
  )
}

export default LazySection
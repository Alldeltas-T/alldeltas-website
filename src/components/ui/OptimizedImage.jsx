import React, { useState, useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  effect = 'blur',
  threshold = 100,
  placeholderSrc = null
}) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Preload important images
    if (threshold === 0) {
      const img = new Image()
      img.src = src
      img.onload = () => setIsLoaded(true)
    }
  }, [src, threshold])

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      <LazyLoadImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        effect={effect}
        threshold={threshold}
        placeholderSrc={placeholderSrc}
        className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
      {!isLoaded && threshold === 0 && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
      )}
    </div>
  )
}

export default OptimizedImage
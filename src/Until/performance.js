// تقليل استخدام requestAnimationFrame للأنيميشنات الثقيلة
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// منع التمرير الزائد
export const throttle = (func, limit) => {
  let inThrottle
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// تحميل الصور عند الرؤية فقط
export const lazyLoadImages = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src
          img.classList.remove('lazy')
          imageObserver.unobserve(img)
        }
      })
    })

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img)
    })
  }
}

// قياس الأداء
export const measurePerformance = (name, callback) => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const start = performance.now()
    callback()
    const end = performance.now()
    console.log(`${name} took ${end - start}ms`)
  } else {
    callback()
  }
}
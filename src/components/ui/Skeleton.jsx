import React from 'react'

export const SkeletonCard = () => {
  return (
    <div className="bg-[var(--bg-card)] rounded-2xl border border-[var(--border-light)] p-6 animate-pulse">
      <div className="w-14 h-14 rounded-xl bg-gray-200 dark:bg-gray-700 mb-5"></div>
      <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded-lg mb-3 w-3/4"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-lg mb-2 w-full"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 w-2/3"></div>
      <div className="flex gap-2">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-16"></div>
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-20"></div>
      </div>
    </div>
  )
}

export const SkeletonHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 animate-pulse">
      <div className="container mx-auto px-6 lg:px-12 pt-32 lg:pt-40">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-32 mb-5"></div>
            <div className="h-12 bg-gray-300 dark:bg-gray-700 rounded-lg mb-4 w-3/4"></div>
            <div className="h-12 bg-gray-300 dark:bg-gray-700 rounded-lg mb-6 w-2/3"></div>
            <div className="h-20 bg-gray-300 dark:bg-gray-700 rounded-lg mb-8 w-full"></div>
            <div className="flex gap-4">
              <div className="h-12 bg-gray-300 dark:bg-gray-700 rounded-lg w-32"></div>
              <div className="h-12 bg-gray-300 dark:bg-gray-700 rounded-lg w-32"></div>
            </div>
          </div>
          <div>
            <div className="h-64 bg-gray-300 dark:bg-gray-700 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const SkeletonSolutions = () => {
  return (
    <div className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32 mx-auto mb-4"></div>
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-48 mx-auto mb-3"></div>
          <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-96 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
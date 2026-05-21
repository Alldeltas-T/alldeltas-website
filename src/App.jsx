import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import Layout from './components/Layout/Layout'
import ErrorBoundary from './components/common/ErrorBoundary'
import ScrollToTop from './components/ui/ScrollToTop'
import { SkeletonHero } from './components/ui/Skeleton'

// Lazy load sections for better performance
const Hero        = lazy(() => import('./sections/Hero'))
const PartnersBar = lazy(() => import('./sections/PartnersBar'))
const Solutions   = lazy(() => import('./sections/Solutions'))
const CTADivider  = lazy(() => import('./sections/CTADivider'))
const AboutUs     = lazy(() => import('./sections/AboutUs'))
const Industries  = lazy(() => import('./sections/Industries'))
const Team        = lazy(() => import('./sections/Team'))
const Contact     = lazy(() => import('./sections/Contact'))

// Pages
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const NotFound      = lazy(() => import('./pages/NotFound'))

function HomePage() {
  return (
    <Suspense fallback={<SkeletonHero />}>
      <Hero />
      <PartnersBar />
      <Solutions />
      <CTADivider />
      <AboutUs />
      <Industries />
      <Team />
      <Contact />
    </Suspense>
  )
}

function App() {
  const { i18n } = useTranslation()

  React.useEffect(() => {
    document.documentElement.dir  = i18n.language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <Layout>
            <Suspense fallback={<SkeletonHero />}>
              <Routes>
                <Route path="/"                    element={<HomePage />} />
                <Route path="/services/:serviceId" element={<ServiceDetail />} />
                <Route path="*"                    element={<NotFound />} />
              </Routes>
            </Suspense>
            <ScrollToTop />
          </Layout>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  )
}

export default App

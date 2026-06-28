import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import Layout from './components/Layout/Layout'
import ErrorBoundary from './components/common/ErrorBoundary'
import ScrollToTop from './components/ui/ScrollToTop'
import ShareButton from './components/ui/ShareButton'
import ReadingProgressBar from './components/ui/ReadingProgressBar'
import { SkeletonHero } from './components/ui/Skeleton'
import Auth from './pages/Auth' //
import SolutionsPage from './pages/SolutionsPage'


// Lazy load sections for better performance
const Hero         = lazy(() => import('./sections/Hero'))
const PartnersBar = lazy(() => import('./sections/PartnersBar'))
const Solutions   = lazy(() => import('./sections/Solutions'))
const CTADivider  = lazy(() => import('./sections/CTADivider'))
const AboutUs     = lazy(() => import('./sections/AboutUs'))
const Industries  = lazy(() => import('./sections/Industries'))
const Team        = lazy(() => import('./sections/Team'))
const Contact     = lazy(() => import('./sections/Contact'))

const Training    = lazy(() => import('./sections/Training'))

// Pages
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const NotFound      = lazy(() => import('./pages/NotFound'))
const JoinUs        = lazy(() => import('./pages/JoinUs'))


function HomePage() {
  return (
    <Suspense fallback={<SkeletonHero />}>
      <Hero />
      {/* <PartnersBar /> */}
      <Solutions />
      <CTADivider />
      <AboutUs />
      <Industries />
      <Team />

      <Training />
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
            <ReadingProgressBar />
            <Suspense fallback={<SkeletonHero />}>
              <Routes>
                {/* المسار الرئيسي للموقع */}
                <Route path="/"                    element={<HomePage />} />
                
                {/* مسار صفحة تسجيل الدخول والإنشاء الجديدة */}
                <Route path="/auth"                element={<Auth />} />
                
                {/* مسار تفاصيل الخدمات */}
                <Route path="/services/:serviceId" element={<ServiceDetail />} />
                {/* مسار تفاصيل الخدمات */}
                <Route path="/solutions"           element={<SolutionsPage />} />
                
                {/* أي مسار غير معروف يوجه لصفحة الخطأ 404 */}
                <Route path="*"                    element={<NotFound />} />
                {/*مسار انضم الينا */}
                <Route path="/joinus"                element={<JoinUs />} />
                
              </Routes>
            </Suspense>
            <ScrollToTop />
            <ShareButton />
          </Layout>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  )
}

export default App
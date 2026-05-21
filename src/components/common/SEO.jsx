import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = ({
  title,
  description,
  keywords = '',
  image = '/og-image.jpg',
  url = '',
  type = 'website',
  publishedTime,
  author = 'Alldeltas Consulting'
}) => {
  const siteTitle = 'Alldeltas Consulting'
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle
  const siteUrl = url || (typeof window !== 'undefined' ? window.location.href : 'https://alldeltas.com')
  const ogImage = image.startsWith('http') ? image : `https://alldeltas.com${image}`

  return (
    <Helmet>
      {/* Basic */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Article specific */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}

      {/* Robots */}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={siteUrl} />

      {/* Language alternatives */}
      <link rel="alternate" href={`${siteUrl}?lang=en`} hrefLang="en" />
      <link rel="alternate" href={`${siteUrl}?lang=ar`} hrefLang="ar" />
    </Helmet>
  )
}

export default SEO
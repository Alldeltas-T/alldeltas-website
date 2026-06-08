import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enTranslations from './locales/en.json'
import arTranslations from './locales/ar.json'
import deTranslations from './locales/de.json'

const savedLanguage = localStorage.getItem('language') || 'en'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      ar: {
        translation: arTranslations
      },
      de: {
        translation: deTranslations
      }
    },
    lng: savedLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
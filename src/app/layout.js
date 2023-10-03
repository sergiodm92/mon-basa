'use client'
import { I18nextProvider } from 'react-i18next'
import '../styles/globals.css'
import i18n from '@/translations/i18n'

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head>
        <title>MON-BASA</title>
      </head>
      <body>
        <I18nextProvider i18n={i18n}>
          {children}
        </I18nextProvider>
      </body>
    </html>
  )
  }

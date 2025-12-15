'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import { readConsent } from '@/lib/consent'

const GOOGLE_TAG_ID = 'AW-17807394550'

export default function GoogleTag() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const sync = () => {
      const c = readConsent()
      // ✅ Google Ads Tag nur laden, wenn Marketing erlaubt ist
      setEnabled(Boolean(c?.marketing))
    }

    sync()

    // andere Tabs
    window.addEventListener('storage', sync)

    // ✅ gleicher Tab (DEIN Event!)
    const onChanged = () => sync()
    window.addEventListener('mvpwerk:consent-changed', onChanged as any)
    window.addEventListener('mvpwerk:consent-cleared', onChanged as any)

    return () => {
      window.removeEventListener('storage', sync)
      window.removeEventListener('mvpwerk:consent-changed', onChanged as any)
      window.removeEventListener('mvpwerk:consent-cleared', onChanged as any)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <Script
        id="gtag-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_TAG_ID}');
        `}
      </Script>
    </>
  )
}

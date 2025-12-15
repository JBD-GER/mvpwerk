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
      // Google Ads = Marketing (wenn du es auch bei "analytics" laden willst, lass das || drin)
      setEnabled(Boolean(c?.marketing || c?.analytics))
    }

    sync()

    // in anderen Tabs: storage event
    window.addEventListener('storage', sync)
    // im selben Tab: custom event (siehe Patch unten)
    window.addEventListener('mvpwerk:consent-updated', sync as any)

    return () => {
      window.removeEventListener('storage', sync)
      window.removeEventListener('mvpwerk:consent-updated', sync as any)
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

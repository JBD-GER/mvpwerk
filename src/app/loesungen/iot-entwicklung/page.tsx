// src/app/loesungen/iot-entwicklung/page.tsx
import type { Metadata } from 'next'
import { cookies } from 'next/headers'

import IotHeroSection from '@/app/components/iotentwicklung/IotHeroSection'
import IotIntroSection from '@/app/components/iotentwicklung/IotIntroSection'
import IotRequirementsSection from '@/app/components/iotentwicklung/IotRequirementsSection'
import IotUseCasesSection from '@/app/components/iotentwicklung/IotUseCasesSection'
import IotStackSection from '@/app/components/iotentwicklung/IotStackSection'
import IotDeliverablesSection from '@/app/components/iotentwicklung/IotDeliverablesSection'
import IotProcessSection from '@/app/components/iotentwicklung/IotProcessSection'
import IotQualitySection from '@/app/components/iotentwicklung/IotQualitySection'
import IotGlossarySection from '@/app/components/iotentwicklung/IotGlossarySection'
import IotFAQSection from '@/app/components/iotentwicklung/IotFAQSection'
import IotCTASection from '@/app/components/iotentwicklung/IotCTASection'

type Lang = 'de' | 'en'
const LANG_COOKIE = 'mvpwerk_lang'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mvpwerk.de'
const CANONICAL_PATH = '/loesungen/iot-entwicklung'

function normalizeLang(v: unknown): Lang | null {
  if (!v) return null
  const s = Array.isArray(v) ? String(v[0] ?? '') : String(v)
  const x = s.toLowerCase()
  if (x === 'de' || x.startsWith('de-')) return 'de'
  if (x === 'en' || x.startsWith('en-')) return 'en'
  return null
}

async function getLangFromRequest(
  sp: Record<string, string | string[] | undefined>
): Promise<Lang> {
  // 1) Query Param (?lang=en) hat Vorrang
  const q = normalizeLang(sp?.lang)
  if (q) return q

  // 2) Cookie als Fallback (Next: cookies() ist async)
  const c = await cookies()
  const v = c.get(LANG_COOKIE)?.value
  return normalizeLang(v) ?? 'de'
}

function buildMeta(lang: Lang) {
  if (lang === 'en') {
    return {
      title: 'IoT Development – Devices, Cloud & Platforms | MVPWERK',
      description:
        'IoT development for B2B: MQTT device connectivity, telemetry, dashboards, alerts, provisioning, OTA updates, security and scale. From PoC to production.',
      ogTitle: 'IoT Development – Devices, Cloud & Platforms | MVPWERK',
      ogDescription:
        'From sensors to dashboards: IoT backends, device management, telemetry & security — production-ready and scalable.',
      keywords: [
        'iot development',
        'mqtt',
        'device management',
        'telemetry',
        'ota updates',
        'provisioning',
        'iot platform',
        'dashboard',
        'alerts',
        'security',
        'edge',
        'cloud integration',
      ],
      serviceName: 'IoT Development',
      serviceType: 'IoT platforms, device management, telemetry, dashboards, security',
      locale: 'en_US',
      inLanguage: 'en-US',
    } as const
  }

  return {
    title: 'IoT Entwicklung – Geräte, Cloud & Plattformen | MVPWERK',
    description:
      'IoT Entwicklung für B2B: Geräte-Anbindung (MQTT), Telemetrie, Dashboards, Alerts, Provisioning, OTA Updates, Security & Skalierung. Von PoC bis Produktion.',
    ogTitle: 'IoT Entwicklung – Geräte, Cloud & Plattformen | MVPWERK',
    ogDescription:
      'Vom Sensor bis zum Dashboard: IoT-Backends, Device Management, Telemetrie & Security – produktionsreif und skalierbar.',
    keywords: [
      'iot entwicklung',
      'mqtt',
      'device management',
      'telemetrie',
      'ota updates',
      'provisioning',
      'iot plattform',
      'dashboards',
      'alarme',
      'security',
      'edge',
      'cloud integration',
    ],
    serviceName: 'IoT Entwicklung',
    serviceType: 'IoT Plattformen, Device Management, Telemetrie, Dashboards, Security',
    locale: 'de_DE',
    inLanguage: 'de-DE',
  } as const
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}): Promise<Metadata> {
  const sp = await searchParams
  const lang: Lang = normalizeLang(sp?.lang) ?? 'de'
  const m = buildMeta(lang)

  // ✅ Canonical immer DE, damit Google DE als Default indexiert
  const canonicalDe = `${CANONICAL_PATH}?lang=de`

  return {
    metadataBase: new URL(SITE_URL),
    title: m.title,
    description: m.description,

    alternates: {
      canonical: canonicalDe,
      languages: {
        'de-DE': `${CANONICAL_PATH}?lang=de`,
        'en-US': `${CANONICAL_PATH}?lang=en`,
      },
    },

    openGraph: {
      title: m.ogTitle,
      description: m.ogDescription,
      url: `${CANONICAL_PATH}?lang=${lang}`,
      type: 'website',
      siteName: 'MVPWERK',
      locale: m.locale,
    },

    twitter: {
      card: 'summary_large_image',
      title: m.ogTitle,
      description: m.ogDescription,
    },

    // ✅ EN bleibt nutzbar, aber wird nicht indexiert
    robots:
      lang === 'en'
        ? { index: false, follow: true }
        : {
            index: true,
            follow: true,
            googleBot: {
              index: true,
              follow: true,
              'max-image-preview': 'large',
              'max-snippet': -1,
              'max-video-preview': -1,
            },
          },

    keywords: [...m.keywords],
  }
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const sp = await searchParams
  const lang = await getLangFromRequest(sp)
  const m = buildMeta(lang)

  // ✅ konsistent: URL enthält aktuelle Sprache
  const pageUrl = `${SITE_URL}${CANONICAL_PATH}?lang=${lang}`

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <IotHeroSection lang={lang} />
      <IotIntroSection lang={lang} />
      <IotRequirementsSection lang={lang} />
      <IotUseCasesSection lang={lang} />
      <IotStackSection lang={lang} />
      <IotDeliverablesSection lang={lang} />
      <IotProcessSection lang={lang} />
      <IotQualitySection lang={lang} />
      <IotGlossarySection lang={lang} />
      <IotFAQSection lang={lang} />
      <IotCTASection lang={lang} />

      {/* JSON-LD (Service) */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: m.serviceName,
            provider: { '@type': 'Organization', name: 'MVPWERK', url: SITE_URL },
            serviceType: m.serviceType,
            areaServed: 'DE',
            url: pageUrl,
            offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
          }),
        }}
      />
    </main>
  )
}

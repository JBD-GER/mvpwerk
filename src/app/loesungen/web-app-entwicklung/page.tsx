// src/app/loesungen/web-app-entwicklung/page.tsx
import type { Metadata } from 'next'
import { cookies } from 'next/headers'

import WebAppHeroSection from '@/app/components/webappentwicklung/WebAppHeroSection'
import WebAppIntroSection from '@/app/components/webappentwicklung/WebAppIntroSection'
import WebAppRequirementsSection from '@/app/components/webappentwicklung/WebAppRequirementsSection'
import WebAppUseCasesSection from '@/app/components/webappentwicklung/WebAppUseCasesSection'
import WebAppStackSection from '@/app/components/webappentwicklung/WebAppStackSection'
import WebAppDeliverablesSection from '@/app/components/webappentwicklung/WebAppDeliverablesSection'
import WebAppProcessSection from '@/app/components/webappentwicklung/WebAppProcessSection'
import WebAppQualitySection from '@/app/components/webappentwicklung/WebAppQualitySection'
import WebAppGlossarySection from '@/app/components/webappentwicklung/WebAppGlossarySection'
import WebAppFAQSection from '@/app/components/webappentwicklung/WebAppFAQSection'
import WebAppCTASection from '@/app/components/webappentwicklung/WebAppCTASection'

type Lang = 'de' | 'en'
const LANG_COOKIE = 'mvpwerk_lang'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mvpwerk.de'
const CANONICAL_PATH = '/loesungen/web-app-entwicklung'

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

  // 2) Cookie als Fallback
  const c = await cookies()
  const v = c.get(LANG_COOKIE)?.value
  return normalizeLang(v) ?? 'de'
}

function buildMeta(lang: Lang) {
  if (lang === 'en') {
    return {
      title: 'Web App Development – SaaS, Dashboards & Platforms | MVPWERK',
      description:
        'Web app development for B2B: dashboards, workflows, roles/RLS, APIs, integrations, payments, performance and operations. Next.js/React — production-ready and scalable.',
      ogTitle: 'Web App Development – SaaS, Dashboards & Platforms | MVPWERK',
      ogDescription:
        'From MVP to scalable platform: web apps with clean architecture, security, UX and measurable performance.',
      keywords: [
        'web app development',
        'saas development',
        'dashboard development',
        'workflow automation',
        'api development',
        'integrations',
        'payments integration',
        'roles and permissions',
        'rls',
        'next.js',
        'react',
        'supabase',
        'vercel',
        'performance',
      ],
      serviceName: 'Web App Development',
      serviceType: 'Web app development, SaaS, dashboards, workflows, APIs, integrations',
      locale: 'en_US',
      inLanguage: 'en-US',
    } as const
  }

  return {
    title: 'Web App Entwicklung – SaaS, Dashboards & Plattformen | MVPWERK',
    description:
      'Web App Entwicklung für B2B: Dashboards, Workflows, Rollen/RLS, APIs, Integrationen, Payments, Performance & Betrieb. Next.js/React – produktionsreif und skalierbar.',
    ogTitle: 'Web App Entwicklung – SaaS, Dashboards & Plattformen | MVPWERK',
    ogDescription:
      'Von MVP bis skalierbarer Plattform: Web Apps mit sauberer Architektur, Security, UX und messbarer Performance.',
    keywords: [
      'web app entwicklung',
      'saas entwickeln lassen',
      'dashboard',
      'workflows',
      'rollen und rechte',
      'rls',
      'api entwicklung',
      'integrationen',
      'payments',
      'next.js agentur',
      'react agentur',
      'supabase',
      'vercel',
      'performance optimierung',
    ],
    serviceName: 'Web App Entwicklung',
    serviceType: 'Web App Entwicklung, SaaS, Dashboards, Workflows, APIs, Integrationen',
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

  // ✅ Sprache bleibt umschaltbar:
  const lang: Lang = normalizeLang(sp?.lang) ?? 'de'
  const m = buildMeta(lang)

  // ✅ Indexierung: canonical immer DE (nicht Query-less!)
  const canonicalDe = `${CANONICAL_PATH}?lang=de`

  return {
    metadataBase: new URL(SITE_URL),

    title: m.title,
    description: m.description,

    alternates: {
      // ✅ Canonical fest auf DE, damit Google DE als Default nimmt
      canonical: canonicalDe,

      // optional: hreflang darf bleiben (hilft Google, Varianten zu verstehen)
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

    // ✅ EN darf existieren (für Nutzer), aber nicht indexiert werden
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

  const pageUrl = `${SITE_URL}${CANONICAL_PATH}?lang=${lang}`

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <WebAppHeroSection lang={lang} />
      <WebAppIntroSection lang={lang} />
      <WebAppRequirementsSection lang={lang} />
      <WebAppUseCasesSection lang={lang} />
      <WebAppStackSection lang={lang} />
      <WebAppDeliverablesSection lang={lang} />
      <WebAppProcessSection lang={lang} />
      <WebAppQualitySection lang={lang} />
      <WebAppGlossarySection lang={lang} />
      <WebAppFAQSection lang={lang} />
      <WebAppCTASection lang={lang} />

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

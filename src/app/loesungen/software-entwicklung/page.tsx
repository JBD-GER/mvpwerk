// src/app/loesungen/softwareentwicklung/page.tsx
import type { Metadata } from 'next'

import SoftwareHeroSection from '@/app/components/softwareentwicklung/SoftwareHeroSection'
import SoftwareIntroSection from '@/app/components/softwareentwicklung/SoftwareIntroSection'
import SoftwareUseCasesSection from '@/app/components/softwareentwicklung/SoftwareUseCasesSection'
import SoftwareLeistungenSection from '@/app/components/softwareentwicklung/SoftwareLeistungenSection'
import TeamSection from '@/app/components/startseite/TeamSection'
import SoftwareStackSection from '@/app/components/softwareentwicklung/SoftwareStackSection'
import SoftwareProcessSection from '@/app/components/softwareentwicklung/SoftwareProcessSection'
import SoftwareQualitySection from '@/app/components/softwareentwicklung/SoftwareQualitySection'
import SoftwareDeliverablesSection from '@/app/components/softwareentwicklung/SoftwareDeliverablesSection'
import SoftwareReferencesSection from '@/app/components/softwareentwicklung/SoftwareReferencesSection'
import SoftwareFAQSection from '@/app/components/softwareentwicklung/SoftwareFAQSection'
import SoftwareGlossarySection from '@/app/components/softwareentwicklung/SoftwareGlossarySection'

type Lang = 'de' | 'en'

function normalizeLang(v: unknown): Lang | null {
  if (!v) return null
  const s = Array.isArray(v) ? String(v[0] ?? '') : String(v)
  const x = s.toLowerCase()
  if (x === 'de' || x.startsWith('de-')) return 'de'
  if (x === 'en' || x.startsWith('en-')) return 'en'
  return null
}

const CANONICAL_PATH = '/loesungen/softwareentwicklung'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mvpwerk.de'

function buildMeta(lang: Lang) {
  if (lang === 'en') {
    return {
      title: 'Custom Software Development – MVPWERK',
      description:
        'We build production-ready web apps and SaaS: dashboards, APIs, auth, roles, payments, integrations and performance — with clean UX and scalable architecture.',
      ogTitle: 'Custom Software Development – MVPWERK',
      ogDescription:
        'From MVP to production: web apps, SaaS, dashboards, APIs, auth & integrations — fast, robust, maintainable.',
      serviceName: 'Software Development',
      keywords: [
        'software development agency',
        'web app development',
        'saas development',
        'custom software',
        'next.js agency',
        'react development',
        'supabase',
        'vercel',
        'api development',
      ],
      locale: 'en_US',
      inLanguage: 'en-US',
    } as const
  }

  return {
    title: 'Softwareentwicklung & Web-App Agentur – MVPWERK',
    description:
      'Wir entwickeln individuelle Web-Apps & SaaS für B2B: Dashboards, APIs, Auth/Rollen, Integrationen, Payments & Performance — produktionsreif, skalierbar, UX-stark.',
    ogTitle: 'Softwareentwicklung & Web-App Agentur – MVPWERK',
    ogDescription:
      'Von MVP bis Produktion: Web-Apps, SaaS, Dashboards, APIs, Auth & Integrationen — schnell, robust, wartbar.',
    serviceName: 'Softwareentwicklung',
    keywords: [
      'softwareentwicklung',
      'web app agentur',
      'webanwendung entwickeln lassen',
      'saas entwickeln lassen',
      'next.js agentur',
      'react agentur',
      'supabase agentur',
      'vercel agentur',
      'api entwicklung',
      'individualsoftware',
    ],
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

  // ✅ Canonical immer DE, damit Google DE als Default nimmt
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

    // ✅ EN existiert für Nutzer, aber wird nicht indexiert
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

export default async function SoftwareEntwicklungPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const sp = await searchParams
  const lang: Lang = normalizeLang(sp?.lang) ?? 'de'
  const m = buildMeta(lang)

  const pageUrl = `${SITE_URL}${CANONICAL_PATH}?lang=${lang}`

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SoftwareHeroSection lang={lang} />

      <SoftwareIntroSection lang={lang} />
      <SoftwareUseCasesSection lang={lang} />
      <SoftwareLeistungenSection lang={lang} />

      <TeamSection lang={lang} />

      <SoftwareStackSection lang={lang} />
      <SoftwareProcessSection lang={lang} />
      <SoftwareQualitySection lang={lang} />
      <SoftwareDeliverablesSection lang={lang} />
      <SoftwareReferencesSection lang={lang} />
      <SoftwareFAQSection lang={lang} />
      <SoftwareGlossarySection lang={lang} />

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
            serviceType:
              lang === 'de'
                ? 'Softwareentwicklung, Web-App Entwicklung, SaaS Entwicklung'
                : 'Software development, web app development, SaaS development',
            areaServed: 'DE',
            url: pageUrl,
            offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
          }),
        }}
      />
    </main>
  )
}

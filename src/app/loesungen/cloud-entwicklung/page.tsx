// src/app/loesungen/cloud-entwicklung/page.tsx
import type { Metadata } from 'next'
import { cookies } from 'next/headers'

import CloudHeroSection from '@/app/components/cloudentwicklung/CloudHeroSection'
import CloudIntroSection from '@/app/components/cloudentwicklung/CloudIntroSection'
import CloudRequirementsSection from '@/app/components/cloudentwicklung/CloudRequirementsSection'
import CloudUseCasesSection from '@/app/components/cloudentwicklung/CloudUseCasesSection'
import CloudStackSection from '@/app/components/cloudentwicklung/CloudStackSection'
import CloudDeliverablesSection from '@/app/components/cloudentwicklung/CloudDeliverablesSection'
import CloudProcessSection from '@/app/components/cloudentwicklung/CloudProcessSection'
import CloudQualitySection from '@/app/components/cloudentwicklung/CloudQualitySection'
import CloudGlossarySection from '@/app/components/cloudentwicklung/CloudGlossarySection'
import CloudFAQSection from '@/app/components/cloudentwicklung/CloudFAQSection'
import CloudCTASection from '@/app/components/cloudentwicklung/CloudCTASection'

type Lang = 'de' | 'en'
const LANG_COOKIE = 'mvpwerk_lang'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mvpwerk.de'
const CANONICAL_PATH = '/loesungen/cloud-entwicklung'

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

  // 2) Cookie Fallback (Next: cookies() ist async)
  const c = await cookies()
  const v = c.get(LANG_COOKIE)?.value
  return normalizeLang(v) ?? 'de'
}

function buildMeta(lang: Lang) {
  if (lang === 'en') {
    return {
      title: 'Cloud Development – Infrastructure, Platform & Scale | MVPWERK',
      description:
        'Cloud development for B2B: scalable architectures, APIs, deployments, observability, cost control, security and reliability. From MVP to production.',
      ogTitle: 'Cloud Development – Infrastructure, Platform & Scale | MVPWERK',
      ogDescription:
        'Production-grade cloud: deployments, monitoring, reliability, security and cost control — designed for real operations.',
      keywords: [
        'cloud development',
        'cloud architecture',
        'devops',
        'observability',
        'kubernetes',
        'serverless',
        'api',
        'infrastructure as code',
        'monitoring',
        'scalability',
        'security',
        'cost optimization',
      ],
      serviceName: 'Cloud Development',
      serviceType:
        'Cloud architecture, deployments, infrastructure as code, observability, security, scalability',
      locale: 'en_US',
    } as const
  }

  return {
    title: 'Cloud Entwicklung – Infrastruktur, Plattform & Skalierung | MVPWERK',
    description:
      'Cloud Entwicklung für B2B: skalierbare Architektur, Deployments, Observability, Kostenkontrolle, Security & Reliability. Von MVP bis Produktion.',
    ogTitle: 'Cloud Entwicklung – Infrastruktur, Plattform & Skalierung | MVPWERK',
    ogDescription:
      'Produktionstaugliche Cloud: Deployments, Monitoring, Reliability, Security und Kostenkontrolle – für echten Betrieb gebaut.',
    keywords: [
      'cloud entwicklung',
      'cloud architektur',
      'devops',
      'observability',
      'kubernetes',
      'serverless',
      'api',
      'infrastructure as code',
      'monitoring',
      'skalierung',
      'security',
      'kostenoptimierung',
    ],
    serviceName: 'Cloud Entwicklung',
    serviceType:
      'Cloud Architektur, Deployments, Infrastructure as Code, Observability, Security, Skalierung',
    locale: 'de_DE',
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

  return {
    metadataBase: new URL(SITE_URL),
    title: m.title,
    description: m.description,

    alternates: {
      canonical: CANONICAL_PATH,
      languages: {
        'de-DE': `${CANONICAL_PATH}?lang=de`,
        'en-US': `${CANONICAL_PATH}?lang=en`,
      },
    },

    openGraph: {
      title: m.ogTitle,
      description: m.ogDescription,
      url: CANONICAL_PATH,
      type: 'website',
      siteName: 'MVPWERK',
      locale: m.locale,
    },

    twitter: {
      card: 'summary_large_image',
      title: m.ogTitle,
      description: m.ogDescription,
    },

    robots: {
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
  const pageUrl = `${SITE_URL}${CANONICAL_PATH}`

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <CloudHeroSection lang={lang} />
      <CloudIntroSection lang={lang} />
      <CloudRequirementsSection lang={lang} />
      <CloudUseCasesSection lang={lang} />
      <CloudStackSection lang={lang} />
      <CloudDeliverablesSection lang={lang} />
      <CloudProcessSection lang={lang} />
      <CloudQualitySection lang={lang} />
      <CloudGlossarySection lang={lang} />
      <CloudFAQSection lang={lang} />
      <CloudCTASection lang={lang} />

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

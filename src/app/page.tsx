// src/app/page.tsx
import type { Metadata } from 'next'

import HeroSection from './components/startseite/Herosection'
import ReferenzSection from './components/startseite/ReferenzSection'
import LeistungenSection from './components/startseite/LeistungenSection'
import AblaufSection from './components/startseite/AblaufSection'
import TeamSection from './components/startseite/TeamSection'
import FoerderungSection from './components/startseite/FoerderungSection'
import FAQSection from './components/startseite/FaqSection'

type Lang = 'de' | 'en'

function normalizeLang(v: unknown): Lang | null {
  if (!v) return null
  const s = Array.isArray(v) ? String(v[0] ?? '') : String(v)
  const x = s.toLowerCase()
  if (x === 'de' || x.startsWith('de-')) return 'de'
  if (x === 'en' || x.startsWith('en-')) return 'en'
  return null
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mvpwerk.de'
const CANONICAL_PATH = '/'

function buildHomeMeta(lang: Lang) {
  // ✅ SEO-Fokus: "Web App Agentur" (de) & "Web App Development Agency" (en)
  if (lang === 'en') {
    return {
      title: 'Web App Development Agency – MVPWERK (Next.js, Supabase, Vercel)',
      description:
        'We build cloud-based web apps and SaaS fast: product strategy, UX, full-stack development, APIs, auth, integrations and production launch — with a clean, scalable stack.',
      ogTitle: 'Web App Development Agency – MVPWERK',
      ogDescription:
        'From idea to production: cloud web apps and SaaS — full-stack, fast, reliable (Next.js, Supabase, Vercel).',
      locale: 'en_US',
      inLanguage: 'en-US',
      keywords: [
        'web app agency',
        'web app development agency',
        'web app development',
        'build a web app',
        'saas development agency',
        'saas development',
        'cloud software development',
        'full stack development agency',
        'react development agency',
        'next js agency',
        'api development',
        'authentication',
        'supabase',
        'vercel',
        'stripe integration',
        'b2b saas development',
      ],
    } as const
  }

  return {
    title: 'Web App Agentur – MVPWERK (Next.js, Supabase, Vercel)',
    description:
      'Web App Agentur für SaaS & Unternehmen: Web Apps entwickeln lassen, Full-Stack Entwicklung (Next.js, Supabase, Vercel) – schnell, skalierbar, produktionsreif.',
    ogTitle: 'Web App Agentur – MVPWERK',
    ogDescription:
      'Web App entwickeln lassen: Strategie, UX & Full-Stack Umsetzung – schnell live mit Next.js, Supabase & Vercel.',
    locale: 'de_DE',
    inLanguage: 'de-DE',
    keywords: [
      'web app agentur',
      'webapp agentur',
      'web app entwickeln lassen',
      'web app entwicklung',
      'saas agentur',
      'saas entwickeln lassen',
      'software agentur',
      'cloud software',
      'cloudbasierte software',
      'individualsoftware entwickeln lassen',
      'full stack entwicklung',
      'next js agentur',
      'react js agentur',
      'supabase agentur',
      'vercel agentur',
      'api entwicklung',
      'authentifizierung web app',
      'stripe integration',
      'b2b web app',
    ],
  } as const
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}): Promise<Metadata> {
  const sp = await searchParams
  const lang: Lang = normalizeLang(sp?.lang) ?? 'de'
  const m = buildHomeMeta(lang)

  return {
    metadataBase: new URL(SITE_URL),

    // ✅ Title/Description sind der wichtigste SEO-Hebel
    title: m.title,
    description: m.description,

    alternates: {
      canonical: CANONICAL_PATH,
      languages: {
        'de-DE': `/?lang=de`,
        'en-US': `/?lang=en`,
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

    // ✅ Keywords: nicht mehr super-wichtig wie früher, aber schadet nicht
    keywords: [...m.keywords],
  }
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const sp = await searchParams
  const lang: Lang = normalizeLang(sp?.lang) ?? 'de'
  const m = buildHomeMeta(lang)

  const pageUrl = `${SITE_URL}/`

  // ✅ JSON-LD für bessere Einordnung (Brand + Page + Service)
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'MVPWERK',
      url: SITE_URL,
      // optional:
      // logo: `${SITE_URL}/logos/mvpwerk_logo_trans.png`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'MVPWERK',
      url: pageUrl,
      inLanguage: m.inLanguage,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: m.title,
      description: m.description,
      url: pageUrl,
      inLanguage: m.inLanguage,
      isPartOf: { '@type': 'WebSite', name: 'MVPWERK', url: SITE_URL },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name:
        lang === 'de'
          ? 'Web App Agentur – Entwicklung von SaaS & cloudbasierter Software'
          : 'Web App Development – SaaS & cloud software',
      provider: { '@type': 'Organization', name: 'MVPWERK', url: SITE_URL },
      areaServed: lang === 'de' ? 'DE' : 'Worldwide',
      serviceType:
        lang === 'de'
          ? 'Web App Entwicklung, SaaS Entwicklung, Full-Stack Entwicklung'
          : 'Web app development, SaaS development, full-stack development',
    },
  ]

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroSection lang={lang} />
      <ReferenzSection lang={lang} />
      <LeistungenSection lang={lang} />
      <AblaufSection lang={lang} />
      <TeamSection lang={lang} />
      <FoerderungSection lang={lang} />
      <FAQSection lang={lang} />
    </main>
  )
}

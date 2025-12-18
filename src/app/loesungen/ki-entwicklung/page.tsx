// src/app/loesungen/ki-entwicklung/page.tsx
import type { Metadata } from 'next'
import { cookies } from 'next/headers'

import AiHeroSection from '@/app/components/kientwicklung/AiHeroSection'
import AiIntroSection from '@/app/components/kientwicklung/AiIntroSection'
import AiRequirementsSection from '@/app/components/kientwicklung/AiRequirementsSection'
import AiUseCasesSection from '@/app/components/kientwicklung/AiUseCasesSection'
import AiStackSection from '@/app/components/kientwicklung/AiStackSection'
import AiDeliverablesSection from '@/app/components/kientwicklung/AiDeliverablesSection'
import AiProcessSection from '@/app/components/kientwicklung/AiProcessSection'
import AiQualitySection from '@/app/components/kientwicklung/AiQualitySection'
import AiGlossarySection from '@/app/components/kientwicklung/AiGlossarySection'
import AiFAQSection from '@/app/components/kientwicklung/AiFAQSection'
import AiCTASection from '@/app/components/kientwicklung/AiCTASection'

type Lang = 'de' | 'en'
const LANG_COOKIE = 'mvpwerk_lang'

/** Passe das an deine echte Route an */
const CANONICAL_PATH = '/loesungen/ki-entwicklung'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mvpwerk.de'

function normalizeLang(v: unknown): Lang | null {
  if (!v) return null
  const s = Array.isArray(v) ? String(v[0] ?? '') : String(v)
  const x = s.toLowerCase()
  if (x === 'de' || x.startsWith('de-')) return 'de'
  if (x === 'en' || x.startsWith('en-')) return 'en'
  return null
}

async function getLangFromRequest(sp: Record<string, string | string[] | undefined>): Promise<Lang> {
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
      title: 'AI Development & LLM Integration – MVPWERK',
      description:
        'AI development for B2B: LLM integration, RAG / knowledge search, agents & automation. Production-ready, measurable, secure — with UX, evals, observability & compliance.',
      ogTitle: 'AI Development & LLM Integration – MVPWERK',
      ogDescription:
        'From RAG to agents: AI features that work in production — measurable, secure, fast.',
      keywords: [
        'ai development',
        'llm integration',
        'rag',
        'retrieval augmented generation',
        'ai agents',
        'ai automation',
        'chatbot development',
        'next.js',
        'supabase',
        'vercel',
        'api integration',
        'observability',
        'evals',
      ],
      serviceName: 'AI Development',
      serviceType: 'AI development, LLM integration, RAG, agents, automation',
      locale: 'en_US',
    } as const
  }

  return {
    title: 'KI Entwicklung & LLM Integration – MVPWERK',
    description:
      'KI Entwicklung für B2B: LLM-Integration, RAG/Wissenssuche, Agenten & Automationen. Produktionsreif, messbar, sicher – mit UX, Evals, Observability & Compliance.',
    ogTitle: 'KI Entwicklung & LLM Integration – MVPWERK',
    ogDescription:
      'Von RAG bis Agenten: KI-Funktionen, die in Produktion funktionieren – messbar, sicher, schnell.',
    keywords: [
      'ki entwicklung',
      'llm integration',
      'rag',
      'wissenssuche',
      'ki agenten',
      'ki automatisierung',
      'chatbot entwicklung',
      'copilot',
      'next.js agentur',
      'supabase',
      'vercel',
      'api integration',
      'evals',
      'observability',
      'ds-gvo',
    ],
    serviceName: 'KI Entwicklung',
    serviceType: 'KI Entwicklung, LLM Integration, RAG, Agenten, Automationen',
    locale: 'de_DE',
  } as const
}

/**
 * SEO / Metadata:
 * - canonical ohne Query
 * - alternates für de/en via ?lang=
 * - OG/Twitter/Robots/Keywords
 */
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

  // Optional (für JSON-LD): “absolute” URL
  const pageUrl = `${SITE_URL}${CANONICAL_PATH}`

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <AiHeroSection lang={lang} />
      <AiIntroSection lang={lang} />
      <AiRequirementsSection lang={lang} />
      <AiUseCasesSection lang={lang} />
      <AiStackSection lang={lang} />
      <AiDeliverablesSection lang={lang} />
      <AiProcessSection lang={lang} />
      <AiQualitySection lang={lang} />
      <AiGlossarySection lang={lang} />
      <AiFAQSection lang={lang} />
      <AiCTASection lang={lang} />

      {/* JSON-LD (Service) */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: m.serviceName,
            provider: {
              '@type': 'Organization',
              name: 'MVPWERK',
              url: SITE_URL,
            },
            serviceType: m.serviceType,
            areaServed: 'DE',
            url: pageUrl,
            offers: {
              '@type': 'Offer',
              availability: 'https://schema.org/InStock',
            },
          }),
        }}
      />

      {/* OPTIONAL: FAQ JSON-LD (nur aktivieren, wenn deine AiFAQSection wirklich Q/A enthält)
          -> Wenn du willst, passe ich das auf deine echten Fragen/Antworten an.
      */}
      {/* <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: lang === 'de' ? 'Wie schnell kann ein KI-MVP live gehen?' : 'How fast can an AI MVP go live?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    lang === 'de'
                      ? 'Typisch 2–6 Wochen – abhängig von Datenlage, Integrationen und gewünschter Qualitätssicherung (Evals, Monitoring, Guardrails).'
                      : 'Typically 2–6 weeks depending on data readiness, integrations, and quality safeguards (evals, monitoring, guardrails).',
                },
              },
            ],
          }),
        }}
      /> */}
    </main>
  )
}

// src/app/loesungen/blockchain-entwicklung/page.tsx
import type { Metadata } from 'next'
import { cookies } from 'next/headers'

import BlockchainHeroSection from '@/app/components/blockchainentwicklung/BlockchainHeroSection'
import BlockchainIntroSection from '@/app/components/blockchainentwicklung/BlockchainIntroSection'
import BlockchainRequirementsSection from '@/app/components/blockchainentwicklung/BlockchainRequirementsSection'
import BlockchainUseCasesSection from '@/app/components/blockchainentwicklung/BlockchainUseCasesSection'
import BlockchainStackSection from '@/app/components/blockchainentwicklung/BlockchainStackSection'
import BlockchainDeliverablesSection from '@/app/components/blockchainentwicklung/BlockchainDeliverablesSection'
import BlockchainProcessSection from '@/app/components/blockchainentwicklung/BlockchainProcessSection'
import BlockchainQualitySection from '@/app/components/blockchainentwicklung/BlockchainQualitySection'
import BlockchainGlossarySection from '@/app/components/blockchainentwicklung/BlockchainGlossarySection'
import BlockchainFAQSection from '@/app/components/blockchainentwicklung/BlockchainFAQSection'
import BlockchainCTASection from '@/app/components/blockchainentwicklung/BlockchainCTASection'

type Lang = 'de' | 'en'
const LANG_COOKIE = 'mvpwerk_lang'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mvpwerk.de'
const CANONICAL_PATH = '/loesungen/blockchain-entwicklung'

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
  const q = normalizeLang(sp?.lang)
  if (q) return q

  const c = await cookies()
  const v = c.get(LANG_COOKIE)?.value
  return normalizeLang(v) ?? 'de'
}

function buildMeta(lang: Lang) {
  if (lang === 'en') {
    return {
      title: 'Blockchain Development – Smart Contracts & Platforms | MVPWERK',
      description:
        'Blockchain development for B2B: smart contracts, tokenization, integrations, security reviews, audits, wallets, custody flows and production-grade infrastructure.',
      ogTitle: 'Blockchain Development – Smart Contracts & Platforms | MVPWERK',
      ogDescription:
        'From smart contracts to production: secure architecture, integrations, testing, monitoring and operational readiness.',
      keywords: [
        'blockchain development',
        'smart contracts',
        'solidity',
        'tokenization',
        'web3',
        'wallet integration',
        'audit',
        'security',
        'ethereum',
        'evm',
        'on-chain',
        'off-chain',
      ],
      serviceName: 'Blockchain Development',
      serviceType:
        'Smart contracts, tokenization, blockchain integrations, security, audits, production operations',
      locale: 'en_US',
    } as const
  }

  return {
    title: 'Blockchain Entwicklung – Smart Contracts & Plattformen | MVPWERK',
    description:
      'Blockchain Entwicklung für B2B: Smart Contracts, Tokenisierung, Integrationen, Security Reviews, Audits, Wallet-Flows und produktionsreife Infrastruktur.',
    ogTitle: 'Blockchain Entwicklung – Smart Contracts & Plattformen | MVPWERK',
    ogDescription:
      'Von Smart Contracts bis Produktion: sichere Architektur, Integrationen, Tests, Monitoring und betriebsfähige Prozesse.',
    keywords: [
      'blockchain entwicklung',
      'smart contracts',
      'solidity',
      'tokenisierung',
      'web3',
      'wallet integration',
      'audit',
      'security',
      'ethereum',
      'evm',
      'on-chain',
      'off-chain',
    ],
    serviceName: 'Blockchain Entwicklung',
    serviceType:
      'Smart Contracts, Tokenisierung, Blockchain Integrationen, Security, Audits, Betrieb',
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
      <BlockchainHeroSection lang={lang} />
      <BlockchainIntroSection lang={lang} />
      <BlockchainRequirementsSection lang={lang} />
      <BlockchainUseCasesSection lang={lang} />
      <BlockchainStackSection lang={lang} />
      <BlockchainDeliverablesSection lang={lang} />
      <BlockchainProcessSection lang={lang} />
      <BlockchainQualitySection lang={lang} />
      <BlockchainGlossarySection lang={lang} />
      <BlockchainFAQSection lang={lang} />
      <BlockchainCTASection lang={lang} />

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

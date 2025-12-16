// src/app/leistungen/page.tsx
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import LeistungenClient from './LeistungenClient'

type Lang = 'de' | 'en'

function normalizeLang(v: unknown): Lang | null {
  if (!v) return null
  const s = Array.isArray(v) ? String(v[0] ?? '') : String(v)
  const x = s.toLowerCase()
  if (x === 'de' || x.startsWith('de-')) return 'de'
  if (x === 'en' || x.startsWith('en-')) return 'en'
  return null
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mvpwerk.de'

function getT(lang: Lang) {
  if (lang === 'en') {
    return {
      metaTitle: 'Services – MVPWERK',
      metaDescription:
        'All MVPWERK services: consulting, UI/UX, full-stack development (frontend/backend/API), database (Supabase/Postgres), auth (login, roles, Google OAuth), AI integrations, tracking (GTM/GA4/Google Ads), Search Console, email automations, deployment (Vercel) and maintenance.',
      ogDescription:
        'Consulting, UI/UX, full-stack, AI integration, tracking (GTM/GA4), auth, deployment – structured by phases.',
      twitterDescription:
        'Consulting, UI/UX, full-stack, AI, tracking (GTM/GA4), auth, deployment – everything in phases.',
      jsonLdName: 'Services – MVPWERK',
      jsonLdDesc:
        'MVPWERK services: consulting, UI/UX, full-stack development, auth, AI integrations, tracking, SEO and deployment.',
      badge: 'Services · structured by phases',
      h1: 'Everything modern software needs – in one place.',
      intro:
        'From scope & UI/UX to full-stack, AI, auth, tracking & go-live – built so you can pick exactly the modules you need without a text wall.',
      cta: 'Request a project',
      ctaSub: 'No obligation · reply usually same day',
      shortTitle: 'Quick overview',
      shortSub: 'Below: filter + search (e.g. AI, OAuth, GTM, GA4, API)',
      rightHint: 'Product feel: clean, fast, hand-off ready.',
      perfTitle: 'Performance you can measure',
      perfSub: 'Core Web Vitals & Lighthouse – 10 second comparison.',
      analyzeUs: 'Analyze MVPWERK',
      analyzeComp: 'Analyze competitor ↗',
      newTab: 'Opens in new tab',
      overview: [
        {
          title: 'Software live in 4–8 weeks',
          desc: 'A usable version fast – ready to demo, sell and test.',
        },
        {
          title: 'UI/UX that builds trust',
          desc: 'Clear UI, clean guidance and a “finished product” feel.',
        },
        {
          title: 'Development: frontend, backend & integrations',
          desc: 'Full logic: database, APIs and connections to existing systems.',
        },
        {
          title: 'SaaS, web app or PWA',
          desc: 'Depending on the goal: SaaS product, web app or PWA (mobile-ready).',
        },
        {
          title: 'Quality assurance & testing',
          desc: 'Flows, permissions, edge cases – stable, not “crashing at first customer”.',
        },
        {
          title: 'Launch, operations & iteration',
          desc: 'Go-live, updates, monitoring & support – so the software won’t stall.',
        },
      ],
    }
  }

  // DE
  return {
    metaTitle: 'Leistungen – MVPWERK',
    metaDescription:
      'Alle Leistungen von MVPWERK: Beratung, UI/UX, Full-Stack Entwicklung (Frontend/Backend/API), Datenbank (Supabase/Postgres), Auth (Login, Rollen, Google OAuth), KI-Integrationen, Tracking (GTM/GA4/Google Ads), Search Console, E-Mail-Automationen, Deployment (Vercel) und Wartung.',
    ogDescription:
      'Beratung, UI/UX, Full-Stack, KI-Integration, Tracking (GTM/GA4), Auth, Deployment – strukturiert nach Phasen.',
    twitterDescription:
      'Beratung, UI/UX, Full-Stack, KI, Tracking (GTM/GA4), Auth, Deployment – alles in Phasen.',
    jsonLdName: 'Leistungen – MVPWERK',
    jsonLdDesc:
      'Leistungen von MVPWERK: Beratung, UI/UX, Full-Stack Entwicklung, Auth, KI-Integrationen, Tracking, SEO und Deployment.',
    badge: 'Leistungen · strukturiert nach Phasen',
    h1: 'Alles drin, was moderne Software braucht.',
    intro:
      'Von Scope & UI/UX über Full-Stack bis KI, Auth, Tracking & Go-Live – so aufgebaut, dass Sie sich einzelne Bausteine gezielt rauspicken können, ohne Text-Wand.',
    cta: 'Projekt anfragen',
    ctaSub: 'Unverbindlich · Antwort meist am selben Tag',
    shortTitle: 'Kurz-Überblick',
    shortSub:
      'Weiter unten: Filter + Suche (z. B. KI, OAuth, GTM, GA4, API)',
    rightHint: 'Produktgefühl: clean, schnell, übergabefähig.',
    perfTitle: 'Performance, die man messen kann',
    perfSub: 'Core Web Vitals & Lighthouse – 10 Sekunden Vergleich.',
    analyzeUs: 'MVPWERK analysieren',
    analyzeComp: 'Konkurrenz analysieren ↗',
    newTab: 'Neuer Tab',
    overview: [
      {
        title: 'Software in 4–8 Wochen live',
        desc: 'Schnell eine nutzbare Version, die Sie vorführen, verkaufen und testen können.',
      },
      {
        title: 'UI/UX-Design, das Vertrauen erzeugt',
        desc: 'Klare Oberfläche, saubere Nutzerführung und ein „fertiges“ Produktgefühl.',
      },
      {
        title: 'Entwicklung: Frontend, Backend & Integrationen',
        desc: 'Komplette Logik: Datenbank, Schnittstellen, Anbindungen an bestehende Systeme.',
      },
      {
        title: 'SaaS, Web App oder PWA',
        desc: 'Je nach Ziel: Web App, SaaS-Produkt oder Progressive Web App (mobil nutzbar).',
      },
      {
        title: 'Qualitätssicherung & Testing',
        desc: 'Flows, Rechte, Edge-Cases – stabil, nicht „crasht beim ersten Kunden“.'
      },
      {
        title: 'Launch, Betrieb & Weiterentwicklung',
        desc: 'Go-live, Updates, Monitoring & Support – damit die Software nicht „stehen bleibt“.'
      },
    ],
  }
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}): Promise<Metadata> {
  const sp = await searchParams
  const lang = normalizeLang(sp?.lang) ?? 'de'
  const t = getT(lang)

  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: { canonical: '/leistungen' },
    openGraph: {
      type: 'website',
      url: `${SITE_URL}/leistungen`,
      title: t.metaTitle,
      description: t.ogDescription,
      images: [
        {
          // Lege diese Datei an (1200x630): /public/og/leistungen.png
          url: `${SITE_URL}/og/leistungen.png`,
          width: 1200,
          height: 630,
          alt: t.metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.metaTitle,
      description: t.twitterDescription,
      images: [`${SITE_URL}/og/leistungen.png`],
    },
    robots: { index: true, follow: true },
  }
}

function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={[
        'relative overflow-hidden rounded-[1.8rem] border border-slate-900/10 bg-white/70 shadow-[0_22px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl',
        className,
      ].join(' ')}
    >
      {children}
      <div className="pointer-events-none absolute inset-0 rounded-[1.8rem] ring-1 ring-inset ring-white/50" />
    </div>
  )
}

export default async function LeistungenPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const sp = await searchParams
  const lang = normalizeLang(sp?.lang) ?? 'de'
  const t = getT(lang)

  const hrefWithLang = (href: string) => {
    const params = new URLSearchParams()
    if (lang) params.set('lang', lang)
    const qs = params.toString()
    return qs ? `${href}?${qs}` : href
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: t.jsonLdName,
    url: `${SITE_URL}/leistungen`,
    description: t.jsonLdDesc,
    isPartOf: { '@type': 'WebSite', name: 'MVPWERK', url: SITE_URL },
    inLanguage: lang,
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-slate-900 dark:bg-white dark:text-slate-900">
      {/* HARD FIX gegen „schwarze“ Layouts */}
      <div className="pointer-events-none absolute inset-0 bg-white" />

      {/* Background wie Hero */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-slate-900/10 blur-3xl md:h-[720px] md:w-[720px]" />
        <div className="absolute -top-16 right-[-120px] h-[420px] w-[420px] rounded-full bg-slate-900/8 blur-3xl md:h-[560px] md:w-[560px]" />

        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_72%)]" />

        <div className="absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_70%)]">
          <div className="mvpwerk-leistungen-sheen absolute -left-1/2 top-0 h-full w-[200%]" />
        </div>
      </div>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header className="relative mx-auto w-full max-w-[1400px] px-4 pt-10 sm:px-6 sm:pt-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
          {t.badge}
        </div>

        <h1 className="mt-4 text-[28px] font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-[38px] md:text-[44px]">
          {t.h1}
        </h1>

        <p className="mt-3 max-w-[980px] text-[14px] leading-relaxed text-slate-700 sm:text-[15px]">{t.intro}</p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href={hrefWithLang('/kontakt')}
            className="group inline-flex h-12 w-full items-center justify-center rounded-2xl bg-slate-900 px-6 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(15,23,42,0.22)] transition hover:translate-y-[-1px] hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20 sm:w-auto"
          >
            {t.cta}
            <span className="ml-2 inline-block transition group-hover:translate-x-0.5">→</span>
          </Link>
          <div className="text-[11px] text-slate-600">{t.ctaSub}</div>
        </div>
      </header>

      {/* Overview Grid */}
      <section className="relative mx-auto w-full max-w-[1400px] px-4 pt-10 sm:px-6">
        <Card className="p-5 sm:p-6">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="mvpwerk-leist-overview-sheen absolute -left-1/2 top-0 h-full w-[200%]" />
          </div>

          <div className="relative">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="text-[12px] font-semibold text-slate-900">{t.shortTitle}</div>
                <div className="mt-1 text-[11px] text-slate-600">{t.shortSub}</div>
              </div>
              <div className="text-[11px] text-slate-600">{t.rightHint}</div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {t.overview.map((s) => (
                <div
                  key={s.title}
                  className="rounded-[1.35rem] border border-slate-900/10 bg-white/70 p-5 shadow-sm backdrop-blur"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-900/10 bg-white/80 text-slate-900/70 shadow-sm">
                      {/* Icon bleibt wie vorher, nur “neutral” */}
                      <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 7h10M7 12h10M7 17h7" strokeLinecap="round" />
                        <path
                          d="M6 3h12a2 2 0 0 1 2 2v14H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
                          opacity="0.45"
                        />
                      </svg>
                    </span>
                    <div className="min-w-0">
                      <div className="text-[13px] font-semibold text-slate-900">{s.title}</div>
                      <div className="mt-1 text-[12px] leading-relaxed text-slate-600">{s.desc}</div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Performance Card */}
              <div className="rounded-[1.35rem] border border-slate-900/10 bg-white/70 p-5 shadow-sm backdrop-blur lg:col-span-3">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-900/10 bg-white/80 text-slate-900/70 shadow-sm">
                      <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 19V5" strokeLinecap="round" />
                        <path d="M4 19h16" strokeLinecap="round" />
                        <path d="M8 15v-5" strokeLinecap="round" />
                        <path d="M12 15v-8" strokeLinecap="round" />
                        <path d="M16 15v-10" strokeLinecap="round" />
                      </svg>
                    </span>
                    <div className="min-w-0">
                      <div className="text-[13px] font-semibold text-slate-900">{t.perfTitle}</div>
                      <div className="mt-1 text-[12px] leading-relaxed text-slate-600">{t.perfSub}</div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <a
                      href="https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwww.mvpwerk.de%2F"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex h-11 items-center justify-center rounded-2xl bg-slate-900 px-5 text-[12px] font-semibold text-white shadow-[0_18px_55px_rgba(15,23,42,0.18)] transition hover:translate-y-[-1px] hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
                    >
                      {t.analyzeUs}
                      <span className="ml-2 inline-block transition group-hover:translate-x-0.5">↗</span>
                    </a>

                    <a
                      href="https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwww.appleute.de%2F"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/70 px-5 text-[12px] font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                    >
                      {t.analyzeComp}
                    </a>

                    <div className="text-[11px] text-slate-600 sm:ml-2">{t.newTab}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 rounded-[1.8rem] ring-1 ring-inset ring-white/50" />
        </Card>
      </section>

      {/* Full Leistungen (Client) */}
      <section className="relative mx-auto w-full max-w-[1400px] px-4 pb-16 pt-8 sm:px-6 sm:pb-20">
        <LeistungenClient lang={lang} />
      </section>

      <style>{`
        .mvpwerk-leistungen-sheen,
        .mvpwerk-leist-overview-sheen{
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(15,23,42,0.05) 35%,
            rgba(15,23,42,0.10) 50%,
            rgba(15,23,42,0.05) 65%,
            transparent 100%
          );
          transform: translateX(-35%);
          filter: blur(0.5px);
          will-change: transform, opacity;
        }
        .mvpwerk-leistungen-sheen{ animation: lSheen 10s ease-in-out infinite; opacity: .55; }
        .mvpwerk-leist-overview-sheen{ animation: lSheen 9s ease-in-out infinite; opacity: .55; }

        @keyframes lSheen{
          0%{ transform: translateX(-35%); opacity:0.22; }
          50%{ transform: translateX(0%); opacity:0.48; }
          100%{ transform: translateX(35%); opacity:0.22; }
        }
        @media (prefers-reduced-motion: reduce){
          .mvpwerk-leistungen-sheen,
          .mvpwerk-leist-overview-sheen{
            animation:none !important;
            transform:none !important;
          }
        }
      `}</style>
    </main>
  )
}

// src/app/leistungen/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import LeistungenClient from './LeistungenClient'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mvpwerk.de'

export const metadata: Metadata = {
  title: 'Leistungen – MVPWERK',
  description:
    'Alle Leistungen von MVPWERK: Beratung, UI/UX, Full-Stack Entwicklung (Frontend/Backend/API), Datenbank (Supabase/Postgres), Auth (Login, Rollen, Google OAuth), KI-Integrationen, Tracking (GTM/GA4/Google Ads), Search Console, E-Mail-Automationen, Deployment (Vercel) und Wartung.',
  alternates: { canonical: '/leistungen' },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/leistungen`,
    title: 'Leistungen – MVPWERK',
    description:
      'Beratung, UI/UX, Full-Stack, KI-Integration, Tracking (GTM/GA4), Auth, Deployment – strukturiert nach Phasen.',
    images: [
      {
        // Lege diese Datei an (1200x630): /public/og/leistungen.png
        url: `${SITE_URL}/og/leistungen.png`,
        width: 1200,
        height: 630,
        alt: 'Leistungen – MVPWERK',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leistungen – MVPWERK',
    description:
      'Beratung, UI/UX, Full-Stack, KI, Tracking (GTM/GA4), Auth, Deployment – alles in Phasen.',
    images: [`${SITE_URL}/og/leistungen.png`],
  },
  robots: { index: true, follow: true },
}

const OVERVIEW = [
  {
    title: 'Software in 4–8 Wochen live',
    desc: 'Schnell eine nutzbare Version, die Sie vorführen, verkaufen und testen können.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 8v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 3a9 9 0 1 0 9 9" opacity="0.55" />
      </svg>
    ),
  },
  {
    title: 'UI/UX-Design, das Vertrauen erzeugt',
    desc: 'Klare Oberfläche, saubere Nutzerführung und ein „fertiges“ Produktgefühl.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 6h16v12H4z" />
        <path d="M7 9h6" strokeLinecap="round" />
        <path d="M7 13h10" strokeLinecap="round" opacity="0.65" />
      </svg>
    ),
  },
  {
    title: 'Entwicklung: Frontend, Backend & Integrationen',
    desc: 'Komplette Logik: Datenbank, Schnittstellen, Anbindungen an bestehende Systeme.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 9l-3 3 3 3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 9l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 7l-2 10" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
      </svg>
    ),
  },
  {
    title: 'SaaS, Web App oder PWA',
    desc: 'Je nach Ziel: Web App, SaaS-Produkt oder Progressive Web App (mobil nutzbar).',
    icon: (
      <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M7 7h10M7 12h10M7 17h7" strokeLinecap="round" />
        <path d="M6 3h12a2 2 0 0 1 2 2v14H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" opacity="0.45" />
      </svg>
    ),
  },
  {
    title: 'Qualitätssicherung & Testing',
    desc: 'Flows, Rechte, Edge-Cases – stabil, nicht „crasht beim ersten Kunden“.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3l8 4v6c0 5-3 8-8 8s-8-3-8-8V7l8-4z" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Launch, Betrieb & Weiterentwicklung',
    desc: 'Go-live, Updates, Monitoring & Support – damit die Software nicht „stehen bleibt“.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="2">
        <path
          d="M14 4c3.5 0 6 2.5 6 6 0 2.5-1.5 5.5-4.5 8.5l-4 4c-2-1-3.5-2.5-4.5-4.5l4-4C8.5 9.5 11.5 8 14 8V4z"
          opacity="0.55"
        />
        <path d="M14 4c3.5 0 6 2.5 6 6 0 2.5-1.5 5.5-4.5 8.5l-4 4c-2-1-3.5-2.5-4.5-4.5l4-4C8.5 9.5 11.5 8 14 8V4z" />
        <path d="M10 14l-3 1 1-3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 9h.01" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
] as const

function Card({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
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

export default function LeistungenPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Leistungen – MVPWERK',
    url: `${SITE_URL}/leistungen`,
    description:
      'Leistungen von MVPWERK: Beratung, UI/UX, Full-Stack Entwicklung, Auth, KI-Integrationen, Tracking, SEO und Deployment.',
    isPartOf: { '@type': 'WebSite', name: 'MVPWERK', url: SITE_URL },
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
      <header className="relative mx-auto w-full max-w-[1200px] px-4 pt-10 sm:px-6 sm:pt-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
          Leistungen · strukturiert nach Phasen
        </div>

        <h1 className="mt-4 text-[28px] font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-[38px] md:text-[44px]">
          Alles drin, was moderne Software braucht.
        </h1>

        <p className="mt-3 max-w-[980px] text-[14px] leading-relaxed text-slate-700 sm:text-[15px]">
          Von Scope &amp; UI/UX über Full-Stack bis KI, Auth, Tracking &amp; Go-Live – so aufgebaut, dass Sie sich einzelne Bausteine
          gezielt rauspicken können, ohne Text-Wand.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/kontakt"
            className="group inline-flex h-12 w-full items-center justify-center rounded-2xl bg-slate-900 px-6 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(15,23,42,0.22)] transition hover:translate-y-[-1px] hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20 sm:w-auto"
          >
            Projekt anfragen
            <span className="ml-2 inline-block transition group-hover:translate-x-0.5">→</span>
          </Link>
          <div className="text-[11px] text-slate-600">Unverbindlich · Antwort meist am selben Tag</div>
        </div>
      </header>

      {/* Overview Grid (aus deiner LeistungenSection) */}
      <section className="relative mx-auto w-full max-w-[1200px] px-4 pt-10 sm:px-6">
        <Card className="p-5 sm:p-6">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="mvpwerk-leist-overview-sheen absolute -left-1/2 top-0 h-full w-[200%]" />
          </div>

          <div className="relative">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="text-[12px] font-semibold text-slate-900">Kurz-Überblick</div>
                <div className="mt-1 text-[11px] text-slate-600">
                  Weiter unten: Filter + Suche (z. B. <span className="font-medium text-slate-900">KI</span>,{' '}
                  <span className="font-medium text-slate-900">OAuth</span>,{' '}
                  <span className="font-medium text-slate-900">GTM</span>,{' '}
                  <span className="font-medium text-slate-900">GA4</span>,{' '}
                  <span className="font-medium text-slate-900">API</span>)
                </div>
              </div>
              <div className="text-[11px] text-slate-600">Produktgefühl: clean, schnell, übergabefähig.</div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {OVERVIEW.map((s) => (
                <div key={s.title} className="rounded-[1.35rem] border border-slate-900/10 bg-white/70 p-5 shadow-sm backdrop-blur">
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-900/10 bg-white/80 text-slate-900/70 shadow-sm">
                      {s.icon}
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
                      <div className="text-[13px] font-semibold text-slate-900">Performance, die man messen kann</div>
                      <div className="mt-1 text-[12px] leading-relaxed text-slate-600">
                        Core Web Vitals &amp; Lighthouse – 10 Sekunden Vergleich.
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <a
                      href="https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwww.mvpwerk.de%2F"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex h-11 items-center justify-center rounded-2xl bg-slate-900 px-5 text-[12px] font-semibold text-white shadow-[0_18px_55px_rgba(15,23,42,0.18)] transition hover:translate-y-[-1px] hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
                    >
                      MVPWERK analysieren
                      <span className="ml-2 inline-block transition group-hover:translate-x-0.5">↗</span>
                    </a>

                    <a
                      href="https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwww.appleute.de%2F"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/70 px-5 text-[12px] font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                    >
                      Konkurrenz analysieren ↗
                    </a>

                    <div className="text-[11px] text-slate-600 sm:ml-2">Neuer Tab</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 rounded-[1.8rem] ring-1 ring-inset ring-white/50" />
        </Card>
      </section>

      {/* Full Leistungen (dein Client) */}
      <section className="relative mx-auto w-full max-w-[1200px] px-4 pb-16 pt-8 sm:px-6 sm:pb-20">
        <LeistungenClient />
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

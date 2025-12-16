// src/app/components/startseite/LeistungenSection.tsx
'use client'

import Link from 'next/link'
import { useMemo } from 'react'
import { useSearchParams } from 'next/navigation'

type Lang = 'de' | 'en'

const SERVICES = [
  {
    title: {
      de: 'Software in 4–8 Wochen live',
      en: 'Software live in 4–8 weeks',
    },
    desc: {
      de: 'Sie bekommen schnell eine nutzbare Version, die Sie vorführen, verkaufen und testen können.',
      en: 'You get a usable version fast — ready to demo, sell, and test.',
    },
    icon: (
      <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 8v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 3a9 9 0 1 0 9 9" opacity="0.55" />
      </svg>
    ),
  },
  {
    title: {
      de: 'UI/UX-Design, das Vertrauen erzeugt',
      en: 'UI/UX design that builds trust',
    },
    desc: {
      de: 'Klare Oberfläche, saubere Nutzerführung und ein „fertiges“ Produktgefühl – nicht Agentur-Output.',
      en: 'Clear UI, clean flows, and a “finished” product feel — not typical agency output.',
    },
    icon: (
      <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 6h16v12H4z" />
        <path d="M7 9h6" strokeLinecap="round" />
        <path d="M7 13h10" strokeLinecap="round" opacity="0.65" />
      </svg>
    ),
  },
  {
    title: {
      de: 'Entwicklung: Frontend, Backend & Integrationen',
      en: 'Development: frontend, backend & integrations',
    },
    desc: {
      de: 'Wir bauen die komplette Logik: Datenbank & Struktur, Schnittstellen, Anbindungen an bestehende Systeme.',
      en: 'We build the full logic: database & structure, APIs, and connections to existing systems.',
    },
    icon: (
      <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 9l-3 3 3 3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 9l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 7l-2 10" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
      </svg>
    ),
  },
  {
    title: {
      de: 'SaaS, Web App oder PWA',
      en: 'SaaS, web app or PWA',
    },
    desc: {
      de: 'Je nach Ziel: klassische Web App, SaaS-Produkt oder Progressive Web App (auch mobil nutzbar).',
      en: 'Depending on your goal: web app, SaaS product, or Progressive Web App (mobile-friendly).',
    },
    icon: (
      <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M7 7h10M7 12h10M7 17h7" strokeLinecap="round" />
        <path d="M6 3h12a2 2 0 0 1 2 2v14H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" opacity="0.45" />
      </svg>
    ),
  },
  {
    title: {
      de: 'Qualitätssicherung & Testing',
      en: 'Quality assurance & testing',
    },
    desc: {
      de: 'Wir testen Flows, Rechte, Edge-Cases – damit es stabil läuft und nicht beim ersten Kunden crasht.',
      en: 'We test flows, permissions, and edge cases — so it stays stable in real customer usage.',
    },
    icon: (
      <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3l8 4v6c0 5-3 8-8 8s-8-3-8-8V7l8-4z" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: {
      de: 'Launch, Betrieb & Weiterentwicklung',
      en: 'Launch, operations & continuous improvement',
    },
    desc: {
      de: 'Go-live, Updates, Monitoring & Support – damit die Software nicht „stehen bleibt“.',
      en: 'Go-live, updates, monitoring & support — so the product keeps moving forward.',
    },
    icon: (
      // BUGFREI: simple Rocket Icon
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

export default function LeistungenSection({ lang }: { lang: Lang }) {
  const searchParams = useSearchParams()

  const t = useMemo(() => {
    return {
      de: {
        pill: 'Leistungen',
        h2: 'In wenigen Wochen zur cloudbasierten Software, die fertig ist.',
        p: 'Planung, Design, Entwicklung, Launch – Sie bekommen eine Lösung, die Sie sofort zeigen, testen und verkaufen können.',
        perfTitle: 'Performance, die man messen kann',
        perfDesc: 'Core Web Vitals & Lighthouse – vergleichen Sie live in 10 Sekunden.',
        perfCta1: 'MVPWERK analysieren',
        perfCta2: 'Konkurrenz analysieren ↗',
        perfNote: 'Neuer Tab',
        ctaAll: 'Alle Leistungen ansehen',
        ctaContact: 'Kontakt aufnehmen',
      },
      en: {
        pill: 'Services',
        h2: 'A cloud product that feels finished — in just a few weeks.',
        p: 'Planning, design, development, launch — you get a solution you can demo, test, and sell right away.',
        perfTitle: 'Performance you can measure',
        perfDesc: 'Core Web Vitals & Lighthouse — compare live in 10 seconds.',
        perfCta1: 'Analyze MVPWERK',
        perfCta2: 'Analyze competitor ↗',
        perfNote: 'New tab',
        ctaAll: 'View all services',
        ctaContact: 'Get in touch',
      },
    }[lang]
  }, [lang])

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-20">
      {/* ruhiger Background */}
<div className="pointer-events-none absolute inset-0 bg-white" />

      <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-[900px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
            {t.pill}
          </div>

          <h2 className="mt-4 text-[28px] font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-[38px] md:text-[44px]">
            {t.h2}
          </h2>

          <p className="mt-3 text-[14px] leading-relaxed text-slate-700 sm:text-[15px]">
            {t.p}
          </p>
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.title.de}
              className="rounded-[1.35rem] border border-slate-900/10 bg-white/70 p-5 shadow-sm backdrop-blur"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-900/10 bg-white/80 text-slate-900/70 shadow-sm">
                  {s.icon}
                </span>

                <div className="min-w-0">
                  <div className="text-[13px] font-semibold text-slate-900">{s.title[lang]}</div>
                  <div className="mt-1 text-[12px] leading-relaxed text-slate-600">{s.desc[lang]}</div>
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
                  <div className="mt-1 text-[12px] leading-relaxed text-slate-600">
                    {t.perfDesc}
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
                  {t.perfCta1}
                  <span className="ml-2 inline-block transition group-hover:translate-x-0.5">↗</span>
                </a>

                <a
                  href="https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwww.appleute.de%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/70 px-5 text-[12px] font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                >
                  {t.perfCta2}
                </a>

                <div className="text-[11px] text-slate-600 sm:ml-2">{t.perfNote}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/leistungen"
            className="inline-flex h-12 w-full items-center justify-center rounded-2xl border border-slate-900/10 bg-white/70 px-6 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10 sm:w-auto"
          >
            {t.ctaAll}
          </Link>

          <Link
            href="/kontakt"
            className="group inline-flex h-12 w-full items-center justify-center rounded-2xl bg-slate-900 px-6 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(15,23,42,0.22)] transition hover:translate-y-[-1px] hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20 sm:w-auto"
          >
            {t.ctaContact}
            <span className="ml-2 inline-block transition group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

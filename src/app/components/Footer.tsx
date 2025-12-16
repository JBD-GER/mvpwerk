// src/app/components/Footer.tsx
'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import { useMemo } from 'react'
import { useSearchParams } from 'next/navigation'

type Lang = 'de' | 'en'
export const dynamic = 'force-dynamic'
export const revalidate = 0

function FooterListLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-[13px] text-slate-700 transition hover:text-slate-900"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-slate-900/25 transition group-hover:bg-slate-900/45" />
      <span className="underline decoration-slate-900/0 underline-offset-4 transition group-hover:decoration-slate-900/15">
        {children}
      </span>
    </Link>
  )
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[11px] text-slate-700 shadow-sm backdrop-blur">
      {children}
    </span>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  const searchParams = useSearchParams()
  const lang = ((searchParams?.get('lang') as Lang) || 'de') satisfies Lang

  const t = useMemo(() => {
    return {
      de: {
        pill: 'MVPWERK · Made in Germany',
        title: 'MVP Agentur für SaaS & Web Apps',
        copy:
          'Wir bauen cloudbasierte MVPs, SaaS und Web Apps, die sich nicht nach „Prototyp“ anfühlen:' +
          ' sauber implementiert, schnell live, technisch stabil – und so vorbereitet, dass Marketing,' +
          ' Tracking und Sales direkt loslegen können.',
        whatTitle: 'Was Sie bekommen',
        li1a: 'End-to-End Flow statt Screens: ',
        li1b: 'Login → Dashboard → API → Datenbank',
        li2a: 'Saubere Basis für Skalierung: ',
        li2b: 'RLS, Rollen, Storage, Deploy',
        li3a: 'Kampagnen-ready: ',
        li3b: 'Analytics, Events, SEO',
        li3c: ' (wenn gewünscht)',

        navTitle: 'Navigation',
        navHome: 'Startseite',
        navServices: 'Leistungen',
        navFunding: 'Förderung',
        navContact: 'Kontakt',
        navNote:
          'Sie wollen schnell prüfen, ob MVPWERK passt? Schreiben Sie kurz 2–3 Sätze zu Ziel, Timeline' +
          ' und Budget – wir antworten meistens am selben Tag.',

        legalTitle: 'Rechtliches',
        legalImprint: 'Impressum',
        legalPrivacy: 'Datenschutz',
        legalTerms: 'AGB',

        cta: 'Kontakt aufnehmen',
        ctaNote: 'Am besten direkt mit: Branche, grobes Feature-Set, Wunsch-Termin für den Launch.',

        bottom: 'Alle Rechte vorbehalten.',
      },
      en: {
        pill: 'MVPWERK · Made in Germany',
        title: 'MVP Agency for SaaS &amp; Web Apps',
        copy:
          'We build cloud-based MVPs, SaaS, and web apps that don’t feel like a “prototype”:' +
          ' cleanly implemented, live fast, technically stable — and set up so marketing,' +
          ' tracking, and sales can start right away.',
        whatTitle: 'What you get',
        li1a: 'End-to-end flow instead of screens: ',
        li1b: 'Login → Dashboard → API → Database',
        li2a: 'A clean foundation for scaling: ',
        li2b: 'RLS, roles, storage, deploy',
        li3a: 'Campaign-ready: ',
        li3b: 'Analytics, events, SEO',
        li3c: ' (optional)',

        navTitle: 'Navigation',
        navHome: 'Home',
        navServices: 'Services',
        navFunding: 'Funding',
        navContact: 'Contact',
        navNote:
          'Want to quickly check if MVPWERK is a fit? Send 2–3 lines about your goal, timeline' +
          ' and budget — we usually reply the same day.',

        legalTitle: 'Legal',
        legalImprint: 'Imprint',
        legalPrivacy: 'Privacy',
        legalTerms: 'Terms',

        cta: 'Get in touch',
        ctaNote: 'Best with: industry, rough feature set, desired launch date.',

        bottom: 'All rights reserved.',
      },
    }[lang]
  }, [lang])

  return (
    <footer className="relative overflow-hidden border-t border-slate-900/10 bg-white">
      {/* soft background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-slate-900/6 blur-3xl md:h-[760px] md:w-[760px]" />
        <div className="absolute -bottom-56 right-[-180px] h-[520px] w-[520px] rounded-full bg-slate-900/5 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-4 py-10 sm:px-6 sm:py-12">
        <div className="rounded-[28px] border border-slate-900/10 bg-white/60 shadow-sm backdrop-blur-xl">
          {/* Top content */}
          <div className="grid gap-10 p-6 sm:p-8 md:grid-cols-12 md:gap-8">
            {/* Brand + copy */}
            <div className="md:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
                {t.pill}
              </div>

              <h3 className="mt-4 text-[18px] font-semibold tracking-tight text-slate-900">
                {t.title}
              </h3>

              <p className="mt-2 max-w-[620px] text-[13px] leading-relaxed text-slate-700">
                {t.copy}
              </p>

              {/* “Was Sie bekommen” */}
              <div className="mt-5 rounded-[22px] border border-slate-900/10 bg-white/70 p-5 shadow-sm backdrop-blur">
                <div className="text-[12px] font-semibold text-slate-900">{t.whatTitle}</div>
                <ul className="mt-3 space-y-2 text-[13px] text-slate-700">
                  <li className="flex gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900/35" />
                    <span>
                      {t.li1a}<span className="font-medium text-slate-900">{t.li1b}</span>
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900/35" />
                    <span>
                      {t.li2a}<span className="font-medium text-slate-900">{t.li2b}</span>
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900/35" />
                    <span>
                      {t.li3a}<span className="font-medium text-slate-900">{t.li3b}</span>{t.li3c}
                    </span>
                  </li>
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Chip>Next.js</Chip>
                  <Chip>React</Chip>
                  <Chip>Supabase</Chip>
                  <Chip>Vercel</Chip>
                </div>
              </div>
            </div>

            {/* Navigation (untereinander, aligned) */}
            <div className="md:col-span-3">
              <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-600">
                {t.navTitle}
              </div>

              <div className="mt-4 flex flex-col items-start gap-2">
                <FooterListLink href="/">{t.navHome}</FooterListLink>
                <FooterListLink href="/leistungen">{t.navServices}</FooterListLink>
                <FooterListLink href="/foerderung-checker">{t.navFunding}</FooterListLink>
                <FooterListLink href="/kontakt">{t.navContact}</FooterListLink>
              </div>

              <div className="mt-6 text-[12px] leading-relaxed text-slate-600">
                {t.navNote}
              </div>
            </div>

            {/* Legal + CTA button */}
            <div className="md:col-span-3">
              <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-600">
                {t.legalTitle}
              </div>

              <div className="mt-4 flex flex-col items-start gap-2">
                <FooterListLink href="/impressum">{t.legalImprint}</FooterListLink>
                <FooterListLink href="/datenschutz">{t.legalPrivacy}</FooterListLink>
                <FooterListLink href="/agb">{t.legalTerms}</FooterListLink>
              </div>

              {/* Kontakt CTA (ohne Box) */}
              <div className="mt-7">
                <Link
                  href="/kontakt"
                  className="inline-flex h-10 w-full items-center justify-center rounded-2xl border border-slate-900/10 bg-white/70 px-4 text-[12px] font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                >
                  {t.cta}
                </Link>
                <div className="mt-3 text-[12px] leading-relaxed text-slate-600">
                  {t.ctaNote}
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-slate-900/10" />

          {/* Bottom bar */}
          <div className="flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div className="text-[11px] text-slate-600">
              © {year} <span className="font-medium text-slate-900">MVPWERK</span>. {t.bottom}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/impressum"
                className="text-[11px] text-slate-600 underline decoration-slate-900/15 underline-offset-4 hover:text-slate-900"
              >
                {t.legalImprint}
              </Link>
              <Link
                href="/datenschutz"
                className="text-[11px] text-slate-600 underline decoration-slate-900/15 underline-offset-4 hover:text-slate-900"
              >
                {t.legalPrivacy}
              </Link>
              <Link
                href="/agb"
                className="text-[11px] text-slate-600 underline decoration-slate-900/15 underline-offset-4 hover:text-slate-900"
              >
                {t.legalTerms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

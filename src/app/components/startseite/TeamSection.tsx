// src/app/components/startseite/TeamSection.tsx
'use client'

import Image from 'next/image'
import { useMemo } from 'react'
import { useSearchParams } from 'next/navigation'

type Lang = 'de' | 'en'
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function TeamSection({ lang }: { lang: Lang }) {
  const searchParams = useSearchParams()

  const t = useMemo(() => {
    return {
      de: {
        pill: 'Team MVPWERK',
        h2: 'Nicht „Agentur-Output“ – sondern Software, die man wirklich nutzt.',
        p1a: 'Wir bauen MVPs, die sich ',
        p1b: 'wie ein fertiges Produkt',
        p1c:
          ' anfühlen: nicht nur hübsche Screens, sondern ',
        p1d: 'vollwertige Software',
        p1e:
          ', die Sie produktiv einsetzen können – stabil, sauber gebaut und jederzeit ausbaubar.',
        p2a:
          'Der Unterschied ist simpel: Wir liefern nicht „irgendwas, das man mal zeigen kann“, sondern eine Basis, die ',
        p2b: 'im Alltag funktioniert',
        p2c: ' – und in ',
        p2d: 'Demo, Pitch und Kampagne',
        p2e:
          ' sofort Vertrauen erzeugt. Genau deshalb wirkt es wie ein ',
        p2f: 'Eyecatcher',
        p2g: ', nicht wie ein Prototyp.',
        reasons: [
          { t: 'Eine nutzbare Softwarelösung', s: 'Login, Rollen/Rechte, Datenmodell, UI-Logik – nicht nur Klick-Dummys.' },
          { t: 'Technisch sauber & übergabefähig', s: 'Strukturiert, wartbar, dokumentierbar – Code & Ownership bleiben bei Ihnen.' },
          { t: 'Schnelle Iterationen', s: 'Kurze Feedback-Loops, klare Entscheidungen – sichtbarer Fortschritt jede Woche.' },
          { t: 'Ready für Wachstum', s: 'Basis so gebaut, dass Features, Rollen, Daten und Prozesse sauber mitwachsen.' },
        ],
        focus: 'Fokus: Produkt-Qualität · saubere Übergabe · schneller Fortschritt · ausbaufähige Basis.',
        badgeTitle: 'Partner & Auszeichnung',
        topRated: 'Top bewertet',
        teamAlt: 'Teamfoto MVPWERK',
        googleAlt: 'Google Partner',
        top2020Alt: 'TOP Experten Siegel 2020',
        top2021Alt: 'TOP Experten Siegel 2021',
      },
      en: {
        pill: 'Team MVPWERK',
        h2: 'Not “agency output” — but software people actually use.',
        p1a: 'We build MVPs that ',
        p1b: 'feel like a finished product',
        p1c:
          ': not just pretty screens, but ',
        p1d: 'real, fully working software',
        p1e:
          ' you can use in production — stable, cleanly built, and always extensible.',
        p2a:
          'The difference is simple: we don’t deliver “something you can show”, but a foundation that ',
        p2b: 'works in day-to-day operations',
        p2c: ' — and creates trust instantly in ',
        p2d: 'demos, pitches, and campaigns',
        p2e:
          '. That’s why it looks like an ',
        p2f: 'eyecatcher',
        p2g: ', not a prototype.',
        reasons: [
          { t: 'A usable software solution', s: 'Login, roles/permissions, data model, UI logic — not just click dummies.' },
          { t: 'Clean engineering & handover-ready', s: 'Structured, maintainable, documentable — code & ownership stay with you.' },
          { t: 'Fast iterations', s: 'Short feedback loops, clear decisions — visible progress every week.' },
          { t: 'Built to grow', s: 'A foundation designed so features, roles, data, and processes scale cleanly.' },
        ],
        focus: 'Focus: product-level quality · clean handover · fast progress · scalable foundation.',
        badgeTitle: 'Partners & awards',
        topRated: 'Top rated',
        teamAlt: 'MVPWERK team photo',
        googleAlt: 'Google Partner',
        top2020Alt: 'TOP Experts badge 2020',
        top2021Alt: 'TOP Experts badge 2021',
      },
    }[lang]
  }, [lang])

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-20">
      {/* ruhiger Background */}
<div className="pointer-events-none absolute inset-0 bg-white" />


      <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6">
        <div className="grid items-start gap-10 md:gap-12 lg:grid-cols-12 lg:gap-12">
          {/* LEFT / TEXT */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
              {t.pill}
            </div>

            <h2 className="mt-4 text-[30px] font-semibold leading-[1.06] tracking-tight text-slate-900 sm:text-[40px] md:text-[46px]">
              {t.h2}
            </h2>

            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-700 sm:text-[16px]">
              {t.p1a}<strong className="font-semibold text-slate-900">{t.p1b}</strong>{t.p1c}<strong className="font-semibold text-slate-900">{t.p1d}</strong>{t.p1e}
            </p>

            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-700 sm:text-[16px]">
              {t.p2a}<strong className="font-semibold text-slate-900">{t.p2b}</strong>{t.p2c}{' '}
              <strong className="font-semibold text-slate-900">{t.p2d}</strong>{t.p2e}
              <strong className="font-semibold text-slate-900">{t.p2f}</strong>{t.p2g}
            </p>

            {/* Quick reasons */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {t.reasons.map((x) => (
                <div
                  key={x.t}
                  className="rounded-2xl border border-slate-900/10 bg-white/70 px-4 py-3 shadow-sm backdrop-blur"
                >
                  <div className="text-[12px] font-semibold text-slate-900">{x.t}</div>
                  <div className="mt-1 text-[11px] leading-relaxed text-slate-600">{x.s}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-[11px] text-slate-600">
              {t.focus}
            </div>
          </div>

          {/* RIGHT / IMAGE with FLOATING BADGES (BOTTOM) */}
          <div className="order-1 lg:order-2 lg:col-span-5">
            <div className="mx-auto w-full max-w-[760px]">
              <div className="relative">
                {/* Image card */}
                <div className="relative overflow-hidden rounded-[2.2rem] border border-slate-900/10 bg-white/50 shadow-[0_28px_90px_rgba(15,23,42,0.12)]">
                  <Image
                    src="/bilder/gruppenbild_mvpwerk.png"
                    alt={t.teamAlt}
                    width={2600}
                    height={1600}
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="h-auto w-full object-contain"
                    quality={100}
                  />
                </div>

                {/* Floating box (BOTTOM over image) */}
                <div className="absolute bottom-3 left-1/2 z-10 w-[calc(100%-1.25rem)] -translate-x-1/2 sm:bottom-4 sm:w-[calc(100%-2rem)]">
                  <div className="rounded-[1.4rem] border border-slate-900/10 bg-white/85 p-3 shadow-[0_18px_55px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:rounded-[1.6rem] sm:p-5">
                    {/* Header: alles einzeilig auf Mobile */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="truncate text-[11px] font-semibold text-slate-900 sm:text-[12px]">
                        {t.badgeTitle}
                      </div>

                      <div className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-900/10 bg-white/90 px-2.5 py-1 text-[10px] font-medium text-slate-700 shadow-sm sm:px-3 sm:text-[11px]">
                        <span className="text-slate-900">{t.topRated}</span>
                        <span className="text-amber-500">★★★★★</span>
                        <span className="text-slate-900">4.9</span>
                      </div>
                    </div>

                    {/* Siegel: kleiner auf Mobile */}
                    <div className="mt-3 grid grid-cols-3 gap-2 sm:mt-4 sm:gap-3">
                      {/* Google Partner */}
                      <div className="flex items-center justify-center rounded-2xl border border-slate-900/10 bg-white/90 p-2 shadow-sm sm:p-3">
                        <div className="relative h-[42px] w-full sm:h-[62px]">
                          <Image
                            src="/bilder/Partner-RGB.webp"
                            alt={t.googleAlt}
                            fill
                            sizes="(min-width: 640px) 180px, 33vw"
                            className="object-contain"
                            quality={100}
                          />
                        </div>
                      </div>

                      {/* TOP Experten 2020 */}
                      <div className="flex items-center justify-center rounded-2xl border border-slate-900/10 bg-white/90 p-2 shadow-sm sm:p-3">
                        <div className="relative h-[42px] w-full sm:h-[62px]">
                          <Image
                            src="/bilder/TOP-Experten_Siegel_2020.png"
                            alt={t.top2020Alt}
                            fill
                            sizes="(min-width: 640px) 180px, 33vw"
                            className="object-contain"
                            quality={100}
                          />
                        </div>
                      </div>

                      {/* TOP Experten 2021 */}
                      <div className="flex items-center justify-center rounded-2xl border border-slate-900/10 bg-white/90 p-2 shadow-sm sm:p-3">
                        <div className="relative h-[42px] w-full sm:h-[62px]">
                          <Image
                            src="/bilder/TOP-Experten_Siegel_2021.png"
                            alt={t.top2021Alt}
                            fill
                            sizes="(min-width: 640px) 180px, 33vw"
                            className="object-contain"
                            quality={100}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Optional: wenn du den Satz unten wieder willst, dann hier klein & kurz */}
                    {/* <div className="mt-3 text-[10px] leading-relaxed text-slate-600 sm:text-[11px]">
                      Ausgezeichnete Arbeit ist kein Zufall: saubere Prozesse, klare Kommunikation, produktreife Umsetzung.
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

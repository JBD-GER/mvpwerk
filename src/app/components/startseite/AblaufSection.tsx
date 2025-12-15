// src/app/components/startseite/AblaufSection.tsx
'use client'

import { useMemo, useState } from 'react'

type TabKey = 'beratung' | 'entwicklung' | 'deployment'

function Icon({ name }: { name: 'chat' | 'wrench' | 'launch' }) {
  const cls = 'h-[16px] w-[16px]'
  switch (name) {
    case 'chat':
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M21 12a8 8 0 1 0-4 6.9L21 21l-1.8-4.4A7.9 7.9 0 0 0 21 12z" />
          <path d="M8 12h8" opacity="0.65" />
          <path d="M8 9h5" opacity="0.5" />
        </svg>
      )
    case 'wrench':
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M21 7a5 5 0 0 1-7 4.6l-7.7 7.7a2 2 0 0 1-2.8-2.8L11.2 9A5 5 0 0 1 21 7z" />
          <path d="M15 9l-1-1" opacity="0.7" />
        </svg>
      )
    case 'launch':
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M14 4c4 1 6 5 6 5s-2 4-6 5l-2 6-3-4-4-3 6-2z" />
          <path d="M10 10l4 4" opacity="0.7" />
          <path d="M6.5 17.5l-2.5 2.5" opacity="0.55" />
        </svg>
      )
  }
}

function StepIcon({ n }: { n: number }) {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-900/10 bg-white/85 text-[12px] font-semibold text-slate-900 shadow-sm">
      {n}
    </span>
  )
}

export default function AblaufSection() {
  const [tab, setTab] = useState<TabKey>('beratung')

  // ✅ Mobile-optimiert: 3 Tabs immer in *einem Blick* (kein horizontal scroll)
  const tabs = useMemo(
    () => [
      {
        key: 'beratung' as const,
        icon: 'chat' as const,
        short: 'Plan',
        long: 'Beratung & Scope',
      },
      {
        key: 'entwicklung' as const,
        icon: 'wrench' as const,
        short: 'Build',
        long: 'Design & Entwicklung',
      },
      {
        key: 'deployment' as const,
        icon: 'launch' as const,
        short: 'Launch',
        long: 'Deployment & Launch',
      },
    ],
    []
  )

  const content = useMemo(() => {
    const base = {
      beratung: {
        eyebrow: 'Phase 1 · Beratung & Scope',
        title: 'In 30–60 Minuten wissen Sie: Was bauen wir – und was nicht.',
        lead: 'Wir machen aus „Ideen“ einen klaren Scope, damit Budget und Zeitplan planbar bleiben.',
        steps: [
          { t: 'Ziel & Ergebnis definieren', s: 'Was soll die Software ermöglichen – und woran messen Sie Erfolg?' },
          { t: 'Funktionen priorisieren', s: 'Muss / Soll / Später – damit nichts ausufert und Sie schnell live gehen.' },
          { t: 'UI/UX Richtung festlegen', s: 'Look, Struktur und Flows – damit es wie ein Produkt wirkt.' },
          { t: 'Plan & Meilensteine', s: 'Fixe Checkpoints + klare Übergaben. Sie sehen echten Fortschritt.' },
        ],
        outputs: ['Scope & Prioritäten', 'UI/UX Richtung', 'Plan + Meilensteine', 'Nächste Schritte'],
      },
      entwicklung: {
        eyebrow: 'Phase 2 · Design & Entwicklung',
        title: 'Wöchentlich sichtbarer Fortschritt – als klickbare Version.',
        lead: 'Sie sehen nicht „Screens“, sondern Funktionen: Frontend, Backend, Daten – sauber verbunden.',
        steps: [
          { t: 'Setup & Architektur', s: 'Datenbank, Rollen/Rechte, Struktur – damit es stabil wächst.' },
          { t: 'UI/UX Umsetzung', s: 'Dashboard, Flows, Formulare – ruhig, klar, vertrauenswürdig.' },
          { t: 'Backend, APIs & Integrationen', s: 'Schnittstellen, Prozesse, Validierung – zuverlässig & erweiterbar.' },
          { t: 'Qualität & Tests', s: 'Edge-Cases, Bugs, Performance-Basics – damit es „fertig“ wirkt.' },
        ],
        outputs: ['Klickbare Version', 'APIs & Integrationen', 'Saubere Datenstruktur'],
      },
      deployment: {
        eyebrow: 'Phase 3 · Deployment & Launch',
        title: 'Go-live ohne Drama: sauber ausrollen, messen, stabil betreiben.',
        lead: 'Live-Schaltung, Performance-Check, Monitoring – damit es auch unter Last ruhig bleibt.',
        steps: [
          { t: 'Deployment & Domains', s: 'Live-Schaltung, Umgebungen, SSL – sauber und nachvollziehbar.' },
          { t: 'Performance-Check', s: 'Core Web Vitals / Lighthouse – optimieren, bis es wirklich schnell ist.' },
          { t: 'Monitoring & Alerts', s: 'Fehler-Logging, Basis-Metriken, Alerts – Probleme werden sichtbar.' },
          { t: 'Launch-Begleitung', s: 'Feinschliff nach Feedback + klare Roadmap für Erweiterungen.' },
        ],
        outputs: ['Live-System', 'Performance-Report', 'Monitoring-Basis', 'Launch-Roadmap'],
      },
    }
    return base[tab]
  }, [tab])

  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-white" />

      <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-[980px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/80 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
            Ablauf
          </div>

          <h2 className="mt-4 text-[26px] font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-[38px] md:text-[44px]">
            Klarer Ablauf. Klare Ergebnisse.
          </h2>

          <p className="mt-3 text-[14px] leading-relaxed text-slate-700 sm:text-[15px]">
            Drei Phasen, ein Ziel: cloudbasierte Software, die live funktioniert und „fertig“ wirkt.
          </p>
        </div>

        {/* Tabs (✅ immer 3 sichtbar) */}
        <div className="mt-7">
          <div className="mx-auto w-full max-w-[760px] rounded-[1.6rem] border border-slate-900/10 bg-white/70 p-2 shadow-sm backdrop-blur">
            <div className="grid grid-cols-3 gap-2">
              {tabs.map((t) => {
                const active = tab === t.key
                return (
                  <button
                    key={t.key}
                    onClick={() => setTab(t.key)}
                    className={[
                      'min-w-0 rounded-2xl px-2 py-3 text-center transition',
                      active
                        ? 'bg-slate-900 text-white shadow-[0_14px_45px_rgba(15,23,42,0.18)]'
                        : 'bg-white/70 text-slate-900 hover:bg-white',
                    ].join(' ')}
                    aria-pressed={active}
                  >
                    <span
                      className={[
                        'mx-auto mb-1.5 flex h-8 w-8 items-center justify-center rounded-full border shadow-sm',
                        active ? 'border-white/20 bg-white/10 text-white' : 'border-slate-900/10 bg-white/85 text-slate-900/70',
                      ].join(' ')}
                      aria-hidden
                    >
                      <Icon name={t.icon} />
                    </span>

                    {/* Mobile: short, Desktop: long */}
                    <span className="block text-[11px] font-semibold leading-tight sm:hidden">{t.short}</span>
                    <span className="hidden text-[12px] font-semibold leading-tight sm:block">{t.long}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="mx-auto mt-2 max-w-[760px] text-center text-[11px] text-slate-600 sm:hidden">
            Tipp: Tippen Sie auf eine Phase – alle 3 Tabs bleiben sichtbar.
          </div>
        </div>

        {/* Panel */}
        <div className="mt-6 rounded-[2rem] border border-slate-900/10 bg-white/70 p-5 shadow-[0_22px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8">
          <div className="grid gap-7 lg:grid-cols-12 lg:items-start">
            {/* Left */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/80 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
                {content.eyebrow}
              </div>

              <h3 className="mt-4 text-[20px] font-semibold leading-tight text-slate-900 sm:text-[28px]">
                {content.title}
              </h3>

              <p className="mt-3 text-[13px] leading-relaxed text-slate-700 sm:text-[14px]">{content.lead}</p>

              <div className="mt-5">
                <div className="text-[11px] font-medium text-slate-600">Sie bekommen am Ende</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {content.outputs.map((o) => (
                    <span
                      key={o}
                      className="inline-flex items-center rounded-full border border-slate-900/10 bg-white/80 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm"
                    >
                      {o}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Steps */}
            <div className="lg:col-span-7">
              <div className="grid gap-3 sm:grid-cols-2">
                {content.steps.map((st, idx) => (
                  <div key={st.t} className="rounded-[1.4rem] border border-slate-900/10 bg-white/80 p-5 shadow-sm">
                    <div className="flex items-start gap-3">
                      <StepIcon n={idx + 1} />
                      <div className="min-w-0">
                        <div className="text-[12px] font-semibold text-slate-900">{st.t}</div>
                        <div className="mt-1 text-[11px] leading-relaxed text-slate-600">{st.s}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 text-[11px] text-slate-600">
                Kurzer Hinweis: Die Schritte sind bewusst pragmatisch gehalten – damit Sie sofort wissen, was passiert.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

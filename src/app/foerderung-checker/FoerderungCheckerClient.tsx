'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import type { FoerderProgramm } from './page'

function Icon({ name }: { name: 'radar' | 'pin' | 'wallet' | 'spark' | 'shield' | 'rocket' | 'flame' | 'link' }) {
  const cls = 'h-[16px] w-[16px]'
  switch (name) {
    case 'radar':
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 12l7-3" />
          <path d="M12 21a9 9 0 1 0-9-9" opacity="0.6" />
          <path d="M12 3v2" opacity="0.6" />
          <path d="M21 12h-2" opacity="0.6" />
        </svg>
      )
    case 'pin':
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11z" />
          <path d="M12 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" opacity="0.7" />
        </svg>
      )
    case 'wallet':
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M4 7h16v12H4z" opacity="0.7" />
          <path d="M4 7c0-2 2-3 4-3h10" />
          <path d="M16 13h4" />
          <path d="M16 11a2 2 0 0 0 0 4" opacity="0.7" />
        </svg>
      )
    case 'spark':
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 2l1.3 5.2L18 9l-4.7 1.8L12 16l-1.3-5.2L6 9l4.7-1.8L12 2z" />
          <path d="M19 13l.7 2.8L22 17l-2.3.9L19 21l-.7-3.1L16 17l2.3-1.2L19 13z" opacity="0.65" />
        </svg>
      )
    case 'shield':
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 3l8 4v6c0 5-3 8-8 8s-8-3-8-8V7l8-4z" />
          <path d="M9 12l2 2 4-4" opacity="0.7" />
        </svg>
      )
    case 'rocket':
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M14 4c4 1 6 5 6 5s-2 4-6 5l-2 6-3-4-4-3 6-2z" />
          <path d="M10 10l4 4" opacity="0.7" />
        </svg>
      )
    case 'flame':
      return (
        <svg
          viewBox="0 0 24 24"
          className={cls}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22c4 0 7-3 7-7 0-3-2-5-3-6 0 2-1 3-2 4-1-3-3-5-6-7 0 4-3 6-3 10 0 4 3 6 7 6z" />
        </svg>
      )
    case 'link':
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M10 13a5 5 0 0 0 7.07 0l1.41-1.41a5 5 0 0 0 0-7.07" opacity="0.7" />
          <path d="M14 11a5 5 0 0 0-7.07 0L5.52 12.4a5 5 0 0 0 0 7.07" />
        </svg>
      )
  }
}

function badgeClass(kind: 'Bund' | 'Hessen' | 'Sachsen' | 'NRW' | 'Hamburg') {
  switch (kind) {
    case 'Bund':
      return 'bg-slate-900/5 text-slate-700 ring-slate-900/10'
    case 'Hessen':
      return 'bg-emerald-500/10 text-emerald-900 ring-emerald-500/20'
    case 'Sachsen':
      return 'bg-indigo-500/10 text-indigo-900 ring-indigo-500/20'
    case 'NRW':
      return 'bg-amber-500/12 text-amber-900 ring-amber-500/25'
    case 'Hamburg':
      return 'bg-rose-500/10 text-rose-900 ring-rose-500/20'
  }
}

function typeBadgeClass(type: string) {
  // WICHTIG: bleibt 1:1 deine Logik (deine Daten nutzen deutsche Werte)
  switch (type) {
    case 'Zuschuss':
      return 'bg-emerald-500/10 text-emerald-900 ring-emerald-500/20'
    case 'Darlehen':
      return 'bg-slate-900/5 text-slate-700 ring-slate-900/10'
    case 'Gutschein':
      return 'bg-amber-500/12 text-amber-900 ring-amber-500/25'
    case 'Fonds':
      return 'bg-indigo-500/10 text-indigo-900 ring-indigo-500/20'
    case 'Förderaufruf':
      return 'bg-rose-500/10 text-rose-900 ring-rose-500/20'
    default:
      return 'bg-slate-900/5 text-slate-700 ring-slate-900/10'
  }
}

function isHot(p: FoerderProgramm) {
  return (p.tags || []).map((x) => x.toLowerCase()).includes('hot')
}

type Lang = 'de' | 'en'
function detectLang(v: string | null): Lang {
  const s = (v || '').toLowerCase()
  if (s === 'en' || s.startsWith('en-')) return 'en'
  return 'de'
}

function t(lang: Lang) {
  if (lang === 'en') {
    return {
      pill: 'Check funding quickly',
      h1: 'Funding programs for SaaS, web apps & software',
      p: 'Filter by region & funding type — and open programs directly in the official funding database.',
      hotTitle: 'Nationwide & Hot',
      hotHint: 'Open directly · new tab',
      searchLabel: 'Search',
      searchPh: 'e.g. digitization, loan, ZIM, ERDF …',
      regionLabel: 'Region',
      typeLabel: 'Funding type',
      results: 'Results',
      programs: 'programs',
      reset: 'Reset filters',
      open: 'Open ↗',
      goodFor: 'Typically a fit for',
      note: 'Note:',
      bottomPill: 'Optional funding planning',
      bottomH2: 'If funding is on the table, we plan implementation accordingly.',
      bottomP:
        'We’ll briefly discuss your project — and set up scope, approach and documentation so there are no surprises later.',
      cta1: 'Request funding check',
      cta2: 'View services',
      tip: 'Tip: Programs change. This page is a navigator — always verify details in the program link.',
      all: 'All',
      region: {
        Bund: 'Nationwide',
        Hessen: 'Hesse',
        Sachsen: 'Saxony',
        NRW: 'NRW',
        Hamburg: 'Hamburg',
      } as const,
      type: {
        Zuschuss: 'Grant',
        Darlehen: 'Loan',
        Gutschein: 'Voucher',
        Fonds: 'Fund',
        Förderaufruf: 'Call',
      } as const,
    }
  }

  return {
    pill: 'Förderungen schnell checken',
    h1: 'Förderprogramme für SaaS, Web Apps & Software',
    p: 'Filtern Sie nach Bundesland & Förderart – und öffnen Sie die Programme direkt in der Förderdatenbank.',
    hotTitle: 'Bundesweit & Hot',
    hotHint: 'Direkt öffnen · neuer Tab',
    searchLabel: 'Suche',
    searchPh: 'z.B. Digitalisierung, Kredit, ZIM, EFRE …',
    regionLabel: 'Bundesland',
    typeLabel: 'Förderart',
    results: 'Ergebnisse',
    programs: 'Programme',
    reset: 'Filter zurücksetzen',
    open: 'Öffnen ↗',
    goodFor: 'Typisch passend für',
    note: 'Hinweis:',
    bottomPill: 'Förderplanung optional',
    bottomH2: 'Wenn Förderung im Raum steht, planen wir die Umsetzung entsprechend mit.',
    bottomP:
      'Wir sprechen kurz über Ihr Vorhaben – und setzen Scope, Vorgehen und Dokumentation so auf, dass es bei späteren Rückfragen keine Überraschungen gibt.',
    cta1: 'Förder-Check anfragen',
    cta2: 'Leistungen ansehen',
    tip: 'Tipp: Programme ändern sich. Diese Seite ist ein Navigator – Details bitte immer im Programm-Link prüfen.',
    all: 'Alle',
    region: {
      Bund: 'Bund',
      Hessen: 'Hessen',
      Sachsen: 'Sachsen',
      NRW: 'NRW',
      Hamburg: 'Hamburg',
    } as const,
    type: {
      Zuschuss: 'Zuschuss',
      Darlehen: 'Darlehen',
      Gutschein: 'Gutschein',
      Fonds: 'Fonds',
      Förderaufruf: 'Förderaufruf',
    } as const,
  }
}

export default function FoerderungCheckerClient({ programmes }: { programmes: FoerderProgramm[] }) {
  const sp = useSearchParams()
  const lang = detectLang(sp.get('lang'))
  const tr = useMemo(() => t(lang), [lang])

  // WICHTIG: State/Filter bleiben exakt wie bei dir (Alle als Sentinel)
  const [q, setQ] = useState('')
  const [region, setRegion] = useState<'Alle' | FoerderProgramm['region']>('Alle')
  const [type, setType] = useState<'Alle' | FoerderProgramm['type']>('Alle')

  const regions = useMemo(() => ['Alle', ...Array.from(new Set(programmes.map((p) => p.region)))] as const, [programmes])
  const types = useMemo(() => ['Alle', ...Array.from(new Set(programmes.map((p) => p.type)))] as const, [programmes])

  const hotBund = useMemo(() => {
    return programmes.filter((p) => p.region === 'Bund' && isHot(p)).slice(0, 6)
  }, [programmes])

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase()
    return programmes.filter((p) => {
      if (region !== 'Alle' && p.region !== region) return false
      if (type !== 'Alle' && p.type !== type) return false
      if (!query) return true

      const hay = [p.title, p.short, p.region, p.type, ...(p.goodFor || []), ...((p.tags as string[]) || [])]
        .join(' ')
        .toLowerCase()

      return hay.includes(query)
    })
  }, [programmes, q, region, type])

  // Interne Links behalten lang
  const hrefWithLang = (href: string) => {
    if (lang === 'de') return href
    const [base, hash] = href.split('#')
    const [path, qs] = base.split('?')
    const params = new URLSearchParams(qs || '')
    params.set('lang', lang)
    const out = `${path}?${params.toString()}`
    return hash ? `${out}#${hash}` : out
  }

  const labelRegion = (r: FoerderProgramm['region']) => tr.region[r]
  const labelType = (x: FoerderProgramm['type']) => tr.type[x]

  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20">
      {/* komplett weiß, nur minimaler Halo (bleibt “weiß”) */}
      <div className="pointer-events-none absolute inset-0 bg-white" />
      <div className="pointer-events-none absolute inset-x-0 top-[-140px] mx-auto h-[520px] w-[520px] rounded-full bg-slate-900/4 blur-3xl sm:h-[720px] sm:w-[720px]" />
      <div className="pointer-events-none absolute inset-x-0 top-[40px] mx-auto h-[420px] w-[420px] rounded-full bg-slate-900/3 blur-3xl sm:h-[560px] sm:w-[560px]" />

      <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-[980px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/80 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
            {tr.pill}
          </div>

          <h1 className="mt-4 text-[28px] font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-[38px] md:text-[44px]">
            {tr.h1}
          </h1>

          <p className="mt-3 text-[14px] leading-relaxed text-slate-700 sm:text-[15px]">{tr.p}</p>
        </div>

        {/* Bundesweit & Hot */}
        {hotBund.length ? (
          <div className="mt-8 rounded-[1.6rem] border border-slate-900/10 bg-white/70 p-4 shadow-sm backdrop-blur sm:p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-[12px] font-semibold text-slate-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-900/10 bg-white/90 text-slate-900/70 shadow-sm">
                  <Icon name="flame" />
                </span>
                {tr.hotTitle}
              </div>
              <div className="text-[11px] text-slate-600">{tr.hotHint}</div>
            </div>

            {/* mobile: horizontal scroll / desktop: grid */}
            <div className="mt-4 flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
              {hotBund.map((p) => (
                <a
                  key={p.id}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[260px] rounded-[1.25rem] border border-slate-900/10 bg-white/80 p-4 shadow-sm backdrop-blur transition hover:bg-white md:min-w-0"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ${badgeClass('Bund')}`}>
                          <span className="mr-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/80 ring-1 ring-black/5 text-slate-900/70">
                            <Icon name="pin" />
                          </span>
                          {labelRegion('Bund')}
                        </span>

                        <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ${typeBadgeClass(p.type)}`}>
                          <span className="mr-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/80 ring-1 ring-black/5 text-slate-900/70">
                            <Icon name={p.type === 'Zuschuss' ? 'spark' : p.type === 'Darlehen' ? 'wallet' : p.type === 'Fonds' ? 'rocket' : 'shield'} />
                          </span>
                          {labelType(p.type)}
                        </span>

                        <span className="inline-flex items-center rounded-full bg-amber-500/12 px-2.5 py-1 text-[11px] font-semibold text-amber-900 ring-1 ring-amber-500/25">
                          Hot
                        </span>
                      </div>

                      <div className="mt-2 line-clamp-2 text-[13px] font-semibold text-slate-900">{p.title}</div>
                      <div className="mt-1 line-clamp-2 text-[12px] leading-relaxed text-slate-700">{p.short}</div>
                    </div>

                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-[0_18px_55px_rgba(15,23,42,0.18)]">
                      <Icon name="link" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ) : null}

        {/* Controls */}
        <div className="mt-6 rounded-[1.6rem] border border-slate-900/10 bg-white/70 p-4 shadow-sm backdrop-blur sm:p-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            {/* Search */}
            <div className="flex-1">
              <label className="mb-1 block text-[11px] font-medium text-slate-600">{tr.searchLabel}</label>
              <div className="flex items-center gap-2 rounded-2xl border border-slate-900/10 bg-white/80 px-3 py-2 shadow-sm backdrop-blur">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-900/10 bg-white/90 text-slate-900/70">
                  <Icon name="radar" />
                </span>
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder={tr.searchPh}
                  className="w-full bg-transparent text-[13px] text-slate-900 placeholder:text-slate-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="grid gap-3 sm:grid-cols-2 md:w-[420px]">
              <div>
                <label className="mb-1 block text-[11px] font-medium text-slate-600">{tr.regionLabel}</label>
                <div className="rounded-2xl border border-slate-900/10 bg-white/80 px-3 py-2 shadow-sm backdrop-blur">
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value as any)}
                    className="w-full bg-transparent text-[13px] text-slate-900 focus:outline-none"
                  >
                    {regions.map((r) => (
                      <option key={r} value={r}>
                        {r === 'Alle' ? tr.all : labelRegion(r as FoerderProgramm['region'])}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1 block text-[11px] font-medium text-slate-600">{tr.typeLabel}</label>
                <div className="rounded-2xl border border-slate-900/10 bg-white/80 px-3 py-2 shadow-sm backdrop-blur">
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value as any)}
                    className="w-full bg-transparent text-[13px] text-slate-900 focus:outline-none"
                  >
                    {types.map((x) => (
                      <option key={x} value={x}>
                        {x === 'Alle' ? tr.all : labelType(x as FoerderProgramm['type'])}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
            <div className="text-[11px] text-slate-600">
              {tr.results}: <span className="font-semibold text-slate-900">{filtered.length}</span> {tr.programs}
            </div>

            <button
              onClick={() => {
                setQ('')
                setRegion('Alle')
                setType('Alle')
              }}
              className="inline-flex h-9 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/70 px-4 text-[12px] font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10"
            >
              {tr.reset}
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <div key={p.id} className="rounded-[1.6rem] border border-slate-900/10 bg-white/70 p-5 shadow-sm backdrop-blur">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ${badgeClass(p.region)}`}>
                      <span className="mr-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/80 ring-1 ring-black/5 text-slate-900/70">
                        <Icon name="pin" />
                      </span>
                      {labelRegion(p.region)}
                    </span>

                    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ${typeBadgeClass(p.type)}`}>
                      <span className="mr-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/80 ring-1 ring-black/5 text-slate-900/70">
                        <Icon
                          name={
                            p.type === 'Zuschuss'
                              ? 'spark'
                              : p.type === 'Darlehen'
                                ? 'wallet'
                                : p.type === 'Fonds'
                                  ? 'rocket'
                                  : p.type === 'Förderaufruf'
                                    ? 'shield'
                                    : 'shield'
                          }
                        />
                      </span>
                      {labelType(p.type)}
                    </span>

                    {isHot(p) ? (
                      <span className="inline-flex items-center rounded-full bg-amber-500/12 px-2.5 py-1 text-[11px] font-semibold text-amber-900 ring-1 ring-amber-500/25">
                        Hot
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-3 line-clamp-2 text-[14px] font-semibold text-slate-900">{p.title}</div>
                </div>

                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 shrink-0 items-center justify-center rounded-2xl bg-slate-900 px-4 text-[12px] font-semibold text-white shadow-[0_18px_55px_rgba(15,23,42,0.18)] transition hover:translate-y-[-1px] hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
                >
                  {tr.open}
                </a>
              </div>

              <p className="mt-3 text-[12px] leading-relaxed text-slate-700">{p.short}</p>

              <div className="mt-4">
                <div className="text-[11px] font-medium text-slate-600">{tr.goodFor}</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.goodFor.slice(0, 4).map((g) => (
                    <span
                      key={g}
                      className="inline-flex items-center rounded-full border border-slate-900/10 bg-white/80 px-2.5 py-1 text-[11px] font-medium text-slate-700 shadow-sm"
                    >
                      {g}
                    </span>
                  ))}
                </div>
              </div>

              {p.hint ? (
                <div className="mt-4 rounded-2xl border border-slate-900/10 bg-white/80 px-4 py-3 text-[11px] text-slate-700 shadow-sm">
                  <span className="font-semibold text-slate-900">{tr.note}</span> {p.hint}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        {/* Bottom info + CTAs */}
        <div className="mt-10 rounded-[2rem] border border-slate-900/10 bg-white/70 p-6 text-center shadow-[0_22px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8">
          <div className="mx-auto max-w-[920px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/80 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
              {tr.bottomPill}
            </div>

            <h2 className="mt-4 text-[22px] font-semibold leading-tight text-slate-900 sm:text-[28px]">
              {tr.bottomH2}
            </h2>

            <p className="mt-3 text-[13px] leading-relaxed text-slate-700 sm:text-[14px]">{tr.bottomP}</p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={hrefWithLang('/kontakt')}
                className="group inline-flex h-12 w-full items-center justify-center rounded-2xl bg-slate-900 px-6 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(15,23,42,0.18)] transition hover:translate-y-[-1px] hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20 sm:w-auto"
              >
                {tr.cta1}
                <span className="ml-2 inline-block transition group-hover:translate-x-0.5">→</span>
              </Link>

              <Link
                href={hrefWithLang('/leistungen')}
                className="inline-flex h-12 w-full items-center justify-center rounded-2xl border border-slate-900/10 bg-white/70 px-6 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10 sm:w-auto"
              >
                {tr.cta2}
              </Link>
            </div>

            <div className="mt-3 text-[11px] text-slate-600">{tr.tip}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

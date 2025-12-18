'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import {
  SparklesIcon,
  CodeBracketIcon,
  Squares2X2Icon,
  CloudIcon,
  CpuChipIcon,
  LinkIcon,
} from '@heroicons/react/24/outline'

type Lang = 'de' | 'en'

function normalizeLang(v: string | null | undefined): Lang | null {
  if (!v) return null
  const s = v.toLowerCase()
  if (s === 'de' || s.startsWith('de-')) return 'de'
  if (s === 'en' || s.startsWith('en-')) return 'en'
  return null
}

function Flag({ lang }: { lang: Lang }) {
  if (lang === 'de') {
    return (
      <span
        aria-hidden
        className="h-[10px] w-[14px] rounded-[2px] shadow-[0_0_0_1px_rgba(15,23,42,0.10)]"
        style={{
          background:
            'linear-gradient(to bottom,#000 0%,#000 33.33%,#dd0000 33.33%,#dd0000 66.66%,#ffce00 66.66%,#ffce00 100%)',
        }}
      />
    )
  }

  return (
    <span
      aria-hidden
      className="relative h-[10px] w-[14px] overflow-hidden rounded-[2px] shadow-[0_0_0_1px_rgba(15,23,42,0.10)]"
      style={{ background: '#1e3a8a' }}
    >
      <span className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-white/90" />
      <span className="absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 bg-white/90" />
      <span className="absolute inset-x-0 top-1/2 h-[1px] -translate-y-1/2 bg-rose-500/90" />
      <span className="absolute inset-y-0 left-1/2 w-[1px] -translate-x-1/2 bg-rose-500/90" />
    </span>
  )
}

type Solution = {
  href: string
  icon: React.ComponentType<{ className?: string }>
  labelDe: string
  labelEn: string
  descDe: string
  descEn: string
}

export default function Header() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [solutionsMobileOpen, setSolutionsMobileOpen] = useState(false)

  // ✅ EINZIGE WAHRHEIT: URL
  const lang: Lang = useMemo(() => normalizeLang(searchParams?.get('lang')) ?? 'de', [searchParams])

  const t = useMemo(() => {
    return lang === 'de'
      ? {
          nav: {
            home: 'Startseite',
            solutions: 'Lösungen',
            services: 'Leistungen',
            funding: 'Förderung',
            faq: 'FAQ',
          },
          contact: 'Kontakt',
          language: 'Sprache',
          chooseLang: 'Sprache wählen',
          menuOpen: 'Menü öffnen',
          solutionsTitle: 'Unsere Lösungen',
          solutionsHint: 'Schnell zu den Spezialseiten',
        }
      : {
          nav: {
            home: 'Home',
            solutions: 'Solutions',
            services: 'Services',
            funding: 'Funding',
            faq: 'FAQ',
          },
          contact: 'Contact',
          language: 'Language',
          chooseLang: 'Choose language',
          menuOpen: 'Open menu',
          solutionsTitle: 'Our solutions',
          solutionsHint: 'Jump to specialized pages',
        }
  }, [lang])

  const solutions: Solution[] = useMemo(
    () => [
      // ✅ Reihenfolge wie gewünscht: KI -> Software -> Web App -> Rest egal
      {
        href: '/loesungen/ki-entwicklung',
        icon: SparklesIcon,
        labelDe: 'KI Entwicklung',
        labelEn: 'AI Development',
        descDe: 'LLMs, Automationen, Assistants, RAG & Integrationen.',
        descEn: 'LLMs, automation, assistants, RAG & integrations.',
      },
      {
        href: '/loesungen/software-entwicklung',
        icon: CodeBracketIcon,
        labelDe: 'Softwareentwicklung',
        labelEn: 'Software Development',
        descDe: 'B2B Web-Software, Workflows, Rollen, Prozesse.',
        descEn: 'B2B software, workflows, roles, processes.',
      },
      {
        href: '/loesungen/web-app-entwicklung',
        icon: Squares2X2Icon,
        labelDe: 'Web App Entwicklung',
        labelEn: 'Web App Development',
        descDe: 'Next.js Apps, Dashboards, Portale, SaaS.',
        descEn: 'Next.js apps, dashboards, portals, SaaS.',
      },
      {
        href: '/loesungen/cloud-entwicklung',
        icon: CloudIcon,
        labelDe: 'Cloud Entwicklung',
        labelEn: 'Cloud Development',
        descDe: 'Architektur, Deployments, Skalierung, Observability.',
        descEn: 'Architecture, deployments, scaling, observability.',
      },
      {
        href: '/loesungen/iot-entwicklung',
        icon: CpuChipIcon,
        labelDe: 'IoT Entwicklung',
        labelEn: 'IoT Development',
        descDe: 'Devices → Cloud → Dashboard, Telemetrie, OTA.',
        descEn: 'Devices → cloud → dashboard, telemetry, OTA.',
      },
      {
        href: '/loesungen/blockchain-entwicklung',
        icon: LinkIcon,
        labelDe: 'Blockchain Entwicklung',
        labelEn: 'Blockchain Development',
        descDe: 'Smart Contracts, Integrationen, Security & Betrieb.',
        descEn: 'Smart contracts, integrations, security & ops.',
      },
    ],
    []
  )

  const items = useMemo(
    () => [
      // Lösungen kommt als Dropdown-Button (nicht als Link)
      { href: '/leistungen', label: t.nav.services },
      { href: '/foerderung-checker', label: t.nav.funding },
      { href: '/faq', label: t.nav.faq },
      { href: '/', label: t.nav.home },
    ],
    [t]
  )

  const hrefWithLang = (href: string) => {
    const params = new URLSearchParams(searchParams?.toString() ?? '')
    params.set('lang', lang)
    const qs = params.toString()
    return qs ? `${href}?${qs}` : href
  }

  function switchLang(next: Lang) {
    if (next === lang) {
      setLangOpen(false)
      setOpen(false)
      setSolutionsOpen(false)
      return
    }

    const params = new URLSearchParams(searchParams?.toString() ?? '')
    params.set('lang', next)
    const qs = params.toString()
    const url = qs ? `${pathname}?${qs}` : pathname

    setLangOpen(false)
    setOpen(false)
    setSolutionsOpen(false)

    // ✅ “Refresh” der aktuellen Seite – 100% zuverlässig
    window.location.assign(url)
  }

  const solutionsActive = useMemo(() => pathname?.startsWith('/loesungen'), [pathname])

  useEffect(() => {
    setOpen(false)
    setLangOpen(false)
    setSolutionsOpen(false)
  }, [pathname, lang])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        setLangOpen(false)
        setSolutionsOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    if (!langOpen) return
    const onClick = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      if (!el.closest?.('[data-lang-root="1"]')) setLangOpen(false)
    }
    window.addEventListener('mousedown', onClick)
    return () => window.removeEventListener('mousedown', onClick)
  }, [langOpen])

  useEffect(() => {
    if (!solutionsOpen) return
    const onClick = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      if (!el.closest?.('[data-solutions-root="1"]')) setSolutionsOpen(false)
    }
    window.addEventListener('mousedown', onClick)
    return () => window.removeEventListener('mousedown', onClick)
  }, [solutionsOpen])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[80] border-b border-slate-900/10 bg-white">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center gap-4 px-4 sm:px-6">
          {/* Logo */}
          <Link href={hrefWithLang('/')} className="flex items-center">
            <Image
              src="/logos/mvpwerk_logo_trans.png"
              alt="MVPWERK"
              width={150}
              height={30}
              className="h-8 w-auto sm:h-9"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 text-sm md:flex">
            {/* Lösungen Dropdown */}
            <div className="relative" data-solutions-root="1">
              <button
                type="button"
                onClick={() => {
                  setSolutionsOpen((v) => !v)
                  setLangOpen(false)
                }}
                aria-expanded={solutionsOpen}
                aria-haspopup="menu"
                className={[
                  'inline-flex items-center gap-2 transition-colors',
                  solutionsActive ? 'font-semibold text-slate-900' : 'text-slate-700 hover:text-slate-900',
                ].join(' ')}
              >
                {t.nav.solutions}
                <svg
                  viewBox="0 0 24 24"
                  className={['h-4 w-4 text-slate-600 transition', solutionsOpen ? 'rotate-180' : 'rotate-0'].join(' ')}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {solutionsOpen ? (
                <div className="absolute left-1/2 mt-3 w-[760px] -translate-x-1/2 overflow-hidden rounded-3xl border border-slate-900/10 bg-white/80 shadow-[0_30px_120px_rgba(15,23,42,0.16)] backdrop-blur">
                  <div className="grid grid-cols-[1fr_220px]">
                    {/* Left: Grid */}
                    <div className="p-3">
                      <div className="px-2 pb-2">
                        <div className="text-sm font-medium text-slate-900">{t.solutionsTitle}</div>
                        <div className="text-xs text-slate-500">{t.solutionsHint}</div>
                      </div>

                      <div className="grid gap-2 md:grid-cols-2">
                        {solutions.map((s) => {
                          const Icon = s.icon
                          const label = lang === 'de' ? s.labelDe : s.labelEn
                          const desc = lang === 'de' ? s.descDe : s.descEn
                          const active = pathname === s.href
                          return (
                            <Link
                              key={s.href}
                              href={hrefWithLang(s.href)}
                              onClick={() => setSolutionsOpen(false)}
                              className={[
                                'group flex items-start gap-3 rounded-2xl border border-transparent px-3 py-3 transition',
                                active
                                  ? 'border-slate-900/10 bg-slate-900 text-white'
                                  : 'hover:border-slate-900/10 hover:bg-white',
                              ].join(' ')}
                            >
                              <span
                                className={[
                                  'mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl border shadow-sm backdrop-blur',
                                  active
                                    ? 'border-white/20 bg-white/10 text-white'
                                    : 'border-white/60 bg-white/70 text-slate-900',
                                ].join(' ')}
                              >
                                <Icon className="h-5 w-5" />
                              </span>

                              <span className="min-w-0">
                                <span className={['block text-sm font-semibold', active ? 'text-white' : 'text-slate-900'].join(' ')}>
                                  {label}
                                </span>
                                <span className={['mt-0.5 block text-xs leading-relaxed', active ? 'text-white/80' : 'text-slate-600'].join(' ')}>
                                  {desc}
                                </span>
                              </span>
                            </Link>
                          )
                        })}
                      </div>
                    </div>

                    {/* Right: Quick CTA / Info rail */}
                    <div className="border-l border-slate-900/10 bg-gradient-to-b from-slate-900/[0.03] to-transparent p-4">
                      <div className="rounded-2xl border border-white/60 bg-white/70 p-4 shadow-sm backdrop-blur">
                        <div className="text-xs font-semibold text-slate-900">
                          {lang === 'de' ? 'Nicht sicher, was passt?' : 'Not sure what fits?'}
                        </div>
                        <p className="mt-2 text-xs leading-relaxed text-slate-600">
                          {lang === 'de'
                            ? 'Beschreiben Sie kurz Ihr Ziel – wir sagen Ihnen, welche Lösung (und welcher Einstieg) am besten ist.'
                            : 'Tell us your goal — we’ll recommend the best solution and the right starting point.'}
                        </p>
                        <Link
                          href={hrefWithLang('/kontakt')}
                          onClick={() => setSolutionsOpen(false)}
                          className={[
                            'mt-3 inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-xs font-semibold',
                            'border border-slate-900/10 bg-slate-900 text-white shadow-sm transition hover:bg-slate-800',
                            'focus:outline-none focus:ring-2 focus:ring-indigo-200/70',
                          ].join(' ')}
                        >
                          {lang === 'de' ? 'Kontakt →' : 'Contact →'}
                        </Link>
                      </div>

                      <div className="mt-3 rounded-2xl border border-white/60 bg-white/60 p-4 text-xs text-slate-600 shadow-sm backdrop-blur">
                        <div className="font-semibold text-slate-900">
                          {lang === 'de' ? 'Tipp' : 'Tip'}
                        </div>
                        <div className="mt-1 leading-relaxed">
                          {lang === 'de'
                            ? 'Alle Lösungen sind auf B2B-Umsetzung, Security und Betrieb ausgelegt.'
                            : 'All solutions focus on B2B delivery, security and operational readiness.'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            {/* Restliche Nav Links */}
            {items.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={hrefWithLang(item.href)}
                  aria-current={active ? 'page' : undefined}
                  className={[
                    'transition-colors',
                    active ? 'font-semibold text-slate-900' : 'text-slate-700 hover:text-slate-900',
                  ].join(' ')}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Right */}
          <div className="ml-auto flex items-center gap-2">
            {/* Language switch (desktop) */}
            <div className="relative hidden md:block" data-lang-root="1">
              <button
                type="button"
                onClick={() => {
                  setLangOpen((v) => !v)
                  setSolutionsOpen(false)
                }}
                aria-expanded={langOpen}
                aria-label={t.chooseLang}
                className={[
                  'inline-flex h-10 items-center gap-2 rounded-full px-3 text-xs font-semibold',
                  'border border-slate-900/10 bg-white/70 text-slate-900 shadow-sm backdrop-blur transition',
                  'hover:bg-white hover:shadow-[0_10px_30px_rgba(15,23,42,0.10)]',
                  'focus:outline-none focus:ring-2 focus:ring-slate-900/10',
                ].join(' ')}
              >
                <Flag lang={lang} />
                <span className="text-slate-800">{lang === 'de' ? 'DE' : 'EN'}</span>
                <svg
                  viewBox="0 0 24 24"
                  className={['h-4 w-4 text-slate-600 transition', langOpen ? 'rotate-180' : 'rotate-0'].join(' ')}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {langOpen ? (
                <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-2xl border border-slate-900/10 bg-white/80 shadow-[0_20px_70px_rgba(15,23,42,0.12)] backdrop-blur">
                  <button
                    type="button"
                    onClick={() => switchLang('de')}
                    className={[
                      'flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition',
                      lang === 'de' ? 'bg-slate-900 text-white' : 'text-slate-800 hover:bg-slate-900/5',
                    ].join(' ')}
                  >
                    <Flag lang="de" />
                    Deutsch
                    {lang === 'de' ? <span className="ml-auto text-white/80">✓</span> : null}
                  </button>

                  <button
                    type="button"
                    onClick={() => switchLang('en')}
                    className={[
                      'flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition',
                      lang === 'en' ? 'bg-slate-900 text-white' : 'text-slate-800 hover:bg-slate-900/5',
                    ].join(' ')}
                  >
                    <Flag lang="en" />
                    English
                    {lang === 'en' ? <span className="ml-auto text-white/80">✓</span> : null}
                  </button>
                </div>
              ) : null}
            </div>

            {/* CTA */}
            <Link
              href={hrefWithLang('/kontakt')}
              className={[
                'hidden md:inline-flex',
                'h-10 items-center justify-center rounded-full px-5 text-xs font-semibold',
                'border border-slate-900/10 bg-slate-50 text-slate-900 shadow-sm transition',
                'hover:bg-slate-100 hover:shadow-[0_10px_30px_rgba(15,23,42,0.10)]',
                'focus:outline-none focus:ring-2 focus:ring-slate-900/10',
              ].join(' ')}
            >
              {t.contact}
            </Link>

            {/* Mobile burger */}
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-900/10 bg-white shadow-sm md:hidden"
              onClick={() => {
                setOpen((v) => !v)
                setLangOpen(false)
                setSolutionsOpen(false)
              }}
              aria-label={t.menuOpen}
              aria-expanded={open}
            >
              <div className="space-y-1.5">
                <span className="block h-0.5 w-4 rounded-full bg-slate-900" />
                <span className="block h-0.5 w-3 rounded-full bg-slate-700" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden">
          <button
            type="button"
            aria-label="Menü schließen"
            onClick={() => setOpen(false)}
            className="fixed inset-0 top-16 z-[70] bg-slate-900/10 backdrop-blur-[2px]"
          />

          <div className="fixed inset-x-0 top-16 z-[75]">
            <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
              <div className="mt-3 overflow-hidden rounded-2xl border border-slate-900/10 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.12)]">
                <nav className="p-2">
                  {/* Lösungen (mobile) */}
                  <div className="rounded-xl border border-slate-900/10 bg-white/70 p-2">
                    <button
                      type="button"
                      onClick={() => setSolutionsMobileOpen((v) => !v)}
                      className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-left text-sm font-semibold text-slate-900"
                      aria-expanded={solutionsMobileOpen}
                    >
                      <span className="flex items-center gap-2">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-white/60 bg-white/70 shadow-sm">
                          <Squares2X2Icon className="h-4 w-4 text-slate-900" />
                        </span>
                        {t.nav.solutions}
                      </span>
                      <svg
                        viewBox="0 0 24 24"
                        className={['h-4 w-4 text-slate-600 transition', solutionsMobileOpen ? 'rotate-180' : 'rotate-0'].join(' ')}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>

                    {solutionsMobileOpen ? (
                      <div className="mt-1 grid gap-1">
                        {solutions.map((s) => {
                          const Icon = s.icon
                          const label = lang === 'de' ? s.labelDe : s.labelEn
                          const active = pathname === s.href
                          return (
                            <Link
                              key={s.href}
                              href={hrefWithLang(s.href)}
                              onClick={() => setOpen(false)}
                              aria-current={active ? 'page' : undefined}
                              className={[
                                'flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition',
                                active ? 'bg-slate-900 text-white' : 'text-slate-800 hover:bg-slate-900/5',
                              ].join(' ')}
                            >
                              <span
                                className={[
                                  'inline-flex h-9 w-9 items-center justify-center rounded-xl border shadow-sm',
                                  active ? 'border-white/20 bg-white/10' : 'border-white/60 bg-white/70',
                                ].join(' ')}
                              >
                                <Icon className={['h-4 w-4', active ? 'text-white' : 'text-slate-900'].join(' ')} />
                              </span>
                              <span className="font-medium">{label}</span>
                            </Link>
                          )
                        })}
                      </div>
                    ) : null}
                  </div>

                  {/* Standard Links */}
                  {items.map((item) => {
                    const active = pathname === item.href
                    return (
                      <Link
                        key={item.href}
                        href={hrefWithLang(item.href)}
                        onClick={() => setOpen(false)}
                        aria-current={active ? 'page' : undefined}
                        className={[
                          'mt-2 block rounded-xl px-3 py-2 text-sm transition',
                          active ? 'bg-slate-900 text-white' : 'text-slate-800 hover:bg-slate-900/5',
                        ].join(' ')}
                      >
                        {item.label}
                      </Link>
                    )
                  })}

                  {/* Mobile lang */}
                  <div className="mt-2 rounded-xl border border-slate-900/10 bg-white/70 p-2">
                    <div className="px-2 pb-2 text-[11px] font-medium text-slate-600">{t.language}</div>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => switchLang('de')}
                        className={[
                          'inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition',
                          lang === 'de'
                            ? 'bg-slate-900 text-white'
                            : 'border border-slate-900/10 bg-white/80 text-slate-900 hover:bg-white',
                        ].join(' ')}
                      >
                        <Flag lang="de" /> DE
                      </button>
                      <button
                        type="button"
                        onClick={() => switchLang('en')}
                        className={[
                          'inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition',
                          lang === 'en'
                            ? 'bg-slate-900 text-white'
                            : 'border border-slate-900/10 bg-white/80 text-slate-900 hover:bg-white',
                        ].join(' ')}
                      >
                        <Flag lang="en" /> EN
                      </button>
                    </div>
                  </div>

                  <Link
                    href={hrefWithLang('/kontakt')}
                    onClick={() => setOpen(false)}
                    className={[
                      'mt-2 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold',
                      'border border-slate-900/10 bg-slate-50 text-slate-900 shadow-sm transition',
                      'hover:bg-slate-100',
                    ].join(' ')}
                  >
                    {t.contact} →
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

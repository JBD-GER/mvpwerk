'use client'

import Link from 'next/link'
import Image from 'next/image'
import { startTransition, useEffect, useMemo, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type Lang = 'de' | 'en'
const LANG_COOKIE = 'mvpwerk_lang'
const ONE_YEAR = 60 * 60 * 24 * 365

function normalizeLang(v: string | null | undefined): Lang | null {
  if (!v) return null
  const s = v.toLowerCase()
  if (s === 'de' || s.startsWith('de-')) return 'de'
  if (s === 'en' || s.startsWith('en-')) return 'en'
  return null
}

function readCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/[$()*+./?[\\\]^{|}-]/g, '\\$&') + '=([^;]*)')
  )
  return match ? decodeURIComponent(match[1]) : null
}

function writeLangCookie(lang: Lang) {
  if (typeof document === 'undefined') return
  document.cookie = `${LANG_COOKIE}=${encodeURIComponent(lang)}; path=/; max-age=${ONE_YEAR}; samesite=lax`
}

function detectBrowserLang(): Lang {
  if (typeof navigator === 'undefined') return 'de'
  return normalizeLang(navigator.language) ?? 'de'
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

export default function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  // ✅ Hydration-safe initial state: NICHT Cookie/Browser!
  // Server rendert immer stabil "de", Client hydratisiert identisch -> kein mismatch
  const [lang, setLang] = useState<Lang>('de')

  const spKey = useMemo(() => searchParams?.toString() ?? '', [searchParams])

  // ✅ Nach dem Mount: URL -> Cookie -> Browser, und URL ggf. korrigieren + refresh für Server-Content
  useEffect(() => {
    const q = normalizeLang(searchParams?.get('lang'))
    const c = normalizeLang(readCookie(LANG_COOKIE))
    const desired = q ?? c ?? detectBrowserLang()

    // state/cookie immer angleichen
    if (desired !== lang) setLang(desired)
    writeLangCookie(desired)

    // wenn URL kein lang oder anderes lang: URL korrigieren + Server-Content neu laden
    if (q !== desired) {
      const params = new URLSearchParams(spKey)
      params.set('lang', desired)

      startTransition(() => {
        router.replace(`${pathname}?${params.toString()}`, { scroll: false })
        router.refresh()
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, spKey]) // absichtlich ohne "lang" als dep (sonst unnötige Loops)

  const t = useMemo(() => {
    return lang === 'de'
      ? {
          nav: { home: 'Startseite', services: 'Leistungen', funding: 'Förderung', faq: 'FAQ' },
          contact: 'Kontakt',
          language: 'Sprache',
          chooseLang: 'Sprache wählen',
        }
      : {
          nav: { home: 'Home', services: 'Services', funding: 'Funding', faq: 'FAQ' },
          contact: 'Contact',
          language: 'Language',
          chooseLang: 'Choose language',
        }
  }, [lang])

  const items = useMemo(
    () => [
      { href: '/', label: t.nav.home },
      { href: '/leistungen', label: t.nav.services },
      { href: '/foerderung-checker', label: t.nav.funding },
      { href: '/faq', label: t.nav.faq },
    ],
    [t]
  )

  const hrefWithLang = (href: string) => {
    const params = new URLSearchParams(spKey)
    params.set('lang', lang)
    const qs = params.toString()
    return qs ? `${href}?${qs}` : href
  }

  function applyLang(next: Lang) {
    if (next === lang && normalizeLang(searchParams?.get('lang')) === next) {
      setLangOpen(false)
      setOpen(false)
      return
    }

    setLang(next)
    writeLangCookie(next)

    const params = new URLSearchParams(spKey)
    params.set('lang', next)

    setLangOpen(false)
    setOpen(false)

    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`, { scroll: false })
      router.refresh() // ✅ wichtig: Server-Komponenten ziehen neuen lang
    })
  }

  useEffect(() => {
    setOpen(false)
    setLangOpen(false)
  }, [pathname])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        setLangOpen(false)
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
                onClick={() => setLangOpen((v) => !v)}
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
                    onClick={() => applyLang('de')}
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
                    onClick={() => applyLang('en')}
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
              onClick={() => setOpen((v) => !v)}
              aria-label="Menü öffnen"
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
                  {items.map((item) => {
                    const active = pathname === item.href
                    return (
                      <Link
                        key={item.href}
                        href={hrefWithLang(item.href)}
                        onClick={() => setOpen(false)}
                        aria-current={active ? 'page' : undefined}
                        className={[
                          'block rounded-xl px-3 py-2 text-sm transition',
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
                        onClick={() => applyLang('de')}
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
                        onClick={() => applyLang('en')}
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

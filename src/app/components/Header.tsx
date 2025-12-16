'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'

type NavItem = { href: string; label: string }

const NAV: NavItem[] = [
  { href: '/', label: 'Startseite' },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/foerderung-checker', label: 'Förderung' },
    { href: '/faq', label: 'FAQ' },
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const items = useMemo(() => NAV.filter(Boolean), [])

  // close on route change
  useEffect(() => setOpen(false), [pathname])

  // ESC close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      {/* FIXED header (stabil, kein sticky-bug) */}
      <header className="fixed inset-x-0 top-0 z-[80] border-b border-slate-900/10 bg-white">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center gap-4 px-4 sm:px-6">
          {/* LEFT: Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/mvpwerk_logo_trans.png"
              alt="MVPWERK"
              width={150}
              height={30}
              className="h-8 w-auto sm:h-9"
              priority
            />
          </Link>

          {/* CENTER: Desktop nav (zentriert) */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 text-sm md:flex">
            {items.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
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

          {/* RIGHT */}
          <div className="ml-auto flex items-center gap-2">
            {/* Desktop CTA: leicht grau, umrandet, Shadow */}
            <Link
              href="/kontakt"
              className={[
                'hidden md:inline-flex',
                'h-10 items-center justify-center rounded-full px-5 text-xs font-semibold',
                'border border-slate-900/10 bg-slate-50 text-slate-900 shadow-sm transition',
                'hover:bg-slate-100 hover:shadow-[0_10px_30px_rgba(15,23,42,0.10)]',
                'focus:outline-none focus:ring-2 focus:ring-slate-900/10',
              ].join(' ')}
            >
              Kontakt
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

      {/* Mobile dropdown (fixed unter Header, KEIN body-lock => kein Bug) */}
      {open && (
        <div className="md:hidden">
          {/* Backdrop ab unter Header */}
          <button
            type="button"
            aria-label="Menü schließen"
            onClick={() => setOpen(false)}
            className="fixed inset-0 top-16 z-[70] bg-slate-900/10 backdrop-blur-[2px]"
          />

          {/* Panel */}
          <div className="fixed inset-x-0 top-16 z-[75]">
            <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
              <div className="mt-3 overflow-hidden rounded-2xl border border-slate-900/10 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.12)]">
                <nav className="p-2">
                  {items.map((item) => {
                    const active = pathname === item.href
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
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

                  <Link
                    href="/kontakt"
                    onClick={() => setOpen(false)}
                    className={[
                      'mt-2 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold',
                      'border border-slate-900/10 bg-slate-50 text-slate-900 shadow-sm transition',
                      'hover:bg-slate-100',
                    ].join(' ')}
                  >
                    Kontakt →
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

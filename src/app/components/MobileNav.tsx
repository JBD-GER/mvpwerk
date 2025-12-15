// src/app/components/MobileNav.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

type NavItem = { href: string; label: string }

export default function MobileNav({ nav }: { nav: NavItem[] }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const items = useMemo(() => nav.filter(Boolean), [nav])

  // Scroll-Position merken (für iOS-Fix-Lock)
  const scrollYRef = useRef(0)

  // ESC schließen + Body/HTML scroll lock (robust, inkl. iOS)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)

    const body = document.body
    const html = document.documentElement

    if (open) {
      // aktuelle Scrollposition merken
      scrollYRef.current = window.scrollY || 0

      // html sperren (bei vielen Layouts scrollt html statt body)
      html.style.overflow = 'hidden'
      html.style.height = '100%'

      // iOS/Browser-safe: body auf fixed setzen
      body.style.position = 'fixed'
      body.style.top = `-${scrollYRef.current}px`
      body.style.left = '0'
      body.style.right = '0'
      body.style.width = '100%'
      body.style.overflow = 'hidden'
      body.style.height = '100%'
      body.style.touchAction = 'none'
    } else {
      // Restore
      html.style.overflow = ''
      html.style.height = ''

      body.style.position = ''
      body.style.top = ''
      body.style.left = ''
      body.style.right = ''
      body.style.width = ''
      body.style.overflow = ''
      body.style.height = ''
      body.style.touchAction = ''

      // Scrollposition wiederherstellen
      if (scrollYRef.current) {
        window.scrollTo(0, scrollYRef.current)
      }
    }

    return () => {
      window.removeEventListener('keydown', onKey)

      // Cleanup (falls unmount bei open)
      html.style.overflow = ''
      html.style.height = ''

      body.style.position = ''
      body.style.top = ''
      body.style.left = ''
      body.style.right = ''
      body.style.width = ''
      body.style.overflow = ''
      body.style.height = ''
      body.style.touchAction = ''
    }
  }, [open])

  return (
    <>
      {/* Burger */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-900/10 bg-white text-slate-900 shadow-sm transition hover:bg-white/95 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
        aria-label="Menü öffnen"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
        </svg>
      </button>

      {/* Overlay */}
      <div
        className={[
          'fixed inset-0 z-[70] transition',
          open ? 'pointer-events-auto' : 'pointer-events-none',
        ].join(' ')}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <button
          aria-label="Menü schließen"
          onClick={() => setOpen(false)}
          className={[
            'absolute inset-0 bg-slate-900/35 backdrop-blur-sm transition-opacity',
            open ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
        />

        {/* Drawer */}
        <aside
          role="dialog"
          aria-modal="true"
          className={[
            'absolute right-0 top-0 h-[100dvh] w-[86vw] max-w-[380px]',
            'border-l border-slate-900/10 bg-white shadow-[0_40px_120px_rgba(15,23,42,0.25)]',
            'transition-transform duration-300 ease-out',
            'flex flex-col', // ✅ innen scrollbar möglich
            open ? 'translate-x-0' : 'translate-x-full',
          ].join(' ')}
        >
          {/* Top (safe-area) */}
          <div className="flex items-center justify-between px-5 pb-3 pt-[calc(env(safe-area-inset-top)+14px)]">
            <Link href="/" onClick={() => setOpen(false)} className="inline-flex items-center gap-2" aria-label="Zur Startseite">
              <Image
                src="/logos/mvpwerk_logo_trans.png"
                alt="MVPWERK"
                width={120}
                height={28}
                className="h-6 w-auto"
                priority
              />
            </Link>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-900/10 bg-white text-slate-900 shadow-sm transition hover:bg-white/95 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
              aria-label="Schließen"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6l-12 12" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Divider */}
          <div className="px-5">
            <div className="h-px w-full bg-slate-900/10" />
          </div>

          {/* Links (scrollbar innerhalb Drawer) */}
          <nav className="flex-1 overflow-y-auto overscroll-contain px-3 py-3">
            <div className="space-y-1">
              {items.map((item) => {
                const active = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={[
                      'group flex items-center gap-3 rounded-2xl px-4 py-3 text-[15px] font-medium transition',
                      active
                        ? 'bg-slate-900 text-white shadow-[0_14px_40px_rgba(15,23,42,0.20)]'
                        : 'text-slate-900 hover:bg-slate-900/5',
                    ].join(' ')}
                  >
                    <span
                      className={[
                        'h-2 w-2 rounded-full transition',
                        active ? 'bg-white' : 'bg-slate-900/25 group-hover:bg-slate-900/35',
                      ].join(' ')}
                      aria-hidden
                    />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>
          </nav>

          {/* Bottom sticky CTA */}
          <div className="border-t border-slate-900/10 bg-white px-5 pb-[calc(env(safe-area-inset-bottom)+16px)] pt-4">
            <Link
              href="/kontakt"
              onClick={() => setOpen(false)}
              className="inline-flex h-12 w-full items-center justify-center rounded-2xl bg-slate-900 px-5 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(15,23,42,0.22)] transition hover:bg-slate-800"
            >
              Kontakt <span className="ml-2">→</span>
            </Link>

            <div className="mt-3 text-center text-[11px] text-slate-600">
              Unverbindlich · Antwort meist am selben Tag
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}

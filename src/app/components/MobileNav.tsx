'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

type NavItem = { href: string; label: string }

export default function MobileNav({ nav }: { nav: NavItem[] }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const items = useMemo(() => nav.filter(Boolean), [nav])

  // Scroll-Position merken (für iOS Fixed-Lock)
  const scrollYRef = useRef(0)

  function close() {
    setOpen(false)
  }

  // ✅ Wichtig: erst entsperren, dann navigieren (verhindert „schwarzen Screen“/Bug-Layer)
  function go(href: string) {
    setOpen(false)
    requestAnimationFrame(() => {
      router.push(href)
    })
  }

  // ESC schließen + robustes Scroll-Lock (inkl. iOS)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)

    const body = document.body
    const html = document.documentElement

    if (open) {
      scrollYRef.current = window.scrollY || 0

      // html sperren
      html.style.overflow = 'hidden'

      // iOS-sicher: body fixed
      body.style.position = 'fixed'
      body.style.top = `-${scrollYRef.current}px`
      body.style.left = '0'
      body.style.right = '0'
      body.style.width = '100%'
      body.style.overflow = 'hidden'
      body.style.touchAction = 'none'
    } else {
      // Restore
      html.style.overflow = ''

      body.style.position = ''
      body.style.top = ''
      body.style.left = ''
      body.style.right = ''
      body.style.width = ''
      body.style.overflow = ''
      body.style.touchAction = ''

      window.scrollTo(0, scrollYRef.current || 0)
    }

    return () => {
      window.removeEventListener('keydown', onKey)

      // Cleanup (auch wenn unmount während open=true)
      html.style.overflow = ''

      body.style.position = ''
      body.style.top = ''
      body.style.left = ''
      body.style.right = ''
      body.style.width = ''
      body.style.overflow = ''
      body.style.touchAction = ''

      window.scrollTo(0, scrollYRef.current || 0)
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

      {/* Overlay (nur sichtbar wenn open) */}
      <div
        className={[
          'fixed inset-0 z-[90] transition',
          open ? 'pointer-events-auto' : 'pointer-events-none',
        ].join(' ')}
        aria-hidden={!open}
      >
        {/* Backdrop — ✅ heller (nicht schwarz) + smooth */}
        <button
          type="button"
          aria-label="Menü schließen"
          onClick={close}
          className={[
            'absolute inset-0 transition-opacity',
            'bg-slate-900/20 backdrop-blur-[2px]', // <= hier: NICHT zu dunkel
            open ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
        />

        {/* Drawer */}
        <aside
          role="dialog"
          aria-modal="true"
          className={[
            'absolute right-0 top-0 h-[100dvh] w-[86vw] max-w-[380px]',
            'border-l border-slate-900/10 bg-white shadow-[0_40px_120px_rgba(15,23,42,0.20)]',
            'transition-transform duration-300 ease-out',
            'flex flex-col',
            open ? 'translate-x-0' : 'translate-x-full',
          ].join(' ')}
        >
          {/* Top (safe-area) */}
          <div className="flex items-center justify-between px-5 pb-3 pt-[calc(env(safe-area-inset-top)+14px)]">
            {/* Logo: via router, damit erst entsperrt wird */}
            <button
              type="button"
              onClick={() => go('/')}
              className="inline-flex items-center gap-2"
              aria-label="Zur Startseite"
            >
              <Image
                src="/logos/mvpwerk_logo_trans.png"
                alt="MVPWERK"
                width={120}
                height={28}
                className="h-6 w-auto"
                priority
              />
            </button>

            <button
              type="button"
              onClick={close}
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
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => go(item.href)}
                    className={[
                      'group flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-[15px] font-medium transition',
                      active
                        ? 'bg-slate-900 text-white shadow-[0_14px_40px_rgba(15,23,42,0.16)]'
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
                  </button>
                )
              })}
            </div>
          </nav>

          {/* Bottom sticky CTA */}
          <div className="border-t border-slate-900/10 bg-white px-5 pb-[calc(env(safe-area-inset-bottom)+16px)] pt-4">
            <button
              type="button"
              onClick={() => go('/kontakt')}
              className="inline-flex h-12 w-full items-center justify-center rounded-2xl bg-slate-900 px-5 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(15,23,42,0.18)] transition hover:bg-slate-800"
            >
              Kontakt <span className="ml-2">→</span>
            </button>

            <div className="mt-3 text-center text-[11px] text-slate-600">
              Unverbindlich · Antwort meist am selben Tag
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}

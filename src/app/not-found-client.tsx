'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

type Lang = 'de' | 'en'

function normalizeLang(v: string | null): Lang {
  const x = (v || '').toLowerCase()
  if (x === 'en' || x.startsWith('en-')) return 'en'
  return 'de'
}

export default function NotFoundClient() {
  const sp = useSearchParams()
  const lang = normalizeLang(sp.get('lang'))

  const t =
    lang === 'en'
      ? {
          badge: '404 · Not found',
          title: 'This page does not exist.',
          text: 'The link may be wrong or the page was moved.',
          home: 'Back to home',
          contact: 'Contact',
        }
      : {
          badge: '404 · Nicht gefunden',
          title: 'Diese Seite gibt es nicht.',
          text: 'Der Link ist ggf. falsch oder die Seite wurde verschoben.',
          home: 'Zur Startseite',
          contact: 'Kontakt',
        }

  const withLang = (href: string) => (lang === 'en' ? `${href}?lang=en` : href)

  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-slate-900">
      {/* Background (clean/glass) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-slate-900/10 blur-3xl md:h-[720px] md:w-[720px]" />
        <div className="absolute -top-16 right-[-120px] h-[420px] w-[420px] rounded-full bg-slate-900/8 blur-3xl md:h-[560px] md:w-[560px]" />
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_72%)]" />
      </div>

      <div className="relative mx-auto max-w-[1100px] px-4 py-16 sm:px-6">
        <div className="rounded-[1.8rem] border border-slate-900/10 bg-white/70 p-6 shadow-[0_22px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:p-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-rose-500/70" />
            {t.badge}
          </div>

          <h1 className="mt-4 text-[28px] font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-[38px]">
            {t.title}
          </h1>

          <p className="mt-3 max-w-[720px] text-[14px] leading-relaxed text-slate-700 sm:text-[15px]">
            {t.text}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={withLang('/')}
              className="inline-flex h-12 items-center justify-center rounded-2xl bg-slate-900 px-6 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(15,23,42,0.22)] transition hover:translate-y-[-1px] hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
            >
              {t.home} <span className="ml-2">→</span>
            </Link>

            <Link
              href={withLang('/kontakt')}
              className="inline-flex h-12 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/70 px-6 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10"
            >
              {t.contact}
            </Link>
          </div>

          <div className="pointer-events-none absolute inset-0 rounded-[1.8rem] ring-1 ring-inset ring-white/50" />
        </div>
      </div>
    </main>
  )
}

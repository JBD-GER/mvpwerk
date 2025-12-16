'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { readConsent, writeConsent } from '@/lib/consent'

type Mode = 'banner' | 'settings'
type Lang = 'de' | 'en'

const DEFAULTS = {
  analytics: false,
  marketing: false,
}

const T = {
  de: {
    aria: 'Cookie-Einwilligung',
    badge: 'Cookie-Einwilligung',
    title: 'Wir verwenden Cookies & ähnliche Technologien',
    text:
      'Notwendige Cookies sind für den Betrieb der Website erforderlich. Optional nutzen wir Statistik (z. B. Google Analytics) und ggf. Marketing, um Reichweite und Conversions zu messen. Sie können Ihre Auswahl jederzeit ändern.',
    current: 'Aktuell:',
    privacy: 'Datenschutz',
    acceptAll: 'Alle akzeptieren',
    rejectAll: 'Ablehnen',
    settings: 'Einstellungen',
    save: 'Auswahl speichern',
    back: 'Zurück',
    footer: 'Kein Spam · unverbindlich · ',
    made: 'Made in Germany',
    // summary + toggles
    necessary: 'Notwendig',
    analytics: 'Statistik',
    marketing: 'Marketing',
    nDesc: 'Betrieb & Sicherheit.',
    aDesc: 'Nutzung messen.',
    mDesc: 'Kampagnen messen.',
  },
  en: {
    aria: 'Cookie consent',
    badge: 'Cookie consent',
    title: 'We use cookies & similar technologies',
    text:
      'Necessary cookies are required to operate this website. Optionally, we use analytics (e.g., Google Analytics) and marketing to measure reach and conversions. You can change your choice at any time.',
    current: 'Current:',
    privacy: 'Privacy policy',
    acceptAll: 'Accept all',
    rejectAll: 'Reject',
    settings: 'Settings',
    save: 'Save selection',
    back: 'Back',
    footer: 'No spam · non-binding · ',
    made: 'Made in Germany',
    // summary + toggles
    necessary: 'Necessary',
    analytics: 'Analytics',
    marketing: 'Marketing',
    nDesc: 'Operation & security.',
    aDesc: 'Measure usage.',
    mDesc: 'Measure campaigns.',
  },
} as const

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const m = document.cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`))
  return m ? decodeURIComponent(m[1]) : null
}

function getLangClient(): Lang {
  if (typeof window === 'undefined') return 'de'

  // 1) URL ?lang=
  const sp = new URLSearchParams(window.location.search)
  const q = sp.get('lang')
  if (q === 'de' || q === 'en') return q

  // 2) Cookie von Middleware
  const c = getCookie('mvpwerk_lang')
  if (c === 'de' || c === 'en') return c

  // 3) Browser language
  const nav = (navigator.languages?.[0] || navigator.language || '').toLowerCase()
  return nav.startsWith('de') ? 'de' : 'en'
}

export default function ConsentBanner() {
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState<Mode>('banner')

  const [analytics, setAnalytics] = useState(DEFAULTS.analytics)
  const [marketing, setMarketing] = useState(DEFAULTS.marketing)

  const [lang, setLang] = useState<Lang>('de')
  const t = T[lang]

  // initial language (und bei back/forward etc. stabil)
  useEffect(() => {
    setLang(getLangClient())
  }, [])

  // open via global event (footer)
  useEffect(() => {
    const onOpen = () => {
      // Sprache beim Öffnen nochmal ziehen (falls URL/Cookie gewechselt)
      setLang(getLangClient())

      const current = readConsent()
      setAnalytics(current?.analytics ?? DEFAULTS.analytics)
      setMarketing(current?.marketing ?? DEFAULTS.marketing)
      setMode('settings')
      setOpen(true)
    }
    window.addEventListener('mvpwerk:open-consent', onOpen)
    return () => window.removeEventListener('mvpwerk:open-consent', onOpen)
  }, [])

  // initial open (wenn noch nichts gesetzt)
  useEffect(() => {
    const current = readConsent()
    if (!current) {
      setAnalytics(DEFAULTS.analytics)
      setMarketing(DEFAULTS.marketing)
      setMode('banner')
      setOpen(true)
    }
  }, [])

  // ESC schließt
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

const summary = useMemo(() => {
  const parts: string[] = [t.necessary] // ✅ TS: jetzt dürfen alle Strings rein
  if (analytics) parts.push(t.analytics)
  if (marketing) parts.push(t.marketing)
  return parts.join(' · ')
}, [analytics, marketing, t])


  function close() {
    setOpen(false)
    setMode('banner')
  }

  function acceptAll() {
    writeConsent({ analytics: true, marketing: true })
    close()
  }

  function rejectAll() {
    writeConsent({ analytics: false, marketing: false })
    close()
  }

  function saveSelection() {
    writeConsent({ analytics, marketing })
    close()
  }

  if (!open) return null

  return (
    <div
      className={['fixed inset-0 z-[80]', 'flex items-end justify-center p-4 sm:p-6'].join(' ')}
      role="dialog"
      aria-modal="true"
      aria-label={t.aria}
    >
      {/* Backdrop (blockt Scroll/Touch ohne Body-Fixes) */}
      <div
        aria-hidden
        onClick={close}
        onWheel={(e) => e.preventDefault()}
        onTouchMove={(e) => e.preventDefault()}
        className="absolute inset-0 bg-slate-900/20 backdrop-blur-[2px] [touch-action:none]"
      />

      {/* Slim banner */}
      <div className="relative w-full max-w-[920px]">
        <div
          className={[
            'relative overflow-hidden rounded-[1.6rem] border border-slate-900/10 bg-white/85',
            'shadow-[0_20px_70px_rgba(15,23,42,0.12)] backdrop-blur-xl',
          ].join(' ')}
        >
          {/* subtle sheen */}
          <div className="pointer-events-none absolute inset-0 opacity-50">
            <div className="mvpwerk-consent-sheen absolute -left-1/2 top-0 h-full w-[200%]" />
          </div>

          <div className="relative p-4 sm:p-5">
            {/* badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/75 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
              {t.badge}
            </div>

            <div className="mt-3">
              <div className="text-[18px] font-semibold tracking-tight text-slate-900 sm:text-[20px]">
                {t.title}
              </div>

              <p className="mt-2 max-w-[980px] text-[12px] leading-relaxed text-slate-700 sm:text-[13px]">
                {t.text}
              </p>

              <div className="mt-2 text-[11px] text-slate-600">
                {t.current} <span className="font-medium text-slate-900">{summary}</span> ·{' '}
                <Link href="/datenschutz" className="font-medium text-slate-900 underline underline-offset-2">
                  {t.privacy}
                </Link>
              </div>
            </div>

            {/* Buttons under text — LINKS bündig */}
            {mode === 'banner' ? (
              <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-start">
                <button
                  onClick={acceptAll}
                  className={[
                    'inline-flex h-11 w-full items-center justify-center rounded-2xl px-4 text-[12px] font-semibold transition sm:w-auto',
                    'border border-slate-900/15 bg-white/85 text-slate-900 shadow-[0_18px_55px_rgba(15,23,42,0.12)] backdrop-blur',
                    'hover:bg-white hover:translate-y-[-1px] focus:outline-none focus:ring-2 focus:ring-slate-900/10',
                  ].join(' ')}
                >
                  {t.acceptAll}
                </button>

                <button
                  onClick={rejectAll}
                  className="inline-flex h-11 w-full items-center justify-center rounded-2xl border border-slate-900/10 bg-white/75 px-4 text-[12px] font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10 sm:w-auto"
                >
                  {t.rejectAll}
                </button>

                <button
                  onClick={() => setMode('settings')}
                  className="inline-flex h-11 w-full items-center justify-center rounded-2xl border border-slate-900/10 bg-white/75 px-4 text-[12px] font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10 sm:w-auto"
                >
                  {t.settings}
                </button>
              </div>
            ) : (
              <>
                {/* Settings area (compact) */}
                <div className="mt-4 grid gap-2 sm:grid-cols-3">
                  <ToggleRow title={t.necessary} description={t.nDesc} enabled locked />
                  <ToggleRow title={t.analytics} description={t.aDesc} enabled={analytics} onChange={setAnalytics} />
                  <ToggleRow title={t.marketing} description={t.mDesc} enabled={marketing} onChange={setMarketing} />
                </div>

                {/* Buttons settings — LINKS bündig */}
                <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-start">
                  <button
                    onClick={saveSelection}
                    className={[
                      'inline-flex h-11 w-full items-center justify-center rounded-2xl px-4 text-[12px] font-semibold transition sm:w-auto',
                      'border border-slate-900/15 bg-white/85 text-slate-900 shadow-[0_18px_55px_rgba(15,23,42,0.12)] backdrop-blur',
                      'hover:bg-white hover:translate-y-[-1px] focus:outline-none focus:ring-2 focus:ring-slate-900/10',
                    ].join(' ')}
                  >
                    {t.save}
                  </button>

                  <button
                    onClick={() => setMode('banner')}
                    className="inline-flex h-11 w-full items-center justify-center rounded-2xl border border-slate-900/10 bg-white/75 px-4 text-[12px] font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10 sm:w-auto"
                  >
                    {t.back}
                  </button>
                </div>
              </>
            )}

            <div className="mt-3 text-[11px] text-slate-600">
              {t.footer}
              <span className="font-medium text-slate-900">{t.made}</span>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] ring-1 ring-inset ring-white/50" />
        </div>
      </div>

      <style>{`
        .mvpwerk-consent-sheen{
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(15,23,42,0.05) 35%,
            rgba(15,23,42,0.10) 50%,
            rgba(15,23,42,0.05) 65%,
            transparent 100%
          );
          transform: translateX(-35%);
          animation: consentSheen 9s ease-in-out infinite;
          filter: blur(0.5px);
          will-change: transform, opacity;
          opacity: .55;
        }
        @keyframes consentSheen{
          0%{ transform: translateX(-35%); opacity:0.18; }
          50%{ transform: translateX(0%); opacity:0.42; }
          100%{ transform: translateX(35%); opacity:0.18; }
        }
        @media (prefers-reduced-motion: reduce){
          .mvpwerk-consent-sheen{ animation:none !important; transform:none !important; }
        }
      `}</style>
    </div>
  )
}

function ToggleRow({
  title,
  description,
  enabled,
  locked,
  onChange,
}: {
  title: string
  description: string
  enabled: boolean
  locked?: boolean
  onChange?: (v: boolean) => void
}) {
  return (
    <div className="rounded-2xl border border-slate-900/10 bg-white/75 p-3 shadow-sm backdrop-blur">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="text-[12px] font-semibold text-slate-900">{title}</div>
          <div className="mt-1 text-[11px] leading-relaxed text-slate-600">{description}</div>
        </div>

        <button
          type="button"
          disabled={locked}
          onClick={() => onChange?.(!enabled)}
          className={[
            'relative inline-flex h-7 w-12 shrink-0 items-center rounded-full border transition',
            locked ? 'cursor-not-allowed opacity-70' : 'cursor-pointer',
            enabled ? 'border-slate-900/10 bg-emerald-500/60' : 'border-slate-900/10 bg-white/70',
          ].join(' ')}
          aria-pressed={enabled}
          aria-label={`${title} ${enabled ? 'active' : 'inactive'}`}
        >
          <span
            className={[
              'inline-block h-6 w-6 translate-x-0.5 rounded-full bg-white shadow-sm transition',
              enabled ? 'translate-x-[1.35rem]' : 'translate-x-0.5',
            ].join(' ')}
          />
        </button>
      </div>
    </div>
  )
}

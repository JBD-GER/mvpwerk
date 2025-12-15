'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { readConsent, writeConsent } from '@/lib/consent'

type Mode = 'banner' | 'settings'

const DEFAULTS = {
  analytics: false,
  marketing: false,
}

export default function ConsentBanner() {
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState<Mode>('banner')

  const [analytics, setAnalytics] = useState(DEFAULTS.analytics)
  const [marketing, setMarketing] = useState(DEFAULTS.marketing)

  // open via global event (footer)
  useEffect(() => {
    const onOpen = () => {
      const current = readConsent()
      setAnalytics(current?.analytics ?? DEFAULTS.analytics)
      setMarketing(current?.marketing ?? DEFAULTS.marketing)
      setMode('settings')
      setOpen(true)
    }
    window.addEventListener('mvpwerk:open-consent', onOpen)
    return () => window.removeEventListener('mvpwerk:open-consent', onOpen)
  }, [])

  // initial
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
    const parts = ['Notwendig']
    if (analytics) parts.push('Statistik')
    if (marketing) parts.push('Marketing')
    return parts.join(' · ')
  }, [analytics, marketing])

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
      className={[
        'fixed inset-0 z-[80]',
        'flex items-end justify-center p-4 sm:p-6',
      ].join(' ')}
      role="dialog"
      aria-modal="true"
      aria-label="Cookie-Einwilligung"
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
              Cookie-Einwilligung
            </div>

            <div className="mt-3">
              <div className="text-[18px] font-semibold tracking-tight text-slate-900 sm:text-[20px]">
                Wir verwenden Cookies &amp; ähnliche Technologien
              </div>

              <p className="mt-2 max-w-[980px] text-[12px] leading-relaxed text-slate-700 sm:text-[13px]">
                Notwendige Cookies sind für den Betrieb der Website erforderlich. Optional nutzen wir Statistik (z.&nbsp;B.
                Google Analytics) und ggf. Marketing, um Reichweite und Conversions zu messen. Sie können Ihre Auswahl
                jederzeit ändern.
              </p>

              <div className="mt-2 text-[11px] text-slate-600">
                Aktuell: <span className="font-medium text-slate-900">{summary}</span> ·{' '}
                <Link href="/datenschutz" className="font-medium text-slate-900 underline underline-offset-2">
                  Datenschutz
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
                  Alle akzeptieren
                </button>

                <button
                  onClick={rejectAll}
                  className="inline-flex h-11 w-full items-center justify-center rounded-2xl border border-slate-900/10 bg-white/75 px-4 text-[12px] font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10 sm:w-auto"
                >
                  Ablehnen
                </button>

                <button
                  onClick={() => setMode('settings')}
                  className="inline-flex h-11 w-full items-center justify-center rounded-2xl border border-slate-900/10 bg-white/75 px-4 text-[12px] font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10 sm:w-auto"
                >
                  Einstellungen
                </button>
              </div>
            ) : (
              <>
                {/* Settings area (compact) */}
                <div className="mt-4 grid gap-2 sm:grid-cols-3">
                  <ToggleRow title="Notwendig" description="Betrieb & Sicherheit." enabled locked />
                  <ToggleRow
                    title="Statistik"
                    description="Nutzung messen."
                    enabled={analytics}
                    onChange={setAnalytics}
                  />
                  <ToggleRow
                    title="Marketing"
                    description="Kampagnen messen."
                    enabled={marketing}
                    onChange={setMarketing}
                  />
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
                    Auswahl speichern
                  </button>

                  <button
                    onClick={() => setMode('banner')}
                    className="inline-flex h-11 w-full items-center justify-center rounded-2xl border border-slate-900/10 bg-white/75 px-4 text-[12px] font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10 sm:w-auto"
                  >
                    Zurück
                  </button>
                </div>
              </>
            )}

            <div className="mt-3 text-[11px] text-slate-600">
              Kein Spam · unverbindlich · <span className="font-medium text-slate-900">Made in Germany</span>
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
          aria-label={`${title} ${enabled ? 'aktiv' : 'inaktiv'}`}
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

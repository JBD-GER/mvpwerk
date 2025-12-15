// src/app/components/ConsentBanner.tsx
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

  // open via global event (e.g. footer button)
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

  // initial check
  useEffect(() => {
    const current = readConsent()
    if (!current) {
      setAnalytics(DEFAULTS.analytics)
      setMarketing(DEFAULTS.marketing)
      setMode('banner')
      setOpen(true)
    }
  }, [])

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
    <div className="fixed inset-0 z-[80] flex items-end justify-center overflow-y-auto overscroll-contain p-4 sm:p-6">
      {/* Backdrop (kein Button => kein Scroll-/Touch-Fokus-Ärger) */}
      <div
        aria-hidden
        onClick={close}
        className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"
      />

      {/* Panel wrapper */}
      <div className="relative w-full max-w-[760px]">
        <div
          className={[
            'relative overflow-hidden rounded-[1.8rem] border border-slate-900/10 bg-white/80',
            'shadow-[0_28px_90px_rgba(15,23,42,0.16)] backdrop-blur-xl',
            // wichtig: Panel darf nicht höher als Viewport werden
            'max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-3rem)]',
          ].join(' ')}
        >
          {/* Sheen */}
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="mvpwerk-consent-sheen absolute -left-1/2 top-0 h-full w-[200%]" />
          </div>

          {/* Scroll area inside panel */}
          <div className="relative max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch]">
            <div className="p-5 sm:p-6">
              {/* Header */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
                    Cookie-Einwilligung
                  </div>

                  <h2 className="mt-3 text-[18px] font-semibold tracking-tight text-slate-900 sm:text-[20px]">
                    Wir verwenden Cookies &amp; ähnliche Technologien
                  </h2>

                  <p className="mt-2 max-w-[760px] text-[12px] leading-relaxed text-slate-700 sm:text-[13px]">
                    Notwendige Cookies sind für den Betrieb der Website erforderlich. Optional nutzen wir Statistik (z. B.
                    Google Analytics) und ggf. Marketing, um Reichweite und Conversions zu messen. Sie können Ihre Auswahl
                    jederzeit ändern.
                  </p>

                  <div className="mt-3 text-[11px] text-slate-600">
                    Aktuell: <span className="font-medium text-slate-900">{summary}</span> ·{' '}
                    <Link
                      href="/datenschutz"
                      className="font-medium text-slate-900 underline underline-offset-2"
                    >
                      Datenschutz
                    </Link>
                  </div>
                </div>

                {/* Desktop actions: je Mode passend (verhindert „Doppel-Buttons“ + weniger Höhe) */}
                <div className="hidden shrink-0 gap-2 sm:flex">
                  {mode === 'banner' ? (
                    <>
                      <button
                        onClick={rejectAll}
                        className="inline-flex h-11 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/70 px-4 text-[12px] font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                      >
                        Ablehnen
                      </button>
                      <button
                        onClick={() => setMode('settings')}
                        className="inline-flex h-11 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/70 px-4 text-[12px] font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                      >
                        Einstellungen
                      </button>
                      <button
                        onClick={acceptAll}
                        className="inline-flex h-11 items-center justify-center rounded-2xl bg-slate-900 px-4 text-[12px] font-semibold text-white shadow-[0_18px_55px_rgba(15,23,42,0.22)] transition hover:translate-y-[-1px] hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
                      >
                        Alle akzeptieren
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => setMode('banner')}
                        className="inline-flex h-11 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/70 px-4 text-[12px] font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                      >
                        Zurück
                      </button>
                      <button
                        onClick={saveSelection}
                        className="inline-flex h-11 items-center justify-center rounded-2xl bg-slate-900 px-4 text-[12px] font-semibold text-white shadow-[0_18px_55px_rgba(15,23,42,0.22)] transition hover:translate-y-[-1px] hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
                      >
                        Auswahl speichern
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Settings */}
              {mode === 'settings' && (
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <ToggleCard
                    title="Notwendig"
                    description="Für grundlegende Funktionen, Sicherheit und die Darstellung der Website."
                    enabled
                    locked
                  />
                  <ToggleCard
                    title="Statistik"
                    description="Hilft uns zu verstehen, wie die Website genutzt wird (z. B. GA4 Events/Conversions)."
                    enabled={analytics}
                    onChange={setAnalytics}
                  />
                  <ToggleCard
                    title="Marketing"
                    description="Optional für Marketing-/Conversion-Messung (z. B. Kampagnen-Optimierung)."
                    enabled={marketing}
                    onChange={setMarketing}
                  />

                  <div className="rounded-2xl border border-slate-900/10 bg-white/70 p-4 text-[12px] leading-relaxed text-slate-700 shadow-sm backdrop-blur sm:col-span-2">
                    <div className="font-semibold text-slate-900">Hinweis</div>
                    Ihre Auswahl wird im <span className="font-semibold text-slate-900">localStorage</span> gespeichert
                    (klassisch) und kann über „Cookie-Einstellungen“ jederzeit angepasst werden.
                  </div>
                </div>
              )}

              {/* Mobile buttons (nur im Banner-Modus, sonst wird’s zu hoch & unübersichtlich) */}
              {mode === 'banner' && (
                <div className="mt-5 flex flex-col gap-2 sm:hidden">
                  <button
                    onClick={acceptAll}
                    className="inline-flex h-12 w-full items-center justify-center rounded-2xl bg-slate-900 px-6 text-[13px] font-semibold text-white shadow-[0_18px_55px_rgba(15,23,42,0.22)] transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
                  >
                    Alle akzeptieren
                  </button>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={rejectAll}
                      className="inline-flex h-12 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/70 px-4 text-[13px] font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                    >
                      Ablehnen
                    </button>
                    <button
                      onClick={() => setMode('settings')}
                      className="inline-flex h-12 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/70 px-4 text-[13px] font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                    >
                      Einstellungen
                    </button>
                  </div>
                </div>
              )}

              {/* Mobile actions in settings */}
              {mode === 'settings' && (
                <div className="mt-4 flex flex-col gap-2 sm:hidden">
                  <button
                    onClick={saveSelection}
                    className="inline-flex h-12 w-full items-center justify-center rounded-2xl bg-slate-900 px-6 text-[13px] font-semibold text-white shadow-[0_18px_55px_rgba(15,23,42,0.22)] transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
                  >
                    Auswahl speichern
                  </button>
                  <button
                    onClick={() => setMode('banner')}
                    className="inline-flex h-12 w-full items-center justify-center rounded-2xl border border-slate-900/10 bg-white/70 px-6 text-[13px] font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                  >
                    Zurück
                  </button>
                </div>
              )}

              <div className="mt-4 text-[11px] text-slate-600">
                Kein Spam · unverbindlich ·{' '}
                <span className="font-medium text-slate-900">Made in Germany</span>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 rounded-[1.8rem] ring-1 ring-inset ring-white/50" />
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
        }
        @keyframes consentSheen{
          0%{ transform: translateX(-35%); opacity:0.20; }
          50%{ transform: translateX(0%); opacity:0.45; }
          100%{ transform: translateX(35%); opacity:0.20; }
        }
        @media (prefers-reduced-motion: reduce){
          .mvpwerk-consent-sheen{ animation:none !important; transform:none !important; }
        }
      `}</style>
    </div>
  )
}

function ToggleCard({
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
    <div className="rounded-2xl border border-slate-900/10 bg-white/70 p-4 shadow-sm backdrop-blur">
      <div className="flex items-start justify-between gap-4">
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
            enabled ? 'border-slate-900/10 bg-emerald-500/70' : 'border-slate-900/10 bg-white/70',
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

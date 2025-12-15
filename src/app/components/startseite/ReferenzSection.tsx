// src/app/components/startseite/ReferenzSection.tsx
'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const FEATURES = [
  {
    t: 'Nahtlose KI-Integration',
    s: 'Secured End-to-End Flow. Saubere KI-Integration.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[16px] w-[16px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 7h10M7 12h10M7 17h7" />
        <path d="M6 3h12a2 2 0 0 1 2 2v14l-3-2-3 2-3-2-3 2V5a2 2 0 0 1 2-2z" />
      </svg>
    ),
  },
  {
    t: 'Login, Rollen & Rechte',
    s: 'Mehrbenutzerfähig, sauber strukturiert, korrekte Zugriffsrechte.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[16px] w-[16px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4z" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </svg>
    ),
  },
  {
    t: 'Supabase RLS / Multi-Tenant',
    s: 'Datenzugriff pro Team/Account abgesichert. Sauber & übergabefähig.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[16px] w-[16px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3l8 4v6c0 5-3 8-8 8s-8-3-8-8V7l8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    t: 'Dashboards & KPIs',
    s: 'Status, Charts, Filter – wirkt sofort „fertig“. Perfektes Design.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[16px] w-[16px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="M8 15v-4" />
        <path d="M12 15v-7" />
        <path d="M16 15v-10" />
      </svg>
    ),
  },
  {
    t: 'Dokumente & Uploads',
    s: 'Storage + Zugriffslogik statt „nur Download-Link“. Gesicherte Ablage.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[16px] w-[16px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3v12" />
        <path d="M8 7l4-4 4 4" />
        <path d="M4 21h16" />
      </svg>
    ),
  },
  {
    t: 'Next.js + APIs (Full-Stack)',
    s: 'API Routes, Server-Logic, Validierung – übergabefähig.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[16px] w-[16px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 9l-3 3 3 3" />
        <path d="M16 9l3 3-3 3" />
        <path d="M13 7l-2 10" />
      </svg>
    ),
  },
]

export default function ReferenzSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0]
        if (e?.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-24 md:pb-20">
      {/* Background: weiß + soft Halo + Fades (kein harter Cut) */}
      <div className="pointer-events-none absolute inset-0 bg-white" />
      <div className="pointer-events-none absolute inset-x-0 top-[-140px] mx-auto h-[520px] w-[520px] rounded-full bg-slate-900/5 blur-3xl sm:h-[720px] sm:w-[720px]" />
      <div className="pointer-events-none absolute inset-x-0 top-[40px] mx-auto h-[420px] w-[420px] rounded-full bg-slate-900/4 blur-3xl sm:h-[560px] sm:w-[560px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white to-transparent" />

      {/* WICHTIG: Bottom-Fade höher, damit der Card-Shadow sicher „verschwindet“ */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[260px] bg-gradient-to-t from-white via-white to-transparent" />

      <div className="relative mx-auto w-full max-w-[1100px] px-4 sm:px-6">
        {/* Header */}
        <div
          className={[
            'mx-auto max-w-[820px] text-center transition-all duration-700 ease-out',
            visible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0',
          ].join(' ')}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
            Referenz · Live-Demo
          </div>

          <h2 className="mt-4 text-[28px] font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-[38px] md:text-[44px]">
            Fertiges Kundenprojekt live ansehen.
          </h2>

          <p className="mt-3 text-[14px] leading-relaxed text-slate-700 sm:text-[15px]">
            Öffnen Sie <strong className="font-semibold text-slate-900">GLENO</strong> und klicken Sie sich direkt durchs Dashboard.
            Produktion, echtes UI, echte Performance.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://gleno.de"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-12 w-full items-center justify-center rounded-2xl bg-slate-900 px-6 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(15,23,42,0.22)] transition hover:translate-y-[-1px] hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20 sm:w-auto"
            >
              GLENO live öffnen
              <span className="ml-2 inline-block transition group-hover:translate-x-0.5">↗</span>
            </a>

            <div className="text-[11px] text-slate-600">Öffnet in neuem Tab · kostenlose Anmeldung notwendig</div>
          </div>

          {/* “Was Sie live sehen” */}
          <div
            className={[
              'mt-8 grid gap-2 text-left sm:grid-cols-2 lg:grid-cols-3 transition-all duration-700 ease-out',
              visible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0',
            ].join(' ')}
          >
            {FEATURES.map((x) => (
              <div key={x.t} className="rounded-2xl border border-slate-900/10 bg-white/70 px-4 py-3 shadow-sm backdrop-blur">
                <div className="flex items-center gap-2">
                  {/* ICON WRAPPER: überall exakt gleich groß & rund */}
                  <span
                    className={[
                      'ref-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full',
                      'border border-slate-900/10 bg-white/80 shadow-sm',
                      'text-slate-900/70',
                    ].join(' ')}
                    aria-hidden
                  >
                    {x.icon}
                  </span>

                  <div className="min-w-0">
                    <div className="truncate text-[12px] font-semibold text-slate-900">{x.t}</div>
                    <div className="mt-0.5 text-[11px] leading-snug text-slate-600">{x.s}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Screenshot Card */}
        <div
          className={[
            'mt-10 sm:mt-12 transition-all duration-700 ease-out',
            visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
          ].join(' ')}
        >
          <div className="relative">
            {/* Glow kleiner/schwächer, damit er nicht so weit nach unten „zieht“ */}
            <div className="pointer-events-none absolute -inset-6 rounded-[2.6rem] bg-slate-900/6 blur-2xl" />

            {/* Card-Shadow weniger Spread (Hauptfix gegen „graues Band“) */}
            <div className="ref-float relative overflow-hidden rounded-[2.2rem] border border-slate-900/10 bg-white/60 shadow-[0_18px_70px_rgba(15,23,42,0.10)] backdrop-blur-xl">
              <div className="ref-sheen pointer-events-none absolute inset-0" aria-hidden />

              {/* Top bar */}
              <div className="flex items-center justify-between gap-3 border-b border-slate-900/10 bg-white/55 px-4 py-3 sm:px-5 sm:py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-900/25" />
                  <span className="h-2 w-2 rounded-full bg-slate-900/15" />
                  <span className="h-2 w-2 rounded-full bg-slate-900/10" />
                </div>

                <div className="flex items-center gap-2 text-[11px] font-medium text-slate-600">
                  <span className="truncate">gleno.de</span>
                  <span className="rounded-full border border-slate-900/10 bg-white/70 px-2 py-0.5 text-[10px] text-slate-700 shadow-sm">
                    Live-Demo
                  </span>
                </div>
              </div>

              {/* Image */}
              <div className="p-3 sm:p-4">
                <div className="relative overflow-hidden rounded-3xl border border-slate-900/10 bg-white/70">
                  <div className="absolute inset-0 opacity-55 [background-image:radial-gradient(circle_at_25%_20%,rgba(15,23,42,0.10),transparent_45%),linear-gradient(to_bottom,rgba(255,255,255,0.70),rgba(255,255,255,0.40))]" />
                  <Image
                    src="/bilder/gleno_dashboard_referenz.png"
                    alt="GLENO Dashboard (Live-Referenz)"
                    width={2400}
                    height={1500}
                    sizes="(min-width: 1024px) 980px, 100vw"
                    className="relative h-auto w-full object-contain"
                    quality={100}
                    priority={false}
                  />
                </div>

                {/* Footer */}
                <div className="mt-4 flex flex-col items-center justify-between gap-3 sm:flex-row">
                  <div className="text-[11px] text-slate-600">
                    Wenn Sie genau dieses „Produktgefühl“ wollen: Wir bauen Ihre cloudbasierte Web App / SaaS in derselben Qualität.
                  </div>

                  <a
                    href="https://gleno.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/70 px-4 text-[12px] font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                  >
                    Live testen ↗
                  </a>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-[2.2rem] ring-1 ring-inset ring-white/50" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Icons: überall optisch gleich groß (gleiche Stroke-Optik) */
        .ref-icon svg{
          width: 16px;
          height: 16px;
          stroke: currentColor;
          vector-effect: non-scaling-stroke;
        }

        .ref-sheen{
          opacity: 0.26;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(15, 23, 42, 0.06) 35%,
            rgba(15, 23, 42, 0.10) 50%,
            rgba(15, 23, 42, 0.06) 65%,
            transparent 100%
          );
          transform: translateX(-35%);
          filter: blur(0.5px);
          mask-image: radial-gradient(ellipse at center, black 55%, transparent 80%);
          animation: refSheen 7.5s ease-in-out 1.2s infinite;
          will-change: transform, opacity;
        }

        @keyframes refSheen {
          0% { transform: translateX(-35%); opacity: 0.18; }
          50% { transform: translateX(0%); opacity: 0.36; }
          100% { transform: translateX(35%); opacity: 0.18; }
        }

        @media (min-width: 1024px){
          .ref-float{
            animation: refFloat 6.5s ease-in-out infinite;
            will-change: transform;
          }
          @keyframes refFloat{
            0%,100%{ transform: translateY(0); }
            50%{ transform: translateY(-6px); }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ref-sheen, .ref-float { animation: none !important; }
        }
      `}</style>
    </section>
  )
}

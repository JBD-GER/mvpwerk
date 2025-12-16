// src/app/components/startseite/HeroSection.tsx
'use client'

import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'

type Lang = 'de' | 'en'

function Star({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2l2.7 6.3 6.8.6-5.2 4.5 1.6 6.7L12 16.9 6.1 20.1l1.6-6.7L2.5 8.9l6.8-.6L12 2z" />
    </svg>
  )
}

export default function HeroSection() {
  const portalRef = useRef<HTMLDivElement | null>(null)
  const [runAnim, setRunAnim] = useState(false)

  const searchParams = useSearchParams()
  const lang = ((searchParams?.get('lang') as Lang) || 'de') satisfies Lang

  const t = useMemo(() => {
    return {
      de: {
        pill1: 'MVP Agentur',
        pill2: 'Web App Agentur',
        h1: 'MVP Agentur für SaaS und Web Apps',
        p1a: 'MVPWERK baut ',
        p1b: 'Cloudbasierte MVP Software, SaaS',
        p1c: ' und ',
        p1d: 'Web Apps',
        p1e:
          ' für Startups, KMU und Teams — sauber, schnell, kampagnen-ready. Perfekt, wenn Sie ein ',
        p1f: 'MVP entwickeln lassen',
        p1g: ' möchten und sofort Resultate sehen wollen.',
        cta1: 'Projekt anfragen',
        cta2: 'Leistungen ansehen',
        note: 'Unverbindlich · Antwort meist am selben Tag',
        kpis: [
          { k: 'Performance', v: '90+ Lighthouse' },
          { k: 'Transparenz', v: '1×/Woche Demo' },
          { k: 'Projekte', v: '25+ umgesetzt' },
          { k: 'Ownership', v: 'Code gehört Ihnen' },
        ],
        ratingTitle: '4,9/5 · Kundenbewertung',
        ratingSub: 'Basierend auf Projekten & Zusammenarbeit',
        trust1: '⚡ Antwort meist am selben Tag',
        trust2: '✅ 100% unverbindlich',

        // right card
        madeIn: 'Made in Germany',
        domain: 'IHREDOMAIN.de/app',

        slide1Top: 'Entwickelt mit',
        slide1Mid: 'React / Next.js',
        slide1Bot: 'Sauberes UI · schnelle Iterationen · wartbar',

        slide2Top: 'Deployed mit',
        slide2Mid: 'Vercel / Supabase',
        slide2Bot: 'CI/CD · Auth · Datenbank · Storage',

        slide3Top: 'Security',
        slide3Mid: 'Rollen · RLS · Zugriff',
        slide3Bot: 'Sicheres Datenmodell · klare Rechte · skalierbar',

        slide4Top: 'Server',
        slide4Mid: 'EU · Frankfurt',
        slide4Bot: 'DSGVO-freundlich · geringe Latenz',

        finalTitle: 'Nur noch wenige Klicks entfernt',
        finalText: 'bis zu Ihrer eigenen Software – sauber gebaut, kampagnen-ready, skalierbar.',
        finalCta: 'Projekt anfragen →',
      },
      en: {
        pill1: 'MVP Agency',
        pill2: 'Web App Agency',
        h1: 'MVP Agency for SaaS and Web Apps',
        p1a: 'MVPWERK builds ',
        p1b: 'cloud-based MVP software, SaaS',
        p1c: ' and ',
        p1d: 'web apps',
        p1e:
          ' for startups, SMEs, and teams — clean, fast, campaign-ready. Perfect if you want to ',
        p1f: 'build an MVP',
        p1g: ' and see results quickly.',
        cta1: 'Request a project',
        cta2: 'View services',
        note: 'No obligation · Reply usually same day',
        kpis: [
          { k: 'Performance', v: '90+ Lighthouse' },
          { k: 'Transparency', v: 'Weekly demo' },
          { k: 'Projects', v: '25+ delivered' },
          { k: 'Ownership', v: 'You own the code' },
        ],
        ratingTitle: '4.9/5 · Client rating',
        ratingSub: 'Based on projects & collaboration',
        trust1: '⚡ Reply usually same day',
        trust2: '✅ 100% no obligation',

        // right card
        madeIn: 'Made in Germany',
        domain: 'YOURDOMAIN.com/app',

        slide1Top: 'Built with',
        slide1Mid: 'React / Next.js',
        slide1Bot: 'Clean UI · fast iterations · maintainable',

        slide2Top: 'Deployed with',
        slide2Mid: 'Vercel / Supabase',
        slide2Bot: 'CI/CD · Auth · Database · Storage',

        slide3Top: 'Security',
        slide3Mid: 'Roles · RLS · Access',
        slide3Bot: 'Secure data model · clear permissions · scalable',

        slide4Top: 'Server',
        slide4Mid: 'EU · Frankfurt',
        slide4Bot: 'GDPR-friendly · low latency',

        finalTitle: 'Just a few clicks away',
        finalText: 'from your own software — clean build, campaign-ready, scalable.',
        finalCta: 'Request a project →',
      },
    }[lang]
  }, [lang])

  const hrefWithLang = (href: string) => {
    const p = new URLSearchParams(searchParams?.toString() || '')
    p.set('lang', lang)
    const qs = p.toString()
    return qs ? `${href}?${qs}` : href
  }

  useEffect(() => {
    // Desktop: sofort laufen lassen
    const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024
    if (isDesktop) {
      setRunAnim(true)
      return
    }

    // Mobile/Tablet: erst starten, wenn das Fenster wirklich sichtbar ist
    const el = portalRef.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0]
        if (e && e.isIntersecting && e.intersectionRatio >= 0.8) {
          setRunAnim(true)
          io.disconnect()
        }
      },
      {
        threshold: [0.5, 0.65, 0.8, 0.9, 1],
        rootMargin: '0px 0px -8% 0px',
      }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-slate-900/10 blur-3xl md:h-[720px] md:w-[720px]" />
        <div className="absolute -top-16 right-[-120px] h-[420px] w-[420px] rounded-full bg-slate-900/8 blur-3xl md:h-[560px] md:w-[560px]" />
        <div className="absolute bottom-[-220px] left-[-120px] h-[520px] w-[520px] rounded-full bg-slate-900/8 blur-3xl md:h-[720px] md:w-[720px]" />

        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />

        <div className="absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_70%)]">
          <div className="mvpwerk-hero-sheen absolute -left-1/2 top-0 h-full w-[200%]" />
        </div>
      </div>

      {/* Smooth Übergang nach unten */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-16 sm:h-20 md:h-24">
        <div className="absolute inset-0 mvpwerk-hero-bottom-fade" />
        <div className="absolute inset-0 mvpwerk-hero-bottom-grid" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-4 pb-10 pt-9 sm:px-6 sm:pb-12 sm:pt-10 md:pb-16 md:pt-14">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* LEFT */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
                {t.pill1}
              </span>
              <span className="inline-flex items-center rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
                {t.pill2}
              </span>
            </div>

            <h1 className="mt-5 text-[36px] font-semibold leading-[1.05] tracking-tight sm:text-[50px] md:text-[64px]">
              {t.h1}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
              {t.p1a}
              <strong className="font-semibold text-slate-900">{t.p1b}</strong>
              {t.p1c}
              <strong className="font-semibold text-slate-900"> {t.p1d}</strong>
              {t.p1e}
              <strong className="font-semibold text-slate-900">{t.p1f}</strong>
              {t.p1g}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={hrefWithLang('/kontakt')}
                className="group inline-flex h-12 items-center justify-center rounded-2xl bg-slate-900 px-6 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(15,23,42,0.24)] transition hover:translate-y-[-1px] hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
              >
                {t.cta1}
                <span className="ml-2 inline-block transition group-hover:translate-x-0.5">→</span>
              </Link>

              <Link
                href={hrefWithLang('/leistungen')}
                className="inline-flex h-12 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/70 px-6 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10"
              >
                {t.cta2}
              </Link>

              <div className="mt-1 text-[11px] text-slate-600 sm:mt-0">{t.note}</div>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {t.kpis.map((x) => (
                <div
                  key={x.k}
                  className="rounded-2xl border border-slate-900/10 bg-white/70 px-4 py-3 text-center shadow-sm backdrop-blur"
                >
                  <div className="text-xs font-semibold text-slate-900">{x.k}</div>
                  <div className="mt-1 text-[11px] text-slate-600">{x.v}</div>
                </div>
              ))}
            </div>

            {/* Rating / Trust */}
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>

                <div className="min-w-0">
                  <div className="text-[12px] font-semibold text-slate-900">{t.ratingTitle}</div>
                  <div className="text-[11px] text-slate-600">{t.ratingSub}</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
                  {t.trust1}
                </span>
                <span className="inline-flex items-center rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
                  {t.trust2}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-slate-900/10 blur-3xl" />

              <div
                ref={portalRef}
                className="relative overflow-hidden rounded-[2.2rem] border border-slate-900/10 bg-white/70 shadow-[0_32px_110px_rgba(15,23,42,0.18)] backdrop-blur-xl"
              >
                <div className="border-b border-slate-900/10 bg-white/50 px-4 py-3 sm:px-5 sm:py-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-slate-900/25" />
                      <span className="h-2 w-2 rounded-full bg-slate-900/15" />
                      <span className="h-2 w-2 rounded-full bg-slate-900/10" />
                    </div>

                    <div className="flex items-center gap-2 text-[11px] font-medium text-slate-600">
                      <span className="mvpwerk-flag-de" aria-hidden />
                      {t.madeIn}
                    </div>
                  </div>

                  <div className="mt-3">
                    <div className="flex min-w-0 items-center gap-2 rounded-2xl border border-slate-900/10 bg-white/70 px-3 py-2 shadow-sm backdrop-blur">
                      <span className="text-[11px] text-slate-500">🔒</span>
                      <div className="min-w-0 truncate text-[11px] font-medium text-slate-600">{t.domain}</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <div className="relative overflow-hidden rounded-3xl border border-slate-900/10 bg-white/60">
                    <div className="absolute inset-0 opacity-85 [background-image:radial-gradient(circle_at_25%_20%,rgba(15,23,42,0.14),transparent_45%),radial-gradient(circle_at_80%_35%,rgba(15,23,42,0.10),transparent_52%),linear-gradient(to_bottom,rgba(255,255,255,0.70),rgba(255,255,255,0.35))]" />
                    <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_70%)]" />

                    <div className="relative aspect-[16/11]">
                      <div className={`mvpwerk-portal absolute inset-0 ${runAnim ? 'mvpwerk-anim' : ''}`}>
                        <div className="mvpwerk-behind absolute inset-0">
                          <div className="mvpwerk-skeleton absolute inset-0 p-4 sm:p-7">
                            <div className="flex items-center justify-between">
                              <div className="h-3 w-20 sm:w-24 rounded-full bg-slate-900/10" />
                              <div className="h-7 w-7 rounded-2xl bg-slate-900/10" />
                            </div>

                            <div className="mt-5 space-y-2.5 sm:mt-6 sm:space-y-3">
                              <div className="h-3 w-10/12 rounded-full bg-slate-900/10" />
                              <div className="h-3 w-8/12 rounded-full bg-slate-900/10" />
                              <div className="h-3 w-9/12 rounded-full bg-slate-900/10" />
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-7">
                              <div className="h-11 rounded-2xl bg-slate-900/10 sm:h-12" />
                              <div className="h-11 rounded-2xl bg-slate-900/10 sm:h-12" />
                              <div className="col-span-2 h-11 rounded-2xl bg-slate-900/15 sm:h-12" />
                            </div>

                            <div className="mt-5 space-y-2 sm:mt-6">
                              <div className="h-3 w-11/12 rounded-full bg-slate-900/10" />
                              <div className="h-3 w-9/12 rounded-full bg-slate-900/10" />
                            </div>
                          </div>

                          <div className="mvpwerk-glow pointer-events-none absolute inset-0" />
                        </div>

                        <div className="mvpwerk-door mvpwerk-door-left" aria-hidden />
                        <div className="mvpwerk-door mvpwerk-door-right" aria-hidden />

                        <div className="mvpwerk-slides absolute inset-0 flex items-center justify-center p-5 text-center sm:p-7">
                          {/* Slide 1 */}
                          <div className="mvpwerk-slide mvpwerk-slide-1">
                            <div className="mvpwerk-slide-card">
                              <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/70 shadow-sm">
                                <svg
                                  viewBox="0 0 24 24"
                                  className="h-5 w-5 text-slate-900/70"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <path d="M8 9l-3 3 3 3" />
                                  <path d="M16 9l3 3-3 3" />
                                  <path d="M13 7l-2 10" />
                                </svg>
                              </div>
                              <div className="text-[11px] font-medium text-slate-600">{t.slide1Top}</div>
                              <div className="mt-1 text-sm font-semibold text-slate-900">{t.slide1Mid}</div>
                              <div className="mt-1 text-[11px] leading-relaxed text-slate-600">{t.slide1Bot}</div>
                            </div>
                          </div>

                          {/* Slide 2 */}
                          <div className="mvpwerk-slide mvpwerk-slide-2">
                            <div className="mvpwerk-slide-card">
                              <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/70 shadow-sm">
                                <svg
                                  viewBox="0 0 24 24"
                                  className="h-5 w-5 text-slate-900/70"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <path d="M14 4c4 1 6 4 6 8-4 0-7 2-8 6-4 0-7-2-8-6 0-4 2-7 6-8" />
                                  <path d="M12 12l-2 2" />
                                  <path d="M10 14l-1 4 4-1 2-2" />
                                </svg>
                              </div>
                              <div className="text-[11px] font-medium text-slate-600">{t.slide2Top}</div>
                              <div className="mt-1 text-sm font-semibold text-slate-900">{t.slide2Mid}</div>
                              <div className="mt-1 text-[11px] leading-relaxed text-slate-600">{t.slide2Bot}</div>
                            </div>
                          </div>

                          {/* Slide 3 */}
                          <div className="mvpwerk-slide mvpwerk-slide-3">
                            <div className="mvpwerk-slide-card">
                              <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/70 shadow-sm">
                                <svg
                                  viewBox="0 0 24 24"
                                  className="h-5 w-5 text-slate-900/70"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <path d="M12 3l8 4v6c0 5-3 8-8 8s-8-3-8-8V7l8-4z" />
                                  <path d="M9 12l2 2 4-4" />
                                </svg>
                              </div>
                              <div className="text-[11px] font-medium text-slate-600">{t.slide3Top}</div>
                              <div className="mt-1 text-sm font-semibold text-slate-900">{t.slide3Mid}</div>
                              <div className="mt-1 text-[11px] leading-relaxed text-slate-600">{t.slide3Bot}</div>
                            </div>
                          </div>

                          {/* Slide 4 */}
                          <div className="mvpwerk-slide mvpwerk-slide-4">
                            <div className="mvpwerk-slide-card">
                              <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/70 shadow-sm">
                                <svg
                                  viewBox="0 0 24 24"
                                  className="h-5 w-5 text-slate-900/70"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <path d="M4 6h16v4H4z" />
                                  <path d="M4 14h16v4H4z" />
                                  <path d="M7 8h.01" />
                                  <path d="M7 16h.01" />
                                </svg>
                              </div>
                              <div className="text-[11px] font-medium text-slate-600">{t.slide4Top}</div>
                              <div className="mt-1 text-sm font-semibold text-slate-900">{t.slide4Mid}</div>
                              <div className="mt-1 text-[11px] leading-relaxed text-slate-600">{t.slide4Bot}</div>
                            </div>
                          </div>
                        </div>

                        <div className="mvpwerk-final absolute inset-0 flex items-center justify-center p-5 text-center sm:p-7">
                          <div className="mvpwerk-final-card">
                            <div className="text-sm font-semibold text-slate-900">{t.finalTitle}</div>
                            <div className="mt-1 text-[12px] leading-relaxed text-slate-600">{t.finalText}</div>
                            <div className="mt-4 flex justify-center">
                              <Link
                                href={hrefWithLang('/kontakt')}
                                className="inline-flex h-10 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/70 px-4 text-[12px] font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                              >
                                {t.finalCta}
                              </Link>
                            </div>
                          </div>
                        </div>

                        <div className="mvpwerk-portal-sheen pointer-events-none absolute inset-0" aria-hidden />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-[2.2rem] ring-1 ring-inset ring-white/50" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* DE Flag (emoji-free) */
        .mvpwerk-flag-de{
          width: 14px;
          height: 10px;
          border-radius: 2px;
          box-shadow: 0 0 0 1px rgba(15,23,42,0.10);
          background: linear-gradient(to bottom,#000 0%,#000 33.33%,#dd0000 33.33%,#dd0000 66.66%,#ffce00 66.66%,#ffce00 100%);
        }

        .mvpwerk-hero-bottom-fade{
          background: linear-gradient(
            to bottom,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0) 45%,
            rgba(255,255,255,0.55) 70%,
            rgba(255,255,255,0.92) 88%,
            #ffffff 100%
          );
        }

        .mvpwerk-hero-bottom-grid{
          background-image:
            linear-gradient(to_right, rgba(15,23,42,0.035) 1px, transparent 1px),
            linear-gradient(to_bottom, rgba(15,23,42,0.035) 1px, transparent 1px);
          background-size: 64px 64px;
          opacity: 0.55;
          mask-image: linear-gradient(
            to bottom,
            rgba(0,0,0,0) 0%,
            rgba(0,0,0,0) 40%,
            rgba(0,0,0,1) 100%
          );
        }

        .mvpwerk-hero-sheen {
          background: linear-gradient(90deg,transparent 0%,rgba(15,23,42,0.06) 35%,rgba(15,23,42,0.10) 50%,rgba(15,23,42,0.06) 65%,transparent 100%);
          transform: translateX(-35%);
          animation: heroSheen 10s ease-in-out infinite;
          filter: blur(0.5px);
          will-change: transform, opacity;
        }
        @keyframes heroSheen {
          0% { transform: translateX(-35%); opacity: 0.45; }
          50% { transform: translateX(0%); opacity: 0.7; }
          100% { transform: translateX(35%); opacity: 0.45; }
        }

        .mvpwerk-portal { transform: translateZ(0); border-radius: 24px; overflow: hidden; }
        .mvpwerk-behind { z-index: 1; }
        .mvpwerk-door { z-index: 3; }
        .mvpwerk-slides { z-index: 4; }
        .mvpwerk-final { z-index: 5; }
        .mvpwerk-portal-sheen { z-index: 6; }

        .mvpwerk-glow {
          background: radial-gradient(circle at 50% 45%, rgba(15, 23, 42, 0.18), transparent 60%);
          opacity: 0.12;
          animation: glowPulse 3.4s ease-in-out 1.8s infinite;
          will-change: opacity;
        }
        @keyframes glowPulse { 0%,100%{opacity:0.10;} 50%{opacity:0.20;} }

        .mvpwerk-door{
          position:absolute; top:0; bottom:0; width:52%;
          background: linear-gradient(to bottom, rgba(255,255,255,0.92), rgba(255,255,255,0.74)),
                      radial-gradient(circle at 30% 20%, rgba(15,23,42,0.12), transparent 55%);
          border: 1px solid rgba(15, 23, 42, 0.10);
          box-shadow: 0 18px 60px rgba(15, 23, 42, 0.12);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          will-change: transform;
          transform: translateX(0);
        }
        .mvpwerk-door-left{ left:0; border-right:none; border-top-left-radius:24px; border-bottom-left-radius:24px; }
        .mvpwerk-door-right{ right:0; border-left:none; border-top-right-radius:24px; border-bottom-right-radius:24px; }

        .mvpwerk-anim .mvpwerk-door-left{ animation: doorLeftOpen 1.6s cubic-bezier(0.18, 0.9, 0.2, 1) 0.15s forwards; }
        .mvpwerk-anim .mvpwerk-door-right{ animation: doorRightOpen 1.6s cubic-bezier(0.18, 0.9, 0.2, 1) 0.15s forwards; }
        @keyframes doorLeftOpen { to { transform: translateX(-100%);} }
        @keyframes doorRightOpen { to { transform: translateX(100%);} }

        .mvpwerk-skeleton{ opacity:1; transform:scale(1); filter:blur(0px); will-change: opacity, transform, filter; }
        .mvpwerk-anim .mvpwerk-skeleton{
          animation:
            skelPulse 0.95s ease-in-out 0.85s infinite,
            skelVanish 0.45s ease-in-out 2.05s forwards;
        }
        @keyframes skelPulse { 0%,100%{opacity:0.95;} 50%{opacity:0.70;} }
        @keyframes skelVanish { to { opacity:0; transform:scale(1.02); filter:blur(6px);} }

        .mvpwerk-slide{
          position:absolute; inset:0; display:flex; align-items:center; justify-content:center;
          opacity:0; transform: translateY(8px); filter: blur(2px);
          pointer-events:none; will-change: opacity, transform, filter;
        }
        .mvpwerk-slide-card{
          max-width:340px; border-radius:24px; border:1px solid rgba(15,23,42,0.10);
          background: rgba(255,255,255,0.70); box-shadow:0 10px 30px rgba(15,23,42,0.10);
          backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
          padding:18px;
        }

        .mvpwerk-anim .mvpwerk-slide-1{ animation: slideInOut 1.70s ease-in-out 2.25s forwards; }
        .mvpwerk-anim .mvpwerk-slide-2{ animation: slideInOut 1.70s ease-in-out 3.95s forwards; }
        .mvpwerk-anim .mvpwerk-slide-3{ animation: slideInOut 1.70s ease-in-out 5.65s forwards; }
        .mvpwerk-anim .mvpwerk-slide-4{ animation: slideInOut 1.70s ease-in-out 7.35s forwards; }

        @keyframes slideInOut{
          0%{opacity:0; transform:translateY(10px); filter:blur(3px);}
          18%{opacity:1; transform:translateY(0); filter:blur(0px);}
          82%{opacity:1; transform:translateY(0); filter:blur(0px);}
          100%{opacity:0; transform:translateY(-6px); filter:blur(3px);}
        }

        .mvpwerk-final{
          opacity:0; transform:translateY(10px); filter:blur(2px);
          pointer-events:none; will-change: opacity, transform, filter;
        }
        .mvpwerk-final-card{
          max-width:360px; border-radius:24px; border:1px solid rgba(15,23,42,0.10);
          background: rgba(255,255,255,0.70); box-shadow:0 10px 30px rgba(15,23,42,0.10);
          backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
          padding:18px;
        }
        .mvpwerk-anim .mvpwerk-final{
          animation: finalIn 0.60s ease-out 9.10s forwards;
          pointer-events:auto;
        }
        @keyframes finalIn{ to { opacity:1; transform:translateY(0); filter:blur(0px);} }

        .mvpwerk-portal-sheen{
          opacity:0.28;
          background: linear-gradient(90deg, transparent 0%, rgba(15,23,42,0.06) 35%, rgba(15,23,42,0.10) 50%, rgba(15,23,42,0.06) 65%, transparent 100%);
          transform: translateX(-35%);
          animation: portalSheen 6.5s ease-in-out 1.2s infinite;
          filter: blur(0.5px);
          mask-image: radial-gradient(ellipse at center, black 55%, transparent 80%);
          will-change: transform, opacity;
        }
        @keyframes portalSheen{
          0%{ transform: translateX(-35%); opacity:0.22; }
          50%{ transform: translateX(0%); opacity:0.40; }
          100%{ transform: translateX(35%); opacity:0.22; }
        }

        @media (prefers-reduced-motion: reduce) {
          .mvpwerk-hero-sheen, .mvpwerk-portal-sheen, .mvpwerk-glow { animation: none !important; }
          .mvpwerk-door-left, .mvpwerk-door-right, .mvpwerk-skeleton, .mvpwerk-slide, .mvpwerk-final {
            animation: none !important; transform: none !important; filter: none !important; opacity: 1 !important;
          }
        }
      `}</style>
    </section>
  )
}

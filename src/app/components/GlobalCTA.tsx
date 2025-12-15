'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function GlobalCTA() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background (wie Hero) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-slate-900/10 blur-3xl md:h-[720px] md:w-[720px]" />
        <div className="absolute -top-16 right-[-120px] h-[420px] w-[420px] rounded-full bg-slate-900/8 blur-3xl md:h-[560px] md:w-[560px]" />
        <div className="absolute bottom-[-220px] left-[-120px] h-[520px] w-[520px] rounded-full bg-slate-900/8 blur-3xl md:h-[720px] md:w-[720px]" />

        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_72%)]" />

        <div className="absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_70%)]">
          <div className="mvpwerk-cta-bg-sheen absolute -left-1/2 top-0 h-full w-[200%]" />
        </div>
      </div>

      {/* TOP Smooth Übergang (damit oben kein Cut sichtbar ist) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-14 sm:h-16 md:h-20">
        <div className="absolute inset-0 mvpwerk-cta-top-fade" />
      </div>

      {/* BOTTOM Smooth Übergang (wie Hero) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-16 sm:h-20 md:h-24">
        <div className="absolute inset-0 mvpwerk-cta-bottom-fade" />
        <div className="absolute inset-0 mvpwerk-cta-bottom-grid" />
      </div>

      <div className="relative mx-auto w-full max-w-[1200px] px-4 py-10 sm:px-6 sm:py-12">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-900/10 bg-white/70 shadow-[0_28px_90px_rgba(15,23,42,0.14)] backdrop-blur-xl">
          {/* Sheen im Card */}
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="mvpwerk-cta-sheen absolute -left-1/2 top-0 h-full w-[200%]" />
          </div>

          <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-12 lg:gap-10 lg:p-10">
            {/* LEFT */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500/70" />
                Kampagnen-ready · schnell live · wartbar
              </div>

              <h2 className="mt-4 text-[26px] font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-[34px]">
                SaaS, Software oder Web App bauen lassen – ohne Reibung.
              </h2>

              <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-slate-700 sm:text-[15px]">
                Sie bekommen eine saubere Umsetzung mit Next.js/React – inklusive klarer Roadmap, wöchentlicher Demos und
                einem Setup, das sofort skalieren kann.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  { t: 'Fixer Ablauf', d: 'Kickoff → MVP → Live → Iteration' },
                  { t: 'Transparenz', d: '1×/Woche Demo + klare Milestones' },
                  { t: 'Ownership', d: 'Der Code gehört Ihnen' },
                  { t: 'Performance', d: 'Schnell, clean, Lighthouse-ready' },
                ].map((x) => (
                  <div
                    key={x.t}
                    className="rounded-2xl border border-slate-900/10 bg-white/70 px-4 py-3 shadow-sm backdrop-blur"
                  >
                    <div className="text-[12px] font-semibold text-slate-900">{x.t}</div>
                    <div className="mt-1 text-[11px] text-slate-600">{x.d}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-5">
              <div className="relative h-full overflow-hidden rounded-[1.8rem] border border-slate-900/10 bg-white/60 p-5 shadow-sm backdrop-blur">
                {/* animated orbit */}
                <div className="pointer-events-none absolute -inset-10">
                  <div className="mvpwerk-cta-orbit absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-900/10" />
                  <div className="mvpwerk-cta-orbit2 absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-900/8" />
                </div>

                <div className="relative flex items-center gap-3">
                  <div className="relative">
                    <div className="mvpwerk-cta-float relative grid h-12 w-12 place-items-center rounded-2xl border border-slate-900/10 bg-white/80 shadow-sm">
                      <Image
                        src="/logos/mvpwerk_favi.png"
                        alt="MVPWERK"
                        width={28}
                        height={28}
                        className="h-7 w-7"
                      />
                    </div>
                    <div className="pointer-events-none absolute -inset-3 rounded-[22px] bg-slate-900/10 blur-xl" />
                  </div>

                  <div className="min-w-0">
                    <div className="text-[12px] font-semibold text-slate-900">Kostenlose Ersteinschätzung</div>
                    <div className="text-[11px] text-slate-600">Antwort meist am selben Tag</div>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-slate-900/10 bg-white/70 p-4 shadow-sm">
                  <div className="text-[12px] font-semibold text-slate-900">In 30 Minuten klären wir:</div>
                  <ul className="mt-2 space-y-1.5 text-[11px] leading-relaxed text-slate-700">
                    <li>• Was Sie wirklich brauchen (und was nicht)</li>
                    <li>• Wie Sie schnell live gehen</li>
                    <li>• Was es kostet &amp; wann es steht</li>
                  </ul>
                </div>

                {/* CTA Button: volle Breite (immer) */}
                <div className="mt-5">
                  <Link
                    href="/kontakt"
                    className="group inline-flex h-12 w-full items-center justify-center rounded-2xl bg-slate-900 px-6 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(15,23,42,0.22)] transition hover:translate-y-[-1px] hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
                  >
                    Projekt anfragen
                    <span className="ml-2 inline-block transition group-hover:translate-x-0.5">→</span>
                  </Link>
                </div>

                <div className="mt-4 text-[11px] text-slate-600">
                  Kein Spam · unverbindlich · <span className="font-medium text-slate-900">Made in Germany</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/50" />
        </div>
      </div>

      <style>{`
        /* Top-Fade: versteckt den Background oben => kein "Cut" am Handy */
        .mvpwerk-cta-top-fade{
          background: linear-gradient(
            to bottom,
            #ffffff 0%,
            rgba(255,255,255,0.96) 45%,
            rgba(255,255,255,0.65) 72%,
            rgba(255,255,255,0) 100%
          );
        }

        /* Bottom-Fade (wie Hero) */
        .mvpwerk-cta-bottom-fade{
          background: linear-gradient(
            to bottom,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0) 45%,
            rgba(255,255,255,0.55) 70%,
            rgba(255,255,255,0.92) 88%,
            #ffffff 100%
          );
        }

        /* Grid unten ausfaden ohne sichtbare Kante */
        .mvpwerk-cta-bottom-grid{
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

        /* Background sheen (wie Hero) */
        .mvpwerk-cta-bg-sheen {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(15,23,42,0.05) 35%,
            rgba(15,23,42,0.10) 50%,
            rgba(15,23,42,0.05) 65%,
            transparent 100%
          );
          transform: translateX(-35%);
          animation: ctaBgSheen 10s ease-in-out infinite;
          filter: blur(0.5px);
          will-change: transform, opacity;
        }
        @keyframes ctaBgSheen {
          0% { transform: translateX(-35%); opacity: 0.30; }
          50% { transform: translateX(0%); opacity: 0.60; }
          100% { transform: translateX(35%); opacity: 0.30; }
        }

        /* Card sheen */
        .mvpwerk-cta-sheen{
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(15,23,42,0.05) 35%,
            rgba(15,23,42,0.10) 50%,
            rgba(15,23,42,0.05) 65%,
            transparent 100%
          );
          transform: translateX(-35%);
          animation: ctaSheen 9s ease-in-out infinite;
          filter: blur(0.5px);
          will-change: transform, opacity;
        }
        @keyframes ctaSheen{
          0%{ transform: translateX(-35%); opacity:0.30; }
          50%{ transform: translateX(0%); opacity:0.55; }
          100%{ transform: translateX(35%); opacity:0.30; }
        }

        .mvpwerk-cta-float{
          animation: ctaFloat 3.6s ease-in-out infinite;
          will-change: transform;
        }
        @keyframes ctaFloat{
          0%,100%{ transform: translateY(0px); }
          50%{ transform: translateY(-4px); }
        }

        .mvpwerk-cta-orbit{
          animation: ctaSpin 18s linear infinite;
          opacity: 0.55;
          will-change: transform;
        }
        .mvpwerk-cta-orbit2{
          animation: ctaSpin 26s linear infinite reverse;
          opacity: 0.40;
          will-change: transform;
        }
        @keyframes ctaSpin{
          to{ transform: translate(-50%, -50%) rotate(360deg); }
        }

        @media (prefers-reduced-motion: reduce){
          .mvpwerk-cta-sheen,
          .mvpwerk-cta-bg-sheen,
          .mvpwerk-cta-float,
          .mvpwerk-cta-orbit,
          .mvpwerk-cta-orbit2{
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  )
}

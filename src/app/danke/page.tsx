// src/app/danke/page.tsx
import Link from 'next/link'

export default function DankePage() {
  return (
    <main className="relative overflow-hidden bg-white">
      {/* clean background (nur slate, kein bunt) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-slate-900/6 blur-3xl sm:h-[820px] sm:w-[820px]" />
        <div className="absolute -top-14 right-[-180px] h-[520px] w-[520px] rounded-full bg-slate-900/4 blur-3xl sm:h-[700px] sm:w-[700px]" />
        <div className="absolute bottom-[-220px] left-[-160px] h-[560px] w-[560px] rounded-full bg-slate-900/4 blur-3xl sm:h-[760px] sm:w-[760px]" />

        {/* floating orbs (nur slate) */}
        <div className="mvpw-orb1 absolute left-[6%] top-[18%] h-28 w-28 rounded-full bg-slate-900/5 blur-2xl" />
        <div className="mvpw-orb2 absolute right-[8%] top-[28%] h-32 w-32 rounded-full bg-slate-900/4 blur-2xl" />
        <div className="mvpw-orb3 absolute left-[18%] bottom-[16%] h-36 w-36 rounded-full bg-slate-900/4 blur-2xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1100px] px-4 py-12 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-[860px]">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-900/10 bg-white/70 p-6 shadow-[0_22px_80px_rgba(15,23,42,0.10)] backdrop-blur-xl sm:p-10">
            {/* sheen */}
            <div className="pointer-events-none absolute inset-0 opacity-55">
              <div className="mvpw-sheen absolute -left-1/2 top-0 h-full w-[200%]" />
            </div>

            <div className="relative">
              {/* Badge oben links */}
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/75 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
                <span className="relative inline-flex h-2.5 w-2.5 items-center justify-center">
                  <span className="absolute inline-flex h-2.5 w-2.5 rounded-full bg-slate-900/60" />
                  <span className="mvpw-dotpulse absolute inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                </span>
                Anfrage gesendet
              </div>

              {/* Success Animation */}
              <div className="mt-6 flex items-start gap-4 sm:gap-5">
                <div className="relative shrink-0">
                  {/* pulsing halo */}
                  <div className="mvpw-halo absolute inset-[-14px] rounded-full bg-slate-900/8 blur-xl" />
                  {/* ring */}
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-slate-900/10 bg-white/80 shadow-sm backdrop-blur sm:h-16 sm:w-16">
                    <svg
                      viewBox="0 0 52 52"
                      className="h-8 w-8 text-slate-900 sm:h-9 sm:w-9"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {/* drawn circle */}
                      <circle className="mvpw-circle" cx="26" cy="26" r="20" />
                      {/* drawn check */}
                      <path className="mvpw-check" d="M16 27.5l7 7L37 20" />
                    </svg>
                  </div>
                </div>

                <div className="min-w-0">
                  <h1 className="text-[28px] font-semibold leading-[1.06] tracking-tight text-slate-900 sm:text-[42px]">
                    Danke! Wir melden uns zeitnah.
                  </h1>
                  <p className="mt-3 max-w-[720px] text-[14px] leading-relaxed text-slate-700 sm:text-[15px]">
                    In der Regel erhalten Sie am selben Tag eine Rückmeldung.
                  </p>

                  <div className="mt-6">
                    <Link
                      href="/"
                      className={[
                        'group inline-flex h-12 w-full items-center justify-center rounded-2xl px-6 text-sm font-semibold transition sm:w-auto',
                        'border border-slate-900/10 bg-white/75 text-slate-900 shadow-sm backdrop-blur',
                        'hover:bg-white hover:shadow-[0_18px_55px_rgba(15,23,42,0.10)]',
                        'focus:outline-none focus:ring-2 focus:ring-slate-900/10',
                      ].join(' ')}
                    >
                      Zur Startseite
                      <span className="ml-2 inline-block transition group-hover:translate-x-0.5">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* inner ring */}
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/50" />
          </div>
        </div>
      </div>

      <style>{`
        /* Sheen */
        .mvpw-sheen{
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(15,23,42,0.04) 30%,
            rgba(15,23,42,0.10) 50%,
            rgba(15,23,42,0.04) 70%,
            transparent 100%
          );
          transform: translateX(-35%);
          filter: blur(0.5px);
          will-change: transform, opacity;
          animation: mvpwSheen 8.5s ease-in-out infinite;
          opacity: .55;
        }
        @keyframes mvpwSheen{
          0%{ transform: translateX(-35%); opacity:0.18; }
          50%{ transform: translateX(0%); opacity:0.45; }
          100%{ transform: translateX(35%); opacity:0.18; }
        }

        /* Badge dot pulse */
        .mvpw-dotpulse{ animation: mvpwDotPulse 1.8s ease-in-out infinite; }
        @keyframes mvpwDotPulse{
          0%{ transform: scale(1); opacity:.28; }
          60%{ transform: scale(2.2); opacity:0; }
          100%{ transform: scale(2.2); opacity:0; }
        }

        /* Floating Orbs (nur slate) */
        .mvpw-orb1{ animation: mvpwOrb1 10s ease-in-out infinite; }
        .mvpw-orb2{ animation: mvpwOrb2 12s ease-in-out infinite; }
        .mvpw-orb3{ animation: mvpwOrb3 14s ease-in-out infinite; }
        @keyframes mvpwOrb1{
          0%{ transform: translate3d(0,0,0); opacity:.85; }
          50%{ transform: translate3d(10px,-12px,0); opacity:.65; }
          100%{ transform: translate3d(0,0,0); opacity:.85; }
        }
        @keyframes mvpwOrb2{
          0%{ transform: translate3d(0,0,0); opacity:.85; }
          50%{ transform: translate3d(-12px,10px,0); opacity:.65; }
          100%{ transform: translate3d(0,0,0); opacity:.85; }
        }
        @keyframes mvpwOrb3{
          0%{ transform: translate3d(0,0,0); opacity:.85; }
          50%{ transform: translate3d(12px,12px,0); opacity:.65; }
          100%{ transform: translate3d(0,0,0); opacity:.85; }
        }

        /* Halo pulse hinter dem Success-Icon */
        .mvpw-halo{ animation: mvpwHalo 2.6s ease-in-out infinite; }
        @keyframes mvpwHalo{
          0%{ transform: scale(1); opacity:.55; }
          50%{ transform: scale(1.22); opacity:.25; }
          100%{ transform: scale(1); opacity:.55; }
        }

        /* SVG draw animation */
        .mvpw-circle{
          stroke-dasharray: 126;
          stroke-dashoffset: 126;
          animation: mvpwDrawCircle .65s ease-out forwards;
          opacity:.9;
        }
        .mvpw-check{
          stroke-dasharray: 40;
          stroke-dashoffset: 40;
          animation: mvpwDrawCheck .55s ease-out .35s forwards;
        }
        @keyframes mvpwDrawCircle{
          to{ stroke-dashoffset: 0; }
        }
        @keyframes mvpwDrawCheck{
          to{ stroke-dashoffset: 0; }
        }

        @media (prefers-reduced-motion: reduce){
          .mvpw-sheen,
          .mvpw-orb1,
          .mvpw-orb2,
          .mvpw-orb3,
          .mvpw-dotpulse,
          .mvpw-halo,
          .mvpw-circle,
          .mvpw-check{
            animation:none !important;
            stroke-dashoffset: 0 !important;
          }
        }
      `}</style>
    </main>
  )
}

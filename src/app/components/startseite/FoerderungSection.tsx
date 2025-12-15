// src/app/components/startseite/FoerderungSection.tsx
import Link from 'next/link'

export default function FoerderungSection() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20">
      {/* Background: komplett weiß */}
      <div className="pointer-events-none absolute inset-0 bg-white" />

      <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6">
        <div className="rounded-[2rem] border border-slate-900/10 bg-white/70 p-6 shadow-[0_22px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8">
          <div className="mx-auto max-w-[980px] text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/80 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
              Optional · Förderung & saubere Umsetzung
            </div>

            <h2 className="mt-4 text-[26px] font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-[34px] md:text-[38px]">
              Förderung geplant? Dann setzen wir förderkonform um – ohne Bürokratie-Overkill.
            </h2>

            <p className="mt-3 text-[14px] leading-relaxed text-slate-700 sm:text-[15px]">
              Wenn Förderung im Raum steht, achten wir bereits bei der Planung darauf, dass{' '}
              <strong className="font-semibold text-slate-900">Funktionen</strong>,{' '}
              <strong className="font-semibold text-slate-900">Vorgehen</strong> und{' '}
              <strong className="font-semibold text-slate-900">Nachweise</strong> zu den Förderkriterien passen – inklusive sauberer
              Dokumentation und klarer Meilensteine.
            </p>
          </div>

          {/* 3 Highlights */}
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {[
              {
                t: 'Förderkriterien mitdenken',
                s: 'Wir planen Scope & Features so, dass die Umsetzung zur Förderlogik passt.',
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
                    {/* compass / navigation */}
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" opacity="0.35" />
                    <path d="M14.5 9.5l-2 5-5 2 2-5 5-2z" />
                    <path d="M12 12h.01" />
                  </svg>
                ),
              },
              {
                t: 'Nachweise & Dokumentation',
                s: 'Meilensteine, Übergabe, Repo/Assets – nachvollziehbar und ordentlich.',
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
                    {/* folder + check */}
                    <path d="M3.5 7a2 2 0 0 1 2-2H10l1.5 2H18.5a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5.5a2 2 0 0 1-2-2V7z" opacity="0.35" />
                    <path d="M8.5 13l2 2 4.5-4.5" />
                  </svg>
                ),
              },
              {
                t: 'Pragmatisch & klar',
                s: 'Sie bekommen Klartext: was sinnvoll ist, was optional ist, was Budget frisst.',
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
                    {/* chat bubbles */}
                    <path d="M8 10h8" />
                    <path d="M8 14h5" />
                    <path d="M21 12a7 7 0 0 1-7 7H7l-4 3 1.2-4.6A7 7 0 0 1 3 12a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7z" opacity="0.35" />
                  </svg>
                ),
              },
            ].map((x) => (
              <div
                key={x.t}
                className="rounded-[1.4rem] border border-slate-900/10 bg-white/75 p-5 text-left shadow-sm backdrop-blur"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-900/10 bg-white/80 text-slate-900/70 shadow-sm">
                    {x.icon}
                  </span>
                  <div className="min-w-0">
                    <div className="text-[12px] font-semibold text-slate-900">{x.t}</div>
                    <div className="mt-1 text-[11px] leading-relaxed text-slate-600">{x.s}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/foerderung-checker"
              className="group inline-flex h-12 w-full items-center justify-center rounded-2xl bg-slate-900 px-6 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(15,23,42,0.18)] transition hover:translate-y-[-1px] hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20 sm:w-auto"
            >
              Fördermöglichkeiten ansehen
              <span className="ml-2 inline-block transition group-hover:translate-x-0.5">→</span>
            </Link>
          </div>

          <div className="mt-3 text-center text-[11px] text-slate-600">
            Kurz & pragmatisch: Sie sagen uns, ob Förderung im Raum steht – wir zeigen die sichere Vorgehensweise.
          </div>
        </div>
      </div>
    </section>
  )
}

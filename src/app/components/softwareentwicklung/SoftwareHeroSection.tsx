// src/app/components/softwareentwicklung/SoftwareHeroSection.tsx

type Lang = 'de' | 'en'

export const dynamic = 'force-dynamic'
export const revalidate = 0

function MiniKpi({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl border border-slate-900/10 bg-white/70 px-4 py-3 text-center shadow-sm backdrop-blur">
      <div className="text-xs font-semibold text-slate-900">{k}</div>
      <div className="mt-1 text-[11px] text-slate-600">{v}</div>
    </div>
  )
}

export default function SoftwareHeroSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          pillA: 'Softwareentwicklung',
          pillB: 'SaaS · Web Apps · APIs',
          h1: 'Software entwickeln lassen — klar, skalierbar, wartbar.',
          p1: 'MVPWERK entwickelt moderne Web-Software für Teams, Startups und KMU. Fokus: saubere Architektur, performantes UI und ein Setup, das später nicht „neu gebaut“ werden muss.',
          p2: 'Diese Seite erklärt, wie wir Software-Projekte strukturieren, welche Bausteine sich bewährt haben und was Sie am Ende wirklich in die Hand bekommen.',
          kpis: [
            { k: 'Performance', v: '90+ Lighthouse' },
            { k: 'Security', v: 'RLS · Rollen · Zugriff' },
            { k: 'API-Qualität', v: '< 200ms Ø Response Time' },
            { k: 'Ownership', v: 'Code gehört Ihnen' },
          ],
          navTitle: 'Inhalt',
          navHint: 'Schnell zu den relevanten Bereichen (ohne CTA).',
          nav: [
            { id: 'ueberblick', label: 'Überblick' },
            { id: 'usecases', label: 'Use Cases' },
            { id: 'leistungen', label: 'Leistungen' },
            { id: 'stack', label: 'Tech Stack' },
            { id: 'prozess', label: 'Prozess' },
            { id: 'qualitaet', label: 'Qualität' },
            { id: 'deliverables', label: 'Ergebnisse' },
            { id: 'referenzen', label: 'Referenzen' },
            { id: 'faq', label: 'FAQ' },
            { id: 'glossar', label: 'Glossar' },
          ],
          noteA: 'Ohne Buzzwords.',
          noteB: 'Ohne Lock-in.',
          noteC: 'Mit sauberer Übergabe.',
          tipA: 'Tipp: Dies ist eine ',
          tipB: 'Informative',
          tipC: ' Seite.',
        }
      : {
          pillA: 'Software Development',
          pillB: 'SaaS · Web Apps · APIs',
          h1: 'Build software — clear, scalable, maintainable.',
          p1: 'MVPWERK builds modern web software for teams, startups and SMEs — with clean architecture, fast UI, and a setup that doesn’t need a full rewrite later.',
          p2: 'This page explains how we structure software projects, what building blocks work best, and what you actually receive at the end.',
          kpis: [
            { k: 'Performance', v: '90+ Lighthouse' },
            { k: 'Security', v: 'RLS · Roles · Access' },
            { k: 'API Quality', v: '< 200ms avg response' },
            { k: 'Ownership', v: 'You own the code' },
          ],
          navTitle: 'Sections',
          navHint: 'Jump to the relevant sections (no CTA).',
          nav: [
            { id: 'ueberblick', label: 'Overview' },
            { id: 'usecases', label: 'Use Cases' },
            { id: 'leistungen', label: 'Services' },
            { id: 'stack', label: 'Tech Stack' },
            { id: 'prozess', label: 'Process' },
            { id: 'qualitaet', label: 'Quality' },
            { id: 'deliverables', label: 'Deliverables' },
            { id: 'referenzen', label: 'References' },
            { id: 'faq', label: 'FAQ' },
            { id: 'glossar', label: 'Glossary' },
          ],
          noteA: 'No buzzwords.',
          noteB: 'No lock-in.',
          noteC: 'Clean handover.',
          tipA: 'Tip: This is an ',
          tipB: 'informational',
          tipC: ' page.',
        }

  const cardBase = 'rounded-3xl border border-slate-900/10 bg-white/70 shadow-sm backdrop-blur'

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-slate-900/10 blur-3xl md:h-[780px] md:w-[780px]" />
        <div className="absolute -top-20 right-[-140px] h-[440px] w-[440px] rounded-full bg-slate-900/8 blur-3xl md:h-[620px] md:w-[620px]" />
        <div className="absolute bottom-[-260px] left-[-140px] h-[560px] w-[560px] rounded-full bg-slate-900/8 blur-3xl md:h-[780px] md:w-[780px]" />
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 sm:h-20 md:h-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-white" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-4 pb-10 pt-10 sm:px-6 sm:pb-12 sm:pt-12 md:pb-16 md:pt-16">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* LEFT */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
                {t.pillA}
              </span>
              <span className="inline-flex items-center rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
                {t.pillB}
              </span>
            </div>

            <h1 className="mt-5 text-[34px] font-semibold leading-[1.05] tracking-tight sm:text-[46px] md:text-[58px]">
              {t.h1}
            </h1>

            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-700 sm:text-[16px] md:text-[17px]">
              {t.p1}
            </p>

            <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-slate-700 sm:text-[15px]">
              {t.p2}
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {t.kpis.map((x) => (
                <MiniKpi key={x.k} k={x.k} v={x.v} />
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {[t.noteA, t.noteB, t.noteC].map((n) => (
                <span
                  key={n}
                  className="inline-flex items-center rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur"
                >
                  {n}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5">
            <div className={`${cardBase} overflow-hidden`}>
              <div className="border-b border-slate-900/10 bg-white/50 px-4 py-3 sm:px-5 sm:py-4">
                <div className="text-[12px] font-semibold text-slate-900">{t.navTitle}</div>
                <div className="mt-1 text-[11px] text-slate-600">{t.navHint}</div>
              </div>

              <div className="p-4 sm:p-5">
                <div className="grid grid-cols-2 gap-2">
                  {t.nav.map((x) => (
                    <a
                      key={x.id}
                      href={`#${x.id}`}
                      className="rounded-2xl border border-slate-900/10 bg-white/70 px-3 py-2 text-[12px] font-medium text-slate-800 shadow-sm backdrop-blur transition hover:bg-white"
                    >
                      <span className="text-slate-900/50">#</span> {x.label}
                    </a>
                  ))}
                </div>

                <div className="mt-4 rounded-2xl border border-slate-900/10 bg-white/60 p-3 text-[11px] leading-relaxed text-slate-600">
                  {t.tipA}
                  <span className="font-medium text-slate-900">{t.tipB}</span>
                  {t.tipC}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

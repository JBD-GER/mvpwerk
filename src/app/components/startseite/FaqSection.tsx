// src/app/components/startseite/FaqSection.tsx
'use client'

import { useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'

type Lang = 'de' | 'en'
type Faq = { q: string; a: string }

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={['h-4 w-4 transition', open ? 'rotate-180' : 'rotate-0'].join(' ')}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

export default function FaqSection() {
  const searchParams = useSearchParams()
  const lang = ((searchParams?.get('lang') as Lang) || 'de') satisfies Lang

  const faqs = useMemo<Faq[]>(
    () => [
      {
        q: lang === 'de' ? 'Wie schnell ist eine erste Version online?' : 'How fast can the first version go live?',
        a:
          lang === 'de'
            ? 'Typisch sehen Sie nach kurzer Zeit eine klickbare Version. Je nach Umfang kann eine erste nutzbare MVP-Version oft innerhalb von 4–8 Wochen live gehen.'
            : 'Typically, you’ll see a clickable version quickly. Depending on scope, a first usable MVP can often go live within 4–8 weeks.',
      },
      {
        q: lang === 'de' ? 'Was kostet ein MVP ungefähr?' : 'Roughly, what does an MVP cost?',
        a:
          lang === 'de'
            ? 'Das hängt primär vom Scope ab. Wir schneiden den Umfang so zu, dass er ins Budget passt (Muss/Soll/Später). Sie bekommen eine klare Einschätzung, bevor wir bauen.'
            : 'It mainly depends on scope. We shape the scope to fit your budget (must/should/later). You’ll get a clear estimate before we build.',
      },
      {
        q:
          lang === 'de'
            ? 'Baut ihr nur „Software“ oder auch die Website/Landingpage?'
            : 'Do you build only the app, or also the website/landing page?',
        a:
          lang === 'de'
            ? 'Beides. Website (SEO/Marketing) und App kommen aus einem Guss – so sparen Sie Abstimmung, Zeit und doppelte Arbeit.'
            : 'Both. Website (SEO/marketing) and app are built as one system — saving time, coordination, and duplicate work.',
      },
      {
        q: lang === 'de' ? 'Können wir bestehende Systeme anbinden?' : 'Can you integrate existing systems?',
        a:
          lang === 'de'
            ? 'Ja. Wir bauen Backend, APIs und Integrationen so, dass Daten sauber fließen (z. B. CRM, Buchhaltung, Tools, interne Systeme) – je nachdem, was Sie brauchen.'
            : 'Yes. We build backend, APIs, and integrations so data flows cleanly (e.g., CRM, accounting, tools, internal systems) — depending on what you need.',
      },
      {
        q: lang === 'de' ? 'Wie läuft die Zusammenarbeit ab?' : 'How does the collaboration work?',
        a:
          lang === 'de'
            ? 'Klar in Phasen: Scope/Plan → Design & Entwicklung → Deployment/Launch. Sie sehen regelmäßig Fortschritt und testen früh – statt am Ende überrascht zu werden.'
            : 'Clear phases: scope/plan → design & development → deployment/launch. You see progress regularly and test early — no end-of-project surprises.',
      },
      {
        q: lang === 'de' ? 'Hab ich am Ende Lock-in oder gehört mir alles?' : 'Is there lock-in, or do I own everything?',
        a:
          lang === 'de'
            ? 'Kein Lock-in. Repo, Assets und Zugänge sind sauber übergabefähig. Sie können später mit uns weiterbauen oder mit einem anderen Team.'
            : 'No lock-in. Repo, assets, and access are handed over cleanly. You can continue with us later or with another team.',
      },
    ],
    [lang]
  )

  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20">
      {/* Background: komplett weiß */}
      <div className="pointer-events-none absolute inset-0 bg-white" />

      <div className="relative mx-auto w-full max-w-[1100px] px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-[820px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/80 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
            FAQ
          </div>

          <h2 className="mt-4 text-[26px] font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-[38px] md:text-[44px]">
            {lang === 'de' ? 'Kurz beantwortet – bevor Sie anfragen.' : 'Answered upfront — before you reach out.'}
          </h2>

          <p className="mt-3 text-[14px] leading-relaxed text-slate-700 sm:text-[15px]">
            {lang === 'de'
              ? 'Die häufigsten Fragen von Geschäftsführern, die eine MVP Agentur suchen.'
              : 'The most common questions from founders and decision-makers looking for an MVP agency.'}
          </p>
        </div>

        {/* Items */}
        <div className="mt-8 grid gap-3">
          {faqs.map((f, idx) => {
            const open = openIdx === idx
            return (
              <div
                key={f.q}
                className="rounded-[1.4rem] border border-slate-900/10 bg-white/70 shadow-sm backdrop-blur"
              >
                <button
                  onClick={() => setOpenIdx(open ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={open}
                >
                  <div className="min-w-0">
                    <div className="text-[13px] font-semibold text-slate-900">{f.q}</div>
                    {!open ? (
                      <div className="mt-1 line-clamp-1 text-[11px] text-slate-600">{f.a}</div>
                    ) : null}
                  </div>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-900/10 bg-white/80 text-slate-900/70 shadow-sm">
                    <Chevron open={open} />
                  </span>
                </button>

                {open ? (
                  <div className="px-5 pb-5">
                    <div className="rounded-2xl border border-slate-900/10 bg-white/80 px-4 py-3 text-[12px] leading-relaxed text-slate-700 shadow-sm">
                      {f.a}
                    </div>
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>

        <div className="mt-4 text-center text-[11px] text-slate-600">
          {lang === 'de'
            ? 'Noch etwas offen? Dann einfach kurz schildern – wir sagen Ihnen direkt, ob und wie wir helfen können.'
            : 'Still unsure about something? Send a quick note — we’ll tell you directly if and how we can help.'}
        </div>
      </div>
    </section>
  )
}

// src/app/components/kientwicklung/AiHeroSection.tsx
import Link from 'next/link'
import { Badge, GlassCard, Lang } from './_ui'

function Star({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2l2.7 6.3 6.8.6-5.2 4.5 1.6 6.7L12 16.9 6.1 20.1l1.6-6.7L2.5 8.9l6.8-.6L12 2z" />
    </svg>
  )
}

export default function AiHeroSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'KI Entwicklung (LLM, RAG, Agenten)',
          title: 'KI-Funktionen, die in Produktion funktionieren – nicht nur in Demos.',
          subtitle:
            'Wir integrieren KI in Ihre Web-App so, dass sie messbar Nutzen bringt: mit sauberer UX, Evaluations, Guardrails, Observability und kontrollierbaren Kosten.',
          bullets: [
            'LLM-Integration (Chat, Copilot, Assist) mit Rollen, Kontext & Tool-Calls',
            'RAG/Wissenssuche auf Ihren Daten inkl. Quellen & Berechtigungen',
            'Agenten & Automationen mit Freigaben (Human-in-the-Loop)',
            'Evals & Regression-Checks: Qualität bleibt stabil bei Updates',
          ],
          cta1: 'Projekt anfragen',
          cta2: 'Leistungen ansehen',
          trust1: 'B2B-first',
          trust2: 'Security & RLS',
          trust3: 'Messbar (Evals/KPIs)',
          trust4: 'Kostenkontrolle',
          rating: 'Top bewertet',
          from: 'für Web-Apps & SaaS',
        }
      : {
          eyebrow: 'AI Development (LLM, RAG, Agents)',
          title: 'AI features that actually work in production – not just demos.',
          subtitle:
            'We integrate AI into your app with measurable outcomes: strong UX, evaluations, guardrails, observability and predictable costs.',
          bullets: [
            'LLM integration (chat, copilot, assist) with roles, context & tool calls',
            'RAG / knowledge search on your data with citations & permissions',
            'Agents & automations with approvals (human-in-the-loop)',
            'Evals & regression checks: quality stays stable across updates',
          ],
          cta1: 'Request a project',
          cta2: 'View services',
          trust1: 'B2B-first',
          trust2: 'Security & RLS',
          trust3: 'Measurable (Evals/KPIs)',
          trust4: 'Cost control',
          rating: 'Top rated',
          from: 'for web apps & SaaS',
        }

  return (
    <section className="relative overflow-hidden pt-10 sm:pt-14">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-slate-900/10 blur-3xl md:h-[780px] md:w-[780px]" />
        <div className="absolute -top-20 right-[-140px] h-[440px] w-[440px] rounded-full bg-slate-900/8 blur-3xl md:h-[620px] md:w-[620px]" />
        <div className="absolute bottom-[-260px] left-[-140px] h-[560px] w-[560px] rounded-full bg-slate-900/8 blur-3xl md:h-[780px] md:w-[780px]" />
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <Badge>{t.eyebrow}</Badge>
          <span className="text-xs text-slate-500">{t.from}</span>
        </div>

        <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          {t.title}
        </h1>

        <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-slate-600 sm:text-[17px]">
          {t.subtitle}
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-200/70"
          >
            {t.cta1}
          </Link>
          <Link
            href="#leistungen"
            className="inline-flex items-center justify-center rounded-full border border-white/60 bg-white/70 px-5 py-3 text-sm font-medium text-slate-900 shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200/70"
          >
            {t.cta2}
          </Link>

          <div className="mt-1 flex items-center gap-2 text-xs text-slate-600 sm:ml-4">
            <span className="inline-flex items-center gap-1">
              <span className="inline-flex text-amber-500">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
              <span className="font-medium text-slate-700">{t.rating}</span>
            </span>
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <GlassCard className="p-6">
            <div className="text-sm font-medium text-slate-900">Was Sie bekommen</div>
            <ul className="mt-4 grid gap-3">
              {t.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/60 bg-white/70 shadow-sm">
                    ✓
                  </span>
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="text-sm font-medium text-slate-900">Warum MVPWERK</div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[t.trust1, t.trust2, t.trust3, t.trust4].map((x) => (
                <div
                  key={x}
                  className="rounded-2xl border border-white/60 bg-white/70 px-4 py-3 text-sm text-slate-700 shadow-sm backdrop-blur"
                >
                  {x}
                </div>
              ))}
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Wir bauen KI nicht „drüber“, sondern in Ihren Workflow: Berechtigungen, Audit, Fallbacks,
              Kostenlimits, und eine UX, die Teams wirklich nutzen.
            </p>
          </GlassCard>
        </div>

        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-slate-900/10 to-transparent" />
      </div>
    </section>
  )
}

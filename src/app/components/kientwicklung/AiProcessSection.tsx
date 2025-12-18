// src/app/components/kientwicklung/AiProcessSection.tsx
import { GlassCard, Lang, SectionShell } from './_ui'

type Phase = { title: string; text: string; bullets: string[] }

export default function AiProcessSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Ablauf',
          title: 'Von Idee zu Produktion: ein klarer KI-Workflow',
          subtitle:
            'Wir bauen zuerst ein messbares Fundament (Ziele, Daten, Evals) – danach skalieren wir sicher in die Produktion.',
          phases: [
            {
              title: 'Phase 1: Discovery & Zieldefinition',
              text: 'Use-Case, KPIs, Risiken, Datenquellen, Berechtigungen, UX-Skizzen.',
              bullets: ['KPI-Definition', 'Datencheck', 'Tool-Policy', 'Pilot-Scope'],
            },
            {
              title: 'Phase 2: Prototyp (mit echten Daten)',
              text: 'Erstes RAG/LLM Setup, UI, Quellen, erste Evals – schnell testbar.',
              bullets: ['RAG Pipeline', 'Prompt v1', 'Eval Set v1', 'Feedback Loop'],
            },
            {
              title: 'Phase 3: Hardening & Qualität',
              text: 'Guardrails, Regression, Monitoring, Kostenlimits, Edge Cases.',
              bullets: ['Evals erweitern', 'Fallbacks', 'Tracing', 'PII/Logging'],
            },
            {
              title: 'Phase 4: Rollout & Optimierung',
              text: 'Pilotgruppe → breiter Rollout, A/B, kontinuierliche Verbesserung.',
              bullets: ['Feature Flags', 'A/B Tests', 'SLA-KPIs', 'Roadmap'],
            },
          ] as Phase[],
        }
      : {
          eyebrow: 'Process',
          title: 'From idea to production: a clear AI workflow',
          subtitle:
            'We start with measurable foundations (goals, data, evals) – then scale safely into production.',
          phases: [
            {
              title: 'Phase 1: Discovery & goal definition',
              text: 'Use case, KPIs, risks, data sources, permissions, UX sketches.',
              bullets: ['KPIs', 'Data check', 'Tool policy', 'Pilot scope'],
            },
            {
              title: 'Phase 2: Prototype (with real data)',
              text: 'First RAG/LLM setup, UI, citations, initial evals – quickly testable.',
              bullets: ['RAG pipeline', 'Prompt v1', 'Eval set v1', 'Feedback loop'],
            },
            {
              title: 'Phase 3: Hardening & quality',
              text: 'Guardrails, regression, monitoring, cost limits, edge cases.',
              bullets: ['Expand evals', 'Fallbacks', 'Tracing', 'PII/logging'],
            },
            {
              title: 'Phase 4: Rollout & optimization',
              text: 'Pilot → wider rollout, A/B, continuous improvement.',
              bullets: ['Feature flags', 'A/B tests', 'SLA KPIs', 'Roadmap'],
            },
          ] as Phase[],
        }

  return (
    <SectionShell id="prozess" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle}>
      <div className="grid gap-4 md:grid-cols-2">
        {t.phases.map((p) => (
          <GlassCard key={p.title} className="p-6">
            <div className="text-base font-medium text-slate-900">{p.title}</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.text}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.bullets.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center rounded-full border border-white/60 bg-white/70 px-3 py-1 text-[12px] font-medium text-slate-700 shadow-sm backdrop-blur"
                >
                  {b}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionShell>
  )
}

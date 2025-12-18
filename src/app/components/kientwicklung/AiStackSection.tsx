// src/app/components/kientwicklung/AiStackSection.tsx
import { GlassCard, Lang, SectionShell } from './_ui'

type StackItem = { title: string; text: string; bullets: string[] }

export default function AiStackSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Tech Stack',
          title: 'Model-agnostisch, aber produktionsorientiert',
          subtitle:
            'Wir wählen Stack und Modell nach Anforderungen (Qualität, Kosten, Latenz, Datenschutz). Wichtig ist: observability, evals und sichere Integrationen.',
          items: [
            {
              title: 'LLM Layer',
              text: 'Chat/Assist, Tool-Calls, Systemprompts, Routing (z. B. klein → groß).',
              bullets: ['Prompt-Versionierung', 'Guardrails', 'Fallbacks', 'Rate-Limits'],
            },
            {
              title: 'RAG / Retrieval',
              text: 'Embeddings, Chunking, Indexing, Re-Ranking, Quellenpflicht.',
              bullets: ['Zugriffskontrolle', 'Zitieren', 'Freshness', 'Dedup'],
            },
            {
              title: 'Agenten & Workflows',
              text: 'Aufgabenketten, Tools/Actions, Freigaben, Queues.',
              bullets: ['Human-in-the-Loop', 'Audit Trail', 'Idempotenz', 'Retries'],
            },
            {
              title: 'Observability',
              text: 'Traces, Kosten, Latenz, Fehler, Feedback & Evals in Produktion.',
              bullets: ['Token-Kosten', 'Latency KPIs', 'Alerts', 'Dashboards'],
            },
            {
              title: 'Security',
              text: 'Rollen, Mandanten, Logging-Policy, PII-Redaktion.',
              bullets: ['RLS', 'Allowlist Tools', 'Data Minimization', 'Retention'],
            },
            {
              title: 'Deployment',
              text: 'Next.js, APIs, Background Jobs, Vercel/Server – passend zu Ihrer Architektur.',
              bullets: ['Queues/Jobs', 'Caching', 'Edge/Node', 'Feature Flags'],
            },
          ] as StackItem[],
        }
      : {
          eyebrow: 'Stack',
          title: 'Model-agnostic, production-first',
          subtitle:
            'We choose stack and models based on requirements (quality, cost, latency, privacy). What matters: observability, evals and secure integrations.',
          items: [
            {
              title: 'LLM layer',
              text: 'Chat/assist, tool calls, system prompts, routing (small → large).',
              bullets: ['Prompt versioning', 'Guardrails', 'Fallbacks', 'Rate limits'],
            },
            {
              title: 'RAG / retrieval',
              text: 'Embeddings, chunking, indexing, re-ranking, citation requirement.',
              bullets: ['Access control', 'Citations', 'Freshness', 'Dedup'],
            },
            {
              title: 'Agents & workflows',
              text: 'Task chains, tools/actions, approvals, queues.',
              bullets: ['Human-in-the-loop', 'Audit trail', 'Idempotency', 'Retries'],
            },
            {
              title: 'Observability',
              text: 'Traces, cost, latency, errors, feedback & evals in production.',
              bullets: ['Token cost', 'Latency KPIs', 'Alerts', 'Dashboards'],
            },
            {
              title: 'Security',
              text: 'Roles, tenants, logging policy, PII redaction.',
              bullets: ['RLS', 'Tool allowlist', 'Data minimization', 'Retention'],
            },
            {
              title: 'Deployment',
              text: 'Next.js, APIs, background jobs, server – matching your architecture.',
              bullets: ['Queues/jobs', 'Caching', 'Edge/Node', 'Feature flags'],
            },
          ] as StackItem[],
        }

  return (
    <SectionShell id="stack" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle}>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {t.items.map((s) => (
          <GlassCard key={s.title} className="p-6">
            <div className="text-base font-medium text-slate-900">{s.title}</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
            <div className="mt-4 grid gap-2 text-sm text-slate-700">
              {s.bullets.map((b) => (
                <div key={b} className="flex items-center gap-2">
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-white/60 bg-white/70 text-[11px] shadow-sm">
                    ✓
                  </span>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionShell>
  )
}

// src/app/components/kientwicklung/AiDeliverablesSection.tsx
import { GlassCard, Lang, SectionShell } from './_ui'

type Deliverable = { title: string; text: string; tags: string[] }

export default function AiDeliverablesSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Deliverables',
          title: 'Was in KI-Projekten wirklich geliefert wird',
          subtitle:
            'Nicht nur „ein Prompt“. Sondern ein System, das sicher läuft, messbar besser wird und von Teams verstanden wird.',
          items: [
            {
              title: 'Prompt- & Policy-Suite',
              text: 'Systemprompts, Rollen, Output-Formate, Sicherheitsregeln, Tool-Policies – versioniert und reviewbar.',
              tags: ['Prompts', 'Policies', 'Versioning', 'Review'],
            },
            {
              title: 'RAG-Pipeline',
              text: 'Indexing, Chunking, Embeddings, Retrieval, Re-Ranking, Quellen-Zitate + Zugriffskontrolle.',
              tags: ['RAG', 'Embeddings', 'Citations', 'Permissions'],
            },
            {
              title: 'Eval-Set & Qualitätsmetriken',
              text: 'Testfälle, Scoring, automatische Checks + Regression-Tests für Updates.',
              tags: ['Evals', 'Regression', 'Scoring', 'A/B'],
            },
            {
              title: 'Observability Dashboard',
              text: 'Traces, Kosten, Latenz, Fehlerquoten, Feedback – inkl. Alerts bei Ausreißern.',
              tags: ['Tracing', 'Token Cost', 'Latency', 'Alerts'],
            },
            {
              title: 'UX-Komponenten',
              text: 'Chat/Assist-UI, Quellen-Viewer, Freigabe-Flow, Copy/Insert, Ergebnisformatierung.',
              tags: ['UX', 'Approvals', 'Sources', 'Components'],
            },
            {
              title: 'Security-Konzept',
              text: 'Rollen, Mandantenfähigkeit, Logging-Policy, PII-Redaktion, Datenminimierung.',
              tags: ['RLS', 'Tenants', 'PII', 'Retention'],
            },
          ] as Deliverable[],
        }
      : {
          eyebrow: 'Deliverables',
          title: 'What’s actually delivered in AI projects',
          subtitle:
            'Not just “a prompt”. A system that runs safely, improves measurably and is understood by real teams.',
          items: [
            {
              title: 'Prompt & policy suite',
              text: 'System prompts, roles, output formats, safety rules, tool policies – versioned and reviewable.',
              tags: ['Prompts', 'Policies', 'Versioning', 'Review'],
            },
            {
              title: 'RAG pipeline',
              text: 'Indexing, chunking, embeddings, retrieval, re-ranking, citations + access control.',
              tags: ['RAG', 'Embeddings', 'Citations', 'Permissions'],
            },
            {
              title: 'Eval set & quality metrics',
              text: 'Test cases, scoring, automated checks + regression tests for updates.',
              tags: ['Evals', 'Regression', 'Scoring', 'A/B'],
            },
            {
              title: 'Observability dashboard',
              text: 'Traces, cost, latency, error rates, feedback – with alerts for anomalies.',
              tags: ['Tracing', 'Token Cost', 'Latency', 'Alerts'],
            },
            {
              title: 'UX components',
              text: 'Chat/assist UI, citations viewer, approval flow, copy/insert, formatting.',
              tags: ['UX', 'Approvals', 'Sources', 'Components'],
            },
            {
              title: 'Security concept',
              text: 'Roles, multi-tenancy, logging policy, PII redaction, data minimization.',
              tags: ['RLS', 'Tenants', 'PII', 'Retention'],
            },
          ] as Deliverable[],
        }

  return (
    <SectionShell id="leistungen" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle}>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {t.items.map((d) => (
          <GlassCard key={d.title} className="p-6">
            <div className="text-base font-medium text-slate-900">{d.title}</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{d.text}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {d.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-white/60 bg-white/70 px-3 py-1 text-[12px] font-medium text-slate-700 shadow-sm backdrop-blur"
                >
                  {tag}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionShell>
  )
}

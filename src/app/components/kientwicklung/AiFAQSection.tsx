// src/app/components/kientwicklung/AiFAQSection.tsx
import { GlassCard, Lang, SectionShell } from './_ui'

type QA = { q: string; a: string }

export default function AiFAQSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'FAQ',
          title: 'Häufige Fragen zur KI-Entwicklung',
          subtitle:
            'Die Antworten sind bewusst praxisnah – weil KI in der Realität an Daten, Zugriff, Kosten und Qualität scheitert (oder gewinnt).',
          items: [
            {
              q: 'Brauche ich RAG oder reicht ein Chatbot?',
              a: 'Wenn die KI verlässlich mit Ihren Inhalten arbeiten soll (Docs, Tickets, CRM), ist RAG meist Pflicht. Ein reiner Chat ohne Daten driftet schnell in allgemeine Antworten ab.',
            },
            {
              q: 'Wie verhindert man Halluzinationen?',
              a: 'Mit Quellenpflicht, klaren „I don’t know“-Regeln, Retrieval-Qualität (Re-Ranking), Output-Checks und Evals/Regression-Tests.',
            },
            {
              q: 'Kann die KI Aktionen ausführen (z. B. CRM updaten)?',
              a: 'Ja – über Tool-Calls/Actions. In B2B fast immer mit Allowlist + Freigaben (Human-in-the-Loop) + Audit Trail.',
            },
            {
              q: 'Wie schützt man sensible Daten?',
              a: 'Rollen-/Mandantenrechte (RLS), Data-Minimization, PII-Redaktion, Logging-Policy, und ein klares Berechtigungskonzept pro Quelle.',
            },
            {
              q: 'Wie bleiben Kosten kontrollierbar?',
              a: 'Tokenbudgets, Routing (klein → groß), Caching, Limits pro User/Team, und Monitoring/Alerts auf Kosten & Latenz.',
            },
            {
              q: 'Wie testet man KI wie „normale“ Software?',
              a: 'Mit Evals: Testsets, Scoring, automatische Checks und Regression-Tests bei Prompt/Model-Updates – genau wie Unit/Integration Tests.',
            },
            {
              q: 'Was ist ein sinnvoller Start-Use-Case?',
              a: 'Meist: Support-Antwortvorschläge oder interne Wissenssuche. Schnell messbar, geringer Risikohebel, hoher Nutzen.',
            },
            {
              q: 'Wie lange dauert ein Pilot?',
              a: 'Typisch wenige Wochen für einen sauberen Pilot (Ziele, Daten, RAG, UI, Evals v1). Der genaue Umfang hängt von Datenzugriff & Komplexität ab.',
            },
            {
              q: 'Welche Modelle nutzt ihr?',
              a: 'Model-agnostisch: wir wählen nach Qualität/Kosten/Datenschutz. Wichtig ist die Gesamtarchitektur mit Evals, Guardrails und Observability.',
            },
            {
              q: 'Können wir später weitere Use Cases hinzufügen?',
              a: 'Ja – wenn die Foundations (RAG, Evals, Monitoring, Policies) sauber stehen, wird das Hinzufügen weiterer Workflows deutlich schneller.',
            },
          ] as QA[],
        }
      : {
          eyebrow: 'FAQ',
          title: 'Common questions about AI development',
          subtitle:
            'Practical answers – because AI wins or fails on data access, permissions, cost control and measurable quality.',
          items: [
            {
              q: 'Do I need RAG or is a chatbot enough?',
              a: 'If you want reliable answers grounded in your docs/tickets/CRM, RAG is usually required. A generic chatbot drifts into vague responses.',
            },
            {
              q: 'How do you reduce hallucinations?',
              a: 'Citation requirements, “I don’t know” rules, retrieval quality (re-ranking), output checks and evals/regression tests.',
            },
            {
              q: 'Can the AI perform actions (e.g., update CRM)?',
              a: 'Yes, via tool calls/actions. In B2B typically with allowlists, approvals (human-in-the-loop) and audit trails.',
            },
            {
              q: 'How do you protect sensitive data?',
              a: 'Role/tenant permissions (RLS), data minimization, PII redaction, logging policies and strict source access control.',
            },
            {
              q: 'How do you keep costs predictable?',
              a: 'Token budgets, routing (small → large), caching, per-user/team limits and monitoring/alerts for cost and latency.',
            },
            {
              q: 'How do you test AI like “normal” software?',
              a: 'With evals: test sets, scoring, automated checks and regression tests for prompt/model changes – similar to unit/integration tests.',
            },
            {
              q: 'What’s a good first use case?',
              a: 'Often: support reply drafts or internal knowledge search. Fast to measure, lower risk, high value.',
            },
            {
              q: 'How long does a pilot take?',
              a: 'Typically a few weeks for a solid pilot (goals, data, RAG, UI, evals v1). Exact scope depends on data access and complexity.',
            },
            {
              q: 'Which models do you use?',
              a: 'Model-agnostic: we choose based on quality/cost/privacy. What matters is the full architecture with evals, guardrails and observability.',
            },
            {
              q: 'Can we add more use cases later?',
              a: 'Yes. Once foundations (RAG, evals, monitoring, policies) are in place, adding workflows becomes much faster.',
            },
          ] as QA[],
        }

  return (
    <SectionShell id="faq" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle}>
      <div className="grid gap-4">
        {t.items.map((qa) => (
          <GlassCard key={qa.q} className="p-6">
            <div className="text-base font-medium text-slate-900">{qa.q}</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{qa.a}</p>
          </GlassCard>
        ))}
      </div>
    </SectionShell>
  )
}

// src/app/components/cloudentwicklung/CloudFAQSection.tsx
import { GlassCard, Lang, Section } from './_ui'

type QA = { q: string; a: string }

export default function CloudFAQSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'FAQ',
          title: 'Häufige Fragen zur Cloud Entwicklung',
          subtitle:
            'Cloud wird dann gut, wenn Betrieb standardisiert ist — nicht, wenn „irgendwas deployed“.',
          items: [
            {
              q: 'Brauchen wir Kubernetes?',
              a: 'Nicht zwingend. Entscheidend sind: Deployments, Observability, Security und Kostenkontrolle. Ob Serverless, Container oder K8s hängt von Last, Team und Komplexität ab.',
            },
            {
              q: 'Was ist der schnellste Hebel?',
              a: 'Release-Standard + Observability. Wenn Deployments sicher sind und Sie Probleme sofort sehen, steigt Reliability spürbar.',
            },
            {
              q: 'Wie verhindert man Kosten-Explosionen?',
              a: 'Tagging/Owners, Budgets, Limits, Alerts und regelmäßige Optimierung. Kosten müssen erklärbar werden, nicht nur „niedrig“.',
            },
            {
              q: 'Wie macht man Security nachweisbar?',
              a: 'Secrets Management, least privilege Policies, Audit Trails und sichere Defaults. Plus klare Regeln, wer was ändern darf.',
            },
            {
              q: 'Was gehört in ein Runbook?',
              a: 'Symptom → Checks → Maßnahmen → Eskalation. Kurz, konkret, wiederholbar. Kein Roman.',
            },
            {
              q: 'Wie gehen wir mit Datenbank-Migrationen um?',
              a: 'Migrations-Disziplin: backwards-compatible Änderungen, Rollback-Plan, und Deployments, die DB-Änderungen sauber koordinieren.',
            },
          ] as QA[],
        }
      : {
          eyebrow: 'FAQ',
          title: 'Common questions about cloud development',
          subtitle:
            'Cloud becomes great when operations are standardized — not when “something deploys”.',
          items: [
            {
              q: 'Do we need Kubernetes?',
              a: 'Not necessarily. What matters: deployments, observability, security and cost control. Serverless vs containers vs K8s depends on load, team and complexity.',
            },
            {
              q: 'What’s the fastest lever?',
              a: 'Release standards + observability. When deployments are safe and issues are visible immediately, reliability improves fast.',
            },
            {
              q: 'How do we prevent cost explosions?',
              a: 'Tags/owners, budgets, limits, alerts and regular optimization. Costs must become explainable, not just “low”.',
            },
            {
              q: 'How do we make security auditable?',
              a: 'Secrets management, least privilege policies, audit trails and safe defaults — plus clear change permissions.',
            },
            {
              q: 'What belongs in a runbook?',
              a: 'Symptom → checks → actions → escalation. Short, concrete, repeatable.',
            },
            {
              q: 'How do we handle database migrations?',
              a: 'Migration discipline: backwards-compatible changes, rollback plan and deployments that coordinate DB changes safely.',
            },
          ] as QA[],
        }

  return (
    <Section id="faq" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} tone="alt">
      <div className="grid gap-4">
        {t.items.map((qa) => (
          <GlassCard key={qa.q} className="p-6">
            <div className="text-base font-medium text-slate-900">{qa.q}</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{qa.a}</p>
          </GlassCard>
        ))}
      </div>
    </Section>
  )
}

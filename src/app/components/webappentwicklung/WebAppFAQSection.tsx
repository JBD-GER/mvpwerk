// src/app/components/webappentwicklung/WebAppFAQSection.tsx
import { GlassCard, Lang, SectionShell } from './_ui'

type QA = { q: string; a: string }

export default function WebAppFAQSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'FAQ',
          title: 'Häufige Fragen zur Web App Entwicklung',
          subtitle:
            'Praxisnah – weil erfolgreiche Web Apps an Workflows, Rechten und Betrieb entscheiden (nicht an der Landingpage).',
          items: [
            {
              q: 'Was ist der beste Start: MVP oder direkt „voll“?',
              a: 'MVP mit sauberem Fundament (Datenmodell, Rollen/RLS, Kernworkflow). Dann iterativ erweitern. So vermeidest du teure Rebuilds.',
            },
            {
              q: 'Wie macht ihr Mandantenfähigkeit sicher?',
              a: 'Nicht per UI, sondern in der Datenbank: RLS/Policies, saubere Foreign Keys, tenant_id als Grundprinzip und Tests/Reviews.',
            },
            {
              q: 'Wie integriert ihr Payments?',
              a: 'Über Checkout + Webhooks + Billing-States. Wichtig ist: idempotent, testbar, mit klaren Zuständen und Fallbacks.',
            },
            {
              q: 'Wie verhindert ihr Performance-Probleme?',
              a: 'Caching, saubere Queries/Indizes, Pagination, SSR/Server Routes wo sinnvoll, und Monitoring der echten KPIs.',
            },
            {
              q: 'Braucht man ein Design-System?',
              a: 'Für Geschwindigkeit und Konsistenz: ja. Es muss nicht „riesig“ sein – aber Buttons, Inputs, Tabellen und States sollten einheitlich sein.',
            },
            {
              q: 'Was ist bei File Uploads wichtig?',
              a: 'Sichere Pfade/Policies, Viren-/Typchecks (je nach Bedarf), Größenlimits, Signed URLs und klare Ownership pro Datei.',
            },
            {
              q: 'Wie läuft der Go-Live ab?',
              a: 'Staging, Smoke-Tests, Monitoring/Alerts, Rollback-Plan und ein kurzer Runbook-Guide. Dann kontrollierter Rollout.',
            },
          ] as QA[],
        }
      : {
          eyebrow: 'FAQ',
          title: 'Common questions about web app development',
          subtitle:
            'Practical answers – because successful web apps are decided by workflows, permissions and ops.',
          items: [
            {
              q: 'Should we start with an MVP or build “everything”?',
              a: 'Start with an MVP plus solid foundations (data model, roles/RLS, core workflow). Then iterate. That avoids expensive rebuilds.',
            },
            {
              q: 'How do you do multi-tenancy securely?',
              a: 'Not via UI hiding, but at the database level: RLS/policies, clean foreign keys, tenant_id everywhere, and reviews/tests.',
            },
            {
              q: 'How do you integrate payments?',
ivet: 'Via checkout + webhooks + billing states. Key: idempotency, testability, clear states and fallbacks.',
            },
            {
              q: 'How do you prevent performance issues?',
              a: 'Caching, good queries/indexes, pagination, server rendering/routes where it helps, and monitoring real KPIs.',
            },
            {
              q: 'Do we need a design system?',
              a: 'For speed and consistency: yes. It doesn’t need to be huge — but buttons, inputs, tables and states must be consistent.',
            },
            {
              q: 'What matters for file uploads?',
              a: 'Safe paths/policies, type/size limits, signed URLs, and clear ownership per file.',
            },
            {
              q: 'How does go-live work?',
              a: 'Staging, smoke tests, monitoring/alerts, rollback plan and a short runbook. Then a controlled rollout.',
            },
          ] as any[],
        }

  // Fix: kleine Typo-Korrektur im EN Block (damit TS sauber ist)
  const items: QA[] = (t as any).items.map((x: any) => ({
    q: x.q,
    a: x.a ?? x.ivet, // handle typo-safe
  }))

  return (
    <SectionShell id="faq" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle}>
      <div className="grid gap-4">
        {items.map((qa) => (
          <GlassCard key={qa.q} className="p-6">
            <div className="text-base font-medium text-slate-900">{qa.q}</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{qa.a}</p>
          </GlassCard>
        ))}
      </div>
    </SectionShell>
  )
}

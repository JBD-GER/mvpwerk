// src/app/components/webappentwicklung/WebAppRequirementsSection.tsx
import { CheckList, GlassCard, Lang, SectionShell } from './_ui'

type Group = { title: string; subtitle: string; items: string[] }

export default function WebAppRequirementsSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Anforderungen',
          title: 'Die 7 Zielbereiche, die Web Apps erfolgreich machen',
          subtitle:
            'Wenn diese Punkte sauber geklärt sind, wird Entwicklung schnell, planbar und erweiterbar – ohne spätere Architektur-Schmerzen.',
          groups: [
            {
              title: '1) Ziel, Scope & Erfolgsmessung',
              subtitle: 'Was soll die App konkret verbessern – und wie messen wir es?',
              items: [
                'Klarer Kernprozess (z. B. Angebot → Auftrag → Abrechnung, Ticket → Lösung, Einkauf → Lager → Versand)',
                'KPIs: Zeitersparnis, Fehlerquote, Durchlaufzeit, Conversion, Support-Aufwand',
                'MVP-Scope vs. später (Roadmap-fähig ohne Neuaufbau)',
                'Definition „Done“ pro Feature (Akzeptanzkriterien)',
              ],
            },
            {
              title: '2) Nutzer, Rollen & Berechtigungen',
              subtitle: 'Wer darf was – und in welchem Mandanten/Team-Kontext?',
              items: [
                'Rollenmodell (Admin, Mitarbeiter, Kunde, Partner) + Zuständigkeiten',
                'Mandantenfähigkeit/Teams: Daten strikt getrennt',
                'RLS/Policies als echte Sicherheitsbasis (nicht nur UI-Hiding)',
                'Audit/Logs: wer hat was geändert?',
              ],
            },
            {
              title: '3) UX & Workflow-Design',
              subtitle: 'Die App muss den Alltag beschleunigen, nicht erklären.',
              items: [
                'Statusmodelle & Workflows (Angelegt → In Arbeit → Erledigt)',
                'Listen/Details, Filter, Suche, schnelle Aktionen',
                'Fehler-UX: leere Zustände, Validierung, klare Feedbacks',
                'Mobile/Tablet: die wichtigen Flows müssen dort funktionieren',
              ],
            },
            {
              title: '4) Architektur & Datenmodell',
              subtitle: 'Skalierbarkeit entsteht im Datenmodell – nicht in „mehr Code“. ',
              items: [
                'Sauberes DB-Schema inkl. Constraints/Indices',
                'API-Design (REST/Routes) + Idempotenz (doppelte Klicks)',
                'Dateien/Storage: Buckets, Pfade, Rechte, Versionierung',
                'Reporting/Exports: strukturierte Daten statt „Screenshot-Reports“',
              ],
            },
            {
              title: '5) Integrationen & Automationen',
              subtitle: 'Wert entsteht oft da, wo Systeme zusammenarbeiten.',
              items: [
                'E-Mail/Benachrichtigungen (Events, Vorlagen, Zustellbarkeit)',
                'Payments/Subscriptions (Checkout, Webhooks, Rechnungslogik)',
                'CRM/ERP/Tools (z. B. Kalender, Buchhaltung, Slack/Teams)',
                'Background Jobs/Queues für zuverlässige Verarbeitung',
              ],
            },
            {
              title: '6) Qualität, Performance & Sicherheit',
              subtitle: 'Produktion braucht messbare Stabilität.',
              items: [
                'Core Web Vitals & Ladezeit (LCP, TTFB, Caching)',
                'Tests/Checks für kritische Flows (Auth, Payment, Datenänderungen)',
                'Rate-Limits, Abuse-Schutz, Input-Validierung',
                'Secrets/ENV, Security Headers, sichere Uploads',
              ],
            },
            {
              title: '7) Betrieb, Deployments & Weiterentwicklung',
              subtitle: 'Wie bleibt die App stabil, wenn Nutzerzahl & Features wachsen?',
              items: [
                'Staging/Prod, Releases, Rollback-Strategie',
                'Monitoring/Logging/Alerting (Fehlerquoten, Performance)',
                'Backups/Recovery, Migration-Strategie',
                'Roadmap-Prozess: Feedback → Priorisierung → Release',
              ],
            },
          ] as Group[],
        }
      : {
          eyebrow: 'Requirements',
          title: 'The 7 goal areas that make web apps successful',
          subtitle:
            'When these are defined, delivery becomes fast, predictable and extensible – without future architecture pain.',
          groups: [
            {
              title: '1) Goal, scope & success metrics',
              subtitle: 'What should the app improve – and how do we measure it?',
              items: [
                'Clear core workflow (quote → order → billing, ticket → resolution, inventory → shipping)',
                'KPIs: time saved, error rate, cycle time, conversion, support load',
                'MVP scope vs later (roadmap-ready without rebuild)',
                'Acceptance criteria per feature',
              ],
            },
            {
              title: '2) Users, roles & permissions',
              subtitle: 'Who can do what – in which tenant/team context?',
              items: [
                'Role model (admin, staff, customer, partner) + responsibilities',
                'Multi-tenancy/teams: strict data separation',
                'RLS/policies as real security (not just UI hiding)',
                'Audit/logs: who changed what?',
              ],
            },
            {
              title: '3) UX & workflow design',
              subtitle: 'The app must accelerate work, not explain itself.',
              items: [
                'State models & workflows (created → in progress → done)',
                'Lists/details, filters, search, quick actions',
                'Error UX: empty states, validation, clear feedback',
                'Mobile/tablet: core flows must work there too',
              ],
            },
            {
              title: '4) Architecture & data model',
              subtitle: 'Scalability is in the data model, not “more code”.',
              items: [
                'Clean DB schema with constraints/indexes',
                'API design + idempotency (double clicks)',
                'Files/storage: buckets, paths, permissions, versioning',
                'Reporting/exports: structured data over screenshots',
              ],
            },
            {
              title: '5) Integrations & automation',
              subtitle: 'Value often comes from systems working together.',
              items: [
                'Email/notifications (events, templates, deliverability)',
                'Payments/subscriptions (checkout, webhooks, billing logic)',
                'CRM/ERP/tools (calendar, accounting, Slack/Teams)',
                'Background jobs/queues for reliable processing',
              ],
            },
            {
              title: '6) Quality, performance & security',
              subtitle: 'Production needs measurable stability.',
              items: [
                'Core Web Vitals & speed (LCP, TTFB, caching)',
                'Tests/checks for critical flows (auth, payments, mutations)',
                'Rate limits, abuse protection, input validation',
                'Secrets/ENV, security headers, safe uploads',
              ],
            },
            {
              title: '7) Operations, deployments & iteration',
              subtitle: 'How does the app stay stable as features/users grow?',
              items: [
                'Staging/prod, releases, rollback strategy',
                'Monitoring/logging/alerting (errors, performance)',
                'Backups/recovery, migration strategy',
                'Roadmap loop: feedback → prioritization → release',
              ],
            },
          ] as Group[],
        }

  return (
    <SectionShell id="anforderungen" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle}>
      <div className="grid gap-4">
        {t.groups.map((g) => (
          <GlassCard key={g.title} className="p-6">
            <div className="flex flex-col gap-1">
              <div className="text-base font-medium text-slate-900">{g.title}</div>
              <div className="text-sm text-slate-600">{g.subtitle}</div>
            </div>
            <div className="mt-4">
              <CheckList items={g.items} />
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionShell>
  )
}

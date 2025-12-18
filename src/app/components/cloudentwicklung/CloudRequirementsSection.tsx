// src/app/components/cloudentwicklung/CloudRequirementsSection.tsx
import { GlassCard, Lang, Section, CheckList, Split } from './_ui'

type Group = { title: string; subtitle: string; items: string[] }

export default function CloudRequirementsSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Anforderungen',
          title: 'Die 7 Zielbereiche, die Cloud-Projekte produktionsreif machen',
          subtitle:
            'Cloud ist dann gut, wenn Betrieb planbar ist: Releases, Observability, Security, Kosten und klare Verantwortlichkeiten.',
          summaryTitle: 'Wenn Sie nur 4 Dinge klären:',
          summary: [
            'Welche SLOs/SLAs müssen gehalten werden?',
            'Wie deployen Sie sicher (Rollback, Migration, Staging)?',
            'Wie werden Vorfälle erkannt und bearbeitet (Alerts/Runbooks)?',
            'Wie bleiben Kosten nachvollziehbar (Tags/Budgets/Owners)?',
          ],
          groups: [
            {
              title: '1) Architektur & Skalierungsmodell',
              subtitle: 'Welche Last, welche Peaks, welche Datenflüsse?',
              items: [
                'Services & Grenzen (Monolith vs. modular)',
                'Skalierung: horizontal, queues, caching',
                'Datenstrategie: Postgres, object storage, events',
                'Latenz/Regionen: was ist kritisch?',
              ],
            },
            {
              title: '2) Deployments & Release-Prozess',
              subtitle: 'Wie kommt Code sicher nach Produktion?',
              items: [
                'Staging/Prod, Feature Flags, Canary (wenn nötig)',
                'Rollback-Strategie & Migrations-Disziplin',
                'CI/CD Standards, Checks, Preview Environments',
                'Versionierung & Changelogs',
              ],
            },
            {
              title: '3) Observability (Logs/Metrics/Tracing)',
              subtitle: 'Wie sehen Sie Probleme, bevor Kunden es merken?',
              items: [
                'Dashboards für Error-Rate, Latency, Throughput',
                'Alerting (Eskalation, Ruhezeiten, Ownership)',
                'Tracing für kritische Flows',
                'SLOs & Error Budgets',
              ],
            },
            {
              title: '4) Security & Governance',
              subtitle: 'Wie ist Sicherheit nachweisbar?',
              items: [
                'Secrets Management, Rotationen, Zugriffskontrolle',
                'Policies, least-privilege, auditierbare Änderungen',
                'Security Hardening & sichere Defaults',
                'Logging/Retention & Compliance-Basics',
              ],
            },
            {
              title: '5) Kostenkontrolle & FinOps',
              subtitle: 'Wie vermeiden Sie Kosten-Überraschungen?',
              items: [
                'Tagging/Cost Centers, Budgets, Limits',
                'Right-sizing, caching, queues statt overprovision',
                'Kosten-Reports: Owners pro Service',
                'Planung: Wachstum vs. Fixkosten',
              ],
            },
            {
              title: '6) Daten, Backups & Recovery',
              subtitle: 'Wie kommen Sie nach einem Fehler schnell zurück?',
              items: [
                'Backup-Strategie, Restore-Tests',
                'Migrationen & Rollback-Plan',
                'RPO/RTO Definition',
                'Datenintegrität: constraints, indices',
              ],
            },
            {
              title: '7) Team-Standards & Betrieb',
              subtitle: 'Wer betreibt was – und wie?',
              items: [
                'Runbooks, Oncall/Ownership, Incident-Flow',
                'Dokumentation: „Wie deploye ich? Wie debugge ich?“',
                'Konventionen: Naming, Env, Secrets, Logs',
                'Roadmap: Betrieb + Features zusammen planen',
              ],
            },
          ] as Group[],
        }
      : {
          eyebrow: 'Requirements',
          title: 'The 7 goal areas that make cloud projects production-grade',
          subtitle:
            'Cloud is great when operations are predictable: releases, observability, security, costs and clear ownership.',
          summaryTitle: 'If you only clarify 4 things:',
          summary: [
            'Which SLOs/SLAs must be met?',
            'How do you deploy safely (rollback, migrations, staging)?',
            'How are incidents detected and handled (alerts/runbooks)?',
            'How do costs stay explainable (tags/budgets/owners)?',
          ],
          groups: [
            {
              title: '1) Architecture & scaling model',
              subtitle: 'Load, peaks, data flows.',
              items: [
                'Service boundaries (monolith vs modular)',
                'Scaling: horizontal, queues, caching',
                'Data strategy: Postgres, object storage, events',
                'Latency/regions: what is critical?',
              ],
            },
            {
              title: '2) Deployments & release process',
              subtitle: 'How does code reach production safely?',
              items: [
                'Staging/prod, feature flags, canary if needed',
                'Rollback strategy & migration discipline',
                'CI/CD standards, checks, preview environments',
                'Versioning & changelogs',
              ],
            },
            {
              title: '3) Observability (logs/metrics/tracing)',
              subtitle: 'Detect issues before customers do.',
              items: [
                'Dashboards for error rate, latency, throughput',
                'Alerting (escalation, quiet hours, ownership)',
                'Tracing for critical flows',
                'SLOs & error budgets',
              ],
            },
            {
              title: '4) Security & governance',
              subtitle: 'Make security auditable.',
              items: [
                'Secrets management, rotation, access control',
                'Policies, least privilege, auditable changes',
                'Security hardening & safe defaults',
                'Logging/retention & compliance basics',
              ],
            },
            {
              title: '5) Cost control & FinOps',
              subtitle: 'Avoid cost surprises.',
              items: [
                'Tagging/cost centers, budgets, limits',
                'Right-sizing, caching, queues over overprovisioning',
                'Cost reports: owners per service',
                'Planning: growth vs fixed costs',
              ],
            },
            {
              title: '6) Data, backups & recovery',
              subtitle: 'Recover fast after incidents.',
              items: [
                'Backup strategy, restore tests',
                'Migrations & rollback plan',
                'RPO/RTO definition',
                'Data integrity: constraints, indexes',
              ],
            },
            {
              title: '7) Team standards & operations',
              subtitle: 'Who operates what — and how?',
              items: [
                'Runbooks, ownership, incident flow',
                'Docs: how to deploy, how to debug',
                'Conventions: naming, env, secrets, logs',
                'Roadmap: ops + features planned together',
              ],
            },
          ] as Group[],
        }

  return (
    <Section id="anforderungen" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} tone="light">
      <Split
        left={
          <div className="grid gap-4">
            {t.groups.map((g) => (
              <GlassCard key={g.title} className="p-6">
                <div className="text-base font-medium text-slate-900">{g.title}</div>
                <div className="mt-1 text-sm text-slate-600">{g.subtitle}</div>
                <div className="mt-4">
                  <CheckList items={g.items} />
                </div>
              </GlassCard>
            ))}
          </div>
        }
        right={
          <GlassCard className="p-6">
            <div className="text-base font-medium text-slate-900">{t.summaryTitle}</div>
            <div className="mt-4">
              <CheckList items={t.summary} />
            </div>
          </GlassCard>
        }
      />
    </Section>
  )
}

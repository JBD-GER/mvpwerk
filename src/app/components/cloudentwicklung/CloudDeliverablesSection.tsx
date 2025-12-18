// src/app/components/cloudentwicklung/CloudDeliverablesSection.tsx
import { GlassCard, Lang, Section } from './_ui'

type Deliverable = { title: string; text: string; tags: string[] }

export default function CloudDeliverablesSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Deliverables',
          title: 'Was Sie am Ende wirklich in der Hand haben',
          subtitle:
            'Keine „Cloud-Folien“. Sondern Standards, Automationen und Sichtbarkeit, mit denen Betrieb und Team arbeiten können.',
          items: [
            {
              title: 'Release- & Deployment-Standard',
              text: 'Staging/Prod, Checks, Rollback, Migrations – dokumentiert und teamfähig.',
              tags: ['CI/CD', 'Rollback', 'Migrations', 'Staging/Prod'],
            },
            {
              title: 'Observability Setup',
              text: 'Dashboards, Alerts, Tracing, SLOs – inkl. Ownership & Eskalation.',
              tags: ['Metrics', 'Logs', 'Tracing', 'SLOs'],
            },
            {
              title: 'Security Baseline',
              text: 'Secrets, Policies, Hardening, Audit – nachvollziehbar statt Bauchgefühl.',
              tags: ['Secrets', 'Policies', 'Audit', 'Hardening'],
            },
            {
              title: 'Cost Control',
              text: 'Tagging, Budgets, Limits, Reports – Kosten werden erklärbar.',
              tags: ['Tagging', 'Budgets', 'Reports', 'FinOps'],
            },
            {
              title: 'Backups & Recovery',
              text: 'Backup-Plan, Restore-Tests, RPO/RTO – planbare Wiederherstellung.',
              tags: ['Backups', 'Restore', 'RPO/RTO', 'Runbooks'],
            },
            {
              title: 'Dokumentation & Runbooks',
              text: 'Wie deployen, wie debuggen, wie reagieren – kurze, echte Handbücher.',
              tags: ['Runbooks', 'Docs', 'Ops', 'Ownership'],
            },
          ] as Deliverable[],
        }
      : {
          eyebrow: 'Deliverables',
          title: 'What you actually get',
          subtitle:
            'No “cloud slides”. Standards, automation and visibility your team can operate.',
          items: [
            {
              title: 'Release & deployment standard',
              text: 'Staging/prod, checks, rollback, migrations — documented and team-ready.',
              tags: ['CI/CD', 'Rollback', 'Migrations', 'Staging/Prod'],
            },
            {
              title: 'Observability setup',
              text: 'Dashboards, alerts, tracing, SLOs — including ownership & escalation.',
              tags: ['Metrics', 'Logs', 'Tracing', 'SLOs'],
            },
            {
              title: 'Security baseline',
              text: 'Secrets, policies, hardening, audit — provable security.',
              tags: ['Secrets', 'Policies', 'Audit', 'Hardening'],
            },
            {
              title: 'Cost control',
              text: 'Tagging, budgets, limits, reports — explainable costs.',
              tags: ['Tagging', 'Budgets', 'Reports', 'FinOps'],
            },
            {
              title: 'Backups & recovery',
              text: 'Backup plan, restore tests, RPO/RTO — predictable recovery.',
              tags: ['Backups', 'Restore', 'RPO/RTO', 'Runbooks'],
            },
            {
              title: 'Docs & runbooks',
              text: 'How to deploy, debug and respond — short, real playbooks.',
              tags: ['Runbooks', 'Docs', 'Ops', 'Ownership'],
            },
          ] as Deliverable[],
        }

  return (
    <Section id="leistungen" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} tone="alt">
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
    </Section>
  )
}

// src/app/components/cloudentwicklung/CloudUseCasesSection.tsx
import { GlassCard, Lang, Section } from './_ui'

type UseCase = { title: string; text: string; bullets: string[] }

export default function CloudUseCasesSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Use Cases',
          title: 'Typische Cloud-Bausteine, die sofort Wirkung zeigen',
          subtitle:
            'Cloud lohnt sich dann, wenn Betrieb und Produkt gemeinsam stabiler werden — weniger Ausfälle, weniger Kosten, weniger Bauchgefühl.',
          items: [
            {
              title: 'CI/CD & Release-Standards',
              text: 'Staging/Prod, Checks, Rollback, Migrations — damit Deployments Routine werden.',
              bullets: ['Preview Envs', 'Rollback', 'Migration Flow', 'Checks'],
            },
            {
              title: 'Observability Setup',
              text: 'Logs, Metrics, Tracing, Alerts und SLOs — damit Probleme früh sichtbar sind.',
              bullets: ['Dashboards', 'Alerting', 'Tracing', 'SLOs'],
            },
            {
              title: 'Scaling & Performance',
              text: 'Caching, Queues, Rate-Limits und saubere Kapazitätsplanung.',
              bullets: ['Queues', 'Caching', 'Limits', 'Load patterns'],
            },
            {
              title: 'Security Hardening',
              text: 'Secrets, Policies, least privilege, auditierbare Changes.',
              bullets: ['Secrets', 'Policies', 'Audit', 'Hardening'],
            },
            {
              title: 'Cost Control / FinOps',
              text: 'Tags, Budgets, Alerts und Optimierung — Kosten werden erklärbar.',
              bullets: ['Tagging', 'Budgets', 'Cost alerts', 'Right-sizing'],
            },
            {
              title: 'Disaster Recovery',
              text: 'Backups, Restore-Tests, RPO/RTO — planbar statt Panik.',
              bullets: ['Backups', 'Restore tests', 'RPO/RTO', 'Runbooks'],
            },
          ] as UseCase[],
        }
      : {
          eyebrow: 'Use cases',
          title: 'Cloud building blocks with immediate impact',
          subtitle:
            'Cloud pays off when product and operations become more reliable — fewer outages, lower costs, less guesswork.',
          items: [
            {
              title: 'CI/CD & release standards',
              text: 'Staging/prod, checks, rollback, migrations — deployments become routine.',
              bullets: ['Preview envs', 'Rollback', 'Migration flow', 'Checks'],
            },
            {
              title: 'Observability setup',
              text: 'Logs, metrics, tracing, alerts and SLOs — detect issues early.',
              bullets: ['Dashboards', 'Alerting', 'Tracing', 'SLOs'],
            },
            {
              title: 'Scaling & performance',
              text: 'Caching, queues, rate limits and capacity planning.',
              bullets: ['Queues', 'Caching', 'Limits', 'Load patterns'],
            },
            {
              title: 'Security hardening',
              text: 'Secrets, policies, least privilege, auditable changes.',
              bullets: ['Secrets', 'Policies', 'Audit', 'Hardening'],
            },
            {
              title: 'Cost control / FinOps',
              text: 'Tags, budgets, alerts and optimization — costs become explainable.',
              bullets: ['Tagging', 'Budgets', 'Cost alerts', 'Right-sizing'],
            },
            {
              title: 'Disaster recovery',
              text: 'Backups, restore tests, RPO/RTO — predictable recovery.',
              bullets: ['Backups', 'Restore tests', 'RPO/RTO', 'Runbooks'],
            },
          ] as UseCase[],
        }

  return (
    <Section id="usecases" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} tone="alt">
      {/* Horizontal “rail” statt klassisches Grid -> wirkt anders */}
      <div className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {t.items.map((u) => (
          <GlassCard key={u.title} className="min-w-[280px] max-w-[320px] p-6">
            <div className="text-base font-medium text-slate-900">{u.title}</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{u.text}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {u.bullets.map((b) => (
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
    </Section>
  )
}

// src/app/components/webappentwicklung/WebAppStackSection.tsx
import { GlassCard, Lang, SectionShell } from './_ui'

type StackItem = { title: string; text: string; bullets: string[] }

export default function WebAppStackSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Tech Stack',
          title: 'Modern, schnell, wartbar – und produktionsorientiert',
          subtitle:
            'Stack ist Mittel zum Zweck. Entscheidend sind: sauberes Datenmodell, Security, Performance, Tests und Betrieb.',
          items: [
            {
              title: 'Frontend',
              text: 'UI, UX, Navigation, States, Tabellen, Formulare – performant und konsistent.',
              bullets: ['React/Next.js', 'Design System', 'Tables & Forms', 'Accessibility'],
            },
            {
              title: 'Backend & APIs',
              text: 'Stabile Endpoints, Server Actions/Routes, Background Jobs und saubere Fehlerbehandlung.',
              bullets: ['API Design', 'Idempotency', 'Queues/Jobs', 'Webhooks'],
            },
            {
              title: 'Datenbank',
              text: 'Schema, Constraints, Indizes, RLS/Policies, Migrations – als Fundament.',
              bullets: ['Postgres', 'RLS', 'Migrations', 'Indexes'],
            },
            {
              title: 'Auth & Security',
              text: 'Login, 2FA (optional), Rollen, Mandanten, Upload-Sicherheit, Abuse-Schutz.',
              bullets: ['RBAC', 'RLS', 'Rate Limits', 'Secure uploads'],
            },
            {
              title: 'Payments & Billing',
              text: 'Checkout, Pläne, Rechnungslogik, Webhooks, Trials – sauber und testbar.',
              bullets: ['Subscriptions', 'Webhooks', 'Invoices', 'Trials'],
            },
            {
              title: 'Ops & Observability',
              text: 'Deployments, Monitoring, Logs, Alerts, Performance – damit Produktion stabil bleibt.',
              bullets: ['Monitoring', 'Error tracking', 'Perf KPIs', 'Rollbacks'],
            },
          ] as StackItem[],
        }
      : {
          eyebrow: 'Stack',
          title: 'Modern, fast, maintainable – production-first',
          subtitle:
            'Stack is a means to an end. What matters: clean data model, security, performance, tests and ops.',
          items: [
            {
              title: 'Frontend',
              text: 'UI/UX, navigation, state, tables, forms – performant and consistent.',
              bullets: ['React/Next.js', 'Design system', 'Tables & forms', 'Accessibility'],
            },
            {
              title: 'Backend & APIs',
              text: 'Stable endpoints, routes/actions, background jobs and robust error handling.',
              bullets: ['API design', 'Idempotency', 'Queues/jobs', 'Webhooks'],
            },
            {
              title: 'Database',
              text: 'Schema, constraints, indexes, RLS/policies, migrations – the foundation.',
              bullets: ['Postgres', 'RLS', 'Migrations', 'Indexes'],
            },
            {
              title: 'Auth & security',
              text: 'Login, optional 2FA, roles, tenants, safe uploads, abuse protection.',
              bullets: ['RBAC', 'RLS', 'Rate limits', 'Secure uploads'],
            },
            {
              title: 'Payments & billing',
              text: 'Checkout, plans, billing logic, webhooks, trials – clean and testable.',
              bullets: ['Subscriptions', 'Webhooks', 'Invoices', 'Trials'],
            },
            {
              title: 'Ops & observability',
              text: 'Deployments, monitoring, logs, alerts, performance – stable production.',
              bullets: ['Monitoring', 'Error tracking', 'Perf KPIs', 'Rollbacks'],
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

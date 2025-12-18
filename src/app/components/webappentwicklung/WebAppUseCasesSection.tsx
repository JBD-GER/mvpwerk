// src/app/components/webappentwicklung/WebAppUseCasesSection.tsx
import { GlassCard, Lang, SectionShell } from './_ui'

type UseCase = { title: string; text: string; bullets: string[] }

export default function WebAppUseCasesSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Use Cases',
          title: 'Typische Web App Lösungen (B2B)',
          subtitle:
            'Web Apps lohnen sich besonders, wenn Prozesse, Daten und Zusammenarbeit in einem System zusammenkommen.',
          items: [
            {
              title: 'Admin-Dashboards & Backoffice',
              text: 'Listen/Details, Filter, Status, Exporte, Audit Logs – für Klarheit und Geschwindigkeit.',
              bullets: ['Suche & Filter', 'Status-Workflows', 'Exports', 'Audit', 'Rollen'],
            },
            {
              title: 'SaaS Produkte (Abo)',
              text: 'Subscription, Checkout, Mandantenfähigkeit, Feature Flags und Billing-Workflows.',
              bullets: ['Checkout', 'Webhooks', 'Plans', 'RLS', 'Feature Flags'],
            },
            {
              title: 'Kundenportale',
              text: 'Dokumente, Status, Kommunikation, Self-Service – mit sauberer Rechte-Logik.',
              bullets: ['Self-Service', 'Uploads', 'Notifications', 'Support', 'Permissions'],
            },
            {
              title: 'Workflow-Tools',
              text: 'Aufgaben, Prozesse, Freigaben, Automationen – damit Teams weniger koordinieren müssen.',
              bullets: ['Approvals', 'Automations', 'Queues', 'Audit', 'Reports'],
            },
            {
              title: 'Marktplätze & Plattformen',
              text: 'Profile, Matching, Transaktionen, Reviews – mit Vertrauen und Betrugsprävention.',
              bullets: ['Profiles', 'Matching', 'Payments', 'Trust', 'Moderation'],
            },
            {
              title: 'Reporting & Ops',
              text: 'KPIs, Reports, Exporte, BI-Ready Daten – ohne Excel-Hölle.',
              bullets: ['KPIs', 'Exports', 'Dashboards', 'Roles', 'Data Quality'],
            },
          ] as UseCase[],
        }
      : {
          eyebrow: 'Use cases',
          title: 'Typical B2B web app solutions',
          subtitle:
            'Web apps pay off when workflows, data and collaboration are unified in one system.',
          items: [
            {
              title: 'Admin dashboards & backoffice',
              text: 'Lists/details, filters, states, exports, audit logs – for clarity and speed.',
              bullets: ['Search & filters', 'State workflows', 'Exports', 'Audit', 'Roles'],
            },
            {
              title: 'SaaS products (subscription)',
              text: 'Subscriptions, checkout, multi-tenancy, feature flags and billing flows.',
              bullets: ['Checkout', 'Webhooks', 'Plans', 'RLS', 'Feature flags'],
            },
            {
              title: 'Customer portals',
              text: 'Docs, status, communication, self-service – with clean permission logic.',
              bullets: ['Self-service', 'Uploads', 'Notifications', 'Support', 'Permissions'],
            },
            {
              title: 'Workflow tools',
              text: 'Tasks, processes, approvals, automations – so teams coordinate less.',
              bullets: ['Approvals', 'Automations', 'Queues', 'Audit', 'Reports'],
            },
            {
              title: 'Marketplaces & platforms',
              text: 'Profiles, matching, transactions, reviews – with trust and fraud protection.',
              bullets: ['Profiles', 'Matching', 'Payments', 'Trust', 'Moderation'],
            },
            {
              title: 'Reporting & ops',
              text: 'KPIs, reports, exports, BI-ready data – without spreadsheet pain.',
              bullets: ['KPIs', 'Exports', 'Dashboards', 'Roles', 'Data quality'],
            },
          ] as UseCase[],
        }

  return (
    <SectionShell id="usecases" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle}>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {t.items.map((u) => (
          <GlassCard key={u.title} className="p-6">
            <div className="text-base font-medium text-slate-900">{u.title}</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{u.text}</p>
            <ul className="mt-4 grid gap-2 text-sm text-slate-700">
              {u.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full border border-white/60 bg-white/70 text-[11px] shadow-sm">
                    ✓
                  </span>
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
    </SectionShell>
  )
}

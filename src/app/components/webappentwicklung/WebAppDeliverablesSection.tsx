// src/app/components/webappentwicklung/WebAppDeliverablesSection.tsx
import { GlassCard, Lang, SectionShell } from './_ui'

type Deliverable = { title: string; text: string; tags: string[] }

export default function WebAppDeliverablesSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Deliverables',
          title: 'Was Sie am Ende wirklich bekommen',
          subtitle:
            'Nicht nur Screens – sondern ein System, das sicher läuft, wartbar bleibt und mitwachsen kann.',
          items: [
            {
              title: 'Produktionsreife App',
              text: 'Responsive UI, saubere Navigation, Formulare, Tabellen, Status-Workflows – konsistent umgesetzt.',
              tags: ['UI/UX', 'Workflows', 'Responsive', 'State'],
            },
            {
              title: 'Datenmodell & RLS',
              text: 'Postgres Schema, Constraints, Indizes, Mandantenfähigkeit/Rollen – echte Security.',
              tags: ['Postgres', 'RLS', 'Tenants', 'Indexes'],
            },
            {
              title: 'APIs & Integrationen',
              text: 'Stabile Endpoints, Webhooks, Integrationen (E-Mail, Tools, Payments, CRM).',
              tags: ['API', 'Webhooks', 'Integrations', 'Events'],
            },
            {
              title: 'Auth & Account Flows',
              text: 'Registrierung, Login, Passwort-Reset, Profil/Einstellungen, optional 2FA.',
              tags: ['Auth', 'Security', 'Account', '2FA optional'],
            },
            {
              title: 'Ops Setup',
              text: 'Deployments, Logs, Monitoring, Alerts, Backups – plus Rollback-Strategie.',
              tags: ['Monitoring', 'Backups', 'Alerts', 'Rollbacks'],
            },
            {
              title: 'Doku & Übergabe',
              text: 'Architektur-Notizen, Env Setup, Migrations, Runbook – damit Team/Dev weiterarbeiten kann.',
              tags: ['Docs', 'Runbook', 'Migrations', 'Handover'],
            },
          ] as Deliverable[],
        }
      : {
          eyebrow: 'Deliverables',
          title: 'What you actually get',
          subtitle:
            'Not just screens – a system that runs safely, stays maintainable and can grow.',
          items: [
            {
              title: 'Production-ready app',
              text: 'Responsive UI, clean navigation, forms, tables, state workflows – consistent implementation.',
              tags: ['UI/UX', 'Workflows', 'Responsive', 'State'],
            },
            {
              title: 'Data model & RLS',
              text: 'Postgres schema, constraints, indexes, multi-tenancy/roles – real security.',
              tags: ['Postgres', 'RLS', 'Tenants', 'Indexes'],
            },
            {
              title: 'APIs & integrations',
              text: 'Stable endpoints, webhooks, integrations (email, tools, payments, CRM).',
              tags: ['API', 'Webhooks', 'Integrations', 'Events'],
            },
            {
              title: 'Auth & account flows',
              text: 'Signup, login, password reset, profile/settings, optional 2FA.',
              tags: ['Auth', 'Security', 'Account', '2FA optional'],
            },
            {
              title: 'Ops setup',
              text: 'Deployments, logs, monitoring, alerts, backups – plus rollback strategy.',
              tags: ['Monitoring', 'Backups', 'Alerts', 'Rollbacks'],
            },
            {
              title: 'Docs & handover',
              text: 'Architecture notes, env setup, migrations, runbooks – for long-term progress.',
              tags: ['Docs', 'Runbook', 'Migrations', 'Handover'],
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

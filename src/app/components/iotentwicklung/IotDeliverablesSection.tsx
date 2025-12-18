// src/app/components/iotentwicklung/IotDeliverablesSection.tsx
import { GlassCard, Lang, SectionShell } from './_ui'

type Deliverable = { title: string; text: string; tags: string[] }

export default function IotDeliverablesSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Deliverables',
          title: 'Was Sie am Ende wirklich in der Hand haben',
          subtitle:
            'Nicht nur „Daten kommen an“, sondern eine Plattform, die Geräte verwaltet, sicher skaliert und operativ betreibbar ist.',
          items: [
            {
              title: 'Device Registry & Provisioning Flow',
              text: 'Geräte anlegen, zuweisen, initial konfigurieren – inklusive Rollen/Teams/Mandanten.',
              tags: ['Provisioning', 'Fleet', 'RBAC/RLS', 'Lifecycle'],
            },
            {
              title: 'Ingestion & Telemetry Pipeline',
              text: 'MQTT/HTTP Ingestion, Validierung, Normalisierung, Speicherung (Time-Series/Events).',
              tags: ['MQTT', 'Validation', 'Time-Series', 'Events'],
            },
            {
              title: 'State Model & Health Monitoring',
              text: 'Online-Status, Heartbeats, Fehlercodes, Firmwarestände, Rollout-Status.',
              tags: ['Health', 'Heartbeats', 'States', 'Fleet View'],
            },
            {
              title: 'Dashboards, Alerts & Reporting',
              text: 'Rollenbasierte Dashboards, Grenzwerte, Eskalation, Exporte und Reports.',
              tags: ['Dashboards', 'Alerts', 'Reports', 'Exports'],
            },
            {
              title: 'OTA Updates & Remote Config',
              text: 'Staged Rollouts, Canary, Rollback-Plan – inkl. Audit Trail.',
              tags: ['OTA', 'Rollout', 'Rollback', 'Audit'],
            },
            {
              title: 'Security & Operations',
              text: 'Policies, Device Identity, Logging-Policy, Observability, Runbooks.',
              tags: ['Security', 'Tracing', 'Policies', 'Runbooks'],
            },
          ] as Deliverable[],
        }
      : {
          eyebrow: 'Deliverables',
          title: 'What you actually get at the end',
          subtitle:
            'Not just “data arrives”, but a platform that manages devices, scales securely and is operable in real life.',
          items: [
            {
              title: 'Device registry & provisioning flow',
              text: 'Create, assign and configure devices – including roles/teams/tenants.',
              tags: ['Provisioning', 'Fleet', 'RBAC/RLS', 'Lifecycle'],
            },
            {
              title: 'Ingestion & telemetry pipeline',
              text: 'MQTT/HTTP ingestion, validation, normalization, storage (time-series/events).',
              tags: ['MQTT', 'Validation', 'Time-Series', 'Events'],
            },
            {
              title: 'State model & health monitoring',
              text: 'Online status, heartbeats, error codes, firmware versions, rollout status.',
              tags: ['Health', 'Heartbeats', 'States', 'Fleet View'],
            },
            {
              title: 'Dashboards, alerts & reporting',
              text: 'Role-based dashboards, thresholds, escalation, exports and reports.',
              tags: ['Dashboards', 'Alerts', 'Reports', 'Exports'],
            },
            {
              title: 'OTA updates & remote config',
              text: 'Staged rollouts, canary, rollback plan – including audit trail.',
              tags: ['OTA', 'Rollout', 'Rollback', 'Audit'],
            },
            {
              title: 'Security & operations',
              text: 'Policies, device identity, logging policy, observability, runbooks.',
              tags: ['Security', 'Tracing', 'Policies', 'Runbooks'],
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

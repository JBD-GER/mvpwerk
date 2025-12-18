// src/app/components/iotentwicklung/IotStackSection.tsx
import { GlassCard, Lang, SectionShell } from './_ui'

type StackItem = { title: string; text: string; bullets: string[] }

export default function IotStackSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Tech Stack',
          title: 'Device → Ingestion → Processing → Storage → Dashboard',
          subtitle:
            'Wir wählen den Stack nach Einsatz (Netz, Datenmenge, SLA, Security). Wichtig: klare Schnittstellen, Monitoring und ein sauberes Datenmodell.',
          items: [
            {
              title: 'Connectivity & Protocols',
              text: 'MQTT/HTTP/WebSockets – inkl. QoS/Retain/Session, Offline-Strategien und Payload-Design.',
              bullets: ['QoS-Strategie', 'Dedup/Retry', 'Payload Schema', 'Rate-Limits'],
            },
            {
              title: 'Device Management',
              text: 'Provisioning, Zertifikate/Keys, Konfig-Profile, Gruppen, OTA Rollouts.',
              bullets: ['Identity', 'Rotation', 'Rollout', 'Rollback'],
            },
            {
              title: 'Ingestion & Processing',
              text: 'Validierung, Normalisierung, Eventing, Enrichment, Backpressure/Queues.',
              bullets: ['Schema Validation', 'Queues', 'Partitioning', 'Idempotenz'],
            },
            {
              title: 'Storage',
              text: 'Time-Series + Events + Statusmodelle – mit Retention, Aggregation und Downsampling.',
              bullets: ['Retention', 'Downsampling', 'Indexing', 'Exports'],
            },
            {
              title: 'Dashboards & Alerts',
              text: 'Rollenbasierte Views, Grenzwerte, Eskalationen, Reports, Integrationen.',
              bullets: ['RBAC/RLS', 'Thresholds', 'Anomalies', 'Reports'],
            },
            {
              title: 'Security & Observability',
              text: 'Policies, Audit, Tracing, Error-Rates, Latency, SLO/SLAs.',
              bullets: ['Audit Trail', 'Tracing', 'Alerts', 'Runbooks'],
            },
          ] as StackItem[],
        }
      : {
          eyebrow: 'Stack',
          title: 'Device → Ingestion → Processing → Storage → Dashboard',
          subtitle:
            'We pick the stack based on your environment (network, volume, SLA, security). What matters: clean interfaces, monitoring and solid data models.',
          items: [
            {
              title: 'Connectivity & protocols',
              text: 'MQTT/HTTP/WebSockets with QoS/retain/session, offline strategies and payload design.',
              bullets: ['QoS strategy', 'Dedup/retry', 'Payload schema', 'Rate limits'],
            },
            {
              title: 'Device management',
              text: 'Provisioning, certs/keys, config profiles, groups, OTA rollouts.',
              bullets: ['Identity', 'Rotation', 'Rollout', 'Rollback'],
            },
            {
              title: 'Ingestion & processing',
              text: 'Validation, normalization, eventing, enrichment, backpressure/queues.',
              bullets: ['Schema validation', 'Queues', 'Partitioning', 'Idempotency'],
            },
            {
              title: 'Storage',
              text: 'Time-series + events + state models with retention, aggregation and downsampling.',
              bullets: ['Retention', 'Downsampling', 'Indexing', 'Exports'],
            },
            {
              title: 'Dashboards & alerts',
              text: 'Role-based views, thresholds, escalations, reports and integrations.',
              bullets: ['RBAC/RLS', 'Thresholds', 'Anomalies', 'Reports'],
            },
            {
              title: 'Security & observability',
              text: 'Policies, audit, tracing, error rates, latency, SLO/SLAs.',
              bullets: ['Audit trail', 'Tracing', 'Alerts', 'Runbooks'],
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

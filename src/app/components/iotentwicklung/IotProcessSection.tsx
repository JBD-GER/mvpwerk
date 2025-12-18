// src/app/components/iotentwicklung/IotProcessSection.tsx
import { GlassCard, Lang, SectionShell } from './_ui'

type Phase = { title: string; text: string; bullets: string[] }

export default function IotProcessSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Ablauf',
          title: 'Vom Pilot zur Flotte: ein klarer IoT-Workflow',
          subtitle:
            'Wir starten mit messbaren Zielen und einem sauberen Lifecycle – dann skalieren wir Schritt für Schritt in Produktion.',
          phases: [
            {
              title: 'Phase 1: Discovery & Architektur',
              text: 'Use-Case, KPIs, Netz/Protokoll, Device Lifecycle, Security, Datenmodell.',
              bullets: ['KPI-Definition', 'Topic/Schema Design', 'Lifecycle', 'Security Plan'],
            },
            {
              title: 'Phase 2: Pilot (End-to-End)',
              text: 'Device → Ingestion → Storage → Dashboard, erste Alerts, erste Integrationen.',
              bullets: ['Ingestion', 'Dashboards', 'Alerts v1', 'Exports/API'],
            },
            {
              title: 'Phase 3: Hardening & Skalierung',
              text: 'Rate-Limits, Backpressure, Runbooks, Observability, Rollouts/OTA.',
              bullets: ['Queues', 'Tracing', 'Incident Playbooks', 'OTA Plan'],
            },
            {
              title: 'Phase 4: Rollout & Betrieb',
              text: 'Flottenrollout, Monitoring, A/B/Canary, kontinuierliche Optimierung.',
              bullets: ['Canary', 'SLOs', 'Eskalationen', 'Roadmap'],
            },
          ] as Phase[],
        }
      : {
          eyebrow: 'Process',
          title: 'From pilot to fleet: a clear IoT workflow',
          subtitle:
            'We start with measurable goals and a clean lifecycle – then scale step by step into production.',
          phases: [
            {
              title: 'Phase 1: Discovery & architecture',
              text: 'Use case, KPIs, network/protocol, device lifecycle, security, data model.',
              bullets: ['KPIs', 'Topic/schema design', 'Lifecycle', 'Security plan'],
            },
            {
              title: 'Phase 2: Pilot (end-to-end)',
              text: 'Device → ingestion → storage → dashboard, first alerts, first integrations.',
              bullets: ['Ingestion', 'Dashboards', 'Alerts v1', 'Exports/API'],
            },
            {
              title: 'Phase 3: Hardening & scaling',
              text: 'Rate limits, backpressure, runbooks, observability, rollouts/OTA.',
              bullets: ['Queues', 'Tracing', 'Incident playbooks', 'OTA plan'],
            },
            {
              title: 'Phase 4: Rollout & operations',
              text: 'Fleet rollout, monitoring, A/B/canary, continuous optimization.',
              bullets: ['Canary', 'SLOs', 'Escalations', 'Roadmap'],
            },
          ] as Phase[],
        }

  return (
    <SectionShell id="prozess" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle}>
      <div className="grid gap-4 md:grid-cols-2">
        {t.phases.map((p) => (
          <GlassCard key={p.title} className="p-6">
            <div className="text-base font-medium text-slate-900">{p.title}</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.text}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.bullets.map((b) => (
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
    </SectionShell>
  )
}

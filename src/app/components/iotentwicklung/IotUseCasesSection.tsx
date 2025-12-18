// src/app/components/iotentwicklung/IotUseCasesSection.tsx
import { GlassCard, Lang, SectionShell } from './_ui'

type UseCase = { title: string; text: string; bullets: string[] }

export default function IotUseCasesSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Use Cases',
          title: 'Typische IoT-Lösungen, die sich wirklich rechnen',
          subtitle:
            'IoT lohnt sich besonders, wenn Daten direkt in Wartung, Service, Qualität oder Abrechnung einfließen.',
          items: [
            {
              title: 'Predictive Maintenance',
              text: 'Zustandsdaten → Wartungsfenster planen, Ausfälle vermeiden, Ersatzteile rechtzeitig disponieren.',
              bullets: ['Downtime reduzieren', 'Wartung planbar', 'SLA stabiler', 'Weniger Notfälle'],
            },
            {
              title: 'Fleet Monitoring & Health',
              text: 'Online-Status, Heartbeats, Fehlercodes, Firmwarestände, Rollout-Status – in einer Flottenansicht.',
              bullets: ['Schnelleres Troubleshooting', 'Rollouts kontrolliert', 'Alerts & Eskalation', 'Audit Trail'],
            },
            {
              title: 'Quality & Production Telemetry',
              text: 'Messwerte und Events aus Produktionsanlagen – inkl. Grenzwerten, Reports und Ursachenanalyse.',
              bullets: ['Qualität sichern', 'Traceability', 'Anomalien erkennen', 'Reports automatisieren'],
            },
            {
              title: 'Smart Metering / Consumption',
              text: 'Verbrauch messen, aggregieren, abrechnen – mit Retention, Downsampling und Export.',
              bullets: ['Abrechnungssicherheit', 'Anomalien/Leaks', 'Kosten senken', 'Exports/BI'],
            },
            {
              title: 'Cold Chain / Environment',
              text: 'Temperatur/Luftfeuchte/Schocks – Alarmierung bei Abweichungen und Nachweisführung.',
              bullets: ['Compliance', 'Echtzeit-Alarme', 'Beweiskette', 'Weniger Ausschuss'],
            },
            {
              title: 'Remote Config & OTA',
              text: 'Konfigurationen ausrollen, Feature Flags, Firmware Updates – inkl. Canary und Rollback.',
              bullets: ['Schnelle Verbesserungen', 'Weniger Vor-Ort', 'Risiko senken', 'Versioniert & auditierbar'],
            },
          ] as UseCase[],
        }
      : {
          eyebrow: 'Use cases',
          title: 'IoT solutions that generate real ROI',
          subtitle:
            'IoT shines when data flows into maintenance, service, quality or billing.',
          items: [
            {
              title: 'Predictive maintenance',
              text: 'Condition data → plan service windows, reduce outages, procure parts early.',
              bullets: ['Less downtime', 'Plannable maintenance', 'Stronger SLAs', 'Fewer emergencies'],
            },
            {
              title: 'Fleet monitoring & health',
              text: 'Online status, heartbeats, error codes, firmware versions, rollout status – in one fleet view.',
              bullets: ['Faster troubleshooting', 'Controlled rollouts', 'Alerts & escalation', 'Audit trail'],
            },
            {
              title: 'Quality & production telemetry',
              text: 'Metrics and events from production systems – thresholds, reports and root-cause insights.',
              bullets: ['Better quality', 'Traceability', 'Anomaly detection', 'Automated reporting'],
            },
            {
              title: 'Smart metering / consumption',
              text: 'Measure, aggregate, bill – with retention, downsampling and exports.',
              bullets: ['Billing accuracy', 'Detect leaks', 'Cost reduction', 'Exports/BI'],
            },
            {
              title: 'Cold chain / environment',
              text: 'Temperature/humidity/shock monitoring – alerts + evidence for compliance.',
              bullets: ['Compliance', 'Real-time alerts', 'Evidence chain', 'Less waste'],
            },
            {
              title: 'Remote config & OTA',
              text: 'Roll out configs, feature flags, firmware updates – with canary and rollback.',
              bullets: ['Faster improvements', 'Fewer site visits', 'Lower risk', 'Versioned & auditable'],
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

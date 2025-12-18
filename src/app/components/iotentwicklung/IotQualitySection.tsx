// src/app/components/iotentwicklung/IotQualitySection.tsx
import { CheckList, GlassCard, Lang, SectionShell } from './_ui'

export default function IotQualitySection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Qualität & Sicherheit',
          title: 'Betriebssicherheit: das „unsichtbare“ Herz von IoT',
          subtitle:
            'Wenn Geräte im Feld stehen, zählen Stabilität, Updates, Security und ein guter Incident-Flow.',
          leftTitle: 'Reliability & Betrieb',
          left: [
            'Monitoring: Heartbeats, Latenz, Fehlerraten, Device Storm Detection',
            'Alerting: Eskalation, Ruhezeiten, dedizierte Runbooks',
            'Backpressure/Queues: kontrollierte Last statt Ausfall',
            'SLOs/SLAs: messbar und transparent',
          ],
          rightTitle: 'Security & Governance',
          right: [
            'Device Identity: Zertifikate/Keys, Rotation, Revocation',
            'Policies: Topic/API Allowlist pro Gerät/Gruppe',
            'Audit Trail: Konfig, Zuordnung, Updates, Rollouts',
            'Logging/Retention: Datenminimierung & saubere Aufbewahrung',
          ],
        }
      : {
          eyebrow: 'Quality & safety',
          title: 'Operational reliability: the “invisible” heart of IoT',
          subtitle:
            'Once devices are deployed, stability, updates, security and incident response become everything.',
          leftTitle: 'Reliability & operations',
          left: [
            'Monitoring: heartbeats, latency, error rates, device storm detection',
            'Alerting: escalation, quiet hours, runbooks',
            'Backpressure/queues: controlled load instead of outages',
            'SLOs/SLAs: measurable and transparent',
          ],
          rightTitle: 'Security & governance',
          right: [
            'Device identity: certs/keys, rotation, revocation',
            'Policies: topic/API allowlist per device/group',
            'Audit trail: config, assignments, updates, rollouts',
            'Logging/retention: data minimization and clean retention',
          ],
        }

  return (
    <SectionShell id="quality" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle}>
      <div className="grid gap-4 md:grid-cols-2">
        <GlassCard className="p-6">
          <div className="text-base font-medium text-slate-900">{t.leftTitle}</div>
          <div className="mt-4">
            <CheckList items={t.left} />
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="text-base font-medium text-slate-900">{t.rightTitle}</div>
          <div className="mt-4">
            <CheckList items={t.right} />
          </div>
        </GlassCard>
      </div>
    </SectionShell>
  )
}

// src/app/components/cloudentwicklung/CloudQualitySection.tsx
import { CheckList, GlassCard, Lang, Section, Split } from './_ui'

export default function CloudQualitySection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Qualität',
          title: 'Reliability, Security, Kosten: die Cloud-„Dreifaltigkeit“',
          subtitle:
            'Cloud ist dann stark, wenn Betrieb messbar ist. Wir definieren Standards so, dass Sie stabil liefern — ohne Kosten-Explosion.',
          leftTitle: 'Reliability & Betrieb',
          left: [
            'SLOs + Dashboards für Error Rate / Latency / Throughput',
            'Alerting mit Ownership (keine „Alarm-Müllhalde“)',
            'Runbooks für typische Incidents',
            'Rollback- & Recovery-Prozesse',
          ],
          rightTitle: 'Security & FinOps',
          right: [
            'Secrets Management + Rotation',
            'Policies & least privilege',
            'Auditierbarkeit (wer ändert was?)',
            'Budgets/Tags/Reports – Kosten erklärbar',
          ],
        }
      : {
          eyebrow: 'Quality',
          title: 'Reliability, security, costs: the cloud triad',
          subtitle:
            'Cloud is strong when operations are measurable. We implement standards so you ship reliably without cost explosions.',
          leftTitle: 'Reliability & ops',
          left: [
            'SLOs + dashboards for error rate / latency / throughput',
            'Alerting with ownership (no alert junkyard)',
            'Runbooks for typical incidents',
            'Rollback & recovery processes',
          ],
          rightTitle: 'Security & FinOps',
          right: [
            'Secrets management + rotation',
            'Policies & least privilege',
            'Auditability (who changed what?)',
            'Budgets/tags/reports – explainable costs',
          ],
        }

  return (
    <Section id="quality" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} tone="alt">
      <Split
        left={
          <GlassCard className="p-6">
            <div className="text-base font-medium text-slate-900">{t.leftTitle}</div>
            <div className="mt-4">
              <CheckList items={t.left} />
            </div>
          </GlassCard>
        }
        right={
          <GlassCard className="p-6">
            <div className="text-base font-medium text-slate-900">{t.rightTitle}</div>
            <div className="mt-4">
              <CheckList items={t.right} />
            </div>
          </GlassCard>
        }
      />
    </Section>
  )
}

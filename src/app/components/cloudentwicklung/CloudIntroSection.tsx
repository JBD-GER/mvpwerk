// src/app/components/cloudentwicklung/CloudIntroSection.tsx
import { GlassCard, Lang, Section, Split, CheckList } from './_ui'

export default function CloudIntroSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Worum es geht',
          title: 'Cloud ist Betrieb: Standards, Sichtbarkeit, Sicherheit.',
          subtitle:
            'Ein „Deployment, das irgendwie klappt“ reicht nicht. Cloud wird dann wertvoll, wenn Releases, Monitoring, Security und Kosten planbar sind — und Ihr Team damit arbeiten kann.',
          leftTitle: 'Typische Symptome (wenn Cloud „nur irgendwie“ ist)',
          left: [
            'Deployments sind riskant, weil Rollback/Migrations unklar sind',
            'Fehler werden spät erkannt (keine Alerts, keine SLOs)',
            'Kosten steigen ohne Erklärung (fehlende Budgets/Tags)',
            'Security ist „gefühlt“, aber nicht auditierbar',
          ],
          rightTitle: 'Unser Zielbild',
          right: [
            'Release-Prozess mit Staging/Prod + klaren Rollbacks',
            'Observability: Logs/Metrics/Tracing + Alerting',
            'Security-Basics: Secrets, Policies, Hardening',
            'Kostenkontrolle: Budgets, Limits, Optimierung',
          ],
        }
      : {
          eyebrow: 'What it’s about',
          title: 'Cloud is operations: standards, visibility, security.',
          subtitle:
            'A deployment that “somehow works” is not enough. Cloud becomes valuable when releases, monitoring, security and costs are predictable and operable by your team.',
          leftTitle: 'Typical symptoms',
          left: [
            'Deployments feel risky (unclear rollback/migrations)',
            'Issues are detected late (no alerts, no SLOs)',
            'Costs grow without clarity (missing budgets/tags)',
            'Security is “assumed” but not auditable',
          ],
          rightTitle: 'Target outcome',
          right: [
            'Release process with staging/prod + clear rollbacks',
            'Observability: logs/metrics/tracing + alerting',
            'Security basics: secrets, policies, hardening',
            'Cost control: budgets, limits, optimization',
          ],
        }

  return (
    <Section eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} tone="alt">
      <Split
        left={
          <div>
            <h3 className="text-lg font-medium text-slate-900">{t.leftTitle}</h3>
            <div className="mt-4">
              <CheckList items={t.left} />
            </div>
          </div>
        }
        right={
          <GlassCard className="p-6">
            <div className="text-sm font-medium text-slate-900">{t.rightTitle}</div>
            <div className="mt-4">
              <CheckList items={t.right} />
            </div>
          </GlassCard>
        }
      />
    </Section>
  )
}

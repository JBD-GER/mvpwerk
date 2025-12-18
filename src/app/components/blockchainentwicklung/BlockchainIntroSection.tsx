// src/app/components/blockchainentwicklung/BlockchainIntroSection.tsx
import { GlassCard, Lang, Section, Split, CheckList } from './_ui'

export default function BlockchainIntroSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Worum es geht',
          title: 'On-Chain ist nur ein Teil – der Rest ist Plattform.',
          subtitle:
            'Erfolgreiche Blockchain-Lösungen bestehen aus Smart Contracts UND aus Off-Chain Services: APIs, Indexing, Permissions, Wallet-Flows, Monitoring und sichere Betriebsprozesse.',
          leftTitle: 'Typische Fallstricke',
          left: [
            'Unklare Invarianten/Regeln (führt zu teuren Contract-Fixes)',
            'Keine Upgrade-/Migration-Strategie',
            'Wallet/Key-Prozesse sind unklar oder unsicher',
            'On-Chain/Off-Chain Events sind nicht sauber synchronisiert',
          ],
          rightTitle: 'Unser Fokus',
          right: [
            'Klare Regeln: State Model + Events + Permissions',
            'Testbarkeit: lokale Forks, Simulationen, Edge Cases',
            'Security: Reviews, Threat Model, Audit-Readiness',
            'Betrieb: Monitoring, Alerts, Incident Flow, Runbooks',
          ],
        }
      : {
          eyebrow: 'What it’s about',
          title: 'On-chain is only a part — the rest is a platform.',
          subtitle:
            'Successful blockchain solutions combine smart contracts AND off-chain services: APIs, indexing, permissions, wallet flows, monitoring and secure operational processes.',
          leftTitle: 'Common pitfalls',
          left: [
            'Unclear rules/invariants (leads to expensive fixes)',
            'No upgrade/migration strategy',
            'Wallet/key processes are unclear or unsafe',
            'On-chain/off-chain events not synchronized properly',
          ],
          rightTitle: 'Our focus',
          right: [
            'Clear rules: state model + events + permissions',
            'Testability: local forks, simulations, edge cases',
            'Security: reviews, threat model, audit readiness',
            'Operations: monitoring, alerts, incident flow, runbooks',
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

// src/app/components/blockchainentwicklung/BlockchainRequirementsSection.tsx
import { GlassCard, Lang, Section, CheckList, Split } from './_ui'

type Group = { title: string; subtitle: string; items: string[] }

export default function BlockchainRequirementsSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Anforderungen',
          title: 'Die 7 Zielbereiche für produktionsreife Blockchain-Software',
          subtitle:
            'Blockchain ist „irreversibel“. Deshalb zählen Regeln, Security und Betrieb mehr als Geschwindigkeit beim Prototyp.',
          summaryTitle: 'Wenn Sie nur 4 Dinge klären:',
          summary: [
            'Was ist On-Chain vs. Off-Chain (und warum)?',
            'Welche Invarianten/Regeln dürfen nie verletzt werden?',
            'Wie werden Keys/Wallets sicher betrieben (Custody/Non-custody)?',
            'Wie läuft Upgrade, Incident & Monitoring in Produktion?',
          ],
          groups: [
            {
              title: '1) Use-Case & On-Chain Entscheidung',
              subtitle: 'Wofür ist Blockchain wirklich nötig?',
              items: [
                'Trust Boundary: wer muss wem nicht vertrauen?',
                'Unveränderlichkeit vs. Kosten/Komplexität',
                'On-chain State minimal halten (nur was nötig ist)',
                'Compliance/Regulatorik früh berücksichtigen (je nach Case)',
              ],
            },
            {
              title: '2) Smart Contract Design',
              subtitle: 'Regeln sauber modellieren.',
              items: [
                'State Model (Zustände/Transitions) + Events',
                'Permissions: Rollen, Owner, Allowances',
                'Upgrade-/Migration-Strategie (Proxy/Versioning)',
                'Gas/Fees & Failure Modes',
              ],
            },
            {
              title: '3) Security by Design',
              subtitle: 'Vor Audit: intern sauber.',
              items: [
                'Threat Modeling + Attack Surfaces',
                'Code Reviews, Static Analysis, Linting',
                'Tests: Unit, Integration, Property/Fuzz (wo sinnvoll)',
                'Audit-Readiness: klare Specs, invariants, docs',
              ],
            },
            {
              title: '4) Off-Chain Plattform & APIs',
              subtitle: 'Damit Nutzer wirklich damit arbeiten können.',
              items: [
                'Backend APIs, Jobs/Queues, Idempotenz',
                'Indexing & Event Processing',
                'Permission Layer (App/Org/Users) + Logs',
                'Monitoring/Rate limits/Abuse-Schutz',
              ],
            },
            {
              title: '5) Wallets, Keys & Signaturen',
              subtitle: 'Der echte „Betriebskern“.',
              items: [
                'Custody vs Non-custody (Risiko/UX)',
                'Key Rotation, Recovery, Multi-Sig (je nach Bedarf)',
                'Sign-Flow: wer signiert was wann?',
                'Secure storage & Zugriffskontrollen',
              ],
            },
            {
              title: '6) Integrationen & Fiat/Payments',
              subtitle: 'Realität: Systeme müssen zusammen.',
              items: [
                'Fiat On/Off-Ramps (falls relevant)',
                'KYC/AML-Integration (falls relevant)',
                'ERP/CRM/Identity Integrationen',
                'Webhook-Events sauber verarbeiten',
              ],
            },
            {
              title: '7) Betrieb, Monitoring & Incident Flow',
              subtitle: 'Produktion muss steuerbar sein.',
              items: [
                'Monitoring: Tx fail rate, confirmations, reorg handling',
                'Alerting + Runbooks',
                'Upgrade-Prozess: Versionen, Migrations, Rollback-Plan',
                'Postmortems & Verbesserungsloop',
              ],
            },
          ] as Group[],
        }
      : {
          eyebrow: 'Requirements',
          title: 'The 7 goal areas for production-grade blockchain software',
          subtitle:
            'Blockchain is irreversible. That’s why rules, security and operations matter more than prototype speed.',
          summaryTitle: 'If you only clarify 4 things:',
          summary: [
            'What is on-chain vs off-chain (and why)?',
            'Which invariants/rules must never be broken?',
            'How are keys/wallets operated safely (custody/non-custody)?',
            'How do upgrades, incidents and monitoring work in production?',
          ],
          groups: [
            {
              title: '1) Use case & on-chain decision',
              subtitle: 'When is blockchain truly needed?',
              items: [
                'Trust boundary: who must not trust whom?',
                'Immutability vs cost/complexity',
                'Keep on-chain state minimal',
                'Consider compliance early (depending on case)',
              ],
            },
            {
              title: '2) Smart contract design',
              subtitle: 'Model rules cleanly.',
              items: [
                'State model + events',
                'Permissions: roles, owner, allowances',
                'Upgrade/migration strategy (proxy/versioning)',
                'Gas/fees & failure modes',
              ],
            },
            {
              title: '3) Security by design',
              subtitle: 'Be audit-ready internally first.',
              items: [
                'Threat modeling + attack surfaces',
                'Code reviews, static analysis, linting',
                'Tests: unit, integration, property/fuzz where useful',
                'Audit readiness: specs, invariants, docs',
              ],
            },
            {
              title: '4) Off-chain platform & APIs',
              subtitle: 'So users can actually operate it.',
              items: [
                'Backend APIs, jobs/queues, idempotency',
                'Indexing & event processing',
                'Permission layer + logs',
                'Monitoring/rate limits/abuse protection',
              ],
            },
            {
              title: '5) Wallets, keys & signatures',
              subtitle: 'The operational core.',
              items: [
                'Custody vs non-custody (risk/UX)',
                'Key rotation, recovery, multi-sig if needed',
                'Signing flow: who signs what and when?',
                'Secure storage & access control',
              ],
            },
            {
              title: '6) Integrations & fiat/payments',
              subtitle: 'Reality: systems must connect.',
              items: [
                'Fiat on/off-ramps (if relevant)',
                'KYC/AML integration (if relevant)',
                'ERP/CRM/identity integrations',
                'Process webhook events reliably',
              ],
            },
            {
              title: '7) Operations, monitoring & incident flow',
              subtitle: 'Production must be controllable.',
              items: [
                'Monitoring: tx fail rate, confirmations, reorg handling',
                'Alerting + runbooks',
                'Upgrade process: versions, migrations, rollback plan',
                'Postmortems & improvement loop',
              ],
            },
          ] as Group[],
        }

  return (
    <Section id="anforderungen" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} tone="light">
      <Split
        left={
          <div className="grid gap-4">
            {t.groups.map((g) => (
              <GlassCard key={g.title} className="p-6">
                <div className="text-base font-medium text-slate-900">{g.title}</div>
                <div className="mt-1 text-sm text-slate-600">{g.subtitle}</div>
                <div className="mt-4">
                  <CheckList items={g.items} />
                </div>
              </GlassCard>
            ))}
          </div>
        }
        right={
          <GlassCard className="p-6">
            <div className="text-base font-medium text-slate-900">{t.summaryTitle}</div>
            <div className="mt-4">
              <CheckList items={t.summary} />
            </div>
          </GlassCard>
        }
      />
    </Section>
  )
}

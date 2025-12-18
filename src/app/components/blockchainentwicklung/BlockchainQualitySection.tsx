// src/app/components/blockchainentwicklung/BlockchainQualitySection.tsx
import { CheckList, GlassCard, Lang, Section, Split } from './_ui'

export default function BlockchainQualitySection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Qualität & Security',
          title: 'Sicher, testbar, operierbar: Blockchain muss „Betrieb“ können',
          subtitle:
            'In Produktion zählen: Security, Monitoring, Schlüsselprozesse, und ein Upgrade-Plan. Wir bauen das als Standard ein.',
          leftTitle: 'Security & Testing',
          left: [
            'Threat Model + klare Invarianten',
            'Reviews + Static Analysis',
            'Tests inkl. Edge Cases / Fuzz (wo sinnvoll)',
            'Audit-Readiness: Specs, Docs, Findings-Fixes',
          ],
          rightTitle: 'Ops & Integrationen',
          right: [
            'Monitoring: Tx failures, confirmations, event lags',
            'Reorg-/Retry-Handling im Indexing',
            'Runbooks + Incident Flow',
            'Key/Walet Prozesse: Zugriff, Recovery, Multi-Sig',
          ],
        }
      : {
          eyebrow: 'Quality & security',
          title: 'Secure, testable, operable: blockchain needs real ops',
          subtitle:
            'In production: security, monitoring, key processes and an upgrade plan matter. We build these in as standards.',
          leftTitle: 'Security & testing',
          left: [
            'Threat model + clear invariants',
            'Reviews + static analysis',
            'Tests incl. edge cases / fuzz where useful',
            'Audit readiness: specs, docs, findings & fixes',
          ],
          rightTitle: 'Ops & integrations',
          right: [
            'Monitoring: tx failures, confirmations, event lags',
            'Reorg/retry handling in indexing',
            'Runbooks + incident flow',
            'Key/wallet processes: access, recovery, multi-sig',
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

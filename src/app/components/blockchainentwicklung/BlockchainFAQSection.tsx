// src/app/components/blockchainentwicklung/BlockchainFAQSection.tsx
import { GlassCard, Lang, Section } from './_ui'

type QA = { q: string; a: string }

export default function BlockchainFAQSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'FAQ',
          title: 'Häufige Fragen zur Blockchain Entwicklung',
          subtitle: 'Fokus: B2B, Security, Integrationen und Betrieb.',
          items: [
            {
              q: 'Wann lohnt sich Blockchain wirklich?',
              a: 'Wenn Sie eine echte Trust Boundary haben (Parteien vertrauen sich nicht) oder wenn Nachweis/Programmregeln/Transparenz zentral sind. Sonst ist oft eine normale DB besser.',
            },
            {
              q: 'Brauchen wir ein Token?',
              a: 'Nicht automatisch. Oft reicht ein Smart-Contract-„Registry“-Modell. Tokenisierung sollte einen klaren Nutzen haben (Rechte, Ownership, Settlement).',
            },
            {
              q: 'Wie wichtig ist ein Audit?',
              a: 'Sehr wichtig – aber es ersetzt keine Spezifikation, Invarianten und Tests. Audit ist ein zusätzlicher Sicherheitslayer.',
            },
            {
              q: 'Wie geht ihr mit Upgrades um?',
              a: 'Mit Versionierung/Proxy-Strategie (falls sinnvoll), klarer Migrations-Planung und strikter Release-Disziplin.',
            },
            {
              q: 'Was ist der größte Praxis-Pain?',
              a: 'Wallet/Key-Prozesse, Off-Chain Indexing, Monitoring und Incident Handling. Genau das wird oft unterschätzt.',
            },
            {
              q: 'Wie integriert ihr Web2-Systeme?',
              a: 'Über Off-Chain Services: APIs, event-driven Verarbeitung, Webhooks und saubere Idempotenz/Retry-Logik.',
            },
          ] as QA[],
        }
      : {
          eyebrow: 'FAQ',
          title: 'Common questions about blockchain development',
          subtitle: 'Focus: B2B, security, integrations and operations.',
          items: [
            {
              q: 'When does blockchain really make sense?',
              a: 'When you have a real trust boundary (parties don’t trust each other) or when proof/programmable rules/transparency are essential. Otherwise a database is often better.',
            },
            {
              q: 'Do we need a token?',
              a: 'Not automatically. Often a smart-contract registry model is enough. Tokenization should have a clear purpose (rights, ownership, settlement).',
            },
            {
              q: 'How important is an audit?',
              a: 'Very important — but it doesn’t replace specifications, invariants and tests. It’s an additional security layer.',
            },
            {
              q: 'How do you handle upgrades?',
              a: 'With versioning/proxy strategy (when useful), a clear migration plan, and strict release discipline.',
            },
            {
              q: 'What’s the biggest real-world pain?',
              a: 'Wallet/key processes, off-chain indexing, monitoring and incident handling — often underestimated.',
            },
            {
              q: 'How do you integrate Web2 systems?',
              a: 'Via off-chain services: APIs, event-driven processing, webhooks and solid idempotency/retry logic.',
            },
          ] as QA[],
        }

  return (
    <Section id="faq" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} tone="alt">
      <div className="grid gap-4">
        {t.items.map((qa) => (
          <GlassCard key={qa.q} className="p-6">
            <div className="text-base font-medium text-slate-900">{qa.q}</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{qa.a}</p>
          </GlassCard>
        ))}
      </div>
    </Section>
  )
}

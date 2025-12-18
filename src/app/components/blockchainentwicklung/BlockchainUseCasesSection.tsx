// src/app/components/blockchainentwicklung/BlockchainUseCasesSection.tsx
import { GlassCard, Lang, Section } from './_ui'

type UseCase = { title: string; text: string; bullets: string[] }

export default function BlockchainUseCasesSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Use Cases',
          title: 'Blockchain-Use-Cases, die in B2B wirklich funktionieren',
          subtitle:
            'Wenn Vertrauen, Nachvollziehbarkeit oder programmierbare Regeln wichtig sind – dann kann Blockchain Sinn ergeben.',
          items: [
            {
              title: 'Tokenisierung & Rechte',
              text: 'Digitale Assets, Zugriffsrechte, Nutzungsrechte – mit klaren Regeln.',
              bullets: ['Ownership', 'Transfers', 'Permissions', 'Events'],
            },
            {
              title: 'Provenance / Nachweis',
              text: 'Nachweis von Herkunft/Status/Änderungen – fälschungssicher und prüfbar.',
              bullets: ['Proof', 'Audit trails', 'Integrity', 'Verification'],
            },
            {
              title: 'Programmierte Abwicklung',
              text: 'Smart Contract Regeln, die automatisch greifen (Freigaben, Escrow, Split).',
              bullets: ['Escrow', 'Approvals', 'Splits', 'Disputes'],
            },
            {
              title: 'Integrationen (Web2↔Web3)',
              text: 'Backend, Indexing, Wallet Flows, Events – damit Nutzer es bedienen können.',
              bullets: ['Indexing', 'APIs', 'Wallet flows', 'Webhooks'],
            },
            {
              title: 'Private/Consortium Chains',
              text: 'Wenn Governance/Teilnehmerkreis definiert ist und Audit zählt.',
              bullets: ['Governance', 'Permissions', 'Audit', 'Ops'],
            },
            {
              title: 'Security & Audit Readiness',
              text: 'Testing, Reviews, Invariants, Spezifikation – damit Audit kein Lotto ist.',
              bullets: ['Threat model', 'Testing', 'Reviews', 'Audit prep'],
            },
          ] as UseCase[],
        }
      : {
          eyebrow: 'Use cases',
          title: 'Blockchain use cases that work in B2B',
          subtitle:
            'When trust, verifiability or programmable rules matter, blockchain can make sense.',
          items: [
            {
              title: 'Tokenization & rights',
              text: 'Digital assets, access rights, usage rights — with clear rules.',
              bullets: ['Ownership', 'Transfers', 'Permissions', 'Events'],
            },
            {
              title: 'Provenance / proof',
              text: 'Proof of origin/status/changes — tamper-resistant and verifiable.',
              bullets: ['Proof', 'Audit trails', 'Integrity', 'Verification'],
            },
            {
              title: 'Programmed settlement',
              text: 'Smart contract rules (approvals, escrow, splits).',
              bullets: ['Escrow', 'Approvals', 'Splits', 'Disputes'],
            },
            {
              title: 'Integrations (Web2↔Web3)',
              text: 'Backend, indexing, wallet flows, events — operable UX.',
              bullets: ['Indexing', 'APIs', 'Wallet flows', 'Webhooks'],
            },
            {
              title: 'Private/consortium chains',
              text: 'When governance and auditability matter.',
              bullets: ['Governance', 'Permissions', 'Audit', 'Ops'],
            },
            {
              title: 'Security & audit readiness',
              text: 'Testing, reviews, invariants, specs — so audits aren’t lottery.',
              bullets: ['Threat model', 'Testing', 'Reviews', 'Audit prep'],
            },
          ] as UseCase[],
        }

  return (
    <Section id="usecases" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} tone="alt">
      <div className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {t.items.map((u) => (
          <GlassCard key={u.title} className="min-w-[280px] max-w-[320px] p-6">
            <div className="text-base font-medium text-slate-900">{u.title}</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{u.text}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {u.bullets.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center rounded-full border border-white/60 bg-white/70 px-3 py-1 text-[12px] font-medium text-slate-700 shadow-sm"
                >
                  {b}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  )
}

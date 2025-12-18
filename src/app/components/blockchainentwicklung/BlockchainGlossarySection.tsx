// src/app/components/blockchainentwicklung/BlockchainGlossarySection.tsx
import { GlassCard, Lang, Section } from './_ui'

type Item = { term: string; def: string }

export default function BlockchainGlossarySection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Glossar',
          title: 'Begriffe, die in Blockchain-Projekten ständig fallen',
          subtitle: 'Kurz, verständlich, praxisnah.',
          items: [
            { term: 'EVM', def: 'Ethereum Virtual Machine: Ausführungsumgebung für Smart Contracts (auch bei vielen kompatiblen Chains).' },
            { term: 'Smart Contract', def: 'Programmcode auf der Chain, der Regeln durchsetzt und Events erzeugt.' },
            { term: 'Reorg', def: 'Ketten-Reorganisation: selten, aber wichtig fürs Indexing/Read Models (Events können „umkippen“).' },
            { term: 'Custody', def: 'Keys werden durch einen Dienst verwaltet. Vorteil: UX, Nachteil: Risiko/Verantwortung.' },
            { term: 'Non-custody', def: 'Nutzer verwalten Keys selbst. Vorteil: weniger Haftung, Nachteil: UX/Recovery.' },
            { term: 'Audit', def: 'Externe Sicherheitsprüfung des Contract-Codes – ersetzt nicht interne Specs/Tests.' },
          ] as Item[],
        }
      : {
          eyebrow: 'Glossary',
          title: 'Terms you’ll hear constantly in blockchain projects',
          subtitle: 'Short, clear, practical.',
          items: [
            { term: 'EVM', def: 'Ethereum Virtual Machine: execution environment for smart contracts (many compatible chains use it).' },
            { term: 'Smart contract', def: 'On-chain code that enforces rules and emits events.' },
            { term: 'Reorg', def: 'Chain reorganization: rare but important for indexing/read models (events can change).' },
            { term: 'Custody', def: 'Keys are managed by a service. Better UX, higher responsibility/risk.' },
            { term: 'Non-custody', def: 'Users manage their own keys. Less liability, harder UX/recovery.' },
            { term: 'Audit', def: 'External security review of contract code — not a replacement for internal specs/tests.' },
          ] as Item[],
        }

  return (
    <Section id="glossar" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} tone="light">
      <div className="grid gap-4 md:grid-cols-2">
        {t.items.map((it) => (
          <GlassCard key={it.term} className="p-6">
            <div className="text-base font-medium text-slate-900">{it.term}</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{it.def}</p>
          </GlassCard>
        ))}
      </div>
    </Section>
  )
}

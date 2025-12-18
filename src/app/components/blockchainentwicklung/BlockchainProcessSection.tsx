// src/app/components/blockchainentwicklung/BlockchainProcessSection.tsx
import { GlassCard, Lang, Section } from './_ui'

type Step = { title: string; text: string; bullets: string[] }

export default function BlockchainProcessSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Ablauf',
          title: 'Von Idee zu sicherem Release: ein Blockchain-Workflow',
          subtitle:
            'Wir beginnen mit Regeln & Threat Model, dann bauen wir Contracts + Off-Chain System und härten Richtung Produktion.',
          steps: [
            {
              title: 'Schritt 1: Use-Case & On-Chain Entscheidung',
              text: 'Trust Boundary, Regeln, was muss on-chain sein, was nicht.',
              bullets: ['Scope', 'Invariants', 'On/Off-chain split'],
            },
            {
              title: 'Schritt 2: Contract Design + Specs',
              text: 'State Model, Events, Permissions, Upgrade-Plan.',
              bullets: ['State model', 'Events', 'Permissions'],
            },
            {
              title: 'Schritt 3: Implementation + Tests',
              text: 'Unit/Integration/Edge Cases, Simulationen, lokale Forks.',
              bullets: ['Testing', 'Forks', 'Edge cases'],
            },
            {
              title: 'Schritt 4: Security Review / Audit Prep',
              text: 'Threat Model, Reviews, Fixes, Dokumentation.',
              bullets: ['Threat model', 'Reviews', 'Fixes'],
            },
            {
              title: 'Schritt 5: Off-Chain Integration & Ops',
              text: 'Indexing, Backend, Monitoring, Runbooks, Rollout.',
              bullets: ['Indexing', 'APIs', 'Monitoring'],
            },
          ] as Step[],
        }
      : {
          eyebrow: 'Process',
          title: 'From idea to safe release: a blockchain workflow',
          subtitle:
            'We start with rules & threat model, then build contracts + off-chain system and harden for production.',
          steps: [
            {
              title: 'Step 1: Use case & on-chain decision',
              text: 'Trust boundary, rules, what must be on-chain vs not.',
              bullets: ['Scope', 'Invariants', 'On/Off-chain split'],
            },
            {
              title: 'Step 2: Contract design + specs',
              text: 'State model, events, permissions, upgrade plan.',
              bullets: ['State model', 'Events', 'Permissions'],
            },
            {
              title: 'Step 3: Implementation + tests',
              text: 'Unit/integration/edge cases, simulations, local forks.',
              bullets: ['Testing', 'Forks', 'Edge cases'],
            },
            {
              title: 'Step 4: Security review / audit prep',
              text: 'Threat model, reviews, fixes, documentation.',
              bullets: ['Threat model', 'Reviews', 'Fixes'],
            },
            {
              title: 'Step 5: Off-chain integration & ops',
              text: 'Indexing, backend, monitoring, runbooks, rollout.',
              bullets: ['Indexing', 'APIs', 'Monitoring'],
            },
          ] as Step[],
        }

  return (
    <Section id="prozess" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} tone="light">
      <div className="relative">
        <div className="pointer-events-none absolute left-4 top-2 h-full w-px bg-slate-900/10 md:left-6" />
        <div className="grid gap-4">
          {t.steps.map((s, idx) => (
            <div key={s.title} className="relative pl-10 md:pl-14">
              <div className="absolute left-3 top-6 h-6 w-6 rounded-full border border-white/60 bg-white/80 text-center text-xs font-medium text-slate-700 shadow-sm backdrop-blur md:left-4">
                <div className="flex h-full w-full items-center justify-center">{idx + 1}</div>
              </div>

              <GlassCard className="p-6">
                <div className="text-base font-medium text-slate-900">{s.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.bullets.map((b) => (
                    <span
                      key={b}
                      className="inline-flex items-center rounded-full border border-white/60 bg-white/70 px-3 py-1 text-[12px] font-medium text-slate-700 shadow-sm"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

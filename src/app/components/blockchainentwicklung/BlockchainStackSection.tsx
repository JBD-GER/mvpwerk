// src/app/components/blockchainentwicklung/BlockchainStackSection.tsx
import { GlassCard, Lang, Section, DividerSoft } from './_ui'

type Item = { title: string; text: string; bullets: string[] }

export default function BlockchainStackSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Stack',
          title: 'Von Contract bis Backend: die Schichten im Blockchain-System',
          subtitle:
            'Die meisten Projekte brauchen ein solides Off-Chain System, das On-Chain State zuverlässig abbildet und bedienbar macht.',
          rail: [
            { k: 'Contracts', v: 'Rules & events' },
            { k: 'Wallet', v: 'Signing flows' },
            { k: 'Indexing', v: 'Read models' },
            { k: 'API', v: 'App backend' },
            { k: 'Ops', v: 'Monitoring' },
            { k: 'Security', v: 'Reviews/audit' },
          ],
          items: [
            {
              title: 'Smart Contracts',
              text: 'State Model, Events, Permissions, Upgrade-Strategie.',
              bullets: ['Invariants', 'Events', 'Access control', 'Versioning'],
            },
            {
              title: 'Indexing & Read Models',
              text: 'Events → Materialized Views → schnelle UI/Reports.',
              bullets: ['Event processing', 'Idempotency', 'Reorg handling', 'Caching'],
            },
            {
              title: 'Backend & Integrationen',
              text: 'APIs, Jobs, Webhooks, Identity/Permissions, Fiat (falls nötig).',
              bullets: ['APIs', 'Queues', 'Webhooks', 'Identity'],
            },
            {
              title: 'Security & Betrieb',
              text: 'Reviews, Tests, Monitoring, Incident Flow, Key-Prozesse.',
              bullets: ['Threat model', 'Testing', 'Alerts', 'Runbooks'],
            },
          ] as Item[],
        }
      : {
          eyebrow: 'Stack',
          title: 'From contracts to backend: blockchain system layers',
          subtitle:
            'Most projects need a solid off-chain system that maps on-chain state reliably and makes it operable.',
          rail: [
            { k: 'Contracts', v: 'Rules & events' },
            { k: 'Wallet', v: 'Signing flows' },
            { k: 'Indexing', v: 'Read models' },
            { k: 'API', v: 'App backend' },
            { k: 'Ops', v: 'Monitoring' },
            { k: 'Security', v: 'Reviews/audit' },
          ],
          items: [
            {
              title: 'Smart contracts',
              text: 'State model, events, permissions, upgrade strategy.',
              bullets: ['Invariants', 'Events', 'Access control', 'Versioning'],
            },
            {
              title: 'Indexing & read models',
              text: 'Events → materialized views → fast UI/reports.',
              bullets: ['Event processing', 'Idempotency', 'Reorg handling', 'Caching'],
            },
            {
              title: 'Backend & integrations',
              text: 'APIs, jobs, webhooks, identity/permissions, fiat if needed.',
              bullets: ['APIs', 'Queues', 'Webhooks', 'Identity'],
            },
            {
              title: 'Security & operations',
              text: 'Reviews, tests, monitoring, incident flow, key processes.',
              bullets: ['Threat model', 'Testing', 'Alerts', 'Runbooks'],
            },
          ] as Item[],
        }

  return (
    <Section id="stack" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} tone="light">
      <div className="rounded-3xl border border-white/60 bg-white/60 p-5 shadow-sm backdrop-blur-xl">
        <div className="flex flex-wrap gap-2">
          {t.rail.map((r) => (
            <span
              key={r.k}
              className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-1 text-[12px] font-medium text-slate-700 shadow-sm"
            >
              <span className="text-slate-900">{r.k}</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-600">{r.v}</span>
            </span>
          ))}
        </div>

        <DividerSoft />

        <div className="grid gap-4 md:grid-cols-2">
          {t.items.map((it) => (
            <GlassCard key={it.title} className="p-6">
              <div className="text-base font-medium text-slate-900">{it.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{it.text}</p>
              <div className="mt-4 grid gap-2 text-sm text-slate-700">
                {it.bullets.map((b) => (
                  <div key={b} className="flex items-center gap-2">
                    <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-white/60 bg-white/70 text-[11px] shadow-sm">
                      ✓
                    </span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </Section>
  )
}

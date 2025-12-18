// src/app/components/blockchainentwicklung/BlockchainDeliverablesSection.tsx
import { GlassCard, Lang, Section } from './_ui'

type Deliverable = { title: string; text: string; tags: string[] }

export default function BlockchainDeliverablesSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Deliverables',
          title: 'Was Sie am Ende wirklich bekommen',
          subtitle:
            'Smart Contracts sind nur ein Teil. Entscheidend sind Testbarkeit, Sicherheit, Betrieb und Integrationen.',
          items: [
            {
              title: 'Smart Contracts + Specs',
              text: 'Klare Spezifikation, State Model, Events, Permissions – plus Upgrade-Plan.',
              tags: ['State model', 'Events', 'Access', 'Versioning'],
            },
            {
              title: 'Test Suite & Simulation',
              text: 'Unit/Integration/Edge Cases, lokale Forks, deterministische Tests.',
              tags: ['Unit tests', 'Integration', 'Forks', 'Edge cases'],
            },
            {
              title: 'Security Review / Audit Readiness',
              text: 'Threat Model, Checklisten, Findings, Fixes, Dokumentation.',
              tags: ['Threat model', 'Reviews', 'Fixes', 'Docs'],
            },
            {
              title: 'Off-Chain Backend & Indexing',
              text: 'Event Processing, Read Models, APIs, Jobs/Queues.',
              tags: ['Indexing', 'APIs', 'Queues', 'Idempotency'],
            },
            {
              title: 'Wallet / Signing Flows',
              text: 'Custody/non-custody Flows, Recovery, Multi-Sig (falls nötig).',
              tags: ['Wallet', 'Signing', 'Recovery', 'Multi-sig'],
            },
            {
              title: 'Ops & Monitoring',
              text: 'Monitoring für Tx/Events, Alerts, Incident Flow, Runbooks.',
              tags: ['Monitoring', 'Alerts', 'Runbooks', 'Ops'],
            },
          ] as Deliverable[],
        }
      : {
          eyebrow: 'Deliverables',
          title: 'What you actually get',
          subtitle:
            'Smart contracts are only a part. What matters: testability, security, operations and integrations.',
          items: [
            {
              title: 'Smart contracts + specs',
              text: 'Clear specification, state model, events, permissions — plus upgrade plan.',
              tags: ['State model', 'Events', 'Access', 'Versioning'],
            },
            {
              title: 'Test suite & simulation',
              text: 'Unit/integration/edge cases, local forks, deterministic tests.',
              tags: ['Unit tests', 'Integration', 'Forks', 'Edge cases'],
            },
            {
              title: 'Security review / audit readiness',
              text: 'Threat model, checklists, findings, fixes, documentation.',
              tags: ['Threat model', 'Reviews', 'Fixes', 'Docs'],
            },
            {
              title: 'Off-chain backend & indexing',
              text: 'Event processing, read models, APIs, jobs/queues.',
              tags: ['Indexing', 'APIs', 'Queues', 'Idempotency'],
            },
            {
              title: 'Wallet / signing flows',
              text: 'Custody/non-custody flows, recovery, multi-sig if needed.',
              tags: ['Wallet', 'Signing', 'Recovery', 'Multi-sig'],
            },
            {
              title: 'Ops & monitoring',
              text: 'Monitoring for tx/events, alerts, incident flow, runbooks.',
              tags: ['Monitoring', 'Alerts', 'Runbooks', 'Ops'],
            },
          ] as Deliverable[],
        }

  return (
    <Section id="leistungen" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} tone="alt">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {t.items.map((d) => (
          <GlassCard key={d.title} className="p-6">
            <div className="text-base font-medium text-slate-900">{d.title}</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{d.text}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {d.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-white/60 bg-white/70 px-3 py-1 text-[12px] font-medium text-slate-700 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  )
}

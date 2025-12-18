// src/app/components/webappentwicklung/WebAppProcessSection.tsx
import { GlassCard, Lang, SectionShell } from './_ui'

type Phase = { title: string; text: string; bullets: string[] }

export default function WebAppProcessSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Ablauf',
          title: 'Von Scope zu Release: ein klarer Web-App-Workflow',
          subtitle:
            'Wir definieren zuerst Kernprozess + Datenmodell + Rechte. Danach bauen wir Features schnell und kontrolliert aus.',
          phases: [
            {
              title: 'Phase 1: Discovery & Blueprint',
              text: 'Scope, KPIs, Rollen, Datenmodell, UX-Flow, Integrationen, Risiko-Liste.',
              bullets: ['User flows', 'DB Sketch', 'Roles/RLS', 'MVP scope'],
            },
            {
              title: 'Phase 2: MVP Delivery',
              text: 'Core Flows, UI, Auth, erste APIs/Integrationen – schnell testbar mit echten Nutzern.',
              bullets: ['Core screens', 'Auth', 'CRUD', 'Events'],
            },
            {
              title: 'Phase 3: Hardening',
              text: 'Performance, Edge Cases, Tests, Security Checks, Monitoring, Billing/Webhooks (falls relevant).',
              bullets: ['Perf', 'Tests', 'RLS review', 'Observability'],
            },
            {
              title: 'Phase 4: Rollout & Wachstum',
              text: 'Staging→Prod, Feature Flags, Feedback Loop, Roadmap Releases.',
              bullets: ['Release', 'Feature flags', 'Analytics', 'Roadmap'],
            },
          ] as Phase[],
        }
      : {
          eyebrow: 'Process',
          title: 'From scope to release: a clear web-app workflow',
          subtitle:
            'We start with core workflow + data model + permissions. Then we scale features fast and safely.',
          phases: [
            {
              title: 'Phase 1: Discovery & blueprint',
              text: 'Scope, KPIs, roles, data model, UX flow, integrations, risk list.',
              bullets: ['User flows', 'DB sketch', 'Roles/RLS', 'MVP scope'],
            },
            {
              title: 'Phase 2: MVP delivery',
              text: 'Core flows, UI, auth, first APIs/integrations – testable with real users.',
              bullets: ['Core screens', 'Auth', 'CRUD', 'Events'],
            },
            {
              title: 'Phase 3: Hardening',
              text: 'Performance, edge cases, tests, security checks, monitoring, billing/webhooks (if needed).',
              bullets: ['Perf', 'Tests', 'RLS review', 'Observability'],
            },
            {
              title: 'Phase 4: Rollout & growth',
              text: 'Staging→prod, feature flags, feedback loop, roadmap releases.',
              bullets: ['Release', 'Feature flags', 'Analytics', 'Roadmap'],
            },
          ] as Phase[],
        }

  return (
    <SectionShell id="prozess" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle}>
      <div className="grid gap-4 md:grid-cols-2">
        {t.phases.map((p) => (
          <GlassCard key={p.title} className="p-6">
            <div className="text-base font-medium text-slate-900">{p.title}</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.text}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.bullets.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center rounded-full border border-white/60 bg-white/70 px-3 py-1 text-[12px] font-medium text-slate-700 shadow-sm backdrop-blur"
                >
                  {b}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionShell>
  )
}

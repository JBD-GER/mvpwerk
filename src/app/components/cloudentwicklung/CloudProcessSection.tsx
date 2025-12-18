// src/app/components/cloudentwicklung/CloudProcessSection.tsx
import { GlassCard, Lang, Section } from './_ui'

type Step = { title: string; text: string; bullets: string[] }

export default function CloudProcessSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Ablauf',
          title: 'Cloud-Delivery als klarer Ablauf (nicht als Bauchgefühl)',
          subtitle:
            'Wir beginnen mit Zielbild + Standards und liefern dann iterativ: Observability, Security, Kosten – messbar und operierbar.',
          steps: [
            {
              title: 'Schritt 1: Zielbild & Risiken',
              text: 'SLOs, kritische Flows, Deployments, Kostenhebel, Security Baseline.',
              bullets: ['SLOs', 'Critical paths', 'Risiko-Liste', 'Priorisierung'],
            },
            {
              title: 'Schritt 2: Release-Standard',
              text: 'Staging/Prod, Checks, Rollback, Migrations – CI/CD als Routine.',
              bullets: ['CI/CD', 'Rollback', 'Migrations', 'Preview optional'],
            },
            {
              title: 'Schritt 3: Observability',
              text: 'Dashboards, Alerts, Tracing, Ownership, Runbooks.',
              bullets: ['Dashboards', 'Alerts', 'Tracing', 'Runbooks'],
            },
            {
              title: 'Schritt 4: Security & Governance',
              text: 'Secrets, Policies, Auditability, sichere Defaults.',
              bullets: ['Secrets', 'Policies', 'Audit', 'Hardening'],
            },
            {
              title: 'Schritt 5: Kostenkontrolle',
              text: 'Tagging, Budgets, Limits, Reports und Optimierung.',
              bullets: ['Tagging', 'Budgets', 'Cost alerts', 'Optimierung'],
            },
          ] as Step[],
        }
      : {
          eyebrow: 'Process',
          title: 'Cloud delivery as a clear process (not gut feeling)',
          subtitle:
            'We start with target outcomes and standards, then deliver iteratively: observability, security, costs — measurable and operable.',
          steps: [
            {
              title: 'Step 1: Target outcome & risks',
              text: 'SLOs, critical flows, deployments, cost drivers, security baseline.',
              bullets: ['SLOs', 'Critical paths', 'Risk list', 'Priorities'],
            },
            {
              title: 'Step 2: Release standard',
              text: 'Staging/prod, checks, rollback, migrations — CI/CD as routine.',
              bullets: ['CI/CD', 'Rollback', 'Migrations', 'Preview optional'],
            },
            {
              title: 'Step 3: Observability',
              text: 'Dashboards, alerts, tracing, ownership, runbooks.',
              bullets: ['Dashboards', 'Alerts', 'Tracing', 'Runbooks'],
            },
            {
              title: 'Step 4: Security & governance',
              text: 'Secrets, policies, auditability, safe defaults.',
              bullets: ['Secrets', 'Policies', 'Audit', 'Hardening'],
            },
            {
              title: 'Step 5: Cost control',
              text: 'Tagging, budgets, limits, reports and optimization.',
              bullets: ['Tagging', 'Budgets', 'Cost alerts', 'Optimization'],
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

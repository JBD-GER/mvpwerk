// src/app/components/cloudentwicklung/CloudStackSection.tsx
import { GlassCard, Lang, Section, DividerSoft } from './_ui'

type Item = { title: string; text: string; bullets: string[] }

export default function CloudStackSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Stack',
          title: 'Die Cloud-Schichten: von Infrastruktur bis Observability',
          subtitle:
            'Wir strukturieren Cloud so, dass Ihr Team schnell liefern kann — ohne später Chaos in Deployments, Kosten oder Security zu bekommen.',
          rail: [
            { k: 'Infra', v: 'IaC, Netzwerk, Storage' },
            { k: 'Runtime', v: 'Serverless/Container' },
            { k: 'Delivery', v: 'CI/CD, Releases' },
            { k: 'Observe', v: 'Logs, Metrics, Tracing' },
            { k: 'Secure', v: 'Policies, Secrets' },
            { k: 'Costs', v: 'Budgets, Tags' },
          ],
          items: [
            {
              title: 'Infrastructure as Code',
              text: 'Reproduzierbar, versioniert, auditierbar — statt Klick-Odyssee.',
              bullets: ['Versionierung', 'Review-Prozess', 'Drift vermeiden', 'Schneller Rollout'],
            },
            {
              title: 'Deployments & Environments',
              text: 'Staging/Prod, Preview Envs, Rollback, Migrations – damit Releases Routine werden.',
              bullets: ['Preview', 'Rollback', 'Migrations', 'Feature Flags optional'],
            },
            {
              title: 'Observability',
              text: 'Dashboards, Alerts, Tracing, SLOs – damit Betrieb steuerbar wird.',
              bullets: ['Alerting', 'Tracing', 'SLOs', 'Runbooks'],
            },
            {
              title: 'Security & Governance',
              text: 'Secrets, least privilege, Policies, Audit – Sicherheit wird nachweisbar.',
              bullets: ['Secrets', 'Policies', 'Audit', 'Hardening'],
            },
          ] as Item[],
        }
      : {
          eyebrow: 'Stack',
          title: 'Cloud layers: from infrastructure to observability',
          subtitle:
            'We structure cloud so your team ships fast — without chaos in deployments, costs or security later.',
          rail: [
            { k: 'Infra', v: 'IaC, network, storage' },
            { k: 'Runtime', v: 'Serverless/containers' },
            { k: 'Delivery', v: 'CI/CD, releases' },
            { k: 'Observe', v: 'Logs, metrics, tracing' },
            { k: 'Secure', v: 'Policies, secrets' },
            { k: 'Costs', v: 'Budgets, tags' },
          ],
          items: [
            {
              title: 'Infrastructure as Code',
              text: 'Reproducible, versioned, auditable — no click-ops.',
              bullets: ['Versioning', 'Reviews', 'Avoid drift', 'Fast rollout'],
            },
            {
              title: 'Deployments & environments',
              text: 'Staging/prod, preview envs, rollback, migrations — releases become routine.',
              bullets: ['Preview', 'Rollback', 'Migrations', 'Feature flags optional'],
            },
            {
              title: 'Observability',
              text: 'Dashboards, alerts, tracing, SLOs — operations become controllable.',
              bullets: ['Alerting', 'Tracing', 'SLOs', 'Runbooks'],
            },
            {
              title: 'Security & governance',
              text: 'Secrets, least privilege, policies, audit — security becomes provable.',
              bullets: ['Secrets', 'Policies', 'Audit', 'Hardening'],
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

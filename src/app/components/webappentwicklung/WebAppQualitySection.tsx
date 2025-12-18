// src/app/components/webappentwicklung/WebAppQualitySection.tsx
import { CheckList, GlassCard, Lang, SectionShell } from './_ui'

export default function WebAppQualitySection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Qualität & Sicherheit',
          title: 'Produktionstauglich heißt: testbar, schnell, sicher und nachvollziehbar',
          subtitle:
            'Wir bauen bewusst die „unsichtbaren“ Dinge mit: Security, Performance, Logs, Backups – damit du nicht später teuer reparierst.',
          leftTitle: 'Qualität & Performance',
          left: [
            'Core Web Vitals: LCP/TTFB optimiert (Caching, Split, lazy where needed)',
            'Robuste Form-Validierung & Error UX',
            'Tests/Checks für kritische Flows (Auth, Billing, Mutations)',
            'Saubere States: Loading/Empty/Error, keine „Spinner-Hölle“',
          ],
          rightTitle: 'Security & Betrieb',
          right: [
            'RLS/Policies als Grundlage (Multi-Tenant wirklich sicher)',
            'Input Validation, Rate-Limits, Abuse-Schutz',
            'Observability: Fehlerquoten, Logs, Alerts, Monitoring',
            'Backups/Recovery + Migrations-Disziplin',
          ],
        }
      : {
          eyebrow: 'Quality & security',
          title: 'Production-ready means: testable, fast, secure and observable',
          subtitle:
            'We build the “invisible” parts too: security, performance, logs, backups – so you don’t pay for repairs later.',
          leftTitle: 'Quality & performance',
          left: [
            'Core Web Vitals: optimized LCP/TTFB (caching, splitting, lazy where needed)',
            'Robust form validation & error UX',
            'Tests/checks for critical flows (auth, billing, mutations)',
            'Clean states: loading/empty/error, no spinner chaos',
          ],
          rightTitle: 'Security & ops',
          right: [
            'RLS/policies as foundation (multi-tenant actually secure)',
            'Input validation, rate limits, abuse protection',
            'Observability: error rates, logs, alerts, monitoring',
            'Backups/recovery + migration discipline',
          ],
        }

  return (
    <SectionShell id="quality" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle}>
      <div className="grid gap-4 md:grid-cols-2">
        <GlassCard className="p-6">
          <div className="text-base font-medium text-slate-900">{t.leftTitle}</div>
          <div className="mt-4">
            <CheckList items={t.left} />
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="text-base font-medium text-slate-900">{t.rightTitle}</div>
          <div className="mt-4">
            <CheckList items={t.right} />
          </div>
        </GlassCard>
      </div>
    </SectionShell>
  )
}

import { DividerSoft, GlassCard, IconCode, IconDatabase, IconLayers, IconShield, Lang, SectionShell } from './_ui'

export default function SoftwareStackSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Tech Stack',
          title: 'Ein Stack, der schnell liefert und langfristig trägt',
          subtitle:
            'Wir bevorzugen bewährte Bausteine: modern, aber nicht experimentell. Ziel: Geschwindigkeit, Stabilität und gute Wartbarkeit.',
          columns: [
            {
              title: 'Frontend',
              icon: 'code',
              items: [
                {
                  label: 'React & Next.js',
                  desc:
                    'Saubere Komponentenstruktur, Server Components wo sinnvoll, schnelle Navigation und gute SEO-Basis.',
                },
                {
                  label: 'Tailwind UI Patterns',
                  desc:
                    'Konsistentes Designsystem: Glass-Look, Soft-Shadows, klare Typografie, responsive Layouts.',
                },
                {
                  label: 'State & Data',
                  desc:
                    'Server-first Datenzugriff, klare Caching-Strategien und UI-States ohne „Spaghetti“. ',
                },
              ],
            },
            {
              title: 'Backend & APIs',
              icon: 'layers',
              items: [
                {
                  label: 'API Routen / Server Actions',
                  desc:
                    'Klare Input-Validierung, robuste Fehlercodes, Logging und idempotente Patterns, wo nötig.',
                },
                {
                  label: 'Webhooks & Events',
                  desc:
                    'Asynchrone Workflows, Retries, Signaturen, sauberes Event-Design.',
                },
                {
                  label: 'Integrationen',
                  desc:
                    'Schnittstellen zu CRM/ERP, E-Mail, Payments, Files, Chat — je nach Produkt.',
                },
              ],
            },
            {
              title: 'Daten & Security',
              icon: 'shield',
              items: [
                {
                  label: 'Postgres',
                  desc:
                    'Starkes Datenmodell, Indizes, Constraints, sinnvolle Normalisierung — Performance bleibt stabil.',
                },
                {
                  label: 'RLS / Permissions',
                  desc:
                    'Row Level Security, Rollen, Policies, Secure-by-default. Perfekt für Multi-User Apps.',
                },
                {
                  label: 'Storage Patterns',
                  desc:
                    'Signed URLs, getrennte Buckets, saubere Pfad-Strategien, Zugriff über Policies.',
                },
              ],
            },
            {
              title: 'Deployment',
              icon: 'db',
              items: [
                {
                  label: 'CI/CD',
                  desc:
                    'Preview Deployments, Staging/Prod Trennung, schnelle Rollbacks.',
                },
                {
                  label: 'Observability',
                  desc:
                    'Monitoring, Error Tracking, Performance KPIs — Probleme werden messbar.',
                },
                {
                  label: 'EU Hosting (optional)',
                  desc:
                    'Wenn Datenschutz/Latency wichtig sind: EU-Regionen und klare Datenflüsse.',
                },
              ],
            },
          ],
          noteTitle: 'Warum nicht „alles custom“?',
          note:
            'Weil Geschwindigkeit und Wartbarkeit gewinnen. Custom lohnt sich dort, wo es einen echten Wettbewerbsvorteil bringt — nicht bei Standards.',
        }
      : {
          eyebrow: 'Tech Stack',
          title: 'A stack that ships fast and lasts',
          subtitle:
            'We prefer proven building blocks: modern, not experimental. Goal: speed, stability, maintainability.',
          columns: [
            {
              title: 'Frontend',
              icon: 'code',
              items: [
                { label: 'React & Next.js', desc: 'Clean component structure, Server Components where useful, fast navigation and solid SEO.' },
                { label: 'Tailwind UI patterns', desc: 'Consistent design system: glass look, soft shadows, clear typography, responsive layouts.' },
                { label: 'State & data', desc: 'Server-first data access, clear caching strategy, no spaghetti UI states.' },
              ],
            },
            {
              title: 'Backend & APIs',
              icon: 'layers',
              items: [
                { label: 'API routes / server actions', desc: 'Input validation, robust errors, logging, idempotency where needed.' },
                { label: 'Webhooks & events', desc: 'Async workflows, retries, signatures, clean event design.' },
                { label: 'Integrations', desc: 'Connect CRM/ERP, email, payments, files, chat — depending on product.' },
              ],
            },
            {
              title: 'Data & security',
              icon: 'shield',
              items: [
                { label: 'Postgres', desc: 'Strong data model, indexes, constraints, sensible normalization — stable performance.' },
                { label: 'RLS / permissions', desc: 'Row Level Security, roles, policies — secure-by-default multi-user apps.' },
                { label: 'Storage patterns', desc: 'Signed URLs, separated buckets, clean paths and policy-based access.' },
              ],
            },
            {
              title: 'Deployment',
              icon: 'db',
              items: [
                { label: 'CI/CD', desc: 'Preview deployments, staging/prod separation, fast rollbacks.' },
                { label: 'Observability', desc: 'Monitoring, error tracking, performance KPIs — measurable reliability.' },
                { label: 'EU hosting (optional)', desc: 'If privacy/latency matter: EU regions and clear data flows.' },
              ],
            },
          ],
          noteTitle: 'Why not “everything custom”?',
          note:
            'Because speed and maintainability win. Custom is worth it where it creates a real advantage — not for basics.',
        }

  const icon = (id: string) => {
    if (id === 'code') return <IconCode />
    if (id === 'layers') return <IconLayers />
    if (id === 'shield') return <IconShield />
    return <IconDatabase />
  }

  return (
    <>
      <SectionShell id="stack" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle}>
        <div className="grid gap-4 md:grid-cols-2">
          {t.columns.map((c) => (
            <GlassCard key={c.title} className="p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/70 shadow-sm">
                  {icon(c.icon)}
                </div>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold text-slate-900">{c.title}</div>
                  <div className="mt-1 text-[11px] text-slate-600">
                    {lang === 'de' ? 'Bausteine & Patterns.' : 'Building blocks & patterns.'}
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                {c.items.map((it) => (
                  <div key={it.label} className="rounded-2xl border border-slate-900/10 bg-white/60 p-4">
                    <div className="text-[12px] font-semibold text-slate-900">{it.label}</div>
                    <p className="mt-1 text-[12px] leading-relaxed text-slate-700">{it.desc}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        <GlassCard className="mt-6 p-5 sm:p-6">
          <div className="text-[13px] font-semibold text-slate-900">{t.noteTitle}</div>
          <p className="mt-2 text-[13px] leading-relaxed text-slate-700">{t.note}</p>
        </GlassCard>
      </SectionShell>
      <DividerSoft />
    </>
  )
}

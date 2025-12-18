import { DividerSoft, GlassCard, IconDatabase, IconLayers, IconShield, IconSpeed, Lang, SectionShell } from './_ui'

export default function SoftwareUseCasesSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Use Cases',
          title: 'Welche Software wir typischerweise entwickeln',
          subtitle:
            'Die meisten Projekte lassen sich auf wenige Muster herunterbrechen. Entscheidend ist, dass die Bausteine sauber zusammenspielen.',
          items: [
            {
              title: 'Interne Business-Tools',
              desc:
                'Dashboards, CRM-Workflows, Projekt- und Auftragsabwicklung, Dokumentenablage, Rollen & Rechte — schnell, logisch und für Teams nutzbar.',
              icon: 'layers',
              points: [
                'Mehrmandantenfähig (optional)',
                'Status-Workflows & Automationen',
                'Suche, Filter, Exports',
                'Audit-Trail & Historie',
              ],
            },
            {
              title: 'SaaS-Produkte',
              desc:
                'Subscription-Modelle, Team-Accounts, Trial-Logik, Abrechnung, Admin-Bereich — inklusive Setup für Skalierung und Betrieb.',
              icon: 'speed',
              points: [
                'Auth, Teams, Rollen',
                'Billing-ready Architektur',
                'Feature Flags & Pläne',
                'Saubere Deploy-Pipelines',
              ],
            },
            {
              title: 'API-first Plattformen',
              desc:
                'Wenn Integrationen Kernbestandteil sind: REST APIs, Webhooks, Event-Modelle, saubere Versionierung und Stabilität.',
              icon: 'db',
              points: [
                'OpenAPI / Konventionen',
                'Webhooks & Retries',
                'Rate Limits / Caching',
                'Observability (Logs/Metrics)',
              ],
            },
            {
              title: 'Security- & Compliance-nahe Systeme',
              desc:
                'Wenn Daten sensibel sind: Zugriffskonzepte, Datenminimierung, Mandantentrennung, sichere Storage-Patterns und Berechtigungen.',
              icon: 'shield',
              points: [
                'Row Level Security (RLS)',
                'Least Privilege',
                'Secure Storage & Signed URLs',
                'DSGVO-freundliche Defaults',
              ],
            },
          ],
          extraTitle: 'Wichtig: Die Kategorie ist nicht das Ziel',
          extraText:
            'Das Ziel ist immer ein System, das Ihr Team versteht und das Sie langfristig weiterentwickeln können — ohne Angst vor jedem Deployment.',
        }
      : {
          eyebrow: 'Use Cases',
          title: 'What we typically build',
          subtitle:
            'Most projects can be reduced to a few patterns. What matters is that the building blocks work together cleanly.',
          items: [
            {
              title: 'Internal business tools',
              desc:
                'Dashboards, CRM workflows, project/order management, document vaults, roles & permissions — fast, logical, team-friendly.',
              icon: 'layers',
              points: ['Optional multi-tenant', 'Status workflows & automation', 'Search, filters, exports', 'Audit trail & history'],
            },
            {
              title: 'SaaS products',
              desc:
                'Subscriptions, team accounts, trials, billing, admin panels — with a foundation that supports scaling and operations.',
              icon: 'speed',
              points: ['Auth, teams, roles', 'Billing-ready architecture', 'Feature flags & plans', 'Clean deploy pipelines'],
            },
            {
              title: 'API-first platforms',
              desc:
                'When integrations are core: REST APIs, webhooks, event models, clean versioning and long-term stability.',
              icon: 'db',
              points: ['OpenAPI conventions', 'Webhooks & retries', 'Rate limits / caching', 'Observability (logs/metrics)'],
            },
            {
              title: 'Security & compliance-heavy systems',
              desc:
                'When data is sensitive: access concepts, tenant isolation, secure storage patterns, strict permissions.',
              icon: 'shield',
              points: ['Row Level Security (RLS)', 'Least privilege', 'Secure storage & signed URLs', 'GDPR-friendly defaults'],
            },
          ],
          extraTitle: 'Important: category isn’t the goal',
          extraText:
            'The goal is always a system your team understands and can evolve — without fear of every deployment.',
        }

  const renderIcon = (id: string) => {
    if (id === 'layers') return <IconLayers />
    if (id === 'speed') return <IconSpeed />
    if (id === 'db') return <IconDatabase />
    return <IconShield />
  }

  return (
    <>
      <SectionShell id="usecases" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle}>
        <div className="grid gap-4 md:grid-cols-2">
          {t.items.map((x) => (
            <GlassCard key={x.title} className="p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/70 shadow-sm">
                  {renderIcon(x.icon)}
                </div>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold text-slate-900">{x.title}</div>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-700">{x.desc}</p>
                </div>
              </div>

              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {x.points.map((p) => (
                  <li
                    key={p}
                    className="rounded-2xl border border-slate-900/10 bg-white/60 px-3 py-2 text-[12px] text-slate-700"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>

        <GlassCard className="mt-6 p-5 sm:p-6">
          <div className="text-[13px] font-semibold text-slate-900">{t.extraTitle}</div>
          <p className="mt-2 text-[13px] leading-relaxed text-slate-700">{t.extraText}</p>
        </GlassCard>
      </SectionShell>
      <DividerSoft />
    </>
  )
}

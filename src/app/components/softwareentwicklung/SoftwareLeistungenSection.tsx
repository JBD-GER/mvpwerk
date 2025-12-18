import { DividerSoft, GlassCard, IconCode, IconDatabase, IconLayers, IconShield, IconSpeed, Lang, SectionShell } from './_ui'

export default function SoftwareLeistungenSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Leistungen',
          title: 'Softwareentwicklung als System — nicht als Einmal-Projekt',
          subtitle:
            'Wir denken in Bausteinen: Produktlogik, Daten, Schnittstellen, UI, Betrieb. So entsteht ein Produkt, das „in echt“ funktioniert.',
          groups: [
            {
              title: 'Produkt & Konzept',
              icon: 'spark',
              items: [
                {
                  title: 'Anforderungen schneiden',
                  desc:
                    'Komplexe Wünsche in einen klaren MVP-Kern übersetzen — mit Fokus auf Nutzen, Messbarkeit und schnelle Iterationen.',
                },
                {
                  title: 'Informationsarchitektur',
                  desc:
                    'Navigation, Seitenstruktur, Datenobjekte, Statusmodelle — damit UI und Backend sauber zusammenpassen.',
                },
                {
                  title: 'User Flows & Rollen',
                  desc:
                    'Wer darf was? Welche Journeys sind kritisch? Welche Daten sind sensibel? Daraus leiten wir Rechte und UI ab.',
                },
              ],
            },
            {
              title: 'Engineering',
              icon: 'code',
              items: [
                {
                  title: 'Web App Entwicklung',
                  desc:
                    'Moderne UI (React/Next), komponentenbasiert, schnell, sauber — mit Fokus auf Klarheit, UX und Geschwindigkeit.',
                },
                {
                  title: 'API Entwicklung',
                  desc:
                    'Stabile APIs mit klaren Konventionen, Fehlerhandling, Versionierung, Webhooks und sauberen Datenmodellen.',
                },
                {
                  title: 'Datenbank & RLS',
                  desc:
                    'Postgres-Modelle, Mandantentrennung, Row-Level-Security und sichere Patterns für Multi-User Systeme.',
                },
              ],
            },
            {
              title: 'Betrieb & Qualität',
              icon: 'shield',
              items: [
                {
                  title: 'Deployment & CI/CD',
                  desc:
                    'Automatisierte Deployments, Preview Environments, sichere Secrets und wiederholbare Releases.',
                },
                {
                  title: 'Observability',
                  desc:
                    'Logs, Monitoring, Error Tracking, Performance-Messung — damit Probleme nicht „unsichtbar“ bleiben.',
                },
                {
                  title: 'Security & Datenschutz',
                  desc:
                    'Least-Privilege, sichere Storage-Zugriffe, Signed URLs, Schutz vor typischen Web-Risiken und DSGVO-nahe Defaults.',
                },
              ],
            },
          ],
          matrixTitle: 'Was Kunden oft unterschätzen (und wir sauber lösen)',
          matrix: [
            {
              a: '„Login ist doch schnell gebaut“',
              b: 'Auth, Session-Handling, Rollen, RLS, Recovery-Flows, Edge-Cases — ohne Security-Lücken.',
              icon: 'shield',
            },
            {
              a: '„Datenmodell später“',
              b: 'Datenmodell früh sauber = weniger Rewrites, bessere Performance, weniger Inkonsistenzen.',
              icon: 'db',
            },
            {
              a: '„API braucht nur GET/POST“',
              b: 'Versionierung, idempotente Calls, Fehlercodes, Retries, Rate Limits, Monitoring.',
              icon: 'code',
            },
            {
              a: '„UI kommt zum Schluss“',
              b: 'UI ist Produkt. Deshalb arbeiten wir iterativ: schnell sichtbare Ergebnisse + saubere Basis.',
              icon: 'speed',
            },
          ],
        }
      : {
          eyebrow: 'Services',
          title: 'Software development as a system — not a one-off project',
          subtitle:
            'We think in building blocks: product logic, data, APIs, UI, operations. That’s how you get software that actually works in real life.',
          groups: [
            {
              title: 'Product & concept',
              icon: 'spark',
              items: [
                { title: 'Shape requirements', desc: 'Translate complex wishes into a clear MVP core — measurable, useful, iterative.' },
                { title: 'Information architecture', desc: 'Navigation, page structure, data objects, status models — so UI and backend align.' },
                { title: 'User flows & roles', desc: 'Who can do what? Critical journeys? Sensitive data? This drives permissions and UI.' },
              ],
            },
            {
              title: 'Engineering',
              icon: 'code',
              items: [
                { title: 'Web app development', desc: 'Modern UI (React/Next), component-based, fast, clean — focused on clarity and UX.' },
                { title: 'API development', desc: 'Stable APIs with conventions, error handling, versioning, webhooks and clean data models.' },
                { title: 'Database & RLS', desc: 'Postgres models, tenant isolation, Row-Level Security and robust multi-user patterns.' },
              ],
            },
            {
              title: 'Operations & quality',
              icon: 'shield',
              items: [
                { title: 'Deployment & CI/CD', desc: 'Automated deploys, preview environments, secure secrets and repeatable releases.' },
                { title: 'Observability', desc: 'Logs, monitoring, error tracking, performance measurement — no blind spots.' },
                { title: 'Security & privacy', desc: 'Least privilege, signed URLs, secure storage access, GDPR-friendly defaults.' },
              ],
            },
          ],
          matrixTitle: 'What clients often underestimate (and we handle properly)',
          matrix: [
            { a: '“Login is quick”', b: 'Auth, sessions, roles, RLS, recovery flows, edge cases — without security gaps.', icon: 'shield' },
            { a: '“Data model later”', b: 'Clean early data model = fewer rewrites, better performance, less inconsistency.', icon: 'db' },
            { a: '“API is just GET/POST”', b: 'Versioning, idempotency, error codes, retries, rate limits, monitoring.', icon: 'code' },
            { a: '“UI at the end”', b: 'UI is the product. We iterate: fast visible output + clean foundation.', icon: 'speed' },
          ],
        }

  const icon = (id: string) => {
    if (id === 'code') return <IconCode />
    if (id === 'db') return <IconDatabase />
    if (id === 'speed') return <IconSpeed />
    if (id === 'layers') return <IconLayers />
    return <IconShield />
  }

  return (
    <>
      <SectionShell id="leistungen" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle}>
        <div className="grid gap-4 lg:grid-cols-3">
          {t.groups.map((g) => (
            <GlassCard key={g.title} className="p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/70 shadow-sm">
                  {g.icon === 'code' ? <IconCode /> : g.icon === 'shield' ? <IconShield /> : <IconLayers />}
                </div>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold text-slate-900">{g.title}</div>
                  <div className="mt-1 text-[11px] text-slate-600">
                    {lang === 'de'
                      ? 'Bausteine, die zusammen ein Produkt ergeben.'
                      : 'Building blocks that form a product together.'}
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                {g.items.map((it) => (
                  <div key={it.title} className="rounded-2xl border border-slate-900/10 bg-white/60 p-4">
                    <div className="text-[12px] font-semibold text-slate-900">{it.title}</div>
                    <p className="mt-1 text-[12px] leading-relaxed text-slate-700">{it.desc}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        <GlassCard className="mt-6 p-5 sm:p-6">
          <div className="text-[13px] font-semibold text-slate-900">{t.matrixTitle}</div>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {t.matrix.map((m) => (
              <div key={m.a} className="rounded-2xl border border-slate-900/10 bg-white/60 p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/70 shadow-sm">
                    {icon(m.icon)}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[12px] font-semibold text-slate-900">{m.a}</div>
                    <p className="mt-1 text-[12px] leading-relaxed text-slate-700">{m.b}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </SectionShell>
      <DividerSoft />
    </>
  )
}

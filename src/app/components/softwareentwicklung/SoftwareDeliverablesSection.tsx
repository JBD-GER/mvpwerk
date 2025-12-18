import { DividerSoft, GlassCard, IconCode, IconLayers, IconShield, Lang, SectionShell } from './_ui'

export default function SoftwareDeliverablesSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Ergebnisse',
          title: 'Was Sie am Ende wirklich bekommen',
          subtitle:
            'Nicht nur “eine App”, sondern ein übernehmbares System: Code, Struktur, Dokumentation und ein Setup, das Sie nicht abhängig macht.',
          cards: [
            {
              title: 'Codebase, die Sie besitzen',
              icon: 'code',
              text:
                'Sauber strukturierte Codebase mit nachvollziehbaren Konventionen, sinnvollen Komponenten und klarer Trennung von Verantwortlichkeiten.',
              points: [
                'Next.js/React Struktur',
                'Wiederverwendbare UI-Komponenten',
                'Klare Ordner & Naming',
                'TypeScript & robuste Patterns',
              ],
            },
            {
              title: 'Datenmodell & Rechte',
              icon: 'shield',
              text:
                'Ein Datenmodell mit Constraints, Indizes und sauberer Rechte-Logik. Damit Multi-User Systeme auch in der Praxis sicher bleiben.',
              points: [
                'Tabellen/Entities dokumentiert',
                'RLS Policies nachvollziehbar',
                'Storage Pfade/Policies',
                'Audit/Historie (wenn benötigt)',
              ],
            },
            {
              title: 'Deploy-Setup',
              icon: 'layers',
              text:
                'Ein Setup, das Releases einfach macht: Environment Variablen, Deployment-Konzept, Logs/Monitoring-Basics und Wiederholbarkeit.',
              points: [
                'Staging/Prod Strategie',
                'Preview Deployments',
                'Logging / Error Tracking',
                'Rollback-freundlich',
              ],
            },
            {
              title: 'Dokumentation & Übergabe',
              icon: 'layers',
              text:
                'Die wichtigsten Dinge sind dokumentiert: Setup, Entscheidungen, Datenmodell, Flows. So kann Ihr Team übernehmen.',
              points: [
                'Setup-Guide',
                'Key Decisions / ADR light',
                'API-Konventionen',
                '„Wie deploye ich?“',
              ],
            },
          ],
          noteTitle: 'Warum wir das so betonen',
          note:
            'Viele Projekte fühlen sich am Ende „fertig“ an — bis die erste Erweiterung kommt. Deliverables sind der Unterschied zwischen Prototyp und Produkt.',
        }
      : {
          eyebrow: 'Deliverables',
          title: 'What you actually receive at the end',
          subtitle:
            'Not just “an app”, but an ownable system: code, structure, documentation and an operational setup that avoids lock-in.',
          cards: [
            {
              title: 'A codebase you own',
              icon: 'code',
              text:
                'A cleanly structured codebase with conventions, sensible components and clear separation of concerns.',
              points: ['Next.js/React structure', 'Reusable UI components', 'Clear folders & naming', 'TypeScript & robust patterns'],
            },
            {
              title: 'Data model & permissions',
              icon: 'shield',
              text:
                'A data model with constraints, indexes and clean permission logic so multi-user systems stay safe in practice.',
              points: ['Documented entities', 'Traceable RLS policies', 'Storage paths/policies', 'Audit/history (if needed)'],
            },
            {
              title: 'Deployment setup',
              icon: 'layers',
              text:
                'A setup that makes releases easy: environment variables, deploy concept, logging/monitoring basics, repeatability.',
              points: ['Staging/prod strategy', 'Preview deployments', 'Logging / error tracking', 'Rollback-friendly'],
            },
            {
              title: 'Documentation & handover',
              icon: 'layers',
              text:
                'Key parts documented: setup, decisions, data model, flows — so your team can take over.',
              points: ['Setup guide', 'Key decisions / ADR light', 'API conventions', '“How to deploy?”'],
            },
          ],
          noteTitle: 'Why we emphasize this',
          note:
            'Many projects feel “done” — until the first extension. Deliverables are the difference between a prototype and a product.',
        }

  const icon = (id: string) => {
    if (id === 'code') return <IconCode />
    if (id === 'shield') return <IconShield />
    return <IconLayers />
  }

  return (
    <>
      <SectionShell id="deliverables" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle}>
        <div className="grid gap-4 md:grid-cols-2">
          {t.cards.map((c) => (
            <GlassCard key={c.title} className="p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/70 shadow-sm">
                  {icon(c.icon)}
                </div>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold text-slate-900">{c.title}</div>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-700">{c.text}</p>
                </div>
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {c.points.map((p) => (
                  <div
                    key={p}
                    className="rounded-2xl border border-slate-900/10 bg-white/60 px-3 py-2 text-[12px] text-slate-700"
                  >
                    {p}
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

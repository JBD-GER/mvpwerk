import { DividerSoft, GlassCard, IconCode, IconLayers, IconShield, IconSpeed, Lang, SectionShell } from './_ui'

export default function SoftwareProcessSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Prozess',
          title: 'Ein Prozess, der Ergebnisse liefert — ohne Chaos',
          subtitle:
            'Transparenz entsteht durch Rhythmus. Wir arbeiten in klaren Iterationen: sichtbarer Fortschritt + saubere Basis.',
          steps: [
            {
              n: '01',
              title: 'Zielbild & Scope',
              text:
                'Wir definieren: Problem, Zielgruppe, Nutzen, MVP-Kern. Dazu grobe Datenobjekte und Rollen. Ergebnis: klare Prioritäten.',
              icon: 'layers',
            },
            {
              n: '02',
              title: 'Datenmodell & Architektur',
              text:
                'Tabellen/Entities, Beziehungen, Statusmodelle, Zugriffskonzepte. Hier entscheidet sich, ob das Produkt später stabil bleibt.',
              icon: 'shield',
            },
            {
              n: '03',
              title: 'UI Iteration (schnell sichtbar)',
              text:
                'Wir bauen die wichtigsten Screens zuerst — in echter App-Qualität, responsive. So wird früh erkennbar, ob es „passt“.',
              icon: 'speed',
            },
            {
              n: '04',
              title: 'API & Business-Logik',
              text:
                'Validierung, Fehlercodes, Idempotenz, Webhooks, Integrationen. Ergebnis: ein System, das zuverlässig mit anderen Systemen spricht.',
              icon: 'code',
            },
            {
              n: '05',
              title: 'Qualität & Betrieb',
              text:
                'Tests wo sinnvoll, Logging/Monitoring, Deployments, sichere Secrets. Ergebnis: Updates ohne Bauchschmerzen.',
              icon: 'shield',
            },
            {
              n: '06',
              title: 'Übergabe & Dokumentation',
              text:
                'Code-Struktur, Setup-Anleitung, Datenmodell, zentrale Entscheidungen. Ergebnis: Ihr Team kann übernehmen und weiterentwickeln.',
              icon: 'layers',
            },
          ],
          rhythmsTitle: 'Was „Transparenz“ praktisch bedeutet',
          rhythms: [
            {
              title: 'Konkrete Artefakte',
              text:
                'Statt vager Statusupdates gibt es sichtbare Ergebnisse: Screens, APIs, Datenmodelle, Deployments.',
            },
            {
              title: 'Kurze Feedback-Loops',
              text:
                'Lieber kleine Schritte mit klarer Richtung als große Lieferungen, die am Ziel vorbeigehen.',
            },
            {
              title: 'Technische Entscheidungen nachvollziehbar',
              text:
                'Warum genau dieser Ansatz? Wir dokumentieren die wichtigen Entscheidungen — damit später niemand raten muss.',
            },
            {
              title: 'Stabilität vor „Feature-Masse“',
              text:
                'Weniger, aber richtig. Ein System, das sauber läuft, ist die Basis für Geschwindigkeit in der Weiterentwicklung.',
            },
          ],
        }
      : {
          eyebrow: 'Process',
          title: 'A process that delivers — without chaos',
          subtitle:
            'Transparency comes from rhythm. We work in clear iterations: visible progress + a clean foundation.',
          steps: [
            { n: '01', title: 'Goal & scope', text: 'Define problem, audience, value, MVP core + rough data objects and roles. Outcome: clear priorities.', icon: 'layers' },
            { n: '02', title: 'Data model & architecture', text: 'Entities, relations, status models, access concepts. This decides long-term stability.', icon: 'shield' },
            { n: '03', title: 'UI iteration (visible early)', text: 'Build key screens first — real app quality, responsive. Early proof it “fits”.', icon: 'speed' },
            { n: '04', title: 'API & business logic', text: 'Validation, errors, idempotency, webhooks, integrations. Outcome: reliable system communication.', icon: 'code' },
            { n: '05', title: 'Quality & operations', text: 'Testing where useful, logging/monitoring, deploys, secrets. Outcome: safe updates.', icon: 'shield' },
            { n: '06', title: 'Handover & documentation', text: 'Code structure, setup guide, data model, key decisions. Outcome: your team can own it.', icon: 'layers' },
          ],
          rhythmsTitle: 'What “transparency” means in practice',
          rhythms: [
            { title: 'Concrete artifacts', text: 'Instead of vague updates you get tangible outputs: screens, APIs, models, deployments.' },
            { title: 'Short feedback loops', text: 'Small steps with clear direction beat big deliveries that miss the target.' },
            { title: 'Decisions are traceable', text: 'Why this approach? We document key decisions so nobody needs to guess later.' },
            { title: 'Stability over feature volume', text: 'Less, but right. A stable system enables speed later.' },
          ],
        }

  const icon = (id: string) => {
    if (id === 'code') return <IconCode />
    if (id === 'speed') return <IconSpeed />
    if (id === 'layers') return <IconLayers />
    return <IconShield />
  }

  return (
    <>
      <SectionShell id="prozess" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.steps.map((s) => (
            <GlassCard key={s.n} className="p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/70 shadow-sm">
                    {icon(s.icon)}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[12px] font-semibold text-slate-900">{s.title}</div>
                    <p className="mt-2 text-[12px] leading-relaxed text-slate-700">{s.text}</p>
                  </div>
                </div>
                <div className="text-[12px] font-semibold text-slate-900/40">{s.n}</div>
              </div>
            </GlassCard>
          ))}
        </div>

        <GlassCard className="mt-6 p-5 sm:p-6">
          <div className="text-[13px] font-semibold text-slate-900">{t.rhythmsTitle}</div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {t.rhythms.map((r) => (
              <div key={r.title} className="rounded-2xl border border-slate-900/10 bg-white/60 p-4">
                <div className="text-[12px] font-semibold text-slate-900">{r.title}</div>
                <p className="mt-1 text-[12px] leading-relaxed text-slate-700">{r.text}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </SectionShell>
      <DividerSoft />
    </>
  )
}

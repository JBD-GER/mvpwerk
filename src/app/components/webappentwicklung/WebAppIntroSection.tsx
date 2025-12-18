// src/app/components/webappentwicklung/WebAppIntroSection.tsx
import { GlassCard, Lang, SectionShell } from './_ui'

export default function WebAppIntroSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Worum es geht',
          title: 'Web App Entwicklung ist Prozess-Design – nicht „nur Frontend“.',
          subtitle:
            'Wenn Workflows, Rechte und Datenmodell stimmen, entsteht Software, die Teams täglich nutzen – und die später nicht teuer „neu gebaut“ werden muss.',
          cards: [
            {
              title: 'Workflows statt Seiten',
              text: 'Status-Modelle, klare Zuständigkeiten, Automationen und Logs – damit die App den Alltag beschleunigt.',
            },
            {
              title: 'Security ohne Friktion',
              text: 'Auth, Rollen, Mandantenfähigkeit und RLS – sauber umgesetzt, ohne dass sich alles „schwer“ anfühlt.',
            },
            {
              title: 'Betrieb ab Tag 1',
              text: 'Performance, Deployments, Monitoring, Backups und Fehlerhandling – damit Produktion stabil läuft.',
            },
          ],
        }
      : {
          eyebrow: 'What it’s about',
          title: 'Web app development is workflow design – not “just frontend”.',
          subtitle:
            'When workflows, permissions and data models are right, teams use the product daily – and you avoid expensive rebuilds.',
          cards: [
            {
              title: 'Workflows over pages',
              text: 'State models, ownership, automations and logs – so the app accelerates daily work.',
            },
            {
              title: 'Security without friction',
              text: 'Auth, roles, multi-tenancy and RLS – implemented cleanly without feeling heavy.',
            },
            {
              title: 'Ops from day one',
              text: 'Performance, deployments, monitoring, backups and error handling – for stable production.',
            },
          ],
        }

  return (
    <SectionShell eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle}>
      <div className="grid gap-4 md:grid-cols-3">
        {t.cards.map((c) => (
          <GlassCard key={c.title} className="p-6">
            <div className="text-base font-medium text-slate-900">{c.title}</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.text}</p>
          </GlassCard>
        ))}
      </div>
    </SectionShell>
  )
}

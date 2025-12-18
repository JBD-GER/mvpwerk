// src/app/components/kientwicklung/AiIntroSection.tsx
import { GlassCard, Lang, SectionShell } from './_ui'

export default function AiIntroSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Worum es wirklich geht',
          title: 'KI-Entwicklung ist Produktentwicklung – nur mit zusätzlichem Risiko.',
          subtitle:
            'Damit KI im Alltag hilft, braucht es mehr als ein Modell: Datenzugriff, Berechtigungen, UX, Evals, Monitoring, Kostenkontrolle und klare Ziele.',
          cards: [
            {
              title: 'Mehr Wert, weniger Support',
              text:
                'Automatisierte Antworten, Assistenz beim Schreiben, strukturierte Zusammenfassungen – aber nur, wenn Qualität messbar ist.',
            },
            {
              title: 'Ihre Daten sind der Hebel',
              text:
                'RAG/Wissenssuche bringt echte Relevanz: Dokumente, CRM, Tickets, Policies – mit Quellen & Zugriffskontrolle.',
            },
            {
              title: 'Produktion ≠ Playground',
              text:
                'Latenz, Tokenkosten, Rate-Limits, Fehlerfälle, Logging und Datenschutz: Wir bauen das von Anfang an mit ein.',
            },
          ],
        }
      : {
          eyebrow: 'What it’s really about',
          title: 'AI development is product development – with extra risk.',
          subtitle:
            'For AI to help day-to-day, you need more than a model: data access, permissions, UX, evals, monitoring, cost control and clear goals.',
          cards: [
            {
              title: 'More value, less support',
              text:
                'Automated replies, writing assistance, structured summaries – but only if quality is measurable.',
            },
            {
              title: 'Your data is the lever',
              text:
                'RAG / knowledge search creates relevance: docs, CRM, tickets, policies – with citations & access control.',
            },
            {
              title: 'Production ≠ playground',
              text:
                'Latency, token costs, rate limits, edge cases, logging and privacy: we design this from day one.',
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

// src/app/components/kientwicklung/AiUseCasesSection.tsx
import { GlassCard, Lang, SectionShell } from './_ui'

type UseCase = { title: string; text: string; bullets: string[] }

export default function AiUseCasesSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Use Cases',
          title: 'Typische KI-Anwendungen für B2B-Teams',
          subtitle:
            'KI lohnt sich besonders dort, wo Text, Wissen, Entscheidungen oder repetitive Schritte im Prozess stecken.',
          items: [
            {
              title: 'Support & Service',
              text: 'Antwortvorschläge, Wissenssuche, Ticket-Zusammenfassungen, Next Steps – mit Quellen.',
              bullets: ['Ticket-Deflection', 'Schnellere Antworten', 'Einheitlicher Ton', 'Weniger Eskalationen'],
            },
            {
              title: 'Sales & Angebote',
              text: 'Lead-Qualifizierung, Angebotsentwürfe, Einwandbehandlung, Gesprächsnotizen → CRM.',
              bullets: ['Angebotszeit senken', 'Mehr Konsistenz', 'CRM sauber halten', 'Follow-ups automatisieren'],
            },
            {
              title: 'Operations & Projekte',
              text: 'Projektbriefings strukturieren, Aufgaben ableiten, Statusberichte, Meeting-Summaries.',
              bullets: ['Weniger Overhead', 'Bessere Übergaben', 'Mehr Transparenz', 'Weniger Kontextverlust'],
            },
            {
              title: 'HR & Onboarding',
              text: 'Policy-Q&A, Onboarding-Checklisten, Dokumente finden, interne Fragen beantworten.',
              bullets: ['Schnelleres Onboarding', 'Weniger Rückfragen', 'Rollenbasierter Zugriff', 'Dokumente aktuell halten'],
            },
            {
              title: 'Finance & Admin',
              text: 'Beleg-Interpretation, Zusammenfassungen, Textbausteine, Erklärungen & Vorprüfungen.',
              bullets: ['Zeit sparen', 'Fehler reduzieren', 'Standardisieren', 'Auditierbar dokumentieren'],
            },
            {
              title: 'Produkt & Wissen',
              text: 'Interne Doku-Copilot, Release Notes, Changelogs, QA-Support, Spec-Assist.',
              bullets: ['Weniger Wissenssilos', 'Schneller schreiben', 'Bessere Konsistenz', 'Quellenpflicht'],
            },
          ] as UseCase[],
        }
      : {
          eyebrow: 'Use cases',
          title: 'Typical AI applications for B2B teams',
          subtitle:
            'AI pays off where text, knowledge, decisions or repetitive steps are embedded in your workflows.',
          items: [
            {
              title: 'Support & Service',
              text: 'Reply drafts, knowledge search, ticket summaries, next steps – with citations.',
              bullets: ['Ticket deflection', 'Faster replies', 'Consistent tone', 'Fewer escalations'],
            },
            {
              title: 'Sales & Quoting',
              text: 'Lead qualification, quote drafts, objection handling, call notes → CRM.',
              bullets: ['Shorter quote cycle', 'More consistency', 'Cleaner CRM', 'Automated follow-ups'],
            },
            {
              title: 'Operations & Projects',
              text: 'Structure briefings, derive tasks, status reports, meeting summaries.',
              bullets: ['Less overhead', 'Better handoffs', 'More clarity', 'Less context loss'],
            },
            {
              title: 'HR & Onboarding',
              text: 'Policy Q&A, onboarding checklists, find docs, answer internal questions.',
              bullets: ['Faster onboarding', 'Fewer questions', 'Role-based access', 'Up-to-date docs'],
            },
            {
              title: 'Finance & Admin',
              text: 'Invoice/receipt interpretation, summaries, templates, pre-checks.',
              bullets: ['Time saved', 'Fewer errors', 'Standardization', 'Auditability'],
            },
            {
              title: 'Product & Knowledge',
              text: 'Internal doc copilot, release notes, changelogs, QA support, spec assist.',
              bullets: ['Less knowledge silos', 'Write faster', 'More consistency', 'Citation requirement'],
            },
          ] as UseCase[],
        }

  return (
    <SectionShell id="usecases" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle}>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {t.items.map((u) => (
          <GlassCard key={u.title} className="p-6">
            <div className="text-base font-medium text-slate-900">{u.title}</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{u.text}</p>
            <ul className="mt-4 grid gap-2 text-sm text-slate-700">
              {u.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full border border-white/60 bg-white/70 text-[11px] shadow-sm">
                    ✓
                  </span>
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
    </SectionShell>
  )
}

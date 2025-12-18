// src/app/components/webappentwicklung/WebAppGlossarySection.tsx
import { GlassCard, Lang, SectionShell } from './_ui'

type Item = { term: string; def: string }

export default function WebAppGlossarySection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Glossar',
          title: 'Begriffe, die in Web App Projekten ständig fallen',
          subtitle:
            'Kurz & praxisnah – damit Stakeholder und Dev-Team die gleichen Wörter benutzen.',
          items: [
            { term: 'MVP', def: 'Minimal Viable Product – kleinster sinnvoller Scope, um echte Nutzerfeedbacks zu bekommen.' },
            { term: 'RLS', def: 'Row Level Security – Datenzugriff wird auf DB-Ebene pro Nutzer/Team/Mandant abgesichert.' },
            { term: 'Idempotenz', def: 'Doppelte Requests (z. B. doppelter Klick) führen nicht zu doppelten Datensätzen.' },
            { term: 'Webhook', def: 'Server-Callback eines Drittanbieters (z. B. Payment), der Events zuverlässig meldet.' },
            { term: 'State Model', def: 'Definierte Status eines Objekts (z. B. Angebot → beauftragt → fakturiert) plus Regeln/Übergänge.' },
            { term: 'Observability', def: 'Logs, Metriken, Traces – um Fehler, Performance und Kosten in Produktion zu verstehen.' },
          ] as Item[],
        }
      : {
          eyebrow: 'Glossary',
          title: 'Terms you’ll constantly hear in web app projects',
          subtitle:
            'Short and practical – so stakeholders and the dev team speak the same language.',
          items: [
            { term: 'MVP', def: 'Minimal Viable Product – smallest useful scope to get real user feedback.' },
            { term: 'RLS', def: 'Row Level Security – database-level access control per user/team/tenant.' },
            { term: 'Idempotency', def: 'Duplicate requests (e.g., double click) don’t create duplicate records.' },
            { term: 'Webhook', def: 'Server callback from a provider (e.g., payments) that delivers events reliably.' },
            { term: 'State model', def: 'Defined statuses (quote → ordered → invoiced) plus rules/transitions.' },
            { term: 'Observability', def: 'Logs, metrics, traces – to understand errors and performance in production.' },
          ] as Item[],
        }

  return (
    <SectionShell id="glossar" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle}>
      <div className="grid gap-4 md:grid-cols-2">
        {t.items.map((it) => (
          <GlassCard key={it.term} className="p-6">
            <div className="text-base font-medium text-slate-900">{it.term}</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{it.def}</p>
          </GlassCard>
        ))}
      </div>
    </SectionShell>
  )
}

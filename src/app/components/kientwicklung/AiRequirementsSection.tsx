// src/app/components/kientwicklung/AiRequirementsSection.tsx
import { CheckList, GlassCard, Lang, SectionShell } from './_ui'

type Group = {
  title: string
  subtitle: string
  items: string[]
}

export default function AiRequirementsSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Anforderungen',
          title: 'Die 7 Zielbereiche, die KI-Projekte erfolgreich machen',
          subtitle:
            'Wenn diese Punkte einmal sauber festgelegt sind, wird die Umsetzung schnell, planbar und skalierbar. Genau hier liegt der Unterschied zwischen „KI-Demo“ und „KI-Produkt“.',
          groups: [
            {
              title: '1) Business-Ziel & Erfolgsmessung (KPIs)',
              subtitle: 'Wofür genau bauen wir KI – und woran erkennen wir Erfolg?',
              items: [
                'Klarer Use-Case (z. B. Support reduzieren, Angebotszeit senken, Wissenszugriff beschleunigen)',
                'Messgröße(n): Zeitersparnis, Ticket-Deflection, Conversion, Qualitätsscore, NPS',
                'Definition „guter Antwort“ (Ton, Struktur, Quellen, Handlungsempfehlung)',
                'Grenzen: Was darf die KI niemals tun/behaupten?',
              ],
            },
            {
              title: '2) Daten & Wissensquellen (RAG readiness)',
              subtitle: 'Welche Daten dürfen rein – und in welcher Qualität liegen sie vor?',
              items: [
                'Quellen: Dokumente, Wiki, CRM, Tickets, Policies, Verträge, Produktdaten',
                'Datenqualität: Aktualität, Dubletten, Versionierung, klare Eigentümer',
                'Zugriff: wer darf was sehen (Rollen, Mandanten, Teams)?',
                'Pflegeprozess: Wie bleiben Inhalte aktuell (Owner, Review, Archiv)?',
              ],
            },
            {
              title: '3) UX & Workflow-Einbettung',
              subtitle: 'KI muss in den Prozess – nicht daneben.',
              items: [
                'Eingabemaske & Output-Formate (Kurz/Detail, Copy-Buttons, Templates)',
                'Kontextsignale: Kunde, Projekt, Ticket, Produkt, Sprache, Rolle',
                'Human-in-the-Loop: Freigabe/Review vor Versand oder Speicherung',
                'Fehler-UX: Fallback, „Ich weiß es nicht“, Quellen fehlen, Retry',
              ],
            },
            {
              title: '4) Security, Rechte & Compliance',
              subtitle: 'B2B braucht Kontrolle: Berechtigung, Audit, Datenschutz.',
              items: [
                'Rollen/Rechte: Zugriff auf Quellen + KI-Ausgabe (RLS/Mandantenfähigkeit)',
                'PII/Datenschutz: Redaction, Logging-Strategie, Aufbewahrung',
                'Auditability: wer hat was angefragt, welche Quellen, welche Antwort?',
                'Policy: welche Tools/APIs darf die KI nutzen (Allowlist)?',
              ],
            },
            {
              title: '5) Qualität & Evals (stabil über Zeit)',
              subtitle: 'Ohne Evals wird KI bei jedem Update unberechenbar.',
              items: [
                'Testset mit realen Fragen & erwarteten Antworten/Quellen',
                'Automatische Checks: Halluzination, Quellenpflicht, Format, Tonalität',
                'Regression-Tests bei Prompt/Model-Updates',
                'A/B-Tests + Feedback-Loop (Daumen hoch/runter, Labeling)',
              ],
            },
            {
              title: '6) Kosten, Latenz & Betriebsfähigkeit',
              subtitle: 'Produktion braucht Budgetgrenzen und Monitoring.',
              items: [
                'Token-Budget pro Request/User/Monat',
                'Latenz-Zielwerte und Caching-Strategien',
                'Rate-Limits, Retries, Fallback-Modelle',
                'Observability: Traces, Fehlerquoten, Kosten, Response-Zeiten',
              ],
            },
            {
              title: '7) Ownership & Weiterentwicklung',
              subtitle: 'Wer besitzt Prompts, Evals, Datenpipeline – und wie geht’s weiter?',
              items: [
                'Prompt-Versionierung + Freigabeprozess',
                'Evals-Ownership: wer pflegt Testfälle bei Produktänderungen?',
                'Rollout-Plan: Pilotgruppe → breiter Rollout → Optimierung',
                'Roadmap: neue Use-Cases, Automationen, Integrationen',
              ],
            },
          ] as Group[],
        }
      : {
          eyebrow: 'Requirements',
          title: 'The 7 goal areas that make AI projects successful',
          subtitle:
            'Once these are defined, delivery becomes fast and predictable. This is the difference between an “AI demo” and a real “AI product”.',
          groups: [
            {
              title: '1) Business goal & success metrics (KPIs)',
              subtitle: 'What exactly are we building – and how do we measure success?',
              items: [
                'Clear use case (reduce support load, speed up quoting, faster knowledge access)',
                'Metrics: time saved, ticket deflection, conversion, quality score, NPS',
                'Definition of “good answer” (tone, structure, citations, recommended actions)',
                'Boundaries: what the AI must never do/claim',
              ],
            },
            {
              title: '2) Data & knowledge sources (RAG readiness)',
              subtitle: 'What data is allowed – and how good is it?',
              items: [
                'Sources: docs, wiki, CRM, tickets, policies, contracts, product data',
                'Quality: freshness, duplicates, versioning, clear ownership',
                'Access: who may see what (roles, tenants, teams)?',
                'Maintenance: how content stays up to date (owners, review, archive)',
              ],
            },
            {
              title: '3) UX & workflow embedding',
              subtitle: 'AI must live inside the workflow – not next to it.',
              items: [
                'Input & output formats (short/detail, copy actions, templates)',
                'Context signals: customer, project, ticket, product, language, role',
                'Human-in-the-loop approvals before sending/saving',
                'Failure UX: fallback, “I don’t know”, missing sources, retry',
              ],
            },
            {
              title: '4) Security, permissions & compliance',
              subtitle: 'B2B needs control: permissions, auditability, privacy.',
              items: [
                'Roles/permissions across sources + outputs (RLS / multi-tenant)',
                'PII/privacy: redaction, logging strategy, retention',
                'Audit: who asked what, which sources, which answer?',
                'Policy: which tools/APIs the AI may use (allowlist)',
              ],
            },
            {
              title: '5) Quality & evals (stable over time)',
              subtitle: 'Without evals, every update becomes risky.',
              items: [
                'Test set with real questions and expected answers/citations',
                'Automated checks: hallucinations, citation requirement, format, tone',
                'Regression tests for prompt/model updates',
                'A/B tests + feedback loop (thumbs up/down, labeling)',
              ],
            },
            {
              title: '6) Cost, latency & operability',
              subtitle: 'Production needs budgets and monitoring.',
              items: [
                'Token budget per request/user/month',
                'Latency targets and caching strategies',
                'Rate limits, retries, fallback models',
                'Observability: traces, error rates, costs, response time',
              ],
            },
            {
              title: '7) Ownership & iteration',
              subtitle: 'Who owns prompts, evals and data pipeline – and what’s next?',
              items: [
                'Prompt versioning & review process',
                'Evals ownership: who updates test cases when product changes?',
                'Rollout plan: pilot → broad rollout → optimization',
                'Roadmap: new use cases, automations, integrations',
              ],
            },
          ] as Group[],
        }

  return (
    <SectionShell id="anforderungen" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle}>
      <div className="grid gap-4">
        {t.groups.map((g) => (
          <GlassCard key={g.title} className="p-6">
            <div className="flex flex-col gap-1">
              <div className="text-base font-medium text-slate-900">{g.title}</div>
              <div className="text-sm text-slate-600">{g.subtitle}</div>
            </div>
            <div className="mt-4">
              <CheckList items={g.items} />
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionShell>
  )
}

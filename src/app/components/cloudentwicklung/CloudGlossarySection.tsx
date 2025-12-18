// src/app/components/cloudentwicklung/CloudGlossarySection.tsx
import { GlassCard, Lang, Section } from './_ui'

type Item = { term: string; def: string }

export default function CloudGlossarySection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Glossar',
          title: 'Cloud-Begriffe, die wirklich relevant sind',
          subtitle:
            'Kurz & praxisnah – damit im Team keine Missverständnisse bei SLO, IaC oder Rollback entstehen.',
          items: [
            { term: 'SLO', def: 'Service Level Objective: Zielwerte für Zuverlässigkeit (z. B. 99,9% Verfügbarkeit) plus Messung.' },
            { term: 'Observability', def: 'Logs, Metrics, Tracing: Betrieb wird messbar, Debugging wird schneller.' },
            { term: 'IaC', def: 'Infrastructure as Code: Infrastruktur wird versioniert, reviewbar und reproduzierbar.' },
            { term: 'Rollback', def: 'Definierter Rücksprung auf stabile Version – inklusive Strategie für Datenbank-Migrationen.' },
            { term: 'Least Privilege', def: 'Nur die minimal notwendigen Rechte – reduziert Risiko und macht Änderungen auditierbar.' },
            { term: 'FinOps', def: 'Praxis für Kostenkontrolle in der Cloud: Tagging, Budgets, Ownership, Optimierung.' },
          ] as Item[],
        }
      : {
          eyebrow: 'Glossary',
          title: 'Cloud terms that actually matter',
          subtitle:
            'Short and practical — so SLO, IaC and rollback mean the same thing to everyone.',
          items: [
            { term: 'SLO', def: 'Service Level Objective: target reliability metrics (e.g., 99.9% uptime) plus measurement.' },
            { term: 'Observability', def: 'Logs, metrics, tracing: operations become measurable and debugging becomes faster.' },
            { term: 'IaC', def: 'Infrastructure as Code: versioned, reviewable, reproducible infrastructure.' },
            { term: 'Rollback', def: 'Defined way back to a stable version — including database migration strategy.' },
            { term: 'Least privilege', def: 'Minimal necessary permissions — reduces risk and improves auditability.' },
            { term: 'FinOps', def: 'Cloud cost control practice: tagging, budgets, ownership, optimization.' },
          ] as Item[],
        }

  return (
    <Section id="glossar" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} tone="light">
      <div className="grid gap-4 md:grid-cols-2">
        {t.items.map((it) => (
          <GlassCard key={it.term} className="p-6">
            <div className="text-base font-medium text-slate-900">{it.term}</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{it.def}</p>
          </GlassCard>
        ))}
      </div>
    </Section>
  )
}

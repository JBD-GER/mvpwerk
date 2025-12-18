// src/app/components/kientwicklung/AiGlossarySection.tsx
import { GlassCard, Lang, SectionShell } from './_ui'

type Item = { term: string; def: string }

export default function AiGlossarySection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Glossar',
          title: 'Begriffe, die in KI-Projekten ständig auftauchen',
          subtitle:
            'Kurz & praxisnah – damit alle im Team dasselbe meinen, wenn über „RAG“, „Evals“ oder „Agenten“ gesprochen wird.',
          items: [
            {
              term: 'LLM',
              def: 'Large Language Model – ein Modell, das Text versteht/generiert. In Produkten zählt: Qualität, Kosten, Latenz, Sicherheit.',
            },
            {
              term: 'RAG',
              def: 'Retrieval Augmented Generation – das Modell bekommt relevante Ausschnitte aus Ihren Daten + soll Quellen nennen.',
            },
            {
              term: 'Embeddings',
              def: 'Vektorrepräsentationen von Texten für semantische Suche (ähnliche Bedeutung statt Keyword-Match).',
            },
            {
              term: 'Evals',
              def: 'Evaluationen/Testfälle, um KI-Antworten automatisch zu bewerten und Regressionen zu verhindern.',
            },
            {
              term: 'Guardrails',
              def: 'Regeln/Checks, die Output begrenzen: Quellenpflicht, Format, Ton, Sicherheits-Policies, Tool-Allowlist.',
            },
            {
              term: 'Human-in-the-Loop',
              def: 'Freigabeprozesse: KI macht Vorschläge, Menschen bestätigen vor Versand/Speicherung/Aktion.',
            },
          ] as Item[],
        }
      : {
          eyebrow: 'Glossary',
          title: 'Terms you’ll constantly hear in AI projects',
          subtitle:
            'Short and practical – so everyone means the same thing when talking about RAG, evals or agents.',
          items: [
            {
              term: 'LLM',
              def: 'Large Language Model – understands/generates text. In products: quality, cost, latency and safety matter.',
            },
            {
              term: 'RAG',
              def: 'Retrieval Augmented Generation – the model gets relevant snippets from your data and should cite sources.',
            },
            {
              term: 'Embeddings',
              def: 'Vector representations for semantic search (meaning-based instead of keyword matching).',
            },
            {
              term: 'Evals',
              def: 'Evaluation test cases to score AI outputs automatically and prevent regressions.',
            },
            {
              term: 'Guardrails',
              def: 'Rules/checks limiting output: citations, format, tone, safety policies, tool allowlist.',
            },
            {
              term: 'Human-in-the-loop',
              def: 'Approval flows: AI suggests, humans approve before sending/saving/acting.',
            },
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

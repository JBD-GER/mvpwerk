// src/app/components/kientwicklung/AiQualitySection.tsx
import { CheckList, GlassCard, Lang, SectionShell } from './_ui'

export default function AiQualitySection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Qualität & Sicherheit',
          title: 'Guardrails + Evals: damit KI planbar wird',
          subtitle:
            'KI ohne Qualitätssicherung ist wie Backend ohne Tests. Wir liefern Checks, Monitoring und klare Grenzen.',
          leftTitle: 'Qualitäts-Bausteine',
          left: [
            'Evals/Testset mit echten Fällen aus Ihrem Alltag',
            'Regression-Checks für Prompt- und Model-Updates',
            'Quellenpflicht (bei RAG) + „I don’t know“ Regeln',
            'Format- und Tonalitätsregeln (Brand Voice)',
          ],
          rightTitle: 'Safety & Betrieb',
          right: [
            'PII-Redaktion & Logging-Policy (was wird gespeichert?)',
            'Tool-Allowlist: welche Aktionen darf die KI ausführen?',
            'Kostenlimits, Rate-Limits, Fallbacks',
            'Observability: Tracing, Alerts, Fehlerquoten',
          ],
        }
      : {
          eyebrow: 'Quality & safety',
          title: 'Guardrails + evals: making AI predictable',
          subtitle:
            'AI without quality assurance is like a backend without tests. We deliver checks, monitoring and clear boundaries.',
          leftTitle: 'Quality building blocks',
          left: [
            'Evals/test set with real cases from your workflow',
            'Regression checks for prompt and model updates',
            'Citation requirement (RAG) + “I don’t know” rules',
            'Format & tone rules (brand voice)',
          ],
          rightTitle: 'Safety & operations',
          right: [
            'PII redaction & logging policy (what is stored?)',
            'Tool allowlist: which actions the AI may execute',
            'Cost limits, rate limits, fallbacks',
            'Observability: tracing, alerts, error rates',
          ],
        }

  return (
    <SectionShell id="quality" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle}>
      <div className="grid gap-4 md:grid-cols-2">
        <GlassCard className="p-6">
          <div className="text-base font-medium text-slate-900">{t.leftTitle}</div>
          <div className="mt-4">
            <CheckList items={t.left} />
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="text-base font-medium text-slate-900">{t.rightTitle}</div>
          <div className="mt-4">
            <CheckList items={t.right} />
          </div>
        </GlassCard>
      </div>
    </SectionShell>
  )
}

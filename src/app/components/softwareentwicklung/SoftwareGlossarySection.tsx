import { GlassCard, Lang, SectionShell } from './_ui'

export default function SoftwareGlossarySection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Glossar',
          title: 'Begriffe, die Entscheider wirklich kennen sollten',
          subtitle:
            'Kein Lexikon — nur die Begriffe, die bei Software-Projekten am meisten Kosten, Zeit oder Risiko verursachen, wenn sie unklar sind.',
          items: [
            {
              term: 'MVP',
              desc:
                'Der kleinste sinnvolle Funktionsumfang, der echten Nutzen liefert. Nicht „halb fertig“, sondern bewusst fokussiert.',
            },
            {
              term: 'RLS (Row Level Security)',
              desc:
                'Sicherheit direkt in der Datenbank: Jede Query sieht nur Daten, die der Nutzer sehen darf. Wichtig für Multi-User Systeme.',
            },
            {
              term: 'Idempotenz',
              desc:
                'Ein Request kann mehrfach gesendet werden, ohne dass unerwünschte Duplikate entstehen. Wichtig bei Payments/Webhooks.',
            },
            {
              term: 'Webhooks',
              desc:
                'Ereignisse, die Systeme verbinden. „Wenn X passiert, sende Y“. Sauberes Handling braucht Retries, Signaturen und Logging.',
            },
            {
              term: 'Observability',
              desc:
                'Logs, Metriken, Traces: Sie sehen, was passiert. Ohne das werden Fehler teuer, weil sie zu spät entdeckt werden.',
            },
            {
              term: 'Constraints',
              desc:
                'Regeln in der DB (z.B. unique, foreign keys). Sie verhindern inkonsistente Daten, bevor sie entstehen.',
            },
            {
              term: 'Staging',
              desc:
                'Eine Test-Umgebung, die produktionsnah ist. Dort werden Releases geprüft, bevor sie live gehen.',
            },
            {
              term: 'Feature Flags',
              desc:
                'Funktionen kontrolliert aktivieren/deaktivieren, z.B. für Testnutzer. Hilft bei sicheren Rollouts.',
            },
            {
              term: 'Multi-Tenant',
              desc:
                'Mehrere Firmen/Accounts in einem System, sauber getrennt. Erfordert klare Architektur, Rechte und Datenmodell.',
            },
            {
              term: 'DX (Developer Experience)',
              desc:
                'Wie gut das Projekt für Entwickler wartbar ist: Setup, Konventionen, Struktur, Tests, Dokumentation.',
            },
          ],
          outroTitle: 'Warum das relevant ist',
          outro:
            'Viele „Software-Probleme“ sind eigentlich Begriffs-Probleme. Wer MVP, Rechte, Datenmodell und Betrieb sauber versteht, spart massiv Budget.',
        }
      : {
          eyebrow: 'Glossary',
          title: 'Terms decision makers should actually know',
          subtitle:
            'Not a dictionary — just the terms that cause the most cost, time or risk if misunderstood in software projects.',
          items: [
            { term: 'MVP', desc: 'The smallest meaningful scope delivering real value. Not “half done”, but intentionally focused.' },
            { term: 'RLS (Row Level Security)', desc: 'Database-level security: each query only sees allowed rows. Key for multi-user apps.' },
            { term: 'Idempotency', desc: 'A request can be sent multiple times without creating duplicates. Critical for payments/webhooks.' },
            { term: 'Webhooks', desc: 'Events connecting systems. Needs retries, signatures and logging to be reliable.' },
            { term: 'Observability', desc: 'Logs, metrics, traces: you can see what’s happening. Without it, issues become expensive.' },
            { term: 'Constraints', desc: 'DB rules (unique, foreign keys) preventing inconsistent data before it exists.' },
            { term: 'Staging', desc: 'A production-like test environment to validate releases before going live.' },
            { term: 'Feature flags', desc: 'Toggle features on/off safely (e.g. for testers). Helps controlled rollouts.' },
            { term: 'Multi-tenant', desc: 'Multiple companies/accounts in one system, cleanly isolated. Requires solid architecture and permissions.' },
            { term: 'DX (Developer Experience)', desc: 'How maintainable the project is: setup, conventions, structure, tests, docs.' },
          ],
          outroTitle: 'Why this matters',
          outro:
            'Many “software problems” are actually language problems. If MVP, permissions, data model and operations are clear, you save a lot of budget.',
        }

  return (
    <SectionShell id="glossar" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle}>
      <div className="grid gap-4 md:grid-cols-2">
        {t.items.map((x) => (
          <GlassCard key={x.term} className="p-5 sm:p-6">
            <div className="text-[13px] font-semibold text-slate-900">{x.term}</div>
            <p className="mt-2 text-[13px] leading-relaxed text-slate-700">{x.desc}</p>
          </GlassCard>
        ))}
      </div>

      <div className="mt-6 rounded-3xl border border-slate-900/10 bg-white/60 p-5 text-[13px] leading-relaxed text-slate-700 shadow-sm backdrop-blur-xl">
        <div className="font-semibold text-slate-900">{t.outroTitle}</div>
        <div className="mt-2">{t.outro}</div>
      </div>
    </SectionShell>
  )
}

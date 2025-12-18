// src/app/components/cloudentwicklung/CloudCTASection.tsx
import Link from 'next/link'
import { GlassCard, Lang, Section, CheckList, Split } from './_ui'

export default function CloudCTASection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Start',
          title: 'Wollen wir Ihre Cloud-Basis in 1–2 Schritten stabil machen?',
          subtitle:
            'Schreiben Sie kurz, wo es gerade hakt. Sie erhalten einen konkreten Vorschlag (Scope, Risiken, nächster Schritt) — ohne Marketing-Nebel.',
          cta1: 'Kontakt aufnehmen',
          cta2: 'Zu den Anforderungen',
          boxTitle: 'Was Sie in die Nachricht schreiben können',
          bullets: [
            'Produkt/Service + kritische Flows (z. B. Checkout, Login, Uploads)',
            'Aktueller Deploy-Prozess (Staging? Rollback? Migrationen?)',
            'Monitoring/Alerts (was sehen Sie heute?)',
            'Kosten-Situation (Budgets/Tags vorhanden?)',
          ],
        }
      : {
          eyebrow: 'Start',
          title: 'Shall we stabilize your cloud foundation in 1–2 steps?',
          subtitle:
            'Tell us where it hurts right now. You’ll get a concrete proposal (scope, risks, next step) — without marketing fog.',
          cta1: 'Get in touch',
          cta2: 'Back to requirements',
          boxTitle: 'What to include in your message',
          bullets: [
            'Product/service + critical flows (checkout, login, uploads)',
            'Current deploy process (staging? rollback? migrations?)',
            'Monitoring/alerts (what do you see today?)',
            'Cost situation (budgets/tags in place?)',
          ],
        }

  return (
    <Section eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} tone="light">
      <Split
        left={
          <GlassCard className="p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-200/70"
              >
                {t.cta1}
              </Link>
              <Link
                href="#anforderungen"
                className="inline-flex items-center justify-center rounded-full border border-white/60 bg-white/70 px-5 py-3 text-sm font-medium text-slate-900 shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200/70"
              >
                {t.cta2}
              </Link>
            </div>
          </GlassCard>
        }
        right={
          <GlassCard className="p-6">
            <div className="text-base font-medium text-slate-900">{t.boxTitle}</div>
            <div className="mt-4">
              <CheckList items={t.bullets} />
            </div>
          </GlassCard>
        }
      />
    </Section>
  )
}

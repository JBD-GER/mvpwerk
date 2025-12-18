// src/app/components/webappentwicklung/WebAppCTASection.tsx
import Link from 'next/link'
import { GlassCard, Lang, SectionShell } from './_ui'

export default function WebAppCTASection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Start',
          title: 'Wollen wir Ihren Web-App Scope definieren?',
          subtitle:
            'Schreiben Sie kurz: Prozess, Nutzerrollen, Datenobjekte und Integrationen. Sie erhalten einen konkreten Vorschlag (MVP-Scope, Risiken, nächster Schritt).',
          cta1: 'Kontakt aufnehmen',
          cta2: 'Zu den Anforderungen',
          boxTitle: 'Was Sie in die Nachricht schreiben können',
          boxBullets: [
            'Kernprozess (z. B. Angebot → Auftrag → Rechnung)',
            'Rollen/Mandanten (Admin, Team, Kundenportal)',
            'Datenobjekte (Kunden, Projekte, Dokumente, Status)',
            'Integrationen (Payments, E-Mail, Tools) + KPI-Ziel',
          ],
        }
      : {
          eyebrow: 'Start',
          title: 'Shall we define your web app scope?',
          subtitle:
            'Send: workflow, user roles, data objects and integrations. You’ll get a concrete proposal (MVP scope, risks, next step).',
          cta1: 'Get in touch',
          cta2: 'Back to requirements',
          boxTitle: 'What to include in your message',
          boxBullets: [
            'Core workflow (quote → order → invoice)',
            'Roles/tenants (admin, team, customer portal)',
            'Data objects (customers, projects, documents, states)',
            'Integrations (payments, email, tools) + KPI target',
          ],
        }

  return (
    <SectionShell eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle}>
      <div className="grid gap-4 md:grid-cols-2">
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

        <GlassCard className="p-6">
          <div className="text-base font-medium text-slate-900">{t.boxTitle}</div>
          <ul className="mt-4 grid gap-2 text-sm text-slate-700">
            {t.boxBullets.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full border border-white/60 bg-white/70 text-[11px] shadow-sm">
                  ✓
                </span>
                <span className="leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </SectionShell>
  )
}

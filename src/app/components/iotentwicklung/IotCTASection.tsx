// src/app/components/iotentwicklung/IotCTASection.tsx
import Link from 'next/link'
import { GlassCard, Lang, SectionShell } from './_ui'

export default function IotCTASection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Start',
          title: 'Wollen wir Ihren IoT-Pilot definieren?',
          subtitle:
            'Schreiben Sie kurz Geräte-Typ, Netz/Umgebung, gewünschte KPIs und Integrationen. Sie erhalten einen konkreten Vorschlag (Scope, Risiken, nächster Schritt).',
          cta1: 'Kontakt aufnehmen',
          cta2: 'Zu den Anforderungen',
          boxTitle: 'Was Sie in die Nachricht schreiben können',
          boxBullets: [
            'Geräte/Flotte (Anzahl, Typ, Firmware-Stand)',
            'Netz/Umgebung (WLAN/LAN/Mobilfunk/LoRaWAN, Offline-Anteile)',
            'Daten (Messwerte/Events) + Frequenz + KPI-Ziel',
            'Integrationen (Ticket/CRM/ERP) + Alarmierung (SMS/Push)',
          ],
        }
      : {
          eyebrow: 'Start',
          title: 'Shall we define your IoT pilot?',
          subtitle:
            'Send device type, network/environment, target KPIs and integrations. You’ll get a concrete proposal (scope, risks, next steps).',
          cta1: 'Get in touch',
          cta2: 'Back to requirements',
          boxTitle: 'What to include in your message',
          boxBullets: [
            'Devices/fleet (count, type, firmware situation)',
            'Network/environment (WiFi/LAN/cellular/LoRaWAN, offline share)',
            'Data (metrics/events) + frequency + KPI target',
            'Integrations (ticket/CRM/ERP) + alerting (SMS/push)',
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

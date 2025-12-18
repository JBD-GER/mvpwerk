// src/app/components/iotentwicklung/IotGlossarySection.tsx
import { GlassCard, Lang, SectionShell } from './_ui'

type Item = { term: string; def: string }

export default function IotGlossarySection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Glossar',
          title: 'Begriffe, die in IoT-Projekten ständig auftauchen',
          subtitle:
            'Kurz & praxisnah – damit im Team alle dasselbe meinen, wenn über QoS, OTA oder Telemetrie gesprochen wird.',
          items: [
            {
              term: 'MQTT',
              def: 'Leichtgewichtiges Publish/Subscribe-Protokoll für Gerätekommunikation. Wichtig: QoS, Topics, Sessions, Retain.',
            },
            {
              term: 'QoS',
              def: 'Quality of Service: Zustellgarantien bei MQTT (z. B. „at most once“ vs „at least once“).',
            },
            {
              term: 'Telemetry vs Event vs State',
              def: 'Telemetrie = Messwerte über Zeit, Event = Ereignis, State = aktueller Zustand. Die Trennung macht Systeme verständlich.',
            },
            {
              term: 'Provisioning',
              def: 'Onboarding neuer Geräte: Identity, Zertifikate/Keys, Zuweisung, Initial-Konfiguration.',
            },
            {
              term: 'OTA Update',
              def: 'Over-the-Air Firmware Update mit Rollout-Strategie (staged/canary) und Rollback-Plan.',
            },
            {
              term: 'Retention/Downsampling',
              def: 'Wie lange Daten gespeichert werden und wie hochaufgelöst (z. B. nach 30 Tagen nur noch stündliche Aggregationen).',
            },
          ] as Item[],
        }
      : {
          eyebrow: 'Glossary',
          title: 'Terms you’ll constantly hear in IoT projects',
          subtitle:
            'Short and practical – so everyone means the same thing when discussing QoS, OTA or telemetry.',
          items: [
            {
              term: 'MQTT',
              def: 'Lightweight pub/sub protocol for device communication. Key: QoS, topics, sessions, retain.',
            },
            { term: 'QoS', def: 'Quality of Service: delivery guarantees in MQTT (e.g. at most once vs at least once).' },
            {
              term: 'Telemetry vs event vs state',
              def: 'Telemetry = measurements over time, event = occurrence, state = current status. Separation keeps systems clean.',
            },
            {
              term: 'Provisioning',
              def: 'Onboarding devices: identity, certs/keys, assignment, initial configuration.',
            },
            {
              term: 'OTA update',
              def: 'Over-the-air firmware update with staged/canary rollout and rollback plan.',
            },
            {
              term: 'Retention/downsampling',
              def: 'How long data is stored and at what granularity (e.g. after 30 days keep hourly aggregates only).',
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

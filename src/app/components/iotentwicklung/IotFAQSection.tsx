// src/app/components/iotentwicklung/IotFAQSection.tsx
import { GlassCard, Lang, SectionShell } from './_ui'

type QA = { q: string; a: string }

export default function IotFAQSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'FAQ',
          title: 'Häufige Fragen zur IoT Entwicklung',
          subtitle:
            'IoT wird dann gut, wenn Lifecycle, Security, Datenmodelle und Betrieb sauber stehen – nicht nur die erste Datenübertragung.',
          items: [
            {
              q: 'Reicht ein MQTT Broker und ein Dashboard?',
              a: 'Für einen PoC: ja. Für Produktion brauchen Sie zusätzlich Lifecycle (Provisioning/Offboarding), Security-Policies, Monitoring, Retention/Downsampling und einen OTA-Plan.',
            },
            {
              q: 'Wie skaliert man bei vielen Geräten?',
              a: 'Mit Backpressure/Queues, Partitioning, Rate-Limits, sauberem Topic-Design, idempotenter Verarbeitung und einem State-Modell für Flottenzustände.',
            },
            {
              q: 'Wie laufen OTA Updates sicher ab?',
              a: 'Staged Rollouts (Pilot/Canary), Health Checks, Telemetrie-basierte Abbruchkriterien und ein klarer Rollback-Plan – alles auditierbar.',
            },
            {
              q: 'Wie verhindert man Datenmüll?',
              a: 'Mit Schema-Versionierung, Validierung, klaren Einheiten, Trennung von Telemetrie/Event/State und definierten Retention-Regeln.',
            },
            {
              q: 'Wie schützt man Geräte vor Missbrauch?',
              a: 'Device Identity (Certs/Keys), Rotation/Revocation, Policies pro Topic/API, Logging-Policy, sowie Mandanten- und Rollenrechte (RLS).',
            },
            {
              q: 'Welche Datenbank braucht man für Telemetrie?',
              a: 'Meist Time-Series + Event Store + Statusmodelle. Wichtig ist weniger „die eine DB“, sondern Retention/Downsampling, Indizes und Exporte.',
            },
            {
              q: 'Welche Netze/Protokolle sind am besten?',
              a: 'Das hängt vom Einsatz ab (Bandbreite, Reichweite, Strom, Offline). Wir definieren zuerst Anforderungen, dann Protokoll & Strategie.',
            },
            {
              q: 'Wie schnell kann ein Pilot stehen?',
              a: 'Wenn Device-Zugriff und Daten klar sind: typischerweise wenige Wochen für ein End-to-End Pilot-System (inkl. Dashboard und Alerts v1).',
            },
          ] as QA[],
        }
      : {
          eyebrow: 'FAQ',
          title: 'Common questions about IoT development',
          subtitle:
            'IoT becomes great when lifecycle, security, data models and operations are designed — not just the first data transfer.',
          items: [
            {
              q: 'Is an MQTT broker and dashboard enough?',
              a: 'For a PoC: yes. For production you also need lifecycle (provision/offboard), security policies, monitoring, retention/downsampling and an OTA plan.',
            },
            {
              q: 'How do you scale to many devices?',
              a: 'Backpressure/queues, partitioning, rate limits, clean topic design, idempotent processing and a state model for fleet health.',
            },
            {
              q: 'How do OTA updates work safely?',
              a: 'Staged rollouts (pilot/canary), health checks, telemetry-based stop criteria and a clear rollback plan — fully auditable.',
            },
            {
              q: 'How do you prevent data junk?',
              a: 'Schema versioning, validation, consistent units, separating telemetry/event/state and clear retention rules.',
            },
            {
              q: 'How do you secure devices?',
              a: 'Device identity (certs/keys), rotation/revocation, topic/API policies, logging policy, plus multi-tenant role control (RLS).',
            },
            {
              q: 'Which database is best for telemetry?',
              a: 'Usually time-series + event store + state models. The key is retention/downsampling, indexing and exports.',
            },
            {
              q: 'Which networks/protocols are best?',
              a: 'Depends on constraints (bandwidth, range, power, offline). We define requirements first, then select protocol and strategy.',
            },
            {
              q: 'How fast can a pilot be delivered?',
              a: 'With clear device access and data: typically a few weeks for an end-to-end pilot (including dashboard and alerts v1).',
            },
          ] as QA[],
        }

  return (
    <SectionShell id="faq" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle}>
      <div className="grid gap-4">
        {t.items.map((qa) => (
          <GlassCard key={qa.q} className="p-6">
            <div className="text-base font-medium text-slate-900">{qa.q}</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{qa.a}</p>
          </GlassCard>
        ))}
      </div>
    </SectionShell>
  )
}

// src/app/components/iotentwicklung/IotIntroSection.tsx
import { GlassCard, Lang, SectionShell } from './_ui'

export default function IotIntroSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Warum IoT-Projekte scheitern',
          title: 'IoT ist nicht nur Hardware – es ist ein Betriebssystem für Ihre Flotte.',
          subtitle:
            'Ein Proof-of-Concept ist schnell gebaut. Produktionsreifes IoT braucht Device-Lifecycle, Security, Datenmodelle, Monitoring und skalierbare Pipelines.',
          cards: [
            {
              title: 'Lifecycle statt Bastellösung',
              text: 'Provisioning, Rollen, Zertifikate, OTA Updates, Rollout-Strategien und Geräte-Status – sauber versioniert.',
            },
            {
              title: 'Daten, die man wirklich nutzen kann',
              text: 'Events vs. Telemetrie, Time-Series, Zustandsmodelle, Normalisierung, Validierung und klare Ownership.',
            },
            {
              title: 'Security & Betrieb ab Tag 1',
              text: 'Device Identity, Keys, Policies, Rate-Limits, Alerts, Audit Trails – damit Sie ruhig schlafen können.',
            },
          ],
        }
      : {
          eyebrow: 'Why IoT projects fail',
          title: 'IoT is not just hardware – it’s an operating system for your fleet.',
          subtitle:
            'A PoC is quick. Production IoT needs device lifecycle, security, data models, monitoring and scalable pipelines.',
          cards: [
            {
              title: 'Lifecycle over hacks',
              text: 'Provisioning, roles, certificates, OTA updates, rollout strategies and device state – properly versioned.',
            },
            {
              title: 'Data you can actually use',
              text: 'Events vs telemetry, time-series, state models, normalization, validation and clear ownership.',
            },
            {
              title: 'Security & operations from day one',
              text: 'Device identity, keys, policies, rate limits, alerts, audit trails – so you can sleep at night.',
            },
          ],
        }

  return (
    <SectionShell eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle}>
      <div className="grid gap-4 md:grid-cols-3">
        {t.cards.map((c) => (
          <GlassCard key={c.title} className="p-6">
            <div className="text-base font-medium text-slate-900">{c.title}</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.text}</p>
          </GlassCard>
        ))}
      </div>
    </SectionShell>
  )
}

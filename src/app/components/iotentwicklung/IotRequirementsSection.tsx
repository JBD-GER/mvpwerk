// src/app/components/iotentwicklung/IotRequirementsSection.tsx
import { CheckList, GlassCard, Lang, SectionShell } from './_ui'

type Group = {
  title: string
  subtitle: string
  items: string[]
}

export default function IotRequirementsSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Anforderungen',
          title: 'Die 7 Zielbereiche, die IoT in Produktion bringen',
          subtitle:
            'Wenn diese Punkte klar sind, wird IoT planbar: weniger Ausfälle, weniger Support, saubere Daten und ein Betrieb, der skaliert.',
          groups: [
            {
              title: '1) Business-Ziel & Nutzenkette',
              subtitle: 'Wofür existiert das IoT-System – und welche Entscheidung/Automatisierung entsteht daraus?',
              items: [
                'Klarer Nutzen: Ausfälle reduzieren, Wartung planen, Qualität sichern, Prozesse automatisieren',
                'Messgrößen: Downtime, MTTR, Ticket-Volumen, Energieverbrauch, SLA-Verstöße',
                'Welche Rollen nutzen die Daten (Ops, Service, Kunde, Management)?',
                'Welche Aktionen folgen auf Daten/Alarme (Ticket, SMS, Abschaltung, Workflow)?',
              ],
            },
            {
              title: '2) Device Lifecycle (Provisioning → Betrieb → Offboarding)',
              subtitle: 'Flottenfähigkeit entscheidet – nicht der erste Sensor.',
              items: [
                'Provisioning: Geräte registrieren, zuweisen, initial konfigurieren',
                'Device Identity: Zertifikate/Keys, Rotation, Widerruf',
                'Offboarding: Geräte sicher entfernen, Daten/Keys behandeln',
                'OTA Updates: Rollouts, Staging, Canary, Rollback-Plan',
              ],
            },
            {
              title: '3) Connectivity & Protokolle',
              subtitle: 'Welche Netze, welche Ausfälle, welche Offline-Strategie?',
              items: [
                'Protokolle: MQTT/HTTP/WebSockets – plus QoS/Retain/Session-Strategie',
                'Netz: LAN/WLAN, Mobilfunk (LTE-M/NB-IoT), LoRaWAN – je nach Einsatz',
                'Offline-Puffer: Store-and-forward, Retry, deduplication',
                'Bandbreite & Frequenzen: Sampling, Kompression, Payload-Design',
              ],
            },
            {
              title: '4) Datenmodell & Telemetrie-Design',
              subtitle: 'Telemetrie ohne Modell ist nur „viel Text“.',
              items: [
                'Unterscheidung: Events vs Telemetrie vs State',
                'Schema: Versionierung, Validierung, Normalisierung, Einheiten',
                'Time-Series Strategie: Aggregationen, Downsampling, Retention',
                'Ownership: wer definiert Felder, wer ändert sie, wer dokumentiert?',
              ],
            },
            {
              title: '5) Security, Rechte & Mandantenfähigkeit',
              subtitle: 'Geräte sind Angriffsfläche – Plattform muss abriegeln.',
              items: [
                'Device Auth: Zertifikate/Keys, Policies pro Gerät/Topic/API',
                'Tenant/Rollen: wer sieht welche Geräte/Daten (RLS/Teams)?',
                'Audit: wer hat was geändert (Config/Updates/Zuordnung)?',
                'Privacy/Compliance: Logging-Policy, Retention, Data Minimization',
              ],
            },
            {
              title: '6) Betrieb, Monitoring & Incident Response',
              subtitle: 'IoT ist ein laufendes System – nicht ein Release.',
              items: [
                'Monitoring: Online-Status, Heartbeats, Fehlerraten, Latenz',
                'Alerting: Schwellen, Anomalien, Eskalationen, Ruhezeiten',
                'Runbooks: Was tun bei Ausfällen? (Broker down, Device Storm, Bad Firmware)',
                'Skalierung: Rate-Limits, Backpressure, Queues, Partitioning',
              ],
            },
            {
              title: '7) Integrationen & Workflows',
              subtitle: 'Der Nutzen entsteht oft erst in Ihren bestehenden Tools.',
              items: [
                'Tickets/CRM/ERP: automatische Erstellung, Status-Sync, Kontext',
                'Benachrichtigung: E-Mail/SMS/Push/Slack/Teams',
                'Dashboards: Rollenbasierte Ansichten, KPIs, Reports',
                'API-First: saubere Schnittstellen für Apps, Kundenportale, Partner',
              ],
            },
          ] as Group[],
        }
      : {
          eyebrow: 'Requirements',
          title: 'The 7 goal areas that bring IoT to production',
          subtitle:
            'When these are clear, IoT becomes predictable: fewer outages, less support, usable data and scalable operations.',
          groups: [
            {
              title: '1) Business goals & value chain',
              subtitle: 'Why does the IoT system exist and what decisions/automations come from it?',
              items: [
                'Clear value: reduce downtime, plan maintenance, ensure quality, automate workflows',
                'Metrics: downtime, MTTR, ticket volume, energy usage, SLA violations',
                'Which roles use the data (ops, service, customer, management)?',
                'Which actions follow data/alerts (ticket, SMS, shutdown, workflow)?',
              ],
            },
            {
              title: '2) Device lifecycle (provision → operate → offboard)',
              subtitle: 'Fleet readiness matters more than the first sensor.',
              items: [
                'Provisioning: register devices, assign, initial configuration',
                'Device identity: certs/keys, rotation, revocation',
                'Offboarding: remove devices safely, handle data/keys',
                'OTA updates: staged rollouts, canary, rollback plan',
              ],
            },
            {
              title: '3) Connectivity & protocols',
              subtitle: 'Networks, outages and offline strategies.',
              items: [
                'Protocols: MQTT/HTTP/WebSockets + QoS/retain/session strategy',
                'Network: LAN/WiFi, cellular, LoRaWAN depending on environment',
                'Offline buffering: store-and-forward, retries, deduplication',
                'Bandwidth & frequency: sampling, compression, payload design',
              ],
            },
            {
              title: '4) Data model & telemetry design',
              subtitle: 'Telemetry without a model is just noise.',
              items: [
                'Differentiate: events vs telemetry vs state',
                'Schema: versioning, validation, normalization, units',
                'Time-series strategy: aggregations, downsampling, retention',
                'Ownership: who defines fields, changes them and documents them?',
              ],
            },
            {
              title: '5) Security, permissions & multi-tenancy',
              subtitle: 'Devices are attack surface — the platform must be locked down.',
              items: [
                'Device auth: certs/keys, policies per device/topic/API',
                'Tenant/roles: who can see which devices/data (RLS/teams)?',
                'Audit: who changed what (config/updates/assignments)?',
                'Privacy/compliance: logging policy, retention, data minimization',
              ],
            },
            {
              title: '6) Operations, monitoring & incident response',
              subtitle: 'IoT is a running system — not a one-time release.',
              items: [
                'Monitoring: online status, heartbeats, error rates, latency',
                'Alerting: thresholds, anomalies, escalation, quiet hours',
                'Runbooks: what to do during incidents (broker down, storm, bad firmware)',
                'Scaling: rate limits, backpressure, queues, partitioning',
              ],
            },
            {
              title: '7) Integrations & workflows',
              subtitle: 'Value often happens inside your existing tools.',
              items: [
                'Tickets/CRM/ERP: auto-create, status sync, context enrichment',
                'Notifications: email/SMS/push/Slack/Teams',
                'Dashboards: role-based views, KPIs, reports',
                'API-first: clean interfaces for apps, portals, partners',
              ],
            },
          ] as Group[],
        }

  return (
    <SectionShell id="anforderungen" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle}>
      <div className="grid gap-4">
        {t.groups.map((g) => (
          <GlassCard key={g.title} className="p-6">
            <div className="flex flex-col gap-1">
              <div className="text-base font-medium text-slate-900">{g.title}</div>
              <div className="text-sm text-slate-600">{g.subtitle}</div>
            </div>
            <div className="mt-4">
              <CheckList items={g.items} />
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionShell>
  )
}

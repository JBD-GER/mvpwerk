// src/app/components/iotentwicklung/IotHeroSection.tsx
import Link from 'next/link'
import { Badge, GlassCard, Lang } from './_ui'

function Star({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2l2.7 6.3 6.8.6-5.2 4.5 1.6 6.7L12 16.9 6.1 20.1l1.6-6.7L2.5 8.9l6.8-.6L12 2z" />
    </svg>
  )
}

export default function IotHeroSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'IoT Entwicklung (Device → Cloud → Dashboard)',
          title: 'IoT, das nicht nur „sendet“ – sondern Prozesse messbar verbessert.',
          subtitle:
            'Wir bauen IoT-Plattformen für echte Flotten: sichere Geräteanbindung, Telemetrie, Dashboards, Alerts, Provisioning und OTA Updates – skalierbar, auditierbar und wartbar.',
          bullets: [
            'Device Management: Provisioning, Zertifikate, Flottenverwaltung',
            'Telemetrie Pipeline: MQTT → Verarbeitung → Time-Series / Events',
            'Dashboards & Alerts: Zustände, Grenzwerte, Tickets, Benachrichtigungen',
            'Security & Betrieb: Monitoring, Rate-Limits, Rollouts, Audit Trails',
          ],
          cta1: 'Projekt anfragen',
          cta2: 'Deliverables ansehen',
          trust1: 'B2B-first',
          trust2: 'Security by Design',
          trust3: 'Skalierung & Betrieb',
          trust4: 'Saubere Datenmodelle',
          rating: 'Top bewertet',
          from: 'für Geräte-Flotten & Plattformen',
        }
      : {
          eyebrow: 'IoT Development (Device → Cloud → Dashboard)',
          title: 'IoT that doesn’t just “send data” – it improves workflows.',
          subtitle:
            'We build real fleet-ready IoT platforms: secure device connectivity, telemetry pipelines, dashboards, alerts, provisioning and OTA updates – scalable and maintainable.',
          bullets: [
            'Device management: provisioning, certificates, fleet administration',
            'Telemetry pipeline: MQTT → processing → time-series / events',
            'Dashboards & alerts: states, thresholds, tickets, notifications',
            'Security & ops: monitoring, rate limits, rollouts, audit trails',
          ],
          cta1: 'Request a project',
          cta2: 'View deliverables',
          trust1: 'B2B-first',
          trust2: 'Security by design',
          trust3: 'Scalable ops',
          trust4: 'Clean data models',
          rating: 'Top rated',
          from: 'for device fleets & platforms',
        }

  return (
    <section className="relative overflow-hidden pt-10 sm:pt-14">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-slate-900/10 blur-3xl md:h-[780px] md:w-[780px]" />
        <div className="absolute -top-20 right-[-140px] h-[440px] w-[440px] rounded-full bg-slate-900/8 blur-3xl md:h-[620px] md:w-[620px]" />
        <div className="absolute bottom-[-260px] left-[-140px] h-[560px] w-[560px] rounded-full bg-slate-900/8 blur-3xl md:h-[780px] md:w-[780px]" />
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <Badge>{t.eyebrow}</Badge>
          <span className="text-xs text-slate-500">{t.from}</span>
        </div>

        <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          {t.title}
        </h1>

        <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-slate-600 sm:text-[17px]">
          {t.subtitle}
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-200/70"
          >
            {t.cta1}
          </Link>
          <Link
            href="#leistungen"
            className="inline-flex items-center justify-center rounded-full border border-white/60 bg-white/70 px-5 py-3 text-sm font-medium text-slate-900 shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200/70"
          >
            {t.cta2}
          </Link>

          <div className="mt-1 flex items-center gap-2 text-xs text-slate-600 sm:ml-4">
            <span className="inline-flex items-center gap-1">
              <span className="inline-flex text-amber-500">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
              <span className="font-medium text-slate-700">{t.rating}</span>
            </span>
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <GlassCard className="p-6">
            <div className="text-sm font-medium text-slate-900">
              {lang === 'de' ? 'Was Sie bekommen' : 'What you get'}
            </div>
            <ul className="mt-4 grid gap-3">
              {t.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/60 bg-white/70 shadow-sm">
                    ✓
                  </span>
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="text-sm font-medium text-slate-900">
              {lang === 'de' ? 'Warum MVPWERK' : 'Why MVPWERK'}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[t.trust1, t.trust2, t.trust3, t.trust4].map((x) => (
                <div
                  key={x}
                  className="rounded-2xl border border-white/60 bg-white/70 px-4 py-3 text-sm text-slate-700 shadow-sm backdrop-blur"
                >
                  {x}
                </div>
              ))}
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {lang === 'de'
                ? 'IoT scheitert selten am Sensor – sondern an Lifecycle, Security, Datenqualität und Betrieb. Genau diese Themen bauen wir von Anfang an mit.'
                : 'IoT rarely fails because of sensors – it fails on lifecycle, security, data quality and operations. That’s what we design from day one.'}
            </p>
          </GlassCard>
        </div>

        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-slate-900/10 to-transparent" />
      </div>
    </section>
  )
}

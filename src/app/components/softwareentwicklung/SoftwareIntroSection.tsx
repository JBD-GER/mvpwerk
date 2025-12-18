'use client'

import { useMemo, useState } from 'react'
import { DividerSoft, GlassCard, Lang, SectionShell } from './_ui'

export default function SoftwareIntroSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Überblick',
          title: 'Worum es bei moderner Softwareentwicklung wirklich geht',
          subtitle:
            'Nicht nur „eine App bauen“ — sondern ein System schaffen, das zuverlässig läuft, weiterentwickelt werden kann und intern verstanden wird.',
          blocks: [
            {
              title: 'Klarer Scope statt Feature-Overload',
              text:
                'Gute Software startet mit einem klaren Kern. Wir helfen dabei, Anforderungen so zu schneiden, dass schnell ein brauchbares Produkt entsteht — ohne spätere Sackgassen.',
            },
            {
              title: 'Architektur, die mitwächst',
              text:
                'Viele Projekte scheitern nicht am ersten Release, sondern am zweiten. Deshalb denken wir früh über Datenmodell, Rollen, Rechte, Performance und Erweiterbarkeit nach.',
            },
            {
              title: 'Wartbarkeit ist ein Feature',
              text:
                'Sauberer Code, klare Konventionen, sinnvolle Komponenten-Struktur und dokumentierte Entscheidungen sparen langfristig Zeit und Geld.',
            },
            {
              title: 'Delivery & Betrieb gehören dazu',
              text:
                'Ein Projekt ist erst fertig, wenn es sauber deployed ist, Logs/Monitoring vorhanden sind und das Team weiß, wie Updates sicher ausgerollt werden.',
            },
          ],
          bulletsTitle: 'Typische Ziele unserer Kunden',
          question: 'Was sind Ihre Ziele?',
          hint: 'Klicken Sie Ziele an, um Schwerpunkte zu markieren (rein informativ).',
          bullets: [
            'Interne Prozesse digitalisieren (ohne Excel-Chaos)',
            'Ein MVP launchen und schnell validieren',
            'Ein bestehendes Tool ablösen (Migration, Performance, UX)',
            'Skalieren: mehrere Nutzer, Rollen, Mandanten',
            'API-first bauen: Integrationen, Automationen, Webhooks',
            'DSGVO-freundliche Infrastruktur in der EU',
          ],
        }
      : {
          eyebrow: 'Overview',
          title: 'What modern software development is really about',
          subtitle:
            'Not just “building an app” — but creating a system that runs reliably, can be extended, and is understandable for your team.',
          blocks: [
            {
              title: 'Clear scope over feature overload',
              text:
                'Great software starts with a clear core. We help shape requirements so you can ship something useful fast — without creating dead ends later.',
            },
            {
              title: 'Architecture that scales',
              text:
                'Many projects don’t fail on release #1, but on release #2. That’s why we think early about data model, roles, access control, performance and extensibility.',
            },
            {
              title: 'Maintainability is a feature',
              text:
                'Clean code, conventions, sensible component structure and documented decisions save time and money long-term.',
            },
            {
              title: 'Delivery & operations matter',
              text:
                'A project is only done when it’s deployed cleanly, logs/monitoring exist, and your team knows how to ship updates safely.',
            },
          ],
          bulletsTitle: 'Common goals',
          question: 'What are your goals?',
          hint: 'Tap goals to mark priorities (informational only).',
          bullets: [
            'Digitize internal processes (without spreadsheet chaos)',
            'Launch an MVP and validate quickly',
            'Replace legacy tools (migration, performance, UX)',
            'Scale: multiple users, roles, multi-tenant',
            'API-first: integrations, automations, webhooks',
            'EU-based infrastructure for GDPR alignment',
          ],
        }

  // Local UI state (no persistence, just for “natural” interaction)
  const [active, setActive] = useState<Record<string, boolean>>({})

  const isOn = (key: string) => !!active[key]
  const toggle = (key: string) => setActive((prev) => ({ ...prev, [key]: !prev[key] }))

  // Optional: keep stable keys
  const items = useMemo(() => t.bullets.map((label) => ({ key: label, label })), [t.bullets])

  return (
    <>
      <SectionShell id="ueberblick" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle}>
        {/* Top 4 cards */}
        <div className="grid gap-4 md:grid-cols-2">
          {t.blocks.map((b) => (
            <GlassCard key={b.title} className="p-5 sm:p-6">
              <div className="text-[13px] font-semibold text-slate-900">{b.title}</div>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-700">{b.text}</p>
            </GlassCard>
          ))}
        </div>

        {/* Goals: question + real click toggles */}
        <div className="mt-6">
          <GlassCard className="p-5 sm:p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="text-[13px] font-semibold text-slate-900">{t.bulletsTitle}</div>
                <div className="mt-1 text-[18px] font-semibold tracking-tight text-slate-900 sm:text-[20px]">
                  {t.question}
                </div>
              </div>

              <div className="text-[11px] text-slate-600">{t.hint}</div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {items.map(({ key, label }) => {
                const on = isOn(key)

                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => toggle(key)}
                    aria-pressed={on}
                    className={[
                      // chip base
                      'group inline-flex items-center gap-2 rounded-full border px-3 py-2 text-left',
                      'shadow-sm backdrop-blur transition',
                      'focus:outline-none focus:ring-2 focus:ring-slate-900/10',
                      // natural feel
                      'active:scale-[0.99]',
                      // colors (your slate palette)
                      on
                        ? 'border-slate-900/15 bg-slate-900/10'
                        : 'border-slate-900/10 bg-white/75 hover:bg-white',
                    ].join(' ')}
                  >
                    {/* Toggle */}
                    <span
                      className={[
                        'relative inline-flex h-5 w-9 shrink-0 items-center rounded-full border',
                        on ? 'border-slate-900/15 bg-slate-900/25' : 'border-slate-900/10 bg-slate-900/10',
                      ].join(' ')}
                      aria-hidden
                    >
                      <span
                        className={[
                          // slightly higher + smooth
                          'absolute top-0.8 h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-slate-900/10',
                          'transition-transform duration-200 ease-out',
                          on ? 'translate-x-4' : 'translate-x-0',
                          // keep it a touch “higher”
                          'left-0.5',
                        ].join(' ')}
                      />
                    </span>

                    <span
                      className={[
                        'relative -top-[1px] text-[12px] font-medium sm:text-[13px]',
                        on ? 'text-slate-900' : 'text-slate-800',
                      ].join(' ')}
                    >
                      {label}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Small helper line for mobile */}
            <div className="mt-4 text-[11px] leading-relaxed text-slate-600 sm:hidden">
              {lang === 'de'
                ? 'Hinweis: Auf dem Handy umbrechen die Ziele automatisch.'
                : 'Note: On mobile, goals wrap automatically.'}
            </div>
          </GlassCard>
        </div>
      </SectionShell>

      <DividerSoft />
    </>
  )
}

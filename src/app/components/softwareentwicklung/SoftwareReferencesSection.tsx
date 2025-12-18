import { DividerSoft, GlassCard, Lang, SectionShell } from './_ui'

export default function SoftwareReferencesSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Referenzen',
          title: 'Beispiele & typische Ergebnisse',
          subtitle:
            'Ohne Marketing-Show: hier sind typische Projekt-Artefakte, die in echten Softwareprojekten entstehen — und die später Geld sparen.',
          tiles: [
            {
              title: 'Admin-Dashboard',
              text:
                'Übersichten, Filter, Status-Workflows, Listen & Detailseiten. Hauptziel: Klarheit und Geschwindigkeit im Alltag.',
              tags: ['Listen/Details', 'Status', 'Suche', 'Exports', 'Responsive'],
            },
            {
              title: 'Multi-User & Rollen',
              text:
                'Team-Accounts, Rollenmodelle, Mandantenfähigkeit, RLS Policies. Hauptziel: Sicherheit ohne Umständlichkeit.',
              tags: ['RLS', 'Roles', 'Teams', 'Tenant', 'Audit'],
            },
            {
              title: 'API & Integrationen',
              text:
                'REST APIs, Webhooks, saubere Versionierung. Hauptziel: Stabilität und Integrationsfähigkeit für Wachstum.',
              tags: ['OpenAPI', 'Webhooks', 'Retries', 'Errors', 'Monitoring'],
            },
            {
              title: 'Dokumente & Storage',
              text:
                'Uploads, Voransichten, Signed URLs, Rechte. Hauptziel: sichere Dokumentenprozesse ohne Risiko.',
              tags: ['Signed URLs', 'Policies', 'Buckets', 'Preview', 'Logs'],
            },
            {
              title: 'Performance',
              text:
                'Schnelle Seiten, effiziente Queries, sauberes Caching. Hauptziel: UI fühlt sich „leicht“ an — auch bei vielen Daten.',
              tags: ['Indices', 'Caching', 'Server-first', 'Lighthouse', 'DX'],
            },
            {
              title: 'Deployment',
              text:
                'Preview Deployments, Staging/Prod, sichere Secrets. Hauptziel: Releases ohne Angst.',
              tags: ['CI/CD', 'Env Vars', 'Rollback', 'Observability', 'Uptime'],
            },
          ],
          defEyebrow: 'Definition',
          defTitle: 'Softwareentwicklung: Was ist das?',
          defText:
            'Softwareentwicklung ist mehr als „eine App bauen“. Es ist der strukturierte Prozess, digitale Systeme zu planen, zu entwickeln und zuverlässig zu betreiben — damit sie im Alltag funktionieren, intern verstanden werden und langfristig erweiterbar bleiben.',
          defBullets: [
            'Planen: Ziele, Nutzer, Prozesse und Scope sauber festlegen',
            'Bauen: UI, Datenmodell, API, Rechte/Rollen und Integrationen umsetzen',
            'Liefern: Deployments, Umgebungen, Logs/Monitoring, Updates sicher ausrollen',
            'Pflegen: Bugs beheben, Performance verbessern, Features sauber erweitern',
          ],

          seoEyebrow: 'SEO-Guide',
          seoTitle: 'Softwareentwicklung: Definition, Ablauf und typische Ergebnisse',
          seoLead:
            'Wenn Sie „Software entwickeln lassen“ suchen, geht es selten nur um Features. Entscheidend ist ein System, das stabil läuft, schnell bedienbar ist und auch nach dem ersten Release sauber weiterwächst. Genau das unterscheidet moderne Softwareentwicklung von kurzfristigem „Zusammenklicken“.',
          seoSections: [
            {
              h: 'Was bedeutet Softwareentwicklung?',
              p: [
                'Softwareentwicklung umfasst die Konzeption, Umsetzung und den Betrieb digitaler Produkte: von Web Apps und SaaS-Plattformen bis hin zu internen Tools und APIs.',
                'Dazu gehören Anforderungen, Architektur, Datenmodell, UI/UX, Implementierung, Tests, Deployment sowie Monitoring. Ziel ist nicht nur „läuft“, sondern wartbar, sicher und skalierbar.',
              ],
            },
            {
              h: 'Warum viele Projekte nicht am ersten Release scheitern',
              p: [
                'Viele Teams bekommen Version 1 live — und stolpern bei Version 2. Typische Ursachen sind ein zu breiter Scope, ein unflexibles Datenmodell oder fehlende Rollen- und Rechte-Logik.',
                'Moderne Softwareentwicklung denkt deshalb früh über Erweiterbarkeit nach: klare Zuständigkeiten, saubere Schnittstellen und ein Setup, das Updates sicher ausrollt.',
              ],
            },
            {
              h: 'Ablauf: so entsteht gute Software in der Praxis',
              p: [
                '1) Scope & Prioritäten: Der Kern wird so geschnitten, dass schnell ein nutzbares Ergebnis entsteht — ohne spätere Sackgassen.',
                '2) Architektur & Datenmodell: Rollen, Rechte, Entitäten, Beziehungen und Zugriffsregeln werden so geplant, dass das System mitwächst.',
                '3) Umsetzung: UI, Backend, API und Integrationen entstehen iterativ — mit klaren Standards statt „Quick Hacks“.',
                '4) Qualität & Betrieb: Tests, Logging, Monitoring und Deployment-Routinen sorgen dafür, dass Releases planbar bleiben.',
              ],
            },
            {
              h: 'Typische Ergebnisse, die in echten Projekten entstehen',
              p: [
                'Gute Software liefert nicht nur Screens, sondern belastbare Projekt-Artefakte: Admin-Dashboards, Rollenmodelle, stabile APIs, Dokumentenprozesse, Performance-Optimierung und ein Release-Setup.',
                'Diese Bausteine sparen später Geld, weil Erweiterungen schneller gehen, weniger Bugs entstehen und Teams intern produktiver arbeiten.',
              ],
            },
            {
              h: 'Woran Sie „saubere“ Software erkennen',
              p: [
                '• Das System ist verständlich: klare Struktur, konsistente Komponenten, dokumentierte Entscheidungen.',
                '• Sicherheit ist sauber gelöst: Rollen & Rechte sind serverseitig abgesichert (nicht nur im Frontend).',
                '• Integrationen sind möglich: APIs sind versioniert, Fehler sind nachvollziehbar, Webhooks sind stabil.',
                '• Betrieb ist mitgedacht: Deployments, Umgebungen, Logs/Monitoring und Updates funktionieren wiederholbar.',
              ],
            },
            {
              h: 'Fazit: Software entwickeln lassen bedeutet Systeme bauen',
              p: [
                'Wer Software als System versteht, bekommt langfristig bessere Ergebnisse: weniger Reibung im Alltag, mehr Erweiterbarkeit und weniger „Rewrite“-Risiko.',
                'Wenn Sie ein MVP, eine Web App oder ein internes Tool planen, lohnt es sich, die typischen Projekt-Bausteine von Anfang an sauber zu denken — genau dafür ist diese Seite gedacht.',
              ],
            },
          ],
          seoFaqTitle: 'Häufige Fragen zur Softwareentwicklung',
          seoFaq: [
            {
              q: 'Was kostet Softwareentwicklung?',
              a: 'Das hängt vom Scope, den Rollen/Rechten, Integrationen und dem Qualitätsanspruch ab. Entscheidend ist, den Kern klar zu definieren und Erweiterungen planbar zu halten.',
            },
            {
              q: 'Was ist der Unterschied zwischen MVP und fertigem Produkt?',
              a: 'Ein MVP ist die kleinste Version, die echten Nutzen liefert und validiert. Ein fertiges Produkt erweitert diesen Kern um Skalierung, Automationen, Integrationen, Betrieb und mehr Komfort.',
            },
            {
              q: 'Warum sind Rollen & Rechte so wichtig?',
              a: 'Sobald mehrere Nutzer im System arbeiten, entscheidet eine saubere Berechtigungslogik über Sicherheit und Alltagstauglichkeit. Sie gehört serverseitig abgesichert.',
            },
          ],
        }
      : {
          eyebrow: 'References',
          title: 'Examples & typical outputs',
          subtitle:
            'No marketing theatre: these are typical artifacts that appear in real software projects — and save money later.',
          tiles: [
            {
              title: 'Admin dashboard',
              text:
                'Overviews, filters, status workflows, lists & detail pages. Goal: clarity and speed for daily work.',
              tags: ['Lists/details', 'Status', 'Search', 'Exports', 'Responsive'],
            },
            {
              title: 'Multi-user & roles',
              text:
                'Team accounts, role models, multi-tenant, RLS policies. Goal: security without friction.',
              tags: ['RLS', 'Roles', 'Teams', 'Tenant', 'Audit'],
            },
            {
              title: 'API & integrations',
              text:
                'REST APIs, webhooks, clean versioning. Goal: stability and integration-ready growth.',
              tags: ['OpenAPI', 'Webhooks', 'Retries', 'Errors', 'Monitoring'],
            },
            {
              title: 'Documents & storage',
              text:
                'Uploads, previews, signed URLs, permissions. Goal: secure document processes without risk.',
              tags: ['Signed URLs', 'Policies', 'Buckets', 'Preview', 'Logs'],
            },
            {
              title: 'Performance',
              text:
                'Fast pages, efficient queries, solid caching. Goal: UI feels lightweight — even with a lot of data.',
              tags: ['Indexes', 'Caching', 'Server-first', 'Lighthouse', 'DX'],
            },
            {
              title: 'Deployment',
              text:
                'Preview deployments, staging/prod, secure secrets. Goal: releases without fear.',
              tags: ['CI/CD', 'Env vars', 'Rollback', 'Observability', 'Uptime'],
            },
          ],
          defEyebrow: 'Definition',
          defTitle: 'Software development: what is it?',
          defText:
            'Software development is more than “building an app”. It’s the structured process of planning, building and reliably operating digital systems — so they work day-to-day, stay understandable for teams, and remain extensible long-term.',
          defBullets: [
            'Plan: define goals, users, processes and scope',
            'Build: implement UI, data model, API, roles/permissions and integrations',
            'Ship: deployments, environments, logs/monitoring, safe updates',
            'Maintain: fix bugs, improve performance, evolve features cleanly',
          ],

          seoEyebrow: 'SEO Guide',
          seoTitle: 'Software development: definition, process and typical outputs',
          seoLead:
            'If you search for “software development”, you usually don’t just want features. You need a system that runs reliably, feels fast, and can evolve cleanly after the first release. That’s what modern software development is about.',
          seoSections: [
            {
              h: 'What does software development mean?',
              p: [
                'Software development covers planning, building and operating digital products: web apps, SaaS platforms, internal tools and APIs.',
                'It includes requirements, architecture, data modeling, UI/UX, implementation, testing, deployment and monitoring. The goal isn’t just “working” — it’s maintainable, secure and scalable software.',
              ],
            },
            {
              h: 'Why many projects don’t fail on release #1 — but on #2',
              p: [
                'Teams often get version 1 live — and then struggle with version 2. Common reasons: scope creep, a rigid data model, or missing roles and access control.',
                'Modern development plans for extensibility early: clean interfaces, consistent standards and a delivery setup that makes updates safe.',
              ],
            },
            {
              h: 'Process: how good software is built in practice',
              p: [
                '1) Scope & priorities: define a clear core so you can ship value fast without dead ends.',
                '2) Architecture & data model: plan entities, relations, roles and permissions so the system can grow.',
                '3) Implementation: iterate UI, backend, APIs and integrations with clear standards (not quick hacks).',
                '4) Quality & operations: testing, logging, monitoring and deployment routines keep releases predictable.',
              ],
            },
            {
              h: 'Typical outputs you can expect from real projects',
              p: [
                'Good software doesn’t just deliver screens. It produces reliable project artifacts: dashboards, role models, stable APIs, document workflows, performance improvements and a release setup.',
                'Those building blocks save money later because change becomes faster and less risky.',
              ],
            },
            {
              h: 'How to recognize “clean” software',
              p: [
                '• Understandable structure: clear conventions, documented decisions, consistent components.',
                '• Proper security: roles and permissions enforced on the server (not only in the UI).',
                '• Integration-ready: versioned APIs, observable error handling, stable webhooks.',
                '• Ops included: environments, deployments, logs/monitoring and safe update routines.',
              ],
            },
            {
              h: 'Conclusion: “Build software” means building systems',
              p: [
                'When you treat software as a system, you get better long-term outcomes: less friction, more extensibility and lower rewrite risk.',
                'Whether it’s an MVP, web app or internal tool — thinking in core building blocks early pays off.',
              ],
            },
          ],
          seoFaqTitle: 'Common questions',
          seoFaq: [
            {
              q: 'How much does software development cost?',
              a: 'It depends on scope, roles/permissions, integrations and quality standards. A clear core and a scalable foundation drive predictable costs.',
            },
            {
              q: 'What’s the difference between an MVP and a finished product?',
              a: 'An MVP is the smallest version that delivers real value and validates demand. A finished product expands that core with scaling, automations, integrations and operations.',
            },
            {
              q: 'Why are roles & permissions so important?',
              a: 'As soon as multiple users collaborate, access control becomes critical for security and usability. It should be enforced server-side.',
            },
          ],
        }

  return (
    <>
      <SectionShell id="referenzen" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.tiles.map((x) => (
            <GlassCard key={x.title} className="p-5 sm:p-6">
              <div className="text-[13px] font-semibold text-slate-900">{x.title}</div>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-700">{x.text}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {x.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Definition card */}
        <div className="mt-6 rounded-3xl border border-slate-900/10 bg-white/60 p-5 shadow-sm backdrop-blur-xl sm:p-6">
          <div className="inline-flex items-center rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
            {t.defEyebrow}
          </div>

          <div className="mt-3 text-[14px] font-semibold text-slate-900">{t.defTitle}</div>
          <p className="mt-2 text-[13px] leading-relaxed text-slate-700">{t.defText}</p>

          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {t.defBullets.map((b) => (
              <div
                key={b}
                className="flex items-start gap-2 rounded-2xl border border-slate-900/10 bg-white/70 p-3 text-[12px] leading-relaxed text-slate-700 shadow-sm backdrop-blur"
              >
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900/35" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Long-form SEO text */}
        <div className="mt-6 rounded-3xl border border-slate-900/10 bg-white/60 p-5 shadow-sm backdrop-blur-xl sm:p-6">
          <div className="inline-flex items-center rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
            {t.seoEyebrow}
          </div>

          <div className="mt-3 text-[14px] font-semibold text-slate-900">{t.seoTitle}</div>
          <p className="mt-2 text-[13px] leading-relaxed text-slate-700">{t.seoLead}</p>

          <div className="mt-5 space-y-5">
            {t.seoSections.map((s) => (
              <div key={s.h} className="rounded-2xl border border-slate-900/10 bg-white/70 p-4 shadow-sm backdrop-blur">
                <div className="text-[13px] font-semibold text-slate-900">{s.h}</div>
                <div className="mt-2 space-y-2 text-[13px] leading-relaxed text-slate-700">
                  {s.p.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-slate-900/10 bg-white/70 p-4 shadow-sm backdrop-blur">
            <div className="text-[13px] font-semibold text-slate-900">{t.seoFaqTitle}</div>
            <div className="mt-3 space-y-3">
              {t.seoFaq.map((x) => (
                <div key={x.q} className="rounded-2xl border border-slate-900/10 bg-white/60 p-3">
                  <div className="text-[12px] font-semibold text-slate-900">{x.q}</div>
                  <p className="mt-1 text-[12px] leading-relaxed text-slate-700">{x.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 text-[11px] leading-relaxed text-slate-600">
            {lang === 'de' ? (
              <>
                Hinweis: Dieser Bereich ist bewusst als <span className="font-medium text-slate-900">informativer</span>{' '}
                Inhalt gestaltet (ohne Call-to-Action) — für bessere Einordnung und SEO.
              </>
            ) : (
              <>
                Note: This block is intentionally <span className="font-medium text-slate-900">informational</span>{' '}
                (no CTA) — for clarity and SEO.
              </>
            )}
          </div>
        </div>
      </SectionShell>

      <DividerSoft />
    </>
  )
}

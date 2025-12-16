// src/app/faq/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import FAQClient from './FAQClient'

export const metadata: Metadata = {
  title: 'FAQ – MVPWERK',
  description:
    'Antworten auf die wichtigsten Fragen zu MVPWERK: MVP Agentur, Softwareentwicklung, Kosten, Timeline, Tech-Stack, Ownership, Wartung und Zusammenarbeit.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'FAQ – MVPWERK',
    description:
      'Alles Wichtige rund um MVPWERK: MVP entwickeln lassen, Budget, Dauer, Tech-Stack und Prozess.',
    url: '/faq',
    type: 'website',
  },
}

const FAQS = [
  {
    q: 'Was genau macht MVPWERK als MVP Agentur?',
    a: `MVPWERK entwickelt cloudbasierte MVP Software, SaaS und Web Apps – schnell, sauber und kampagnen-ready.
Wir fokussieren uns auf funktionierende Workflows (z. B. Auth, Datenbank, Rollen, Payments, Dashboards, Admin) statt nur UI-Dummies.`,
  },
  {
    q: 'Für wen ist MVPWERK geeignet?',
    a: `Für Startups, KMU und Teams, die eine Web App entwickeln lassen möchten – mit klaren Zielen, kurzer Time-to-Market und einem technischen Fundament, das später sauber skalieren kann.`,
  },
  {
    q: 'Was ist ein MVP in der Softwareentwicklung?',
    a: `Ein MVP (Minimum Viable Product) ist die kleinste Version Ihrer Software, die den Kernnutzen beweist:
wenige, aber entscheidende Features – mit echtem Login, echten Daten, echtem Workflow. Nicht „halb fertig“, sondern „gezielt minimal“.`,
  },
  {
    q: 'Wie läuft die MVP Entwicklung bei euch ab?',
    a: `Typisch in 4 Phasen: (1) Briefing & Scope, (2) UX/Flow & Priorisierung, (3) Umsetzung in Sprints, (4) Launch, Handover & optionaler Support.
Sie sehen früh Ergebnisse, damit wir schnell validieren statt lange zu spekulieren.`,
  },
  {
    q: 'Wie lange dauert es, ein MVP erstellen zu lassen?',
    a: `Das hängt vom Scope ab. Viele MVPs liegen grob zwischen 2–8 Wochen. Entscheidend sind: Anzahl Rollen/Workflows, Datenmodell, Integrationen (z. B. Stripe, APIs) und gewünschte Qualität (Testing, Analytics, Admin-Tools).`,
  },
  {
    q: 'Was kostet ein MVP bei MVPWERK?',
    a: `MVP Kosten hängen vom Umfang ab: Features, Integrationen, UI-Komplexität und Time-to-Market.
Wir arbeiten bevorzugt scope-basiert (klarer Deliverable-Rahmen) oder sprint-basiert, damit Budget und Erwartung transparent bleiben.`,
  },
  {
    q: 'Welche Technologien nutzt ihr?',
    a: `Häufig: Next.js/React, TypeScript, Tailwind, Supabase (Postgres, Auth, Storage), Vercel/Cloud Hosting, Stripe.
Wenn Ihr Projekt andere Anforderungen hat (z. B. externe APIs, spezielle DB, Self-Hosting), passen wir den Stack entsprechend an.`,
  },
  {
    q: 'Gehört mir der Code und die Daten?',
    a: `Ja. Das Ziel ist, dass Sie am Ende Eigentümer der Codebase und Daten sind. Wir setzen auf saubere Repos, Dokumentation und Übergabe – damit Sie unabhängig bleiben.`,
  },
  {
    q: 'Können wir mit einer bestehenden Idee/Design starten?',
    a: `Ja. Figma, Wireframes oder ein bestehendes UI können wir übernehmen. Wichtig ist nur, dass wir gemeinsam den Scope priorisieren und die kritischen Workflows definieren.`,
  },
  {
    q: 'Baut ihr auch Admin-Dashboards und Rollenrechte?',
    a: `Ja. Fast jedes MVP braucht Admin-Ansichten (User, Daten, Status, Inhalte) und Rollenrechte (RLS/Permissions).
Wir bauen diese Dinge direkt „richtig“, damit spätere Erweiterungen nicht weh tun.`,
  },
  {
    q: 'Unterstützt ihr Stripe, Payments und Abos?',
    a: `Ja – Stripe Checkout, Abos, Webhooks, Kundenportal, Rechnungen (je nach Setup) und Paywall-Logik.
Wir trennen dabei sauber: Produkt-Logik vs. Billing-Logik, damit Sie später flexibel bleiben.`,
  },
  {
    q: 'Können wir Analytics/Tracking direkt einbauen?',
    a: `Ja. Auf Wunsch integrieren wir z. B. GA4, GTM, Meta Pixel (consent-basiert), Events/Conversions und saubere Tracking-Pfade – ohne Ihren Core zu verunstalten.`,
  },
  {
    q: 'Wie sieht es mit Wartung, Bugfixes und Weiterentwicklung aus?',
    a: `Nach dem Launch können Sie in einen leichten Support-Modus wechseln (Bugfixes, Updates, kleine Features) oder gezielt neue Sprints buchen.
Sie entscheiden: komplett unabhängig oder mit MVPWERK als technischem Partner.`,
  },
  {
    q: 'Arbeitet ihr mit NDA / Vertraulichkeit?',
    a: `Ja. Wenn Sie ein NDA wünschen, ist das problemlos möglich. Wir behandeln Projektinfos grundsätzlich vertraulich.`,
  },
  {
    q: 'Was braucht ihr von mir, damit es schnell losgeht?',
    a: `Ein kurzes Briefing reicht: Zielgruppe, Kernproblem, Must-have Workflow(s), Beispiele/Referenzen und Ihr Wunsch-Zeitplan.
Den Rest erarbeiten wir strukturiert gemeinsam – ohne Workshop-Marathon.`,
  },
]

function toFaqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a.replace(/\n/g, '<br/>'),
      },
    })),
  }
}

export default function FAQPage() {
  const faqJsonLd = toFaqJsonLd(FAQS)

  return (
<main className="min-h-screen bg-white text-slate-900">
  {/* subtle background */}
  <div className="pointer-events-none absolute inset-0 -z-10">
    <div className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-slate-900/10 blur-3xl md:h-[760px] md:w-[760px]" />
    <div className="absolute -top-16 right-[-140px] h-[480px] w-[480px] rounded-full bg-slate-900/8 blur-3xl md:h-[640px] md:w-[640px]" />
    <div className="absolute bottom-[-240px] left-[-140px] h-[520px] w-[520px] rounded-full bg-slate-900/8 blur-3xl md:h-[720px] md:w-[720px]" />
  </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO */}
      <section className="mx-auto w-full max-w-[1400px] px-4 pt-14 sm:px-6 sm:pt-20">
        <div className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-xl sm:p-10">
          <div className="flex flex-wrap items-center gap-2 text-[12px] font-medium text-slate-600">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 shadow-sm backdrop-blur transition hover:bg-white hover:text-slate-900"
            >
              Startseite
            </Link>
            <span className="text-slate-400">/</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 shadow-sm backdrop-blur">
              FAQ
            </span>
          </div>

          <h1 className="mt-5 text-[34px] font-semibold leading-[1.06] tracking-tight sm:text-[44px]">
            FAQ – MVP Agentur &amp; Web App Entwicklung
          </h1>

          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-slate-700 sm:text-[16px]">
            Hier finden Sie Antworten zu <strong>MVPWERK</strong>, MVP Softwareentwicklung,
            <strong> MVP Kosten</strong>, Timeline, Tech-Stack (Next.js/Supabase/Vercel) und
            Zusammenarbeit.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/kontakt"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-900 bg-slate-900 px-5 py-2.5 text-[13px] font-medium text-white shadow-sm transition hover:bg-slate-800 sm:w-auto"
            >
              Projekt anfragen
            </Link>
            <Link
              href="/#referenzen"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-900/10 bg-white/70 px-5 py-2.5 text-[13px] font-medium text-slate-800 shadow-sm backdrop-blur transition hover:bg-white sm:w-auto"
            >
              Referenzen ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* CONTENT */}
<section className="mx-auto w-full max-w-[1400px] px-4 py-10 sm:px-6 sm:py-14">
  <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
    {/* FAQ */}
    <div className="rounded-3xl border border-white/60 bg-white/70 p-4 shadow-sm backdrop-blur-xl sm:p-6">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-[18px] font-semibold tracking-tight sm:text-[20px]">
          Häufige Fragen
        </h2>
        <span className="rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[12px] font-medium text-slate-600 shadow-sm backdrop-blur">
          {FAQS.length} Fragen
        </span>
      </div>

      <FAQClient faqs={FAQS} />
    </div>

    {/* SIDE (sticky nur Desktop) */}
    <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
      <div className="rounded-3xl border border-white/60 bg-white/70 p-5 shadow-sm backdrop-blur-xl">
        <h3 className="text-[14px] font-semibold text-slate-900">
          Schnell zur passenden Antwort
        </h3>
        <p className="mt-2 text-[13px] leading-relaxed text-slate-700">
          Wenn Sie direkt starten möchten: Schicken Sie kurz Ziel, Scope und Wunsch-Timeline.
          Wir melden uns mit einem klaren nächsten Schritt.
        </p>

        <div className="mt-4 flex flex-col gap-2">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-slate-900 px-4 py-2.5 text-[13px] font-medium text-white shadow-sm transition hover:bg-slate-800"
          >
            Kontakt aufnehmen
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-white/70 px-4 py-2.5 text-[13px] font-medium text-slate-800 shadow-sm backdrop-blur transition hover:bg-white"
          >
            Zur Startseite
          </Link>
        </div>
      </div>

      <div className="rounded-3xl border border-white/60 bg-white/70 p-5 shadow-sm backdrop-blur-xl">
        <h3 className="text-[14px] font-semibold text-slate-900">
          Typische MVP-Bausteine
        </h3>
        <ul className="mt-3 space-y-2 text-[13px] text-slate-700">
          {[
            'Login, Rollen & Rechte (RLS)',
            'Dashboard & Admin-Ansichten',
            'Datenmodell & Workflows',
            'Stripe Payments / Abos',
            'E-Mails & Automationen',
            'Analytics / Conversion-Events',
          ].map((x) => (
            <li key={x} className="flex items-start gap-2">
              <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-slate-900/35" />
              <span>{x}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  </div>
</section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <div className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-xl sm:p-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-[22px] font-semibold tracking-tight sm:text-[26px]">
                Noch Fragen – oder direkt starten?
              </h2>
              <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-slate-700">
                Wenn Sie ein MVP entwickeln lassen möchten: Senden Sie uns kurz Ihr Ziel, Ihren
                Scope und ein grobes MVP Budget. Wir antworten strukturiert – ohne bla bla.
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-slate-900 px-5 py-2.5 text-[13px] font-medium text-white shadow-sm transition hover:bg-slate-800"
              >
                Anfrage senden
              </Link>
              <Link
                href="/#leistungen"
                className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-white/70 px-5 py-2.5 text-[13px] font-medium text-slate-800 shadow-sm backdrop-blur transition hover:bg-white"
              >
                Leistungen ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

// src/app/faq/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import FAQClient from './FAQClient'

type Lang = 'de' | 'en'
export const dynamic = 'force-dynamic'
export const revalidate = 0

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mvpwerk.de'
const CANONICAL_PATH = '/faq'

function normalizeLang(v: unknown): Lang | null {
  if (!v) return null
  const s = Array.isArray(v) ? String(v[0] ?? '') : String(v)
  const x = s.toLowerCase()
  if (x === 'de' || x.startsWith('de-')) return 'de'
  if (x === 'en' || x.startsWith('en-')) return 'en'
  return null
}

function toFaqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        // Achtung: Schema.org Answer text darf HTML enthalten – du nutzt <br/> korrekt.
        text: f.a.replace(/\n/g, '<br/>'),
      },
    })),
  }
}

const FAQS_DE = [
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
] as const

const FAQS_EN = [
  {
    q: 'What does MVPWERK do as an MVP agency?',
    a: `MVPWERK builds cloud-based MVP software, SaaS and web apps — fast, clean and campaign-ready.
We focus on working workflows (e.g. auth, database, roles, payments, dashboards, admin) instead of UI-only mockups.`,
  },
  {
    q: 'Who is MVPWERK for?',
    a: `For startups, SMEs and teams who want to build a web app — with clear goals, short time-to-market, and a technical foundation that can scale cleanly later.`,
  },
  {
    q: 'What is an MVP in software development?',
    a: `An MVP (Minimum Viable Product) is the smallest version of your software that proves the core value:
few but critical features — with real login, real data, real workflow. Not “half-done”, but “intentionally minimal”.`,
  },
  {
    q: 'What does your MVP process look like?',
    a: `Typically 4 phases: (1) briefing & scope, (2) UX/flow & prioritization, (3) sprint delivery, (4) launch, handover & optional support.
You see results early so we validate fast instead of guessing for weeks.`,
  },
  {
    q: 'How long does it take to build an MVP?',
    a: `Depends on scope. Many MVPs land roughly between 2–8 weeks. Key drivers: number of roles/workflows, data model, integrations (e.g. Stripe, APIs), and desired quality (testing, analytics, admin tools).`,
  },
  {
    q: 'How much does an MVP cost at MVPWERK?',
    a: `MVP cost depends on scope: features, integrations, UI complexity and time-to-market.
We prefer scope-based (clear deliverables) or sprint-based setups to keep budget and expectations transparent.`,
  },
  {
    q: 'Which technologies do you use?',
    a: `Commonly: Next.js/React, TypeScript, Tailwind, Supabase (Postgres, Auth, Storage), Vercel/cloud hosting, Stripe.
If your project needs something else (e.g. external APIs, special DB, self-hosting), we adapt the stack.`,
  },
  {
    q: 'Do I own the code and the data?',
    a: `Yes. The goal is that you own the codebase and data in the end. We use clean repos, documentation and a proper handover — so you stay independent.`,
  },
  {
    q: 'Can we start with an existing idea/design?',
    a: `Yes. We can use Figma, wireframes or an existing UI. The key is prioritizing scope together and defining the critical workflows.`,
  },
  {
    q: 'Do you build admin dashboards and role permissions?',
    a: `Yes. Most MVPs need admin views (users, data, status, content) and role permissions (RLS/permissions).
We build these “properly” upfront so later extensions won’t hurt.`,
  },
  {
    q: 'Do you support Stripe, payments and subscriptions?',
    a: `Yes — Stripe Checkout, subscriptions, webhooks, customer portal, invoices (depending on setup) and paywall logic.
We separate product logic and billing logic cleanly so you stay flexible later.`,
  },
  {
    q: 'Can we integrate analytics/tracking right away?',
    a: `Yes. If you want, we integrate e.g. GA4, GTM, Meta Pixel (consent-based), events/conversions and clean tracking paths — without polluting your core.`,
  },
  {
    q: 'What about maintenance, bug fixes and future development?',
    a: `After launch you can switch to a light support mode (bug fixes, updates, small features) or book additional sprints.
You decide: fully independent or with MVPWERK as a technical partner.`,
  },
  {
    q: 'Do you work with NDAs / confidentiality?',
    a: `Yes. If you want an NDA, that’s easy. We treat project information as confidential by default.`,
  },
  {
    q: 'What do you need from me to start quickly?',
    a: `A short briefing is enough: target audience, core problem, must-have workflow(s), examples/references and your desired timeline.
We structure the rest together — no workshop marathon.`,
  },
] as const

function getT(lang: Lang) {
  if (lang === 'en') {
    return {
      metaTitle: 'FAQ – MVPWERK',
      metaDesc:
        'Answers to the most important questions about MVPWERK: MVP agency, software development, cost, timeline, tech stack, ownership, maintenance and collaboration.',
      ogDesc:
        'Everything you need to know about MVPWERK: building an MVP, budget, timeline, tech stack and process.',
      keywords: [
        'mvp agency',
        'mvp development',
        'mvp development agency',
        'mvp cost',
        'build an mvp',
        'web app development',
        'saas development',
        'next.js',
        'supabase',
        'vercel',
        'stripe',
        'roles and permissions',
        'rls',
      ],

      home: 'Home',
      faq: 'FAQ',
      heroTitle: 'FAQ – MVP Agency & Web App Development',
      heroText: (
        <>
          Find answers about <strong>MVPWERK</strong>, MVP software development, <strong>MVP cost</strong>, timeline, tech
          stack (Next.js/Supabase/Vercel) and collaboration.
        </>
      ),
      btnProject: 'Request project',
      btnRefs: 'View references',

      sectionTitle: 'Frequently asked questions',
      questionsBadge: 'questions',

      sideTitle: 'Jump to the right answer',
      sideText:
        'If you want to start right away: send your goal, scope and target timeline. We’ll reply with a clear next step.',
      sideBtnContact: 'Contact us',
      sideBtnHome: 'Back to home',

      blocksTitle: 'Typical MVP building blocks',
      blocks: [
        'Login, roles & permissions (RLS)',
        'Dashboard & admin views',
        'Data model & workflows',
        'Stripe payments / subscriptions',
        'Emails & automations',
        'Analytics / conversion events',
      ],

      ctaTitle: 'Still questions — or want to start?',
      ctaText:
        'If you want to build an MVP: send your goal, scope and an approximate budget. We reply structured — no fluff.',
      ctaBtnSend: 'Send request',
      ctaBtnServices: 'View services',
    }
  }

  return {
    metaTitle: 'FAQ – MVPWERK',
    metaDesc:
      'Antworten auf die wichtigsten Fragen zu MVPWERK: MVP Agentur, Softwareentwicklung, Kosten, Timeline, Tech-Stack, Ownership, Wartung und Zusammenarbeit.',
    ogDesc: 'Alles Wichtige rund um MVPWERK: MVP entwickeln lassen, Budget, Dauer, Tech-Stack und Prozess.',
    keywords: [
      'mvp agentur',
      'mvp entwickeln lassen',
      'mvp kosten',
      'softwareentwicklung mvp',
      'mvp softwareentwicklung',
      'web app entwicklung',
      'saas entwickeln lassen',
      'next.js',
      'supabase',
      'vercel',
      'stripe',
      'rollen und rechte',
      'rls',
    ],

    home: 'Startseite',
    faq: 'FAQ',
    heroTitle: 'FAQ – MVP Agentur & Web App Entwicklung',
    heroText: (
      <>
        Hier finden Sie Antworten zu <strong>MVPWERK</strong>, MVP Softwareentwicklung, <strong>MVP Kosten</strong>,
        Timeline, Tech-Stack (Next.js/Supabase/Vercel) und Zusammenarbeit.
      </>
    ),
    btnProject: 'Projekt anfragen',
    btnRefs: 'Referenzen ansehen',

    sectionTitle: 'Häufige Fragen',
    questionsBadge: 'Fragen',

    sideTitle: 'Schnell zur passenden Antwort',
    sideText:
      'Wenn Sie direkt starten möchten: Schicken Sie kurz Ziel, Scope und Wunsch-Timeline. Wir melden uns mit einem klaren nächsten Schritt.',
    sideBtnContact: 'Kontakt aufnehmen',
    sideBtnHome: 'Zur Startseite',

    blocksTitle: 'Typische MVP-Bausteine',
    blocks: [
      'Login, Rollen & Rechte (RLS)',
      'Dashboard & Admin-Ansichten',
      'Datenmodell & Workflows',
      'Stripe Payments / Abos',
      'E-Mails & Automationen',
      'Analytics / Conversion-Events',
    ],

    ctaTitle: 'Noch Fragen – oder direkt starten?',
    ctaText:
      'Wenn Sie ein MVP entwickeln lassen möchten: Senden Sie uns kurz Ihr Ziel, Ihren Scope und ein grobes MVP Budget. Wir antworten strukturiert – ohne bla bla.',
    ctaBtnSend: 'Anfrage senden',
    ctaBtnServices: 'Leistungen ansehen',
  }
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}): Promise<Metadata> {
  const sp = await searchParams
  const lang: Lang = normalizeLang(sp?.lang) ?? 'de'
  const t = getT(lang)

  return {
    metadataBase: new URL(SITE_URL),

    title: t.metaTitle,
    description: t.metaDesc,

    alternates: {
      canonical: CANONICAL_PATH,
      languages: {
        'de-DE': `${CANONICAL_PATH}?lang=de`,
        'en-US': `${CANONICAL_PATH}?lang=en`,
      },
    },

    openGraph: {
      title: t.metaTitle,
      description: t.ogDesc,
      url: CANONICAL_PATH,
      type: 'website',
      siteName: 'MVPWERK',
      locale: lang === 'de' ? 'de_DE' : 'en_US',
    },

    twitter: {
      card: 'summary_large_image',
      title: t.metaTitle,
      description: t.ogDesc,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },

    keywords: [...t.keywords],
  }
}

export default async function FAQPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const sp = await searchParams
  const lang = normalizeLang(sp?.lang) ?? 'de'
  const t = getT(lang)

  const FAQS = lang === 'en' ? [...FAQS_EN] : [...FAQS_DE]
  const faqJsonLd = toFaqJsonLd(FAQS)

  const hrefWithLang = (href: string) => {
    // supports: "/path", "/path?x=y", "/path#hash", "/path?x=y#hash"
    const [beforeHash, hash] = href.split('#')
    const [path, rawQs] = beforeHash.split('?')

    const params = new URLSearchParams(rawQs || '')
    params.set('lang', lang)

    const qs = params.toString()
    const withQs = qs ? `${path}?${qs}` : path
    return hash ? `${withQs}#${hash}` : withQs
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* subtle background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-slate-900/10 blur-3xl md:h-[760px] md:w-[760px]" />
        <div className="absolute -top-16 right-[-140px] h-[480px] w-[480px] rounded-full bg-slate-900/8 blur-3xl md:h-[640px] md:w-[640px]" />
        <div className="absolute bottom-[-240px] left-[-140px] h-[520px] w-[520px] rounded-full bg-slate-900/8 blur-3xl md:h-[720px] md:w-[720px]" />
      </div>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* HERO */}
      <section className="mx-auto w-full max-w-[1400px] px-4 pt-14 sm:px-6 sm:pt-20">
        <div className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-xl sm:p-10">
          <div className="flex flex-wrap items-center gap-2 text-[12px] font-medium text-slate-600">
            <Link
              href={hrefWithLang('/')}
              className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 shadow-sm backdrop-blur transition hover:bg-white hover:text-slate-900"
            >
              {t.home}
            </Link>
            <span className="text-slate-400">/</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 shadow-sm backdrop-blur">
              {t.faq}
            </span>
          </div>

          <h1 className="mt-5 text-[34px] font-semibold leading-[1.06] tracking-tight sm:text-[44px]">{t.heroTitle}</h1>

          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-slate-700 sm:text-[16px]">{t.heroText}</p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={hrefWithLang('/kontakt')}
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-900 bg-slate-900 px-5 py-2.5 text-[13px] font-medium text-white shadow-sm transition hover:bg-slate-800 sm:w-auto"
            >
              {t.btnProject}
            </Link>
            <Link
              href={hrefWithLang('/#referenzen')}
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-900/10 bg-white/70 px-5 py-2.5 text-[13px] font-medium text-slate-800 shadow-sm backdrop-blur transition hover:bg-white sm:w-auto"
            >
              {t.btnRefs}
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
              <h2 className="text-[18px] font-semibold tracking-tight sm:text-[20px]">{t.sectionTitle}</h2>
              <span className="rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[12px] font-medium text-slate-600 shadow-sm backdrop-blur">
                {FAQS.length} {t.questionsBadge}
              </span>
            </div>

            <FAQClient faqs={FAQS} />
          </div>

          {/* SIDE (sticky nur Desktop) */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-white/60 bg-white/70 p-5 shadow-sm backdrop-blur-xl">
              <h3 className="text-[14px] font-semibold text-slate-900">{t.sideTitle}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-700">{t.sideText}</p>

              <div className="mt-4 flex flex-col gap-2">
                <Link
                  href={hrefWithLang('/kontakt')}
                  className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-slate-900 px-4 py-2.5 text-[13px] font-medium text-white shadow-sm transition hover:bg-slate-800"
                >
                  {t.sideBtnContact}
                </Link>
                <Link
                  href={hrefWithLang('/')}
                  className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-white/70 px-4 py-2.5 text-[13px] font-medium text-slate-800 shadow-sm backdrop-blur transition hover:bg-white"
                >
                  {t.sideBtnHome}
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/60 bg-white/70 p-5 shadow-sm backdrop-blur-xl">
              <h3 className="text-[14px] font-semibold text-slate-900">{t.blocksTitle}</h3>
              <ul className="mt-3 space-y-2 text-[13px] text-slate-700">
                {t.blocks.map((x) => (
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
              <h2 className="text-[22px] font-semibold tracking-tight sm:text-[26px]">{t.ctaTitle}</h2>
              <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-slate-700">{t.ctaText}</p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <Link
                href={hrefWithLang('/kontakt')}
                className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-slate-900 px-5 py-2.5 text-[13px] font-medium text-white shadow-sm transition hover:bg-slate-800"
              >
                {t.ctaBtnSend}
              </Link>
              <Link
                href={hrefWithLang('/#leistungen')}
                className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-white/70 px-5 py-2.5 text-[13px] font-medium text-slate-800 shadow-sm backdrop-blur transition hover:bg-white"
              >
                {t.ctaBtnServices}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

// src/app/agb/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

type Lang = 'de' | 'en'

function normalizeLang(v: unknown): Lang | null {
  if (!v) return null
  const s = Array.isArray(v) ? String(v[0] ?? '') : String(v)
  const x = s.toLowerCase()
  if (x === 'de' || x.startsWith('de-')) return 'de'
  if (x === 'en' || x.startsWith('en-')) return 'en'
  return null
}

const COMPANY = {
  brand: 'MVPWERK',
  legal: 'Flaaq Holding GmbH',
  street: 'Dammstr. 6G',
  zipCity: '30890 Barsinghausen',
  phone: '+49 5035 3169996',
  email: 'info@mvpwerk.de',
}

function getT(lang: Lang) {
  if (lang === 'en') {
    return {
      metaTitle: 'Terms & Conditions – MVPWERK',
      metaDescription:
        'Terms & Conditions of Flaaq Holding GmbH / MVPWERK for software development, MVPs, web apps, SaaS and AI integrations.',
      badge: 'Legal · Version: 15/12/2025',
      h1: 'Terms & Conditions',
      intro: (
        <>
          These Terms govern the cooperation with{' '}
          <span className="font-semibold text-slate-900">{COMPANY.brand}</span> for software development, MVPs, web apps,
          SaaS, API development as well as AI integrations. They are intentionally written to be clear and practical —
          so both sides know where they stand.
        </>
      ),

      tocTitle: 'Contents',
      quickTitle: 'Short & important',
      quick: [
        'Focus: B2B (entrepreneurs within the meaning of § 14 BGB).',
        'Source code & rights: after full payment.',
        'Results/business KPIs: no guarantee — we deliver clean implementation.',
      ],
      questions: 'Questions?',
      contact: 'Contact',

      cta: 'Get in touch →',

      noteTitle: 'Note',
      noteText:
        'This template is practical, but it does not replace individual legal advice. If you want maximum “legal safety” (e.g., acceptance mechanics, liability cap, subcontractors, DPA, AI provider chain), have a lawyer review these terms once.',

      // Sections (EN)
      toc: [
        { id: 'geltung', t: '1. Scope' },
        { id: 'anbieter', t: '2. Provider' },
        { id: 'leistungen', t: '3. Subject matter / Services' },
        { id: 'vertrag', t: '4. Contract conclusion & project start' },
        { id: 'mitwirkung', t: '5. Client cooperation duties' },
        { id: 'aenderungen', t: '6. Changes & change requests' },
        { id: 'termine', t: '7. Deadlines, delay, force majeure' },
        { id: 'abnahme', t: '8. Acceptance & handover' },
        { id: 'verguetung', t: '9. Fees & payment' },
        { id: 'rechte', t: '10. Usage rights & source code' },
        { id: 'dritt', t: '11. Third parties, open source, AI services' },
        { id: 'geheim', t: '12. Confidentiality & references' },
        { id: 'gewaehr', t: '13. Warranty (defects)' },
        { id: 'haftung', t: '14. Liability' },
        { id: 'freist', t: '15. Indemnification' },
        { id: 'laufzeit', t: '16. Term, termination, cancellation' },
        { id: 'schluss', t: '17. Final provisions' },
      ],

      s1: {
        title: '1. Scope',
        p1: (
          <>
            (1) These Terms apply to all contracts, offers and services between{' '}
            <span className="font-semibold text-slate-900">{COMPANY.legal}</span> (hereinafter “Provider”) and its clients
            (hereinafter “Client”) in the area of software development, MVP/SaaS/web app projects, consulting,
            concept/design, UI/UX, implementation, API development, maintenance and AI integrations.
          </>
        ),
        p2: (
          <>
            (2) These Terms primarily target entrepreneurs within the meaning of § 14 BGB. If, exceptionally, consumers
            within the meaning of § 13 BGB commission services, mandatory consumer protection rules apply additionally;
            deviating rules will then be agreed individually.
          </>
        ),
        p3: (
          <>
            (3) Deviating terms of the Client apply only if the Provider has expressly agreed to them in writing.
          </>
        ),
      },

      s2: { title: '2. Provider' },

      s3: {
        title: '3. Subject matter / Services',
        p1: (
          <>
            (1) Depending on the project, the subject matter includes concept, design, development, implementation,
            testing, deployment, documentation and optionally maintenance/further development.
          </>
        ),
        p2: (
          <>
            (2) Unless explicitly agreed in writing as “guaranteed”, the Provider does not owe specific economic results
            (e.g., revenue, conversion, funding, user numbers, SEO rankings). Owed is a professional service according to
            the state of the art within the agreed scope.
          </>
        ),
        p3: (
          <>
            (3) Legal/tax advice, data protection consulting and industry-specific compliance (e.g., GoBD/e-invoicing/IDD)
            are not included unless explicitly commissioned.
          </>
        ),
      },

      s4: {
        title: '4. Contract conclusion & project start',
        p1: (
          <>
            (1) Offers are non-binding unless marked otherwise. A contract is concluded by (a) written acceptance of the
            offer, (b) counter-signature, (c) start approval by email, or (d) commencement of service delivery.
          </>
        ),
        p2: (
          <>
            (2) Project start takes place after clarifying prerequisites (especially access data, content, contacts,
            scope) and — if agreed — after receipt of an advance payment.
          </>
        ),
      },

      s5: {
        title: '5. Client cooperation duties',
        p1: (
          <>
            (1) The Client provides all information, content, decisions, access and approvals required for implementation
            in due time (e.g., domain/DNS, hosting, Git repo, accounts, branding assets, texts).
          </>
        ),
        p2: (
          <>
            (2) If the project is delayed due to missing cooperation, deadlines shift appropriately; the Provider may
            charge additional effort by time spent.
          </>
        ),
        p3: (
          <>
            (3) The Client warrants that provided content is free of third-party rights or that the Client holds the
            necessary usage rights.
          </>
        ),
      },

      s6: {
        title: '6. Changes & change requests',
        p1: (
          <>
            (1) The agreed scope results from the offer/statement of work. Additional requirements (change requests) are
            treated as additional services.
          </>
        ),
        p2: (
          <>
            (2) The Provider evaluates change requests regarding effort, cost, risks and timeline. Changes are only
            implemented after written approval by the Client.
          </>
        ),
        p3: (
          <>
            (3) “Quick tweaks” without approval are performed only if the Provider explicitly agrees; they may affect
            timelines.
          </>
        ),
      },

      s7: {
        title: '7. Deadlines, delay, force majeure',
        p1: (
          <>
            (1) Deadlines are binding only if explicitly confirmed as binding. Otherwise they are planning dates.
          </>
        ),
        p2: (
          <>
            (2) In case of force majeure or circumstances not attributable to the Provider (e.g., third-party/cloud
            outages, strikes, official measures, major internet disruptions), deadlines extend appropriately.
          </>
        ),
        p3: (
          <>
            (3) If the Client is in acceptance/cooperation delay, the Provider may claim reasonable standstill costs and
            additional efforts.
          </>
        ),
      },

      s8: {
        title: '8. Acceptance & handover',
        p1: (
          <>
            (1) For work-like deliverables, acceptance takes place (e.g., release, milestone, MVP go-live) after provision
            and a test phase.
          </>
        ),
        p2: (
          <>
            (2) The Client reviews within 10 business days and declares acceptance or reports material defects. If there
            is no feedback or the deliverable is used productively, it is deemed accepted insofar as no material defects
            exist.
          </>
        ),
        p3: (
          <>
            (3) Acceptance starts the warranty period. Non-material defects do not entitle the Client to refuse
            acceptance.
          </>
        ),
      },

      s9: {
        title: '9. Fees & payment',
        p1: (
          <>
            (1) Fees are according to the offer: fixed price, package, retainer or time & material. Travel/incidental
            costs only by agreement.
          </>
        ),
        p2: (
          <>
            (2) Invoices are due within 7 calendar days without deduction unless agreed otherwise. In case of payment
            delay, the Provider may pause services until payment.
          </>
        ),
        p3: (
          <>
            (3) For fixed price projects, milestone-based installments may be agreed.
          </>
        ),
      },

      s10: {
        title: '10. Usage rights & source code',
        p1: (
          <>
            (1) After full payment, the Client receives the contractually agreed usage rights to custom work results
            (especially source code, UI, configuration).
          </>
        ),
        p2: (
          <>
            (2) Before full payment, all rights remain with the Provider; productive use during this period is only
            permitted with consent.
          </>
        ),
        p3: (
          <>
            (3) Pre-existing components, libraries, frameworks, templates and tooling of the Provider remain its
            property; the Client receives a usage right as required to use the project.
          </>
        ),
      },

      s11: {
        title: '11. Third parties, open source, AI services',
        p1: (
          <>
            (1) Projects often use third parties (e.g., hosting/deployment, database, auth, email, payments, analytics).
            Availability and terms of these services are generally the responsibility of the respective provider.
          </>
        ),
        p2: (
          <>
            (2) Open-source software is used under the respective license terms. The Provider will point out relevant
            license obligations insofar as they are identifiable within the project.
          </>
        ),
        p3: (
          <>
            (3) AI integrations: If agreed, the Provider may integrate AI functions (e.g., chat, assistants,
            classification, automations). The Client remains responsible for content/prompts, validation of outputs and
            lawful use (especially when personal data is involved). No warranty is given for the purely factual accuracy
            of AI outputs.
          </>
        ),
      },

      s12: {
        title: '12. Confidentiality & references',
        p1: (
          <>
            (1) Both parties treat trade secrets and confidential information strictly confidential and use them only for
            contract performance.
          </>
        ),
        p2: (
          <>
            (2) The Provider may name the Client as a reference (name/logo/short project description) unless the Client
            objects in text form. Confidential details will not be published.
          </>
        ),
      },

      s13: {
        title: '13. Warranty (defects)',
        p1: (
          <>
            (1) The Provider warrants the contractually agreed functionality at the time of acceptance. Warranty covers,
            at the Provider’s choice, repair or replacement.
          </>
        ),
        p2: (
          <>
            (2) No warranty for defects caused by changes by the Client/third parties, improper use, third-party changes
            or missing updates.
          </>
        ),
        p3: (
          <>
            (3) For time & material projects (pure services/consulting), warranty rights apply only to the extent
            mandatory by law.
          </>
        ),
      },

      s14: {
        title: '14. Liability',
        p1: (
          <>
            (1) The Provider is liable without limitation in case of intent and gross negligence as well as for damages
            resulting from injury to life, body or health.
          </>
        ),
        p2: (
          <>
            (2) In case of slight negligence, the Provider is liable only for breach of essential contractual duties
            (cardinal duties) and limited to the typically foreseeable damage; otherwise liability is excluded insofar as
            legally permissible.
          </>
        ),
        p3: (
          <>
            (3) Liability cap: Where permissible, total liability is limited to the net fee of the affected project
            section, up to a maximum of the net total fee of the contract.
          </>
        ),
        p4: (
          <>
            (4) For data loss, the Provider is liable only insofar as the Client has taken appropriate data backup
            measures; liability is limited to the restoration effort with proper backups.
          </>
        ),
        p5: (
          <>
            (5) No liability for indirect damages, lost profit, missed savings, pure consequential financial losses or
            third-party claims unless mandatory law provides otherwise.
          </>
        ),
        p6: (
          <>
            (6) The Provider is not liable for disruptions/damages that arise exclusively within the responsibility of
            third-party providers (cloud/hosting/payments/AI providers).
          </>
        ),
      },

      s15: {
        title: '15. Indemnification',
        p1: (
          <>
            The Client indemnifies the Provider from third-party claims resulting from (a) content provided by the Client,
            (b) unlawful use of the software, (c) missing rights/licenses, or (d) violations of data protection/unfair
            competition/copyright law by the Client.
          </>
        ),
      },

      s16: {
        title: '16. Term, termination, cancellation',
        p1: (
          <>
            (1) Contracts end upon delivery of services unless maintenance/retainer is agreed.
          </>
        ),
        p2: (
          <>
            (2) In case of termination/cancellation by the Client, services rendered up to that point must be paid; in
            addition, reserved capacities/milestones may be billed according to the agreement.
          </>
        ),
        p3: (
          <>
            (3) The Provider may terminate for good cause (e.g., repeated payment default, serious breach of cooperation
            duties).
          </>
        ),
      },

      s17: {
        title: '17. Final provisions',
        p1: (
          <>
            (1) German law applies excluding the UN Convention on Contracts for the International Sale of Goods (CISG).
            Place of jurisdiction for merchants is — where permissible — the Provider’s registered office.
          </>
        ),
        p2: (
          <>
            (2) Amendments/supplements require text form (e.g., email) unless stricter form is required.
          </>
        ),
        p3: (
          <>
            (3) If any provision is invalid, the remainder of the contract remains effective; the statutory provision
            applies in place of the invalid one.
          </>
        ),
      },
    }
  }

  return {
    metaTitle: 'AGB',
    metaDescription:
      'Allgemeine Geschäftsbedingungen (AGB) der Flaaq Holding GmbH / MVPWERK für Softwareentwicklung, MVPs, Web Apps, SaaS und KI-Integrationen.',
    badge: 'Rechtliches · Stand: 15.12.2025',
    h1: 'Allgemeine Geschäftsbedingungen (AGB)',
    intro: (
      <>
        Diese AGB regeln die Zusammenarbeit mit{' '}
        <span className="font-semibold text-slate-900">{COMPANY.brand}</span> für Softwareentwicklung, MVPs, Web Apps,
        SaaS, API-Entwicklung sowie KI-Integrationen. Sie sind bewusst klar und projekttauglich formuliert – damit beide
        Seiten wissen, woran sie sind.
      </>
    ),

    tocTitle: 'Inhalt',
    quickTitle: 'Kurz & wichtig',
    quick: [
      'Fokus: B2B (Unternehmer i.S.d. § 14 BGB).',
      'Quellcode & Rechte: nach vollständiger Zahlung.',
      'Ergebnisse/Business-KPIs: kein Garant – wir liefern saubere Umsetzung.',
    ],
    questions: 'Fragen?',
    contact: 'Kontakt',

    cta: 'Kontakt aufnehmen →',

    noteTitle: 'Hinweis',
    noteText:
      'Diese Vorlage ist praxisnah, aber ersetzt keine individuelle Rechtsberatung. Wenn Sie maximal „wasserdicht“ sein wollen (z. B. Abnahme-Mechanik, Haftungs-Cap, Subunternehmer, AVV, KI-Provider-Kette), lassen Sie die AGB einmal kurz anwaltlich gegenprüfen.',

    toc: [
      { id: 'geltung', t: '1. Geltungsbereich' },
      { id: 'anbieter', t: '2. Anbieter' },
      { id: 'leistungen', t: '3. Leistungsgegenstand' },
      { id: 'vertrag', t: '4. Vertragsschluss & Projektstart' },
      { id: 'mitwirkung', t: '5. Mitwirkungspflichten' },
      { id: 'aenderungen', t: '6. Änderungen & Change Requests' },
      { id: 'termine', t: '7. Termine, Verzug, Force Majeure' },
      { id: 'abnahme', t: '8. Abnahme & Übergabe' },
      { id: 'verguetung', t: '9. Vergütung & Zahlung' },
      { id: 'rechte', t: '10. Nutzungsrechte & Quellcode' },
      { id: 'dritt', t: '11. Drittanbieter, Open Source, KI-Dienste' },
      { id: 'geheim', t: '12. Vertraulichkeit & Referenzen' },
      { id: 'gewaehr', t: '13. Gewährleistung (Mängel)' },
      { id: 'haftung', t: '14. Haftung' },
      { id: 'freist', t: '15. Freistellung' },
      { id: 'laufzeit', t: '16. Laufzeit, Kündigung, Storno' },
      { id: 'schluss', t: '17. Schlussbestimmungen' },
    ],

    // DE Sections (Original)
    s1: { title: '1. Geltungsbereich' },
    s2: { title: '2. Anbieter' },
    s3: { title: '3. Leistungsgegenstand' },
    s4: { title: '4. Vertragsschluss & Projektstart' },
    s5: { title: '5. Mitwirkungspflichten des Kunden' },
    s6: { title: '6. Änderungen & Change Requests' },
    s7: { title: '7. Termine, Verzug, höhere Gewalt' },
    s8: { title: '8. Abnahme & Übergabe' },
    s9: { title: '9. Vergütung & Zahlung' },
    s10: { title: '10. Nutzungsrechte & Quellcode' },
    s11: { title: '11. Drittanbieter, Open Source, KI-Dienste' },
    s12: { title: '12. Vertraulichkeit & Referenzen' },
    s13: { title: '13. Gewährleistung (Mängel)' },
    s14: { title: '14. Haftung' },
    s15: { title: '15. Freistellung' },
    s16: { title: '16. Laufzeit, Kündigung, Storno' },
    s17: { title: '17. Schlussbestimmungen' },
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
  const isEn = lang === 'en'

  // ✅ EN: noindex, DE: index
  const robots: Metadata['robots'] = isEn
    ? {
        index: false,
        follow: true,
        googleBot: { index: false, follow: true },
      }
    : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-image-preview': 'large',
          'max-snippet': -1,
          'max-video-preview': -1,
        },
      }

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mvpwerk.de'),
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: {
      canonical: CANONICAL_PATH,
      languages: {
        'de-DE': `${CANONICAL_PATH}?lang=de`,
        'en-US': `${CANONICAL_PATH}?lang=en`,
      },
    },
    openGraph: {
      title: t.metaTitle,
      description: t.metaDescription,
      url: CANONICAL_PATH,
      type: 'website',
      siteName: COMPANY.brand,
      locale: isEn ? 'en_US' : 'de_DE',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.metaTitle,
      description: t.metaDescription,
    },
    robots,
  }
}

const CANONICAL_PATH = '/agb'

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-[18px] font-semibold tracking-tight text-slate-900 sm:text-[20px]">{title}</h2>
      <div className="mt-3 space-y-3 text-[13px] leading-relaxed text-slate-700 sm:text-[14px]">{children}</div>
    </section>
  )
}

export default async function AGBPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const sp = await searchParams
  const lang: Lang = normalizeLang(sp?.lang) ?? 'de'
  const t = getT(lang)

  const hrefWithLang = (href: string) => {
    const params = new URLSearchParams()
    params.set('lang', lang)
    const qs = params.toString()
    return qs ? `${href}?${qs}` : href
  }

  const telHref = `tel:${COMPANY.phone.replace(/\s/g, '')}`
  const mailHref = `mailto:${COMPANY.email}`

  return (
    <main className="relative overflow-hidden bg-white">
      {/* Background wie Hero */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-slate-900/10 blur-3xl md:h-[720px] md:w-[720px]" />
        <div className="absolute -top-16 right-[-120px] h-[420px] w-[420px] rounded-full bg-slate-900/8 blur-3xl md:h-[560px] md:w-[560px]" />

        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_72%)]" />

        <div className="absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_70%)]">
          <div className="mvpwerk-agb-sheen absolute -left-1/2 top-0 h-full w-[200%]" />
        </div>
      </div>

      {/* Header */}
      <header className="relative mx-auto w-full max-w-[1200px] px-4 pt-10 sm:px-6 sm:pt-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
          {t.badge}
        </div>

        <h1 className="mt-4 text-[30px] font-semibold leading-[1.06] tracking-tight text-slate-900 sm:text-[40px] md:text-[46px]">
          {t.h1}
        </h1>

        <p className="mt-3 max-w-[900px] text-[14px] leading-relaxed text-slate-700 sm:text-[15px]">{t.intro}</p>
      </header>

      <div className="relative mx-auto w-full max-w-[1200px] px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          {/* TOC */}
          <div className="lg:col-span-4">
            <div className="sticky top-6">
              <div className="relative overflow-hidden rounded-[1.6rem] border border-slate-900/10 bg-white/70 p-5 shadow-sm backdrop-blur-xl">
                <div className="text-[12px] font-semibold text-slate-900">{t.tocTitle}</div>

                <nav className="mt-3 space-y-1.5">
                  {t.toc.map((x) => (
                    <a
                      key={x.id}
                      href={`#${x.id}`}
                      className="block rounded-xl border border-transparent px-3 py-2 text-[12px] text-slate-700 transition hover:border-slate-900/10 hover:bg-white/70"
                    >
                      {x.t}
                    </a>
                  ))}
                </nav>

                <div className="mt-4 rounded-2xl border border-slate-900/10 bg-white/70 p-4 text-[11px] leading-relaxed text-slate-700 shadow-sm">
                  <div className="font-semibold text-slate-900">{t.quickTitle}</div>
                  <ul className="mt-2 space-y-1.5">
                    {t.quick.map((x) => (
                      <li key={x}>• {x}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 rounded-2xl border border-slate-900/10 bg-white/70 p-4 text-[11px] leading-relaxed text-slate-700 shadow-sm">
                  <div className="font-semibold text-slate-900">{lang === 'en' ? 'Contact' : 'Kontakt'}</div>
                  <div className="mt-2 space-y-1.5">
                    <div>
                      E-Mail:{' '}
                      <a className="font-medium text-slate-900 underline underline-offset-2" href={mailHref}>
                        {COMPANY.email}
                      </a>
                    </div>
                    <div>
                      {lang === 'en' ? 'Phone:' : 'Telefon:'}{' '}
                      <a className="font-medium text-slate-900 underline underline-offset-2" href={telHref}>
                        {COMPANY.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-[11px] text-slate-600">
                  {lang === 'en' ? 'Legal:' : 'Rechtliches:'}{' '}
                  <Link
                    className="font-medium text-slate-900 underline underline-offset-2"
                    href={hrefWithLang('/impressum')}
                  >
                    {lang === 'en' ? 'Imprint' : 'Impressum'}
                  </Link>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] ring-1 ring-inset ring-white/50" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8">
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-[1.8rem] border border-slate-900/10 bg-white/70 p-6 shadow-[0_22px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:p-8">
                <div className="pointer-events-none absolute inset-0 opacity-60">
                  <div className="mvpwerk-agb-card-sheen absolute -left-1/2 top-0 h-full w-[200%]" />
                </div>

                <div className="relative space-y-10">
                  {/* 1 */}
                  <Section id="geltung" title={(t as any).s1.title}>
                    {lang === 'en' ? (
                      <>
                        <p>{(t as any).s1.p1}</p>
                        <p>{(t as any).s1.p2}</p>
                        <p>{(t as any).s1.p3}</p>
                      </>
                    ) : (
                      <>
                        <p>
                          (1) Diese AGB gelten für alle Verträge, Angebote und Leistungen zwischen{' '}
                          <span className="font-semibold text-slate-900">{COMPANY.legal}</span> (nachfolgend „Anbieter“) und
                          seinen Kunden (nachfolgend „Kunde“) im Bereich Softwareentwicklung, MVP-/SaaS-/Web-App-Projekte,
                          Beratung, Konzeption, UI/UX, Implementierung, API-Entwicklung, Wartung sowie KI-Integrationen.
                        </p>
                        <p>
                          (2) Diese AGB richten sich primär an Unternehmer i.S.d. § 14 BGB. Sofern ausnahmsweise Verbraucher
                          i.S.d. § 13 BGB beauftragen, gelten ergänzend zwingende Verbraucherschutzvorschriften; abweichende
                          Regelungen werden dann individuell vereinbart.
                        </p>
                        <p>
                          (3) Abweichende Bedingungen des Kunden gelten nur, wenn der Anbieter ihrer Geltung ausdrücklich
                          schriftlich zugestimmt hat.
                        </p>
                      </>
                    )}
                  </Section>

                  {/* 2 */}
                  <Section id="anbieter" title={(t as any).s2.title}>
                    <div className="rounded-2xl border border-slate-900/10 bg-white/70 p-4 shadow-sm">
                      <div className="text-[12px] font-semibold text-slate-900">{COMPANY.legal}</div>
                      <div className="mt-1 text-[12px] text-slate-700">
                        {COMPANY.street}, {COMPANY.zipCity}
                      </div>
                      <div className="mt-2 grid gap-2 text-[12px] text-slate-700 sm:grid-cols-2">
                        <div>
                          {lang === 'en' ? 'Phone:' : 'Telefon:'}{' '}
                          <a className="font-medium text-slate-900 underline underline-offset-2" href={telHref}>
                            {COMPANY.phone}
                          </a>
                        </div>
                        <div>
                          E-Mail:{' '}
                          <a className="font-medium text-slate-900 underline underline-offset-2" href={mailHref}>
                            {COMPANY.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </Section>

                  {/* 3 */}
                  <Section id="leistungen" title={(t as any).s3.title}>
                    {lang === 'en' ? (
                      <>
                        <p>{(t as any).s3.p1}</p>
                        <p>{(t as any).s3.p2}</p>
                        <p>{(t as any).s3.p3}</p>
                      </>
                    ) : (
                      <>
                        <p>
                          (1) Gegenstand sind – je nach Projekt – Konzeption, Design, Entwicklung, Implementierung, Tests,
                          Deployment, Dokumentation sowie optional Wartung/Weiterentwicklung.
                        </p>
                        <p>
                          (2) Soweit nicht ausdrücklich schriftlich als „garantiert“ vereinbart, schuldet der Anbieter keine
                          bestimmten wirtschaftlichen Ergebnisse (z. B. Umsatz, Conversion, Funding, Nutzerzahlen,
                          SEO-Rankings). Geschuldet ist eine fachgerechte, professionelle Leistung nach Stand der Technik im
                          vereinbarten Umfang.
                        </p>
                        <p>
                          (3) Rechts-/Steuerberatung, Datenschutzberatung sowie branchenspezifische Compliance (z. B.
                          GoBD/E-Rechnung/IDD) sind nicht Bestandteil, sofern nicht ausdrücklich beauftragt.
                        </p>
                      </>
                    )}
                  </Section>

                  {/* 4 */}
                  <Section id="vertrag" title={(t as any).s4.title}>
                    {lang === 'en' ? (
                      <>
                        <p>{(t as any).s4.p1}</p>
                        <p>{(t as any).s4.p2}</p>
                      </>
                    ) : (
                      <>
                        <p>
                          (1) Angebote sind freibleibend, sofern nicht anders gekennzeichnet. Ein Vertrag kommt zustande durch
                          (a) schriftliche Annahme des Angebots, (b) Gegenzeichnung, (c) Startfreigabe per E-Mail oder (d)
                          Beginn der Leistungserbringung.
                        </p>
                        <p>
                          (2) Projektstart erfolgt nach Klärung der Startvoraussetzungen (insb. Zugangsdaten, Inhalte,
                          Ansprechpartner, Scope) und – falls vereinbart – nach Eingang einer Anzahlung.
                        </p>
                      </>
                    )}
                  </Section>

                  {/* 5 */}
                  <Section id="mitwirkung" title={(t as any).s5.title}>
                    {lang === 'en' ? (
                      <>
                        <p>{(t as any).s5.p1}</p>
                        <p>{(t as any).s5.p2}</p>
                        <p>{(t as any).s5.p3}</p>
                      </>
                    ) : (
                      <>
                        <p>
                          (1) Der Kunde stellt alle zur Umsetzung erforderlichen Informationen, Inhalte, Entscheidungen,
                          Zugänge und Freigaben rechtzeitig bereit (z. B. Domain/DNS, Hosting, Git-Repo, Accounts,
                          Branding-Assets, Texte).
                        </p>
                        <p>
                          (2) Verzögert sich das Projekt wegen fehlender Mitwirkung, verschieben sich Termine angemessen; der
                          Anbieter kann Mehraufwände nach Aufwand abrechnen.
                        </p>
                        <p>
                          (3) Der Kunde sichert zu, dass bereitgestellte Inhalte frei von Rechten Dritter sind bzw. er über die
                          erforderlichen Nutzungsrechte verfügt.
                        </p>
                      </>
                    )}
                  </Section>

                  {/* 6 */}
                  <Section id="aenderungen" title={(t as any).s6.title}>
                    {lang === 'en' ? (
                      <>
                        <p>{(t as any).s6.p1}</p>
                        <p>{(t as any).s6.p2}</p>
                        <p>{(t as any).s6.p3}</p>
                      </>
                    ) : (
                      <>
                        <p>
                          (1) Der vereinbarte Leistungsumfang (Scope) ergibt sich aus Angebot/Statement of Work. Zusätzliche
                          Anforderungen (Change Requests) werden als Zusatzleistung behandelt.
                        </p>
                        <p>
                          (2) Der Anbieter bewertet Change Requests hinsichtlich Aufwand, Kosten, Risiken und Timeline. Erst
                          nach schriftlicher Freigabe durch den Kunden werden Änderungen umgesetzt.
                        </p>
                        <p>
                          (3) „Schnell mal“-Änderungen ohne Freigabe erfolgen nur, wenn der Anbieter dem ausdrücklich zustimmt;
                          sie können Zeitpläne beeinflussen.
                        </p>
                      </>
                    )}
                  </Section>

                  {/* 7 */}
                  <Section id="termine" title={(t as any).s7.title}>
                    {lang === 'en' ? (
                      <>
                        <p>{(t as any).s7.p1}</p>
                        <p>{(t as any).s7.p2}</p>
                        <p>{(t as any).s7.p3}</p>
                      </>
                    ) : (
                      <>
                        <p>
                          (1) Termine sind verbindlich nur, wenn ausdrücklich als verbindlich zugesagt. Ansonsten handelt es
                          sich um Plantermine.
                        </p>
                        <p>
                          (2) Bei höherer Gewalt oder nicht vom Anbieter zu vertretenden Umständen (z. B. Ausfälle
                          Drittanbieter/Cloud, Streik, behördliche Maßnahmen, massive Internetstörungen) verlängern sich
                          Fristen angemessen.
                        </p>
                        <p>
                          (3) Gerät der Kunde in Annahme-/Mitwirkungsverzug, kann der Anbieter angemessene Stillstandskosten
                          und Mehraufwände geltend machen.
                        </p>
                      </>
                    )}
                  </Section>

                  {/* 8 */}
                  <Section id="abnahme" title={(t as any).s8.title}>
                    {lang === 'en' ? (
                      <>
                        <p>{(t as any).s8.p1}</p>
                        <p>{(t as any).s8.p2}</p>
                        <p>{(t as any).s8.p3}</p>
                      </>
                    ) : (
                      <>
                        <p>
                          (1) Bei werkvertraglichen Leistungen erfolgt eine Abnahme (z. B. Release, Meilenstein, MVP-Go-Live)
                          nach Bereitstellung und Testphase.
                        </p>
                        <p>
                          (2) Der Kunde prüft innerhalb von 10 Werktagen und erklärt Abnahme oder meldet wesentliche Mängel.
                          Erfolgt keine Rückmeldung oder wird produktiv genutzt, gilt die Leistung als abgenommen, soweit
                          keine wesentlichen Mängel vorliegen.
                        </p>
                        <p>
                          (3) Mit Abnahme beginnt die Gewährleistungsfrist. Nicht wesentliche Mängel berechtigen nicht zur
                          Abnahmeverweigerung.
                        </p>
                      </>
                    )}
                  </Section>

                  {/* 9 */}
                  <Section id="verguetung" title={(t as any).s9.title}>
                    {lang === 'en' ? (
                      <>
                        <p>{(t as any).s9.p1}</p>
                        <p>{(t as any).s9.p2}</p>
                        <p>{(t as any).s9.p3}</p>
                      </>
                    ) : (
                      <>
                        <p>
                          (1) Vergütung erfolgt nach Angebot: Festpreis, Paket, Retainer oder nach Aufwand (Time & Material).
                          Reise-/Nebenkosten nur bei Vereinbarung.
                        </p>
                        <p>
                          (2) Rechnungen sind innerhalb von 7 Kalendertagen ohne Abzug fällig, sofern nichts anderes
                          vereinbart. Bei Zahlungsverzug kann der Anbieter Leistungen bis zur Zahlung pausieren.
                        </p>
                        <p>(3) Bei Festpreisprojekten können Abschlagszahlungen nach Meilensteinen vereinbart werden.</p>
                      </>
                    )}
                  </Section>

                  {/* 10 */}
                  <Section id="rechte" title={(t as any).s10.title}>
                    {lang === 'en' ? (
                      <>
                        <p>{(t as any).s10.p1}</p>
                        <p>{(t as any).s10.p2}</p>
                        <p>{(t as any).s10.p3}</p>
                      </>
                    ) : (
                      <>
                        <p>
                          (1) Der Kunde erhält – nach vollständiger Zahlung – die im Vertrag vereinbarten Nutzungsrechte an
                          den individuell erstellten Arbeitsergebnissen (insb. Quellcode, UI, Konfiguration).
                        </p>
                        <p>
                          (2) Vor vollständiger Zahlung verbleiben sämtliche Rechte beim Anbieter; eine produktive Nutzung ist
                          in diesem Zeitraum nur mit Zustimmung zulässig.
                        </p>
                        <p>
                          (3) Vorbestehende Komponenten, Libraries, Frameworks, Templates und Tooling des Anbieters bleiben
                          dessen Eigentum; der Kunde erhält daran ein Nutzungsrecht, soweit zur Nutzung des Projekts
                          erforderlich.
                        </p>
                      </>
                    )}
                  </Section>

                  {/* 11 */}
                  <Section id="dritt" title={(t as any).s11.title}>
                    {lang === 'en' ? (
                      <>
                        <p>{(t as any).s11.p1}</p>
                        <p>{(t as any).s11.p2}</p>
                        <p>{(t as any).s11.p3}</p>
                      </>
                    ) : (
                      <>
                        <p>
                          (1) Projekte nutzen häufig Drittanbieter (z. B. Hosting/Deployment, Datenbank, Auth, E-Mail,
                          Payments, Analytics). Für Verfügbarkeit und Konditionen dieser Dienste ist grundsätzlich der jeweilige
                          Anbieter verantwortlich.
                        </p>
                        <p>
                          (2) Open-Source-Software wird nach den jeweiligen Lizenzbedingungen eingesetzt. Der Anbieter weist
                          den Kunden auf relevante Lizenzpflichten hin, soweit im Projekt erkennbar.
                        </p>
                        <p>
                          (3) KI-Integrationen: Soweit vereinbart, kann der Anbieter KI-Funktionen (z. B. Chat, Assistenz,
                          Klassifikation, Automationen) integrieren. Der Kunde bleibt verantwortlich für Inhalte/Prompts,
                          Ausgaben-Validierung und den rechtmäßigen Einsatz (insb. bei personenbezogenen Daten). Für rein
                          inhaltliche Richtigkeit von KI-Outputs wird keine Gewähr übernommen.
                        </p>
                      </>
                    )}
                  </Section>

                  {/* 12 */}
                  <Section id="geheim" title={(t as any).s12.title}>
                    {lang === 'en' ? (
                      <>
                        <p>{(t as any).s12.p1}</p>
                        <p>{(t as any).s12.p2}</p>
                      </>
                    ) : (
                      <>
                        <p>
                          (1) Beide Parteien behandeln Geschäftsgeheimnisse und vertrauliche Informationen streng vertraulich
                          und nutzen sie nur zur Vertragsdurchführung.
                        </p>
                        <p>
                          (2) Der Anbieter darf den Kunden als Referenz (Name/Logo/kurze Projektbeschreibung) nennen, sofern
                          der Kunde nicht in Textform widerspricht. Vertrauliche Details werden nicht veröffentlicht.
                        </p>
                      </>
                    )}
                  </Section>

                  {/* 13 */}
                  <Section id="gewaehr" title={(t as any).s13.title}>
                    {lang === 'en' ? (
                      <>
                        <p>{(t as any).s13.p1}</p>
                        <p>{(t as any).s13.p2}</p>
                        <p>{(t as any).s13.p3}</p>
                      </>
                    ) : (
                      <>
                        <p>
                          (1) Der Anbieter gewährleistet die vertraglich vereinbarte Funktionalität zum Zeitpunkt der Abnahme.
                          Gewährleistung umfasst nach Wahl des Anbieters Nachbesserung oder Ersatzlieferung.
                        </p>
                        <p>
                          (2) Keine Gewähr für Fehler, die durch Änderungen des Kunden/ Dritter, unsachgemäße Nutzung,
                          Drittanbieter-Änderungen oder fehlende Updates entstehen.
                        </p>
                        <p>
                          (3) Für Projekte nach Aufwand (reine Dienstleistungen/Consulting) gelten Gewährleistungsrechte nur,
                          soweit gesetzlich zwingend.
                        </p>
                      </>
                    )}
                  </Section>

                  {/* 14 */}
                  <Section id="haftung" title={(t as any).s14.title}>
                    {lang === 'en' ? (
                      <>
                        <p>{(t as any).s14.p1}</p>
                        <p>{(t as any).s14.p2}</p>
                        <p>{(t as any).s14.p3}</p>
                        <p>{(t as any).s14.p4}</p>
                        <p>{(t as any).s14.p5}</p>
                        <p>{(t as any).s14.p6}</p>
                      </>
                    ) : (
                      <>
                        <p>
                          (1) Der Anbieter haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie bei Schäden aus der
                          Verletzung des Lebens, des Körpers oder der Gesundheit.
                        </p>
                        <p>
                          (2) Bei einfacher Fahrlässigkeit haftet der Anbieter nur bei Verletzung wesentlicher Vertragspflichten
                          (Kardinalpflichten) und der Höhe nach begrenzt auf den typischerweise vorhersehbaren Schaden; im
                          Übrigen ist die Haftung ausgeschlossen, soweit gesetzlich zulässig.
                        </p>
                        <p>
                          (3) Haftungshöchstbetrag (Cap): Soweit zulässig, ist die Haftung insgesamt auf die Netto-Vergütung
                          des betroffenen Projektabschnitts begrenzt, maximal auf die Netto-Gesamtvergütung des Vertrags.
                        </p>
                        <p>
                          (4) Für Datenverlust haftet der Anbieter nur, soweit der Kunde angemessene Datensicherungsmaßnahmen
                          getroffen hat; die Haftung ist auf den Wiederherstellungsaufwand bei ordnungsgemäßer Sicherung
                          begrenzt.
                        </p>
                        <p>
                          (5) Keine Haftung für mittelbare Schäden, entgangenen Gewinn, ausgebliebene Einsparungen, reine
                          Vermögensfolgeschäden oder Ansprüche Dritter, sofern nicht zwingendes Recht entgegensteht.
                        </p>
                        <p>
                          (6) Der Anbieter haftet nicht für Störungen/Schäden, die ausschließlich im Verantwortungsbereich von
                          Drittanbietern (Cloud/Hosting/Payments/KI-Provider) entstehen.
                        </p>
                      </>
                    )}
                  </Section>

                  {/* 15 */}
                  <Section id="freist" title={(t as any).s15.title}>
                    {lang === 'en' ? (
                      <p>{(t as any).s15.p1}</p>
                    ) : (
                      <p>
                        Der Kunde stellt den Anbieter von Ansprüchen Dritter frei, die aus (a) vom Kunden bereitgestellten
                        Inhalten, (b) rechtswidriger Nutzung der Software, (c) fehlenden Rechten/Lizenzen oder (d) Verstößen
                        gegen Datenschutz-/Wettbewerbs-/Urheberrecht durch den Kunden resultieren.
                      </p>
                    )}
                  </Section>

                  {/* 16 */}
                  <Section id="laufzeit" title={(t as any).s16.title}>
                    {lang === 'en' ? (
                      <>
                        <p>{(t as any).s16.p1}</p>
                        <p>{(t as any).s16.p2}</p>
                        <p>{(t as any).s16.p3}</p>
                      </>
                    ) : (
                      <>
                        <p>(1) Verträge enden mit Leistungserbringung, sofern nicht Wartung/Retainer vereinbart ist.</p>
                        <p>
                          (2) Bei Kündigung/Storno durch den Kunden sind bis dahin erbrachte Leistungen zu vergüten; zusätzlich
                          können reservierte Kapazitäten/Meilensteine nach Maßgabe der Vereinbarung abgerechnet werden.
                        </p>
                        <p>
                          (3) Der Anbieter kann aus wichtigem Grund kündigen (z. B. wiederholter Zahlungsverzug, schwere
                          Mitwirkungsverletzung).
                        </p>
                      </>
                    )}
                  </Section>

                  {/* 17 */}
                  <Section id="schluss" title={(t as any).s17.title}>
                    {lang === 'en' ? (
                      <>
                        <p>{(t as any).s17.p1}</p>
                        <p>{(t as any).s17.p2}</p>
                        <p>{(t as any).s17.p3}</p>
                      </>
                    ) : (
                      <>
                        <p>
                          (1) Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Gerichtsstand für Kaufleute ist – soweit
                          zulässig – der Sitz des Anbieters.
                        </p>
                        <p>
                          (2) Änderungen/Ergänzungen bedürfen der Textform (z. B. E-Mail), sofern nicht strengere Form vorgeschrieben
                          ist.
                        </p>
                        <p>
                          (3) Sollten einzelne Bestimmungen unwirksam sein, bleibt der Vertrag im Übrigen wirksam; anstelle der
                          unwirksamen Bestimmung gilt die gesetzliche Regelung.
                        </p>
                      </>
                    )}
                  </Section>

                  <div className="rounded-2xl border border-slate-900/10 bg-white/70 p-4 text-[11px] leading-relaxed text-slate-700 shadow-sm">
                    <div className="font-semibold text-slate-900">{t.noteTitle}</div>
                    {t.noteText}
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Link
                      href={hrefWithLang('/kontakt')}
                      className="inline-flex h-12 w-full items-center justify-center rounded-2xl bg-slate-900 px-6 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(15,23,42,0.22)] transition hover:translate-y-[-1px] hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
                    >
                      {t.cta}
                    </Link>

                    <div className="text-center text-[11px] text-slate-600 sm:text-right">
                      {COMPANY.legal} · {COMPANY.zipCity}
                    </div>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-[1.8rem] ring-1 ring-inset ring-white/50" />
              </div>

              {/* Bottom Fade */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-28 sm:h-32">
                <div className="absolute inset-0 mvpwerk-agb-bottom-fade" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .mvpwerk-agb-top-fade{
          background: linear-gradient(
            to bottom,
            #ffffff 0%,
            rgba(255,255,255,0.96) 45%,
            rgba(255,255,255,0.65) 72%,
            rgba(255,255,255,0) 100%
          );
        }
        .mvpwerk-agb-bottom-fade{
          background: linear-gradient(
            to top,
            #ffffff 0%,
            rgba(255,255,255,0.92) 55%,
            rgba(255,255,255,0.0) 100%
          );
        }
        .mvpwerk-agb-sheen{
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(15,23,42,0.05) 35%,
            rgba(15,23,42,0.10) 50%,
            rgba(15,23,42,0.05) 65%,
            transparent 100%
          );
          transform: translateX(-35%);
          animation: agbSheen 10s ease-in-out infinite;
          filter: blur(0.5px);
          will-change: transform, opacity;
        }
        @keyframes agbSheen{
          0%{ transform: translateX(-35%); opacity:0.30; }
          50%{ transform: translateX(0%); opacity:0.60; }
          100%{ transform: translateX(35%); opacity:0.30; }
        }

        .mvpwerk-agb-card-sheen{
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(15,23,42,0.05) 35%,
            rgba(15,23,42,0.10) 50%,
            rgba(15,23,42,0.05) 65%,
            transparent 100%
          );
          transform: translateX(-35%);
          animation: agbCardSheen 9s ease-in-out infinite;
          filter: blur(0.5px);
          will-change: transform, opacity;
        }
        @keyframes agbCardSheen{
          0%{ transform: translateX(-35%); opacity:0.22; }
          50%{ transform: translateX(0%); opacity:0.48; }
          100%{ transform: translateX(35%); opacity:0.22; }
        }

        @media (prefers-reduced-motion: reduce){
          .mvpwerk-agb-sheen,
          .mvpwerk-agb-card-sheen{
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </main>
  )
}

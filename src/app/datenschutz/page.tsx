// src/app/datenschutz/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

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
  managingDirector: 'Christoph Pfad',
  street: 'Dammstr. 6G',
  zipCity: '30890 Barsinghausen',
  phone: '+49 5035 3169996',
  email: 'info@mvpwerk.de',
}

const ADDRESS_ONE_LINE = `${COMPANY.legal}, ${COMPANY.street}, ${COMPANY.zipCity}`

function getT(lang: Lang) {
  if (lang === 'en') {
    return {
      metaTitle: 'Privacy Policy – MVPWERK',
      metaDescription:
        'Privacy Policy of Flaaq Holding GmbH (MVPWERK) – hosting (Vercel), data processing (Supabase), Google Tag Manager & Google Analytics (conversion tracking).',

      badge: 'Privacy · Version: 15/12/2025',
      h1: 'Privacy Policy',
      intro: (
        <>
          This Privacy Policy explains how{' '}
          <span className="font-semibold text-slate-900">{COMPANY.brand}</span> ({COMPANY.legal}) processes personal data —
          including hosting via <span className="font-semibold text-slate-900">Vercel</span>, data processing via{' '}
          <span className="font-semibold text-slate-900">Supabase</span>, and tracking via{' '}
          <span className="font-semibold text-slate-900">Google Tag Manager</span> &amp;{' '}
          <span className="font-semibold text-slate-900">Google Analytics (GA4)</span>.
        </>
      ),

      tocTitle: 'Contents',
      contactBoxTitle: 'Contact',
      legalLinePrefix: 'Legal:',
      imprint: 'Imprint',

      overview: 'Overview',
      responsible: '1. Controller',
      dataTypes: '2. Data types & purposes',
      legalBasis: '3. Legal basis',
      hosting: '4. Hosting (Vercel) & server logs',
      supabase: '5. Supabase (Auth/DB/Storage)',
      contact: '6. Contacting us',
      cookies: '7. Cookies & consent',
      gtm: '8. Google Tag Manager',
      ga: '9. Google Analytics (GA4) & conversion tracking',
      thirdCountry: '10. Third-country transfers',
      retention: '11. Retention period',
      rights: '12. Your rights',
      objection: '13. Objection & withdrawal',
      updates: '14. Updates to this policy',

      // Overview grid labels
      kController: 'Controller',
      kContact: 'Contact',
      kHosting: 'Hosting',
      kApp: 'App/DB/Auth',
      kTracking: 'Tracking',
      kConsent: 'Consent',

      vHosting: 'Vercel (web hosting/edge/logs)',
      vApp: 'Supabase (DB, Auth, Storage)',
      vTracking: 'Google Tag Manager & Google Analytics (GA4)',
      vConsent: 'Tracking usually only after consent (cookie/consent banner)',

      importantTitle: 'Important',
      importantText:
        'We generally configure tracking/conversion tracking so it only activates after your consent (if technically set up). Without consent, only technically necessary processing takes place (e.g., server logs).',

      controllerNote:
        'A data protection officer has not been appointed unless legally required.',

      // Section texts
      dataTypesList: [
        {
          b: 'Usage/log data',
          t: '(e.g., IP address, timestamp, visited page) for technical delivery & security.',
        },
        {
          b: 'Contact/communication data',
          t: '(e.g., name, email, message) to handle inquiries.',
        },
        {
          b: 'Analytics/marketing data',
          t: '(e.g., events/conversions) for reach measurement & optimization — usually only after consent.',
        },
        {
          b: 'App data',
          t: '(when using a demo/app) in Supabase (Auth/DB/Storage), depending on features.',
        },
      ],

      legalBasisList: [
        { b: 'Art. 6(1)(b) GDPR', t: 'Performance of a contract / pre-contract steps (e.g., project inquiry).' },
        { b: 'Art. 6(1)(f) GDPR', t: 'Legitimate interest (security, stability, abuse prevention).' },
        { b: 'Art. 6(1)(a) GDPR', t: 'Consent (e.g., analytics/marketing/conversion tracking).' },
      ],

      hostingP1:
        'This website is provided via Vercel. For delivery and protection of the site, technically necessary data is processed (e.g., server logs, IP address, user agent, referrer, timestamp).',
      hostingP2:
        'Purpose: provide the website, analyze errors, defend against attacks (e.g., DDoS), optimize delivery. Legal basis: Art. 6(1)(f) GDPR (legitimate interest).',

      supabaseP1:
        'For app features (e.g., login/accounts, database, file storage) we use Supabase. Depending on use, this may include account data (email), technical metadata, and content/data stored in the database.',
      supabaseP2:
        'Purpose: provide authentication, data storage, file storage, and app logic. Legal basis: Art. 6(1)(b) GDPR (contract/pre-contract) and/or Art. 6(1)(f) GDPR (operation/security).',

      contactP1:
        'If you contact us (e.g., by email, phone, or contact form), we process the data you provide to handle your request and follow-up questions.',
      contactP2:
        'Legal basis: Art. 6(1)(b) GDPR (pre-contract/contract) or Art. 6(1)(f) GDPR (general communication/organization).',

      cookiesP1:
        'Depending on your selection in the consent/cookie banner, we use cookies or similar technologies. Technically necessary cookies may be set without consent. Analytics/marketing usually only takes place with consent.',

      gtmP1:
        'We use Google Tag Manager to manage website tags centrally. Tag Manager itself generally does not create user profiles, but may technically transmit data (e.g., IP address) to deliver tags.',
      gtmP2:
        'Legal basis: Art. 6(1)(a) GDPR (consent) — unless configured as purely technically necessary. We recommend controlling Tag Manager via consent management.',

      gaP1:
        'We use Google Analytics (GA4) to analyze website usage and measure conversions (e.g., “contact sent”). Events are captured and evaluated.',
      gaP2:
        'Legal basis: Art. 6(1)(a) GDPR (consent). Without consent, analytics/conversion tracking is not executed or only in a restricted manner (depending on technical configuration).',
      gaList: [
        'Purposes: reach measurement, funnel optimization, performance measurement of campaigns.',
        'Scope: page views, interactions, technical parameters (browser/device), events/conversions.',
      ],

      thirdCountryP1:
        'When using services such as Google, processing of data in third countries (e.g., USA) cannot be ruled out. Where required, we rely on appropriate safeguards (e.g., Standard Contractual Clauses and/or applicable certification mechanisms).',

      retentionP1:
        'We store personal data only as long as necessary for the respective purposes or as required by statutory retention obligations. Contact inquiries are generally deleted once fully processed, unless legal obligations require otherwise.',

      rightsList: [
        'Access (Art. 15 GDPR)',
        'Rectification (Art. 16 GDPR)',
        'Erasure (Art. 17 GDPR)',
        'Restriction of processing (Art. 18 GDPR)',
        'Data portability (Art. 20 GDPR)',
        'Objection (Art. 21 GDPR)',
        'Complaint to a supervisory authority (Art. 77 GDPR)',
      ],

      objectionP1:
        'You can withdraw consent at any time with effect for the future. You can also object to processing based on legitimate interests if reasons arising from your particular situation apply.',
      objectionP2Prefix: 'To do so, write to us at ',

      updatesP1:
        'We reserve the right to update this Privacy Policy if legal requirements, services, or data processing change. The current version published on this page applies.',

      cta: 'Get in touch →',
    }
  }

  return {
    metaTitle: 'Datenschutz',
    metaDescription:
      'Datenschutzerklärung der Flaaq Holding GmbH (MVPWERK) – Hosting (Vercel), Datenverarbeitung (Supabase), Google Tag Manager & Google Analytics (Conversion Tracking).',

    badge: 'Datenschutz · Stand: 15.12.2025',
    h1: 'Datenschutzerklärung',
    intro: (
      <>
        Diese Datenschutzerklärung informiert Sie darüber, wie{' '}
        <span className="font-semibold text-slate-900">{COMPANY.brand}</span> ({COMPANY.legal}) personenbezogene Daten
        verarbeitet — inkl. Hosting über <span className="font-semibold text-slate-900">Vercel</span>, Datenverarbeitung
        über <span className="font-semibold text-slate-900">Supabase</span> sowie Tracking über{' '}
        <span className="font-semibold text-slate-900">Google Tag Manager</span> &amp;{' '}
        <span className="font-semibold text-slate-900">Google Analytics (GA4)</span>.
      </>
    ),

    tocTitle: 'Inhalt',
    contactBoxTitle: 'Kontakt',
    legalLinePrefix: 'Rechtliches:',
    imprint: 'Impressum',

    overview: 'Überblick',
    responsible: '1. Verantwortlicher',
    dataTypes: '2. Datenarten & Zwecke',
    legalBasis: '3. Rechtsgrundlagen',
    hosting: '4. Hosting (Vercel) & Server-Logs',
    supabase: '5. Supabase (Auth/DB/Storage)',
    contact: '6. Kontaktaufnahme',
    cookies: '7. Cookies & Einwilligung',
    gtm: '8. Google Tag Manager',
    ga: '9. Google Analytics (GA4) & Conversion Tracking',
    thirdCountry: '10. Drittlandübermittlung',
    retention: '11. Speicherdauer',
    rights: '12. Ihre Rechte',
    objection: '13. Widerspruch & Widerruf',
    updates: '14. Änderungen dieser Erklärung',

    // Overview grid labels
    kController: 'Verantwortlicher',
    kContact: 'Kontakt',
    kHosting: 'Hosting',
    kApp: 'App/DB/Auth',
    kTracking: 'Tracking',
    kConsent: 'Einwilligung',

    vHosting: 'Vercel (Webhosting/Edge/Logs)',
    vApp: 'Supabase (DB, Auth, Storage)',
    vTracking: 'Google Tag Manager & Google Analytics (GA4)',
    vConsent: 'Tracking i.d.R. nur nach Consent (Cookie/Consent-Banner)',

    importantTitle: 'Wichtig',
    importantText:
      'Wir nutzen Tracking/Conversion-Tracking grundsätzlich so, dass es erst nach Ihrer Einwilligung aktiviert wird (sofern technisch eingerichtet). Ohne Einwilligung erfolgt nur technisch notwendige Verarbeitung (z. B. Server-Logs).',

    controllerNote: 'Ein Datenschutzbeauftragter ist nicht bestellt, sofern dies nicht gesetzlich erforderlich ist.',

    dataTypesList: [
      {
        b: 'Nutzungs-/Logdaten',
        t: '(z. B. IP-Adresse, Zeitstempel, aufgerufene Seite) zur technischen Bereitstellung & Sicherheit.',
      },
      {
        b: 'Kontakt-/Kommunikationsdaten',
        t: '(z. B. Name, E-Mail, Nachricht) zur Bearbeitung von Anfragen.',
      },
      {
        b: 'Analyse-/Marketingdaten',
        t: '(z. B. Ereignisse/Conversions) zur Reichweitenmessung und Optimierung – i.d.R. nur nach Einwilligung.',
      },
      {
        b: 'App-Daten',
        t: '(bei Nutzung einer Demo/App) in Supabase (Auth/DB/Storage) je nach Funktionsumfang.',
      },
    ],

    legalBasisList: [
      { b: 'Art. 6 Abs. 1 lit. b DSGVO', t: 'Vertragsdurchführung/Anbahnung (z. B. Projektanfrage).' },
      { b: 'Art. 6 Abs. 1 lit. f DSGVO', t: 'berechtigtes Interesse (Sicherheit, Stabilität, Missbrauchsprävention).' },
      { b: 'Art. 6 Abs. 1 lit. a DSGVO', t: 'Einwilligung (z. B. Analytics/Marketing/Conversion Tracking).' },
    ],

    hostingP1:
      'Diese Website wird über Vercel bereitgestellt. Dabei werden zur Auslieferung und Absicherung der Website technisch notwendige Daten verarbeitet (z. B. Server-Logs, IP-Adresse, User-Agent, Referrer, Zeitstempel).',
    hostingP2:
      'Zweck: Bereitstellung der Website, Fehleranalyse, Abwehr von Angriffen (z. B. DDoS), Optimierung der Auslieferung. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).',

    supabaseP1:
      'Für App-Funktionen (z. B. Login/Accounts, Datenbank, Dateiablage) nutzen wir Supabase. Dabei können je nach Nutzung u. a. Accountdaten (E-Mail), technische Metadaten sowie Inhalte/Daten in der Datenbank verarbeitet werden.',
    supabaseP2:
      'Zweck: Bereitstellung von Authentifizierung, Datenhaltung, Dateispeicherung und App-Logik. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vertragliche/vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (Betrieb/Sicherheit).',

    contactP1:
      'Wenn Sie uns kontaktieren (z. B. per E-Mail, Telefon oder Kontaktformular), verarbeiten wir die von Ihnen übermittelten Daten zur Bearbeitung der Anfrage und für Rückfragen.',
    contactP2:
      'Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertraglich/vertraglich) oder Art. 6 Abs. 1 lit. f DSGVO (allgemeine Kommunikation/Organisation).',

    cookiesP1:
      'Wir verwenden – abhängig von Ihrer Auswahl im Consent-/Cookie-Banner – Cookies bzw. ähnliche Technologien. Technisch notwendige Cookies können ohne Einwilligung gesetzt werden. Analyse/Marketing erfolgt in der Regel nur nach Einwilligung.',

    gtmP1:
      'Wir nutzen den Google Tag Manager, um Website-Tags zentral zu verwalten. Der Tag Manager selbst erstellt in der Regel keine Nutzerprofile, kann jedoch technisch bedingt Daten (z. B. IP-Adresse) übermitteln, um Tags auszuliefern.',
    gtmP2:
      'Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) – sofern der Einsatz nicht als rein technisch notwendig konfiguriert ist. Wir empfehlen, den Tag Manager über ein Consent-Management zu steuern.',

    gaP1:
      'Wir verwenden Google Analytics (GA4), um die Nutzung unserer Website zu analysieren und Conversions zu messen (z. B. „Kontakt gesendet“). Dabei werden Ereignisse (Events) erfasst und ausgewertet.',
    gaP2:
      'Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Ohne Einwilligung wird Analytics/Conversion Tracking nicht oder nur in einer entsprechend eingeschränkten Form ausgeführt (je nach technischer Konfiguration).',
    gaList: [
      'Zwecke: Reichweitenmessung, Funnel-Optimierung, Performance-Messung von Kampagnen.',
      'Umfang: Seitenaufrufe, Interaktionen, technische Parameter (Browser/Device), Events/Conversions.',
    ],

    thirdCountryP1:
      'Bei der Nutzung von Diensten wie Google kann eine Verarbeitung von Daten in Drittländern (z. B. USA) nicht ausgeschlossen werden. Wir stützen die Übermittlung auf geeignete Garantien (z. B. Standardvertragsklauseln und/oder anwendbare Zertifizierungsmechanismen), soweit erforderlich.',

    retentionP1:
      'Wir speichern personenbezogene Daten nur so lange, wie es für die jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen. Kontaktanfragen werden regelmäßig gelöscht, sobald sie abschließend bearbeitet sind, sofern keine gesetzlichen Pflichten entgegenstehen.',

    rightsList: [
      'Auskunft (Art. 15 DSGVO)',
      'Berichtigung (Art. 16 DSGVO)',
      'Löschung (Art. 17 DSGVO)',
      'Einschränkung der Verarbeitung (Art. 18 DSGVO)',
      'Datenübertragbarkeit (Art. 20 DSGVO)',
      'Widerspruch (Art. 21 DSGVO)',
      'Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)',
    ],

    objectionP1:
      'Sie können eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Außerdem können Sie der Verarbeitung auf Grundlage berechtigter Interessen widersprechen, sofern Gründe aus Ihrer besonderen Situation vorliegen.',
    objectionP2Prefix: 'Schreiben Sie uns dazu an ',

    updatesP1:
      'Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich Rechtslage, Dienste oder Datenverarbeitung ändern. Es gilt die jeweils aktuelle Fassung auf dieser Seite.',

    cta: 'Kontakt aufnehmen →',
  }
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}): Promise<Metadata> {
  const sp = await searchParams
  const lang = normalizeLang(sp?.lang) ?? 'de'
  const t = getT(lang)

  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: { canonical: '/datenschutz' },
  }
}

const TOC_DE = [
  { id: 'ueberblick', t: 'Überblick' },
  { id: 'verantwortlicher', t: '1. Verantwortlicher' },
  { id: 'datenarten', t: '2. Datenarten & Zwecke' },
  { id: 'rechtsgrundlagen', t: '3. Rechtsgrundlagen' },
  { id: 'hosting', t: '4. Hosting (Vercel) & Server-Logs' },
  { id: 'supabase', t: '5. Supabase (Auth/DB/Storage)' },
  { id: 'kontakt', t: '6. Kontaktaufnahme' },
  { id: 'cookies', t: '7. Cookies & Einwilligung' },
  { id: 'gtm', t: '8. Google Tag Manager' },
  { id: 'ga', t: '9. Google Analytics (GA4) & Conversion Tracking' },
  { id: 'drittland', t: '10. Drittlandübermittlung' },
  { id: 'speicher', t: '11. Speicherdauer' },
  { id: 'rechte', t: '12. Ihre Rechte' },
  { id: 'widerspruch', t: '13. Widerspruch & Widerruf' },
  { id: 'updates', t: '14. Änderungen dieser Erklärung' },
] as const

const TOC_EN = [
  { id: 'ueberblick', t: 'Overview' },
  { id: 'verantwortlicher', t: '1. Controller' },
  { id: 'datenarten', t: '2. Data types & purposes' },
  { id: 'rechtsgrundlagen', t: '3. Legal basis' },
  { id: 'hosting', t: '4. Hosting (Vercel) & server logs' },
  { id: 'supabase', t: '5. Supabase (Auth/DB/Storage)' },
  { id: 'kontakt', t: '6. Contacting us' },
  { id: 'cookies', t: '7. Cookies & consent' },
  { id: 'gtm', t: '8. Google Tag Manager' },
  { id: 'ga', t: '9. Google Analytics (GA4) & conversion tracking' },
  { id: 'drittland', t: '10. Third-country transfers' },
  { id: 'speicher', t: '11. Retention period' },
  { id: 'rechte', t: '12. Your rights' },
  { id: 'widerspruch', t: '13. Objection & withdrawal' },
  { id: 'updates', t: '14. Updates to this policy' },
] as const

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-[18px] font-semibold tracking-tight text-slate-900 sm:text-[20px]">{title}</h2>
      <div className="mt-3 space-y-3 text-[13px] leading-relaxed text-slate-700 sm:text-[14px]">{children}</div>
    </section>
  )
}

function InfoRow({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1 rounded-2xl border border-slate-900/10 bg-white/70 p-4 shadow-sm backdrop-blur sm:flex-row sm:items-start sm:justify-between sm:gap-4">
      <div className="text-[11px] font-medium text-slate-600">{k}</div>
      <div className="text-[12px] font-semibold text-slate-900 sm:text-right">{v}</div>
    </div>
  )
}

export default async function DatenschutzPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const sp = await searchParams
  const lang = normalizeLang(sp?.lang) ?? 'de'
  const t = getT(lang)

  const hrefWithLang = (href: string) => {
    const params = new URLSearchParams()
    params.set('lang', lang)
    const qs = params.toString()
    return qs ? `${href}?${qs}` : href
  }

  const TOC = lang === 'en' ? TOC_EN : TOC_DE

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
          <div className="mvpwerk-ds-sheen absolute -left-1/2 top-0 h-full w-[200%]" />
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

        <p className="mt-3 max-w-[980px] text-[14px] leading-relaxed text-slate-700 sm:text-[15px]">{t.intro}</p>
      </header>

      <div className="relative mx-auto w-full max-w-[1200px] px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          {/* TOC */}
          <div className="lg:col-span-4">
            <div className="sticky top-6">
              <div className="relative overflow-hidden rounded-[1.6rem] border border-slate-900/10 bg-white/70 p-5 shadow-sm backdrop-blur-xl">
                <div className="text-[12px] font-semibold text-slate-900">{t.tocTitle}</div>

                <nav className="mt-3 space-y-1.5">
                  {TOC.map((x) => (
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
                  <div className="font-semibold text-slate-900">{t.contactBoxTitle}</div>
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
                  {t.legalLinePrefix}{' '}
                  <Link
                    className="font-medium text-slate-900 underline underline-offset-2"
                    href={hrefWithLang('/impressum')}
                  >
                    {t.imprint}
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
                  <div className="mvpwerk-ds-card-sheen absolute -left-1/2 top-0 h-full w-[200%]" />
                </div>

                <div className="relative space-y-10">
                  <Section id="ueberblick" title={t.overview}>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <InfoRow k={t.kController} v={<span>{COMPANY.legal}</span>} />
                      <InfoRow
                        k={t.kContact}
                        v={
                          <span>
                            <a className="underline underline-offset-2" href={mailHref}>
                              {COMPANY.email}
                            </a>{' '}
                            ·{' '}
                            <a className="underline underline-offset-2" href={telHref}>
                              {COMPANY.phone}
                            </a>
                          </span>
                        }
                      />
                      <InfoRow k={t.kHosting} v={<span>{t.vHosting}</span>} />
                      <InfoRow k={t.kApp} v={<span>{t.vApp}</span>} />
                      <InfoRow k={t.kTracking} v={<span>{t.vTracking}</span>} />
                      <InfoRow k={t.kConsent} v={<span>{t.vConsent}</span>} />
                    </div>

                    <div className="mt-4 rounded-2xl border border-slate-900/10 bg-white/70 p-4 text-[12px] leading-relaxed text-slate-700 shadow-sm">
                      <div className="font-semibold text-slate-900">{t.importantTitle}</div>
                      {t.importantText}
                    </div>
                  </Section>

                  <Section id="verantwortlicher" title={t.responsible}>
                    <div className="rounded-2xl border border-slate-900/10 bg-white/70 p-4 shadow-sm">
                      <div className="text-[12px] font-semibold text-slate-900">{COMPANY.legal}</div>
                      <div className="mt-1 text-[12px] text-slate-700">
                        {COMPANY.street}, {COMPANY.zipCity}
                      </div>
                      <div className="mt-2 grid gap-2 text-[12px] text-slate-700 sm:grid-cols-2">
                        <div>
                          {lang === 'en' ? 'Managing director:' : 'Geschäftsführer:'}{' '}
                          <span className="font-medium text-slate-900">{COMPANY.managingDirector}</span>
                        </div>
                        <div>
                          E-Mail:{' '}
                          <a className="font-medium text-slate-900 underline underline-offset-2" href={mailHref}>
                            {COMPANY.email}
                          </a>
                        </div>
                      </div>
                    </div>
                    <p>{t.controllerNote}</p>
                  </Section>

                  <Section id="datenarten" title={t.dataTypes}>
                    <ul className="space-y-2">
                      {t.dataTypesList.map((x) => (
                        <li key={x.b}>
                          • <span className="font-semibold text-slate-900">{x.b}</span> {x.t}
                        </li>
                      ))}
                    </ul>
                  </Section>

                  <Section id="rechtsgrundlagen" title={t.legalBasis}>
                    <ul className="space-y-2">
                      {t.legalBasisList.map((x) => (
                        <li key={x.b}>
                          • <span className="font-semibold text-slate-900">{x.b}</span> – {x.t}
                        </li>
                      ))}
                    </ul>
                  </Section>

                  <Section id="hosting" title={t.hosting}>
                    <p>{t.hostingP1}</p>
                    <p>{t.hostingP2}</p>
                  </Section>

                  <Section id="supabase" title={t.supabase}>
                    <p>{t.supabaseP1}</p>
                    <p>{t.supabaseP2}</p>
                  </Section>

                  <Section id="kontakt" title={t.contact}>
                    <p>{t.contactP1}</p>
                    <p>{t.contactP2}</p>
                  </Section>

                  <Section id="cookies" title={t.cookies}>
                    <p>{t.cookiesP1}</p>
                  </Section>

                  <Section id="gtm" title={t.gtm}>
                    <p>{t.gtmP1}</p>
                    <p>{t.gtmP2}</p>
                  </Section>

                  <Section id="ga" title={t.ga}>
                    <p>{t.gaP1}</p>
                    <p>{t.gaP2}</p>
                    <ul className="space-y-2">
                      {t.gaList.map((x) => (
                        <li key={x}>• {x}</li>
                      ))}
                    </ul>
                  </Section>

                  <Section id="drittland" title={t.thirdCountry}>
                    <p>{t.thirdCountryP1}</p>
                  </Section>

                  <Section id="speicher" title={t.retention}>
                    <p>{t.retentionP1}</p>
                  </Section>

                  <Section id="rechte" title={t.rights}>
                    <ul className="space-y-2">
                      {t.rightsList.map((x) => (
                        <li key={x}>• {x}</li>
                      ))}
                    </ul>
                  </Section>

                  <Section id="widerspruch" title={t.objection}>
                    <p>{t.objectionP1}</p>
                    <p>
                      {t.objectionP2Prefix}
                      <a className="font-medium text-slate-900 underline underline-offset-2" href={mailHref}>
                        {COMPANY.email}
                      </a>
                      .
                    </p>
                  </Section>

                  <Section id="updates" title={t.updates}>
                    <p>{t.updatesP1}</p>
                  </Section>

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
                <div className="absolute inset-0 mvpwerk-ds-bottom-fade" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .mvpwerk-ds-bottom-fade{
          background: linear-gradient(
            to top,
            #ffffff 0%,
            rgba(255,255,255,0.92) 55%,
            rgba(255,255,255,0.0) 100%
          );
        }

        .mvpwerk-ds-sheen{
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(15,23,42,0.05) 35%,
            rgba(15,23,42,0.10) 50%,
            rgba(15,23,42,0.05) 65%,
            transparent 100%
          );
          transform: translateX(-35%);
          animation: dsSheen 10s ease-in-out infinite;
          filter: blur(0.5px);
          will-change: transform, opacity;
        }
        @keyframes dsSheen{
          0%{ transform: translateX(-35%); opacity:0.30; }
          50%{ transform: translateX(0%); opacity:0.60; }
          100%{ transform: translateX(35%); opacity:0.30; }
        }

        .mvpwerk-ds-card-sheen{
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(15,23,42,0.05) 35%,
            rgba(15,23,42,0.10) 50%,
            rgba(15,23,42,0.05) 65%,
            transparent 100%
          );
          transform: translateX(-35%);
          animation: dsCardSheen 9s ease-in-out infinite;
          filter: blur(0.5px);
          will-change: transform, opacity;
        }
        @keyframes dsCardSheen{
          0%{ transform: translateX(-35%); opacity:0.22; }
          50%{ transform: translateX(0%); opacity:0.48; }
          100%{ transform: translateX(35%); opacity:0.22; }
        }

        @media (prefers-reduced-motion: reduce){
          .mvpwerk-ds-sheen,
          .mvpwerk-ds-card-sheen{
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </main>
  )
}

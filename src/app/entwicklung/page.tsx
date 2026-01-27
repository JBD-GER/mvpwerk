// src/app/entwicklung/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'
import { redirect } from 'next/navigation'
import { Resend } from 'resend'
import KontaktFormClient from './KontaktFormClient'

type Lang = 'de' | 'en'
export const dynamic = 'force-dynamic'
export const revalidate = 0
export const runtime = 'nodejs'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mvpwerk.de'
const CANONICAL_PATH = '/entwicklung'

const COMPANY = {
  brand: 'MVPWERK',
  legal: 'Flaaq Holding GmbH',
  managingDirector: 'Christoph Pfad',
  street: 'Dammstr. 6G',
  zipCity: '30890 Barsinghausen',
  phone: '+49 5035 3169996',
  email: 'info@mvpwerk.de',
}

function normalizeLang(v: unknown): Lang | null {
  if (!v) return null
  const s = Array.isArray(v) ? String(v[0] ?? '') : String(v)
  const x = s.toLowerCase()
  if (x === 'de' || x.startsWith('de-')) return 'de'
  if (x === 'en' || x.startsWith('en-')) return 'en'
  return null
}

function escHtml(v: unknown) {
  return String(v ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function safeDecode(v: string) {
  try {
    return decodeURIComponent(v)
  } catch {
    return v
  }
}

function hrefWithLang(href: string, lang: Lang) {
  const params = new URLSearchParams()
  params.set('lang', lang)
  return `${href}?${params.toString()}`
}

type T = {
  metaTitle: string
  metaDescription: string
  badge: string
  h1: string
  sub: string

  nav: {
    services: string
    references: string
    process: string
    faq: string
    contact: string
  }

  trustBar: Array<{ t: string; s: string }>

  heroBulletsTitle: string
  heroBullets: string[]

  servicesH2: string
  servicesIntro: string
  services: Array<{ t: string; s: string }>

  refPill: string
  refH2: string
  refS: string
  refNote: string

  processH2: string
  processIntro: string
  steps: Array<{ t: string; s: string }>

  faqPill: string
  faqH2: string
  faqs: Array<{ q: string; a: string }>

  contactPill: string
  contactH2: string
  contactS: string
  contactWhyTitle: string
  contactNext: string[]
  contactAltTitle: string
  contactAltS: string

  fn: string
  ln: string
  em: string
  ph: string
  msg: string
  privacy: string
  agb: string
  submit: string
  err: string
  back: string
  micro: string
}

function getT(lang: Lang): T {
  if (lang === 'en') {
    return {
      metaTitle: 'Custom software development – MVPWERK',
      metaDescription:
        'Custom software development company: process automation, custom dashboards, software relaunch/modernization. 15+ years combined experience, senior project leadership.',

      badge: 'MVPWERK · Software development',
      h1: 'Custom software development',
      sub: 'We deliver working software — with clear scope, senior project leadership and clean handover.',

      nav: {
        services: 'Services',
        references: 'References',
        process: 'Process',
        faq: 'FAQ',
        contact: 'Contact',
      },

      trustBar: [
        { t: '15+ years experience', s: 'Delivery mindset from real projects.' },
        { t: 'Degree-level engineers', s: 'Maintainable code & clean architecture.' },
        { t: 'Senior project leadership', s: 'Scope, milestones, risks — transparent.' },
        { t: 'Handover-ready & NDA', s: 'Repo, docs, deploy steps — confidential.' },
      ],

      heroBulletsTitle: 'Typical requests',
      heroBullets: [
        'Custom software development — built around your process, not a template',
        'Automate business processes — less friction, fewer errors',
        'Custom dashboard with real logic, roles/permissions, and actions',
        'From idea to go-live: guided, transparent, handover-ready',
      ],

      servicesH2: 'What we build',
      servicesIntro:
        'Tools, portals and products that reduce manual work and run reliably — without chaos and without lock-in.',
      services: [
        { t: 'Custom software development', s: 'Web apps, portals, internal tools, admin panels.' },
        { t: 'SaaS & web apps', s: 'Product development from MVP to go-live — scalable & maintainable.' },
        { t: 'Business process automation', s: 'Workflows, approvals, reminders, integrations.' },
        { t: 'Custom dashboard', s: 'Roles/permissions, actions, KPIs — not just charts.' },
        { t: 'Software relaunch / modernization', s: 'Refactor or rebuild without disrupting operations.' },
        { t: 'Integrations', s: 'APIs, webhooks, third-party tools.' },
      ],

      refPill: 'References',
      refH2: 'Products we built & shipped',
      refS: 'Real systems — click to open in a new tab.',
      refNote:
        'We prefer showing real systems over agency talk. If you want details, we’ll walk you through architecture decisions.',

      processH2: 'Process',
      processIntro: '4 steps. Clear. Fast. Accountable.',
      steps: [
        { t: '1) 30-min call', s: 'Goal, constraints, timeline corridor.' },
        { t: '2) MVP scope', s: 'Roles, screens, data, integrations.' },
        { t: '3) Build in sprints', s: 'Weekly demo + feedback, visible progress.' },
        { t: '4) Launch & handover', s: 'Docs, repo, deploy steps — you keep ownership.' },
      ],

      faqPill: 'FAQ',
      faqH2: 'Questions',
      faqs: [
        { q: 'Do we keep the code?', a: 'Yes. Ownership stays with you. Handover-ready by default.' },
        { q: 'NDA possible?', a: 'Yes. Confidential handling is standard.' },
        { q: 'How do you prevent scope creep?', a: 'Strict MVP scope + milestones. Changes stay transparent.' },
      ],

      contactPill: 'Contact',
      contactH2: 'Send request',
      contactS: 'Required: first name, last name, email, phone + consent checkboxes.',
      contactWhyTitle: 'Next steps',
      contactNext: [
        'You receive a confirmation.',
        'We reply typically the same business day with 2–3 time options.',
        'After the call: short MVP plan + timeline corridor.',
      ],
      contactAltTitle: 'Prefer direct contact?',
      contactAltS: 'Call or email — we respond fast.',
      fn: 'First name',
      ln: 'Last name',
      em: 'Email',
      ph: 'Phone',
      msg: 'Short description (optional)',
      privacy: 'I accept the Privacy Policy',
      agb: 'I accept the Terms (AGB)',
      submit: 'Send request',
      err: 'Error',
      back: 'Back to form',
      micro: 'No obligation · Reply typically same business day',
    }
  }

  return {
    metaTitle: 'Individuelle Softwareentwicklung – MVPWERK',
    metaDescription:
      'Agentur für Softwareentwicklung / individuelle Software Firma: individuelle Software Programmierung, Softwareentwicklung individuell, Individualsoftware entwickeln, Geschäftsprozess Automatisierung (Geschäftsprozess automatisieren), Relaunch Software, Custom Dashboard. 15+ Jahre Team-Erfahrung, Senior-Projektführung.',

    badge: 'MVPWERK · Agentur für Softwareentwicklung',
    h1: 'Individuelle Softwareentwicklung',
    sub: 'Wir liefern funktionierende Software — mit klarem Scope, Senior-Projektführung und sauberer Übergabe.',

    nav: {
      services: 'Leistungen',
      references: 'Referenzen',
      process: 'Ablauf',
      faq: 'FAQ',
      contact: 'Kontakt',
    },

    trustBar: [
      { t: '15+ Jahre Team-Erfahrung', s: 'Delivery-Mindset aus echten Projekten.' },
      { t: 'Studierte Entwickler', s: 'Wartbarer Code & saubere Architektur.' },
      { t: 'Senior-Projektführung', s: 'Scope, Meilensteine, Risiken — transparent.' },
      { t: 'Übergabefähig & NDA', s: 'Repo, Doku, Deploy — vertraulich.' },
    ],

    heroBulletsTitle: 'Typische Anfragen',
    heroBullets: [
      'Softwareentwicklung individuell – exakt nach Prozess, nicht nach Template',
      'Geschäftsprozess automatisieren – weniger Reibung, weniger Fehler',
      'Custom Dashboard mit Logik, Rollen/Rechten und Aktionen',
      'Von Idee zu Go-Live: geführt, transparent, übergabefähig',
    ],

    servicesH2: 'Was wir bauen',
    servicesIntro:
      'Tools, Portale und Produkte, die manuelle Arbeit reduzieren und zuverlässig laufen — ohne Chaos und ohne Lock-in.',
    services: [
      { t: 'Individuelle Software Programmierung', s: 'Web-Apps, Portale, interne Tools, Admin-Panels.' },
      { t: 'SaaS & Web-Apps', s: 'Produktentwicklung von MVP bis Go-Live — skalierbar & wartbar.' },
      { t: 'Geschäftsprozess Automatisierung', s: 'Workflows, Freigaben, Erinnerungen, Integrationen.' },
      { t: 'Custom Dashboard', s: 'Rollen/Rechte, Aktionen, KPIs — nicht nur Charts.' },
      { t: 'Relaunch Software / Modernisierung', s: 'Refactor oder Neuaufbau ohne Stillstand.' },
      { t: 'Integrationen', s: 'APIs, Webhooks, Dritt-Tools.' },
    ],

    refPill: 'Referenzen',
    refH2: 'Produkte, die wir gebaut und live gebracht haben',
    refS: 'Echte Systeme – Klick öffnet im neuen Tab.',
    refNote:
      'Wir zeigen lieber echte Systeme als Agentur-Blabla. Wenn Sie Details wollen, gehen wir Architektur-Entscheidungen transparent durch.',

    processH2: 'Ablauf',
    processIntro: '4 Schritte. Klar. Schnell. Verlässlich.',
    steps: [
      { t: '1) Kurz-Call (30 Min)', s: 'Ziel, Constraints, Timeline-Korridor.' },
      { t: '2) MVP-Scope', s: 'Rollen, Screens, Daten, Integrationen.' },
      { t: '3) Umsetzung in Sprints', s: 'Wöchentliche Demo + Feedback, sichtbarer Fortschritt.' },
      { t: '4) Launch & Übergabe', s: 'Doku, Repo, Deploy — Ownership bleibt bei Ihnen.' },
    ],

    faqPill: 'FAQ',
    faqH2: 'Häufige Fragen',
    faqs: [
      { q: 'Gehört uns der Code?', a: 'Ja. Ownership bleibt bei Ihnen. Übergabefähig ist Standard.' },
      { q: 'NDA möglich?', a: 'Ja. Vertraulichkeit ist Standard.' },
      { q: 'Wie verhindert ihr Scope Creep?', a: 'Klares MVP + Meilensteine. Änderungen bleiben transparent.' },
    ],

    contactPill: 'Kontakt',
    contactH2: 'Anfrage senden',
    contactS: 'Pflichtfelder: Vorname, Nachname, E-Mail, Telefon + Checkboxen.',
    contactWhyTitle: 'Nächste Schritte',
    contactNext: [
      'Sie erhalten eine Bestätigung.',
      'Wir melden uns i. d. R. am selben Werktag mit 2–3 Terminvorschlägen.',
      'Nach dem Call: kurzer MVP-Plan + Timeline-Korridor.',
    ],
    contactAltTitle: 'Lieber direkt?',
    contactAltS: 'Rufen Sie an oder schreiben Sie eine E-Mail – wir reagieren schnell.',
    fn: 'Vorname',
    ln: 'Nachname',
    em: 'E-Mail',
    ph: 'Telefon',
    msg: 'Kurzbeschreibung (optional)',
    privacy: 'Ich akzeptiere die Datenschutzerklärung',
    agb: 'Ich akzeptiere die AGB',
    submit: 'Anfrage senden',
    err: 'Fehler',
    back: 'Zurück zum Formular',
    micro: 'Unverbindlich · Rückmeldung i. d. R. am selben Werktag',
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

  const robots: Metadata['robots'] = isEn
    ? { index: false, follow: true, googleBot: { index: false, follow: true } }
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
    metadataBase: new URL(SITE_URL),
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

/** ---- Server-only Mailversand (alles in dieser Datei) ---- */
async function sendKontaktMail(args: {
  lang: Lang
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
  pageUrl?: string
}) {
  const key = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM // ✅ DEIN ENV: RESEND_FROM
  const to = process.env.CONTACT_TO || COMPANY.email // ✅ DEIN ENV: CONTACT_TO
  const sendConfirmation = String(process.env.SEND_CONTACT_CONFIRMATION || '').toLowerCase() === 'true'

  if (!key || !from) {
    // diese Meldung landet exakt im error=... (wie bisher)
    throw new Error('Missing env vars: RESEND_API_KEY and/or RESEND_FROM')
  }

  const resend = new Resend(key)

  const subject =
    args.lang === 'en'
      ? `New request – ${args.firstName} ${args.lastName}`
      : `Neue Anfrage – ${args.firstName} ${args.lastName}`

  const html = `
    <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; color:#0f172a;">
      <h2 style="margin:0 0 12px 0;">${escHtml(subject)}</h2>

      <div style="margin:0 0 10px 0; color:#475569; font-size:13px;">
        ${escHtml(args.lang === 'en' ? 'Contact details' : 'Kontaktdaten')}
      </div>

      <table style="border-collapse:collapse; width:100%; max-width:760px;">
        <tr><td style="padding:7px 0; width:170px; color:#475569;">Name</td><td style="padding:7px 0;"><strong>${escHtml(
          args.firstName + ' ' + args.lastName
        )}</strong></td></tr>
        <tr><td style="padding:7px 0; width:170px; color:#475569;">E-Mail</td><td style="padding:7px 0;">${escHtml(
          args.email
        )}</td></tr>
        <tr><td style="padding:7px 0; width:170px; color:#475569;">Telefon</td><td style="padding:7px 0;">${escHtml(
          args.phone
        )}</td></tr>
        <tr><td style="padding:7px 0; width:170px; color:#475569;">Nachricht</td><td style="padding:7px 0;">${escHtml(
          args.message || '-'
        ).replaceAll('\n', '<br/>')}</td></tr>
        <tr><td style="padding:7px 0; width:170px; color:#475569;">Seite</td><td style="padding:7px 0;">${escHtml(
          args.pageUrl || '-'
        )}</td></tr>
      </table>

      <hr style="border:none;border-top:1px solid rgba(15,23,42,.12); margin:16px 0;" />
      <div style="color:#64748b; font-size:12px;">
        ${escHtml(COMPANY.legal)} · ${escHtml(COMPANY.zipCity)}
      </div>
    </div>
  `

  // ✅ Mail an dich (CONTACT_TO)
  await resend.emails.send({
    from,
    to,
    subject,
    html,
    replyTo: args.email,
  })

  // ✅ Optional: Bestätigung an den Absender
  if (sendConfirmation) {
    const confirmSubject = args.lang === 'en' ? 'We received your request' : 'Wir haben Ihre Anfrage erhalten'
    const confirmHtml = `
      <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; color:#0f172a;">
        <h2 style="margin:0 0 12px 0;">${escHtml(confirmSubject)}</h2>
        <p style="margin:0 0 10px 0; color:#334155; font-size:14px; line-height:1.6;">
          ${
            args.lang === 'en'
              ? `Thanks, ${escHtml(args.firstName)}. We’ll get back to you shortly.`
              : `Danke, ${escHtml(args.firstName)}. Wir melden uns kurzfristig bei Ihnen.`
          }
        </p>
        <p style="margin:0; color:#64748b; font-size:12px; line-height:1.6;">
          ${escHtml(COMPANY.brand)} · ${escHtml(COMPANY.email)} · ${escHtml(COMPANY.phone)}
        </p>
      </div>
    `
    await resend.emails.send({
      from,
      to: args.email,
      subject: confirmSubject,
      html: confirmHtml,
      replyTo: to,
    })
  }
}


/** ---- Server Action: Form Submit ---- */
async function submitKontakt(formData: FormData) {
  'use server'

  const lang = (String(formData.get('lang') || 'de') as Lang) === 'en' ? 'en' : 'de'

  const firstName = String(formData.get('firstName') || '').trim()
  const lastName = String(formData.get('lastName') || '').trim()
  const email = String(formData.get('email') || '').trim()
  const phone = String(formData.get('phone') || '').trim()
  const message = String(formData.get('message') || '').trim()

  const acceptPrivacy = String(formData.get('acceptPrivacy') || '') === 'on'
  const acceptAgb = String(formData.get('acceptAgb') || '') === 'on'
  const website = String(formData.get('website') || '').trim() // honeypot
  const pageUrl = String(formData.get('pageUrl') || '').trim()

  // Honeypot -> immer "erfolgreich" tun
  if (website) redirect(`/danke?lang=${lang}`)

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (!firstName || !lastName || !emailOk || !phone || !acceptPrivacy || !acceptAgb) {
    const msg =
      lang === 'en'
        ? 'Please fill required fields and accept Privacy Policy & Terms.'
        : 'Bitte Pflichtfelder ausfüllen und Datenschutz & AGB akzeptieren.'
    redirect(`${CANONICAL_PATH}?lang=${lang}&error=${encodeURIComponent(msg)}#kontakt`)
  }

  // ✅ NUR den Mailversand absichern
  try {
    await sendKontaktMail({ lang, firstName, lastName, email, phone, message, pageUrl })
  } catch (e: any) {
    const msg =
      lang === 'en'
        ? `Server error: ${String(e?.message || 'unknown')}`
        : `Serverfehler: ${String(e?.message || 'unbekannt')}`
    redirect(`${CANONICAL_PATH}?lang=${lang}&error=${encodeURIComponent(msg)}#kontakt`)
  }

  // ✅ Redirect MUSS außerhalb des try/catch sein
  redirect(`/danke?lang=${lang}`)
}


/* ------------------------ UI helpers ------------------------ */
function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
      {children}
    </div>
  )
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-[1.8rem] border border-slate-900/10 bg-white/70 p-5 shadow-[0_22px_80px_rgba(15,23,42,0.10)] backdrop-blur-xl sm:p-6">
      <div className="pointer-events-none absolute inset-0 rounded-[1.8rem] ring-1 ring-inset ring-white/50" />
      {children}
    </div>
  )
}

function ReferenceCard({ title, url, desc }: { title: string; url: string; desc: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-3xl border border-slate-900/10 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:bg-white/85 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-[14px] font-semibold text-slate-900">{title}</div>
          <div className="mt-1 text-[12px] text-slate-600">{desc}</div>
          <div className="mt-2 text-[12px] font-medium text-slate-900 underline underline-offset-4">
            {url.replace('https://', '')}
            <span className="ml-1 inline-block transition group-hover:translate-x-0.5">↗</span>
          </div>
        </div>
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-900/10 bg-white">
          <ExternalIcon />
        </span>
      </div>
    </a>
  )
}

function Section({
  id,
  title,
  intro,
  children,
}: {
  id: string
  title: string
  intro?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-[24px] font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-[32px]">
        {title}
      </h2>
      {intro ? (
        <p className="mt-2 max-w-3xl text-[12px] leading-relaxed text-slate-600 sm:text-[13px]">{intro}</p>
      ) : null}
      <div className="mt-5">{children}</div>
    </section>
  )
}

export default async function EntwicklungPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const sp = await searchParams
  const lang: Lang = normalizeLang(sp?.lang) ?? 'de'
  const t = getT(lang)

  const error =
    typeof sp?.error === 'string' ? sp.error : Array.isArray(sp?.error) ? String(sp?.error?.[0] || '') : ''
  const errorText = error ? safeDecode(String(error)) : ''

  const telHref = `tel:${COMPANY.phone.replace(/\s/g, '')}`
  const mailHref = `mailto:${COMPANY.email}`

  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      {/* Background (ruhig) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-220px] top-[-240px] h-[520px] w-[520px] rounded-full bg-slate-900/5 blur-3xl" />
        <div className="absolute right-[-220px] top-[120px] h-[520px] w-[520px] rounded-full bg-slate-900/5 blur-3xl" />
        <div className="absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_70%)]">
          <div className="mvpwerk-dev-sheen absolute -left-1/2 top-0 h-full w-[200%]" />
        </div>
      </div>

      {/* HERO + FORM */}
      <section className="relative overflow-hidden pb-10 pt-6 sm:pt-10">
        <div className="relative mx-auto w-full max-w-[1400px] px-2 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
            {/* LEFT */}
            <div className="lg:col-span-7">
              <Pill>{t.badge}</Pill>

              <h1 className="mt-4 text-[34px] font-semibold leading-[1.06] tracking-tight text-slate-900 sm:text-[46px] md:text-[56px]">
                {t.h1}
              </h1>

              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-700 sm:text-[16px]">{t.sub}</p>

              {/* Trust bar */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {t.trustBar.map((x) => (
                  <div
                    key={x.t}
                    className="rounded-3xl border border-slate-900/10 bg-white/70 p-4 shadow-sm backdrop-blur"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-2xl border border-slate-900/10 bg-white">
                        <ShieldIcon />
                      </span>
                      <div>
                        <div className="text-[12px] font-semibold text-slate-900">{x.t}</div>
                        <div className="mt-1 text-[12px] leading-relaxed text-slate-600">{x.s}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Reasons */}
              <div className="mt-7 rounded-[2rem] border border-slate-900/10 bg-white/55 p-5 shadow-sm backdrop-blur-xl sm:p-6">
                <div className="text-[12px] font-semibold text-slate-900">{t.heroBulletsTitle}</div>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {t.heroBullets.map((x) => (
                    <div
                      key={x}
                      className="flex items-start gap-3 rounded-3xl border border-slate-900/10 bg-white/70 px-4 py-3 shadow-sm backdrop-blur"
                    >
                      <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-xl border border-slate-900/10 bg-white">
                        <CheckIcon />
                      </span>
                      <div className="text-[12px] leading-relaxed text-slate-700">{x}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA (kurz) */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#kontakt"
                  className="inline-flex h-12 items-center justify-center rounded-2xl bg-slate-900 px-6 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(15,23,42,0.18)] transition hover:translate-y-[-1px] hover:bg-slate-800"
                >
                  {t.contactH2} <span className="ml-2">→</span>
                </a>
                <div className="text-[11px] text-slate-600">{t.micro}</div>
              </div>
            </div>

            {/* RIGHT: FORM */}
            <div id="kontakt" className="lg:col-span-5">
              <div className="lg:sticky lg:top-[92px]">
                <Card>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Pill>{t.contactPill}</Pill>
                      <div className="mt-3 text-[18px] font-semibold text-slate-900">{t.contactH2}</div>
                      <div className="mt-1 text-[12px] leading-relaxed text-slate-600">{t.contactS}</div>
                    </div>
                  </div>

                  {/* What happens next */}
                  <div className="mt-4 rounded-3xl border border-slate-900/10 bg-white/60 p-4 text-[12px] text-slate-700 shadow-sm backdrop-blur">
                    <div className="flex items-center gap-2 font-semibold text-slate-900">
                      <RocketIcon /> {t.contactWhyTitle}
                    </div>
                    <ul className="mt-2 space-y-2">
                      {t.contactNext.map((x) => (
                        <li key={x} className="flex items-start gap-2">
                          <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-slate-900/40" />
                          <span className="leading-relaxed">{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Alternate contact */}
                  <div className="mt-3 rounded-3xl border border-slate-900/10 bg-white/60 p-4 text-[12px] text-slate-700 shadow-sm backdrop-blur">
                    <div className="font-semibold text-slate-900">{t.contactAltTitle}</div>
                    <div className="mt-1 text-slate-600">{t.contactAltS}</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <a
                        href={telHref}
                        className="inline-flex items-center gap-2 rounded-2xl border border-slate-900/10 bg-white/70 px-3 py-2 text-[12px] font-medium text-slate-900 shadow-sm transition hover:bg-white/90 hover:shadow-md"
                      >
                        <PhoneIcon /> {COMPANY.phone}
                      </a>
                      <a
                        href={mailHref}
                        className="inline-flex items-center gap-2 rounded-2xl border border-slate-900/10 bg-white/70 px-3 py-2 text-[12px] font-medium text-slate-900 shadow-sm transition hover:bg-white/90 hover:shadow-md"
                      >
                        <MailIcon /> {COMPANY.email}
                      </a>
                    </div>
                  </div>

                  {errorText ? (
                    <div className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 p-3 text-[12px] text-rose-900">
                      <div className="font-semibold">{t.err}</div>
                      <div className="mt-1">{errorText}</div>
                      <div className="mt-2">
                        <a className="underline underline-offset-2" href="#kontakt">
                          {t.back}
                        </a>
                      </div>
                    </div>
                  ) : null}

<KontaktFormClient
  lang={lang}
  pageUrl={`${SITE_URL}${CANONICAL_PATH}?lang=${lang}`}
  privacyHref={hrefWithLang('/datenschutz', lang)}
  agbHref={hrefWithLang('/agb', lang)}
  t={t}
/>
                </Card>
              </div>
            </div>
          </div>

          {/* REFERENCES */}
          <div
            id="referenzen"
            className="mt-10 rounded-[2rem] border border-slate-900/10 bg-white/55 p-5 shadow-sm backdrop-blur-xl sm:p-7"
          >
            <Pill>{t.refPill}</Pill>
            <h2 className="mt-4 text-[24px] font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-[32px]">
              {t.refH2}
            </h2>
            <p className="mt-2 text-[12px] leading-relaxed text-slate-600">{t.refS}</p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <ReferenceCard
                title="Mietakte"
                url="https://www.mietakte.de"
                desc={lang === 'de' ? 'Produkt & Plattform (live)' : 'Product & platform (live)'}
              />
              <ReferenceCard
                title="Gleno"
                url="https://www.gleno.de"
                desc={lang === 'de' ? 'Software & Web-App (live)' : 'Software & web app (live)'}
              />
            </div>

            <div className="mt-5 rounded-3xl border border-slate-900/10 bg-white/70 p-5 text-[12px] text-slate-700 shadow-sm backdrop-blur">
              <div className="flex items-center gap-2 font-semibold text-slate-900">
                <DocIcon /> {lang === 'de' ? 'Hinweis' : 'Note'}
              </div>
              <div className="mt-2 leading-relaxed text-slate-600">{t.refNote}</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="leistungen" className="relative overflow-hidden py-10 sm:py-14">
        <div className="mx-auto w-full max-w-[1400px] px-2 sm:px-6">
          <Card>
            <Section id="leistungen-inner" title={t.servicesH2} intro={t.servicesIntro}>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {t.services.map((c) => (
                  <div
                    key={c.t}
                    className="rounded-3xl border border-slate-900/10 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:bg-white/85 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="text-[13px] font-semibold text-slate-900">{c.t}</div>
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-slate-900/10 bg-white">
                        <SparkIcon />
                      </span>
                    </div>
                    <div className="mt-2 text-[12px] leading-relaxed text-slate-600">{c.s}</div>
                  </div>
                ))}
              </div>
            </Section>
          </Card>
        </div>
      </section>

      {/* PROCESS */}
      <section id="ablauf" className="relative overflow-hidden py-10 sm:py-14">
        <div className="mx-auto w-full max-w-[1400px] px-2 sm:px-6">
          <Card>
            <Section id="ablauf-inner" title={t.processH2} intro={t.processIntro}>
              <div className="grid gap-4">
                {t.steps.map((s) => (
                  <div
                    key={s.t}
                    className="rounded-3xl border border-slate-900/10 bg-white/70 p-5 shadow-sm backdrop-blur"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-[13px] font-semibold text-slate-900">{s.t}</div>
                        <div className="mt-2 text-[12px] leading-relaxed text-slate-600">{s.s}</div>
                      </div>
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-slate-900/10 bg-white">
                        <ArrowIcon />
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border border-slate-900/10 bg-white/70 p-5 text-[12px] text-slate-700 shadow-sm backdrop-blur">
                <div className="flex items-center gap-2 font-semibold text-slate-900">
                  <LockIcon /> {lang === 'de' ? 'Vertraulichkeit & Übergabe' : 'Confidentiality & handover'}
                </div>
                <div className="mt-2 leading-relaxed text-slate-600">
                  {lang === 'de'
                    ? 'Ihre Daten & Prozesse behandeln wir vertraulich. NDA ist möglich. Am Ende bekommen Sie Code, Doku und Deploy-Schritte – damit Sie nicht von uns abhängig werden.'
                    : 'We handle your data and processes confidentially. NDA is possible. At the end you receive code, docs, and deploy steps — so you’re not locked in.'}
                </div>
              </div>
            </Section>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative overflow-hidden pb-16 pt-10 sm:pb-20 sm:pt-14">
        <div className="mx-auto w-full max-w-[1400px] px-2 sm:px-6">
          <Card>
            <Pill>{t.faqPill}</Pill>
            <h2 className="mt-4 text-[24px] font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-[32px]">
              {t.faqH2}
            </h2>

            <div className="mt-5 grid gap-4">
              {t.faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-3xl border border-slate-900/10 bg-white/70 p-5 shadow-sm backdrop-blur"
                >
                  <summary className="cursor-pointer list-none text-[13px] font-semibold text-slate-900">
                    <div className="flex items-center justify-between gap-4">
                      <span>{f.q}</span>
                      <span className="text-slate-500 transition group-open:rotate-45">+</span>
                    </div>
                  </summary>
                  <div className="mt-2 text-[12px] leading-relaxed text-slate-600">{f.a}</div>
                </details>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-slate-900/10 bg-white/70 p-5 text-[12px] text-slate-600 shadow-sm backdrop-blur">
              <div className="font-semibold text-slate-900">{COMPANY.legal}</div>
              <div className="mt-1">
                {COMPANY.street}, {COMPANY.zipCity}
              </div>
              <div className="mt-2 flex flex-wrap gap-3">
                <a className="underline underline-offset-2" href={mailHref}>
                  {COMPANY.email}
                </a>
                <a className="underline underline-offset-2" href={telHref}>
                  {COMPANY.phone}
                </a>
                <Link className="underline underline-offset-2" href={hrefWithLang('/impressum', lang)}>
                  {lang === 'en' ? 'Imprint' : 'Impressum'}
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <style>{`
        .mvpwerk-dev-sheen{
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(15,23,42,0.05) 35%,
            rgba(15,23,42,0.10) 50%,
            rgba(15,23,42,0.05) 65%,
            transparent 100%
          );
          transform: translateX(-35%);
          animation: devSheen 10s ease-in-out infinite;
          filter: blur(0.5px);
          will-change: transform, opacity;
          opacity: .55;
        }
        @keyframes devSheen{
          0%{ transform: translateX(-35%); opacity:0.22; }
          50%{ transform: translateX(0%); opacity:0.48; }
          100%{ transform: translateX(35%); opacity:0.22; }
        }
        @media (prefers-reduced-motion: reduce){
          .mvpwerk-dev-sheen{ animation:none !important; transform:none !important; }
        }
      `}</style>
    </main>
  )
}

/* ------------------------ icons ------------------------ */
function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" stroke="#07183d" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function SparkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2l1.2 6.2L20 10l-6.8 1.8L12 18l-1.2-6.2L4 10l6.8-1.8L12 2z"
        stroke="#07183d"
        strokeWidth="2"
      />
    </svg>
  )
}
function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h12" stroke="#07183d" strokeWidth="2" strokeLinecap="round" />
      <path d="M13 6l6 6-6 6" stroke="#07183d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function ExternalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14 5h5v5" stroke="#07183d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 14L19 5" stroke="#07183d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 14v5H5V5h5" stroke="#07183d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function ShieldIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z"
        stroke="#07183d"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M9.5 12.5l1.8 1.8L15.8 9.8" stroke="#07183d" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
function LockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 11V8a5 5 0 0 1 10 0v3"
        stroke="#07183d"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 11h12v10H6V11z"
        stroke="#07183d"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
function DocIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5z"
        stroke="#07183d"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M14 2v5h5" stroke="#07183d" strokeWidth="2" strokeLinejoin="round" />
      <path d="M8 13h8" stroke="#07183d" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 17h6" stroke="#07183d" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
function RocketIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14 4c3 1 6 4 6 7-3 1-6 2-9 1l-6 6-2-2 6-6c-1-3 0-6 1-9 3 0 6 3 7 6z"
        stroke="#07183d"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M9 15l0 4-3-1" stroke="#07183d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 9h0" stroke="#07183d" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}
function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M22 16.9v3a2 2 0 0 1-2.2 2c-9.6-.9-17.1-8.4-18-18A2 2 0 0 1 3.9 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.9.6 2.7a2 2 0 0 1-.5 2.1L7.8 10c1.6 3 3.9 5.3 6.9 6.9l1.5-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2.1z"
        stroke="#07183d"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}
function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 4h16v16H4V4z" stroke="#07183d" strokeWidth="2" strokeLinejoin="round" />
      <path d="M4 7l8 6 8-6" stroke="#07183d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

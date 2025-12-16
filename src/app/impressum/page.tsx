// src/app/impressum/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

type Lang = 'de' | 'en'

export const dynamic = 'force-dynamic'
export const revalidate = 0


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
  registerCourt: 'Amtsgericht Hannover',
  hbr: 'HRB 223594',
  vatId: 'DE352217621',
} as const

const ADDRESS_ONE_LINE = `${COMPANY.legal}, ${COMPANY.street}, ${COMPANY.zipCity}`

function getT(lang: Lang) {
  if (lang === 'en') {
    return {
      metaTitle: 'Imprint – MVPWERK',
      metaDescription:
        'Imprint of Flaaq Holding GmbH (MVPWERK) – provider information, register, contact, liability, copyright.',
      badge: 'Legal · Imprint',
      h1: 'Imprint',
      intro: (
        <>
          Information pursuant to German law (in particular § 5 TMG and § 18(2) MStV) for{' '}
          <span className="font-semibold text-slate-900">{COMPANY.brand}</span> ({COMPANY.legal}).
        </>
      ),

      tocTitle: 'Contents',
      backHome: 'Back to home',
      contactTitle: 'Contact',

      // TOC / Sections
      toc: [
        { id: 'headnote', t: 'Key information' },
        { id: 'anbieter', t: '1. Provider & Contact' },
        { id: 'vertretung', t: '2. Legal representation' },
        { id: 'register', t: '3. Register & VAT' },
        { id: 'verantwortlich', t: '4. Responsible for content' },
        { id: 'streit', t: '5. Dispute resolution' },
        { id: 'haftung-inhalte', t: '6. Liability for content' },
        { id: 'haftung-links', t: '7. Liability for links' },
        { id: 'urheber', t: '8. Copyright' },
        { id: 'marken', t: '9. Trademarks & notes' },
      ],

      // Section texts (EN)
      s_headnote_title: 'Key information',
      s_headnote_list: [
        { k: 'Provider', v: COMPANY.legal },
        { k: 'Brand', v: COMPANY.brand },
        { k: 'Address', v: `${COMPANY.street}, ${COMPANY.zipCity}` },
        { k: 'Contact', v: `${COMPANY.email} · ${COMPANY.phone}` },
      ],

      s_provider_title: '1. Provider & Contact',
      s_rep_title: '2. Legal representation',
      s_register_title: '3. Register & VAT',
      s_resp_title: '4. Responsible for content',
      s_resp_p: (
        <>
          Responsible for content pursuant to § 18(2) MStV:{' '}
          <span className="font-semibold text-slate-900">{ADDRESS_ONE_LINE}</span>.
        </>
      ),

      s_dispute_title: '5. Dispute resolution',
      s_dispute_p1: (
        <>
          We are not obliged and generally not willing to participate in dispute resolution proceedings before a consumer
          arbitration board, unless legally required in an individual case.
        </>
      ),
      s_dispute_p2: (
        <>
          Note: The EU Online Dispute Resolution (ODR) platform was discontinued as of 20 July 2025. New complaints can no
          longer be submitted there.
        </>
      ),

      s_liab_content_title: '6. Liability for content',
      s_liab_content_p1:
        'As a service provider, we are responsible for our own content on these pages in accordance with general laws. However, we do not assume any liability for the accuracy, completeness and timeliness of the content, insofar as legally permissible.',
      s_liab_content_p2:
        'Liability is only possible from the time we become aware of a specific infringement. If we become aware of corresponding infringements, we will remove such content immediately.',

      s_liab_links_title: '7. Liability for links',
      s_liab_links_p1:
        'This website may contain links to external third-party websites over whose contents we have no influence. Therefore, we cannot assume any liability for these external contents.',
      s_liab_links_p2:
        'The respective provider or operator of the linked pages is always responsible for the contents. If we become aware of infringements, we will remove such links immediately.',

      s_copyright_title: '8. Copyright',
      s_copyright_p1:
        'The contents and works created by the site operator on these pages are subject to German copyright law. Duplication, processing, distribution or any form of commercialization beyond the scope of copyright law requires the prior written consent of the respective author or creator.',
      s_copyright_p2:
        'Downloads and copies of this page are only permitted for private, non-commercial use, insofar as legally permissible.',

      s_trademarks_title: '9. Trademarks & notes',
      s_trademarks_list: [
        'Mentioned trademarks/logos may be the property of their respective rights holders.',
        'Product names serve the description of technologies/services and do not constitute a partnership.',
      ],

      cta: 'Get in touch →',
      footerLine: `${COMPANY.legal} · ${COMPANY.zipCity}`,
      labels: {
        provider: 'Provider',
        brand: 'Brand',
        address: 'Address',
        email: 'Email',
        phone: 'Phone',
        contactForm: 'Contact form',
        managingDirector: 'Managing Director',
        representation: 'Representation',
        registerCourt: 'Register court',
        commercialRegister: 'Commercial register',
        vatId: 'VAT ID',
        vatBasis: 'Legal basis',
        responsible: 'Responsible',
      },
      misc: {
        vatBasisText: 'VAT ID pursuant to § 27a UStG (Germany).',
        representationText: 'Authorized to represent',
      },
    }
  }

  // DE
  return {
    metaTitle: 'Impressum – MVPWERK',
    metaDescription:
      'Impressum der Flaaq Holding GmbH (MVPWERK) – Anbieterkennzeichnung, Register, Kontakt, Haftung, Urheberrecht.',
    badge: 'Rechtliches · Impressum',
    h1: 'Impressum',
    intro: (
      <>
        Angaben gemäß <span className="font-semibold text-slate-900">§ 5 TMG</span> und{' '}
        <span className="font-semibold text-slate-900">§ 18 Abs. 2 MStV</span> für{' '}
        <span className="font-semibold text-slate-900">{COMPANY.brand}</span> ({COMPANY.legal}).
      </>
    ),

    tocTitle: 'Inhalt',
    backHome: 'Zurück zur Startseite',
    contactTitle: 'Kontakt',

    toc: [
      { id: 'headnote', t: 'Pflichtangaben' },
      { id: 'anbieter', t: '1. Anbieter & Kontakt' },
      { id: 'vertretung', t: '2. Vertretungsberechtigt' },
      { id: 'register', t: '3. Register & Umsatzsteuer' },
      { id: 'verantwortlich', t: '4. Verantwortlich i.S.d. MStV' },
      { id: 'streit', t: '5. Streitbeilegung' },
      { id: 'haftung-inhalte', t: '6. Haftung für Inhalte' },
      { id: 'haftung-links', t: '7. Haftung für Links' },
      { id: 'urheber', t: '8. Urheberrecht' },
      { id: 'marken', t: '9. Marken & Hinweise' },
    ],

    s_headnote_title: 'Pflichtangaben',
    s_headnote_list: [
      { k: 'Anbieter', v: COMPANY.legal },
      { k: 'Marke', v: COMPANY.brand },
      { k: 'Anschrift', v: `${COMPANY.street}, ${COMPANY.zipCity}` },
      { k: 'Kontakt', v: `${COMPANY.email} · ${COMPANY.phone}` },
    ],

    s_provider_title: '1. Anbieter & Kontakt',
    s_rep_title: '2. Vertretungsberechtigt',
    s_register_title: '3. Register & Umsatzsteuer',
    s_resp_title: '4. Verantwortlich i.S.d. MStV',
    s_resp_p: (
      <>
        Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:{' '}
        <span className="font-semibold text-slate-900">{ADDRESS_ONE_LINE}</span>.
      </>
    ),

    s_dispute_title: '5. Streitbeilegung',
    s_dispute_p1: (
      <>
        Wir sind nicht verpflichtet und grundsätzlich nicht bereit, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen, sofern nicht gesetzlich zwingend.
      </>
    ),
    s_dispute_p2: (
      <>
        Hinweis: Die EU-Online-Streitbeilegungsplattform (OS) wurde zum 20.07.2025 eingestellt. Neue Beschwerden können dort
        nicht mehr eingereicht werden.
      </>
    ),

    s_liab_content_title: '6. Haftung für Inhalte',
    s_liab_content_p1:
      'Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir übernehmen jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte, soweit gesetzlich zulässig.',
    s_liab_content_p2:
      'Eine Haftung ist erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.',

    s_liab_links_title: '7. Haftung für Links',
    s_liab_links_p1:
      'Diese Website enthält ggf. Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.',
    s_liab_links_p2:
      'Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden derartige Links umgehend entfernt.',

    s_copyright_title: '8. Urheberrecht',
    s_copyright_p1:
      'Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.',
    s_copyright_p2:
      'Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet, soweit gesetzlich zulässig.',

    s_trademarks_title: '9. Marken & Hinweise',
    s_trademarks_list: [
      'Genannte Marken/Logos können Eigentum der jeweiligen Rechteinhaber sein.',
      'Produktnamen dienen der Beschreibung von Technologien/Leistungen und begründen keine Partnerschaft.',
    ],

    cta: 'Kontakt aufnehmen →',
    footerLine: `${COMPANY.legal} · ${COMPANY.zipCity}`,
    labels: {
      provider: 'Anbieter',
      brand: 'Marke',
      address: 'Anschrift',
      email: 'E-Mail',
      phone: 'Telefon',
      contactForm: 'Kontaktformular',
      managingDirector: 'Geschäftsführer',
      representation: 'Vertretung',
      registerCourt: 'Registergericht',
      commercialRegister: 'Handelsregister',
      vatId: 'USt-IdNr.',
      vatBasis: 'Rechtsgrundlage',
      responsible: 'Verantwortlich',
    },
    misc: {
      vatBasisText: 'USt-IdNr. gemäß § 27 a UStG',
      representationText: 'Vertretungsberechtigt',
    },
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
    alternates: { canonical: '/impressum' },
    robots: { index: true, follow: true },
  }
}

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

export default async function ImpressumPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const sp = await searchParams
  const lang = normalizeLang(sp?.lang) ?? 'de'
  const t = getT(lang)

  const hrefWithLang = (href: string) => {
    const params = new URLSearchParams()
    if (lang) params.set('lang', lang)
    const qs = params.toString()
    return qs ? `${href}?${qs}` : href
  }

  return (
    <main className="relative overflow-hidden bg-white">
      {/* Background wie Hero */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-slate-900/10 blur-3xl md:h-[720px] md:w-[720px]" />
        <div className="absolute -top-16 right-[-120px] h-[420px] w-[420px] rounded-full bg-slate-900/8 blur-3xl md:h-[560px] md:w-[560px]" />

        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_72%)]" />

        <div className="absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_70%)]">
          <div className="mvpwerk-imp-sheen absolute -left-1/2 top-0 h-full w-[200%]" />
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
                  <div className="font-semibold text-slate-900">{t.contactTitle}</div>
                  <div className="mt-2 space-y-1.5">
                    <div>
                      {t.labels.email}:{' '}
                      <a className="font-medium text-slate-900 underline underline-offset-2" href={`mailto:${COMPANY.email}`}>
                        {COMPANY.email}
                      </a>
                    </div>
                    <div>
                      {t.labels.phone}:{' '}
                      <a
                        className="font-medium text-slate-900 underline underline-offset-2"
                        href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                      >
                        {COMPANY.phone}
                      </a>
                    </div>
                    <div className="pt-1">
                      <Link className="font-medium text-slate-900 underline underline-offset-2" href={hrefWithLang('/kontakt')}>
                        /kontakt
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-[11px] text-slate-600">
                  {t.backHome}{' '}
                  <Link href={hrefWithLang('/')} className="font-medium text-slate-900 underline underline-offset-2">
                    {lang === 'en' ? 'Home' : 'Startseite'}
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
                  <div className="mvpwerk-imp-card-sheen absolute -left-1/2 top-0 h-full w-[200%]" />
                </div>

                <div className="relative space-y-10">
                  <Section id="headnote" title={t.s_headnote_title}>
                    <div className="rounded-2xl border border-slate-900/10 bg-white/70 p-4 text-[12px] leading-relaxed text-slate-700 shadow-sm">
                      <div className="font-semibold text-slate-900">{lang === 'en' ? 'Short & clear' : 'Kurz & klar'}</div>
                      <ul className="mt-2 space-y-1.5">
                        {t.s_headnote_list.map((x) => (
                          <li key={x.k}>
                            • {x.k}: <span className="font-medium text-slate-900">{x.v}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Section>

                  <Section id="anbieter" title={t.s_provider_title}>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <InfoRow k={t.labels.provider} v={COMPANY.legal} />
                      <InfoRow k={t.labels.brand} v={COMPANY.brand} />
                      <InfoRow k={t.labels.address} v={<span className="inline-block">{COMPANY.street}, {COMPANY.zipCity}</span>} />
                      <InfoRow
                        k={t.labels.email}
                        v={
                          <a className="underline underline-offset-2" href={`mailto:${COMPANY.email}`}>
                            {COMPANY.email}
                          </a>
                        }
                      />
                      <InfoRow
                        k={t.labels.phone}
                        v={
                          <a className="underline underline-offset-2" href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}>
                            {COMPANY.phone}
                          </a>
                        }
                      />
                      <InfoRow
                        k={t.labels.contactForm}
                        v={
                          <Link className="underline underline-offset-2" href={hrefWithLang('/kontakt')}>
                            /kontakt
                          </Link>
                        }
                      />
                    </div>
                  </Section>

                  <Section id="vertretung" title={t.s_rep_title}>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <InfoRow k={t.labels.managingDirector} v={<span className="font-semibold">{COMPANY.managingDirector}</span>} />
                      <InfoRow k={t.labels.representation} v={<span>{t.misc.representationText}</span>} />
                    </div>
                  </Section>

                  <Section id="register" title={t.s_register_title}>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <InfoRow k={t.labels.registerCourt} v={COMPANY.registerCourt} />
                      <InfoRow k={t.labels.commercialRegister} v={COMPANY.hbr} />
                      <InfoRow k={t.labels.vatId} v={<span className="font-semibold">{COMPANY.vatId}</span>} />
                      <InfoRow k={t.labels.vatBasis} v={<span>{t.misc.vatBasisText}</span>} />
                    </div>
                  </Section>

                  <Section id="verantwortlich" title={t.s_resp_title}>
                    <p>{t.s_resp_p}</p>
                  </Section>

                  <Section id="streit" title={t.s_dispute_title}>
                    <p>{t.s_dispute_p1}</p>
                    <p>{t.s_dispute_p2}</p>
                  </Section>

                  <Section id="haftung-inhalte" title={t.s_liab_content_title}>
                    <p>{t.s_liab_content_p1}</p>
                    <p>{t.s_liab_content_p2}</p>
                  </Section>

                  <Section id="haftung-links" title={t.s_liab_links_title}>
                    <p>{t.s_liab_links_p1}</p>
                    <p>{t.s_liab_links_p2}</p>
                  </Section>

                  <Section id="urheber" title={t.s_copyright_title}>
                    <p>{t.s_copyright_p1}</p>
                    <p>{t.s_copyright_p2}</p>
                  </Section>

                  <Section id="marken" title={t.s_trademarks_title}>
                    <div className="rounded-2xl border border-slate-900/10 bg-white/70 p-4 text-[12px] leading-relaxed text-slate-700 shadow-sm">
                      <div className="font-semibold text-slate-900">{lang === 'en' ? 'Trademarks / logos' : 'Marken / Logos'}</div>
                      <ul className="mt-2 space-y-1.5">
                        {t.s_trademarks_list.map((x) => (
                          <li key={x}>• {x}</li>
                        ))}
                      </ul>
                    </div>
                  </Section>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Link
                      href={hrefWithLang('/kontakt')}
                      className="inline-flex h-12 w-full items-center justify-center rounded-2xl bg-slate-900 px-6 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(15,23,42,0.22)] transition hover:translate-y-[-1px] hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
                    >
                      {t.cta}
                    </Link>

                    <div className="text-center text-[11px] text-slate-600 sm:text-right">{t.footerLine}</div>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-[1.8rem] ring-1 ring-inset ring-white/50" />
              </div>

              {/* Bottom Fade */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-28 sm:h-32">
                <div className="absolute inset-0 mvpwerk-imp-bottom-fade" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .mvpwerk-imp-bottom-fade{
          background: linear-gradient(
            to top,
            #ffffff 0%,
            rgba(255,255,255,0.92) 55%,
            rgba(255,255,255,0.0) 100%
          );
        }

        .mvpwerk-imp-sheen{
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(15,23,42,0.05) 35%,
            rgba(15,23,42,0.10) 50%,
            rgba(15,23,42,0.05) 65%,
            transparent 100%
          );
          transform: translateX(-35%);
          animation: impSheen 10s ease-in-out infinite;
          filter: blur(0.5px);
          will-change: transform, opacity;
        }
        @keyframes impSheen{
          0%{ transform: translateX(-35%); opacity:0.30; }
          50%{ transform: translateX(0%); opacity:0.60; }
          100%{ transform: translateX(35%); opacity:0.30; }
        }

        .mvpwerk-imp-card-sheen{
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(15,23,42,0.05) 35%,
            rgba(15,23,42,0.10) 50%,
            rgba(15,23,42,0.05) 65%,
            transparent 100%
          );
          transform: translateX(-35%);
          animation: impCardSheen 9s ease-in-out infinite;
          filter: blur(0.5px);
          will-change: transform, opacity;
        }
        @keyframes impCardSheen{
          0%{ transform: translateX(-35%); opacity:0.22; }
          50%{ transform: translateX(0%); opacity:0.48; }
          100%{ transform: translateX(35%); opacity:0.22; }
        }

        @media (prefers-reduced-motion: reduce){
          .mvpwerk-imp-sheen,
          .mvpwerk-imp-card-sheen{
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </main>
  )
}

// src/app/kontakt/page.tsx
import type { Metadata } from 'next'
import Image from 'next/image'
import KontaktClient from './KontaktClient'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mvpwerk.de'
const TEAM_IMAGE = '/bilder/gruppenbild_mvpwerk.png'

export const metadata: Metadata = {
  title: 'Kontakt – MVPWERK',
  description:
    'Kontakt zu MVPWERK: Projekt anfragen für MVP, SaaS oder Web App. Pflichtfelder: Vorname, Nachname, E-Mail, Telefon. Antwort meist am selben Tag.',
  alternates: { canonical: '/kontakt' },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/kontakt`,
    title: 'Kontakt – MVPWERK',
    description: 'Projekt anfragen: MVP, SaaS, Web App – schnell, sauber, übergabefähig.',
    images: [
      {
        url: `${SITE_URL}/og/kontakt.png`,
        width: 1200,
        height: 630,
        alt: 'Kontakt – MVPWERK',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontakt – MVPWERK',
    description: 'Projekt anfragen: MVP, SaaS, Web App – schnell, sauber, übergabefähig.',
    images: [`${SITE_URL}/og/kontakt.png`],
  },
  robots: { index: true, follow: true },
}

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={[
        'relative overflow-hidden rounded-[1.5rem] border border-slate-900/10 bg-white/70',
        'shadow-[0_18px_60px_rgba(15,23,42,0.10)] backdrop-blur-xl',
        className,
      ].join(' ')}
    >
      {children}
      <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] ring-1 ring-inset ring-white/50" />
    </div>
  )
}

function Bubble({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={[
        'flex h-9 w-9 shrink-0 items-center justify-center rounded-full',
        'border border-slate-900/10 bg-white/80 text-slate-900/70 shadow-sm',
      ].join(' ')}
      aria-hidden
    >
      {children}
    </span>
  )
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="block h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6l3 2" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="block h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 3l8 4v6c0 5-3 8-8 8s-8-3-8-8V7l8-4z" />
    </svg>
  )
}

function ChatIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="block h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 15a4 4 0 0 1-4 4H7l-4 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
    </svg>
  )
}

export default function KontaktPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Kontakt – MVPWERK',
    url: `${SITE_URL}/kontakt`,
    isPartOf: { '@type': 'WebSite', name: 'MVPWERK', url: SITE_URL },
  }

  return (
    <main className="relative overflow-x-hidden bg-white text-slate-900">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-slate-900/8 blur-3xl md:h-[680px] md:w-[680px]" />
        <div className="absolute -top-10 right-[-140px] h-[380px] w-[380px] rounded-full bg-slate-900/6 blur-3xl md:h-[520px] md:w-[520px]" />
        <div className="absolute inset-0 opacity-55 [background-image:linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_42%,transparent_72%)]" />
      </div>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header className="relative mx-auto w-full max-w-[1120px] px-4 pt-8 sm:px-6 sm:pt-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
          Kontakt
        </div>

        <h1 className="mt-3 text-[28px] font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-[38px] md:text-[44px]">
          Projekt anfragen – ohne Umwege.
        </h1>

        <p className="mt-2 max-w-[820px] text-[13px] leading-relaxed text-slate-700 sm:text-[14px]">
          Sie schicken die Basics – wir melden uns mit der schnellsten, sauberen Route (Scope, Timeline, passende
          Bausteine).
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
            Erstgespräch (15–30 Min) · unverbindlich
          </span>

          <span className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
            <ClockIcon />
            Antwort meist am selben Tag
          </span>

          <span className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
            <ShieldIcon />
            NDA möglich · vertraulich
          </span>
        </div>
      </header>

      {/* Content */}
      <section className="relative mx-auto w-full max-w-[1120px] px-4 pb-14 pt-8 sm:px-6 sm:pb-16">
        <div className="grid gap-5 lg:grid-cols-12 lg:items-stretch">
          {/* Left */}
          <div className="lg:col-span-5">
            <Card className="h-full flex flex-col">
              <div className="relative flex-1 min-h-[320px] w-full">
                {/* Image card */}
                <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
                  <Image src={TEAM_IMAGE} alt="Team – MVPWERK" fill className="object-cover object-top" priority />
                </div>

                {/* Floating seals box (wie in TeamSection) */}
                <div className="absolute bottom-3 left-1/2 z-10 w-[calc(100%-1.25rem)] -translate-x-1/2 sm:bottom-4 sm:w-[calc(100%-2rem)]">
                  <div className="rounded-[1.4rem] border border-slate-900/10 bg-white/85 p-3 shadow-[0_18px_55px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:rounded-[1.6rem] sm:p-5">
                    <div className="flex items-center justify-between gap-2">
                      <div className="truncate text-[11px] font-semibold text-slate-900 sm:text-[12px]">
                        Partner &amp; Auszeichnung
                      </div>

                      <div className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-900/10 bg-white/90 px-2.5 py-1 text-[10px] font-medium text-slate-700 shadow-sm sm:px-3 sm:text-[11px]">
                        <span className="text-slate-900">Top bewertet</span>
                        <span className="text-amber-500">★★★★★</span>
                        <span className="text-slate-900">4.9</span>
                      </div>
                    </div>

                    <div className="mt-3 grid grid-cols-3 gap-2 sm:mt-4 sm:gap-3">
                      <div className="flex items-center justify-center rounded-2xl border border-slate-900/10 bg-white/90 p-2 shadow-sm sm:p-3">
                        <div className="relative h-[42px] w-full sm:h-[62px]">
                          <Image
                            src="/bilder/Partner-RGB.webp"
                            alt="Google Partner"
                            fill
                            sizes="(min-width: 640px) 180px, 33vw"
                            className="object-contain"
                            quality={100}
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-center rounded-2xl border border-slate-900/10 bg-white/90 p-2 shadow-sm sm:p-3">
                        <div className="relative h-[42px] w-full sm:h-[62px]">
                          <Image
                            src="/bilder/TOP-Experten_Siegel_2020.png"
                            alt="TOP Experten Siegel 2020"
                            fill
                            sizes="(min-width: 640px) 180px, 33vw"
                            className="object-contain"
                            quality={100}
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-center rounded-2xl border border-slate-900/10 bg-white/90 p-2 shadow-sm sm:p-3">
                        <div className="relative h-[42px] w-full sm:h-[62px]">
                          <Image
                            src="/bilder/TOP-Experten_Siegel_2021.png"
                            alt="TOP Experten Siegel 2021"
                            fill
                            sizes="(min-width: 640px) 180px, 33vw"
                            className="object-contain"
                            quality={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* subtle inner ring */}
                <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] ring-1 ring-inset ring-white/40" />
              </div>

              {/* darunter: nur kurzer Textblock (ohne „So läuft’s ab“) */}
              <div className="p-5">
                <div className="rounded-2xl border border-slate-900/10 bg-white/60 p-4 text-[12px] text-slate-700 backdrop-blur">
                  <div className="font-semibold text-slate-900">Kurz. Klar. Unverbindlich.</div>
                  <div className="mt-1 text-slate-600">
                    Ziel: Klarheit zu Scope, Timeline und Budgetrahmen – ohne Overengineering.
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right */}
          <div className="lg:col-span-7">
            <div id="kontakt-form" className="h-full scroll-mt-24">
              <KontaktClient />
            </div>
          </div>
        </div>

        {/* Bottom box */}
        <div className="mt-5">
          <Card className="p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <Bubble>
                <ChatIcon />
              </Bubble>
              <div className="min-w-0">
                <div className="text-[13px] font-semibold text-slate-900">Was Sie im Erstgespräch bekommen</div>
                <div className="mt-1 text-[12px] leading-relaxed text-slate-600">
                  Eine klare technische Empfehlung – pragmatisch, realistisch, übergabefähig.
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-slate-900/10 bg-white/60 p-4 text-[12px] text-slate-700 backdrop-blur">
                <div className="font-semibold text-slate-900">Format</div>
                <div className="mt-1 text-slate-600">Zoom / Google Meet / Telefon</div>
              </div>
              <div className="rounded-2xl border border-slate-900/10 bg-white/60 p-4 text-[12px] text-slate-700 backdrop-blur">
                <div className="font-semibold text-slate-900">Scope</div>
                <div className="mt-1 text-slate-600">MVP-Schnitt + Muss-Kriterien</div>
              </div>
              <div className="rounded-2xl border border-slate-900/10 bg-white/60 p-4 text-[12px] text-slate-700 backdrop-blur">
                <div className="font-semibold text-slate-900">Timeline</div>
                <div className="mt-1 text-slate-600">Realistische Schritte & Reihenfolge</div>
              </div>
              <div className="rounded-2xl border border-slate-900/10 bg-white/60 p-4 text-[12px] text-slate-700 backdrop-blur">
                <div className="font-semibold text-slate-900">Setup</div>
                <div className="mt-1 text-slate-600">Next.js · Vercel · Supabase</div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}

import Link from 'next/link'

function FooterLink({
  href,
  children,
  external,
}: {
  href: string
  children: React.ReactNode
  external?: boolean
}) {
  const base =
    'inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[12px] font-medium text-slate-700 shadow-sm backdrop-blur transition hover:bg-white hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10'

  if (external) {
    return (
      <a className={base} href={href} target="_blank" rel="noopener noreferrer">
        {children}
        <span className="text-slate-400">↗</span>
      </a>
    )
  }

  return (
    <Link className={base} href={href}>
      {children}
    </Link>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-slate-900/10 bg-white">
      {/* ultra-clean background (bleibt weiß) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-slate-900/5 blur-3xl md:h-[720px] md:w-[720px]" />
        <div className="absolute -bottom-48 right-[-140px] h-[520px] w-[520px] rounded-full bg-slate-900/4 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-4 py-10 sm:px-6 sm:py-12">
        {/* Top row */}
        <div className="grid gap-8 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
              MVPWERK · Made in Germany
            </div>

            <h3 className="mt-4 text-[18px] font-semibold tracking-tight text-slate-900">
              MVP Agentur für SaaS &amp; Web Apps
            </h3>

            <p className="mt-2 max-w-[560px] text-[13px] leading-relaxed text-slate-700">
              Cloudbasierte MVP Software, SaaS und Web Apps – sauber gebaut, schnell live, kampagnen-ready.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <FooterLink href="/kontakt">Projekt anfragen</FooterLink>
              <FooterLink href="/leistungen">Leistungen</FooterLink>
              <FooterLink href="/foerderung-checker">Förderung-Checker</FooterLink>
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <div className="text-[12px] font-semibold text-slate-900">Navigation</div>
            <div className="mt-3 flex flex-wrap gap-2">
              <FooterLink href="/">Startseite</FooterLink>
              <FooterLink href="/leistungen">Leistungen</FooterLink>
              <FooterLink href="/foerderung-checker">Förderung</FooterLink>
              <FooterLink href="/kontakt">Kontakt</FooterLink>
            </div>
          </div>

          {/* Legal */}
          <div className="md:col-span-4">
            <div className="text-[12px] font-semibold text-slate-900">Rechtliches</div>
            <div className="mt-3 flex flex-wrap gap-2">
              <FooterLink href="/impressum">Impressum</FooterLink>
              <FooterLink href="/datenschutz">Datenschutz</FooterLink>
              <FooterLink href="/agb">AGB</FooterLink>
            </div>

            <div className="mt-4 rounded-[1.4rem] border border-slate-900/10 bg-white/70 p-4 shadow-sm backdrop-blur">
              <div className="text-[12px] font-semibold text-slate-900">Kontakt</div>
              <div className="mt-2 space-y-1 text-[12px] text-slate-700">
                <div>
                  <span className="font-medium text-slate-900">E-Mail:</span>{' '}
                  <a className="underline decoration-slate-900/20 underline-offset-2 hover:text-slate-900" href="mailto:kontakt@mvpwerk.de">
                    kontakt@mvpwerk.de
                  </a>
                </div>
                <div>
                  <span className="font-medium text-slate-900">Antwort:</span> meist am selben Tag
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                <Link
                  href="/kontakt"
                  className="inline-flex h-10 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/70 px-4 text-[12px] font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                >
                  Kontaktformular
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-slate-900/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-[11px] text-slate-600">
            © {year} <span className="font-medium text-slate-900">MVPWERK</span>. Alle Rechte vorbehalten.
          </div>

          <div className="flex flex-wrap gap-2">
            <Link
              href="/impressum"
              className="text-[11px] text-slate-600 underline decoration-slate-900/15 underline-offset-2 hover:text-slate-900"
            >
              Impressum
            </Link>
            <span className="text-[11px] text-slate-400">·</span>
            <Link
              href="/datenschutz"
              className="text-[11px] text-slate-600 underline decoration-slate-900/15 underline-offset-2 hover:text-slate-900"
            >
              Datenschutz
            </Link>
            <span className="text-[11px] text-slate-400">·</span>
            <Link
              href="/agb"
              className="text-[11px] text-slate-600 underline decoration-slate-900/15 underline-offset-2 hover:text-slate-900"
            >
              AGB
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

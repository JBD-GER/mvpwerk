// src/app/components/Header.tsx
import Image from 'next/image'
import Link from 'next/link'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const NAV = [
  { href: '/', label: 'Startseite' },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/foerderung-checker', label: 'Förderung' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* “Glass”-Bar, aber nicht grau-klotzig */}
      <div className="border-b border-slate-900/10 bg-white/55 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-3 px-4 sm:px-6">
          {/* LEFT: Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logos/mvpwerk_logo_trans.png"
              alt="MVPWERK"
              width={150}
              height={30}
              priority
              className="h-[26px] w-auto"
            />
          </Link>

          {/* CENTER: Desktop Nav (schicke Buttons) */}
          <div className="hidden md:flex">
            <DesktopNav nav={NAV} />
          </div>

          {/* RIGHT: CTA + Burger */}
          <div className="flex items-center gap-2">
            <Link
              href="/kontakt"
              className="hidden h-10 items-center justify-center rounded-2xl bg-slate-900 px-4 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(15,23,42,0.22)] transition hover:bg-slate-800 md:inline-flex"
            >
              Kontakt <span className="ml-2">→</span>
            </Link>

            <div className="md:hidden">
              <MobileNav nav={NAV} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

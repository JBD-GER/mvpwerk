'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItem = { href: string; label: string }

export default function DesktopNav({ nav }: { nav: NavItem[] }) {
  const pathname = usePathname()

  return (
    <nav className="inline-flex items-center gap-1 rounded-full border border-slate-900/10 bg-white/60 p-1 shadow-sm backdrop-blur-xl">
      {nav.map((item) => {
        const active = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? 'page' : undefined}
            className={[
              'rounded-full px-4 py-2 text-[13px] font-medium transition',
              active ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-700 hover:bg-white hover:text-slate-900',
            ].join(' ')}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}

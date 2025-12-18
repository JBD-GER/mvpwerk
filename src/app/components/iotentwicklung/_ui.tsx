// src/app/components/iotentwicklung/_ui.tsx
import type { ReactNode } from 'react'

export type Lang = 'de' | 'en'

export function SectionShell({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id?: string
  eyebrow?: string
  title: string
  subtitle?: string
  children: ReactNode
}) {
  return (
    <section id={id} className="relative py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-slate-900/5 blur-3xl" />
        <div className="absolute right-10 top-10 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute left-10 bottom-10 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {eyebrow ? (
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-900/60" />
            {eyebrow}
          </div>
        ) : null}

        <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {title}
        </h2>

        {subtitle ? (
          <p className="mt-3 max-w-3xl text-pretty text-base leading-relaxed text-slate-600 sm:text-[17px]">
            {subtitle}
          </p>
        ) : null}

        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}

export function GlassCard({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={[
        'rounded-3xl border border-white/60 bg-white/75 shadow-sm backdrop-blur-xl',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}

export function DividerSoft() {
  return (
    <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-slate-900/10 to-transparent" />
  )
}

export function Badge({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-full border border-white/60 bg-white/70 px-3 py-1 text-[12px] font-medium text-slate-700 shadow-sm backdrop-blur',
        className,
      ].join(' ')}
    >
      {children}
    </span>
  )
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-3 text-slate-700">
          <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/60 bg-white/70 text-slate-900 shadow-sm">
            ✓
          </span>
          <span className="leading-relaxed">{it}</span>
        </li>
      ))}
    </ul>
  )
}

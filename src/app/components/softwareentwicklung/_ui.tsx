import React from 'react'

export type Lang = 'de' | 'en'

export function SectionShell({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = '',
}: {
  id?: string
  eyebrow?: React.ReactNode
  title: React.ReactNode
  subtitle?: React.ReactNode
  children: React.ReactNode
  className?: string
}) {
  return (
    <section id={id} className={`relative ${className}`}>
      <div className="mx-auto w-full max-w-[1400px] px-4 py-10 sm:px-6 sm:py-12 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow ? (
            <div className="mb-3 inline-flex items-center rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
              {eyebrow}
            </div>
          ) : null}

          <h2 className="text-[28px] font-semibold leading-[1.1] tracking-tight sm:text-[36px] md:text-[44px]">
            {title}
          </h2>

          {subtitle ? (
            <p className="mt-3 text-[14px] leading-relaxed text-slate-700 sm:text-[15px] md:text-[16px]">
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="mt-8 sm:mt-10">{children}</div>
      </div>
    </section>
  )
}

export function GlassCard({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={[
        'rounded-3xl border border-slate-900/10 bg-white/70 shadow-sm backdrop-blur-xl',
        'ring-1 ring-inset ring-white/40',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}

export function MiniKpi({
  k,
  v,
}: {
  k: string
  v: string
}) {
  return (
    <div className="rounded-2xl border border-slate-900/10 bg-white/70 px-4 py-3 text-center shadow-sm backdrop-blur">
      <div className="text-xs font-semibold text-slate-900">{k}</div>
      <div className="mt-1 text-[11px] text-slate-600">{v}</div>
    </div>
  )
}

export function IconWrap({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={[
        'flex h-10 w-10 items-center justify-center rounded-2xl',
        'border border-slate-900/10 bg-white/70 shadow-sm',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}

/** Simple Icons (inline, no dependency) */
export function IconCode(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={props.className ?? 'h-5 w-5 text-slate-900/70'}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M8 9l-3 3 3 3" />
      <path d="M16 9l3 3-3 3" />
      <path d="M13 7l-2 10" />
    </svg>
  )
}

export function IconLayers(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={props.className ?? 'h-5 w-5 text-slate-900/70'}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M12 2l10 6-10 6L2 8l10-6z" />
      <path d="M2 12l10 6 10-6" />
      <path d="M2 16l10 6 10-6" />
    </svg>
  )
}

export function IconShield(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={props.className ?? 'h-5 w-5 text-slate-900/70'}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M12 3l8 4v6c0 5-3 8-8 8s-8-3-8-8V7l8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

export function IconSpeed(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={props.className ?? 'h-5 w-5 text-slate-900/70'}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M20 13a8 8 0 1 0-16 0" />
      <path d="M12 13l3-3" />
      <path d="M12 21h0" />
    </svg>
  )
}

export function IconDatabase(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={props.className ?? 'h-5 w-5 text-slate-900/70'}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </svg>
  )
}

export function IconSpark(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={props.className ?? 'h-5 w-5 text-slate-900/70'}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M12 2l2 7 7 2-7 2-2 7-2-7-7-2 7-2 2-7z" />
    </svg>
  )
}

export function DividerSoft() {
  return (
    <div className="mx-auto my-0 h-px w-full max-w-[1400px] bg-slate-900/5" aria-hidden />
  )
}

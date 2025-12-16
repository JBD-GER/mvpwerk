// src/app/faq/FAQClient.tsx
'use client'

import { useMemo, useState } from 'react'

type FAQ = { q: string; a: string }

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={['h-4 w-4 transition', open ? 'rotate-180' : 'rotate-0'].join(' ')}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

export default function FAQClient({ faqs }: { faqs: FAQ[] }) {
  const items = useMemo(() => faqs, [faqs])
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <div className="mt-2 grid gap-3">
      {items.map((f, idx) => {
        const open = openIdx === idx
        return (
          <div
            key={f.q}
            className="rounded-[1.4rem] border border-slate-900/10 bg-white/70 shadow-sm backdrop-blur"
          >
            <button
              onClick={() => setOpenIdx(open ? null : idx)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={open}
            >
              <div className="min-w-0">
                <div className="text-[13px] font-semibold text-slate-900">{f.q}</div>
                {!open ? (
                  <div className="mt-1 line-clamp-1 text-[11px] text-slate-600">{f.a}</div>
                ) : null}
              </div>

              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-900/10 bg-white/80 text-slate-900/70 shadow-sm">
                <Chevron open={open} />
              </span>
            </button>

            {open ? (
              <div className="px-5 pb-5">
                <div className="rounded-2xl border border-slate-900/10 bg-white/80 px-4 py-3 text-[12px] leading-relaxed text-slate-700 shadow-sm">
                  {f.a.split('\n').map((line, i) => (
                    <p key={i} className={i === 0 ? '' : 'mt-2'}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

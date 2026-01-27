'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'

type Lang = 'de' | 'en'

export default function KontaktFormClient({
  lang,
  pageUrl,
  privacyHref,
  agbHref,
  t,
}: {
  lang: Lang
  pageUrl: string
  privacyHref: string
  agbHref: string
  t: { fn: string; ln: string; em: string; ph: string; msg: string; privacy: string; agb: string; submit: string; micro: string }
}) {
  const router = useRouter()
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [acceptPrivacy, setAcceptPrivacy] = useState(false)
  const [acceptAgb, setAcceptAgb] = useState(false)
  const [website, setWebsite] = useState('') // honeypot

  const canSubmit = useMemo(() => {
    return (
      firstName.trim() &&
      lastName.trim() &&
      email.trim() &&
      phone.trim() &&
      acceptPrivacy &&
      acceptAgb &&
      status !== 'loading'
    )
  }, [firstName, lastName, email, phone, acceptPrivacy, acceptAgb, status])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setError(null)

    try {
      const res = await fetch('/api/kontakt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          message,
          acceptPrivacy,
          acceptAgb,
          website,
          lang,
          siteUrl: typeof window !== 'undefined' ? window.location.origin : undefined,
          pageUrl,
        }),
      })

      const data = await res.json().catch(() => null)
      if (!res.ok || !data?.ok) throw new Error(data?.error || 'Serverfehler')

      router.push(`/danke?lang=${lang}`)
    } catch (err: any) {
      setStatus('error')
      setError(err?.message || 'Serverfehler')
    } finally {
      setStatus('idle')
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-5 space-y-3">
      {/* Honeypot */}
      <div className="hidden">
        <label>
          Website
          <input value={website} onChange={(e) => setWebsite(e.target.value)} />
        </label>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <div className="mb-1 text-[11px] font-medium text-slate-700">{t.fn} *</div>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            autoComplete="given-name"
            className="h-11 w-full rounded-2xl border border-slate-900/10 bg-white/80 px-4 text-[16px] text-slate-900 shadow-sm outline-none backdrop-blur focus:ring-2 focus:ring-slate-900/10 sm:text-[13px]"
          />
        </label>

        <label className="block">
          <div className="mb-1 text-[11px] font-medium text-slate-700">{t.ln} *</div>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            autoComplete="family-name"
            className="h-11 w-full rounded-2xl border border-slate-900/10 bg-white/80 px-4 text-[16px] text-slate-900 shadow-sm outline-none backdrop-blur focus:ring-2 focus:ring-slate-900/10 sm:text-[13px]"
          />
        </label>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <div className="mb-1 text-[11px] font-medium text-slate-700">{t.em} *</div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            autoComplete="email"
            inputMode="email"
            className="h-11 w-full rounded-2xl border border-slate-900/10 bg-white/80 px-4 text-[16px] text-slate-900 shadow-sm outline-none backdrop-blur focus:ring-2 focus:ring-slate-900/10 sm:text-[13px]"
          />
        </label>

        <label className="block">
          <div className="mb-1 text-[11px] font-medium text-slate-700">{t.ph} *</div>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            className="h-11 w-full rounded-2xl border border-slate-900/10 bg-white/80 px-4 text-[16px] text-slate-900 shadow-sm outline-none backdrop-blur focus:ring-2 focus:ring-slate-900/10 sm:text-[13px]"
          />
        </label>
      </div>

      <label className="block">
        <div className="mb-1 text-[11px] font-medium text-slate-700">{t.msg}</div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full rounded-2xl border border-slate-900/10 bg-white/80 px-4 py-3 text-[16px] text-slate-900 shadow-sm outline-none backdrop-blur focus:ring-2 focus:ring-slate-900/10 sm:text-[13px]"
        />
      </label>

      <div className="space-y-2 rounded-2xl border border-slate-900/10 bg-white/60 p-4 backdrop-blur">
        <label className="flex cursor-pointer items-start gap-3 text-[12px] text-slate-700">
          <input
            type="checkbox"
            checked={acceptPrivacy}
            onChange={(e) => setAcceptPrivacy(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-slate-900/20"
          />
          <span className="leading-relaxed">
            {t.privacy}{' '}
            <Link className="font-medium text-slate-900 underline underline-offset-2" href={privacyHref} target="_blank" rel="noopener noreferrer">
              ({lang === 'en' ? 'open' : 'öffnen'})
            </Link>
          </span>
        </label>

        <label className="flex cursor-pointer items-start gap-3 text-[12px] text-slate-700">
          <input
            type="checkbox"
            checked={acceptAgb}
            onChange={(e) => setAcceptAgb(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-slate-900/20"
          />
          <span className="leading-relaxed">
            {t.agb}{' '}
            <Link className="font-medium text-slate-900 underline underline-offset-2" href={agbHref} target="_blank" rel="noopener noreferrer">
              ({lang === 'en' ? 'open' : 'öffnen'})
            </Link>
          </span>
        </label>
      </div>

      {error ? <div className="rounded-2xl border border-rose-200 bg-rose-50 p-3 text-[12px] text-rose-900">{error}</div> : null}

      <button
        type="submit"
        disabled={!canSubmit}
        className={[
          'group inline-flex h-12 w-full items-center justify-center rounded-2xl px-6 text-sm font-semibold shadow-[0_18px_55px_rgba(15,23,42,0.18)] transition',
          canSubmit
            ? 'bg-slate-900 text-white hover:translate-y-[-1px] hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20'
            : 'cursor-not-allowed bg-slate-900/40 text-white/80',
        ].join(' ')}
      >
        {t.submit}
        <span className="ml-2 inline-block transition group-hover:translate-x-0.5">→</span>
      </button>

      <div className="text-center text-[11px] text-slate-600">{t.micro}</div>
    </form>
  )
}

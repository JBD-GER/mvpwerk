// src/app/(...)/KontaktClient.tsx
'use client'

import Link from 'next/link'
import { useMemo, useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

type Status = 'idle' | 'loading' | 'success' | 'error'
type Lang = 'de' | 'en'
export const dynamic = 'force-dynamic'
export const revalidate = 0

const LANG_COOKIE = 'mvpwerk_lang'

function normalizeLang(v: string | null | undefined): Lang | null {
  if (!v) return null
  const s = v.toLowerCase()
  if (s === 'de' || s.startsWith('de-')) return 'de'
  if (s === 'en' || s.startsWith('en-')) return 'en'
  return null
}

function readCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/[$()*+./?[\\\]^{|}-]/g, '\\$&') + '=([^;]*)')
  )
  return match ? decodeURIComponent(match[1]) : null
}

function detectBrowserLang(): Lang {
  if (typeof navigator === 'undefined') return 'de'
  return normalizeLang(navigator.language) ?? 'de'
}

export default function KontaktClient() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const [acceptPrivacy, setAcceptPrivacy] = useState(false)
  const [acceptAgb, setAcceptAgb] = useState(false)

  // honeypot
  const [website, setWebsite] = useState('')

  // ✅ aktuelle Sprache
  const [lang, setLang] = useState<Lang>('de')

  useEffect(() => {
    const q = normalizeLang(searchParams?.get('lang'))
    if (q) return setLang(q)

    const c = normalizeLang(readCookie(LANG_COOKIE))
    setLang(c ?? detectBrowserLang())
  }, [searchParams])

  const t = useMemo(() => {
    if (lang === 'en') {
      return {
        title: 'Contact',
        subtitle: 'Required: First name, last name, email, phone + checkboxes.',
        sent: 'Sent ✓',

        firstNameLabel: 'First name *',
        lastNameLabel: 'Last name *',
        emailLabel: 'Email *',
        phoneLabel: 'Phone *',
        messageLabel: 'Short description (optional)',

        firstNamePh: 'Max',
        lastNamePh: 'Doe',
        emailPh: 'max@company.com',
        phonePh: '+49 …',
        messagePh: 'What is it about? (1–2 sentences are enough)',

        privacyPrefix: 'I accept the',
        privacyLink: 'Privacy Policy',
        agbPrefix: 'I accept the',
        agbLink: 'Terms (AGB)',

        submit: 'Send request',
        sending: 'Sending…',

        footerHint: 'No obligation · Reply usually the same day',

        // fallback errors (wenn server nichts liefert)
        genericError: 'Please check your inputs.',
        unknownError: 'Unknown error',
      }
    }

    return {
      title: 'Kontakt',
      subtitle: 'Pflichtfelder: Vorname, Nachname, E-Mail, Telefon + Checkboxen.',
      sent: 'Gesendet ✓',

      firstNameLabel: 'Vorname *',
      lastNameLabel: 'Nachname *',
      emailLabel: 'E-Mail *',
      phoneLabel: 'Telefon *',
      messageLabel: 'Kurzbeschreibung (optional)',

      firstNamePh: 'Max',
      lastNamePh: 'Mustermann',
      emailPh: 'max@firma.de',
      phonePh: '+49 …',
      messagePh: 'Worum geht’s? (1–2 Sätze reichen)',

      privacyPrefix: 'Ich akzeptiere die',
      privacyLink: 'Datenschutzerklärung',
      agbPrefix: 'Ich akzeptiere die',
      agbLink: 'AGB',

      submit: 'Anfrage senden',
      sending: 'Senden…',

      footerHint: 'Unverbindlich · Antwort meist am selben Tag',

      genericError: 'Bitte prüfen Sie Ihre Eingaben.',
      unknownError: 'Unbekannter Fehler',
    }
  }, [lang])

  // ✅ Links behalten ?lang=
  const hrefWithLang = (href: string) => {
    const params = new URLSearchParams(searchParams?.toString() || '')
    params.set('lang', lang)
    const qs = params.toString()
    return qs ? `${href}?${qs}` : href
  }

  // Optional: kleine Übersetzung bekannter Server-Fehler (damit EN nicht deutsch wirkt)
  function mapServerError(msg: string): string {
    if (lang === 'de') return msg

    const m = (msg || '').toLowerCase()
    if (m.includes('pflichtfelder')) return 'Please fill in all required fields.'
    if (m.includes('gültige e-mail') || m.includes('gültige e-mail-adresse'))
      return 'Please enter a valid email address.'
    if (m.includes('datenschutz') && m.includes('agb')) return 'Please accept Privacy Policy & Terms.'
    if (m.includes('serverfehler')) return 'Server error.'
    return msg // fallback: zeig original
  }

  const canSubmit = useMemo(() => {
    return (
      firstName.trim().length > 0 &&
      lastName.trim().length > 0 &&
      email.trim().length > 0 &&
      phone.trim().length > 0 &&
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
        }),
      })

      const data = await res.json().catch(() => null)
      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || t.genericError)
      }

      setStatus('success')

      // ✅ danke Seite mit gleicher Sprache
      router.push(`/danke?lang=${lang}`)
    } catch (err: any) {
      setStatus('error')
      const msg = err?.message || t.unknownError
      setError(mapServerError(msg))
    }
  }

  // ✅ iOS Zoom Fix: mindestens 16px auf Mobile, ab sm wieder kleiner
  const inputBase =
    'h-11 w-full rounded-2xl border border-slate-900/10 bg-white/80 px-4 text-[16px] sm:text-[13px] text-slate-900 shadow-sm outline-none backdrop-blur focus:ring-2 focus:ring-slate-900/10'
  const textareaBase =
    'w-full rounded-2xl border border-slate-900/10 bg-white/80 px-4 py-3 text-[16px] sm:text-[13px] text-slate-900 shadow-sm outline-none backdrop-blur focus:ring-2 focus:ring-slate-900/10'

  return (
    <div className="relative overflow-hidden rounded-[1.8rem] border border-slate-900/10 bg-white/70 p-5 shadow-[0_22px_80px_rgba(15,23,42,0.10)] backdrop-blur-xl sm:p-6">
      <div className="pointer-events-none absolute inset-0 opacity-55">
        <div className="mvpwerk-kontakt-sheen absolute -left-1/2 top-0 h-full w-[200%]" />
      </div>

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-[12px] font-semibold text-slate-900">{t.title}</div>
            <p className="mt-1 text-[12px] leading-relaxed text-slate-600">{t.subtitle}</p>
          </div>

          {status === 'success' ? (
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-900">
              {t.sent}
            </span>
          ) : null}
        </div>

        {/* Formular */}
        <form onSubmit={onSubmit} className="mt-5 space-y-3">
          {/* Honeypot */}
          <div className="hidden">
            <label className="text-[12px] text-slate-700">
              Website
              <input value={website} onChange={(e) => setWebsite(e.target.value)} className={inputBase} />
            </label>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Field label={t.firstNameLabel}>
              <input
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={inputBase}
                placeholder={t.firstNamePh}
                autoComplete="given-name"
              />
            </Field>

            <Field label={t.lastNameLabel}>
              <input
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={inputBase}
                placeholder={t.lastNamePh}
                autoComplete="family-name"
              />
            </Field>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Field label={t.emailLabel}>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputBase}
                placeholder={t.emailPh}
                autoComplete="email"
                inputMode="email"
              />
            </Field>

            <Field label={t.phoneLabel}>
              <input
                required
                type="tel"
                inputMode="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={inputBase}
                placeholder={t.phonePh}
                autoComplete="tel"
              />
            </Field>
          </div>

          <Field label={t.messageLabel}>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className={textareaBase}
              placeholder={t.messagePh}
            />
          </Field>

          <div className="space-y-2 rounded-2xl border border-slate-900/10 bg-white/60 p-4 backdrop-blur">
            <Check
              checked={acceptPrivacy}
              onChange={setAcceptPrivacy}
              label={
                <>
                  {t.privacyPrefix}{' '}
                  <Link
                    href={hrefWithLang('/datenschutz')}
                            target="_blank"
        rel="noopener noreferrer"
                    className="font-medium text-slate-900 underline underline-offset-2"
                  >
                    {t.privacyLink}
                  </Link>{' '}
                  *
                </>
              }
            />
            <Check
              checked={acceptAgb}
              onChange={setAcceptAgb}
              label={
                <>
                  {t.agbPrefix}{' '}
                  <Link href={hrefWithLang('/agb')}          target="_blank"
        rel="noopener noreferrer" className="font-medium text-slate-900 underline underline-offset-2">
                    {t.agbLink}
                  </Link>{' '}
                  *
                </>
              }
            />
          </div>

          {status === 'error' ? (
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-3 text-[12px] text-rose-900">{error}</div>
          ) : null}

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
            {status === 'loading' ? t.sending : t.submit}
            <span className="ml-2 inline-block transition group-hover:translate-x-0.5">→</span>
          </button>

          <div className="text-center text-[11px] text-slate-600">{t.footerHint}</div>
        </form>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-[1.8rem] ring-1 ring-inset ring-white/50" />

      <style>{`
        .mvpwerk-kontakt-sheen{
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(15,23,42,0.05) 35%,
            rgba(15,23,42,0.10) 50%,
            rgba(15,23,42,0.05) 65%,
            transparent 100%
          );
          transform: translateX(-35%);
          filter: blur(0.5px);
          will-change: transform, opacity;
          animation: kSheen 10s ease-in-out infinite;
          opacity: .55;
        }
        @keyframes kSheen{
          0%{ transform: translateX(-35%); opacity:0.22; }
          50%{ transform: translateX(0%); opacity:0.48; }
          100%{ transform: translateX(35%); opacity:0.22; }
        }
        @media (prefers-reduced-motion: reduce){
          .mvpwerk-kontakt-sheen{ animation:none !important; transform:none !important; }
        }
      `}</style>
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="mb-1 text-[11px] font-medium text-slate-700">{label}</div>
      {children}
    </label>
  )
}

function Check({
  checked,
  onChange,
  label,
}: {
  checked: boolean
  onChange: (v: boolean) => void
  label: React.ReactNode
}) {
  return (
    <label className="flex cursor-pointer items-start gap-3 text-[12px] text-slate-700">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 h-4 w-4 rounded border-slate-900/20"
      />
      <span className="leading-relaxed">{label}</span>
    </label>
  )
}

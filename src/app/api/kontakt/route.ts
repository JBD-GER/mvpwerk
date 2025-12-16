// src/app/api/kontakt/route.ts
export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import path from 'node:path'
import fs from 'node:fs/promises'
import {
  renderMvpwerkContactCustomerMail,
  renderMvpwerkContactInternalMail,
} from '@/app/mails/emailTemplates'

type Lang = 'de' | 'en'

type Payload = {
  firstName: string
  lastName: string
  email: string
  phone: string
  message?: string
  acceptPrivacy: boolean
  acceptAgb: boolean
  website?: string // honeypot

  // ✅ neu: Sprache + optional siteUrl (vom Client)
  lang?: Lang | string
  siteUrl?: string
}

function env(name: string) {
  const v = process.env[name]
  if (!v) throw new Error(`Missing env: ${name}`)
  return v
}

const resend = new Resend(env('RESEND_API_KEY'))

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
}

function safe(v: unknown) {
  return (v ?? '').toString().trim()
}

function normalizeLang(v: unknown): Lang {
  const s = safe(v).toLowerCase()
  if (s === 'en' || s.startsWith('en-')) return 'en'
  return 'de'
}

function parseBool(v: string | undefined, fallback = false) {
  if (v === undefined) return fallback
  return ['1', 'true', 'yes', 'on'].includes(v.toLowerCase())
}

/**
 * ✅ Sicherheits-Guard: akzeptiere nur mvpwerk.de / www.mvpwerk.de als siteUrl.
 * Alles andere -> fallback.
 */
function sanitizeSiteUrl(input: unknown, fallback: string) {
  const raw = safe(input)
  if (!raw) return fallback

  let url = raw
  if (!/^https?:\/\//i.test(url)) url = `https://${url}`

  try {
    const u = new URL(url)
    const host = u.hostname.toLowerCase()

    // erlaubt: mvpwerk.de + www.mvpwerk.de (optional noch subdomains, wenn du willst)
    const allowed =
      host === 'mvpwerk.de' ||
      host === 'www.mvpwerk.de' ||
      host.endsWith('.mvpwerk.de')

    if (!allowed) return fallback

    // ohne trailing slash
    return `${u.protocol}//${u.host}`.replace(/\/+$/, '')
  } catch {
    return fallback
  }
}

export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => null)) as Payload | null
    if (!body) {
      return NextResponse.json({ ok: false, error: 'Bad request' }, { status: 400 })
    }

    // Honeypot: wenn gefüllt => Bot (trotzdem ok zurückgeben)
    if (safe(body.website)) {
      return NextResponse.json({ ok: true }, { status: 200 })
    }

    const firstName = safe(body.firstName)
    const lastName = safe(body.lastName)
    const email = safe(body.email).toLowerCase()
    const phone = safe(body.phone)
    const message = safe(body.message)

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { ok: false, error: 'Bitte alle Pflichtfelder ausfüllen.' },
        { status: 400 }
      )
    }
    if (!isEmail(email)) {
      return NextResponse.json(
        { ok: false, error: 'Bitte eine gültige E-Mail-Adresse eingeben.' },
        { status: 400 }
      )
    }
    if (!body.acceptPrivacy || !body.acceptAgb) {
      return NextResponse.json(
        { ok: false, error: 'Bitte Datenschutz & AGB akzeptieren.' },
        { status: 400 }
      )
    }

    // ✅ Sprache bestimmen (kommt vom Client: query/cookie/browser => im Client gesetzt)
    const lang = normalizeLang(body.lang)

    const FROM = env('RESEND_FROM')       // "MVPWERK <noreply@mail.mvpwerk.de>"
    const TO_INTERNAL = env('CONTACT_TO') // "info@mvpwerk.de"

    const SITE_URL_FALLBACK =
      process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'https://www.mvpwerk.de'

    // optional: wenn Client siteUrl schickt, nur erlaubte Domains verwenden
    const SITE_URL = sanitizeSiteUrl(body.siteUrl, SITE_URL_FALLBACK)

    // Optional: Kunden-Bestätigung schaltbar (default TRUE)
    const SEND_CONFIRMATION = process.env.SEND_CONTACT_CONFIRMATION
      ? parseBool(process.env.SEND_CONTACT_CONFIRMATION, true)
      : true

    // Optional: BCC intern auf Confirmation
    const BCC_INTERNAL_ON_CONFIRMATION = parseBool(
      process.env.CONTACT_BCC_INTERNAL,
      false
    )

    // ✅ Subjects DE/EN
    const subjectInternal =
      lang === 'en'
        ? `New contact request: ${firstName} ${lastName}`
        : `Neue Kontaktanfrage: ${firstName} ${lastName}`

    const subjectCustomer =
      lang === 'en'
        ? `We received your request — MVPWERK`
        : `Wir haben Ihre Anfrage erhalten – MVPWERK`

    const ctx = {
      firstName,
      lastName,
      email,
      phone,
      message,
      siteUrl: SITE_URL,
      lang, // ✅ wichtig: Templates rendern automatisch DE/EN
    }

    const internalHtml = renderMvpwerkContactInternalMail(ctx as any)
    const customerHtml = renderMvpwerkContactCustomerMail(ctx as any)

    // ✅ Optional: Inline-Logo als CID Attachment (nur sinnvoll, wenn Template <img src="cid:mvpwerk-logo"> nutzt)
    // Wenn dein Template weiterhin eine normale URL nutzt, schadet das Attachment nicht,
    // kostet aber minimal Traffic/IO. Du kannst es auch entfernen, wenn du willst.
    const logoAbsPath = path.join(
      process.cwd(),
      'public',
      'logos',
      'mvpwerk_logo_trans.png'
    )
    const logoBuf = await fs.readFile(logoAbsPath)

    const inlineLogo = [
      {
        filename: 'mvpwerk-logo.png',
        content: logoBuf,
        contentId: 'mvpwerk-logo',
        contentType: 'image/png',
      },
    ]

    // 1) interne Mail (immer)
    const r1 = await resend.emails.send({
      from: FROM,
      to: [TO_INTERNAL],
      replyTo: email,
      subject: subjectInternal,
      html: internalHtml,
      attachments: inlineLogo,
      tags: [
        { name: 'type', value: 'contact_internal' },
        { name: 'site', value: 'mvpwerk' },
        { name: 'lang', value: lang },
      ],
    })

    if ((r1 as any)?.error) {
      throw new Error((r1 as any).error?.message || 'Resend internal send error')
    }

    // 2) Kundenbestätigung (optional)
    let r2: any = null
    if (SEND_CONFIRMATION) {
      r2 = await resend.emails.send({
        from: FROM,
        to: [email],
        replyTo: TO_INTERNAL,
        subject: subjectCustomer,
        html: customerHtml,
        attachments: inlineLogo,
        bcc: BCC_INTERNAL_ON_CONFIRMATION ? [TO_INTERNAL] : undefined,
        tags: [
          { name: 'type', value: 'contact_customer' },
          { name: 'site', value: 'mvpwerk' },
          { name: 'lang', value: lang },
        ],
      })

      if ((r2 as any)?.error) {
        throw new Error((r2 as any).error?.message || 'Resend customer send error')
      }
    }

    console.log('[kontakt] sent ok', {
      lang,
      internalId: (r1 as any)?.data?.id ?? (r1 as any)?.id,
      customerId: (r2 as any)?.data?.id ?? (r2 as any)?.id,
      toInternal: TO_INTERNAL,
      toCustomer: email,
      sendConfirmation: SEND_CONFIRMATION,
      bccInternalOnConfirmation: BCC_INTERNAL_ON_CONFIRMATION,
    })

    return NextResponse.json({ ok: true })
  } catch (e: any) {
    console.error('[kontakt] ERROR', e)
    return NextResponse.json(
      { ok: false, error: e?.message || 'Serverfehler' },
      { status: 500 }
    )
  }
}

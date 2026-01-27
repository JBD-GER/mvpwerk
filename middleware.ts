// src/middleware.ts
import { NextRequest, NextResponse } from 'next/server'

const COOKIE = 'mvpwerk_lang'
const SUPPORTED = new Set(['de', 'en'] as const)
type Lang = 'de' | 'en'

function parseAcceptLanguage(header: string | null): Lang {
  const al = (header || '').trim()
  if (!al) return 'de'

  const prefs = al
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => {
      const [tagRaw, ...params] = part.split(';').map((x) => x.trim())
      const primary = (tagRaw || '').toLowerCase().split('-')[0]
      let q = 1
      for (const p of params) {
        if (p.startsWith('q=')) {
          const v = Number(p.slice(2))
          if (!Number.isNaN(v)) q = v
        }
      }
      return { primary, q }
    })
    .sort((a, b) => b.q - a.q)

  for (const p of prefs) {
    if (SUPPORTED.has(p.primary as Lang)) return p.primary as Lang
  }
  return 'de'
}

export function middleware(req: NextRequest) {
  const url = req.nextUrl
  const pathname = url.pathname

  // Skip: Next intern + APIs + Assets
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/robots') ||
    pathname.startsWith('/sitemap') ||
    pathname.match(/\.(png|jpg|jpeg|webp|svg|ico|css|js|map)$/)
  ) {
    return NextResponse.next()
  }

  const paramLang = url.searchParams.get('lang')
  const cookieLang = req.cookies.get(COOKIE)?.value

  // 1) URL override => Cookie setzen (ohne Redirect)
  if (paramLang && (paramLang === 'de' || paramLang === 'en')) {
    if (cookieLang !== paramLang) {
      const res = NextResponse.next()
      res.cookies.set(COOKIE, paramLang, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365,
        sameSite: 'lax',
      })
      return res
    }
    return NextResponse.next()
  }

  // 2) Kein lang-Param:
  //    Optional: Cookie einmalig aus Accept-Language setzen – aber NICHT redirecten.
  if (!cookieLang || (cookieLang !== 'de' && cookieLang !== 'en')) {
    const detected = parseAcceptLanguage(req.headers.get('accept-language'))
    const res = NextResponse.next()
    res.cookies.set(COOKIE, detected, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
    })
    return res
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
}

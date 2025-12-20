// src/app/danke/page.tsx
import DankeClient from './DankeClient'
import { cookies, headers } from 'next/headers'

export const dynamic = 'force-dynamic'
export const revalidate = 0

type Lang = 'de' | 'en'
const LANG_COOKIE = 'mvpwerk_lang'

function normalizeLang(v: unknown): Lang | null {
  if (!v) return null
  const s = Array.isArray(v) ? String(v[0] ?? '') : String(v)
  const x = s.toLowerCase()
  if (x === 'de' || x.startsWith('de-')) return 'de'
  if (x === 'en' || x.startsWith('en-')) return 'en'
  return null
}

function detectHeaderLang(acceptLanguage: string | null): Lang {
  const al = acceptLanguage ?? ''
  return /(^|,)\s*en(-|;|,|$)/i.test(al) ? 'en' : 'de'
}

export default async function DankePage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const sp = await searchParams

  const q = normalizeLang(sp?.lang)

  const ck = await cookies()
  const c = normalizeLang(ck.get(LANG_COOKIE)?.value)

  const hd = await headers()
  const initialLang: Lang = q ?? c ?? detectHeaderLang(hd.get('accept-language'))

  return <DankeClient initialLang={initialLang} hasLangQuery={!!q} />
}

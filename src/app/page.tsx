import HeroSection from './components/startseite/Herosection'
import ReferenzSection from './components/startseite/ReferenzSection'
import LeistungenSection from './components/startseite/LeistungenSection'
import AblaufSection from './components/startseite/AblaufSection'
import TeamSection from './components/startseite/TeamSection'
import FoerderungSection from './components/startseite/FoerderungSection'
import FAQSection from './components/startseite/FaqSection'

type Lang = 'de' | 'en'
function normalizeLang(v: unknown): Lang | null {
  if (!v) return null
  const s = Array.isArray(v) ? String(v[0] ?? '') : String(v)
  const x = s.toLowerCase()
  if (x === 'de' || x.startsWith('de-')) return 'de'
  if (x === 'en' || x.startsWith('en-')) return 'en'
  return null
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const sp = await searchParams
  const lang: Lang = normalizeLang(sp?.lang) ?? 'de'

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <HeroSection lang={lang} />
      <ReferenzSection lang={lang} />
      <LeistungenSection lang={lang} />
      <AblaufSection lang={lang} />
      <TeamSection lang={lang} />
      <FoerderungSection lang={lang} />
      <FAQSection lang={lang} />
    </main>
  )
}

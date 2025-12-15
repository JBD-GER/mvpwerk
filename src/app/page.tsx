// src/app/page.tsx
import HeroSection from './components/startseite/Herosection'
import ReferenzSection from './components/startseite/ReferenzSection'
import LeistungenSection from './components/startseite/LeistungenSection'
import AblaufSection from './components/startseite/AblaufSection'
import TeamSection from './components/startseite/TeamSection'
import FoerderungSection from './components/startseite/FoerderungSection'
import FAQSection from './components/startseite/FaqSection'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <HeroSection />

      {/* Trust + Proof sofort */}
      <ReferenzSection />

      {/* “Was bekomme ich?” als nächstes */}
      <LeistungenSection />

      {/* “Wie läuft das ab?” direkt danach */}
      <AblaufSection />

      {/* Wer steckt dahinter (für Skeptiker) */}
      <TeamSection />

      {/* Optional-Thema später */}
      <FoerderungSection />

      {/* Einwände am Ende wegnehmen */}
      <FAQSection />
    </main>
  )
}

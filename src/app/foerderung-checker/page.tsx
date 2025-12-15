// src/app/foerderung-checker/page.tsx
import type { Metadata } from 'next'
import FoerderungCheckerClient from './FoerderungCheckerClient'

export const metadata: Metadata = {
  title: 'Förderung-Checker – passende Förderprogramme finden | MVPWERK',
  description:
    'Schneller Überblick über relevante Förderprogramme für Software, Web Apps und Digitalisierung – inkl. Filter nach Bundesland und Förderart.',
}

export type FoerderProgramm = {
  id: string
  title: string
  region: 'Bund' | 'Hessen' | 'Sachsen' | 'NRW' | 'Hamburg'
  type: 'Zuschuss' | 'Darlehen' | 'Gutschein' | 'Fonds' | 'Förderaufruf'
  short: string
  goodFor: string[]
  hint?: string
  url: string
  provider?: string
  tags?: string[]
}

const PROGRAMME: FoerderProgramm[] = [
  {
    id: 'he-gum',
    title: 'GUM – Gründungs- & Mittelstandsförderung (Hessen)',
    region: 'Hessen',
    type: 'Darlehen',
    short:
      'Finanzierung/Unterstützung für Gründung, Wachstum oder Investitionen – je nach Vorhaben (z. B. Digitalisierung).',
    goodFor: ['Gründung', 'Wachstum', 'Digitalisierungsvorhaben'],
    url: 'https://www.foerderdatenbank.de/FDB/Content/DE/Foerderprogramm/Land/Hessen/gum-gruendungs-und-mittelstandsfoerderung.html',
    tags: ['KMU', 'Finanzierung'],
  },
  {
    id: 'he-distral',
    title: 'DiSTRAL – Digitale Technologien & Innovationen (Hessen)',
    region: 'Hessen',
    type: 'Zuschuss',
    short:
      'Förderung für digitale Innovationen/Technologien (je nach Ausgestaltung des Projekts).',
    goodFor: ['Innovative Software', 'Digitale Technologien', 'Pilot/Prototyp'],
    url: 'https://www.foerderdatenbank.de/FDB/Content/DE/Foerderprogramm/Land/Hessen/digitale-technologien-und-innovationen-distral.html',
    tags: ['Innovation', 'Technologie'],
  },
  {
    id: 'he-efre',
    title: 'EFRE 2021–2027 (Hessen)',
    region: 'Hessen',
    type: 'Zuschuss',
    short:
      'EU-Mittel (EFRE) – Programme/Schwerpunkte je nach Aufruf & Zielsetzung (u. a. Innovation/Digitalisierung).',
    goodFor: ['Innovation', 'Digitalisierung', 'Wachstumsvorhaben'],
    url: 'https://www.foerderdatenbank.de/FDB/Content/DE/Foerderprogramm/Land/Hessen/efre-2021-2027.html',
    tags: ['EU', 'EFRE'],
  },
  {
    id: 'he-innovkredit',
    title: 'Innovationskredit Hessen',
    region: 'Hessen',
    type: 'Darlehen',
    short:
      'Kreditlösung für innovative Vorhaben/Investitionen – interessant, wenn Software/Digitalisierung Teil des Projekts ist.',
    goodFor: ['Investitionen', 'Innovationsvorhaben', 'Skalierung'],
    url: 'https://www.foerderdatenbank.de/FDB/Content/DE/Foerderprogramm/Land/Hessen/innovationskredit-hessen.html',
    tags: ['Kredit', 'Innovation'],
  },
  {
    id: 'sn-dfm',
    title: 'FRL DFM – Digitalisierungsdarlehen (Sachsen)',
    region: 'Sachsen',
    type: 'Darlehen',
    short:
      'Darlehen speziell für Digitalisierungsvorhaben (z. B. Software, Systeme, Prozesse).',
    goodFor: ['Digitalisierung', 'Softwareeinführung', 'Prozessdigitalisierung'],
    url: 'https://www.foerderdatenbank.de/FDB/Content/DE/Foerderprogramm/Land/Sachsen/frl-dfm-digitalisierungsdarlehen.html',
    tags: ['Digital', 'Darlehen'],
  },
  {
    id: 'sn-mittelstand',
    title: 'Förderung Mittelstand – Darlehen (Sachsen)',
    region: 'Sachsen',
    type: 'Darlehen',
    short:
      'Finanzierung für mittelständische Vorhaben – relevant, wenn Software/Digitalisierung Bestandteil der Investition ist.',
    goodFor: ['KMU', 'Investitionen', 'Wachstum'],
    url: 'https://www.foerderdatenbank.de/FDB/Content/DE/Foerderprogramm/Land/Sachsen/foerderung-mittelstand-darlehen.html',
    tags: ['KMU', 'Finanzierung'],
  },
  {
    id: 'nrw-gtm',
    title: 'Go-to-Market Gutschein (NRW)',
    region: 'NRW',
    type: 'Gutschein',
    short:
      'Unterstützung für Markteintritt/Go-to-Market – spannend, wenn Sie eine neue Software/Web-App launchen wollen.',
    goodFor: ['Markteintritt', 'Go-to-Market', 'Launch/Vertrieb'],
    url: 'https://www.foerderdatenbank.de/FDB/Content/DE/Foerderprogramm/Land/NRW/go-to-market-gutschein.html',
    tags: ['Launch', 'Marketing'],
  },
  {
    id: 'nrw-efre-jtf',
    title: 'EFRE/JTF NRW',
    region: 'NRW',
    type: 'Zuschuss',
    short:
      'EU-Förderung in NRW (EFRE/JTF) – je nach Programm/Call auch Digitalisierung & Innovation.',
    goodFor: ['Innovation', 'Digitalisierung', 'Wachstumsvorhaben'],
    url: 'https://www.foerderdatenbank.de/FDB/Content/DE/Foerderprogramm/Land/NRW/efre-jtf-nrw.html',
    tags: ['EU', 'EFRE'],
  },
  {
    id: 'hh-kredit-digital',
    title: 'Hamburg Kredit Digital',
    region: 'Hamburg',
    type: 'Darlehen',
    short:
      'Kreditprogramm für digitale Investitionen (u. a. Software/IT) – je nach Vorhaben.',
    goodFor: ['Digitalisierung', 'IT/Software', 'Investitionen'],
    url: 'https://www.foerderdatenbank.de/FDB/Content/DE/Foerderprogramm/Land/Hamburg/hamburg-kredit-digital.html',
    tags: ['Hamburg', 'Digital'],
  },
  {
    id: 'hh-digital-check',
    title: 'Hamburg Digital Check',
    region: 'Hamburg',
    type: 'Zuschuss',
    short:
      'Zuschuss für Digitalisierungsmaßnahmen – gut, wenn Sie schnell starten und einen Teil der Kosten abfedern wollen.',
    goodFor: ['Digitalisierung', 'Schnellstart', 'Einführung/Umsetzung'],
    url: 'https://www.foerderdatenbank.de/FDB/Content/DE/Foerderprogramm/Land/Hamburg/hamburg-digital-check.html',
    tags: ['Hamburg', 'Zuschuss'],
  },
  {
    id: 'bund-erp-digi',
    title: 'ERP-Förderkredit Digitalisierung (Bund)',
    region: 'Bund',
    type: 'Darlehen',
    short:
      'Bundesweiter Förderkredit – relevant bei Investitionen in Digitalisierung/Software (Details je nach Konditionen).',
    goodFor: ['Digitalisierung', 'Softwareinvestition', 'Wachstum'],
    url: 'https://www.foerderdatenbank.de/FDB/Content/DE/Foerderprogramm/Bund/BMWi/erp-foerderkredit-digitalisierung-865244.html',
    tags: ['Bund', 'KfW'],
  },
  {
    id: 'bund-deeptech-climate',
    title: 'DeepTech & Climate Fonds (Bund)',
    region: 'Bund',
    type: 'Fonds',
    short:
      'Venture-Finanzierung für DeepTech-Vorhaben (passt nur, wenn Ihr Software-Projekt klar “DeepTech” ist).',
    goodFor: ['DeepTech', 'VC/Finanzierung', 'Wachstum'],
    url: 'https://www.foerderdatenbank.de/FDB/Content/DE/Foerderprogramm/Bund/BMWi/deeptech-climate-fonds-3.html',
    tags: ['Fonds', 'Investment'],
  },

  // Nischig – drin lassen, aber sauber als “Spezial” taggen
  {
    id: 'bund-interakt',
    title: 'BMBF – INTERAKT (Förderaufruf, Beispiel: Gamification/Tech)',
    region: 'Bund',
    type: 'Förderaufruf',
    short:
      'BMBF-Aufrufe sind themenbezogen. Relevant, wenn Ihr Software-Projekt exakt in den Call passt.',
    goodFor: ['F&E', 'Thematische Calls', 'Kooperationen'],
    url: 'https://www.foerderdatenbank.de/FDB/Content/DE/Foerderprogramm/Bund/BMBF/interakt-gamification-techno-psychisch-gesund-kind.html',
    tags: ['BMBF', 'Call'],
    hint: 'Nur sinnvoll, wenn Ihr Thema wirklich passt.',
  },
  {
    id: 'he-games',
    title: 'Förderung von Computer- & Videospielen (Hessen)',
    region: 'Hessen',
    type: 'Zuschuss',
    short:
      'Spezialprogramm: Förderung für Games/Interactive – relevant, wenn Ihr Produkt in diesen Bereich fällt.',
    goodFor: ['Games', 'Interaktiv', 'Prototyp/Produktion'],
    url: 'https://www.foerderdatenbank.de/FDB/Content/DE/Foerderprogramm/Land/Hessen/foerderung-von-computer-und-videospielen.html',
    tags: ['Games', 'Hessen'],
    hint: 'Nur relevant für Games/Interactive.',
  },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* White background – keine harten Cuts */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-white" />

      <FoerderungCheckerClient programmes={PROGRAMME} />
    </main>
  )
}

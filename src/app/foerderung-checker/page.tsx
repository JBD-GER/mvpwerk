// src/app/foerderung-checker/page.tsx
import type { Metadata } from 'next'
import FoerderungCheckerClient from './FoerderungCheckerClient'

type Lang = 'de' | 'en'
export const dynamic = 'force-dynamic'
export const revalidate = 0

function normalizeLang(v: unknown): Lang | null {
  if (!v) return null
  const s = Array.isArray(v) ? String(v[0] ?? '') : String(v)
  const x = s.toLowerCase()
  if (x === 'de' || x.startsWith('de-')) return 'de'
  if (x === 'en' || x.startsWith('en-')) return 'en'
  return null
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

function getMeta(lang: Lang) {
  if (lang === 'en') {
    return {
      title: 'Funding Checker – find matching programs | MVPWERK',
      description:
        'Quick overview of relevant funding programs for software, web apps and digitization — with filters by region and funding type.',
    }
  }
  return {
    title: 'Förderung-Checker – passende Förderprogramme finden | MVPWERK',
    description:
      'Schneller Überblick über relevante Förderprogramme für Software, Web Apps und Digitalisierung – inkl. Filter nach Bundesland und Förderart.',
  }
}

const PROGRAMME_DE: FoerderProgramm[] = [
  {
    id: 'he-gum',
    title: 'GUM – Gründungs- & Mittelstandsförderung (Hessen)',
    region: 'Hessen',
    type: 'Darlehen',
    short: 'Finanzierung/Unterstützung für Gründung, Wachstum oder Investitionen – je nach Vorhaben (z. B. Digitalisierung).',
    goodFor: ['Gründung', 'Wachstum', 'Digitalisierungsvorhaben'],
    url: 'https://www.foerderdatenbank.de/FDB/Content/DE/Foerderprogramm/Land/Hessen/gum-gruendungs-und-mittelstandsfoerderung.html',
    tags: ['KMU', 'Finanzierung'],
  },
  {
    id: 'he-distral',
    title: 'DiSTRAL – Digitale Technologien & Innovationen (Hessen)',
    region: 'Hessen',
    type: 'Zuschuss',
    short: 'Förderung für digitale Innovationen/Technologien (je nach Ausgestaltung des Projekts).',
    goodFor: ['Innovative Software', 'Digitale Technologien', 'Pilot/Prototyp'],
    url: 'https://www.foerderdatenbank.de/FDB/Content/DE/Foerderprogramm/Land/Hessen/digitale-technologien-und-innovationen-distral.html',
    tags: ['Innovation', 'Technologie'],
  },
  {
    id: 'he-efre',
    title: 'EFRE 2021–2027 (Hessen)',
    region: 'Hessen',
    type: 'Zuschuss',
    short: 'EU-Mittel (EFRE) – Programme/Schwerpunkte je nach Aufruf & Zielsetzung (u. a. Innovation/Digitalisierung).',
    goodFor: ['Innovation', 'Digitalisierung', 'Wachstumsvorhaben'],
    url: 'https://www.foerderdatenbank.de/FDB/Content/DE/Foerderprogramm/Land/Hessen/efre-2021-2027.html',
    tags: ['EU', 'EFRE'],
  },
  {
    id: 'he-innovkredit',
    title: 'Innovationskredit Hessen',
    region: 'Hessen',
    type: 'Darlehen',
    short: 'Kreditlösung für innovative Vorhaben/Investitionen – interessant, wenn Software/Digitalisierung Teil des Projekts ist.',
    goodFor: ['Investitionen', 'Innovationsvorhaben', 'Skalierung'],
    url: 'https://www.foerderdatenbank.de/FDB/Content/DE/Foerderprogramm/Land/Hessen/innovationskredit-hessen.html',
    tags: ['Kredit', 'Innovation'],
  },
  {
    id: 'sn-dfm',
    title: 'FRL DFM – Digitalisierungsdarlehen (Sachsen)',
    region: 'Sachsen',
    type: 'Darlehen',
    short: 'Darlehen speziell für Digitalisierungsvorhaben (z. B. Software, Systeme, Prozesse).',
    goodFor: ['Digitalisierung', 'Softwareeinführung', 'Prozessdigitalisierung'],
    url: 'https://www.foerderdatenbank.de/FDB/Content/DE/Foerderprogramm/Land/Sachsen/frl-dfm-digitalisierungsdarlehen.html',
    tags: ['Digital', 'Darlehen'],
  },
  {
    id: 'sn-mittelstand',
    title: 'Förderung Mittelstand – Darlehen (Sachsen)',
    region: 'Sachsen',
    type: 'Darlehen',
    short: 'Finanzierung für mittelständische Vorhaben – relevant, wenn Software/Digitalisierung Bestandteil der Investition ist.',
    goodFor: ['KMU', 'Investitionen', 'Wachstum'],
    url: 'https://www.foerderdatenbank.de/FDB/Content/DE/Foerderprogramm/Land/Sachsen/foerderung-mittelstand-darlehen.html',
    tags: ['KMU', 'Finanzierung'],
  },
  {
    id: 'nrw-gtm',
    title: 'Go-to-Market Gutschein (NRW)',
    region: 'NRW',
    type: 'Gutschein',
    short: 'Unterstützung für Markteintritt/Go-to-Market – spannend, wenn Sie eine neue Software/Web-App launchen wollen.',
    goodFor: ['Markteintritt', 'Go-to-Market', 'Launch/Vertrieb'],
    url: 'https://www.foerderdatenbank.de/FDB/Content/DE/Foerderprogramm/Land/NRW/go-to-market-gutschein.html',
    tags: ['Launch', 'Marketing'],
  },
  {
    id: 'nrw-efre-jtf',
    title: 'EFRE/JTF NRW',
    region: 'NRW',
    type: 'Zuschuss',
    short: 'EU-Förderung in NRW (EFRE/JTF) – je nach Programm/Call auch Digitalisierung & Innovation.',
    goodFor: ['Innovation', 'Digitalisierung', 'Wachstumsvorhaben'],
    url: 'https://www.foerderdatenbank.de/FDB/Content/DE/Foerderprogramm/Land/NRW/efre-jtf-nrw.html',
    tags: ['EU', 'EFRE'],
  },
  {
    id: 'hh-kredit-digital',
    title: 'Hamburg Kredit Digital',
    region: 'Hamburg',
    type: 'Darlehen',
    short: 'Kreditprogramm für digitale Investitionen (u. a. Software/IT) – je nach Vorhaben.',
    goodFor: ['Digitalisierung', 'IT/Software', 'Investitionen'],
    url: 'https://www.foerderdatenbank.de/FDB/Content/DE/Foerderprogramm/Land/Hamburg/hamburg-kredit-digital.html',
    tags: ['Hamburg', 'Digital'],
  },
  {
    id: 'hh-digital-check',
    title: 'Hamburg Digital Check',
    region: 'Hamburg',
    type: 'Zuschuss',
    short: 'Zuschuss für Digitalisierungsmaßnahmen – gut, wenn Sie schnell starten und einen Teil der Kosten abfedern wollen.',
    goodFor: ['Digitalisierung', 'Schnellstart', 'Einführung/Umsetzung'],
    url: 'https://www.foerderdatenbank.de/FDB/Content/DE/Foerderprogramm/Land/Hamburg/hamburg-digital-check.html',
    tags: ['Hamburg', 'Zuschuss'],
  },
  {
    id: 'bund-erp-digi',
    title: 'ERP-Förderkredit Digitalisierung (Bund)',
    region: 'Bund',
    type: 'Darlehen',
    short: 'Bundesweiter Förderkredit – relevant bei Investitionen in Digitalisierung/Software (Details je nach Konditionen).',
    goodFor: ['Digitalisierung', 'Softwareinvestition', 'Wachstum'],
    url: 'https://www.foerderdatenbank.de/FDB/Content/DE/Foerderprogramm/Bund/BMWi/erp-foerderkredit-digitalisierung-865244.html',
    tags: ['Bund', 'KfW', 'hot'],
  },
  {
    id: 'bund-deeptech-climate',
    title: 'DeepTech & Climate Fonds (Bund)',
    region: 'Bund',
    type: 'Fonds',
    short: 'Venture-Finanzierung für DeepTech-Vorhaben (passt nur, wenn Ihr Software-Projekt klar “DeepTech” ist).',
    goodFor: ['DeepTech', 'VC/Finanzierung', 'Wachstum'],
    url: 'https://www.foerderdatenbank.de/FDB/Content/DE/Foerderprogramm/Bund/BMWi/deeptech-climate-fonds-3.html',
    tags: ['Fonds', 'Investment'],
  },
  {
    id: 'bund-interakt',
    title: 'BMBF – INTERAKT (Förderaufruf, Beispiel: Gamification/Tech)',
    region: 'Bund',
    type: 'Förderaufruf',
    short: 'BMBF-Aufrufe sind themenbezogen. Relevant, wenn Ihr Software-Projekt exakt in den Call passt.',
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
    short: 'Spezialprogramm: Förderung für Games/Interactive – relevant, wenn Ihr Produkt in diesen Bereich fällt.',
    goodFor: ['Games', 'Interaktiv', 'Prototyp/Produktion'],
    url: 'https://www.foerderdatenbank.de/FDB/Content/DE/Foerderprogramm/Land/Hessen/foerderung-von-computer-und-videospielen.html',
    tags: ['Games', 'Hessen'],
    hint: 'Nur relevant für Games/Interactive.',
  },
]

const PROGRAMME_EN: FoerderProgramm[] = [
  {
    id: 'he-gum',
    title: 'GUM – Start-up & SME support (Hesse)',
    region: 'Hessen',
    type: 'Darlehen',
    short: 'Financing/support for starting, growth or investments — depending on the project (e.g., digitization).',
    goodFor: ['Start-up', 'Growth', 'Digitization projects'],
    url: PROGRAMME_DE.find((x) => x.id === 'he-gum')!.url,
    tags: ['SME', 'Financing'],
  },
  {
    id: 'he-distral',
    title: 'DiSTRAL – Digital technologies & innovation (Hesse)',
    region: 'Hessen',
    type: 'Zuschuss',
    short: 'Funding for digital innovations/technologies (depending on the exact setup of the project).',
    goodFor: ['Innovative software', 'Digital technologies', 'Pilot/prototype'],
    url: PROGRAMME_DE.find((x) => x.id === 'he-distral')!.url,
    tags: ['Innovation', 'Technology'],
  },
  {
    id: 'he-efre',
    title: 'ERDF 2021–2027 (Hesse)',
    region: 'Hessen',
    type: 'Zuschuss',
    short: 'EU funds (ERDF) — programs focus on calls & objectives (often innovation/digitization).',
    goodFor: ['Innovation', 'Digitization', 'Growth projects'],
    url: PROGRAMME_DE.find((x) => x.id === 'he-efre')!.url,
    tags: ['EU', 'ERDF'],
  },
  {
    id: 'he-innovkredit',
    title: 'Innovation loan Hesse',
    region: 'Hessen',
    type: 'Darlehen',
    short: 'Loan option for innovative projects/investments — relevant if software/digitization is part of the project.',
    goodFor: ['Investments', 'Innovation project', 'Scaling'],
    url: PROGRAMME_DE.find((x) => x.id === 'he-innovkredit')!.url,
    tags: ['Loan', 'Innovation'],
  },
  {
    id: 'sn-dfm',
    title: 'FRL DFM – Digitization loan (Saxony)',
    region: 'Sachsen',
    type: 'Darlehen',
    short: 'Loan specifically for digitization projects (e.g., software, systems, processes).',
    goodFor: ['Digitization', 'Software rollout', 'Process digitization'],
    url: PROGRAMME_DE.find((x) => x.id === 'sn-dfm')!.url,
    tags: ['Digital', 'Loan'],
  },
  {
    id: 'sn-mittelstand',
    title: 'SME support – loan (Saxony)',
    region: 'Sachsen',
    type: 'Darlehen',
    short: 'Financing for SME projects — relevant if software/digitization is part of the investment.',
    goodFor: ['SME', 'Investments', 'Growth'],
    url: PROGRAMME_DE.find((x) => x.id === 'sn-mittelstand')!.url,
    tags: ['SME', 'Financing'],
  },
  {
    id: 'nrw-gtm',
    title: 'Go-to-market voucher (NRW)',
    region: 'NRW',
    type: 'Gutschein',
    short: 'Support for market entry / go-to-market — useful if you plan to launch a new software/web app.',
    goodFor: ['Market entry', 'Go-to-market', 'Launch/sales'],
    url: PROGRAMME_DE.find((x) => x.id === 'nrw-gtm')!.url,
    tags: ['Launch', 'Marketing'],
  },
  {
    id: 'nrw-efre-jtf',
    title: 'ERDF/JTF NRW',
    region: 'NRW',
    type: 'Zuschuss',
    short: 'EU funding in NRW (ERDF/JTF) — depending on the program/call also digitization & innovation.',
    goodFor: ['Innovation', 'Digitization', 'Growth projects'],
    url: PROGRAMME_DE.find((x) => x.id === 'nrw-efre-jtf')!.url,
    tags: ['EU', 'ERDF'],
  },
  {
    id: 'hh-kredit-digital',
    title: 'Hamburg Digital Loan',
    region: 'Hamburg',
    type: 'Darlehen',
    short: 'Loan program for digital investments (incl. software/IT) — depending on the project.',
    goodFor: ['Digitization', 'IT/software', 'Investments'],
    url: PROGRAMME_DE.find((x) => x.id === 'hh-kredit-digital')!.url,
    tags: ['Hamburg', 'Digital'],
  },
  {
    id: 'hh-digital-check',
    title: 'Hamburg Digital Check',
    region: 'Hamburg',
    type: 'Zuschuss',
    short: 'Grant for digitization measures — good if you want to start fast and offset part of the costs.',
    goodFor: ['Digitization', 'Fast start', 'Implementation'],
    url: PROGRAMME_DE.find((x) => x.id === 'hh-digital-check')!.url,
    tags: ['Hamburg', 'Grant'],
  },
  {
    id: 'bund-erp-digi',
    title: 'ERP digitization promotional loan (Germany-wide)',
    region: 'Bund',
    type: 'Darlehen',
    short: 'Nationwide promotional loan — relevant for investments in digitization/software (details depend on conditions).',
    goodFor: ['Digitization', 'Software investment', 'Growth'],
    url: PROGRAMME_DE.find((x) => x.id === 'bund-erp-digi')!.url,
    tags: ['Germany-wide', 'KfW', 'hot'],
  },
  {
    id: 'bund-deeptech-climate',
    title: 'DeepTech & Climate Fund (Germany-wide)',
    region: 'Bund',
    type: 'Fonds',
    short: 'Venture financing for deep-tech projects (only fits if your software project is clearly “deep tech”).',
    goodFor: ['DeepTech', 'VC/financing', 'Growth'],
    url: PROGRAMME_DE.find((x) => x.id === 'bund-deeptech-climate')!.url,
    tags: ['Fund', 'Investment'],
  },
  {
    id: 'bund-interakt',
    title: 'BMBF – INTERAKT (call for proposals, example: gamification/tech)',
    region: 'Bund',
    type: 'Förderaufruf',
    short: 'BMBF calls are topic-specific. Relevant only if your software project matches the call exactly.',
    goodFor: ['R&D', 'Topic-specific calls', 'Cooperations'],
    url: PROGRAMME_DE.find((x) => x.id === 'bund-interakt')!.url,
    tags: ['BMBF', 'Call'],
    hint: 'Only makes sense if your topic truly fits.',
  },
  {
    id: 'he-games',
    title: 'Funding for computer & video games (Hesse)',
    region: 'Hessen',
    type: 'Zuschuss',
    short: 'Special program: funding for games/interactive — relevant if your product is in that domain.',
    goodFor: ['Games', 'Interactive', 'Prototype/production'],
    url: PROGRAMME_DE.find((x) => x.id === 'he-games')!.url,
    tags: ['Games', 'Hesse'],
    hint: 'Only relevant for games/interactive.',
  },
]

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}): Promise<Metadata> {
  const sp = await searchParams
  const lang = normalizeLang(sp?.lang) ?? 'de'
  const meta = getMeta(lang)
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: '/foerderung-checker' },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: '/foerderung-checker',
      type: 'website',
    },
  }
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const sp = await searchParams
  const lang = normalizeLang(sp?.lang) ?? 'de'
  const PROGRAMME = lang === 'en' ? PROGRAMME_EN : PROGRAMME_DE

  return (
    <main className="min-h-screen bg-white">
      {/* White background – keine harten Cuts */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-white" />

<FoerderungCheckerClient programmes={PROGRAMME} />
    </main>
  )
}

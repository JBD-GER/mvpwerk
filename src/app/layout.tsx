// src/app/layout.tsx
import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'

import GlobalCTA from './components/GlobalCTA'
import ConsentBanner from '@/app/components/ConsentBanner'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import GoogleTag from '@/app/components/GoogleTag'

/**
 * ✅ Wichtig für deine ?lang=… Logik:
 * Damit Seiten wirklich pro Request anhand der SearchParams rendern
 * (und nicht statisch “festgebacken” sind).
 */
export const dynamic = 'force-dynamic'
export const revalidate = 0

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const SITE_NAME = 'MVPWERK'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mvpwerk.de'
const MAINTENANCE_FLAG = (
  process.env.MAINTENANCE_MODE ??
  process.env.NEXT_PUBLIC_MAINTENANCE_MODE ??
  'true'
).toLowerCase()
const IS_MAINTENANCE_MODE = MAINTENANCE_FLAG === 'true'

export const viewport: Viewport = {
  themeColor: '#0F172A',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'MVP Agentur für Web Apps | MVPWERK',
    template: '%s | MVPWERK',
  },
  description:
    'MVPWERK ist Ihre MVP Agentur für Web Apps & SaaS: React, Next.js, Vercel & Supabase. MVP entwickeln lassen – schnell, sauber, kampagnen-ready.',
  applicationName: SITE_NAME,
  keywords: [
    'mvp agentur',
    'mvp entwickeln lassen',
    'softwareentwicklung mvp',
    'mvp softwareentwicklung',
    'mvp kosten',
    'startup mvp',
    'saas entwickeln lassen',
    'web app agentur',
    'webanwendung entwickeln lassen',
    'react js agentur',
    'next js agency',
    'vercel agentur',
    'supabase agentur',
    'full stack development agency',
    'api development',
    'individualsoftware entwickeln lassen',
  ],
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.ico' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'MVP Agentur für Web Apps | MVPWERK',
    description: 'MVPWERK baut MVPs, Web Apps & SaaS – mit React/Next.js, Vercel & Supabase.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'MVPWERK – MVP Agentur für Web Apps' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MVP Agentur für Web Apps | MVPWERK',
    description: 'MVPWERK baut MVPs, Web Apps & SaaS – React/Next.js, Vercel & Supabase.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="bg-white font-sans text-slate-900">
        {IS_MAINTENANCE_MODE ? (
          <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-16">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.12),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(15,23,42,0.12),transparent_35%),linear-gradient(to_bottom,#f8fafc,#ffffff)]"
            />
            <section className="relative z-10 w-full max-w-xl rounded-2xl border border-slate-200/80 bg-white/90 p-8 text-center shadow-xl backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">MVPWERK</p>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">
                Website in Bearbeitung
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Wir aktualisieren gerade unsere Website. Bitte schauen Sie in kurzem Abstand wieder vorbei.
              </p>
              <p className="mt-2 text-sm text-slate-500">We are currently updating this site. Please check back soon.</p>
            </section>
          </main>
        ) : (
          <div className="min-h-screen">
            {/* ✅ Suspense nur um Header (useSearchParams) */}
            <Suspense fallback={null}>
              <Header />
            </Suspense>

            <div aria-hidden className="h-16" />

            {children}

            <GlobalCTA />
            <GoogleTag />
            <ConsentBanner />
            <Footer />
          </div>
        )}
      </body>
    </html>
  )
}

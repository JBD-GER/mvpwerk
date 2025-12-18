import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mvpwerk.de'
  const now = new Date()

  const routes = [
    '/', // Startseite

    '/leistungen',
    '/kontakt',
    '/faq',
    '/foerderung-checker',

    '/impressum',
    '/datenschutz',
    '/agb',

    // Lösungen
    '/loesungen/ki-entwicklung',
    '/loesungen/software-entwicklung',
    '/loesungen/web-app-entwicklung',
    '/loesungen/cloud-entwicklung',
    '/loesungen/iot-entwicklung',
    '/loesungen/blockchain-entwicklung',
  ]

  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path.startsWith('/loesungen') ? 0.9 : 0.7,
  }))
}

'use client'

import Link from 'next/link'
import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'

type Tag =
  | 'Beratung'
  | 'MVP'
  | 'UI/UX'
  | 'Frontend'
  | 'Backend'
  | 'API'
  | 'Datenbank'
  | 'Auth'
  | 'Security'
  | 'KI'
  | 'Integrationen'
  | 'Tracking'
  | 'SEO'
  | 'E-Mail'
  | 'Deployment'
  | 'Hosting'
  | 'Payments'
  | 'E-Commerce'
  | 'Monitoring'
  | 'Support'
  | 'Wartung'
  | 'Performance'
  | 'Testing'
  | 'Migration'
  | 'Reporting'
  | 'Realtime'
  | 'Search'
  | 'Mobile'
  | 'Compliance'

type Item = {
  t: string
  s: string
  tags: Tag[]
  icon: ReactNode
}

type Phase = {
  id: string
  title: string
  subtitle: string
  items: Item[]
}

function IconWrap({ children }: { children: ReactNode }) {
  return (
    <span
      className={[
        'flex h-9 w-9 shrink-0 items-center justify-center rounded-full',
        'border border-slate-900/10 bg-white/80 shadow-sm',
        'text-slate-900/70',
      ].join(' ')}
      aria-hidden
    >
      {children}
    </span>
  )
}

function I({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="2">
      <path d={d} />
    </svg>
  )
}

/* ----------------------------- Phasen / Leistungen ----------------------------- */
const PHASES: Phase[] = [
  {
    id: 'strategie',
    title: 'Strategie & MVP-Plan',
    subtitle: 'Scope, Budget, Roadmap – damit das MVP schnell live geht.',
    items: [
      { t: 'MVP-Scoping', s: 'Was muss rein – und was lässt man bewusst weg?', tags: ['Beratung', 'MVP'], icon: <I d="M7 7h10M7 12h10M7 17h7" /> },
      { t: 'MVP Budget & Aufwandsschätzung', s: 'Realistische Zeit/Budget-Spanne statt Bauchgefühl.', tags: ['Beratung', 'MVP'], icon: <I d="M12 2v20M7 6h10M7 12h10M7 18h10" /> },
      { t: 'User Journeys & Kernflows', s: 'Die 3–5 wichtigsten Flows, die Wert liefern.', tags: ['Beratung', 'MVP', 'UI/UX'], icon: <I d="M4 7h16M7 11h10M10 15h4" /> },
      { t: 'PRD / Spec Light', s: 'Kurz-Spezifikation: Ziele, Rollen, Daten, Regeln.', tags: ['Beratung'], icon: <I d="M7 3h10v18H7zM9 7h6M9 11h6M9 15h6" /> },
      { t: 'Tech-Stack Auswahl', s: 'Route, die schnell live bringt und wartbar bleibt.', tags: ['Beratung'], icon: <I d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 7l-2 10" /> },
      { t: 'Architektur-Skizze (leichtgewichtig)', s: 'Datenmodell, Rollen, Services – ohne Overengineering.', tags: ['Beratung', 'Security', 'Datenbank'], icon: <I d="M12 3l8 4v6c0 5-3 8-8 8s-8-3-8-8V7l8-4z" /> },
      { t: 'MVP Roadmap (4–8 Wochen)', s: 'Milestones + wöchentliche Demo-Routine.', tags: ['Beratung', 'MVP'], icon: <I d="M12 8v5l3 2M12 2a10 10 0 1 0 0 20" /> },
      { t: 'Risiko-Check (Performance/Security)', s: 'Früh erkennen, was später teuer wird.', tags: ['Beratung', 'Security', 'Performance'], icon: <I d="M12 2l10 18H2L12 2z" /> },
      { t: 'Daten & Rollen definieren', s: 'Welche Daten gehören wem? Welche Rollen sehen was?', tags: ['Beratung', 'Datenbank', 'Auth'], icon: <I d="M4 8h16M7 12h10M6 16h12" /> },
      { t: 'Release-Plan & Go-Live Setup', s: 'Staging → Produktion, Checklisten, Rollback-Plan.', tags: ['Deployment', 'Beratung'], icon: <I d="M12 4l8 16H4l8-16z" /> },
    ],
  },

  {
    id: 'design',
    title: 'UI/UX & Produktgefühl',
    subtitle: 'Damit es sich wie fertige Software anfühlt – nicht wie ein Prototyp.',
    items: [
      { t: 'UI System / Design-Library', s: 'Konsistente Komponenten, schnelle Iterationen.', tags: ['UI/UX'], icon: <I d="M4 6h16v4H4zM4 14h16v4H4z" /> },
      { t: 'Wireframes (Low-Fidelity)', s: 'Schnell Struktur klären – bevor man „schön“ macht.', tags: ['UI/UX', 'MVP'], icon: <I d="M5 6h14M5 10h10M5 14h14M5 18h8" /> },
      { t: 'High-Fidelity UI', s: 'Saubere Oberfläche inkl. States (Loading/Empty/Error).', tags: ['UI/UX', 'Frontend'], icon: <I d="M4 6h16v12H4zM7 9h6M7 13h10" /> },
      { t: 'Dashboard-UX', s: 'Kacheln, Tabellen, Filter – leise Premium-Optik.', tags: ['UI/UX'], icon: <I d="M4 19V5M4 19h16M8 15v-4M12 15v-7M16 15v-10" /> },
      { t: 'Formular-UX', s: 'Validierung, States, klare Fehlermeldungen.', tags: ['UI/UX', 'Frontend'], icon: <I d="M7 7h10M7 12h10M7 17h6" /> },
      { t: 'Design QA', s: 'Pixel-Checks: Spacing, Typo, Responsiveness, Konsistenz.', tags: ['UI/UX', 'Testing'], icon: <I d="M4 6h16M6 10h12M8 14h8M10 18h4" /> },
      { t: 'Accessibility Basics', s: 'Kontrast, Fokus, Keyboard-Nav, Screenreader-Basics.', tags: ['UI/UX', 'Frontend'], icon: <I d="M12 4a2 2 0 1 0 0 4a2 2 0 0 0 0-4zM6 9h12M10 9l-1 11M14 9l1 11" /> },
      { t: 'Mobile/Tablet Optimierung', s: 'Saubere Breakpoints, keine Desktop-only App.', tags: ['UI/UX', 'Frontend', 'Mobile'], icon: <I d="M7 4h10v16H7z" /> },
      { t: 'Micro-Interactions', s: 'Hover/Focus, leise Animationen, Premium-Haptik.', tags: ['UI/UX', 'Frontend'], icon: <I d="M12 6v6l4 2M4 20h16" /> },
      { t: 'Copywriting (UI-Texte)', s: 'Button-Texte, Micro-Copy, Fehlertexte ohne Frust.', tags: ['UI/UX'], icon: <I d="M4 7h16M4 12h10M4 17h12" /> },
    ],
  },

  {
    id: 'frontend',
    title: 'Frontend (Next.js / React)',
    subtitle: 'Schnell, sauber, komponentenbasiert – kampagnen-ready.',
    items: [
      { t: 'Next.js App Router', s: 'Saubere Seitenstruktur, Layouts, Server Components.', tags: ['Frontend'], icon: <I d="M4 6h16M7 10h10M7 14h6" /> },
      { t: 'Komponenten-Architektur', s: 'Wiederverwendbar, testbar, klar getrennt.', tags: ['Frontend'], icon: <I d="M7 7h10v10H7zM4 12h3M17 12h3" /> },
      { t: 'State Management', s: 'Zustände ohne Chaos: lokal, global, servernah.', tags: ['Frontend'], icon: <I d="M6 8h12M6 12h8M6 16h10" /> },
      { t: 'Forms + Validation', s: 'Zod/Schema-Validation, Inline Errors, Good UX.', tags: ['Frontend', 'UI/UX'], icon: <I d="M7 7h10M7 12h10M7 17h6" /> },
      { t: 'Tabellen & Filter', s: 'Sticky Header, Suche, Sortierung, Status-Filter.', tags: ['Frontend', 'UI/UX'], icon: <I d="M4 7h16M4 12h16M4 17h16" /> },
      { t: 'Dateiupload UI', s: 'Drag&Drop, Progress, Preview, Fehler handling.', tags: ['Frontend'], icon: <I d="M12 3v12M8 7l4-4 4 4M4 21h16" /> },
      { t: 'PDF / Export UI', s: 'Export Buttons, Vorschau, saubere Download-Flows.', tags: ['Frontend', 'Reporting'], icon: <I d="M7 3h10v18H7zM9 7h6M9 11h6" /> },
      { t: 'Realtime UI', s: 'Live-Status, Streams, Activity Feed.', tags: ['Frontend', 'Realtime'], icon: <I d="M4 12h4l2-4 4 8 2-4h4" /> },
      { t: 'Internationalisierung (i18n) Basics', s: 'Mehrsprachig werden – ohne Rebuild-Schmerzen.', tags: ['Frontend'], icon: <I d="M4 6h16M8 6v12M16 6v12" /> },
      { t: 'Performance Optimierung', s: 'Images, Caching, Lazy Loading, Bundle-Tuning.', tags: ['Frontend', 'Performance'], icon: <I d="M12 2l3 7h7l-5.5 4 2 7-6.5-4.5L5.5 20l2-7L2 9h7l3-7z" /> },
    ],
  },

  {
    id: 'backend',
    title: 'Backend & API',
    subtitle: 'Business-Logik, APIs, Jobs – stabil und skalierbar.',
    items: [
      { t: 'API Routes / Server Actions', s: 'Saubere Endpoints + Validierung.', tags: ['Backend', 'API'], icon: <I d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 7l-2 10" /> },
      { t: 'API-Design', s: 'Klare Responses, Fehlercodes, Versionierung.', tags: ['API', 'Backend'], icon: <I d="M4 12h6M14 12h6M10 12a2 2 0 1 0 4 0" /> },
      { t: 'Webhooks (Inbound/Outbound)', s: 'Stripe, CRM, Tools – sauber signiert & robust.', tags: ['Backend', 'API', 'Integrationen'], icon: <I d="M7 7h10M7 12h10M7 17h10" /> },
      { t: 'Background Jobs / Cron', s: 'Import, Sync, Reminder – zuverlässig im Hintergrund.', tags: ['Backend', 'Integrationen'], icon: <I d="M12 8v5l3 2M21 12a9 9 0 1 1-9-9" /> },
      { t: 'Rate Limits & Abuse-Schutz', s: 'Schutz vor Spam/Bruteforce/DoS-Light.', tags: ['Backend', 'Security'], icon: <I d="M12 3l8 4v6c0 5-3 8-8 8s-8-3-8-8V7l8-4z" /> },
      { t: 'Datei-Uploads & Storage', s: 'Buckets, Pfadlogik, Zugriff geschützt.', tags: ['Backend', 'Datenbank', 'Security'], icon: <I d="M12 3v12M8 7l4-4 4 4M4 21h16" /> },
      { t: 'CSV/Excel Import', s: 'Mapping, Validierung, Fehlermeldungen, Dry-Run.', tags: ['Backend', 'Datenbank'], icon: <I d="M6 6h12v12H6zM8 10h8M8 14h8" /> },
      { t: 'Exports & Reporting', s: 'CSV/PDF Exporte, Reports, aggregierte KPIs.', tags: ['Backend', 'Reporting'], icon: <I d="M4 19V5M4 19h16M8 15l2-3 3 2 3-6 2 5" /> },
      { t: 'Suche (Full-Text)', s: 'Schnelle Suche über Kunden, Projekte, Dokumente.', tags: ['Backend', 'Search'], icon: <I d="M10 18a8 8 0 1 1 6-14a8 8 0 0 1-6 14zM21 21l-4.3-4.3" /> },
      { t: 'Realtime / Subscriptions', s: 'Live-Updates, Statuswechsel, Team-Collab.', tags: ['Backend', 'Realtime'], icon: <I d="M4 12h4l2-4 4 8 2-4h4" /> },
    ],
  },

  {
    id: 'datenbank',
    title: 'Datenbank (Supabase/Postgres)',
    subtitle: 'Sauberes Schema, RLS, Indizes – damit es später nicht weh tut.',
    items: [
      { t: 'Datenbank-Schema', s: 'Constraints, Indizes, saubere Relationen.', tags: ['Datenbank'], icon: <I d="M12 3c5 0 9 1.8 9 4s-4 4-9 4-9-1.8-9-4 4-4 9-4z" /> },
      { t: 'RLS Policies (Multi-Tenant)', s: 'Datenzugriff pro Account/Team abgesichert.', tags: ['Datenbank', 'Security', 'Auth'], icon: <I d="M4 8h16M7 12h10M6 16h12" /> },
      { t: 'Migrations & Versionierung', s: 'Schema-Änderungen reproduzierbar & sauber.', tags: ['Datenbank', 'Deployment'], icon: <I d="M7 7h10v10H7zM12 4v3M12 17v3" /> },
      { t: 'Performance Indizes', s: 'Query-Optimierung, Explain-Plan, echte Speed-Wins.', tags: ['Datenbank', 'Performance'], icon: <I d="M4 19V5M4 19h16M8 15v-6M12 15v-9M16 15v-12" /> },
      { t: 'Audit Logs (light)', s: 'Wer hat was geändert – nachvollziehbar im Team.', tags: ['Datenbank', 'Security', 'Compliance'], icon: <I d="M7 7h10M7 12h10M7 17h7" /> },
      { t: 'Backups & Restore-Plan', s: 'Regelmäßige Backups + Recovery-Test.', tags: ['Datenbank', 'Security', 'Hosting'], icon: <I d="M12 6V3L8 7l4 4 4-4-4-4v3" /> },
      { t: 'Datenimport & Bereinigung', s: 'Legacy-Daten sauber übernehmen.', tags: ['Datenbank', 'Migration'], icon: <I d="M4 12h16M12 4v16" /> },
      { t: 'Views & Reporting Tabellen', s: 'KPIs ohne Chaos im Code.', tags: ['Datenbank', 'Reporting'], icon: <I d="M6 6h12v12H6zM6 10h12M6 14h12" /> },
      { t: 'Row-Level Datenschutz', s: 'Minimierung, Zugriffskontrolle, sensible Felder.', tags: ['Datenbank', 'Compliance', 'Security'], icon: <I d="M12 3l8 4v6c0 5-3 8-8 8s-8-3-8-8V7l8-4z" /> },
      { t: 'Realtime Tabellen Setup', s: 'Saubere Channels/Policies für Live-Updates.', tags: ['Datenbank', 'Realtime'], icon: <I d="M4 12h4l2-4 4 8 2-4h4" /> },
    ],
  },

  {
    id: 'auth',
    title: 'Login, Rollen & Sicherheit',
    subtitle: 'Mehrbenutzerfähig, sauber abgesichert, DSGVO-freundlich umsetzbar.',
    items: [
      { t: 'Login & Registrierung', s: 'Email/Passwort, Magic Links optional.', tags: ['Auth'], icon: <I d="M12 12a4 4 0 1 0-4-4M4 21a8 8 0 0 1 16 0" /> },
      { t: 'Google OAuth', s: 'Google Sign-In sauber integriert.', tags: ['Auth', 'Integrationen'], icon: <I d="M12 12h8M12 12a6 6 0 1 1-4.2-5.7" /> },
      { t: 'Team-Einladungen', s: 'Invite-Flows, Token/Expiry, Rollenvergabe.', tags: ['Auth', 'Backend'], icon: <I d="M16 11a4 4 0 1 0-8 0M3 21a9 9 0 0 1 18 0" /> },
      { t: 'Rollen & Rechte', s: 'Admin/User, Teams, feine Berechtigungen.', tags: ['Auth', 'Security'], icon: <I d="M12 3l8 4v6c0 5-3 8-8 8M9 12l2 2 4-4" /> },
      { t: 'Session Hardening', s: 'Secure Cookies, CSRF Basics, Session Rotation.', tags: ['Auth', 'Security'], icon: <I d="M12 3l8 4v6c0 5-3 8-8 8s-8-3-8-8V7l8-4z" /> },
      { t: '2FA (optional)', s: '2FA-Flows, Recovery Codes, Device Trust.', tags: ['Auth', 'Security'], icon: <I d="M8 11h8M10 15h4M8 7h8" /> },
      { t: 'Passwort Reset Flows', s: 'Sauber, verständlich, sicher.', tags: ['Auth', 'Security'], icon: <I d="M12 6a4 4 0 0 1 4 4v2h2v8H6v-8h2v-2a4 4 0 0 1 4-4z" /> },
      { t: 'Audit / Activity Feed', s: 'Login, Änderungen, kritische Aktionen.', tags: ['Security', 'Compliance'], icon: <I d="M7 7h10M7 12h10M7 17h6" /> },
      { t: 'RLS Review & Tests', s: 'Policies testen, Datenleaks verhindern.', tags: ['Security', 'Testing', 'Datenbank'], icon: <I d="M10 14l2 2 6-6M4 12a8 8 0 1 0 16 0" /> },
      { t: 'DSGVO-Basics', s: 'Datensparsamkeit, Rollen, Exporte, Löschung.', tags: ['Compliance', 'Security'], icon: <I d="M12 2l10 6v6c0 6-4 10-10 10S2 20 2 14V8l10-6z" /> },
    ],
  },

  {
    id: 'payments',
    title: 'Payments & Monetarisierung',
    subtitle: 'Checkout, Abos, Rechnungen, Trials – für SaaS & Web Apps.',
    items: [
      { t: 'Stripe Checkout', s: 'Schnell starten: Checkout, Payment Methods, Webhooks.', tags: ['Payments', 'Integrationen', 'Backend'], icon: <I d="M4 7h16M6 11h12M6 15h8" /> },
      { t: 'Abos & Plans', s: 'Monat/Jahr, Upgrade/Downgrade, Proration.', tags: ['Payments', 'Backend'], icon: <I d="M12 2v20M7 6h10M7 12h10M7 18h10" /> },
      { t: 'Free Trial Logik', s: 'Trial → Paid, Reminder, Cutoff-Handling.', tags: ['Payments', 'E-Mail'], icon: <I d="M12 8v5l3 2M12 2a10 10 0 1 0 0 20" /> },
      { t: 'Coupons & Promotions', s: 'Rabatte, Codes, Kampagnen, Partner-Deals.', tags: ['Payments', 'Tracking'], icon: <I d="M7 7h10v10H7zM9 9h6M9 13h6" /> },
      { t: 'Rechnungen & Belege', s: 'Invoice PDFs, Nummernkreise, Email-Versand.', tags: ['Payments', 'Reporting', 'E-Mail'], icon: <I d="M7 3h10v18H7zM9 7h6M9 11h6" /> },
      { t: 'VAT / EU-B2B (Basics)', s: 'Grundlogik für Steuern je nach Setup.', tags: ['Payments', 'Compliance'], icon: <I d="M4 7h16M8 11h8M6 15h12" /> },
      { t: 'Customer Portal', s: 'Selbstverwaltung: Plan ändern, Rechnungen, Zahlungsart.', tags: ['Payments', 'Frontend'], icon: <I d="M4 6h16v12H4zM7 9h6M7 13h10" /> },
      { t: 'Metered Billing (optional)', s: 'Usage-Based: Events zählen, Limits, Abrechnung.', tags: ['Payments', 'Backend'], icon: <I d="M4 19V5M4 19h16M8 15v-4M12 15v-7M16 15v-10" /> },
      { t: 'Webhooks Hardening', s: 'Signaturen, Retries, Idempotenz.', tags: ['Payments', 'Security', 'API'], icon: <I d="M12 3l8 4v6c0 5-3 8-8 8M9 12l2 2 4-4" /> },
      { t: 'E-Commerce (wenn nötig)', s: 'Warenkorb/Bestellung/Status – light umgesetzt.', tags: ['E-Commerce', 'Backend', 'Payments'], icon: <I d="M6 6h15l-1 7H7L6 6zM9 20a1 1 0 1 0 0-2M18 20a1 1 0 1 0 0-2" /> },
    ],
  },

  {
    id: 'integrationen',
    title: 'Integrationen & Automatisierung',
    subtitle: 'Anbindungen an Tools, Systeme & Prozesse – ohne Bastellösung.',
    items: [
      { t: 'Zapier / Make', s: 'Automationen ohne Custom-Build – sauber angebunden.', tags: ['Integrationen', 'API'], icon: <I d="M12 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6l2-6z" /> },
      { t: 'Slack / Teams Alerts', s: 'Statusmeldungen, Deploy Alerts, Reminder in Channels.', tags: ['Integrationen', 'Monitoring'], icon: <I d="M4 12h16M7 9h10M7 15h8" /> },
      { t: 'Google Workspace', s: 'OAuth, Drive/Sheets/Calendar Basics.', tags: ['Integrationen', 'Auth'], icon: <I d="M7 7h10M7 12h10M7 17h6" /> },
      { t: 'E-Mail Provider Setup', s: 'Resend/Sendgrid/SMTP – Zustellbarkeit + Templates.', tags: ['E-Mail', 'Integrationen'], icon: <I d="M4 6h16v12H4zM4 7l8 6 8-6" /> },
      { t: 'SMS / WhatsApp (optional)', s: 'Reminder, 2FA, Alerts über Provider.', tags: ['Integrationen', 'E-Mail'], icon: <I d="M21 12a7 7 0 0 1-7 7H7l-4 3V12a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7z" /> },
      { t: 'CRM Anbindung', s: 'HubSpot/Pipedrive/Sheets – Leads rein/raus.', tags: ['Integrationen', 'API'], icon: <I d="M6 6h12v12H6zM8 10h8M8 14h6" /> },
      { t: 'Webhooks Plattform', s: 'Eigene Webhook-Events + Delivery-Logs.', tags: ['Integrationen', 'Backend', 'API'], icon: <I d="M4 12h16M12 4v16" /> },
      { t: 'Calendar/Scheduling', s: 'Kalender-Sync, Buchungen, Termine/Slots.', tags: ['Integrationen', 'Backend'], icon: <I d="M7 4v3M17 4v3M5 8h14M7 12h4M7 16h6" /> },
      { t: 'Maps / Geocoding', s: 'Adressen, Routen, Standort-Funktionen.', tags: ['Integrationen', 'Frontend'], icon: <I d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z" /> },
      { t: 'Dokumente & Signatur (optional)', s: 'PDF-Flows, Sign-Provider Anbindung.', tags: ['Integrationen', 'Reporting'], icon: <I d="M7 3h10v18H7zM9 7h6M9 11h6" /> },
    ],
  },

  {
    id: 'ki',
    title: 'KI-Integration',
    subtitle: 'KI dort, wo sie wirklich hilft – nicht als Show-Feature.',
    items: [
      { t: 'KI-Assistent im Dashboard', s: 'Chat/Command Bar für Tasks & Antworten.', tags: ['KI', 'Frontend', 'Backend'], icon: <I d="M21 12a7 7 0 0 1-7 7H7l-4 3V12a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7z" /> },
      { t: 'KI-Workflows / Automationen', s: 'Zusammenfassen, Klassifizieren, Vorschläge.', tags: ['KI', 'Backend'], icon: <I d="M4 6h16M4 12h10M4 18h16" /> },
      { t: 'Dokumente auswerten', s: 'PDF/Text → strukturierte Daten in DB.', tags: ['KI', 'Datenbank'], icon: <I d="M7 3h10v18H7zM9 7h6M9 11h6" /> },
      { t: 'Semantic Search', s: 'Bessere Suche: „Finde Angebote mit X“ statt Keywords.', tags: ['KI', 'Search'], icon: <I d="M10 18a8 8 0 1 1 6-14M21 21l-4.3-4.3" /> },
      { t: 'Prompt- & Output-Sicherheit', s: 'Guardrails, Logging, klare Verantwortung.', tags: ['KI', 'Security'], icon: <I d="M12 2l10 6v6c0 6-4 10-10 10S2 20 2 14V8l10-6z" /> },
      { t: 'Provider-Anbindung', s: 'OpenAI/andere – je nach Bedarf & Budget.', tags: ['KI', 'Integrationen'], icon: <I d="M8 12h8M12 8v8" /> },
      { t: 'PII-Handling', s: 'Anonymisierung/Minimierung für sensible Inhalte.', tags: ['KI', 'Compliance', 'Security'], icon: <I d="M12 6a4 4 0 0 1 4 4v2h2v8H6v-8h2v-2a4 4 0 0 1 4-4z" /> },
      { t: 'Human-in-the-loop', s: 'Freigabe-Workflows, damit KI nicht „ungefragt“ handelt.', tags: ['KI', 'Backend'], icon: <I d="M12 12a4 4 0 1 0-4-4M4 21a8 8 0 0 1 16 0" /> },
      { t: 'KI-Textbausteine', s: 'Antwortvorschläge, E-Mails, Angebote – schneller arbeiten.', tags: ['KI', 'E-Mail'], icon: <I d="M4 7h16M4 12h12M4 17h10" /> },
      { t: 'KI-Logging & Qualität', s: 'Was hat KI gemacht? Was kam raus? Debug-fähig.', tags: ['KI', 'Monitoring'], icon: <I d="M4 19V5M4 19h16M8 15l2-3 3 2 3-6 2 5" /> },
    ],
  },

  {
    id: 'tracking',
    title: 'Tracking, Analytics & SEO',
    subtitle: 'Saubere Messung – DSGVO-konform per Consent steuerbar.',
    items: [
      { t: 'Google Tag Manager (GTM)', s: 'Zentrales Setup für Tags & Events.', tags: ['Tracking', 'Integrationen'], icon: <I d="M4 6h16v12H4zM8 10h8M8 14h6" /> },
      { t: 'Google Analytics 4 (GA4)', s: 'Events, Conversions, Funnels, DebugView.', tags: ['Tracking'], icon: <I d="M4 19V5M4 19h16M8 15v-4M12 15v-7M16 15v-10" /> },
      { t: 'Conversion Tracking (Google Ads)', s: 'Saubere Conversions + Parameter/UTMs.', tags: ['Tracking'], icon: <I d="M12 20l9-5-9-5-9 5 9 5zM12 10l9-5-9-5-9 5 9 5z" /> },
      { t: 'Server-Side Events (optional)', s: 'Robuster messen, weniger Adblock-Probleme.', tags: ['Tracking', 'Backend'], icon: <I d="M6 7h12v10H6zM4 12h2M18 12h2" /> },
      { t: 'Consent Mode / Banner', s: 'Tags nur bei Einwilligung – sauber gelöst.', tags: ['Tracking', 'Compliance', 'Security'], icon: <I d="M12 2l10 6v6c0 6-4 10-10 10S2 20 2 14V8l10-6z" /> },
      { t: 'Search Console Setup', s: 'Indexierung, Sitemaps, Core Web Vitals.', tags: ['SEO'], icon: <I d="M10 14l2 2 6-6M4 12a8 8 0 1 0 16 0" /> },
      { t: 'SEO Technik (Next.js)', s: 'Metadata, Canonicals, OG, JSON-LD.', tags: ['SEO', 'Frontend'], icon: <I d="M4 7h16M7 11h10M7 15h6" /> },
      { t: 'Landingpage-Performance', s: 'Lighthouse + echte Conversion-Verbesserungen.', tags: ['SEO', 'Performance'], icon: <I d="M12 2l3 7h7l-5.5 4 2 7-6.5-4.5L5.5 20l2-7L2 9h7l3-7z" /> },
      { t: 'Event-Schema definieren', s: 'Einheitliche Eventnamen: sauber & skalierbar.', tags: ['Tracking', 'Beratung'], icon: <I d="M7 7h10M7 12h10M7 17h7" /> },
      { t: 'A/B Testing (optional)', s: 'Experimente & Hypothesen statt Bauchgefühl.', tags: ['Tracking'], icon: <I d="M6 18V6M18 18V6M6 12h12" /> },
    ],
  },

  {
    id: 'kommunikation',
    title: 'E-Mails, Benachrichtigungen & Workflows',
    subtitle: 'Damit Ihr Produkt lebt – und Nutzer dranbleiben.',
    items: [
      { t: 'Automatische E-Mails', s: 'Registrierung, Login, Status, Magic Links.', tags: ['E-Mail', 'Auth'], icon: <I d="M4 6h16v12H4zM4 7l8 6 8-6" /> },
      { t: 'Transaktionale Mails', s: 'Bestätigung, Einladungen, Alerts, Reports.', tags: ['E-Mail'], icon: <I d="M21 8V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8" /> },
      { t: 'Reminder-Systeme', s: 'Fälligkeiten, Deadlines, Follow-ups.', tags: ['E-Mail', 'Backend'], icon: <I d="M12 8v5l3 2M12 2a10 10 0 1 0 0 20" /> },
      { t: 'In-App Inbox', s: 'Benachrichtigungen im Produkt statt nur E-Mail.', tags: ['Frontend', 'Realtime'], icon: <I d="M4 6h16v12H4zM7 15h10" /> },
      { t: 'Digest E-Mails', s: 'Wöchentlich/monatlich: Reports & Zusammenfassungen.', tags: ['E-Mail', 'Reporting'], icon: <I d="M4 6h16v12H4zM6 9h12M6 13h8" /> },
      { t: 'Templates & Branding', s: 'Mails, PDFs, UI – einheitliche Marke.', tags: ['E-Mail', 'UI/UX'], icon: <I d="M7 7h10v10H7zM9 9h6M9 13h6" /> },
      { t: 'Webhook-basierte Alerts', s: 'Slack/Teams/Webhooks: sofortige Events.', tags: ['Integrationen', 'Monitoring'], icon: <I d="M4 12h16M12 4v16" /> },
      { t: 'Reaktivierung & Onboarding', s: 'Onboarding-Mails, Tooltips, nächste Schritte.', tags: ['E-Mail', 'UI/UX'], icon: <I d="M4 7h16M7 11h10M7 15h6" /> },
      { t: 'Deliverability Basics', s: 'SPF/DKIM/DMARC + sauberes Setup.', tags: ['E-Mail', 'Hosting'], icon: <I d="M4 6h16v12H4zM4 7l8 6 8-6" /> },
      { t: 'Notification Rules', s: 'Wer bekommt wann was – ohne Spam.', tags: ['Backend', 'Beratung'], icon: <I d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 7h18s-3 0-3-7" /> },
    ],
  },

  {
    id: 'betrieb',
    title: 'Deployment, Hosting & Betrieb',
    subtitle: 'Schnell live – stabil bleiben – sauber weiterentwickeln.',
    items: [
      { t: 'Vercel Deployment', s: 'CI/CD, Preview Deployments, Env Vars.', tags: ['Deployment', 'Hosting'], icon: <I d="M12 4l8 16H4l8-16z" /> },
      { t: 'Staging / Preview Umgebungen', s: 'Sicher testen, bevor es live geht.', tags: ['Deployment', 'Testing'], icon: <I d="M7 7h10v10H7zM4 12h3M17 12h3" /> },
      { t: 'Domains & DNS', s: 'Subdomain für App, SSL, Redirects.', tags: ['Hosting', 'Deployment'], icon: <I d="M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 0 1-7-7l1-1" /> },
      { t: 'Custom Hosting (optional)', s: 'Render/Hetzner/AWS – je nach Bedarf.', tags: ['Hosting', 'Deployment'], icon: <I d="M6 6h12v12H6zM8 10h8M8 14h6" /> },
      { t: 'Docker (optional)', s: 'Reproduzierbare Deploys, portable Infrastruktur.', tags: ['Hosting', 'Deployment'], icon: <I d="M7 7h10M7 12h10M7 17h10" /> },
      { t: 'Monitoring (Uptime)', s: 'Ausfälle sehen, bevor Kunden schreiben.', tags: ['Monitoring', 'Support'], icon: <I d="M4 12h4l2-4 4 8 2-4h4" /> },
      { t: 'Error Tracking (Sentry)', s: 'Stacktraces, Releases, Alerts – Debug-fähig.', tags: ['Monitoring', 'Backend', 'Frontend'], icon: <I d="M12 2l10 18H2L12 2z" /> },
      { t: 'Logs & Audit (light)', s: 'Nachvollziehen statt Raten.', tags: ['Monitoring', 'Compliance'], icon: <I d="M4 19V5M4 19h16M8 15l2-3 3 2 3-6 2 5" /> },
      { t: 'Backups & Restore', s: 'Sicherungen + Recovery-Tests.', tags: ['Hosting', 'Datenbank', 'Security'], icon: <I d="M12 6V3L8 7l4 4 4-4-4-4v3" /> },
      { t: 'Sicherheits-Updates', s: 'Dependencies, Hardening, schnelle Fixes.', tags: ['Security', 'Wartung'], icon: <I d="M12 2l10 6v6c0 6-4 10-10 10S2 20 2 14V8l10-6z" /> },
    ],
  },

  {
    id: 'betreuung',
    title: 'Betreuung & Wartung (Pakete)',
    subtitle: 'Planbar. Schnell. Ohne „Ticket-Hölle“.',
    items: [
      { t: 'Betreuungspaket BASIC', s: 'Monitoring + Security Updates + kleine Fixes.', tags: ['Support', 'Wartung', 'Monitoring'], icon: <I d="M4 19V5M4 19h16M8 15v-4M12 15v-7M16 15v-10" /> },
      { t: 'Betreuungspaket PLUS', s: 'BASIC + monatliche Mini-Weiterentwicklung (Sprints).', tags: ['Support', 'Wartung'], icon: <I d="M21 12a9 9 0 1 1-9-9M21 3v6h-6" /> },
      { t: 'Betreuungspaket PRO', s: 'PLUS + Priorität/SLAs nach Setup (optional).', tags: ['Support', 'Monitoring'], icon: <I d="M12 3l8 4v6c0 5-3 8-8 8M9 12l2 2 4-4" /> },
      { t: 'Bugfix-Garantie (Scope-basiert)', s: 'Kritische Bugs schnell raus – nach Priorität.', tags: ['Support', 'Testing'], icon: <I d="M7 7h10M9 11h6M10 15h4" /> },
      { t: 'Feature-Backlog Pflege', s: 'Ideen sammeln, priorisieren, iterativ umsetzen.', tags: ['Beratung', 'Wartung'], icon: <I d="M7 7h10M7 12h10M7 17h7" /> },
      { t: 'Performance Checks', s: 'Regelmäßig Lighthouse/Core Web Vitals prüfen.', tags: ['Performance', 'Wartung'], icon: <I d="M12 2l3 7h7l-5.5 4 2 7-6.5-4.5L5.5 20l2-7L2 9h7l3-7z" /> },
      { t: 'Monitoring-Tuning', s: 'Alerts, SLOs, weniger Noise, mehr Signal.', tags: ['Monitoring', 'Support'], icon: <I d="M4 12h4l2-4 4 8 2-4h4" /> },
      { t: 'Abhängigkeiten & Security Review', s: 'Regelmäßig prüfen, patchen, härten.', tags: ['Security', 'Compliance'], icon: <I d="M12 2l10 6v6c0 6-4 10-10 10S2 20 2 14V8l10-6z" /> },
      { t: 'Kleine UI/UX Verbesserungen', s: 'Konversion & Nutzbarkeit iterativ verbessern.', tags: ['UI/UX', 'Wartung'], icon: <I d="M4 6h16v12H4zM7 9h6M7 13h10" /> },
      { t: 'Support-Slot / Sparring', s: 'Kurze Calls für Entscheidungen/Probleme.', tags: ['Support', 'Beratung'], icon: <I d="M21 12a7 7 0 0 1-7 7H7l-4 3V12a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7z" /> },
    ],
  },

  {
    id: 'migration',
    title: 'Migration & Modernisierung',
    subtitle: 'Wenn etwas existiert: sauber übernehmen statt neu erfinden.',
    items: [
      { t: 'Legacy-Modernisierung', s: 'Alt-Code analysieren → stabile Upgrade-Route.', tags: ['Migration', 'Beratung'], icon: <I d="M21 12a9 9 0 1 1-9-9M21 3v6h-6" /> },
      { t: 'DB-Migration', s: 'Daten übernehmen, bereinigen, validieren.', tags: ['Migration', 'Datenbank'], icon: <I d="M12 3c5 0 9 1.8 9 4s-4 4-9 4-9-1.8-9-4" /> },
      { t: 'API-Integration Alt → Neu', s: 'Schrittweise Umstellung ohne Big-Bang.', tags: ['Migration', 'API'], icon: <I d="M4 12h16M12 4v16" /> },
      { t: 'UI-Refresh', s: 'Modernes UI ohne komplette Neu-Entwicklung.', tags: ['Migration', 'UI/UX', 'Frontend'], icon: <I d="M4 6h16v12H4z" /> },
      { t: 'Performance-Rettung', s: 'Langsame App wieder schnell bekommen.', tags: ['Migration', 'Performance'], icon: <I d="M4 19V5M4 19h16M8 15v-4M12 15v-7M16 15v-10" /> },
      { t: 'Auth-Umzug', s: 'User übernehmen, Sessions sauber migrieren.', tags: ['Migration', 'Auth'], icon: <I d="M12 6a4 4 0 0 1 4 4v2h2v8H6v-8h2v-2a4 4 0 0 1 4-4z" /> },
      { t: 'Tracking-Rebuild', s: 'Events neu sauber definieren & implementieren.', tags: ['Migration', 'Tracking'], icon: <I d="M12 20l9-5-9-5-9 5 9 5z" /> },
      { t: 'E-Mail Setup retten', s: 'Zustellbarkeit verbessern, Templates stabilisieren.', tags: ['Migration', 'E-Mail'], icon: <I d="M4 6h16v12H4zM4 7l8 6 8-6" /> },
      { t: 'Staging/Deploy Pipeline aufbauen', s: 'Von „manuell“ zu sauberem CI/CD.', tags: ['Migration', 'Deployment'], icon: <I d="M12 4l8 16H4l8-16z" /> },
      { t: 'Dokumenten-/Storage-Struktur', s: 'Buckets & Zugriff neu sauber strukturieren.', tags: ['Migration', 'Hosting', 'Security'], icon: <I d="M12 3v12M8 7l4-4 4 4M4 21h16" /> },
    ],
  },
]

const ALL_TAGS: Tag[] = [
  'Beratung',
  'MVP',
  'UI/UX',
  'Frontend',
  'Backend',
  'API',
  'Datenbank',
  'Auth',
  'Security',
  'KI',
  'Integrationen',
  'Tracking',
  'SEO',
  'E-Mail',
  'Payments',
  'E-Commerce',
  'Deployment',
  'Hosting',
  'Monitoring',
  'Support',
  'Wartung',
  'Performance',
  'Testing',
  'Migration',
  'Reporting',
  'Realtime',
  'Search',
  'Mobile',
  'Compliance',
]

export default function LeistungenClient() {
  const [q, setQ] = useState('')
  const [active, setActive] = useState<Tag | 'Alle'>('Alle')
  const [showAllTags, setShowAllTags] = useState(false)
  const [open, setOpen] = useState<Record<string, boolean>>({})
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toLowerCase().includes('mac')
      const mod = isMac ? e.metaKey : e.ctrlKey
      if (mod && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 767px)').matches
    const initial: Record<string, boolean> = {}
    PHASES.forEach((p, idx) => {
      initial[p.id] = isMobile ? idx === 0 : true
    })
    setOpen(initial)
  }, [])

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase()
    return PHASES.map((p) => {
      const items = p.items.filter((it) => {
        const matchesTag = active === 'Alle' ? true : it.tags.includes(active)
        const matchesQuery =
          !query ||
          it.t.toLowerCase().includes(query) ||
          it.s.toLowerCase().includes(query) ||
          it.tags.some((t) => t.toLowerCase().includes(query))
        return matchesTag && matchesQuery
      })
      return { ...p, items }
    }).filter((p) => p.items.length > 0)
  }, [q, active])

  useEffect(() => {
    if (!q && active === 'Alle') return
    setOpen((prev) => {
      const next = { ...prev }
      for (const p of filtered) next[p.id] = true
      return next
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, active])

  const totalShown = useMemo(() => filtered.reduce((sum, p) => sum + p.items.length, 0), [filtered])
  const totalAll = useMemo(() => PHASES.reduce((sum, p) => sum + p.items.length, 0), [])

  const visibleTags = useMemo(() => (showAllTags ? ALL_TAGS : ALL_TAGS.slice(0, 10)), [showAllTags])

  return (
    <div className="space-y-6 overflow-x-hidden">
      {/* TOP HINWEIS */}
      <div className="relative overflow-hidden rounded-[1.6rem] border border-slate-900/10 bg-white/70 p-5 shadow-sm backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-0 opacity-55">
          <div className="mvpwerk-leist-filter-sheen absolute -left-1/2 top-0 h-full w-[200%]" />
        </div>

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
            Ihre Leistung nicht gefunden?
          </div>

          <h3 className="mt-3 text-[16px] font-semibold tracking-tight text-slate-900 sm:text-[18px]">
            Kein Problem – wir bauen ohnehin individuell pro Projekt.
          </h3>
          <p className="mt-1 max-w-[920px] text-[13px] leading-relaxed text-slate-700">
            Die Liste ist bewusst breit. Wenn etwas Spezifisches fehlt (z. B. Sonder-Integration, spezielles Hosting,
            besonderes Rollenmodell): schreiben Sie uns kurz – wir prüfen Anforderungen, Scope und empfehlen die passenden
            Bausteine.
          </p>

          <div className="mt-4 grid gap-2 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-900/10 bg-white/70 p-3 text-[11px] text-slate-700 shadow-sm backdrop-blur">
              <span className="font-semibold text-slate-900">Betreuungspakete:</span> BASIC / PLUS / PRO möglich.
            </div>
            <div className="rounded-2xl border border-slate-900/10 bg-white/70 p-3 text-[11px] text-slate-700 shadow-sm backdrop-blur">
              <span className="font-semibold text-slate-900">Hosting:</span> Vercel oder Custom (Render/Hetzner/AWS).
            </div>
            <div className="rounded-2xl border border-slate-900/10 bg-white/70 p-3 text-[11px] text-slate-700 shadow-sm backdrop-blur">
              <span className="font-semibold text-slate-900">Schnell live:</span> MVP-Fokus, klare Milestones, Demos.
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] ring-1 ring-inset ring-white/50" />
      </div>

      {/* Filter / Suche */}
      <div className="relative overflow-hidden rounded-[1.6rem] border border-slate-900/10 bg-white/70 p-4 shadow-sm backdrop-blur-xl sm:p-5">
        <div className="pointer-events-none absolute inset-0 opacity-55">
          <div className="mvpwerk-leist-filter-sheen absolute -left-1/2 top-0 h-full w-[200%]" />
        </div>

        <div className="relative">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="min-w-0">
              <div className="text-[12px] font-semibold text-slate-900">Filter &amp; Suche</div>
              <div className="mt-1 text-[11px] text-slate-600">
                <span className="font-medium text-slate-900">{totalShown}</span> / {totalAll} Leistungen
                {active !== 'Alle' ? (
                  <>
                    {' '}
                    · Tag: <span className="font-medium text-slate-900">{active}</span>
                  </>
                ) : null}
              </div>
            </div>

            <div className="flex w-full flex-col gap-2 sm:flex-row md:w-[520px]">
              <div className="relative w-full">
                <input
                  ref={inputRef}
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Was suchen Sie? (z.B. Mail, KI,...)"
                  className="h-11 w-full rounded-2xl border border-slate-900/10 bg-white/80 px-4 text-[13px] text-slate-900 shadow-sm outline-none backdrop-blur focus:ring-2 focus:ring-slate-900/10"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-slate-400">
                  ⌘/Ctrl K
                </span>
              </div>

              <button
                onClick={() => {
                  setQ('')
                  setActive('Alle')
                }}
                className="inline-flex h-11 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/70 px-4 text-[12px] font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Tags: WRAP */}
          <div className="mt-4 flex flex-wrap gap-2">
            <Chip active={active === 'Alle'} onClick={() => setActive('Alle')} label="Alle" />
            {visibleTags.map((t) => (
              <Chip key={t} active={active === t} onClick={() => setActive(t)} label={t} />
            ))}

            <button
              type="button"
              onClick={() => setShowAllTags((v) => !v)}
              className="rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur transition hover:bg-white"
            >
              {showAllTags ? 'Weniger Tags' : `Mehr Tags (+${ALL_TAGS.length - 10})`}
            </button>
          </div>

          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-[11px] text-slate-600">Tipp: Tags in Karten anklicken → sofort filtern.</div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() =>
                  setOpen(() => {
                    const next: Record<string, boolean> = {}
                    for (const p of PHASES) next[p.id] = true
                    return next
                  })
                }
                className="inline-flex h-9 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/70 px-3 text-[11px] font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:bg-white"
              >
                Alle öffnen
              </button>
              <button
                type="button"
                onClick={() =>
                  setOpen(() => {
                    const next: Record<string, boolean> = {}
                    for (const p of PHASES) next[p.id] = false
                    return next
                  })
                }
                className="inline-flex h-9 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/70 px-3 text-[11px] font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:bg-white"
              >
                Alle schließen
              </button>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] ring-1 ring-inset ring-white/50" />
      </div>

      {/* Inhalte */}
      {filtered.length === 0 ? (
        <div className="rounded-[1.6rem] border border-slate-900/10 bg-white/70 p-5 text-[13px] text-slate-700 shadow-sm backdrop-blur">
          Keine Treffer. Probieren Sie „MVP“, „SaaS“, „Supabase“, „Vercel“, „Stripe“, „OAuth“, „GTM“.
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((p) => {
            const isOpen = open[p.id] ?? true
            return (
              <section key={p.id} id={p.id} className="scroll-mt-24">
                <button
                  type="button"
                  onClick={() => setOpen((prev) => ({ ...prev, [p.id]: !isOpen }))}
                  className="w-full rounded-[1.4rem] border border-slate-900/10 bg-white/70 px-4 py-3 text-left shadow-sm backdrop-blur transition hover:bg-white"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h2 className="text-[15px] font-semibold tracking-tight text-slate-900 sm:text-[16px]">{p.title}</h2>
                      <div className="mt-0.5 text-[12px] text-slate-600">{p.subtitle}</div>
                    </div>
                    <div className="shrink-0 text-right">
                      <div className="text-[11px] font-medium text-slate-700">{p.items.length} Leistungen</div>
                      <div className="mt-1 inline-flex items-center gap-2 text-[11px] text-slate-500">
                        <span>{isOpen ? 'Weniger' : 'Mehr'}</span>
                        <span className="inline-block">{isOpen ? '▾' : '▸'}</span>
                      </div>
                    </div>
                  </div>
                </button>

                {isOpen ? (
                  <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {p.items.map((it) => (
                      <div
                        key={it.t}
                        className="relative overflow-hidden rounded-[1.4rem] border border-slate-900/10 bg-white/70 p-4 shadow-sm backdrop-blur transition hover:bg-white/80"
                      >
                        <div className="flex items-start gap-3">
                          <IconWrap>{it.icon}</IconWrap>

                          <div className="min-w-0">
                            <div className="text-[13px] font-semibold text-slate-900">{it.t}</div>
                            <div className="mt-1 text-[12px] leading-relaxed text-slate-600">{it.s}</div>

                            <div className="mt-3 flex flex-wrap gap-1.5">
                              {it.tags.slice(0, 2).map((t) => (
                                <button
                                  key={t}
                                  type="button"
                                  onClick={() => setActive(t)}
                                  className="inline-flex items-center rounded-full border border-slate-900/10 bg-white/70 px-2 py-0.5 text-[10px] font-medium text-slate-700 shadow-sm transition hover:bg-white"
                                  title={`Nach Tag filtern: ${t}`}
                                >
                                  {t}
                                </button>
                              ))}
                              {it.tags.length > 2 ? (
                                <span className="inline-flex items-center rounded-full border border-slate-900/10 bg-white/50 px-2 py-0.5 text-[10px] font-medium text-slate-500">
                                  +{it.tags.length - 2}
                                </span>
                              ) : null}
                            </div>
                          </div>
                        </div>

                        <div className="pointer-events-none absolute inset-0 rounded-[1.4rem] ring-1 ring-inset ring-white/50" />
                      </div>
                    ))}
                  </div>
                ) : null}
              </section>
            )
          })}
        </div>
      )}

      <style>{`
        .mvpwerk-leist-filter-sheen{
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
          animation: lSheen 9s ease-in-out infinite;
          opacity: .55;
        }
        @keyframes lSheen{
          0%{ transform: translateX(-35%); opacity:0.22; }
          50%{ transform: translateX(0%); opacity:0.48; }
          100%{ transform: translateX(35%); opacity:0.22; }
        }
        @media (prefers-reduced-motion: reduce){
          .mvpwerk-leist-filter-sheen{
            animation:none !important;
            transform:none !important;
          }
        }
      `}</style>
    </div>
  )
}

function Chip({
  label,
  active,
  onClick,
}: {
  label: string
  active?: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'rounded-full border px-3 py-1 text-[11px] font-medium shadow-sm transition backdrop-blur',
        'whitespace-nowrap',
        active
          ? 'border-slate-900/10 bg-slate-900 text-white'
          : 'border-slate-900/10 bg-white/70 text-slate-700 hover:bg-white',
      ].join(' ')}
    >
      {label}
    </button>
  )
}

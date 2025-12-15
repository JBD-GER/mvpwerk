// src/app/agb/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AGB',
  description:
    'Allgemeine Geschäftsbedingungen (AGB) der Flaaq Holding GmbH / MVPWERK für Softwareentwicklung, MVPs, Web Apps, SaaS und KI-Integrationen.',
  alternates: { canonical: '/agb' },
}

const COMPANY = {
  brand: 'MVPWERK',
  legal: 'Flaaq Holding GmbH',
  street: 'Dammstr. 6G',
  zipCity: '30890 Barsinghausen',
  phone: '+49 5035 3169996',
  email: 'info@mvpwerk.de',
}

const TOC = [
  { id: 'geltung', t: '1. Geltungsbereich' },
  { id: 'anbieter', t: '2. Anbieter' },
  { id: 'leistungen', t: '3. Leistungsgegenstand' },
  { id: 'vertrag', t: '4. Vertragsschluss & Projektstart' },
  { id: 'mitwirkung', t: '5. Mitwirkungspflichten' },
  { id: 'aenderungen', t: '6. Änderungen & Change Requests' },
  { id: 'termine', t: '7. Termine, Verzug, Force Majeure' },
  { id: 'abnahme', t: '8. Abnahme & Übergabe' },
  { id: 'verguetung', t: '9. Vergütung & Zahlung' },
  { id: 'rechte', t: '10. Nutzungsrechte & Quellcode' },
  { id: 'dritt', t: '11. Drittanbieter, Open Source, KI-Dienste' },
  { id: 'geheim', t: '12. Vertraulichkeit & Referenzen' },
  { id: 'gewaehr', t: '13. Gewährleistung (Mängel)' },
  { id: 'haftung', t: '14. Haftung' },
  { id: 'freist', t: '15. Freistellung' },
  { id: 'laufzeit', t: '16. Laufzeit, Kündigung, Storno' },
  { id: 'schluss', t: '17. Schlussbestimmungen' },
]

function Card({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={[
        'rounded-[1.6rem] border border-slate-900/10 bg-white/70 shadow-[0_22px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl',
        className,
      ].join(' ')}
    >
      {children}
      <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] ring-1 ring-inset ring-white/50" />
    </div>
  )
}

function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-[18px] font-semibold tracking-tight text-slate-900 sm:text-[20px]">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-[13px] leading-relaxed text-slate-700 sm:text-[14px]">
        {children}
      </div>
    </section>
  )
}

export default function AGBPage() {
  return (
    <main className="relative overflow-hidden bg-white">
      {/* Background wie Hero */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-slate-900/10 blur-3xl md:h-[720px] md:w-[720px]" />
        <div className="absolute -top-16 right-[-120px] h-[420px] w-[420px] rounded-full bg-slate-900/8 blur-3xl md:h-[560px] md:w-[560px]" />

        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_72%)]" />

        <div className="absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_70%)]">
          <div className="mvpwerk-agb-sheen absolute -left-1/2 top-0 h-full w-[200%]" />
        </div>
      </div>

      {/* Header */}
      <header className="relative mx-auto w-full max-w-[1200px] px-4 pt-10 sm:px-6 sm:pt-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
          Rechtliches · Stand: 15.12.2025
        </div>

        <h1 className="mt-4 text-[30px] font-semibold leading-[1.06] tracking-tight text-slate-900 sm:text-[40px] md:text-[46px]">
          Allgemeine Geschäftsbedingungen (AGB)
        </h1>

        <p className="mt-3 max-w-[900px] text-[14px] leading-relaxed text-slate-700 sm:text-[15px]">
          Diese AGB regeln die Zusammenarbeit mit <span className="font-semibold text-slate-900">{COMPANY.brand}</span> für
          Softwareentwicklung, MVPs, Web Apps, SaaS, API-Entwicklung sowie KI-Integrationen. Sie sind bewusst klar und
          projekttauglich formuliert – damit beide Seiten wissen, woran sie sind.
        </p>
      </header>

      <div className="relative mx-auto w-full max-w-[1200px] px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          {/* TOC */}
          <div className="lg:col-span-4">
            <div className="sticky top-6">
              <div className="relative overflow-hidden rounded-[1.6rem] border border-slate-900/10 bg-white/70 p-5 shadow-sm backdrop-blur-xl">
                <div className="text-[12px] font-semibold text-slate-900">Inhalt</div>
                <nav className="mt-3 space-y-1.5">
                  {TOC.map((x) => (
                    <a
                      key={x.id}
                      href={`#${x.id}`}
                      className="block rounded-xl border border-transparent px-3 py-2 text-[12px] text-slate-700 transition hover:border-slate-900/10 hover:bg-white/70"
                    >
                      {x.t}
                    </a>
                  ))}
                </nav>

                <div className="mt-4 rounded-2xl border border-slate-900/10 bg-white/70 p-4 text-[11px] leading-relaxed text-slate-700 shadow-sm">
                  <div className="font-semibold text-slate-900">Kurz & wichtig</div>
                  <ul className="mt-2 space-y-1.5">
                    <li>• Fokus: B2B (Unternehmer i.S.d. § 14 BGB).</li>
                    <li>• Quellcode & Rechte: nach vollständiger Zahlung.</li>
                    <li>• Ergebnisse/Business-KPIs: kein Garant – wir liefern saubere Umsetzung.</li>
                  </ul>
                </div>

                <div className="mt-4 text-[11px] text-slate-600">
                  Fragen?{' '}
                  <Link href="/kontakt" className="font-medium text-slate-900 underline underline-offset-2">
                    Kontakt
                  </Link>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] ring-1 ring-inset ring-white/50" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8">
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-[1.8rem] border border-slate-900/10 bg-white/70 p-6 shadow-[0_22px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:p-8">
                <div className="pointer-events-none absolute inset-0 opacity-60">
                  <div className="mvpwerk-agb-card-sheen absolute -left-1/2 top-0 h-full w-[200%]" />
                </div>

                <div className="relative space-y-10">
                  <Section id="geltung" title="1. Geltungsbereich">
                    <p>
                      (1) Diese AGB gelten für alle Verträge, Angebote und Leistungen zwischen{' '}
                      <span className="font-semibold text-slate-900">{COMPANY.legal}</span> (nachfolgend „Anbieter“) und
                      seinen Kunden (nachfolgend „Kunde“) im Bereich Softwareentwicklung, MVP-/SaaS-/Web-App-Projekte,
                      Beratung, Konzeption, UI/UX, Implementierung, API-Entwicklung, Wartung sowie KI-Integrationen.
                    </p>
                    <p>
                      (2) Diese AGB richten sich primär an Unternehmer i.S.d. § 14 BGB. Sofern ausnahmsweise Verbraucher
                      i.S.d. § 13 BGB beauftragen, gelten ergänzend zwingende Verbraucherschutzvorschriften; abweichende
                      Regelungen werden dann individuell vereinbart.
                    </p>
                    <p>
                      (3) Abweichende Bedingungen des Kunden gelten nur, wenn der Anbieter ihrer Geltung ausdrücklich
                      schriftlich zugestimmt hat.
                    </p>
                  </Section>

                  <Section id="anbieter" title="2. Anbieter">
                    <div className="rounded-2xl border border-slate-900/10 bg-white/70 p-4 shadow-sm">
                      <div className="text-[12px] font-semibold text-slate-900">{COMPANY.legal}</div>
                      <div className="mt-1 text-[12px] text-slate-700">
                        {COMPANY.street}, {COMPANY.zipCity}
                      </div>
                      <div className="mt-2 grid gap-2 text-[12px] text-slate-700 sm:grid-cols-2">
                        <div>
                          Telefon: <span className="font-medium text-slate-900">{COMPANY.phone}</span>
                        </div>
                        <div>
                          E-Mail: <span className="font-medium text-slate-900">{COMPANY.email}</span>
                        </div>
                      </div>
                    </div>
                  </Section>

                  <Section id="leistungen" title="3. Leistungsgegenstand">
                    <p>
                      (1) Gegenstand sind – je nach Projekt – Konzeption, Design, Entwicklung, Implementierung, Tests,
                      Deployment, Dokumentation sowie optional Wartung/Weiterentwicklung.
                    </p>
                    <p>
                      (2) Soweit nicht ausdrücklich schriftlich als „garantiert“ vereinbart, schuldet der Anbieter keine
                      bestimmten wirtschaftlichen Ergebnisse (z. B. Umsatz, Conversion, Funding, Nutzerzahlen,
                      SEO-Rankings). Geschuldet ist eine fachgerechte, professionelle Leistung nach Stand der Technik im
                      vereinbarten Umfang.
                    </p>
                    <p>
                      (3) Rechts-/Steuerberatung, Datenschutzberatung sowie branchenspezifische Compliance (z. B.
                      GoBD/E-Rechnung/IDD) sind nicht Bestandteil, sofern nicht ausdrücklich beauftragt.
                    </p>
                  </Section>

                  <Section id="vertrag" title="4. Vertragsschluss & Projektstart">
                    <p>
                      (1) Angebote sind freibleibend, sofern nicht anders gekennzeichnet. Ein Vertrag kommt zustande durch
                      (a) schriftliche Annahme des Angebots, (b) Gegenzeichnung, (c) Startfreigabe per E-Mail oder (d)
                      Beginn der Leistungserbringung.
                    </p>
                    <p>
                      (2) Projektstart erfolgt nach Klärung der Startvoraussetzungen (insb. Zugangsdaten, Inhalte,
                      Ansprechpartner, Scope) und – falls vereinbart – nach Eingang einer Anzahlung.
                    </p>
                  </Section>

                  <Section id="mitwirkung" title="5. Mitwirkungspflichten des Kunden">
                    <p>
                      (1) Der Kunde stellt alle zur Umsetzung erforderlichen Informationen, Inhalte, Entscheidungen,
                      Zugänge und Freigaben rechtzeitig bereit (z. B. Domain/DNS, Hosting, Git-Repo, Accounts,
                      Branding-Assets, Texte).
                    </p>
                    <p>
                      (2) Verzögert sich das Projekt wegen fehlender Mitwirkung, verschieben sich Termine angemessen; der
                      Anbieter kann Mehraufwände nach Aufwand abrechnen.
                    </p>
                    <p>
                      (3) Der Kunde sichert zu, dass bereitgestellte Inhalte frei von Rechten Dritter sind bzw. er über die
                      erforderlichen Nutzungsrechte verfügt.
                    </p>
                  </Section>

                  <Section id="aenderungen" title="6. Änderungen & Change Requests">
                    <p>
                      (1) Der vereinbarte Leistungsumfang (Scope) ergibt sich aus Angebot/Statement of Work. Zusätzliche
                      Anforderungen (Change Requests) werden als Zusatzleistung behandelt.
                    </p>
                    <p>
                      (2) Der Anbieter bewertet Change Requests hinsichtlich Aufwand, Kosten, Risiken und Timeline. Erst
                      nach schriftlicher Freigabe durch den Kunden werden Änderungen umgesetzt.
                    </p>
                    <p>
                      (3) „Schnell mal“-Änderungen ohne Freigabe erfolgen nur, wenn der Anbieter dem ausdrücklich zustimmt;
                      sie können Zeitpläne beeinflussen.
                    </p>
                  </Section>

                  <Section id="termine" title="7. Termine, Verzug, höhere Gewalt">
                    <p>
                      (1) Termine sind verbindlich nur, wenn ausdrücklich als verbindlich zugesagt. Ansonsten handelt es
                      sich um Plantermine.
                    </p>
                    <p>
                      (2) Bei höherer Gewalt oder nicht vom Anbieter zu vertretenden Umständen (z. B. Ausfälle
                      Drittanbieter/Cloud, Streik, behördliche Maßnahmen, massive Internetstörungen) verlängern sich
                      Fristen angemessen.
                    </p>
                    <p>
                      (3) Gerät der Kunde in Annahme-/Mitwirkungsverzug, kann der Anbieter angemessene Stillstandskosten
                      und Mehraufwände geltend machen.
                    </p>
                  </Section>

                  <Section id="abnahme" title="8. Abnahme & Übergabe">
                    <p>
                      (1) Bei werkvertraglichen Leistungen erfolgt eine Abnahme (z. B. Release, Meilenstein, MVP-Go-Live)
                      nach Bereitstellung und Testphase.
                    </p>
                    <p>
                      (2) Der Kunde prüft innerhalb von 10 Werktagen und erklärt Abnahme oder meldet wesentliche Mängel.
                      Erfolgt keine Rückmeldung oder wird produktiv genutzt, gilt die Leistung als abgenommen, soweit
                      keine wesentlichen Mängel vorliegen.
                    </p>
                    <p>
                      (3) Mit Abnahme beginnt die Gewährleistungsfrist. Nicht wesentliche Mängel berechtigen nicht zur
                      Abnahmeverweigerung.
                    </p>
                  </Section>

                  <Section id="verguetung" title="9. Vergütung & Zahlung">
                    <p>
                      (1) Vergütung erfolgt nach Angebot: Festpreis, Paket, Retainer oder nach Aufwand (Time & Material).
                      Reise-/Nebenkosten nur bei Vereinbarung.
                    </p>
                    <p>
                      (2) Rechnungen sind innerhalb von 7 Kalendertagen ohne Abzug fällig, sofern nichts anderes
                      vereinbart. Bei Zahlungsverzug kann der Anbieter Leistungen bis zur Zahlung pausieren.
                    </p>
                    <p>
                      (3) Bei Festpreisprojekten können Abschlagszahlungen nach Meilensteinen vereinbart werden.
                    </p>
                  </Section>

                  <Section id="rechte" title="10. Nutzungsrechte & Quellcode">
                    <p>
                      (1) Der Kunde erhält – nach vollständiger Zahlung – die im Vertrag vereinbarten Nutzungsrechte an
                      den individuell erstellten Arbeitsergebnissen (insb. Quellcode, UI, Konfiguration).
                    </p>
                    <p>
                      (2) Vor vollständiger Zahlung verbleiben sämtliche Rechte beim Anbieter; eine produktive Nutzung ist
                      in diesem Zeitraum nur mit Zustimmung zulässig.
                    </p>
                    <p>
                      (3) Vorbestehende Komponenten, Libraries, Frameworks, Templates und Tooling des Anbieters bleiben
                      dessen Eigentum; der Kunde erhält daran ein Nutzungsrecht, soweit zur Nutzung des Projekts
                      erforderlich.
                    </p>
                  </Section>

                  <Section id="dritt" title="11. Drittanbieter, Open Source, KI-Dienste">
                    <p>
                      (1) Projekte nutzen häufig Drittanbieter (z. B. Hosting/Deployment, Datenbank, Auth, E-Mail,
                      Payments, Analytics). Für Verfügbarkeit und Konditionen dieser Dienste ist grundsätzlich der jeweilige
                      Anbieter verantwortlich.
                    </p>
                    <p>
                      (2) Open-Source-Software wird nach den jeweiligen Lizenzbedingungen eingesetzt. Der Anbieter weist
                      den Kunden auf relevante Lizenzpflichten hin, soweit im Projekt erkennbar.
                    </p>
                    <p>
                      (3) KI-Integrationen: Soweit vereinbart, kann der Anbieter KI-Funktionen (z. B. Chat, Assistenz,
                      Klassifikation, Automationen) integrieren. Der Kunde bleibt verantwortlich für Inhalte/Prompts,
                      Ausgaben-Validierung und den rechtmäßigen Einsatz (insb. bei personenbezogenen Daten). Für rein
                      inhaltliche Richtigkeit von KI-Outputs wird keine Gewähr übernommen.
                    </p>
                  </Section>

                  <Section id="geheim" title="12. Vertraulichkeit & Referenzen">
                    <p>
                      (1) Beide Parteien behandeln Geschäftsgeheimnisse und vertrauliche Informationen streng vertraulich
                      und nutzen sie nur zur Vertragsdurchführung.
                    </p>
                    <p>
                      (2) Der Anbieter darf den Kunden als Referenz (Name/Logo/kurze Projektbeschreibung) nennen, sofern
                      der Kunde nicht in Textform widerspricht. Vertrauliche Details werden nicht veröffentlicht.
                    </p>
                  </Section>

                  <Section id="gewaehr" title="13. Gewährleistung (Mängel)">
                    <p>
                      (1) Der Anbieter gewährleistet die vertraglich vereinbarte Funktionalität zum Zeitpunkt der Abnahme.
                      Gewährleistung umfasst nach Wahl des Anbieters Nachbesserung oder Ersatzlieferung.
                    </p>
                    <p>
                      (2) Keine Gewähr für Fehler, die durch Änderungen des Kunden/ Dritter, unsachgemäße Nutzung,
                      Drittanbieter-Änderungen oder fehlende Updates entstehen.
                    </p>
                    <p>
                      (3) Für Projekte nach Aufwand (reine Dienstleistungen/Consulting) gelten Gewährleistungsrechte nur,
                      soweit gesetzlich zwingend.
                    </p>
                  </Section>

                  <Section id="haftung" title="14. Haftung">
                    <p>
                      (1) Der Anbieter haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie bei Schäden aus der
                      Verletzung des Lebens, des Körpers oder der Gesundheit.
                    </p>
                    <p>
                      (2) Bei einfacher Fahrlässigkeit haftet der Anbieter nur bei Verletzung wesentlicher Vertragspflichten
                      (Kardinalpflichten) und der Höhe nach begrenzt auf den typischerweise vorhersehbaren Schaden; im
                      Übrigen ist die Haftung ausgeschlossen, soweit gesetzlich zulässig.
                    </p>
                    <p>
                      (3) Haftungshöchstbetrag (Cap): Soweit zulässig, ist die Haftung insgesamt auf die Netto-Vergütung
                      des betroffenen Projektabschnitts begrenzt, maximal auf die Netto-Gesamtvergütung des Vertrags.
                    </p>
                    <p>
                      (4) Für Datenverlust haftet der Anbieter nur, soweit der Kunde angemessene Datensicherungsmaßnahmen
                      getroffen hat; die Haftung ist auf den Wiederherstellungsaufwand bei ordnungsgemäßer Sicherung
                      begrenzt.
                    </p>
                    <p>
                      (5) Keine Haftung für mittelbare Schäden, entgangenen Gewinn, ausgebliebene Einsparungen, reine
                      Vermögensfolgeschäden oder Ansprüche Dritter, sofern nicht zwingendes Recht entgegensteht.
                    </p>
                    <p>
                      (6) Der Anbieter haftet nicht für Störungen/Schäden, die ausschließlich im Verantwortungsbereich von
                      Drittanbietern (Cloud/Hosting/Payments/KI-Provider) entstehen.
                    </p>
                  </Section>

                  <Section id="freist" title="15. Freistellung">
                    <p>
                      Der Kunde stellt den Anbieter von Ansprüchen Dritter frei, die aus (a) vom Kunden bereitgestellten
                      Inhalten, (b) rechtswidriger Nutzung der Software, (c) fehlenden Rechten/Lizenzen oder (d) Verstößen
                      gegen Datenschutz-/Wettbewerbs-/Urheberrecht durch den Kunden resultieren.
                    </p>
                  </Section>

                  <Section id="laufzeit" title="16. Laufzeit, Kündigung, Storno">
                    <p>
                      (1) Verträge enden mit Leistungserbringung, sofern nicht Wartung/Retainer vereinbart ist.
                    </p>
                    <p>
                      (2) Bei Kündigung/Storno durch den Kunden sind bis dahin erbrachte Leistungen zu vergüten; zusätzlich
                      können reservierte Kapazitäten/Meilensteine nach Maßgabe der Vereinbarung abgerechnet werden.
                    </p>
                    <p>
                      (3) Der Anbieter kann aus wichtigem Grund kündigen (z. B. wiederholter Zahlungsverzug, schwere
                      Mitwirkungsverletzung).
                    </p>
                  </Section>

                  <Section id="schluss" title="17. Schlussbestimmungen">
                    <p>
                      (1) Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Gerichtsstand für Kaufleute ist –
                      soweit zulässig – der Sitz des Anbieters.
                    </p>
                    <p>
                      (2) Änderungen/Ergänzungen bedürfen der Textform (z. B. E-Mail), sofern nicht strengere Form
                      vorgeschrieben ist.
                    </p>
                    <p>
                      (3) Sollten einzelne Bestimmungen unwirksam sein, bleibt der Vertrag im Übrigen wirksam; anstelle der
                      unwirksamen Bestimmung gilt die gesetzliche Regelung.
                    </p>
                  </Section>

                  <div className="rounded-2xl border border-slate-900/10 bg-white/70 p-4 text-[11px] leading-relaxed text-slate-700 shadow-sm">
                    <div className="font-semibold text-slate-900">Hinweis</div>
                    Diese Vorlage ist praxisnah, aber ersetzt keine individuelle Rechtsberatung. Wenn Sie maximal „wasserdicht“
                    sein wollen (z. B. Abnahme-Mechanik, Haftungs-Cap, Subunternehmer, AVV, KI-Provider-Kette), lassen Sie die
                    AGB einmal kurz anwaltlich gegenprüfen.
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Link
                      href="/kontakt"
                      className="inline-flex h-12 w-full items-center justify-center rounded-2xl bg-slate-900 px-6 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(15,23,42,0.22)] transition hover:translate-y-[-1px] hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
                    >
                      Kontakt aufnehmen →
                    </Link>

                    <div className="text-center text-[11px] text-slate-600 sm:text-right">
                      {COMPANY.legal} · {COMPANY.zipCity}
                    </div>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-[1.8rem] ring-1 ring-inset ring-white/50" />
              </div>

              {/* Bottom Fade (sanfter Übergang nach unten) */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-28 sm:h-32">
                <div className="absolute inset-0 mvpwerk-agb-bottom-fade" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .mvpwerk-agb-top-fade{
          background: linear-gradient(
            to bottom,
            #ffffff 0%,
            rgba(255,255,255,0.96) 45%,
            rgba(255,255,255,0.65) 72%,
            rgba(255,255,255,0) 100%
          );
        }
        .mvpwerk-agb-bottom-fade{
          background: linear-gradient(
            to top,
            #ffffff 0%,
            rgba(255,255,255,0.92) 55%,
            rgba(255,255,255,0.0) 100%
          );
        }
        .mvpwerk-agb-sheen{
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(15,23,42,0.05) 35%,
            rgba(15,23,42,0.10) 50%,
            rgba(15,23,42,0.05) 65%,
            transparent 100%
          );
          transform: translateX(-35%);
          animation: agbSheen 10s ease-in-out infinite;
          filter: blur(0.5px);
          will-change: transform, opacity;
        }
        @keyframes agbSheen{
          0%{ transform: translateX(-35%); opacity:0.30; }
          50%{ transform: translateX(0%); opacity:0.60; }
          100%{ transform: translateX(35%); opacity:0.30; }
        }

        .mvpwerk-agb-card-sheen{
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(15,23,42,0.05) 35%,
            rgba(15,23,42,0.10) 50%,
            rgba(15,23,42,0.05) 65%,
            transparent 100%
          );
          transform: translateX(-35%);
          animation: agbCardSheen 9s ease-in-out infinite;
          filter: blur(0.5px);
          will-change: transform, opacity;
        }
        @keyframes agbCardSheen{
          0%{ transform: translateX(-35%); opacity:0.22; }
          50%{ transform: translateX(0%); opacity:0.48; }
          100%{ transform: translateX(35%); opacity:0.22; }
        }

        @media (prefers-reduced-motion: reduce){
          .mvpwerk-agb-sheen,
          .mvpwerk-agb-card-sheen{
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </main>
  )
}

import { DividerSoft, GlassCard, Lang, SectionShell } from './_ui'

export default function SoftwareFAQSection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'FAQ',
          title: 'Häufige Fragen zur Softwareentwicklung',
          subtitle: 'Kurz und praxisnah — damit Erwartungen und Realität sauber zusammenpassen.',
          faqs: [
            {
              q: 'Was ist der Unterschied zwischen MVP und „fertigem Produkt“?',
              a:
                'Ein MVP ist der kleinste sinnvolle Kern, der echten Nutzen liefert. Ein Produkt umfasst zusätzlich Stabilität, Betrieb, Rollen, Edge-Cases und Prozesse für Weiterentwicklung.',
            },
            {
              q: 'Warum ist Datenmodell so wichtig?',
              a:
                'Weil jede Funktion darauf basiert. Ein sauberes Datenmodell reduziert Bugs, verbessert Performance und verhindert spätere Komplett-Umbauten.',
            },
            {
              q: 'Warum sind Rollen & Rechte so viel Arbeit?',
              a:
                'Weil „wer darf was“ nicht nur UI ist. Es betrifft API, Datenbank, Storage, Edge-Cases und Sicherheit. Wer das unterschätzt, baut später teuer nach.',
            },
            {
              q: 'Brauche ich wirklich Monitoring?',
              a:
                'Wenn Nutzer produktiv arbeiten: ja. Ohne Logs/Error Tracking bleiben Probleme „unsichtbar“ — und werden erst durch Kunden gemeldet.',
            },
            {
              q: 'Kann ich später das Team wechseln?',
              a:
                'Ja — wenn Code, Struktur, Setup und Dokumentation sauber sind. Genau deshalb sind Deliverables und Standards so wichtig.',
            },
            {
              q: 'Ist „ohne CTA“ sinnvoll?',
              a:
                'Für Informations-Landingpages: ja. Fokus auf Substanz, damit Entscheider Vertrauen aufbauen können, ohne gedrängt zu werden.',
            },
          ],
        }
      : {
          eyebrow: 'FAQ',
          title: 'Common questions about software development',
          subtitle: 'Short and practical — to align expectations with reality.',
          faqs: [
            {
              q: 'What’s the difference between an MVP and a “finished product”?',
              a:
                'An MVP is the smallest meaningful core that delivers real value. A product adds stability, operations, roles, edge cases and a path for continuous development.',
            },
            {
              q: 'Why is the data model so important?',
              a:
                'Because every feature depends on it. A clean model reduces bugs, improves performance and prevents costly rewrites later.',
            },
            {
              q: 'Why do roles & permissions take so much effort?',
              a:
                'Because it’s not just UI. It affects API, database, storage, edge cases and security. Underestimate it and you’ll pay later.',
            },
            {
              q: 'Do I really need monitoring?',
              a:
                'If users depend on it: yes. Without logs/error tracking, issues stay invisible until customers report them.',
            },
            {
              q: 'Can I switch teams later?',
              a:
                'Yes — if code, structure, setup and documentation are clean. That’s why standards and deliverables matter.',
            },
            {
              q: 'Is “no CTA” a good idea?',
              a:
                'For informational landing pages: yes. It keeps focus on substance so decision makers can build trust without pressure.',
            },
          ],
        }

  return (
    <>
      <SectionShell id="faq" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle}>
        <div className="grid gap-4 md:grid-cols-2">
          {t.faqs.map((f) => (
            <GlassCard key={f.q} className="p-5 sm:p-6">
              <div className="text-[13px] font-semibold text-slate-900">{f.q}</div>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-700">{f.a}</p>
            </GlassCard>
          ))}
        </div>
      </SectionShell>
      <DividerSoft />
    </>
  )
}

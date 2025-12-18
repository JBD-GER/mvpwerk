// src/app/components/blockchainentwicklung/BlockchainCTASection.tsx
import Link from 'next/link'
import { GlassCard, Lang, Section, CheckList, Split } from './_ui'

export default function BlockchainCTASection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Start',
          title: 'Wollen wir Ihren Blockchain-Use-Case sauber „ent-buzzen“?',
          subtitle:
            'Schreiben Sie kurz, was bewiesen/abgewickelt/verwaltet werden soll. Sie erhalten einen konkreten Vorschlag (On/Off-chain Split, Risiken, nächster Schritt).',
          cta1: 'Kontakt aufnehmen',
          cta2: 'Zu den Anforderungen',
          boxTitle: 'Was Sie in die Nachricht schreiben können',
          bullets: [
            'Use-Case: Nachweis, Rechte, Settlement, Registry…',
            'Beteiligte Parteien (wer vertraut wem nicht?)',
            'On-chain vs off-chain Idee (falls vorhanden)',
            'Wallet-Ansatz: custody oder non-custody?',
          ],
        }
      : {
          eyebrow: 'Start',
          title: 'Shall we de-buzz your blockchain use case?',
          subtitle:
            'Tell us what must be proven/settled/managed. You’ll get a concrete proposal (on/off-chain split, risks, next step).',
          cta1: 'Get in touch',
          cta2: 'Back to requirements',
          boxTitle: 'What to include in your message',
          bullets: [
            'Use case: proof, rights, settlement, registry…',
            'Parties involved (who must not trust whom?)',
            'On-chain vs off-chain idea (if any)',
            'Wallet approach: custody or non-custody?',
          ],
        }

  return (
    <Section eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} tone="light">
      <Split
        left={
          <GlassCard className="p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-200/70"
              >
                {t.cta1}
              </Link>

              <Link
                href="#anforderungen"
                className="inline-flex items-center justify-center rounded-full border border-white/60 bg-white/70 px-5 py-3 text-sm font-medium text-slate-900 shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200/70"
              >
                {t.cta2}
              </Link>
            </div>
          </GlassCard>
        }
        right={
          <GlassCard className="p-6">
            <div className="text-base font-medium text-slate-900">{t.boxTitle}</div>
            <div className="mt-4">
              <CheckList items={t.bullets} />
            </div>
          </GlassCard>
        }
      />
    </Section>
  )
}

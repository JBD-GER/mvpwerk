import { DividerSoft, GlassCard, IconShield, IconSpeed, Lang, SectionShell } from './_ui'

export default function SoftwareQualitySection({ lang }: { lang: Lang }) {
  const t =
    lang === 'de'
      ? {
          eyebrow: 'Qualität',
          title: 'Qualität ist kein Add-on — sie ist Teil des Systems',
          subtitle:
            'Performance, Sicherheit und Wartbarkeit kommen nicht „am Ende“. Sie entstehen durch Entscheidungen beim Datenmodell, in der API und im UI.',
          pillars: [
            {
              title: 'Security by default',
              icon: 'shield',
              items: [
                {
                  k: 'Least Privilege',
                  v: 'Zugriffe sind minimal, klar und überprüfbar.',
                },
                {
                  k: 'RLS & Policies',
                  v: 'Mandantentrennung und Rechte am Datenlayer.',
                },
                {
                  k: 'Secure Storage',
                  v: 'Signed URLs, saubere Pfade, keine offenen Buckets.',
                },
                {
                  k: 'Safe APIs',
                  v: 'Validierung, Rate Limits, idempotente Calls.',
                },
              ],
            },
            {
              title: 'Performance by design',
              icon: 'speed',
              items: [
                {
                  k: 'Server-first',
                  v: 'Datenzugriff dort, wo er effizient ist.',
                },
                {
                  k: 'Caching',
                  v: 'Sinnvoller Cache statt „reload everything“.',
                },
                {
                  k: 'Indices',
                  v: 'Datenbank bleibt schnell, auch bei Wachstum.',
                },
                {
                  k: 'Lightweight UI',
                  v: 'Saubere Komponenten, kein unnötiger Ballast.',
                },
              ],
            },
          ],
          checklistTitle: 'Mini-Checkliste: Woran Sie gute Umsetzung erkennen',
          checklist: [
            'Klare Rollen- und Rechte-Logik (nicht nur „Admin/User“)',
            'Ein nachvollziehbares Datenmodell mit Constraints',
            'Fehler werden sauber behandelt (nicht „silent failing“)',
            'Uploads sind sicher (Signed URLs, Policies)',
            'Das UI ist responsive (Mobile/Tablet/Desktop)',
            'Deployments sind wiederholbar (CI/CD, Env Vars, Secrets)',
            'Monitoring/Logs sind vorhanden, nicht „nachträglich“',
            'Wichtige Entscheidungen sind dokumentiert',
          ],
          note:
            'Wenn Sie möchten, kann diese Checkliste später als internes Abnahme-Dokument dienen (auch wenn Sie nicht mit MVPWERK arbeiten).',
        }
      : {
          eyebrow: 'Quality',
          title: 'Quality isn’t an add-on — it’s part of the system',
          subtitle:
            'Performance, security and maintainability don’t happen “at the end”. They come from decisions in the data model, API and UI.',
          pillars: [
            {
              title: 'Security by default',
              icon: 'shield',
              items: [
                { k: 'Least privilege', v: 'Minimal, clear, verifiable access.' },
                { k: 'RLS & policies', v: 'Tenant isolation and permissions on the data layer.' },
                { k: 'Secure storage', v: 'Signed URLs, clean paths, no public buckets.' },
                { k: 'Safe APIs', v: 'Validation, rate limits, idempotency.' },
              ],
            },
            {
              title: 'Performance by design',
              icon: 'speed',
              items: [
                { k: 'Server-first', v: 'Data access where it’s efficient.' },
                { k: 'Caching', v: 'Useful caching instead of “reload everything”.' },
                { k: 'Indexes', v: 'Database stays fast as you grow.' },
                { k: 'Lightweight UI', v: 'Clean components, no unnecessary bloat.' },
              ],
            },
          ],
          checklistTitle: 'Mini checklist: how to spot good execution',
          checklist: [
            'Clear roles & permission logic (not just “admin/user”)',
            'Traceable data model with constraints',
            'Errors handled cleanly (no silent failing)',
            'Uploads are secure (signed URLs, policies)',
            'Responsive UI (mobile/tablet/desktop)',
            'Repeatable deployments (CI/CD, env vars, secrets)',
            'Monitoring/logs exist (not “later”)',
            'Key decisions documented',
          ],
          note:
            'If you want, this checklist can later become an internal acceptance document (even if you don’t work with MVPWERK).',
        }

  return (
    <>
      <SectionShell id="qualitaet" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle}>
        <div className="grid gap-4 lg:grid-cols-2">
          {t.pillars.map((p) => (
            <GlassCard key={p.title} className="p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/70 shadow-sm">
                  {p.icon === 'shield' ? <IconShield /> : <IconSpeed />}
                </div>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold text-slate-900">{p.title}</div>
                  <div className="mt-1 text-[11px] text-slate-600">
                    {lang === 'de' ? 'Standards, die langfristig Zeit sparen.' : 'Standards that save time long-term.'}
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {p.items.map((it) => (
                  <div key={it.k} className="rounded-2xl border border-slate-900/10 bg-white/60 p-4">
                    <div className="text-[12px] font-semibold text-slate-900">{it.k}</div>
                    <p className="mt-1 text-[12px] leading-relaxed text-slate-700">{it.v}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        <GlassCard className="mt-6 p-5 sm:p-6">
          <div className="text-[13px] font-semibold text-slate-900">{t.checklistTitle}</div>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {t.checklist.map((x) => (
              <div
                key={x}
                className="rounded-2xl border border-slate-900/10 bg-white/60 px-3 py-2 text-[12px] text-slate-700"
              >
                {x}
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-2xl border border-slate-900/10 bg-white/60 p-3 text-[11px] leading-relaxed text-slate-600">
            {t.note}
          </div>
        </GlassCard>
      </SectionShell>
      <DividerSoft />
    </>
  )
}

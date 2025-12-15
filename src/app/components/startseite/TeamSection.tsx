import Image from 'next/image'

export default function TeamSection() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-20">
      {/* ruhiger Background */}
<div className="pointer-events-none absolute inset-0 bg-white" />


      <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6">
        <div className="grid items-start gap-10 md:gap-12 lg:grid-cols-12 lg:gap-12">
          {/* LEFT / TEXT */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
              Team MVPWERK
            </div>

            <h2 className="mt-4 text-[30px] font-semibold leading-[1.06] tracking-tight text-slate-900 sm:text-[40px] md:text-[46px]">
              Nicht „Agentur-Output“ – sondern Software, die man wirklich nutzt.
            </h2>

            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-700 sm:text-[16px]">
              Wir bauen MVPs, die sich <strong className="font-semibold text-slate-900">wie ein fertiges Produkt</strong> anfühlen:
              nicht nur hübsche Screens, sondern <strong className="font-semibold text-slate-900">vollwertige Software</strong>, die Sie
              produktiv einsetzen können – stabil, sauber gebaut und jederzeit ausbaubar.
            </p>

            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-700 sm:text-[16px]">
              Der Unterschied ist simpel: Wir liefern nicht „irgendwas, das man mal zeigen kann“, sondern eine Basis,
              die <strong className="font-semibold text-slate-900">im Alltag funktioniert</strong> – und in{' '}
              <strong className="font-semibold text-slate-900">Demo, Pitch und Kampagne</strong> sofort Vertrauen erzeugt.
              Genau deshalb wirkt es wie ein <strong className="font-semibold text-slate-900">Eyecatcher</strong>, nicht wie ein Prototyp.
            </p>

            {/* Quick reasons */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                {
                  t: 'Eine nutzbare Softwarelösung',
                  s: 'Login, Rollen/Rechte, Datenmodell, UI-Logik – nicht nur Klick-Dummys.',
                },
                {
                  t: 'Technisch sauber & übergabefähig',
                  s: 'Strukturiert, wartbar, dokumentierbar – Code & Ownership bleiben bei Ihnen.',
                },
                {
                  t: 'Schnelle Iterationen',
                  s: 'Kurze Feedback-Loops, klare Entscheidungen – sichtbarer Fortschritt jede Woche.',
                },
                {
                  t: 'Ready für Wachstum',
                  s: 'Basis so gebaut, dass Features, Rollen, Daten und Prozesse sauber mitwachsen.',
                },
              ].map((x) => (
                <div
                  key={x.t}
                  className="rounded-2xl border border-slate-900/10 bg-white/70 px-4 py-3 shadow-sm backdrop-blur"
                >
                  <div className="text-[12px] font-semibold text-slate-900">{x.t}</div>
                  <div className="mt-1 text-[11px] leading-relaxed text-slate-600">{x.s}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-[11px] text-slate-600">
              Fokus: Produkt-Qualität · saubere Übergabe · schneller Fortschritt · ausbaufähige Basis.
            </div>
          </div>

          {/* RIGHT / IMAGE with FLOATING BADGES (BOTTOM) */}
          <div className="order-1 lg:order-2 lg:col-span-5">
            <div className="mx-auto w-full max-w-[760px]">
              <div className="relative">
                {/* Image card */}
                <div className="relative overflow-hidden rounded-[2.2rem] border border-slate-900/10 bg-white/50 shadow-[0_28px_90px_rgba(15,23,42,0.12)]">
                  <Image
                    src="/bilder/gruppenbild_mvpwerk.png"
                    alt="Teamfoto MVPWERK"
                    width={2600}
                    height={1600}
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="h-auto w-full object-contain"
                    quality={100}
                  />
                </div>

                {/* Floating box (BOTTOM over image) */}
                <div className="absolute bottom-3 left-1/2 z-10 w-[calc(100%-1.25rem)] -translate-x-1/2 sm:bottom-4 sm:w-[calc(100%-2rem)]">
                  <div className="rounded-[1.4rem] border border-slate-900/10 bg-white/85 p-3 shadow-[0_18px_55px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:rounded-[1.6rem] sm:p-5">
                    {/* Header: alles einzeilig auf Mobile */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="truncate text-[11px] font-semibold text-slate-900 sm:text-[12px]">
                        Partner &amp; Auszeichnung
                      </div>

                      <div className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-900/10 bg-white/90 px-2.5 py-1 text-[10px] font-medium text-slate-700 shadow-sm sm:px-3 sm:text-[11px]">
                        <span className="text-slate-900">Top bewertet</span>
                        <span className="text-amber-500">★★★★★</span>
                        <span className="text-slate-900">4.9</span>
                      </div>
                    </div>

                    {/* Siegel: kleiner auf Mobile */}
                    <div className="mt-3 grid grid-cols-3 gap-2 sm:mt-4 sm:gap-3">
                      {/* Google Partner */}
                      <div className="flex items-center justify-center rounded-2xl border border-slate-900/10 bg-white/90 p-2 shadow-sm sm:p-3">
                        <div className="relative h-[42px] w-full sm:h-[62px]">
                          <Image
                            src="/bilder/Partner-RGB.webp"
                            alt="Google Partner"
                            fill
                            sizes="(min-width: 640px) 180px, 33vw"
                            className="object-contain"
                            quality={100}
                          />
                        </div>
                      </div>

                      {/* TOP Experten 2020 */}
                      <div className="flex items-center justify-center rounded-2xl border border-slate-900/10 bg-white/90 p-2 shadow-sm sm:p-3">
                        <div className="relative h-[42px] w-full sm:h-[62px]">
                          <Image
                            src="/bilder/TOP-experten_Siegel_2020.png"
                            alt="TOP Experten Siegel 2020"
                            fill
                            sizes="(min-width: 640px) 180px, 33vw"
                            className="object-contain"
                            quality={100}
                          />
                        </div>
                      </div>

                      {/* TOP Experten 2021 */}
                      <div className="flex items-center justify-center rounded-2xl border border-slate-900/10 bg-white/90 p-2 shadow-sm sm:p-3">
                        <div className="relative h-[42px] w-full sm:h-[62px]">
                          <Image
                            src="/bilder/TOP-experten_Siegel_2021.png"
                            alt="TOP Experten Siegel 2021"
                            fill
                            sizes="(min-width: 640px) 180px, 33vw"
                            className="object-contain"
                            quality={100}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Optional: wenn du den Satz unten wieder willst, dann hier klein & kurz */}
                    {/* <div className="mt-3 text-[10px] leading-relaxed text-slate-600 sm:text-[11px]">
                      Ausgezeichnete Arbeit ist kein Zufall: saubere Prozesse, klare Kommunikation, produktreife Umsetzung.
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

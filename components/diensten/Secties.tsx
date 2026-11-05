import Reveal, { SectionLabel } from "./Reveal";
import { diensten, sectoren, pakketten, stappen } from "@/data/diensten";

export function Diensten() {
  return (
    <section id="diensten" className="relative scroll-mt-24 py-24">
      <div className="container mx-auto px-6">
        <Reveal className="mb-12 max-w-3xl">
          <SectionLabel>Diensten</SectionLabel>
          <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
            Alles wat uw zaak digitaal nodig heeft, bij één persoon.
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {diensten.map((d, i) => (
            <Reveal key={d.id} delay={i * 0.05}>
              <article
                id={d.id}
                className="group h-full border border-white/10 bg-white/[0.03] p-7 transition-colors duration-300 hover:border-accent/60"
              >
                <p className="font-display text-xs text-slate-500">0{i + 1}</p>
                <h3 className="mt-3 font-display text-xl font-semibold text-white transition-colors duration-300 group-hover:text-accent">
                  {d.titel}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{d.intro}</p>
                <ul className="mt-5 space-y-2">
                  {d.punten.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-slate-400">
                      <span className="mt-2 h-1 w-1 shrink-0 bg-accent" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Sectoren() {
  return (
    <section id="sectoren" className="relative scroll-mt-24 border-t border-white/10 py-24">
      <div className="container mx-auto px-6">
        <Reveal className="mb-12 max-w-3xl">
          <SectionLabel>Per sector</SectionLabel>
          <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
            Oplossingen op maat van uw zaak.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Elke zaak is anders. Enkele voorbeelden van wat ik voor uw sector kan opzetten.
          </p>
        </Reveal>

        <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {sectoren.map((s, i) => (
            <Reveal key={s.sector} delay={i * 0.04} className="bg-primary p-6">
              <h3 className="font-display text-base font-semibold text-white">{s.sector}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{s.aanbod}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pakketten() {
  return (
    <section id="pakketten" className="relative scroll-mt-24 border-t border-white/10 py-24">
      <div className="container mx-auto px-6">
        <Reveal className="mb-12 max-w-3xl">
          <SectionLabel>Pakketten</SectionLabel>
          <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
            Duidelijke pakketten, vaste prijzen.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Kies een pakket of vraag een offerte op maat. U weet altijd vooraf waar u aan toe bent.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pakketten.map((p, i) => (
            <Reveal key={p.naam} delay={i * 0.05}>
              <div
                className={`flex h-full flex-col border p-7 ${
                  p.uitgelicht ? "border-accent bg-accent/[0.06]" : "border-white/10 bg-white/[0.03]"
                }`}
              >
                <p className="font-display text-[11px] uppercase tracking-[0.22em] text-slate-500">
                  {p.type}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-white">{p.naam}</h3>
                {p.uitgelicht && (
                  <p className="mt-2 font-display text-[11px] uppercase tracking-[0.2em] text-accent">
                    Ideaal om te starten
                  </p>
                )}
                <p className="mt-4 flex-1 text-sm leading-6 text-slate-300">{p.tekst}</p>
                <a
                  href="#contact"
                  className="mt-6 font-display text-xs uppercase tracking-[0.2em] text-accent transition-colors duration-300 hover:text-highlight"
                >
                  Prijs aanvragen →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-500">
          Iets anders nodig, zoals een webshop, netwerk of automatisering? Ik maak graag een offerte op maat.
        </p>
      </div>
    </section>
  );
}

export function Werkwijze() {
  return (
    <section id="werkwijze" className="relative scroll-mt-24 border-t border-white/10 py-24">
      <div className="container mx-auto px-6">
        <Reveal className="mb-12 max-w-3xl">
          <SectionLabel>Werkwijze</SectionLabel>
          <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
            Zo werken we samen.
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stappen.map((s, i) => (
            <Reveal key={s.titel} delay={i * 0.06}>
              <div className="h-full border-l-2 border-accent bg-white/[0.03] p-6">
                <p className="font-display text-3xl font-bold text-accent">
                  <span className="sr-only">Stap </span>
                  {i + 1}
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold text-white">{s.titel}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{s.tekst}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Voet() {
  return (
    <footer className="border-t border-white/10 py-8 md:py-10">
      <div className="container mx-auto flex flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-xs uppercase tracking-[0.22em] text-accent">Alex Ayibyan IT</p>
          <p className="mt-2 text-sm text-slate-400">
            Westerlo · © {new Date().getFullYear()}
          </p>
        </div>
        <div className="flex flex-wrap gap-6">
          {["diensten", "pakketten", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm capitalize text-slate-400 transition-colors duration-300 hover:text-accent"
            >
              {id}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

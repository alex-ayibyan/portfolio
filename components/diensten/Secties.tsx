import Reveal, { SectionHeader } from "./Reveal";
import { diensten, sectoren, pakketten, stappen } from "@/data/diensten";

const iconen: Record<string, string> = {
  website: "M3 5h18v12H3zM8 21h8M12 17v4",
  "sociale-media": "M7 10h10M7 14h6M5 4h14a2 2 0 012 2v9a2 2 0 01-2 2H9l-4 4V6a2 2 0 012-2z",
  "e-facturatie": "M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6",
  "kantoor-it": "M5 12a10 10 0 0114 0M8.5 15.5a5 5 0 017 0M12 19h.01M2 8.5a15 15 0 0120 0",
  automatisering: "M4 12a8 8 0 0113.7-5.7L20 8M20 4v4h-4M20 12a8 8 0 01-13.7 5.7L4 16M4 20v-4h4",
};

function Icoon({ id }: { id: string }) {
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
        <path d={iconen[id]} />
      </svg>
    </span>
  );
}

export function Diensten() {
  return (
    <section id="diensten" className="scroll-mt-20 bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Diensten"
          titel="Alles wat uw zaak digitaal nodig heeft, bij één persoon"
          tekst="Van een nieuwe website tot een printer die niet wil meewerken: u belt één nummer en ik regel het."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {diensten.map((d, i) => (
            <Reveal key={d.id} delay={i * 0.05}>
              <article
                id={d.id}
                className="h-full rounded-3xl bg-cream p-7 ring-1 ring-sand transition-shadow duration-300 hover:shadow-lg hover:shadow-brand-700/5"
              >
                <Icoon id={d.id} />
                <h3 className="mt-5 text-xl font-semibold text-ink">{d.titel}</h3>
                <p className="mt-3 leading-7 text-slate-600">{d.intro}</p>
                <ul className="mt-5 space-y-2.5">
                  {d.punten.map((p) => (
                    <li key={p} className="flex gap-3 text-[15px] text-slate-700">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
          <Reveal delay={0.25}>
            <div className="flex h-full flex-col justify-center rounded-3xl bg-brand-600 p-7 text-white">
              <h3 className="text-xl font-semibold">Niet zeker wat u nodig heeft?</h3>
              <p className="mt-3 leading-7 text-brand-50">
                Ik kom vrijblijvend langs, kijk samen met u waar het beter kan en geef eerlijk advies.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex w-fit items-center rounded-full bg-white px-6 py-3 font-medium text-brand-700 transition-colors hover:bg-brand-50"
              >
                Maak een afspraak
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Sectoren() {
  return (
    <section id="sectoren" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Voor wie"
          titel="Oplossingen op maat van uw zaak"
          tekst="Elke zaak is anders. Enkele voorbeelden van wat ik voor uw sector kan opzetten."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sectoren.map((s, i) => (
            <Reveal key={s.sector} delay={i * 0.04}>
              <div className="h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-sand">
                <h3 className="font-semibold text-ink">{s.sector}</h3>
                <p className="mt-2 leading-7 text-slate-600">{s.aanbod}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pakketten() {
  return (
    <section id="pakketten" className="scroll-mt-20 bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          center
          label="Pakketten"
          titel="Duidelijke pakketten, vaste prijzen"
          tekst="Kies een pakket of vraag een offerte op maat. U weet altijd vooraf waar u aan toe bent."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pakketten.map((p, i) => (
            <Reveal key={p.naam} delay={i * 0.05}>
              <div
                className={`relative flex h-full flex-col rounded-3xl p-7 ${
                  p.uitgelicht
                    ? "bg-brand-50 ring-2 ring-brand-500"
                    : "bg-cream ring-1 ring-sand"
                }`}
              >
                {p.uitgelicht && (
                  <span className="absolute -top-3 left-7 rounded-full bg-warm px-3 py-1 text-xs font-semibold text-ink">
                    Ideaal om te starten
                  </span>
                )}
                <p className="text-sm font-medium text-slate-500">{p.type}</p>
                <h3 className="mt-2 text-xl font-semibold text-ink">{p.naam}</h3>
                <p className="mt-4 flex-1 leading-7 text-slate-600">{p.tekst}</p>
                <a
                  href="#contact"
                  className={`mt-6 inline-flex items-center justify-center rounded-full px-5 py-3 text-[15px] font-medium transition-colors ${
                    p.uitgelicht
                      ? "bg-brand-600 text-white hover:bg-brand-700"
                      : "bg-white text-ink ring-1 ring-sand hover:ring-brand-500"
                  }`}
                >
                  Prijs aanvragen
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-slate-500">
          Iets anders nodig, zoals een webshop, netwerk of automatisering? Ik maak graag een offerte op maat.
        </p>
      </div>
    </section>
  );
}

export function Werkwijze() {
  return (
    <section id="werkwijze" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader label="Werkwijze" titel="Zo werken we samen" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stappen.map((s, i) => (
            <Reveal key={s.titel} delay={i * 0.06}>
              <div className="h-full">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 font-semibold text-white">
                  <span className="sr-only">Stap </span>
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink">{s.titel}</h3>
                <p className="mt-2 leading-7 text-slate-600">{s.tekst}</p>
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
    <footer className="border-t border-sand bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-ink">Alex Ayibyan</p>
          <p className="mt-1 text-sm text-slate-500">
            IT-hulp voor ondernemers · Westerlo · © {new Date().getFullYear()}
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-slate-600">
          <a href="#diensten" className="hover:text-brand-700">Diensten</a>
          <a href="#pakketten" className="hover:text-brand-700">Pakketten</a>
          <a href="#contact" className="hover:text-brand-700">Contact</a>
        </div>
      </div>
    </footer>
  );
}

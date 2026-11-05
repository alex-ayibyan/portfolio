import Reveal, { SectionHeader } from "./Reveal";
import {
  diensten,
  sectoren,
  stappen,
  aiVoorbeelden,
  aiResultaten,
  thuisHulp,
} from "@/data/diensten";

const iconen: Record<string, string> = {
  website: "M3 5h18v12H3zM8 21h8M12 17v4",
  "sociale-media": "M7 10h10M7 14h6M5 4h14a2 2 0 012 2v9a2 2 0 01-2 2H9l-4 4V6a2 2 0 012-2z",
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
          label="Voor ondernemers"
          titel="Alles wat uw zaak digitaal nodig heeft, bij één persoon"
          tekst="Van een nieuwe website tot een printer die niet wil meewerken: u belt één persoon en ik regel het."
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
        </div>

        <Reveal delay={0.1} className="mt-6">
          <div className="flex flex-col gap-5 rounded-3xl bg-brand-600 p-7 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h3 className="text-xl font-semibold">Niet zeker wat u nodig heeft?</h3>
              <p className="mt-2 leading-7 text-brand-50">
                Ik kom vrijblijvend langs, kijk samen met u waar het beter kan en geef eerlijk advies.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex w-fit shrink-0 items-center rounded-full bg-white px-6 py-3 font-medium text-brand-700 transition-colors hover:bg-brand-50"
            >
              Maak een afspraak
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function AiAutomatisering() {
  return (
    <section id="ai" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-7 py-14 sm:px-12 lg:px-14">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-500/30 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-warm/20 blur-3xl" aria-hidden="true" />

          <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-warm px-3 py-1 text-sm font-semibold text-ink">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l1.9 5.6L19.5 9.5l-5.6 1.9L12 17l-1.9-5.6L4.5 9.5l5.6-1.9zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z" />
                </svg>
                AI &amp; automatisering
              </span>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Laat AI het saaie werk doen, zodat u tijd overhoudt voor uw klanten
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                AI is geen toekomstmuziek meer. Ik toon u in gewone taal hoe u het vandaag al gebruikt,
                en zet automatisaties op die elke week uren besparen.
              </p>
              <ul className="mt-7 space-y-3">
                {aiResultaten.map((r) => (
                  <li key={r} className="flex items-center gap-3 text-white">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-500/30 text-brand-100" aria-hidden="true">
                      ✓
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-9 inline-flex items-center rounded-full bg-white px-7 py-3.5 font-medium text-ink transition-colors hover:bg-brand-50"
              >
                Ontdek wat AI voor u kan doen
              </a>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {aiVoorbeelden.map((v, i) => (
                <Reveal key={v.titel} delay={i * 0.06}>
                  <div className="h-full rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/10 backdrop-blur">
                    <p className="text-sm font-semibold text-warm">0{i + 1}</p>
                    <h3 className="mt-2 text-lg font-semibold text-white">{v.titel}</h3>
                    <p className="mt-2 leading-7 text-slate-300">{v.tekst}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AanHuis() {
  return (
    <section id="aan-huis" className="scroll-mt-20 bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              label="Hulp aan huis"
              titel="Ook bij u thuis help ik u graag verder"
              tekst="Nieuwe gsm, een printer die niet wil of een tv vol knoppen? Ik kom langs, installeer alles en leg rustig uit hoe het werkt. Zonder vakjargon en met alle geduld."
            />
            <Reveal className="-mt-4">
              <div className="rounded-2xl bg-cream p-5 ring-1 ring-sand">
                <p className="font-medium text-ink">Ideaal voor wie</p>
                <ul className="mt-3 space-y-2 text-[15px] text-slate-600">
                  <li>· net een nieuw toestel kocht</li>
                  <li>· vastloopt met een programma of app</li>
                  <li>· graag eens rustig uitleg krijgt, ook senioren</li>
                </ul>
              </div>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center rounded-full bg-brand-600 px-7 py-3.5 font-medium text-white transition-colors hover:bg-brand-700"
              >
                Vraag hulp aan huis
              </a>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {thuisHulp.map((t, i) => (
              <Reveal key={t.titel} delay={i * 0.04}>
                <div className="h-full rounded-2xl bg-cream p-6 ring-1 ring-sand">
                  <h3 className="font-semibold text-ink">{t.titel}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{t.tekst}</p>
                </div>
              </Reveal>
            ))}
          </div>
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
          label="Per sector"
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
          <a href="#ai" className="hover:text-brand-700">AI &amp; automatisering</a>
          <a href="#aan-huis" className="hover:text-brand-700">Hulp aan huis</a>
          <a href="#contact" className="hover:text-brand-700">Contact</a>
        </div>
      </div>
    </footer>
  );
}

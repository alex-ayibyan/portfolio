"use client";

import { useState } from "react";
import Reveal, { SectionLabel } from "./Reveal";

const veld =
  "w-full border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors duration-300 placeholder:text-slate-500 focus:border-accent disabled:opacity-50";
const label = "mb-2 block font-display text-[11px] uppercase tracking-[0.22em] text-slate-500";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [fout, setFout] = useState("");

  const wijzig = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const verstuur = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setFout("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setFout(data.error ?? "Er ging iets mis.");
      } else {
        setStatus("success");
        setForm({ name: "", company: "", email: "", message: "" });
      }
    } catch {
      setStatus("error");
      setFout("Er ging iets mis. Probeer het later opnieuw.");
    }
  };

  const bezig = status === "loading";

  return (
    <section id="contact" className="relative scroll-mt-24 border-t border-white/10 py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <Reveal>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
              Zin in een vrijblijvende kennismaking?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
              Vertel kort waarmee ik u kan helpen. Ik neem binnen één werkdag contact op en kom graag
              eens langs in uw zaak.
            </p>
            <div className="mt-8 space-y-4">
              <div className="border border-white/10 bg-[#1a1a1a]/80 p-5">
                <p className={label}>E-mail</p>
                <a
                  href="mailto:alex.ayibyan@gmail.com"
                  className="text-base text-white transition-colors duration-300 hover:text-accent"
                >
                  alex.ayibyan@gmail.com
                </a>
              </div>
              <div className="border border-white/10 bg-[#1a1a1a]/80 p-5">
                <p className={label}>Regio</p>
                <p className="text-base text-white">Westerlo, Tongerlo, Oevel, Heultje, Zoerle-Parwijs en omstreken</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={verstuur} className="border border-white/10 bg-[#1a1a1a]/80 p-7 sm:p-8">
              <div className="grid gap-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={label}>Naam</label>
                    <input id="name" type="text" required value={form.name} onChange={wijzig} disabled={bezig} className={veld} placeholder="Uw naam" />
                  </div>
                  <div>
                    <label htmlFor="company" className={label}>Zaak (optioneel)</label>
                    <input id="company" type="text" value={form.company} onChange={wijzig} disabled={bezig} className={veld} placeholder="Naam van uw zaak" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className={label}>E-mail</label>
                  <input id="email" type="email" required value={form.email} onChange={wijzig} disabled={bezig} className={veld} placeholder="u@uwzaak.be" />
                </div>
                <div>
                  <label htmlFor="message" className={label}>Waarmee kan ik helpen?</label>
                  <textarea id="message" required rows={6} value={form.message} onChange={wijzig} disabled={bezig} className={`${veld} resize-none`} placeholder="Bv. mijn website is verouderd, ik wil online afspraken, mijn wifi valt weg..." />
                </div>

                {status === "error" && <p className="text-sm text-accent" role="alert">{fout}</p>}
                {status === "success" && (
                  <p className="text-sm text-white" role="status">Bedankt! Ik neem zo snel mogelijk contact met u op.</p>
                )}

                <button
                  type="submit"
                  disabled={bezig || status === "success"}
                  className="inline-flex items-center justify-center border border-accent bg-accent px-6 py-4 font-display text-xs uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-accent/80 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {bezig ? "Versturen..." : status === "success" ? "Verstuurd" : "Verstuur bericht"}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

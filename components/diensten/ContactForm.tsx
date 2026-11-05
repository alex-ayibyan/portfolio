"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const veld =
  "w-full rounded-xl border border-sand bg-white px-4 py-3 text-ink outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100 placeholder:text-slate-400 disabled:opacity-50";
const label = "mb-1.5 block text-sm font-medium text-slate-700";

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
    <section id="contact" className="scroll-mt-20 bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-[2rem] bg-brand-700">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
            <Reveal>
              <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-brand-50">
                Contact
              </span>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Zin in een vrijblijvende kennismaking?
              </h2>
              <p className="mt-4 text-lg leading-8 text-brand-50">
                Vertel kort waarmee ik u kan helpen. Ik neem binnen één werkdag contact op en kom graag
                eens langs in uw zaak.
              </p>
              <dl className="mt-8 space-y-5">
                <div>
                  <dt className="text-sm text-brand-100">E-mail</dt>
                  <dd>
                    <a href="mailto:alex.ayibyan@gmail.com" className="text-lg font-medium text-white underline-offset-4 hover:underline">
                      alex.ayibyan@gmail.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-brand-100">Regio</dt>
                  <dd className="text-lg text-white">Westerlo, Tongerlo, Oevel, Heultje, Zoerle-Parwijs en omstreken</dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={0.1}>
              <form onSubmit={verstuur} className="rounded-3xl bg-white p-6 shadow-xl sm:p-8">
                <div className="grid gap-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={label}>Naam</label>
                      <input id="name" type="text" required value={form.name} onChange={wijzig} disabled={bezig} className={veld} placeholder="Uw naam" />
                    </div>
                    <div>
                      <label htmlFor="company" className={label}>Zaak <span className="font-normal text-slate-400">(optioneel)</span></label>
                      <input id="company" type="text" value={form.company} onChange={wijzig} disabled={bezig} className={veld} placeholder="Naam van uw zaak" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className={label}>E-mail</label>
                    <input id="email" type="email" required value={form.email} onChange={wijzig} disabled={bezig} className={veld} placeholder="u@uwzaak.be" />
                  </div>
                  <div>
                    <label htmlFor="message" className={label}>Waarmee kan ik helpen?</label>
                    <textarea id="message" required rows={5} value={form.message} onChange={wijzig} disabled={bezig} className={`${veld} resize-none`} placeholder="Bv. mijn website is verouderd, ik wil online afspraken, mijn wifi valt weg..." />
                  </div>

                  {status === "error" && <p className="text-sm text-red-600" role="alert">{fout}</p>}
                  {status === "success" && (
                    <p className="rounded-xl bg-brand-50 px-4 py-3 text-sm text-brand-700" role="status">
                      Bedankt! Ik neem zo snel mogelijk contact met u op.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={bezig || status === "success"}
                    className="inline-flex items-center justify-center rounded-full bg-brand-600 px-7 py-3.5 font-medium text-white transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {bezig ? "Versturen..." : status === "success" ? "Verstuurd" : "Verstuur bericht"}
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const troeven = ["Eén vast aanspreekpunt", "Vaste prijzen vooraf", "Ter plaatse of op afstand"];

const voorbeelden = [
  { titel: "Een website die werkt", tekst: "Snel, veilig en mooi op gsm" },
  { titel: "Actieve sociale media", tekst: "Regelmatig berichten en verhalen" },
  { titel: "E-facturatie in orde", tekst: "Klaar voor Peppol" },
];

function Vinkje() {
  return (
    <svg className="h-5 w-5 shrink-0 text-brand-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-brand-100/60 blur-3xl" aria-hidden="true" />
      <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-warm/15 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm text-slate-600 shadow-sm ring-1 ring-sand"
          >
            <span className="h-2 w-2 rounded-full bg-brand-500" aria-hidden="true" />
            Voor ondernemers in Westerlo en omgeving
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-4xl font-semibold leading-[1.15] text-ink sm:text-5xl lg:text-6xl"
          >
            Uw website, computers en sociale media{" "}
            <span className="text-brand-600">zorgeloos geregeld</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg leading-8 text-slate-600"
          >
            Ik ben Alex uit Westerlo. Ik help kleine zaken met hun website, IT en online
            zichtbaarheid, zodat u zich kan focussen op uw klanten. In gewone taal, met snelle hulp.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-600 px-7 py-3.5 font-medium text-white shadow-sm transition-colors hover:bg-brand-700"
            >
              Plan een gratis kennismaking
            </a>
            <a
              href="#diensten"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 font-medium text-ink shadow-sm ring-1 ring-sand transition-colors hover:ring-brand-500"
            >
              Bekijk de diensten
            </a>
          </motion.div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {troeven.map((t) => (
              <li key={t} className="flex items-center gap-2 text-[15px] text-slate-700">
                <Vinkje />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative hidden lg:block"
        >
          <div className="rounded-3xl bg-white p-7 shadow-xl shadow-brand-700/5 ring-1 ring-sand">
            <p className="text-sm font-medium text-slate-500">Waarmee ik u kan helpen</p>
            <ul className="mt-5 space-y-4">
              {voorbeelden.map((v) => (
                <li key={v.titel} className="flex items-center gap-4 rounded-2xl bg-cream p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50">
                    <Vinkje />
                  </span>
                  <div>
                    <p className="font-medium text-ink">{v.titel}</p>
                    <p className="text-sm text-slate-500">{v.tekst}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-3 border-t border-sand pt-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-warm/20 text-sm font-semibold text-ink">
                AA
              </span>
              <p className="text-sm text-slate-600">
                &ldquo;Ik kom graag eens langs om te kijken wat ik voor u kan doen.&rdquo;
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

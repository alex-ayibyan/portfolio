"use client";

import { motion } from "framer-motion";

const troeven = ["Eén vast aanspreekpunt", "Vaste prijzen vooraf", "Ter plaatse of op afstand"];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden border-b border-white/10 pt-28 pb-16">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
            backgroundSize: "72px 72px",
            opacity: 0.04,
          }}
        />
        <div className="absolute left-[10%] top-32 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 font-display text-xs uppercase tracking-[0.24em] text-accent"
          >
            IT-hulp voor ondernemers in Westerlo en omgeving
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display text-4xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl"
          >
            Uw website, computers en sociale media <span className="text-accent">zorgeloos geregeld</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
          >
            Ik ben Alex, IT&apos;er uit Westerlo. Ik help kleine zaken met hun website, IT en online
            zichtbaarheid, zodat u zich kan focussen op uw klanten. Geen vakjargon, wel snelle hulp.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 border border-accent bg-accent px-6 py-4 font-display text-xs uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-accent/80"
            >
              Vraag een gratis kennismaking
            </a>
            <a
              href="#diensten"
              className="inline-flex items-center justify-center gap-3 border border-white/15 px-6 py-4 font-display text-xs uppercase tracking-[0.2em] text-slate-200 transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              Bekijk de diensten
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3"
          >
            {troeven.map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm text-slate-400">
                <span className="h-1.5 w-1.5 bg-accent" aria-hidden="true" />
                {t}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  label,
  titel,
  tekst,
  center = false,
}: {
  label: string;
  titel: string;
  tekst?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700">
        {label}
      </span>
      <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl">{titel}</h2>
      {tekst && <p className="mt-4 text-lg leading-8 text-slate-600">{tekst}</p>}
    </Reveal>
  );
}

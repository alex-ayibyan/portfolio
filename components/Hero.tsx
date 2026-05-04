"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mouse, setMouse] = useState({ x: -9999, y: -9999 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => setMouse({ x: -9999, y: -9999 });

  const gridPattern =
    "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)";

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-screen items-center border-b border-white/10 pt-24 overflow-hidden"
    >
      <div className="absolute inset-0">
        {/* Static dim grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: gridPattern,
            backgroundSize: "72px 72px",
            opacity: 0.04,
          }}
        />

        {/* Bright grid revealed at mouse position */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: gridPattern,
            backgroundSize: "72px 72px",
            opacity: 0.55,
            WebkitMaskImage: `radial-gradient(circle 380px at ${mouse.x}px ${mouse.y}px, black 30%, transparent 100%)`,
            maskImage: `radial-gradient(circle 380px at ${mouse.x}px ${mouse.y}px, black 30%, transparent 100%)`,
          }}
        />

        {/* Accent glow at cursor */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle 320px at ${mouse.x}px ${mouse.y}px, rgba(255,77,90,0.10), transparent 100%)`,
          }}
        />

        {/* Static ambient blob */}
        <div className="absolute left-[12%] top-24 h-64 w-64 rounded-full bg-accent/8 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-display font-bold leading-tight text-white sm:whitespace-nowrap sm:text-6xl lg:text-8xl"
          >
            Hello, I&apos;m <span className="text-accent">Alex Ayibyan</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.75 }}
            className="mt-6 text-lg text-slate-300 sm:text-2xl lg:text-4xl"
          >
            I&apos;m a full stack developer.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.75 }}
            href="#projects"
            className="mt-10 inline-flex items-center gap-3 font-display text-sm uppercase tracking-[0.22em] text-accent transition-colors duration-300 hover:text-highlight"
          >
            View my work
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skillGroups } from "@/data/skills";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="min-h-screen py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-4">
            Over <span className="text-gradient">Mij</span>
          </h2>
          <div className="w-24 h-1 bg-accent"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6 text-lg text-muted leading-relaxed">
              <p>
                Hallo! Ik ben een gedreven IT-professional met een passie voor het creëren van slimme, efficiënte en toekomstgerichte digitale oplossingen.
              </p>
              <p>
                Met ruime ervaring in webontwikkeling, backend-systemen en cloud-infrastructuur heb ik diverse projecten succesvol gerealiseerd die niet alleen technisch sterk zijn, maar ook concrete meerwaarde bieden voor gebruikers en organisaties.
              </p>
              <p>
                Ik combineer technische expertise met een oplossingsgerichte mindset en streef altijd naar kwaliteit, schaalbaarheid en gebruiksvriendelijkheid. Daarnaast blijf ik mezelf voortdurend ontwikkelen door nieuwe technologieën en innovaties actief te verkennen.
              </p>
              <p>
                Mijn doel is om systemen te bouwen die betrouwbaar presteren, processen verbeteren en een blijvende impact maken.
              </p>
              <div className="pt-4">
                <a
                  href="mailto:alex.ayibyan@gmail.com"
                  className="inline-flex items-center gap-2 text-accent hover:text-highlight transition-colors duration-300 font-display"
                >
                  <span>Neem contact op</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-display font-bold mb-6">
              Vaardigheden
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {skillGroups.map((group, groupIndex) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.55 + groupIndex * 0.1 }}
                  className="border border-accent border-opacity-20 bg-secondary p-5"
                >
                  <h4 className="mb-4 text-sm font-display uppercase tracking-[0.2em] text-accent">
                    {group.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={
                          isInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.92 }
                        }
                        transition={{
                          duration: 0.35,
                          delay: 0.7 + groupIndex * 0.1 + skillIndex * 0.04,
                        }}
                        className="px-3 py-2 bg-primary border border-accent border-opacity-25 text-accent text-xs font-display tracking-wider transition-colors duration-300 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

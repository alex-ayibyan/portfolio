"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillGroups } from "@/data/skills";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const flatSkills = skillGroups.flatMap((g) => g.skills).slice(0, 12);

  const col0 = flatSkills.filter((_, i) => i % 3 === 0);
  const col1 = flatSkills.filter((_, i) => i % 3 === 1);
  const col2 = flatSkills.filter((_, i) => i % 3 === 2);

  const SkillCard = ({ skill, index }: { skill: (typeof flatSkills)[0]; index: number }) => (
    <motion.div
      key={skill.name}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.45, delay: 0.2 + index * 0.05 }}
      className="rounded-xl p-[2px]"
      style={{ background: "linear-gradient(135deg, #6B4EFF, #FF4D5A)" }}
    >
      <div className="rounded-[10px] bg-[#1a1a1a] flex flex-col items-center justify-center gap-2 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 px-2 py-3">
        {skill.logo ? (
          <img
            src={skill.logo}
            alt={skill.name}
            className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 object-contain"
          />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded bg-accent/10 font-display text-xs text-accent">
            {skill.name.slice(0, 2).toUpperCase()}
          </div>
        )}
        <span className="font-display text-[10px] uppercase tracking-[0.16em] text-white/90 text-center leading-tight">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );

  return (
    <section id="about" className="relative py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-display font-bold text-white sm:text-5xl">
              About
            </h2>

            <div className="mt-8 space-y-6 text-base leading-8 text-slate-300">
              <p>
                I&apos;m a Bachelor IT student with a strong interest in full
                stack development, backend systems, and data-driven
                applications. I enjoy building software that is both technically
                solid and genuinely useful for the people who use it.
              </p>
              <p>
                Through projects like FindMySpot and GoSmartLib, I&apos;ve worked
                on web applications with clear interfaces, structured backend
                logic, API integrations, and practical problem-solving. I&apos;m
                especially interested in the mix of creativity, logic, and
                continuous learning that comes with software development.
              </p>
              <p>
                My stack includes React, Next.js, Node.js, .NET, Spring Boot,
                SQL and data tools like Power BI, Streamlit and Jupyter. I like learning fast, working with purpose, and
                improving every project I touch.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex justify-center gap-2 sm:gap-4"
          >
            {/* Left column — offset down */}
            <div className="flex flex-col gap-2 sm:gap-4 mt-0 sm:mt-12">
              {col0.map((skill, i) => <SkillCard key={skill.name} skill={skill} index={i * 3} />)}
            </div>

            {/* Center column — no offset */}
            <div className="flex flex-col gap-2 sm:gap-4">
              {col1.map((skill, i) => <SkillCard key={skill.name} skill={skill} index={i * 3 + 1} />)}
            </div>

            {/* Right column — offset down */}
            <div className="flex flex-col gap-2 sm:gap-4 mt-0 sm:mt-12">
              {col2.map((skill, i) => <SkillCard key={skill.name} skill={skill} index={i * 3 + 2} />)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

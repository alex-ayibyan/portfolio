"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { skillGroups, type Skill } from "@/data/skills";

const PROXIMITY_RADIUS = 200;

const FEATURED = [
  "React", "Next.js", "JavaScript",
  "TypeScript", "Python", "Node.js",
  "SQL", "MongoDB", "Spring Boot",
  "Git", "Docker", "C#",
];

type SkillCardProps = {
  skill: Skill;
  index: number;
  isInView: boolean;
  mouse: { x: number; y: number };
  gridRef: React.RefObject<HTMLDivElement | null>;
};

function SkillCard({ skill, index, isInView, mouse, gridRef }: SkillCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isNear, setIsNear] = useState(false);

  useEffect(() => {
    if (!cardRef.current || !gridRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const gridRect = gridRef.current.getBoundingClientRect();
    const cx = rect.left - gridRect.left + rect.width / 2;
    const cy = rect.top - gridRect.top + rect.height / 2;
    const dist = Math.sqrt((mouse.x - cx) ** 2 + (mouse.y - cy) ** 2);
    setIsNear(dist < PROXIMITY_RADIUS);
  }, [mouse, gridRef]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.45, delay: 0.2 + index * 0.05 }}
    >
      <motion.div
        ref={cardRef}
        animate={{ y: isNear ? -6 : 0, scale: isNear ? 1.08 : 1 }}
        transition={{ duration: isNear ? 0.15 : 0.12, ease: "easeOut" }}
        className="rounded-xl p-[2px] cursor-default"
        style={{ background: "linear-gradient(135deg, #6B4EFF, #FF4D5A)" }}
      >
        <div className="rounded-[10px] bg-[#1a1a1a] flex flex-col items-center justify-center gap-2 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 px-2 py-3">
          {skill.logo ? (
            <img src={skill.logo} alt={skill.name} className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 object-contain" />
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded bg-accent/10 text-xs text-accent">
              {skill.name.slice(0, 2).toUpperCase()}
            </div>
          )}
          <span className="text-[10px] uppercase tracking-[0.16em] text-white/90 text-center leading-tight">
            {skill.name}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [mouse, setMouse] = useState({ x: -9999, y: -9999 });

  const allSkills = skillGroups.flatMap((g) => g.skills);
  const featuredSkills = FEATURED.map(
    (name) => allSkills.find((s) => s.name === name)!
  ).filter(Boolean);

  const col0 = featuredSkills.filter((_, i) => i % 3 === 0);
  const col1 = featuredSkills.filter((_, i) => i % 3 === 1);
  const col2 = featuredSkills.filter((_, i) => i % 3 === 2);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = gridRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section id="about" className="relative py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold text-white sm:text-5xl">About</h2>
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
                logic, API integrations, and practical problem-solving.
              </p>
              <p>
                My stack includes React, Next.js, Node.js, .NET, Spring Boot,
                SQL and data tools like Power BI, Streamlit and Jupyter. I like
                learning fast, working with purpose, and improving every project
                I touch.
              </p>
            </div>
          </motion.div>

          <motion.div
            ref={gridRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMouse({ x: -9999, y: -9999 })}
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex justify-center gap-2 sm:gap-4"
          >
            <div className="flex flex-col gap-2 sm:gap-4 mt-0 sm:mt-12">
              {col0.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i * 3} isInView={isInView} mouse={mouse} gridRef={gridRef} />
              ))}
            </div>
            <div className="flex flex-col gap-2 sm:gap-4">
              {col1.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i * 3 + 1} isInView={isInView} mouse={mouse} gridRef={gridRef} />
              ))}
            </div>
            <div className="flex flex-col gap-2 sm:gap-4 mt-0 sm:mt-12">
              {col2.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i * 3 + 2} isInView={isInView} mouse={mouse} gridRef={gridRef} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

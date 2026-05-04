"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/lib/github";

type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  useEffect(() => {
    if (selectedProject) {
      triggerRef.current = document.activeElement as HTMLElement;
      requestAnimationFrame(() => {
        modalRef.current?.focus();
      });
    } else {
      triggerRef.current?.focus();
      triggerRef.current = null;
    }
  }, [selectedProject]);

  const handleModalKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      setSelectedProject(null);
      return;
    }

    if (e.key !== "Tab") return;

    const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable?.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else if (document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <section id="projects" className="relative py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-14 flex flex-col gap-8 border border-white/10 bg-white/[0.03] p-8 backdrop-blur sm:p-10 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <p className="mb-4 font-display text-xs uppercase tracking-[0.24em] text-accent">
              Selected work
            </p>
            <h2 className="text-4xl font-display font-bold leading-tight sm:text-5xl lg:text-6xl">
              Projects that show how I think, build, and ship.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-300">
            A mix of personal work and team-based builds where product thinking,
            implementation quality, and clarity of execution matter just as much
            as the tech stack.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
              aria-label={`Open project details for ${project.title}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              className="group grid cursor-pointer overflow-hidden border border-white/10 bg-[#1a1a1a]/80 transition-transform duration-300 hover:-translate-y-1 hover:border-accent/50 lg:grid-cols-[minmax(300px,0.95fr)_minmax(0,1.05fr)]"
            >
              <div className="relative min-h-[260px] border-b border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent lg:min-h-[360px] lg:border-b-0 lg:border-r">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`Preview of ${project.title}`}
                    fill
                    className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm uppercase tracking-[0.2em] text-slate-500">
                    No preview
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/88 via-[#1a1a1a]/20 to-transparent" />
                <div className="absolute bottom-5 left-5 flex items-center gap-3">
                  <span className="border border-accent/40 bg-[#1a1a1a]/70 px-3 py-1 font-display text-[10px] uppercase tracking-[0.22em] text-accent backdrop-blur">
                    Case study
                  </span>
                  <span className="font-display text-[10px] uppercase tracking-[0.22em] text-slate-300">
                    0{index + 1}
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-between p-7 sm:p-8 lg:p-10">
                <div>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.tags.slice(0, 5).map((tag) => (
                      <span
                        key={tag}
                        className="border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="max-w-2xl text-3xl font-display font-bold leading-tight text-white transition-colors duration-300 group-hover:text-accent sm:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-6">
                  <div className="flex flex-wrap gap-5">
                    {project.link !== project.github && (
                      <a
                        href={project.link}
                        onClick={(e) => e.stopPropagation()}
                        className="font-display text-xs uppercase tracking-[0.2em] text-accent transition-colors duration-300 hover:text-highlight"
                      >
                        Live demo
                      </a>
                    )}
                    <a
                      href={project.github}
                      onClick={(e) => e.stopPropagation()}
                      className="font-display text-xs uppercase tracking-[0.2em] text-slate-300 transition-colors duration-300 hover:text-white"
                    >
                      Source
                    </a>
                  </div>

                  <div className="inline-flex items-center gap-3 font-display text-xs uppercase tracking-[0.2em] text-slate-500 transition-colors duration-300 group-hover:text-accent">
                    Open project
                    <span className="text-base">+</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a1a1a]/85 p-4 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
              aria-hidden="true"
            >
              <motion.div
                ref={modalRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                tabIndex={-1}
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ type: "spring", damping: 26, stiffness: 280 }}
                onClick={(e) => e.stopPropagation()}
                onKeyDown={handleModalKeyDown}
                className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto border border-white/12 bg-[#1a1a1a] outline-none"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details"
                  className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center border border-white/10 bg-[#1a1a1a]/85 text-slate-300 transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(300px,0.95fr)]">
                  <div className="relative min-h-[280px] border-b border-white/10 lg:min-h-full lg:border-b-0 lg:border-r">
                    {selectedProject.image ? (
                      <Image
                        src={selectedProject.image}
                        alt={`Screenshot of ${selectedProject.title}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 55vw"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm uppercase tracking-[0.2em] text-slate-500">
                        Project image
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
                  </div>

                  <div className="p-7 sm:p-10">
                    <p className="font-display text-xs uppercase tracking-[0.24em] text-accent">
                      Project overview
                    </p>
                    <h3
                      id="modal-title"
                      className="mt-4 text-3xl font-display font-bold leading-tight text-white sm:text-4xl"
                    >
                      {selectedProject.title}
                    </h3>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 space-y-7">
                      <div>
                        <h4 className="font-display text-sm uppercase tracking-[0.2em] text-slate-500">
                          Context
                        </h4>
                        <p className="mt-3 leading-7 text-slate-300">
                          {selectedProject.fullDescription ??
                            selectedProject.description}
                        </p>
                      </div>

                      {!!selectedProject.features?.length && (
                        <div>
                          <h4 className="font-display text-sm uppercase tracking-[0.2em] text-slate-500">
                            Highlights
                          </h4>
                          <div className="mt-4 grid gap-3">
                            {selectedProject.features.map((feature) => (
                              <div
                                key={feature}
                                className="border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300"
                              >
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedProject.challenges && (
                        <div>
                          <h4 className="font-display text-sm uppercase tracking-[0.2em] text-slate-500">
                            Challenge
                          </h4>
                          <p className="mt-3 leading-7 text-slate-300">
                            {selectedProject.challenges}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="mt-10 flex flex-wrap gap-4 border-t border-white/10 pt-6">
                      {selectedProject.link !== selectedProject.github && (
                        <a
                          href={selectedProject.link}
                          className="inline-flex items-center gap-3 border border-accent bg-accent px-5 py-3 font-display text-xs uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-accent/80"
                        >
                          Live demo
                        </a>
                      )}
                      <a
                        href={selectedProject.github}
                        className="inline-flex items-center gap-3 border border-white/12 bg-white/[0.04] px-5 py-3 font-display text-xs uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:border-accent hover:text-accent"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>

                {!!selectedProject.gallery?.length && (
                  <div className="border-t border-white/10 px-7 py-7 sm:px-10 sm:py-8">
                    <h4 className="font-display text-sm uppercase tracking-[0.2em] text-slate-500">
                      Gallery
                    </h4>
                    <div className="mt-5 grid gap-4 md:grid-cols-3">
                      {selectedProject.gallery.map((img, idx) => (
                        <div
                          key={idx}
                          className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-[#1a1a1a]"
                        >
                          <Image
                            src={img}
                            alt={`${selectedProject.title} gallery image ${idx + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 30vw"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

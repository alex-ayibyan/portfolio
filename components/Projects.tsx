"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
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

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  // Focus management: move focus into modal on open, restore on close
  useEffect(() => {
    if (selectedProject) {
      triggerRef.current = document.activeElement as HTMLElement;
      // Wait for animation frame so modal is rendered
      requestAnimationFrame(() => {
        modalRef.current?.focus();
      });
    } else {
      triggerRef.current?.focus();
      triggerRef.current = null;
    }
  }, [selectedProject]);

  // Close on Escape + focus trap
  const handleModalKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
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
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }, []);

  return (
    <section id="projects" className="min-h-screen py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-4">
            Recente <span className="text-gradient">Projecten</span>
          </h2>
          <div className="w-24 h-1 bg-accent"></div>
          <p className="text-muted mt-6 max-w-2xl">
            Een selectie van projecten waar ik trots op ben. Elk project
            vertegenwoordigt een unieke uitdaging en oplossing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
              aria-label={`Bekijk details van ${project.title}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              className="group relative bg-secondary p-8 hover:bg-opacity-80 transition-all duration-300 border border-transparent hover:border-accent cursor-pointer"
            >
              {/* Accent corner */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-accent border-l-[40px] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary text-accent text-xs font-display tracking-wider uppercase border border-accent border-opacity-30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.link !== project.github && (
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-sm font-display text-accent hover:text-highlight transition-colors duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Live Demo</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 text-sm font-display text-muted hover:text-white transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                </div>

                {/* Click indicator */}
                <div className="mt-6 pt-6 border-t border-accent border-opacity-20">
                  <span className="text-xs font-display text-muted flex items-center gap-2 group-hover:text-accent transition-colors duration-300">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    Klik voor meer details
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
              onClick={() => setSelectedProject(null)}
              aria-hidden="true"
            >
              <motion.div
                ref={modalRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                tabIndex={-1}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                onKeyDown={handleModalKeyDown}
                className="bg-secondary border border-accent max-w-4xl w-full max-h-[90vh] overflow-y-auto relative outline-none"
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  aria-label="Sluit projectdetails"
                  className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-primary hover:bg-accent transition-colors duration-300 group"
                >
                  <svg
                    className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300"
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

                {/* Modal Content */}
                <div className="p-8 md:p-12">
                  {/* Project Image */}
                  <div className="relative w-full h-64 md:h-96 bg-primary mb-8 overflow-hidden border border-accent border-opacity-20">
                    {selectedProject.image && !selectedProject.image.includes("placeholder") ? (
                      <Image
                        src={selectedProject.image}
                        alt={`Screenshot van ${selectedProject.title}`}
                        className="w-full h-full object-contain"
                        fill
                        sizes="(max-width: 768px) 100vw, 80vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-muted font-display text-sm">
                          Project Afbeelding
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    id="modal-title"
                    className="text-4xl md:text-5xl font-display font-bold mb-4 text-gradient"
                  >
                    {selectedProject.title}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary text-accent text-xs font-display tracking-wider uppercase border border-accent border-opacity-30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Full Description */}
                  <div className="mb-8">
                    <h4 className="text-xl font-display font-bold mb-3 text-white">
                      Over het Project
                    </h4>
                    <p className="text-muted leading-relaxed">
                      {selectedProject.fullDescription ?? selectedProject.description}
                    </p>
                  </div>

                  {/* Features */}
                  {!!selectedProject.features?.length && (
                    <div className="mb-8">
                      <h4 className="text-xl font-display font-bold mb-4 text-white">
                        Key Features
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {selectedProject.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <svg
                              className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-muted text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Challenges */}
                  {selectedProject.challenges && (
                    <div className="mb-8">
                      <h4 className="text-xl font-display font-bold mb-3 text-white">
                        Uitdagingen & Oplossingen
                      </h4>
                      <p className="text-muted leading-relaxed">
                        {selectedProject.challenges}
                      </p>
                    </div>
                  )}

                  {/* Gallery */}
                  {!!selectedProject.gallery?.length && (
                    <div className="mb-8">
                      <h4 className="text-xl font-display font-bold mb-4 text-white">
                        Screenshots
                      </h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        {selectedProject.gallery.map((img, idx) => (
                          <div
                            key={idx}
                            className="relative w-full h-48 bg-primary overflow-hidden border border-accent border-opacity-20 hover:border-opacity-50 transition-all duration-300"
                          >
                            {img && !img.includes("placeholder") ? (
                              <Image
                                src={img}
                                alt={`Screenshot ${idx + 1} van ${selectedProject.title}`}
                                className="w-full h-full object-contain"
                                fill
                                sizes="(max-width: 768px) 50vw, 25vw"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <span className="text-muted font-display text-xs">
                                  Screenshot {idx + 1}
                                </span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex flex-wrap gap-4 pt-6 border-t border-accent border-opacity-20">
                    {selectedProject.link !== selectedProject.github && (
                      <a
                        href={selectedProject.link}
                        className="px-8 py-3 bg-accent hover:bg-highlight transition-colors duration-300 font-display text-sm tracking-wider uppercase inline-flex items-center gap-2"
                      >
                        <span>Live Demo</span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                    <a
                      href={selectedProject.github}
                      className="px-8 py-3 border-2 border-accent hover:bg-accent hover:bg-opacity-10 transition-all duration-300 font-display text-sm tracking-wider uppercase inline-flex items-center gap-2"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

<<<<<<< HEAD
import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section
      id="work"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[15vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-[0_0_20px_rgba(130,69,236,0.3)] overflow-hidden cursor-pointer
                       hover:shadow-[0_0_30px_rgba(130,69,236,0.6)] hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-56 lg:h-60 object-cover rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
=======
import React, { useState, useEffect, useRef } from "react";
import { projects } from "../../constants";
import BlurBlob from "../../BlurBlob";

/* ─── tiny hook: fires once when el enters viewport ─── */
const useInView = (options = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12, ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, inView];
};

/* ─── individual card ─── */
const ProjectCard = ({ project, index, onClick, prefersReducedMotion }) => {
  const [ref, inView] = useInView();
  const delay = `${index * 80}ms`;

  return (
    <article
      ref={ref}
      onClick={() => onClick(project)}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick(project)}
      style={
        prefersReducedMotion
          ? {}
          : {
              transitionDelay: inView ? delay : "0ms",
            }
      }
      className={[
        "group relative flex flex-col overflow-hidden rounded-2xl",
        "border border-gold/20 bg-surface",
        "cursor-pointer outline-none",
        "focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-void",
        "hover:border-gold/50 hover:-translate-y-1",
        "transition-all duration-300 ease-out",
        prefersReducedMotion
          ? "opacity-100"
          : `duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`,
      ]
        .join(" ")
        .trim()}
    >
      {/* subtle gold top-edge glow on hover */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gold-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* thumbnail */}
      <div className="relative overflow-hidden bg-void/60">
        <img
          src={project.image}
          alt={project.title}
          width="600"
          height="340"
          loading="lazy"
          decoding="async"
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-52 lg:h-56"
        />
        {/* dim overlay */}
        <div className="absolute inset-0 bg-void/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-xl font-semibold text-ink group-hover:text-gold-gradient transition-colors duration-200">
          {project.title}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-ink-muted line-clamp-3">
          {project.description}
        </p>

        {/* tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="rounded-full border border-gold/30 bg-gold/5 px-3 py-0.5 font-mono text-[10px] uppercase tracking-widest text-gold-bronze"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* cta hint */}
        <p className="mt-2 flex items-center gap-1.5 text-xs font-medium tracking-wide text-gold/50 transition-colors duration-200 group-hover:text-gold">
          <span>View Project</span>
          <svg
            aria-hidden="true"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          >
            <path
              d="M2 6h8M7 3l3 3-3 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </p>
      </div>
    </article>
  );
};

/* ─── modal ─── */
const Modal = ({ project, onClose }) => {
  /* trap focus & close on Esc */
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Project details: ${project.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-void/90 p-4 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* panel */}
      <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-gold/25 bg-surface shadow-gold-lg">
        {/* gold rule at top */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gold-gradient"
        />

        {/* close */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-gold/20 text-ink-muted transition-colors hover:border-gold/50 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4L4 12M4 4l8 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row">
          {/* image */}
          <div className="flex items-center justify-center bg-void/60 p-6 lg:w-1/2">
            <img
              src={project.image}
              alt={project.title}
              className="max-h-72 w-full rounded-xl object-contain lg:max-h-80"
            />
          </div>

          {/* content */}
          <div className="flex flex-col justify-between gap-6 p-6 lg:w-1/2 lg:p-10">
            <div className="flex flex-col gap-4">
              {/* eyebrow */}
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-bronze">
                Project
              </p>
              <h2 className="font-display text-2xl font-semibold leading-tight text-ink lg:text-3xl">
                {project.title}
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted lg:text-base">
                {project.description}
              </p>
              {/* tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-gold/30 bg-gold/5 px-3 py-0.5 font-mono text-[10px] uppercase tracking-widest text-gold-bronze"
>>>>>>> 120b535 (re design portfolio)
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
<<<<<<< HEAD
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-[0_0_30px_rgba(130,69,236,0.5)] lg:w-full w-[90%] max-w-4xl overflow-hidden relative">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 flex justify-center px-4 lg:px-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto lg:h-[350px] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="lg:w-1/2 lg:p-8 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-400 mb-6 lg:text-base text-sm">
                    {selectedProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 lg:px-6 lg:py-2 px-2 py-1 bg-gray-800 hover:bg-purple-800 text-gray-400 rounded-xl text-sm lg:text-lg font-semibold text-center transition-colors"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 lg:px-6 lg:py-2 px-2 py-1 bg-purple-600 hover:bg-purple-800 text-white rounded-xl text-sm lg:text-lg font-semibold text-center transition-colors"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
=======

            {/* actions */}
            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-gold/40 px-6 py-2.5 text-sm font-semibold text-gold transition-all duration-200 hover:bg-gold/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                <svg
                  aria-hidden="true"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.1.83-.26.83-.57v-2.24c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .31.21.69.82.57A12 12 0 0 0 12 .3z" />
                </svg>
                Source Code
              </a>
              <a
                href={project.webapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gold-gradient px-6 py-2.5 text-sm font-bold text-void shadow-gold transition-all duration-200 hover:shadow-gold-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                <svg
                  aria-hidden="true"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── section ─── */
const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [headerRef, headerInView] = useInView();

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => setPrefersReducedMotion(mq.matches);
    setPrefersReducedMotion(mq.matches);
    mq.addEventListener ? mq.addEventListener("change", handler) : mq.addListener(handler);
    return () =>
      mq.removeEventListener
        ? mq.removeEventListener("change", handler)
        : mq.removeListener(handler);
  }, []);

  return (
    <section
      id="work"
      aria-label="Projects"
      className="relative scroll-mt-24 overflow-hidden bg-void px-6 pb-24 pt-24 font-sans lg:px-24"
    >
      {/* ambient backdrop — mirrors About's radial wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_40%_at_50%_0%,rgba(212,175,55,0.06),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"
      >
        <BlurBlob
          position={{ top: "5%", left: "80%" }}
          size={{ width: "20rem", height: "20rem" }}
        />
        <BlurBlob
          position={{ top: "70%", left: "5%" }}
          size={{ width: "24rem", height: "24rem" }}
        />
      </div>

      {/* ── section header ── */}
      <header
        ref={headerRef}
        className={[
          "mx-auto mb-16 max-w-6xl text-center",
          prefersReducedMotion
            ? "opacity-100"
            : `transition-all duration-700 ${
                headerInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`,
        ].join(" ")}
      >
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-gold-bronze">
          Selected Work
        </p>
        <h2 className="font-display text-5xl font-semibold text-ink lg:text-6xl">
          My <span className="text-gold-gradient">Projects</span>
        </h2>
        {/* gold divider */}
        <div
          aria-hidden="true"
          className="mx-auto mt-5 h-px w-24 bg-gold-gradient opacity-60"
        />
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-muted">
          A curated showcase of interfaces and tools I have shipped — each one
          built for real users, with a focus on performance and detail.
        </p>
      </header>

      {/* ── grid ── */}
      <div className="mx-auto grid max-w-6xl gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onClick={setSelectedProject}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </div>

      {/* ── modal ── */}
      {selectedProject && (
        <Modal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
>>>>>>> 120b535 (re design portfolio)
      )}
    </section>
  );
};

<<<<<<< HEAD
export default Work;
=======
export default Work;
>>>>>>> 120b535 (re design portfolio)

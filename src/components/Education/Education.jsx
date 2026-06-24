
import React, { useState, useEffect, useRef } from "react";
import { education } from "../../constants";
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

/* ─── individual timeline entry ─── */
const EducationEntry = ({ edu, index, prefersReducedMotion }) => {
  const [ref, inView] = useInView();
  const isLeft = index % 2 === 0;
  const delay = `${index * 100}ms`;

  return (
    <div
      ref={ref}
      className="relative flex items-start"
      style={prefersReducedMotion ? {} : { transitionDelay: inView ? delay : "0ms" }}
    >
      {/* Card — left side */}
      {isLeft && (
        <article
          className={[
            "group relative w-[calc(50%-44px)] mr-auto",
            "rounded-2xl border border-gold/20 bg-surface p-7",
            "transition-all duration-300 ease-out",
            "hover:border-gold/50 hover:-translate-y-1",
            prefersReducedMotion
              ? "opacity-100"
              : `duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`,
          ].join(" ")}
        >
          {/* gold top-edge glow on hover */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-gold-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-t-2xl"
          />
          {/* connector pip */}
          <div
            aria-hidden="true"
            className="absolute -right-2 top-7 h-3 w-3 rotate-45 border-t border-r border-gold/20 bg-surface"
          />
          <EntryContent edu={edu} />
        </article>
      )}

      {/* Centre node */}
      <div className="absolute left-1/2 top-4 z-10 flex h-[52px] w-[52px] -translate-x-1/2 items-center justify-center overflow-hidden rounded-full border border-gold/35 bg-surface shadow-gold">
        {edu.img ? (
          <img
            src={edu.img}
            alt={edu.school}
            className="h-full w-full rounded-full object-cover"
          />
        ) : (
          <span className="font-display text-base font-semibold text-gold">
            {edu.school?.[0] ?? "·"}
          </span>
        )}
      </div>

      {/* Card — right side */}
      {!isLeft && (
        <article
          className={[
            "group relative ml-auto w-[calc(50%-44px)]",
            "rounded-2xl border border-gold/20 bg-surface p-7",
            "transition-all duration-300 ease-out",
            "hover:border-gold/50 hover:-translate-y-1",
            prefersReducedMotion
              ? "opacity-100"
              : `duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`,
          ].join(" ")}
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-gold-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-t-2xl"
          />
          <div
            aria-hidden="true"
            className="absolute -left-2 top-7 h-3 w-3 rotate-45 border-b border-l border-gold/20 bg-surface"
          />
          <EntryContent edu={edu} />
        </article>
      )}
    </div>
  );
};

/* ─── card body (shared) ─── */
const EntryContent = ({ edu }) => (
  <div className="flex flex-col gap-3">
    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold-bronze">
      {edu.date}
    </p>
    <h3 className="font-display text-xl font-semibold leading-snug text-ink">
      {edu.degree}
    </h3>
    <p className="text-sm text-ink-muted">{edu.school}</p>
    <p className="text-sm leading-relaxed text-ink-faint">{edu.desc}</p>
    {edu.grade && (
      <div className="flex flex-wrap gap-2 pt-1">
        <span className="rounded-full border border-gold/30 bg-gold/5 px-3 py-0.5 font-mono text-[10px] uppercase tracking-widest text-gold-bronze">
          {edu.grade}
        </span>
      </div>
    )}
  </div>
);

/* ─── section ─── */
const Education = () => {
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
      id="education"
      aria-label="Education"
      className="relative scroll-mt-24 overflow-hidden bg-void px-6 pb-24 pt-24 font-sans lg:px-24"
    >
      {/* ambient backdrop */}
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
          Academic Background
        </p>
        <h2 className="font-display text-5xl font-semibold text-ink lg:text-6xl">
          My <span className="text-gold-gradient">Education</span>
        </h2>
        <div
          aria-hidden="true"
          className="mx-auto mt-5 h-px w-24 bg-gold-gradient opacity-60"
        />
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-muted">
          A journey of learning and development — the academic foundations
          behind everything I build.
        </p>
      </header>

      {/* ── timeline ── */}
      <div className="relative mx-auto max-w-5xl">
        {/* vertical rule */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-[linear-gradient(to_bottom,transparent,rgba(212,175,55,0.25)_10%,rgba(212,175,55,0.25)_90%,transparent)] sm:block"
        />

        <div className="flex flex-col gap-16 sm:gap-20">
          {education.map((edu, index) => (
            <EducationEntry
              key={edu.id}
              edu={edu}
              index={index}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;


import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
const handleScroll = (sectionId) => {
const section = document.getElementById(sectionId);

if (section) {
  section.scrollIntoView({
    behavior: "smooth",
  });
}

};

return ( <footer className="relative overflow-hidden bg-void px-[8vw] py-16 text-white"> <div className="mx-auto max-w-6xl text-center">

    {/* Name */}
    <h2 className="font-display text-4xl font-semibold text-ink sm:text-5xl lg:text-6xl">
      Rishabh <span className="text-gold-gradient">Kumar</span>
    </h2>

    {/* Tagline */}
    <p className="mx-auto mt-4 max-w-2xl text-sm text-ink-muted sm:text-base">
      Full Stack Developer focused on building modern, scalable,
      and user-friendly web applications using React, Next.js,
      Node.js, and MongoDB.
    </p>

    {/* Navigation */}
    <nav className="mt-8 flex flex-wrap justify-center gap-5">
      {[
        { name: "About", id: "about" },
        { name: "Skills", id: "skills" },
        { name: "Experience", id: "experience" },
        { name: "Projects", id: "work" },
        { name: "Education", id: "education" },
        { name: "Contact", id: "contact" },
      ].map((item) => (
        <button
          key={item.id}
          onClick={() => handleScroll(item.id)}
          className="text-sm text-ink-muted transition-colors hover:text-gold"
        >
          {item.name}
        </button>
      ))}
    </nav>

    {/* Social Links */}
    <div className="mt-8 flex justify-center gap-6">
      <a
        href="https://github.com/Rishabhkasyap"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-ink-muted transition-all duration-300 hover:scale-110 hover:text-gold"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/rishabh-kumar-851574221/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-ink-muted transition-all duration-300 hover:scale-110 hover:text-gold"
      >
        <FaLinkedin />
      </a>

      <a
        href="mailto:rishabh.kumar.dev06@gmail.com"
        className="text-2xl text-ink-muted transition-all duration-300 hover:scale-110 hover:text-gold"
      >
        <FaEnvelope />
      </a>
    </div>

    {/* Divider */}
    <div className="mx-auto mt-10 h-px w-full max-w-xl bg-gold/10" />

    {/* Copyright */}
    <p className="mt-6 text-sm text-ink-faint">
      © 2026 Rishabh Kumar • Built with React, Tailwind CSS & Node.js
    </p>
  </div>

  {/* Bottom Glow */}
  <div
    className="
      absolute
      inset-x-0
      bottom-0
      h-40
      bg-gradient-to-t
      from-gold/10
      via-gold/5
      to-transparent
      pointer-events-none
    "
  />
</footer>

);
};

export default Footer;

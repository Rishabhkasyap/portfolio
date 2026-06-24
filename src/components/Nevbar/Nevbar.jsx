<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Rishabh</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Kumar</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/Rishabhkasyap"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/rishabh-kumar-851574221/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div
          className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 
                  bg-[#050414]/70 backdrop-blur-md z-50 rounded-lg shadow-lg md:hidden"
        >
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/Rishabhkasyap"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/rishabh-kumar-851574221/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
=======
import React, { useState, useEffect, useRef, useCallback } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const MENU_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Projects" },
  { id: "education", label: "Education" },
];

const SOCIAL_LINKS = [
  {
    href: "https://github.com/Rishabhkasyap",
    label: "Visit GitHub profile",
    Icon: FaGithub,
  },
  {
    href: "https://www.linkedin.com/in/rishabh-kumar-851574221/",
    label: "Visit LinkedIn profile",
    Icon: FaLinkedin,
  },
];

/** Tracks which section is currently in view, using IntersectionObserver
 *  instead of relying on click state — so the nav stays accurate even
 *  when the user scrolls manually. */
function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}

const SocialIcons = ({ className = "", iconClassName = "" }) => (
  <>
    {SOCIAL_LINKS.map(({ href, label, Icon }) => (
      <a
        key={href}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`text-ink-muted transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-void rounded-sm ${className}`}
      >
        <Icon size={22} className={iconClassName} />
      </a>
    ))}
  </>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef(null);
  const drawerRef = useRef(null);

  const sectionIds = MENU_ITEMS.map((item) => item.id);
  const activeSection = useActiveSection(sectionIds);

  // Background only appears once the user has actually scrolled.
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the drawer automatically if the viewport grows past mobile.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll + close on Escape while the drawer is open.
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleMenuItemClick = useCallback((sectionId) => {
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 border-b ${isScrolled
        ? "bg-void/90 backdrop-blur-md border-gold/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
        : "bg-void/40 backdrop-blur-sm border-transparent"
        }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-2 py-3 sm:px-4 md:px-6 lg:px-8"
      >
        {/* Logo */}
        <a
          href="#top"
          className="rounded-sm font-display text-sm xs:text-base sm:text-xl md:text-2xl font-semibold tracking-wide text-ink whitespace-nowrap"        >
          <span className="text-gold">&lt;</span>
          Rishabh
          <span className="text-gold">/</span>
          <span className="hidden xs:inline">Kumar</span>
          <span className="text-gold">&gt;</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 md:flex">
          {MENU_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleMenuItemClick(item.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative py-1 text-sm font-medium tracking-wide text-ink-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-void rounded-sm after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-gold-gradient after:transition-transform after:duration-300 after:ease-out ${isActive
                    ? "text-gold after:scale-x-100"
                    : "hover:after:scale-x-100"
                    }`}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Social Icons (desktop) */}
        <div className="hidden items-center gap-5 md:flex">
          <SocialIcons />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="rounded-sm p-1 text-gold md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-void"
        >
          {isOpen ? (
            <FiX className="text-2xl sm:text-3xl" />
          ) : (
            <FiMenu className="text-2xl sm:text-3xl" />
          )}
        </button>
      </nav>

      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 -z-10 bg-black/60 transition-opacity duration-200 md:hidden ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
      />

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        ref={drawerRef}
        className={`absolute left-1/2 top-full w-[95%] max-w-sm -translate-x-1/2 rounded-xl border border-gold/20 bg-void/95 shadow-gold-lg backdrop-blur-md transition-all duration-200 md:hidden ${isOpen
          ? "translate-y-2 opacity-100"
          : "pointer-events-none -translate-y-2 opacity-0"
          }`}
      >
        <ul className="flex flex-col items-center gap-1 py-4">
          {MENU_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="w-full text-center">
                <button
                  type="button"
                  onClick={() => handleMenuItemClick(item.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`w-full px-4 py-2 text-xs sm:text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${isActive ? "text-gold" : "text-ink-muted hover:text-ink"
                    }`}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center justify-center gap-6 border-t border-gold/15 py-4">
          <SocialIcons iconClassName="text-xl sm:text-2xl" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
>>>>>>> 120b535 (re design portfolio)

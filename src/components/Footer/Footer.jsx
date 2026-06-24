import React from "react";
<<<<<<< HEAD
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Rishabh kumar</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/profile.php?id=100004177187099" },
            { icon: <FaTwitter />, link: "https://x.com/Rishabh55399177" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/rishabh-kumar-851574221/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/kashayap_rishabh/" },
            { icon: <FaGithub />, link: "https://github.com/Rishabhkasyap" },
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Rishabh kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
=======
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
>>>>>>> 120b535 (re design portfolio)
};

export default Footer;

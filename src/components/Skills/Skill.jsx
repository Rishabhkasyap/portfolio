// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
<<<<<<< HEAD
    className="py-24 px-[12vw] md:px-[7vw] lg:px-[15vw] font-sans bg-skills-gradient"
  >
    {/* Section Title */}
    <div className="text-center mb-14">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3"></div>
      <p className="text-gray-400 mt-4 text-lg font-medium max-w-2xl mx-auto">
=======
    className="py-24 px-[12vw] md:px-[7vw] lg:px-[15vw] font-sans bg-void"  >
    {/* Section Title */}
    <div className="text-center mb-14">
      <h2 className="text-3xl sm:text-4xl font-display font-semibold text-ink">SKILLS</h2>
      <div className="w-24 h-px bg-gold-gradient mx-auto mt-4"></div>
      <p className="text-ink-muted mt-4 text-lg font-medium max-w-2xl mx-auto">
>>>>>>> 120b535 (re design portfolio)
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
      {SkillsInfo.map((category) => (
        <Tilt
          key={category.title}
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          perspective={1000}
          scale={1.03}
          transitionSpeed={800}
          gyroscope={true}
        >
          <div
<<<<<<< HEAD
            className="bg-gray-900 backdrop-blur-md px-8 py-8 rounded-2xl 
            border border-white/10 shadow-[0_0_20px_rgba(130,69,236,0.3)] 
            hover:shadow-[0_0_30px_rgba(130,69,236,0.5)] transition duration-300"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-200 mb-6 text-center">
=======
            className="bg-surface backdrop-blur-md px-8 py-8 rounded-2xl 
            border border-gold/20 shadow-gold 
            hover:border-gold/40 hover:shadow-gold-lg transition duration-300"
          >
            <h3 className="text-2xl sm:text-3xl font-display font-semibold text-ink mb-6 text-center">
>>>>>>> 120b535 (re design portfolio)
              {category.title}
            </h3>

            {/* Skill Items */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
<<<<<<< HEAD
                  className="flex items-center justify-center space-x-2 border border-gray-700 rounded-xl 
                  py-2 px-3 sm:py-3 sm:px-3 bg-gray-800/40 hover:bg-gray-800/70 transition duration-300"
=======
                  className="flex items-center justify-center space-x-2 border border-gold-bronze/30 rounded-xl 
                  py-2 px-3 sm:py-3 sm:px-3 bg-surface2/60 hover:bg-surface2 hover:border-gold/40 transition duration-300"
>>>>>>> 120b535 (re design portfolio)
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
<<<<<<< HEAD
                  <span className="text-xs sm:text-sm text-gray-300">
=======
                  <span className="text-xs sm:text-sm text-ink-muted">
>>>>>>> 120b535 (re design portfolio)
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

<<<<<<< HEAD
export default Skills;
=======
export default Skills;
>>>>>>> 120b535 (re design portfolio)

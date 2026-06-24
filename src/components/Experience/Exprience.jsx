import React from "react";
<<<<<<< HEAD
import { experiences } from "../../constants"; // Import your data
=======
import { experiences } from "../../constants";
>>>>>>> 120b535 (re design portfolio)

const Experience = () => {
  return (
    <section
      id="experience"
<<<<<<< HEAD
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[15vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
=======
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[15vw] font-sans bg-void"    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-display font-semibold text-ink">EXPERIENCE</h2>
        <div className="w-32 h-px bg-gold-gradient mx-auto mt-4"></div>
        <p className="text-ink-muted mt-4 text-lg font-semibold max-w-2xl mx-auto">
>>>>>>> 120b535 (re design portfolio)
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical Line */}
<<<<<<< HEAD
       <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full z-0"></div>

=======
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-px bg-gold-bronze/40 h-full z-0"></div>
>>>>>>> 120b535 (re design portfolio)

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
<<<<<<< HEAD
            className={`flex flex-col sm:flex-row items-center mb-16 w-full relative ${
              index % 2 === 0 ? "sm:flex-row-reverse" : "sm:flex-row"
            }`}
          >
            {/* Timeline Circle */}
            <div className="hidden sm:flex absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-700 border-4 border-purple-500 w-16 h-16 rounded-full justify-center items-center z-20 shadow-lg">
=======
            className={`flex flex-col sm:flex-row items-center mb-16 w-full relative ${index % 2 === 0 ? "sm:flex-row-reverse" : "sm:flex-row"
              }`}
          >
            {/* Timeline Circle */}
            <div className="hidden sm:flex absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-surface2 border-2 border-gold w-16 h-16 rounded-full justify-center items-center z-20 shadow-gold">
>>>>>>> 120b535 (re design portfolio)
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <div
<<<<<<< HEAD
              className="w-full sm:w-5/12 bg-gray-900 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
              border border-white/10 hover:scale-105 transform transition duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-md overflow-hidden">
=======
              className="w-full sm:w-5/12 bg-surface backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-gold
              border border-gold/20 hover:border-gold/40 hover:scale-[1.02] transform transition duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-ink rounded-md overflow-hidden">
>>>>>>> 120b535 (re design portfolio)
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between">
<<<<<<< HEAD
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <h4 className="text-sm sm:text-md text-gray-300">
                    {experience.company}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">{experience.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400">{experience.desc}</p>

              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
=======
                  <h3 className="text-xl sm:text-2xl font-semibold text-ink">
                    {experience.role}
                  </h3>
                  <h4 className="text-sm sm:text-md text-ink-muted">
                    {experience.company}
                  </h4>
                  <p className="text-xs sm:text-sm text-ink-faint mt-1">{experience.date}</p>
                </div>
              </div>

              <p className="mt-4 text-ink-muted">{experience.desc}</p>

              <div className="mt-4">
                <h5 className="font-medium text-ink">Skills:</h5>
>>>>>>> 120b535 (re design portfolio)
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, i) => (
                    <li
                      key={i}
<<<<<<< HEAD
                      className="bg-[#8245ec] text-gray-300 px-3 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
=======
                      className="bg-gold/10 text-gold-light px-3 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gold/30"
>>>>>>> 120b535 (re design portfolio)
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default Experience;
=======
export default Experience;
>>>>>>> 120b535 (re design portfolio)

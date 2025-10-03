import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[8vw] lg:px-[12vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white tracking-wide">
          EDUCATION
        </h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          My education has been a journey of learning and development. Here are
          the details of my academic background.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full z-0"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className="relative flex flex-col sm:flex-row items-center mb-20"
          >
            {/* Timeline Circle */}
            <div className="hidden sm:flex absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-700 border-4 border-purple-500 w-16 h-16 rounded-full justify-center items-center z-20 shadow-lg">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            {/* Content Section */}
            <div
              className={`w-full sm:max-w-lg p-6 sm:p-8 rounded-3xl shadow-2xl border border-gray-700 bg-gray-900/80 backdrop-blur-md shadow-[0_0_25px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:scale-105 mt-14 sm:mt-0 ${
                index % 2 === 0
                  ? "sm:ml-[calc(50%+50px)] text-left"
                  : "sm:mr-[calc(50%+50px)] text-left"
              }`}
            >
              <div className="flex items-center space-x-6 sm:space-x-8">
                {/* School Logo/Image inside card */}
                <div className="w-20 h-20 bg-white rounded-md overflow-hidden shadow-md flex-shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm sm:text-base text-gray-300">
                    {edu.school}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    {edu.date}
                  </p>
                </div>
              </div>

              {/* Grade and Description */}
              <p className="mt-4 text-gray-300 font-semibold">
                Grade: <span className="text-purple-400">{edu.grade}</span>
              </p>
              <p className="mt-3 text-gray-400 leading-relaxed">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

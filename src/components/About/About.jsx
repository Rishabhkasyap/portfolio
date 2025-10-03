import React, { useEffect, useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/dp.png';

const usePrefersReducedMotion = () => {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = () => setPrefersReduced(mq.matches);

    setPrefersReduced(mq.matches);

    mq.addEventListener
      ? mq.addEventListener('change', handler)
      : mq.addListener(handler);

    return () =>
      mq.removeEventListener
        ? mq.removeEventListener('change', handler)
        : mq.removeListener(handler);
  }, []);

  return prefersReduced;
};

const About = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="about"
      aria-label="About me"
      className="py-12 px-8 lg:px-32 font-sans "
    >
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
            Hi, I am
          </h1>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Rishabh Kumar
          </h2>
          <h3 className="text-2xl lg:text-3xl font-semibold text-[#8245ec] mb-6">
            <span className="text-white">I am a </span>
            {prefersReducedMotion ? (
              <span className="text-[#8245ec]">Fullstack Developer</span>
            ) : (
              <ReactTypingEffect
                text={[
                  'Fullstack Developer',
                  'App Developer',
                  'UI/UX Designer',
                  'Coder',
                ]}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={2000}
                cursorRenderer={(cursor) => (
                  <span className="text-[#8245ec]" aria-hidden>
                    {cursor}
                  </span>
                )}
              />
            )}
          </h3>
          <p className="text-gray-400 text-base lg:text-lg leading-relaxed mb-6">
            I am a full-stack developer with 2+ years of experience building scalable web applications. Skilled in both front-end and back-end development, I specialize in the MERN stack and modern technologies to deliver seamless user experiences.
          </p>
          <a
            href="https://drive.google.com/file/d/1-i65Z9EdDg2GSuEOEKXwZp2LWi_bEeoT/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#8245ec] to-[#a855f7] text-white py-3 px-8 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(130,69,236,0.5)] transition-transform transform hover:scale-105"
            aria-label="Download CV (opens in a new tab)"
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <Tilt
            className="w-64 h-64 lg:w-[28rem] lg:h-[28rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.05}
            transitionSpeed={800}
            gyroscope
            tiltEnable={!prefersReducedMotion}
          >
            <img
              src={profileImage}
              alt="Rishabh Kumar — profile photo"
              loading="lazy"
              decoding="async"
              className="w-full h-full rounded-full object-cover shadow-lg"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;

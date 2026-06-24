import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/dp.png';
=======
import Tilt from 'react-parallax-tilt';
import BlurBlob from '../../BlurBlob';

const ROLES = ['Frontend Developer', 'App Developer', 'UI/UX Designer', 'Coder'];

const TYPE_SPEED = 90;
const ERASE_SPEED = 45;
const HOLD_DELAY = 1800;
const PAUSE_BETWEEN = 400;
>>>>>>> 120b535 (re design portfolio)

const usePrefersReducedMotion = () => {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = () => setPrefersReduced(mq.matches);

    setPrefersReduced(mq.matches);
<<<<<<< HEAD

    mq.addEventListener
      ? mq.addEventListener('change', handler)
      : mq.addListener(handler);
=======
    mq.addEventListener ? mq.addEventListener('change', handler) : mq.addListener(handler);
>>>>>>> 120b535 (re design portfolio)

    return () =>
      mq.removeEventListener
        ? mq.removeEventListener('change', handler)
        : mq.removeListener(handler);
  }, []);

  return prefersReduced;
};

<<<<<<< HEAD
const About = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
=======
/** Self-contained typewriter — replaces react-typing-effect so we control
 *  the accessibility story directly (see sr-only fallback in the markup). */
const useTypewriter = (words, enabled) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (!enabled || words.length === 0) return;

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const tick = () => {
      const currentWord = words[wordIndex];

      if (!isDeleting) {
        charIndex += 1;
        setDisplayText(currentWord.slice(0, charIndex));

        if (charIndex === currentWord.length) {
          isDeleting = true;
          timeoutId = setTimeout(tick, HOLD_DELAY);
          return;
        }
        timeoutId = setTimeout(tick, TYPE_SPEED);
      } else {
        charIndex -= 1;
        setDisplayText(currentWord.slice(0, charIndex));

        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          timeoutId = setTimeout(tick, PAUSE_BETWEEN);
          return;
        }
        timeoutId = setTimeout(tick, ERASE_SPEED);
      }
    };

    timeoutId = setTimeout(tick, TYPE_SPEED);
    return () => clearTimeout(timeoutId);
  }, [words, enabled]);

  return displayText;
};

const About = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const typedRole = useTypewriter(ROLES, !prefersReducedMotion);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const enterClass = (delay = '') =>
    prefersReducedMotion
      ? 'opacity-100'
      : `transition-all duration-700 ${delay} ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`;
>>>>>>> 120b535 (re design portfolio)

  return (
    <section
      id="about"
      aria-label="About me"
<<<<<<< HEAD
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
=======
      className="relative scroll-mt-24 overflow-hidden bg-void px-6 pb-16 pt-28 font-sans lg:px-24 lg:pb-24 lg:pt-36"
    >
      {/* Ambient backdrop: faint radial wash, grounds the section without competing with the halo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(212,175,55,0.08),transparent_70%)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <BlurBlob position={{ top: '10%', left: '15%' }} size={{ width: '22rem', height: '22rem' }} />
        <BlurBlob position={{ top: '85%', left: '85%' }} size={{ width: '26rem', height: '26rem' }} />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Text content */}
        <div className={`order-2 text-center lg:order-1 lg:text-left ${enterClass()}`}>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-gold-bronze">
            Hi, I am <span aria-hidden="true">👋</span>
          </p>
          <h1 className="mb-4 font-display text-6xl font-semibold leading-[1.05] text-ink lg:text-7xl">
            Rishabh <span className="text-gold-gradient">Kumar</span>
          </h1>
          <h2 className="mb-6 min-h-[2.5rem] text-2xl font-semibold text-ink/90 lg:text-3xl">
            I am a{' '}
            <span className="text-gold-gradient">
              <span aria-hidden="true">
                {prefersReducedMotion ? ROLES[0] : typedRole}
                {!prefersReducedMotion && (
                  <span className="ml-0.5 inline-block animate-pulse text-gold">|</span>
                )}
              </span>
              <span className="sr-only">{ROLES.join(', ')}</span>
            </span>
          </h2>
          <p className="mb-8 text-base leading-relaxed text-ink-muted lg:text-lg">
            I'm a frontend developer with 20+ projects shipped, specializing in building fast,
            polished, and accessible interfaces. I turn ambitious designs into production-ready
            React applications, with an eye for detail and performance at every step.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="https://drive.google.com/file/d/1-i65Z9EdDg2GSuEOEKXwZp2LWi_bEeoT/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download CV (opens in a new tab)"
              className="group inline-block rounded-full bg-gold-gradient px-8 py-3 text-lg font-bold text-void shadow-gold transition-all duration-300 hover:bg-void hover:text-gold hover:shadow-gold-lg hover:[box-shadow:0_0_0_1.5px_#d4af37,0_0_48px_rgba(212,175,55,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-void"
            >
              Download CV
            </a>
            <a
              href="#work"
              className="inline-block rounded-full border border-gold/60 px-8 py-3 text-lg font-bold text-gold transition-colors hover:bg-gold/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-void"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Profile image — signature halo glow behind it */}
        <div className={`order-1 flex justify-center lg:order-2 lg:justify-end ${enterClass('delay-150')}`}>
          <div className="relative">
            {/* Slow-rotating conic halo: the page's one bold flourish */}
            <div
              aria-hidden="true"
              className={`absolute inset-[-18%] -z-10 rounded-full opacity-70 blur-2xl ${prefersReducedMotion ? '' : 'animate-spin-slow'
                }`}
              style={{
                background:
                  'conic-gradient(from 0deg, transparent 0deg, #d4af37 60deg, transparent 140deg, transparent 220deg, #f4e5b2 280deg, transparent 360deg)',
              }}
            />
            <div
              aria-hidden="true"
              className={`absolute inset-[6%] -z-10 rounded-full bg-gold/25 blur-3xl ${prefersReducedMotion ? '' : 'animate-pulse-glow'
                }`}
            />
            <Tilt
              className="h-64 w-64 overflow-hidden rounded-full border-2 border-gold/70 lg:h-[28rem] lg:w-[28rem]"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              scale={1.05}
              transitionSpeed={800}
              gyroscope
              tiltEnable={!prefersReducedMotion}
            >
              <img
                src="/dp.jpeg"
                alt="Rishabh Kumar — profile photo"
                width="448"
                height="448"
                loading="eager"
                decoding="async"
                className="h-full w-full object-cover shadow-lg"
              />

            </Tilt>
          </div>
>>>>>>> 120b535 (re design portfolio)
        </div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default About;
=======
export default About;
>>>>>>> 120b535 (re design portfolio)

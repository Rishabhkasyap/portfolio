import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
<<<<<<< HEAD
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0dcy1x9",
        "template_lufo0oo",
        form.current,
        "XDpDEdQIbqdqYe_WZ"
      )
      .then(() => {
        setIsSent(true);
        form.current.reset();
        toast.success("Message sent successfully!✅", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      },
      (error)=>
      {
        console.error("Error sending message:", error);
        toast.error("Failed to send message. Please try again.",
          {
             position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          }
        )
      }

    );
  };

  return (
    <section
      id="constant"
      className="flex flex-col items-center justify-center py-24 px-(12vw)md:px-(7pw) lg:px-(20vw) bg-black"
    >
      <ToastContainer/>
      {/*section title  */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I'd love to hear from you-reach out for any opportunities or
          questions!
        </p>
      </div>
      {/*contact form */}
      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Contact With Me
          <span className="ml-1">🚀</span>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="mt-4 flex flex-col space-y-4"
          >
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />

            {/* Send Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
            >
              Send
            </button>
          </form>
        </h3>
=======
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import BlurBlob from "../../BlurBlob";

const useInView = (options = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.12, ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
};

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [headerRef, headerInView] = useInView();
  const [cardRef, cardInView] = useInView();

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => setPrefersReducedMotion(mq.matches);
    setPrefersReducedMotion(mq.matches);
    mq.addEventListener ? mq.addEventListener("change", handler) : mq.addListener(handler);
    return () => mq.removeEventListener ? mq.removeEventListener("change", handler) : mq.removeListener(handler);
  }, []);

  const toastOptions = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    style: {
      background: "#141210",
      border: "1px solid rgba(212,175,55,0.25)",
      color: "#fafaf8",
      fontFamily: "Inter, sans-serif",
    },
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm("service_6moh83k", "template_lufo0oo", form.current, "XDpDEdQIbqdqYe_WZ")
      .then(() => {
        form.current.reset();
        toast.success("Message sent successfully ✓", toastOptions);
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        toast.error("Failed to send — please try again.", toastOptions);
      })
      .finally(() => setSending(false));
  };

  const inputClass =
    "w-full rounded-xl border border-gold/15 bg-void/80 px-4 py-3 text-sm text-ink placeholder:text-ink-faint " +
    "outline-none transition-all duration-200 " +
    "focus:border-gold/50 focus:ring-2 focus:ring-gold/10 focus:bg-void";

  const labelClass =
    "font-mono text-[9px] uppercase tracking-[0.18em] text-gold-bronze";

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="relative scroll-mt-24 overflow-hidden bg-void px-6 pb-24 pt-24 font-sans lg:px-24 flex flex-col items-center"
    >
      <ToastContainer />

      {/* ambient backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_40%_at_50%_0%,rgba(212,175,55,0.06),transparent_70%)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <BlurBlob position={{ top: "5%", left: "80%" }} size={{ width: "22rem", height: "22rem" }} />
        <BlurBlob position={{ top: "70%", left: "3%" }} size={{ width: "20rem", height: "20rem" }} />
      </div>

      {/* ── header ── */}
      <header
        ref={headerRef}
        className={[
          "mx-auto mb-14 max-w-xl text-center w-full",
          prefersReducedMotion
            ? "opacity-100"
            : `transition-all duration-700 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`,
        ].join(" ")}
      >
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-gold-bronze">
          Get In Touch
        </p>
        <h2 className="font-display text-5xl font-semibold text-ink lg:text-6xl">
          Contact <span className="text-gold-gradient">Me</span>
        </h2>
        <div aria-hidden="true" className="mx-auto mt-5 h-px w-24 bg-gold-gradient opacity-60" />
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink-muted">
          I'd love to hear from you — reach out for any opportunities or questions.
        </p>
      </header>

      {/* ── form card ── */}
      <div
        ref={cardRef}
        className={[
          "relative w-full max-w-lg overflow-hidden rounded-2xl border border-gold/20 bg-surface p-8 sm:p-10",
          prefersReducedMotion
            ? "opacity-100"
            : `transition-all duration-700 delay-150 ${cardInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`,
        ].join(" ")}
      >
        {/* gold top rule */}
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gold-gradient" />

        <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.2em] text-gold-bronze text-center">
          Send a message
        </p>
        <h3 className="font-display text-2xl font-semibold text-ink text-center mb-8">
          Let's work together
        </h3>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
          <label className="flex flex-col gap-1.5">
            <span className={labelClass}>Your Email</span>
            <input
              type="email"
              name="user_email"
              placeholder="you@example.com"
              required
              className={inputClass}
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className={labelClass}>Your Name</span>
            <input
              type="text"
              name="user_name"
              placeholder="Jane Smith"
              required
              className={inputClass}
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className={labelClass}>Subject</span>
            <input
              type="text"
              name="subject"
              placeholder="What's this about?"
              required
              className={inputClass}
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className={labelClass}>Message</span>
            <textarea
              name="message"
              placeholder="Tell me about your project or question…"
              rows={5}
              required
              className={inputClass + " resize-none"}
            />
          </label>

          <button
            type="submit"
            disabled={sending}
            className={[
              "mt-1 flex w-full items-center justify-center gap-2",
              "rounded-xl bg-gold-gradient px-6 py-3.5",
              "text-sm font-bold text-void shadow-gold",
              "transition-all duration-200 hover:shadow-gold-lg",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
              "disabled:opacity-60 disabled:cursor-not-allowed",
            ].join(" ")}
          >
            {sending ? (
              <>
                <svg
                  aria-hidden="true"
                  className="animate-spin"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                  <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
                </svg>
                Sending…
              </>
            ) : (
              <>
                <svg
                  aria-hidden="true"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                Send Message
              </>
            )}
          </button>
        </form>
>>>>>>> 120b535 (re design portfolio)
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default Contact;
=======
export default Contact;
>>>>>>> 120b535 (re design portfolio)

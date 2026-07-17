"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative bg-cream-50 pt-[170px] md:pt-[180px]">
      {/* Hero video */}
      <div className="relative w-full h-[62vh] md:h-[78vh] min-h-[460px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ pointerEvents: "none" }}
        >
          <source src="https://res.cloudinary.com/uei4vwcd/video/upload/v1784269891/newherosectionvideo_grvqwo.mp4" type="video/mp4" />
        </video>
        {/* Subtle warm overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/10" />

        {/* Headline positioned across the hero */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="display-heading text-white text-[24px] sm:text-[30px] md:text-[40px] lg:text-[46px] drop-shadow-[0_2px_18px_rgba(0,0,0,0.25)] leading-tight max-w-4xl"
            style={{ letterSpacing: "0.05em" }}
          >
            A Spiritual Homecoming
            <br />
            Reserved For A Blessed Few
          </motion.h1>
        </div>

        {/* Social rail */}
        <div className="hidden md:flex absolute right-5 top-1/2 -translate-y-1/2 flex-col gap-3">
          {[
            { label: "Facebook", icon: "facebook", href: "https://www.facebook.com/TheWhiteButterOfficial/" },
            { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/thewhitebutterofficial/" },
            { label: "YouTube", icon: "youtube", href: "https://www.youtube.com/@thewhitebutterofficial" },
          ].map((s) => (
            <a
              key={s.icon}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-7 h-7 rounded-full border border-white/70 text-white flex items-center justify-center hover:bg-white hover:text-copper transition-colors"
            >
              <SocialIcon name={s.icon} />
            </a>
          ))}
        </div>
      </div>

      {/* Framed copy block below hero */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 md:-mt-14 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="copper-frame bg-cream-50 px-8 md:px-16 py-8 md:py-10 text-center"
        >
          <p className="body-serif text-[15px] md:text-[17px] text-ink/85 leading-[1.85] text-balance">
            Some addresses are written long before you arrive. There are places you travel to. And there are places that call you back.
            Places where devotion feels deeper. Peace feels closer. And belonging feels less like chance, and more like grace.
            Inspired by one of Krishna&apos;s most cherished symbols, White Butter Residences is a rare opportunity to own a part of Vrindavan&apos;s timeless spirit.{" "}
            <a href="#vrindavan" className="text-copper hover:text-copper-deep italic underline-offset-4 hover:underline">
              Begin the Journey
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function SocialIcon({ name }: { name: string }) {
  if (name === "facebook")
    return (
      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.55V9.8c0-2.52 1.5-3.92 3.8-3.92 1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.25 0-1.64.78-1.64 1.58V12h2.8l-.45 2.89h-2.35v6.99A10 10 0 0 0 22 12Z" />
      </svg>
    );
  if (name === "instagram")
    return (
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
      </svg>
    );
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23 7.5a3 3 0 0 0-2.1-2.1C19.1 5 12 5 12 5s-7.1 0-8.9.4A3 3 0 0 0 1 7.5 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.5a3 3 0 0 0 2.1 2.1C4.9 19 12 19 12 19s7.1 0 8.9-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23.5 12 31 31 0 0 0 23 7.5ZM9.8 15.3V8.7l5.7 3.3-5.7 3.3Z" />
    </svg>
  );
}

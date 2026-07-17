"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const landmarks = [
  { name: "Prem Mandir", distance: "200m" },
  { name: "ISKCON Temple", distance: "800m" },
  { name: "Premanand Ji Maharaj Ashram", distance: "1 km" },
  { name: "Chandrodaya Mandir", distance: "2 km" },
  { name: "Banke Bihari Temple", distance: "3 km" },
];

function ArtisticDivider() {
  return (
    <div className="w-full py-4" style={{ background: "rgba(244, 236, 220, 0.92)" }}>
      <div className="flex items-center gap-0 mx-auto max-w-5xl px-6">
        <div className="flex-1 h-[1px]" style={{ background: "linear-gradient(to right, transparent 0%, #8B4A2B 100%)" }} />
        <svg width="10" height="10" viewBox="0 0 10 10" className="mx-1 flex-shrink-0">
          <rect x="2" y="2" width="6" height="6" transform="rotate(45 5 5)" fill="#8B4A2B" opacity="0.5" />
        </svg>
        <div className="w-12 md:w-20 h-[1px] bg-[#8B4A2B]" />
        <div className="mx-3 flex-shrink-0">
          <svg width="50" height="50" viewBox="0 0 50 50">
            <rect x="10" y="10" width="30" height="30" transform="rotate(45 25 25)" fill="none" stroke="#8B4A2B" strokeWidth="1.5" opacity="0.8" />
            <rect x="15" y="15" width="20" height="20" transform="rotate(45 25 25)" fill="#8B4A2B" opacity="0.12" stroke="#8B4A2B" strokeWidth="0.8" />
            <circle cx="25" cy="25" r="3" fill="#8B4A2B" opacity="0.9" />
            <circle cx="25" cy="25" r="1.2" fill="#FBF7F0" />
          </svg>
        </div>
        <div className="w-12 md:w-20 h-[1px] bg-[#8B4A2B]" />
        <svg width="10" height="10" viewBox="0 0 10 10" className="mx-1 flex-shrink-0">
          <rect x="2" y="2" width="6" height="6" transform="rotate(45 5 5)" fill="#8B4A2B" opacity="0.5" />
        </svg>
        <div className="flex-1 h-[1px]" style={{ background: "linear-gradient(to left, transparent 0%, #8B4A2B 100%)" }} />
      </div>
    </div>
  );
}

function TempleMarker() {
  return (
    <svg width="14" height="20" viewBox="0 0 14 20" className="flex-shrink-0 mt-1 text-copper">
      <path
        d="M7 0 Q7 0, 9 4 Q11 6, 10 9 L10 18 L4 18 L4 9 Q3 6, 5 4 Q7 0, 7 0 Z"
        fill="currentColor"
        opacity="0.85"
      />
    </svg>
  );
}

export default function Destination() {
  return (
    <section id="destination" className="overflow-hidden">
      {/* ── Mobile: stacked layout (text then image) ── */}
      <div className="md:hidden bg-cream-50">
        <div className="px-6 py-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <h2 className="eyebrow text-[20px] text-copper-deep mb-2">
              The Destination
            </h2>
            <p
              className="display-heading text-[18px] mb-7 text-ink"
              style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontWeight: 600 }}
            >
              An Address Blessed By Proximity
            </p>

            <p className="body-serif text-[16px] text-ink leading-[1.85] mb-8">
              Not every residence is built near sacred landmarks. Some become
              extraordinary because of where they stand. Located in the heart of
              modern Vrindavan, White Butter Residences places you moments away
              from the city&apos;s most revered destinations.
            </p>

            <ul className="space-y-2.5 mb-8">
              {landmarks.map((l, i) => (
                <motion.li
                  key={l.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 + i * 0.07 }}
                  className="flex items-center gap-2"
                >
                  <TempleMarker />
                  <span className="display-heading text-[14px] text-copper-deep" style={{ fontWeight: 600 }}>
                    {l.name}
                  </span>
                  <Image
                    src="/images/candle.png"
                    alt=""
                    width={8}
                    height={16}
                    className="object-contain opacity-80"
                  />
                  <span className="body-serif text-[14px] text-copper-deep tabular-nums ml-4">
                    {l.distance}
                  </span>
                </motion.li>
              ))}
            </ul>

            <p className="body-serif text-[15px] text-copper-deep leading-[1.7]" style={{ fontWeight: 600 }}>
              A location that brings you closer
              <br /> to devotion, every single day.
            </p>
          </motion.div>
        </div>

        <div className="relative w-full h-[320px]">
          <Image
            src="/images/destination-building-cropped.png"
            alt="White Butter Residences architectural render"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <span
            className="absolute bottom-3 right-4 text-[9px] tracking-[0.18em] uppercase text-white/80 drop-shadow-md"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            *An Artistic Impression
          </span>
        </div>
        <ArtisticDivider />
      </div>

      {/* ── Desktop: original overlaid layout ── */}
      <div className="hidden md:block relative min-h-[700px]">
        <Image
          src="/images/destination-building-cropped.png"
          alt="White Butter Residences architectural render"
          fill
          sizes="100vw"
          className="object-cover object-right"
          priority={false}
        />

        <div className="absolute inset-0 destination-overlay" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="max-w-md lg:max-w-lg"
          >
            <h2 className="eyebrow text-[24px] text-copper-deep mb-2">
              The Destination
            </h2>
            <p
              className="display-heading text-[22px] mb-7 text-ink"
              style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontWeight: 600 }}
            >
              An Address Blessed By Proximity
            </p>

            <p className="body-serif text-[17px] text-ink leading-[1.85] mb-8">
              Not every residence is built near sacred landmarks. Some become
              extraordinary because of where they stand. Located in the heart of
              modern Vrindavan, White Butter Residences places you moments away
              from the city&apos;s most revered destinations.
            </p>

            <ul className="space-y-2.5 mb-8">
              {landmarks.map((l, i) => (
                <motion.li
                  key={l.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 + i * 0.07 }}
                  className="flex items-center gap-2"
                >
                  <TempleMarker />
                  <span className="display-heading text-[15px] text-copper-deep" style={{ fontWeight: 600 }}>
                    {l.name}
                  </span>
                  <Image
                    src="/images/candle.png"
                    alt=""
                    width={8}
                    height={16}
                    className="object-contain opacity-80"
                  />
                  <span className="body-serif text-[15px] text-copper-deep tabular-nums ml-4">
                    {l.distance}
                  </span>
                </motion.li>
              ))}
            </ul>

            <p className="body-serif text-[16px] text-copper-deep leading-[1.7]" style={{ fontWeight: 600 }}>
              A location that brings you closer
              <br /> to devotion, every single day.
            </p>
          </motion.div>
        </div>

        <span
          className="absolute bottom-4 right-6 z-10 text-[10px] tracking-[0.18em] uppercase text-white/80 drop-shadow-md"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          *An Artistic Impression
        </span>
      </div>

      <ArtisticDivider />
    </section>
  );
}

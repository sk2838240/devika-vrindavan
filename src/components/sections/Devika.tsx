"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import StatCounter from "@/components/StatCounter";

const stats = [
  { value: 6.5, suffix: "+", decimals: 1, big: "MILLION SQ. FT.", small: "AREA DEVELOPED" },
  { value: 14, suffix: "+", decimals: 0, big: "THOUSAND", small: "HAPPY CUSTOMERS" },
  { value: 70, suffix: "+", decimals: 0, big: "YEARS", small: "LEGACY" },
  { value: 46, suffix: "+", decimals: 0, big: "PROJECTS", small: "SUCCESSFULLY DELIVERED" },
];

export default function Devika() {
  return (
    <section id="devika" className="bg-cream-50 py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Devika logo + tag */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-start md:items-center"
          >
            <Image
              src="/images/logo_devika.png"
              alt="Devika Group"
              width={280}
              height={80}
              className="w-[200px] md:w-[280px] h-auto"
            />
            <p
              className="mt-2 text-devika-navy text-[12px] tracking-[0.4em]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              SINCE 1954
            </p>
          </motion.div>

          {/* Right copy */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <h2 className="display-heading text-[24px] md:text-[30px] text-devika-navy mb-5">
              Seven Decades of Trust.
            </h2>
            <p className="body-serif text-[15px] md:text-[16px] text-ink/80 leading-[1.85]">
              For over 70 years, Devika Group has shaped spaces that stand the
              test of time. From hospitality and commercial developments to
              landmark destinations, the group has built a legacy founded on
              quality, credibility and enduring relationships. Because trust,
              like devotion, is earned over generations.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 mt-16 md:mt-20">
          {stats.map((s, i) => (
            <motion.div
              key={s.big}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 + i * 0.1 }}
              className="text-center md:text-left"
            >
              <div
                className="text-devika-navy text-[48px] md:text-[64px] leading-none font-medium"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                <StatCounter
                  value={s.value}
                  suffix={s.suffix}
                  decimals={s.decimals}
                />
              </div>
              <div
                className="text-devika-navy text-[11px] md:text-[13px] tracking-[0.18em] mt-1"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {s.big}
              </div>
              <div
                className="text-ink/70 text-[10px] md:text-[12px] tracking-[0.15em] mt-1"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {s.small}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


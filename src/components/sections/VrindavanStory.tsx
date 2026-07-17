"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Ornament from "@/components/Ornament";

export default function VrindavanStory() {
  return (
    <section
      id="vrindavan"
      className="relative bg-cream-50 py-24 md:py-32 overflow-hidden"
    >
      {/* Faded backdrop image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/vrindavan-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream-50/30 via-cream-50/55 to-cream-50/30" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <Ornament className="text-copper-deep mb-10 opacity-90" width={170} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="display-heading text-[26px] md:text-[36px] lg:text-[40px] text-copper-deep mb-10"
          style={{ letterSpacing: "0.04em" }}
        >
          Vrindavan. Where The Soul Returns.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 0.2 }}
          className="body-serif text-[16px] md:text-[18px] text-ink/85 leading-[1.85] space-y-5 max-w-2xl"
        >
          <p>
            For centuries, seekers have travelled to Vrindavan searching
            <br className="hidden md:inline" /> for something they could never quite put into words.
          </p>
          <p>
            A feeling. A stillness. A connection. A calling.
            <br className="hidden md:inline" /> While its soul remains timeless, Vrindavan is evolving.
            <br className="hidden md:inline" /> Enhanced infrastructure, growing hospitality, improved connectivity,
            <br className="hidden md:inline" /> and the transformative influence of Jewar International Airport are
            <br className="hidden md:inline" /> shaping a future where spirituality and opportunity coexist.
          </p>
          <p>
            Today, as one of India&apos;s fastest-growing spiritual destinations, Vrindavan continues
            <br className="hidden md:inline" /> to draw devotees, travellers and visionaries from around the world.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <Ornament className="text-copper-deep mt-12 opacity-90" width={170} />
        </motion.div>
      </div>
    </section>
  );
}

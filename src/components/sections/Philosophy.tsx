"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative bg-cream-50 py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section eyebrow heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-2"
        >
          <h2 className="eyebrow text-[18px] md:text-[22px] text-copper-deep">
            The White Butter Philosophy
          </h2>
          <p
            className="display-heading italic text-[18px] md:text-[22px] mt-2 text-copper-deep/80"
            style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
          >
            More Than A Residence. A Symbol Of Belonging.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-start mt-12 md:mt-16">
          {/* Left column - The Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-4"
          >
            <h3 className="display-heading text-[22px] md:text-[26px] text-copper-deep mb-5 leading-tight">
              The Name:
              <br /> White Butter
            </h3>
            <p className="body-serif text-[16px] md:text-[17px] text-ink/85 leading-[1.85]">
              A symbol deeply woven into the stories, affection and innocence
              associated with Krishna. The White Butter draws inspiration from
              this timeless symbol to create a destination where luxury feels
              gentle, devotion feels natural, and belonging feels earned.
            </p>
          </motion.div>

          {/* Center logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.2 }}
            className="lg:col-span-4 flex justify-center items-center"
          >
            <Image
              src="/images/icon.png"
              alt="The White Butter Insignia"
              width={160}
              height={230}
              className="object-contain"
            />
          </motion.div>

          {/* Right column - The Insignia */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1 }}
            className="lg:col-span-4"
          >
            <h3 className="display-heading text-[22px] md:text-[26px] text-copper-deep mb-3 leading-tight">
              The Insignia
            </h3>
            <p className="body-serif text-[14px] md:text-[15px] italic text-ink/75 mb-6">
              Every element of the White Butter identity carries meaning.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4 pb-5 border-b border-copper/20">
                <Image
                  src="/images/candle.png"
                  alt="Tilak motif"
                  width={24}
                  height={48}
                  className="flex-shrink-0 mt-0.5 object-contain"
                />
                <p className="body-serif text-[15px] md:text-[16px] text-ink/85 leading-[1.7]">
                  The central motif draws inspiration from the sacred tilak
                  worn by devotees.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Image
                  src="/images/oval.png"
                  alt="Japa mala oval"
                  width={28}
                  height={42}
                  className="flex-shrink-0 mt-1 object-contain"
                />
                <p className="body-serif text-[15px] md:text-[16px] text-ink/85 leading-[1.7]">
                  The surrounding beads echo the rhythm of the japa mala,
                  carried through countless prayers and chants.
                </p>
              </div>
            </div>

            <p className="body-serif text-[15px] md:text-[16px] italic text-copper-deep/85 mt-8 leading-[1.7]">
              Together they represent three enduring ideas:
              <br />
              <span className="not-italic body-serif text-copper-deep text-[15px] md:text-[16px]" style={{ fontWeight: 600 }}>
                Faith. Devotion. Belonging.
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

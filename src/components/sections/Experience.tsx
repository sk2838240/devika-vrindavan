"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const amenities = [
  {
    name: "The White Butter Garden",
    desc: "A rooftop sanctuary designed for reflection, conversation and stillness.",
    iconSrc: "/images/elegant_icon_1 (1).png",
  },
  {
    name: "Curated Retail Boulevard",
    desc: "Thoughtfully selected experiences for everyday convenience and lifestyle.",
    iconSrc: "/images/elegant_icon_1 (2).png",
  },
  {
    name: "Hospitality-Inspired Living",
    desc: "Dedicated services and premium common spaces designed around comfort.",
    iconSrc: "/images/elegant_icon_1 (3).png",
  },
  {
    name: "International Design",
    desc: "Crafted by globally acclaimed architects to bring contemporary luxury into a sacred setting.",
    iconSrc: "/images/elegant_icon_1 (4).png",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 90% 70% at 50% 20%, rgba(255,230,180,0.5) 0%, #F4ECDC 40%, #E8DBC4 100%)",
      }}
    >
      {/* Golden sunlight overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 60% 15%, rgba(255,215,140,0.45), transparent 65%), radial-gradient(ellipse 40% 30% at 30% 25%, rgba(255,200,120,0.3), transparent 60%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="eyebrow text-[20px] md:text-[26px] mb-3"
            style={{ fontWeight: 700, color: "#5C2E18" }}
          >
            The Experience
          </motion.h2>
          <p
            className="body-serif text-[22px] md:text-[28px] mb-3"
            style={{ fontWeight: 600, color: "#5C2E18" }}
          >
            Crafted For Soulful Living
          </p>
          <p className="body-serif text-[16px] md:text-[18px]" style={{ fontWeight: 600, color: "#5C2E18" }}>
            Luxury here is not measured by excess. It is measured by peace.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {amenities.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.15 }}
              className="flex flex-col items-center text-center px-2"
            >
              <div className="w-28 h-28 md:w-32 md:h-32 mb-5 relative">
                <Image
                  src={a.iconSrc}
                  alt={a.name}
                  fill
                  sizes="128px"
                  className="object-contain"
                />
              </div>
              <h3 className="display-heading text-[14px] md:text-[16px] mb-2 leading-tight" style={{ fontWeight: 700, color: "#5C2E18" }}>
                {a.name}
              </h3>
              <p className="body-serif text-[13px] md:text-[14px] leading-[1.6]" style={{ fontWeight: 600, color: "#5C2E18" }}>
                {a.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


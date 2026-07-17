"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

const suites = [
  { src: "/images/images/TWB - Residences.jpg", alt: "Luxury bedroom suite", label: "TWB - Residences" },
  { src: "/images/images/TWB - Soulful Residences - Studio.jpg", alt: "Premium bedding detail", label: "TWB - Soulful Residences - Studio" },
  { src: "/images/images/TWB - Suite - Living Room_.png", alt: "Signature suite balcony view", label: "TWB - Suite - Living Room" },
  { src: "/images/images/TWB Garden_.png", alt: "Curated bath sanctuary", label: "TWB Garden" },
  { src: "/images/images/TWB Suite - Private Lawn Terrace view.png", alt: "Designer interior detail", label: "TWB Suite - Private Lawn Terrace view" },
  { src: "/images/images/TWB Suite_.jpg", alt: "Designer interior detail", label: "TWB Suite" },
];

const slides = [...suites, ...suites, ...suites, ...suites, ...suites];
const OFFSET = suites.length * 2;

export default function SignatureSuites() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false,
    startIndex: OFFSET + 2,
  });
  const [selected, setSelected] = useState(OFFSET + 2);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="suites" className="relative bg-cream-50 py-20 md:py-28 overflow-hidden">
      {/* Heading area */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <Image
          src="/images/arrow_up.png"
          alt=""
          width={170}
          height={30}
          className="object-contain mb-7"
        />

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="display-heading text-[24px] md:text-[34px] lg:text-[38px] text-copper-deep text-center mb-5"
          style={{ letterSpacing: "0.04em", fontWeight: 700 }}
        >
          Crafted For Different Ways Of Belonging
        </motion.h2>

        <p className="body-serif text-[16px] md:text-[17px] text-ink text-center max-w-2xl mb-14 leading-[1.85]" style={{ fontWeight: 500 }}>
          Whether for personal retreats, long stays, spiritual getaways or
          legacy ownership, White Butter offers a carefully curated collection
          of residences.
        </p>
      </div>

      {/* Full-width carousel — outside max-w container */}
      <div className="relative w-full">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((s, i) => {
              const isActive = i === selected;
              return (
                <div
                  key={`${s.src}-${i}`}
                  className="flex-[0_0_70%] md:flex-[0_0_30%] lg:flex-[0_0_24%]"
                >
                  <div
                    className="relative"
                    style={{ zIndex: isActive ? 10 : 1 }}
                  >
                    <div
                      className="relative aspect-[3/4] overflow-hidden"
                      style={{
                        borderRadius: "48% 48% 6px 6px / 16% 16% 3px 3px",
                        border: isActive
                          ? "2px solid rgba(139,74,43,0.45)"
                          : "2px solid transparent",
                      }}
                    >
                      <Image
                        src={s.src}
                        alt={s.alt}
                        fill
                        priority
                        sizes="(min-width:1024px) 24vw, 70vw"
                        className="object-cover"
                      />
                      <motion.div
                        animate={{
                          opacity: isActive ? 0 : 0.55,
                        }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="absolute inset-0"
                        style={{ backgroundColor: "rgba(251,247,240,0.7)" }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          aria-label="Previous suite"
          className="absolute left-[16%] md:left-[30%] top-1/2 -translate-y-1/2 z-20 text-white/90 hover:text-white transition-colors duration-200"
        >
          <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
            <path
              d="M20 4L4 20L20 36"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={scrollNext}
          aria-label="Next suite"
          className="absolute right-[16%] md:right-[30%] top-1/2 -translate-y-1/2 z-20 text-white/90 hover:text-white transition-colors duration-200"
        >
          <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
            <path
              d="M4 4L20 20L4 36"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Bottom text */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        {(() => {
          const originalIndex = selected % suites.length;
          const currentLabel = suites[originalIndex]?.label || "Signature Suites";
          return (
            <motion.h3
              key={selected}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="display-heading text-[20px] md:text-[26px] text-copper-deep mt-12 text-center"
              style={{ letterSpacing: "0.08em", fontWeight: 700 }}
            >
              {currentLabel}
            </motion.h3>
          );
        })()}
        <p className="body-serif italic text-[14px] md:text-[15px] text-ink mt-2 text-center" style={{ fontWeight: 500 }}>
          Each designed to bring comfort, elegance and tranquillity together.
        </p>

        <Image
          src="/images/arrow_down.png"
          alt=""
          width={170}
          height={30}
          className="object-contain mt-7"
        />
      </div>
    </section>
  );
}

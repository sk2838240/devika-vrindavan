"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const temples = [
  { src: "/images/banke-bihari.jpg", name: "Banke Bihari Temple" },
  { src: "/images/prem-mandir2.jpg", name: "Prem Mandir" },
  { src: "/images/iskcon.jpg", name: "ISKCON Temple" },
  { src: "/images/chandrodaya.png", name: "Chandrodaya Mandir" },
];

export default function SpiritualCapital() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false,
  });

  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      id="spiritual"
      className="relative bg-cream-100 py-20 md:py-28 overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at center, #F4ECDC 0%, #E8DBC4 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="The Spiritual Capital"
          subtitle="Home to sacred landmarks that have inspired devotion for generations."
          align="center"
          className="mb-14"
        />

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {temples.map((t, i) => {
                const isActive = i === selected;
                return (
                  <div
                    key={t.name}
                    className="flex-[0_0_80%] md:flex-[0_0_44%] lg:flex-[0_0_40%]"
                  >
                    <motion.div
                      animate={{
                        scale: isActive ? 1 : 1,
                      }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="relative"
                      style={{ zIndex: isActive ? 10 : 1 }}
                    >
                      <div
                        className="relative aspect-[4/3] overflow-hidden"
                        style={{
                          outline: isActive ? "3px solid rgba(139,74,43,0.5)" : "none",
                          outlineOffset: "-3px",
                        }}
                      >
                        <Image
                          src={t.src}
                          alt={t.name}
                          fill
                          sizes="(min-width:1024px) 40vw, 80vw"
                          className="object-cover"
                        />
                        <motion.div
                          animate={{
                            opacity: isActive ? 0 : 0.65,
                          }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                          className="absolute inset-0"
                          style={{ backgroundColor: "rgba(110, 58, 34, 0.75)" }}
                        />
                      </div>

                      {/* Temple name label — only visible on active slide */}
                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.4, delay: 0.15 }}
                            className="mt-4 mx-auto w-fit px-10 py-2.5"
                            style={{
                              background: "rgba(244,236,220,0.95)",
                              border: "1px solid rgba(139,74,43,0.35)",
                            }}
                          >
                            <p
                              className="display-heading text-[15px] md:text-[19px] text-copper-deep text-center whitespace-nowrap"
                              style={{ letterSpacing: "0.07em" }}
                            >
                              {t.name}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={scrollPrev}
            aria-label="Previous"
            className="absolute left-4 md:left-8 top-[40%] -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-white/90 hover:text-white transition-colors duration-200"
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
            aria-label="Next"
            className="absolute right-4 md:right-8 top-[40%] -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-white/90 hover:text-white transition-colors duration-200"
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

        <p className="text-center mt-10 italic body-serif text-copper-deep/85 text-[15px] md:text-[17px]">
          Where devotion transcends ritual and becomes emotion.
        </p>
      </div>
    </section>
  );
}

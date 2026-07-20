"use client";

import { useEffect, useState, useCallback } from "react";

export default function StickyEnquiry() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToContact = useCallback(() => {
    const el = document.getElementById("contact");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  const downloadBrochure = useCallback(() => {
    window.dispatchEvent(new CustomEvent("openEnquiryModal", { detail: { source: "brochure" } }));
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed right-0 z-50 flex flex-col" style={{ top: "45%" }}>
      <button
        onClick={scrollToContact}
        className="bg-copper hover:bg-copper-deep text-cream-50 transition-colors shadow-lg cursor-pointer"
        style={{ fontFamily: "var(--font-montserrat)", writingMode: "vertical-rl" }}
      >
        <span className="block px-3 py-5 text-[11px] tracking-[0.25em] uppercase font-medium">
          Enquiry
        </span>
      </button>
      <div className="h-3" />
      <button
        onClick={downloadBrochure}
        className="bg-copper-deep hover:bg-copper text-cream-50 transition-colors shadow-lg cursor-pointer"
        style={{ fontFamily: "var(--font-montserrat)", writingMode: "vertical-rl" }}
      >
        <span className="block px-3 py-5 text-[11px] tracking-[0.25em] uppercase font-medium">
          Get Brochure
        </span>
      </button>
    </div>
  );
}

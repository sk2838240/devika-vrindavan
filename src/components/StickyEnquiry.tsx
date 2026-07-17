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

  const handleClick = useCallback(() => {
    const el = document.getElementById("contact");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={handleClick}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-copper hover:bg-copper-deep text-cream-50 transition-colors shadow-lg cursor-pointer"
      style={{ fontFamily: "var(--font-montserrat)", writingMode: "vertical-rl" }}
    >
      <span className="block px-3 py-5 text-[11px] tracking-[0.25em] uppercase font-medium">
        Enquiry
      </span>
    </button>
  );
}

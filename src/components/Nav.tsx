"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { label: "HOME", href: "#hero" },
  { label: "THE VRINDAVAN STORY", href: "#vrindavan" },
  { label: "THE SPIRITUAL CAPITAL", href: "#spiritual" },
  { label: "PHILOSOPHY", href: "#philosophy" },
  { label: "CONTACT US", href: "#enquiry" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream-50/95 backdrop-blur-sm shadow-[0_1px_0_rgba(139,74,43,0.15)]"
          : "bg-cream-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 pt-5 pb-3 flex flex-col items-center">
        <a href="#hero" aria-label="The White Butter Residences home">
          <Image
            src="/images/The_White_Butter_Logo-main.png"
            alt="The White Butter Residences"
            width={200}
            height={80}
            className="w-[140px] md:w-[180px] h-auto"
            priority
          />
        </a>

        <nav className="mt-4 w-full">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 lg:gap-x-12 gap-y-2 border-t border-copper/25 pt-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="eyebrow text-[10px] md:text-[11px] text-copper hover:text-copper-deep transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                aria-label="Search"
                className="text-copper hover:text-copper-deep transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const interests = [
  "Luxury Studio",
  "Premium Studio",
  "Ultra Premium Studio",
  "Retail Opportunity",
];

export default function Enquiry() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function handleOpenModal(_e: Event) {
      setModalOpen(true);
    }
    window.addEventListener("openEnquiryModal", handleOpenModal);
    return () => window.removeEventListener("openEnquiryModal", handleOpenModal);
  }, []);

  return (
    <section
      id="enquiry"
      className="relative text-cream-50"
      style={{ background: "linear-gradient(180deg, #8B4A2B 0%, #6E3A22 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Social */}
        <div className="md:col-span-2 flex md:flex-col gap-3 items-center md:items-start">
          {[
            { label: "Facebook", icon: "facebook", href: "https://www.facebook.com/TheWhiteButterOfficial/" },
            { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/thewhitebutterofficial/" },
            { label: "YouTube", icon: "youtube", href: "https://www.youtube.com/@thewhitebutterofficial" },
          ].map((s) => (
            <a
              key={s.icon}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-8 h-8 rounded-full border border-cream-50/70 flex items-center justify-center text-cream-50 hover:bg-cream-50 hover:text-copper-deep transition-colors"
            >
              <Icon name={s.icon} />
            </a>
          ))}
        </div>

        {/* Middle - enquiry block */}
        <div className="md:col-span-7 flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="display-heading text-cream-50 text-[20px] md:text-[24px] tracking-[0.18em]">
              ENQUIRY
            </h2>
            <button
              onClick={() => setModalOpen(true)}
              className="mt-3 px-6 py-2 border border-cream-50 text-cream-50 text-[11px] tracking-[0.28em] uppercase hover:bg-cream-50 hover:text-copper-deep transition-colors"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Request An Invitation
            </button>
          </div>
          <p className="body-serif text-cream-50/95 text-[14px] md:text-[15px] leading-[1.75] max-w-md">
            Some opportunities are measured in square feet.
            <br /> Others are measured in meaning.
            <br /> If you feel called to White Butter Residences,
            <br /> we&apos;d be delighted to connect with you.
            <br /> Begin The Conversation
          </p>
        </div>

        {/* Right - logo */}
        <div className="md:col-span-3 flex justify-center md:justify-end">
          <Image
            src="/images/The White Butter-Logo.png"
            alt="The White Butter Residences"
            width={200}
            height={200}
            className="w-[150px] md:w-[200px] h-auto brightness-0 invert"
          />
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-cream-50/20 mt-2">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center">
          <p
            className="text-cream-50/70 text-[11px] tracking-[0.15em]"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            &copy; All Copyright Reserved To Shomit Finance Ltd
          </p>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <EnquiryModal onClose={() => setModalOpen(false)} />
      )}
    </section>
  );
}

function EnquiryModal({ onClose }: { onClose: () => void }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Get interests as array
    const interests = formData.getAll("interest") as string[];

    // Data for Google Sheets
    const sheetData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("mobile"),
      city: formData.get("city"),
      message: "",
      interests: interests,
      source: "Enquiry Modal"
    };

    try {
      // Send to both endpoints in parallel
      const [formSubmitRes, sheetRes] = await Promise.all([
        fetch("https://formsubmit.co/marketing@devikagroup.com?cc=rohit@searchmodifiers.com", {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        }),
        fetch("https://script.google.com/macros/s/AKfycbxKIOknQVQldpu68sqVfDBbYfoKf0SDv9SbqXx6Muw0azEb3l727s3zaFBn5OKsyX-Jsw/exec", {
          method: "POST",
          body: JSON.stringify(sheetData),
          headers: { "Content-Type": "application/json" },
        })
      ]);

      // Check if at least one succeeded
      if (formSubmitRes.ok || sheetRes.ok || sheetRes.status === 302 || sheetRes.status === 0) {
        setStatus("sent");
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="bg-cream-50 max-w-2xl w-full max-h-[92vh] overflow-y-auto p-8 md:p-12 relative"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-copper hover:text-copper-deep"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="6" y1="18" x2="18" y2="6" />
          </svg>
        </button>

        <h2 className="display-heading text-[24px] md:text-[28px] text-copper-deep text-center mb-2">
          Request An Invitation
        </h2>
        <p className="body-serif italic text-center text-ink/70 mb-8 text-[14px] md:text-[15px]">
          Because this project is positioned around belonging, not transaction.
        </p>

        <form
          className="space-y-5"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_subject" value="New Invitation Request from White Butter Website" />
          <input type="hidden" name="_captcha" value="false" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Name" name="name" required />
            <Field label="Mobile" name="mobile" type="tel" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="City" name="city" required />
          </div>

          <div>
            <label className="eyebrow text-[10px] block mb-3 text-copper">
              Interested In
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {interests.map((i) => (
                <label key={i} className="flex items-center gap-3 cursor-pointer body-serif text-[15px] text-ink/85">
                  <input
                    type="checkbox"
                    name="interest"
                    value={i}
                    className="w-4 h-4 accent-copper"
                  />
                  {i}
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full mt-4 px-6 py-3.5 bg-copper text-cream-50 text-[11px] tracking-[0.28em] uppercase hover:bg-copper-deep transition-colors disabled:opacity-60"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            {status === "sending" ? "Sending..." : "Begin The Conversation"}
          </button>

          {status === "sent" && (
            <div className="text-center space-y-4">
              <p className="body-serif text-[15px] text-copper-deep">
                Thank you! We will be in touch shortly.
              </p>
              <a
                href="/images/The White Butter Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-copper-deep text-cream-50 text-[11px] tracking-[0.2em] uppercase hover:bg-copper transition-colors"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Download Brochure
              </a>
            </div>
          )}
          {status === "error" && (
            <p className="text-center body-serif text-[15px] text-red-700">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </motion.div>
    </motion.div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="eyebrow text-[10px] block mb-1.5 text-copper">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent border-b border-copper/40 focus:border-copper py-2 text-ink body-serif text-[16px] outline-none transition-colors"
      />
    </div>
  );
}

function Icon({ name }: { name: string }) {
  if (name === "facebook")
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.55V9.8c0-2.52 1.5-3.92 3.8-3.92 1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.25 0-1.64.78-1.64 1.58V12h2.8l-.45 2.89h-2.35v6.99A10 10 0 0 0 22 12Z" />
      </svg>
    );
  if (name === "instagram")
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
      </svg>
    );
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23 7.5a3 3 0 0 0-2.1-2.1C19.1 5 12 5 12 5s-7.1 0-8.9.4A3 3 0 0 0 1 7.5 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.5a3 3 0 0 0 2.1 2.1C4.9 19 12 19 12 19s7.1 0 8.9-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23.5 12 31 31 0 0 0 23 7.5ZM9.8 15.3V8.7l5.7 3.3-5.7 3.3Z" />
    </svg>
  );
}

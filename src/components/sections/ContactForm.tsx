"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
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
    <section id="contact" className="bg-cream-50 py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="eyebrow text-[20px] md:text-[24px] text-copper-deep mb-3">
            Contact Us
          </h2>
          <p
            className="display-heading text-[18px] md:text-[22px] text-ink"
            style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontWeight: 600 }}
          >
            We&apos;d Love To Hear From You
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="copper-frame p-8 md:p-12 space-y-6 bg-white/40"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="eyebrow text-[10px] block mb-1.5 text-copper">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-transparent border-b border-copper/40 focus:border-copper py-2.5 text-ink body-serif text-[16px] outline-none transition-colors"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="eyebrow text-[10px] block mb-1.5 text-copper">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-transparent border-b border-copper/40 focus:border-copper py-2.5 text-ink body-serif text-[16px] outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="eyebrow text-[10px] block mb-1.5 text-copper">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full bg-transparent border-b border-copper/40 focus:border-copper py-2.5 text-ink body-serif text-[16px] outline-none transition-colors"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
            <div>
              <label className="eyebrow text-[10px] block mb-1.5 text-copper">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                className="w-full bg-transparent border-b border-copper/40 focus:border-copper py-2.5 text-ink body-serif text-[16px] outline-none transition-colors"
                placeholder="How can we help?"
              />
            </div>
          </div>

          <div>
            <label className="eyebrow text-[10px] block mb-1.5 text-copper">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={4}
              className="w-full bg-transparent border-b border-copper/40 focus:border-copper py-2.5 text-ink body-serif text-[16px] outline-none transition-colors resize-none"
              placeholder="Tell us what you're looking for..."
            />
          </div>

          <div className="text-center pt-2">
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-10 py-3.5 bg-copper text-cream-50 text-[11px] tracking-[0.28em] uppercase hover:bg-copper-deep transition-colors disabled:opacity-60"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </div>

          {status === "sent" && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center body-serif text-[15px] text-copper-deep"
            >
              Thank you! We&apos;ll get back to you shortly.
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center body-serif text-[15px] text-red-700"
            >
              Something went wrong. Please try again.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

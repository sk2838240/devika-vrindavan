import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        copper: {
          DEFAULT: "#8B4A2B",
          light: "#A66039",
          deep: "#6E3A22",
          50: "#FBF4EC",
          100: "#F2E2CE",
        },
        cream: {
          50: "#FBF7F0",
          100: "#F4ECDC",
          200: "#E8DBC4",
          300: "#D9C6A6",
        },
        ink: {
          DEFAULT: "#3A2A1E",
          muted: "#8A7660",
        },
        devika: {
          navy: "#15244A",
          red: "#C8102E",
        },
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "serif"],
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wider: "0.08em",
        widest: "0.22em",
      },
      animation: {
        "fade-up": "fadeUp 1.2s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in": "fadeIn 1.4s ease-out both",
        "draw": "draw 2.4s cubic-bezier(0.65,0,0.35,1) forwards",
        "shimmer": "shimmer 8s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        draw: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

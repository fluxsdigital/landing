import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        foreground: "#fafafa",
        card: {
          DEFAULT: "#111118",
          foreground: "#fafafa",
        },
        primary: {
          DEFAULT: "#7c3aed",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#1a1a24",
          foreground: "#a1a1aa",
        },
        border: "#1f1f2e",
        ring: "#7c3aed",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(124, 58, 237, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(124, 58, 237, 0.07) 1px, transparent 1px)",
        "gradient-radial":
          "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(124, 58, 237, 0.25), transparent)",
        "gradient-conic":
          "conic-gradient(from 230deg at 50% 50%, #7c3aed 0%, #ec4899 25%, #06b6d4 50%, #7c3aed 100%)",
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

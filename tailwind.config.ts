import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // Verde institucional — PANTONE 368 CVC
        brand: {
          50: "#f3faea",
          100: "#e4f5cf",
          200: "#cbeaa3",
          300: "#a8dc6f",
          400: "#85ca42",
          500: "#69be28", // PANTONE 368 CVC
          600: "#519e1c",
          700: "#3f7a18",
          800: "#346118",
          900: "#2c5118",
          950: "#152d09"
        },
        // Verde profundo / forest — para botones y acentos
        accent: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16"
        },
        ink: {
          50: "#f6f7f6",
          100: "#e3e5e3",
          200: "#c6cbc6",
          300: "#9fa89f",
          400: "#586558",
          500: "#384338",
          600: "#2a322a",
          700: "#1e241e",
          800: "#131713",
          900: "#0a0d0a",
          950: "#000000"
        }
      },
      fontFamily: {
        // Helvetica / Arial Black como solicita la marca
        sans: ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
        display: ['"Arial Black"', '"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"]
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "blob": "blob 12s ease-in-out infinite",
        "marquee": "marquee 30s linear infinite"
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" }
        },
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" }
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgb(229 231 235 / 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgb(229 231 235 / 0.4) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;

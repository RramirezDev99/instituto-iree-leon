import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef7ff",
          100: "#d9ecff",
          200: "#bcdeff",
          300: "#8dc9ff",
          400: "#56a9ff",
          500: "#2e87ff",
          600: "#1668f5",
          700: "#1253db",
          800: "#1545b0",
          900: "#173e8a",
          950: "#102656"
        },
        accent: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"]
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

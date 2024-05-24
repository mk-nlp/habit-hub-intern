import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        pink: "#F3C4FB",
        ash: "#F5F5F5",
        blue: "#BDE0FE",
        orange: "#FFC09F",
        yellow: "#FFEE93",
        lime: "#FCF5C7",
        green: "#ADF7B6",
        white: "#FDFDFD",
        purple: "#C67ED2",
        "pink-2": "#DEB5E4",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      lineHeight: {
        12: "5.5rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
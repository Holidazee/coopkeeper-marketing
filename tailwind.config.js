/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F3EBDB",
        "paper-dark": "#E8DCC2",
        ink: "#1F1B15",
        "ink-soft": "#433C30",
        "ink-muted": "#7B715E",
        rust: { DEFAULT: "#B4541E", dark: "#8C3E12", soft: "#E8B892" },
        moss: { DEFAULT: "#556B3C", dark: "#3E5128", soft: "#C7D1B1" },
        yolk: "#E6B547",
        dusk: { DEFAULT: "#5C7A8F", dark: "#3F5A6D" },
        // legacy aliases so any lingering usages still compile
        cream: "#F3EBDB",
      },
      fontFamily: {
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Fraunces"', "Georgia", "serif"],
        hand: ['"Caveat"', "cursive"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(14px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease forwards",
      },
    },
  },
  plugins: [],
};

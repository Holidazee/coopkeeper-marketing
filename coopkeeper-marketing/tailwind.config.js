/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FBF7F0",
        "off-white": "#FFFCF7",
        ink: "#2A2420",
        "warm-gray": "#5A5A57",
        "warm-gray-light": "#8A857A",
        "warm-border": "#ECE4D3",
        "warm-border-strong": "#D9CFB9",
        terracotta: {
          DEFAULT: "#E07A3A",
          dark: "#C66328",
          soft: "#FDE4D0",
          ink: "#8A3E15",
        },
        forest: {
          DEFAULT: "#1F3A2E",
          soft: "#DEEFD9",
        },
      },
      fontFamily: {
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Fraunces"', "Georgia", "serif"],
      },
      borderRadius: {
        xl2: "20px",
        xl3: "28px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(60,45,25,0.04)",
        card: "0 2px 6px rgba(60,45,25,0.05), 0 1px 2px rgba(60,45,25,0.04)",
        lift: "0 10px 30px -12px rgba(60,45,25,0.18), 0 4px 10px -4px rgba(60,45,25,0.06)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(14px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease forwards",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

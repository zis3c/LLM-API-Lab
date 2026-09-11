/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.html",
    "./src/**/*.{js,html}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "#000000",
        surface: "rgba(18, 18, 18, 0.7)",
        "surface-card": "rgba(15, 15, 15, 0.65)",
        "surface-border": "rgba(255, 255, 255, 0.1)",
        "surface-hover": "rgba(255, 255, 255, 0.05)",
        "text-main": "#ededed",
        "text-secondary": "#a1a1a1",
        "text-muted": "#737373",
        "brand-blue": "#0070f3",
        "brand-purple": "#7928ca",
        "brand-pink": "#ff0080",
        "brand-green": "#22c55e",
      },
      fontFamily: {
        sans: ["Geist", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["Geist Mono", "monospace"],
      },
      borderRadius: {
        default: "10px",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(135deg, #0070f3 0%, #7928ca 50%, #ff0080 100%)",
        "badge-gradient": "linear-gradient(90deg, rgba(0, 112, 243, 0.08), rgba(121, 40, 202, 0.08))",
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 112, 243, 0.3)",
        deck: "0 20px 50px rgba(0, 0, 0, 0.8), 0 0 25px rgba(0, 112, 243, 0.1)",
        "deck-active": "0 20px 50px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 112, 243, 0.4)",
      },
    },
  },
  plugins: [],
};

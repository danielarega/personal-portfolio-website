// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        lightHover: "#FAF4EB",
        darkHover: "#2A0E61",
        darkTheme: "#11001F",
      },
      fontFamily: {
        ovo: ["Ovo", "serif"],
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
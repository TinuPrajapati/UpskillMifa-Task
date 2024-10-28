/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "change-border": {
          "0%": { "background-image": "linear-gradient(purple, pink)" },
          "100%": { "background-image": "linear-gradient(red, blue)" }
        }
      }
    },
  },
  plugins: [],
}